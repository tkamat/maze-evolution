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
var G__23721 = arguments.length;
switch (G__23721) {
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
if(typeof cljs.core.async.t_cljs$core$async23722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23722 = (function (f,blockable,meta23723){
this.f = f;
this.blockable = blockable;
this.meta23723 = meta23723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23724,meta23723__$1){
var self__ = this;
var _23724__$1 = this;
return (new cljs.core.async.t_cljs$core$async23722(self__.f,self__.blockable,meta23723__$1));
});

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23724){
var self__ = this;
var _23724__$1 = this;
return self__.meta23723;
});

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta23723], null);
});

cljs.core.async.t_cljs$core$async23722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23722";

cljs.core.async.t_cljs$core$async23722.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async23722");
});

cljs.core.async.__GT_t_cljs$core$async23722 = (function cljs$core$async$__GT_t_cljs$core$async23722(f__$1,blockable__$1,meta23723){
return (new cljs.core.async.t_cljs$core$async23722(f__$1,blockable__$1,meta23723));
});

}

return (new cljs.core.async.t_cljs$core$async23722(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23728 = arguments.length;
switch (G__23728) {
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
var G__23731 = arguments.length;
switch (G__23731) {
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
var G__23734 = arguments.length;
switch (G__23734) {
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
var val_23736 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23736) : fn1.call(null,val_23736));
} else {
cljs.core.async.impl.dispatch.run(((function (val_23736,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23736) : fn1.call(null,val_23736));
});})(val_23736,ret))
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
var G__23738 = arguments.length;
switch (G__23738) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
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
var n__9433__auto___23740 = n;
var x_23741 = (0);
while(true){
if((x_23741 < n__9433__auto___23740)){
(a[x_23741] = (0));

var G__23742 = (x_23741 + (1));
x_23741 = G__23742;
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

var G__23743 = (i + (1));
i = G__23743;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async23744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23744 = (function (flag,meta23745){
this.flag = flag;
this.meta23745 = meta23745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23746,meta23745__$1){
var self__ = this;
var _23746__$1 = this;
return (new cljs.core.async.t_cljs$core$async23744(self__.flag,meta23745__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23746){
var self__ = this;
var _23746__$1 = this;
return self__.meta23745;
});})(flag))
;

cljs.core.async.t_cljs$core$async23744.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23744.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta23745], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23744";

cljs.core.async.t_cljs$core$async23744.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async23744");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23744 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23744(flag__$1,meta23745){
return (new cljs.core.async.t_cljs$core$async23744(flag__$1,meta23745));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23744(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23747 = (function (flag,cb,meta23748){
this.flag = flag;
this.cb = cb;
this.meta23748 = meta23748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23749,meta23748__$1){
var self__ = this;
var _23749__$1 = this;
return (new cljs.core.async.t_cljs$core$async23747(self__.flag,self__.cb,meta23748__$1));
});

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23749){
var self__ = this;
var _23749__$1 = this;
return self__.meta23748;
});

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta23748], null);
});

cljs.core.async.t_cljs$core$async23747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23747";

cljs.core.async.t_cljs$core$async23747.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async23747");
});

cljs.core.async.__GT_t_cljs$core$async23747 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23747(flag__$1,cb__$1,meta23748){
return (new cljs.core.async.t_cljs$core$async23747(flag__$1,cb__$1,meta23748));
});

}

return (new cljs.core.async.t_cljs$core$async23747(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23750_SHARP_){
var G__23752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23750_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23752) : fret.call(null,G__23752));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23751_SHARP_){
var G__23753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23751_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__23753) : fret.call(null,G__23753));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__8388__auto__ = wport;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23754 = (i + (1));
i = G__23754;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8388__auto__ = ret;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__8376__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__8376__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__9674__auto__ = [];
var len__9667__auto___23760 = arguments.length;
var i__9668__auto___23761 = (0);
while(true){
if((i__9668__auto___23761 < len__9667__auto___23760)){
args__9674__auto__.push((arguments[i__9668__auto___23761]));

var G__23762 = (i__9668__auto___23761 + (1));
i__9668__auto___23761 = G__23762;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((1) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9675__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23757){
var map__23758 = p__23757;
var map__23758__$1 = ((((!((map__23758 == null)))?((((map__23758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23758):map__23758);
var opts = map__23758__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23755){
var G__23756 = cljs.core.first(seq23755);
var seq23755__$1 = cljs.core.next(seq23755);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23756,seq23755__$1);
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
var G__23764 = arguments.length;
switch (G__23764) {
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
var c__23661__auto___23810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___23810){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___23810){
return (function (state_23788){
var state_val_23789 = (state_23788[(1)]);
if((state_val_23789 === (7))){
var inst_23784 = (state_23788[(2)]);
var state_23788__$1 = state_23788;
var statearr_23790_23811 = state_23788__$1;
(statearr_23790_23811[(2)] = inst_23784);

(statearr_23790_23811[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (1))){
var state_23788__$1 = state_23788;
var statearr_23791_23812 = state_23788__$1;
(statearr_23791_23812[(2)] = null);

(statearr_23791_23812[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (4))){
var inst_23767 = (state_23788[(7)]);
var inst_23767__$1 = (state_23788[(2)]);
var inst_23768 = (inst_23767__$1 == null);
var state_23788__$1 = (function (){var statearr_23792 = state_23788;
(statearr_23792[(7)] = inst_23767__$1);

return statearr_23792;
})();
if(cljs.core.truth_(inst_23768)){
var statearr_23793_23813 = state_23788__$1;
(statearr_23793_23813[(1)] = (5));

} else {
var statearr_23794_23814 = state_23788__$1;
(statearr_23794_23814[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (13))){
var state_23788__$1 = state_23788;
var statearr_23795_23815 = state_23788__$1;
(statearr_23795_23815[(2)] = null);

(statearr_23795_23815[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (6))){
var inst_23767 = (state_23788[(7)]);
var state_23788__$1 = state_23788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23788__$1,(11),to,inst_23767);
} else {
if((state_val_23789 === (3))){
var inst_23786 = (state_23788[(2)]);
var state_23788__$1 = state_23788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23788__$1,inst_23786);
} else {
if((state_val_23789 === (12))){
var state_23788__$1 = state_23788;
var statearr_23796_23816 = state_23788__$1;
(statearr_23796_23816[(2)] = null);

(statearr_23796_23816[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (2))){
var state_23788__$1 = state_23788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23788__$1,(4),from);
} else {
if((state_val_23789 === (11))){
var inst_23777 = (state_23788[(2)]);
var state_23788__$1 = state_23788;
if(cljs.core.truth_(inst_23777)){
var statearr_23797_23817 = state_23788__$1;
(statearr_23797_23817[(1)] = (12));

} else {
var statearr_23798_23818 = state_23788__$1;
(statearr_23798_23818[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (9))){
var state_23788__$1 = state_23788;
var statearr_23799_23819 = state_23788__$1;
(statearr_23799_23819[(2)] = null);

(statearr_23799_23819[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (5))){
var state_23788__$1 = state_23788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23800_23820 = state_23788__$1;
(statearr_23800_23820[(1)] = (8));

} else {
var statearr_23801_23821 = state_23788__$1;
(statearr_23801_23821[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (14))){
var inst_23782 = (state_23788[(2)]);
var state_23788__$1 = state_23788;
var statearr_23802_23822 = state_23788__$1;
(statearr_23802_23822[(2)] = inst_23782);

(statearr_23802_23822[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (10))){
var inst_23774 = (state_23788[(2)]);
var state_23788__$1 = state_23788;
var statearr_23803_23823 = state_23788__$1;
(statearr_23803_23823[(2)] = inst_23774);

(statearr_23803_23823[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23789 === (8))){
var inst_23771 = cljs.core.async.close_BANG_(to);
var state_23788__$1 = state_23788;
var statearr_23804_23824 = state_23788__$1;
(statearr_23804_23824[(2)] = inst_23771);

(statearr_23804_23824[(1)] = (10));


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
});})(c__23661__auto___23810))
;
return ((function (switch__23559__auto__,c__23661__auto___23810){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_23805 = [null,null,null,null,null,null,null,null];
(statearr_23805[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_23805[(1)] = (1));

return statearr_23805;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_23788){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_23788);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e23806){if((e23806 instanceof Object)){
var ex__23563__auto__ = e23806;
var statearr_23807_23825 = state_23788;
(statearr_23807_23825[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23788);

return cljs.core.cst$kw$recur;
} else {
throw e23806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__23826 = state_23788;
state_23788 = G__23826;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_23788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_23788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___23810))
})();
var state__23663__auto__ = (function (){var statearr_23808 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_23808[(6)] = c__23661__auto___23810);

return statearr_23808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___23810))
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
return (function (p__23827){
var vec__23828 = p__23827;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23828,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23828,(1),null);
var job = vec__23828;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__23661__auto___23999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___23999,res,vec__23828,v,p,job,jobs,results){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___23999,res,vec__23828,v,p,job,jobs,results){
return (function (state_23835){
var state_val_23836 = (state_23835[(1)]);
if((state_val_23836 === (1))){
var state_23835__$1 = state_23835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23835__$1,(2),res,v);
} else {
if((state_val_23836 === (2))){
var inst_23832 = (state_23835[(2)]);
var inst_23833 = cljs.core.async.close_BANG_(res);
var state_23835__$1 = (function (){var statearr_23837 = state_23835;
(statearr_23837[(7)] = inst_23832);

return statearr_23837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23835__$1,inst_23833);
} else {
return null;
}
}
});})(c__23661__auto___23999,res,vec__23828,v,p,job,jobs,results))
;
return ((function (switch__23559__auto__,c__23661__auto___23999,res,vec__23828,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0 = (function (){
var statearr_23838 = [null,null,null,null,null,null,null,null];
(statearr_23838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__);

(statearr_23838[(1)] = (1));

return statearr_23838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1 = (function (state_23835){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_23835);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e23839){if((e23839 instanceof Object)){
var ex__23563__auto__ = e23839;
var statearr_23840_24000 = state_23835;
(statearr_23840_24000[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23835);

return cljs.core.cst$kw$recur;
} else {
throw e23839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24001 = state_23835;
state_23835 = G__24001;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = function(state_23835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1.call(this,state_23835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___23999,res,vec__23828,v,p,job,jobs,results))
})();
var state__23663__auto__ = (function (){var statearr_23841 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_23841[(6)] = c__23661__auto___23999);

return statearr_23841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___23999,res,vec__23828,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23842){
var vec__23843 = p__23842;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23843,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23843,(1),null);
var job = vec__23843;
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
var n__9433__auto___24002 = n;
var __24003 = (0);
while(true){
if((__24003 < n__9433__auto___24002)){
var G__23846_24004 = type;
var G__23846_24005__$1 = (((G__23846_24004 instanceof cljs.core.Keyword))?G__23846_24004.fqn:null);
switch (G__23846_24005__$1) {
case "compute":
var c__23661__auto___24007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24003,c__23661__auto___24007,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (__24003,c__23661__auto___24007,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async){
return (function (state_23859){
var state_val_23860 = (state_23859[(1)]);
if((state_val_23860 === (1))){
var state_23859__$1 = state_23859;
var statearr_23861_24008 = state_23859__$1;
(statearr_23861_24008[(2)] = null);

(statearr_23861_24008[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23860 === (2))){
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23859__$1,(4),jobs);
} else {
if((state_val_23860 === (3))){
var inst_23857 = (state_23859[(2)]);
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23859__$1,inst_23857);
} else {
if((state_val_23860 === (4))){
var inst_23849 = (state_23859[(2)]);
var inst_23850 = process(inst_23849);
var state_23859__$1 = state_23859;
if(cljs.core.truth_(inst_23850)){
var statearr_23862_24009 = state_23859__$1;
(statearr_23862_24009[(1)] = (5));

} else {
var statearr_23863_24010 = state_23859__$1;
(statearr_23863_24010[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23860 === (5))){
var state_23859__$1 = state_23859;
var statearr_23864_24011 = state_23859__$1;
(statearr_23864_24011[(2)] = null);

(statearr_23864_24011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23860 === (6))){
var state_23859__$1 = state_23859;
var statearr_23865_24012 = state_23859__$1;
(statearr_23865_24012[(2)] = null);

(statearr_23865_24012[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23860 === (7))){
var inst_23855 = (state_23859[(2)]);
var state_23859__$1 = state_23859;
var statearr_23866_24013 = state_23859__$1;
(statearr_23866_24013[(2)] = inst_23855);

(statearr_23866_24013[(1)] = (3));


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
});})(__24003,c__23661__auto___24007,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async))
;
return ((function (__24003,switch__23559__auto__,c__23661__auto___24007,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0 = (function (){
var statearr_23867 = [null,null,null,null,null,null,null];
(statearr_23867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__);

(statearr_23867[(1)] = (1));

return statearr_23867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1 = (function (state_23859){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_23859);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e23868){if((e23868 instanceof Object)){
var ex__23563__auto__ = e23868;
var statearr_23869_24014 = state_23859;
(statearr_23869_24014[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23859);

return cljs.core.cst$kw$recur;
} else {
throw e23868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24015 = state_23859;
state_23859 = G__24015;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = function(state_23859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1.call(this,state_23859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__;
})()
;})(__24003,switch__23559__auto__,c__23661__auto___24007,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async))
})();
var state__23663__auto__ = (function (){var statearr_23870 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_23870[(6)] = c__23661__auto___24007);

return statearr_23870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(__24003,c__23661__auto___24007,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async))
);


break;
case "async":
var c__23661__auto___24016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24003,c__23661__auto___24016,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (__24003,c__23661__auto___24016,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async){
return (function (state_23883){
var state_val_23884 = (state_23883[(1)]);
if((state_val_23884 === (1))){
var state_23883__$1 = state_23883;
var statearr_23885_24017 = state_23883__$1;
(statearr_23885_24017[(2)] = null);

(statearr_23885_24017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23884 === (2))){
var state_23883__$1 = state_23883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23883__$1,(4),jobs);
} else {
if((state_val_23884 === (3))){
var inst_23881 = (state_23883[(2)]);
var state_23883__$1 = state_23883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23883__$1,inst_23881);
} else {
if((state_val_23884 === (4))){
var inst_23873 = (state_23883[(2)]);
var inst_23874 = async(inst_23873);
var state_23883__$1 = state_23883;
if(cljs.core.truth_(inst_23874)){
var statearr_23886_24018 = state_23883__$1;
(statearr_23886_24018[(1)] = (5));

} else {
var statearr_23887_24019 = state_23883__$1;
(statearr_23887_24019[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23884 === (5))){
var state_23883__$1 = state_23883;
var statearr_23888_24020 = state_23883__$1;
(statearr_23888_24020[(2)] = null);

(statearr_23888_24020[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23884 === (6))){
var state_23883__$1 = state_23883;
var statearr_23889_24021 = state_23883__$1;
(statearr_23889_24021[(2)] = null);

(statearr_23889_24021[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23884 === (7))){
var inst_23879 = (state_23883[(2)]);
var state_23883__$1 = state_23883;
var statearr_23890_24022 = state_23883__$1;
(statearr_23890_24022[(2)] = inst_23879);

(statearr_23890_24022[(1)] = (3));


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
});})(__24003,c__23661__auto___24016,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async))
;
return ((function (__24003,switch__23559__auto__,c__23661__auto___24016,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0 = (function (){
var statearr_23891 = [null,null,null,null,null,null,null];
(statearr_23891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__);

(statearr_23891[(1)] = (1));

return statearr_23891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1 = (function (state_23883){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_23883);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e23892){if((e23892 instanceof Object)){
var ex__23563__auto__ = e23892;
var statearr_23893_24023 = state_23883;
(statearr_23893_24023[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23883);

return cljs.core.cst$kw$recur;
} else {
throw e23892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24024 = state_23883;
state_23883 = G__24024;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = function(state_23883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1.call(this,state_23883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__;
})()
;})(__24003,switch__23559__auto__,c__23661__auto___24016,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async))
})();
var state__23663__auto__ = (function (){var statearr_23894 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_23894[(6)] = c__23661__auto___24016);

return statearr_23894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(__24003,c__23661__auto___24016,G__23846_24004,G__23846_24005__$1,n__9433__auto___24002,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23846_24005__$1)].join('')));

}

var G__24025 = (__24003 + (1));
__24003 = G__24025;
continue;
} else {
}
break;
}

var c__23661__auto___24026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___24026,jobs,results,process,async){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___24026,jobs,results,process,async){
return (function (state_23916){
var state_val_23917 = (state_23916[(1)]);
if((state_val_23917 === (1))){
var state_23916__$1 = state_23916;
var statearr_23918_24027 = state_23916__$1;
(statearr_23918_24027[(2)] = null);

(statearr_23918_24027[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23917 === (2))){
var state_23916__$1 = state_23916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23916__$1,(4),from);
} else {
if((state_val_23917 === (3))){
var inst_23914 = (state_23916[(2)]);
var state_23916__$1 = state_23916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23916__$1,inst_23914);
} else {
if((state_val_23917 === (4))){
var inst_23897 = (state_23916[(7)]);
var inst_23897__$1 = (state_23916[(2)]);
var inst_23898 = (inst_23897__$1 == null);
var state_23916__$1 = (function (){var statearr_23919 = state_23916;
(statearr_23919[(7)] = inst_23897__$1);

return statearr_23919;
})();
if(cljs.core.truth_(inst_23898)){
var statearr_23920_24028 = state_23916__$1;
(statearr_23920_24028[(1)] = (5));

} else {
var statearr_23921_24029 = state_23916__$1;
(statearr_23921_24029[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23917 === (5))){
var inst_23900 = cljs.core.async.close_BANG_(jobs);
var state_23916__$1 = state_23916;
var statearr_23922_24030 = state_23916__$1;
(statearr_23922_24030[(2)] = inst_23900);

(statearr_23922_24030[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23917 === (6))){
var inst_23897 = (state_23916[(7)]);
var inst_23902 = (state_23916[(8)]);
var inst_23902__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_23903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23904 = [inst_23897,inst_23902__$1];
var inst_23905 = (new cljs.core.PersistentVector(null,2,(5),inst_23903,inst_23904,null));
var state_23916__$1 = (function (){var statearr_23923 = state_23916;
(statearr_23923[(8)] = inst_23902__$1);

return statearr_23923;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23916__$1,(8),jobs,inst_23905);
} else {
if((state_val_23917 === (7))){
var inst_23912 = (state_23916[(2)]);
var state_23916__$1 = state_23916;
var statearr_23924_24031 = state_23916__$1;
(statearr_23924_24031[(2)] = inst_23912);

(statearr_23924_24031[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23917 === (8))){
var inst_23902 = (state_23916[(8)]);
var inst_23907 = (state_23916[(2)]);
var state_23916__$1 = (function (){var statearr_23925 = state_23916;
(statearr_23925[(9)] = inst_23907);

return statearr_23925;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23916__$1,(9),results,inst_23902);
} else {
if((state_val_23917 === (9))){
var inst_23909 = (state_23916[(2)]);
var state_23916__$1 = (function (){var statearr_23926 = state_23916;
(statearr_23926[(10)] = inst_23909);

return statearr_23926;
})();
var statearr_23927_24032 = state_23916__$1;
(statearr_23927_24032[(2)] = null);

(statearr_23927_24032[(1)] = (2));


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
});})(c__23661__auto___24026,jobs,results,process,async))
;
return ((function (switch__23559__auto__,c__23661__auto___24026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0 = (function (){
var statearr_23928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__);

(statearr_23928[(1)] = (1));

return statearr_23928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1 = (function (state_23916){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_23916);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e23929){if((e23929 instanceof Object)){
var ex__23563__auto__ = e23929;
var statearr_23930_24033 = state_23916;
(statearr_23930_24033[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23916);

return cljs.core.cst$kw$recur;
} else {
throw e23929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24034 = state_23916;
state_23916 = G__24034;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = function(state_23916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1.call(this,state_23916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___24026,jobs,results,process,async))
})();
var state__23663__auto__ = (function (){var statearr_23931 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_23931[(6)] = c__23661__auto___24026);

return statearr_23931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___24026,jobs,results,process,async))
);


var c__23661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto__,jobs,results,process,async){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto__,jobs,results,process,async){
return (function (state_23969){
var state_val_23970 = (state_23969[(1)]);
if((state_val_23970 === (7))){
var inst_23965 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23971_24035 = state_23969__$1;
(statearr_23971_24035[(2)] = inst_23965);

(statearr_23971_24035[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (20))){
var state_23969__$1 = state_23969;
var statearr_23972_24036 = state_23969__$1;
(statearr_23972_24036[(2)] = null);

(statearr_23972_24036[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (1))){
var state_23969__$1 = state_23969;
var statearr_23973_24037 = state_23969__$1;
(statearr_23973_24037[(2)] = null);

(statearr_23973_24037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (4))){
var inst_23934 = (state_23969[(7)]);
var inst_23934__$1 = (state_23969[(2)]);
var inst_23935 = (inst_23934__$1 == null);
var state_23969__$1 = (function (){var statearr_23974 = state_23969;
(statearr_23974[(7)] = inst_23934__$1);

return statearr_23974;
})();
if(cljs.core.truth_(inst_23935)){
var statearr_23975_24038 = state_23969__$1;
(statearr_23975_24038[(1)] = (5));

} else {
var statearr_23976_24039 = state_23969__$1;
(statearr_23976_24039[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (15))){
var inst_23947 = (state_23969[(8)]);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23969__$1,(18),to,inst_23947);
} else {
if((state_val_23970 === (21))){
var inst_23960 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23977_24040 = state_23969__$1;
(statearr_23977_24040[(2)] = inst_23960);

(statearr_23977_24040[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (13))){
var inst_23962 = (state_23969[(2)]);
var state_23969__$1 = (function (){var statearr_23978 = state_23969;
(statearr_23978[(9)] = inst_23962);

return statearr_23978;
})();
var statearr_23979_24041 = state_23969__$1;
(statearr_23979_24041[(2)] = null);

(statearr_23979_24041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (6))){
var inst_23934 = (state_23969[(7)]);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23969__$1,(11),inst_23934);
} else {
if((state_val_23970 === (17))){
var inst_23955 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
if(cljs.core.truth_(inst_23955)){
var statearr_23980_24042 = state_23969__$1;
(statearr_23980_24042[(1)] = (19));

} else {
var statearr_23981_24043 = state_23969__$1;
(statearr_23981_24043[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (3))){
var inst_23967 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23969__$1,inst_23967);
} else {
if((state_val_23970 === (12))){
var inst_23944 = (state_23969[(10)]);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23969__$1,(14),inst_23944);
} else {
if((state_val_23970 === (2))){
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23969__$1,(4),results);
} else {
if((state_val_23970 === (19))){
var state_23969__$1 = state_23969;
var statearr_23982_24044 = state_23969__$1;
(statearr_23982_24044[(2)] = null);

(statearr_23982_24044[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (11))){
var inst_23944 = (state_23969[(2)]);
var state_23969__$1 = (function (){var statearr_23983 = state_23969;
(statearr_23983[(10)] = inst_23944);

return statearr_23983;
})();
var statearr_23984_24045 = state_23969__$1;
(statearr_23984_24045[(2)] = null);

(statearr_23984_24045[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (9))){
var state_23969__$1 = state_23969;
var statearr_23985_24046 = state_23969__$1;
(statearr_23985_24046[(2)] = null);

(statearr_23985_24046[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (5))){
var state_23969__$1 = state_23969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23986_24047 = state_23969__$1;
(statearr_23986_24047[(1)] = (8));

} else {
var statearr_23987_24048 = state_23969__$1;
(statearr_23987_24048[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (14))){
var inst_23949 = (state_23969[(11)]);
var inst_23947 = (state_23969[(8)]);
var inst_23947__$1 = (state_23969[(2)]);
var inst_23948 = (inst_23947__$1 == null);
var inst_23949__$1 = cljs.core.not(inst_23948);
var state_23969__$1 = (function (){var statearr_23988 = state_23969;
(statearr_23988[(11)] = inst_23949__$1);

(statearr_23988[(8)] = inst_23947__$1);

return statearr_23988;
})();
if(inst_23949__$1){
var statearr_23989_24049 = state_23969__$1;
(statearr_23989_24049[(1)] = (15));

} else {
var statearr_23990_24050 = state_23969__$1;
(statearr_23990_24050[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (16))){
var inst_23949 = (state_23969[(11)]);
var state_23969__$1 = state_23969;
var statearr_23991_24051 = state_23969__$1;
(statearr_23991_24051[(2)] = inst_23949);

(statearr_23991_24051[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (10))){
var inst_23941 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23992_24052 = state_23969__$1;
(statearr_23992_24052[(2)] = inst_23941);

(statearr_23992_24052[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (18))){
var inst_23952 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23993_24053 = state_23969__$1;
(statearr_23993_24053[(2)] = inst_23952);

(statearr_23993_24053[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23970 === (8))){
var inst_23938 = cljs.core.async.close_BANG_(to);
var state_23969__$1 = state_23969;
var statearr_23994_24054 = state_23969__$1;
(statearr_23994_24054[(2)] = inst_23938);

(statearr_23994_24054[(1)] = (10));


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
});})(c__23661__auto__,jobs,results,process,async))
;
return ((function (switch__23559__auto__,c__23661__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0 = (function (){
var statearr_23995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__);

(statearr_23995[(1)] = (1));

return statearr_23995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1 = (function (state_23969){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_23969);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e23996){if((e23996 instanceof Object)){
var ex__23563__auto__ = e23996;
var statearr_23997_24055 = state_23969;
(statearr_23997_24055[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23969);

return cljs.core.cst$kw$recur;
} else {
throw e23996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24056 = state_23969;
state_23969 = G__24056;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__ = function(state_23969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1.call(this,state_23969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto__,jobs,results,process,async))
})();
var state__23663__auto__ = (function (){var statearr_23998 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_23998[(6)] = c__23661__auto__);

return statearr_23998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto__,jobs,results,process,async))
);

return c__23661__auto__;
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
var G__24058 = arguments.length;
switch (G__24058) {
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
var G__24061 = arguments.length;
switch (G__24061) {
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
var G__24064 = arguments.length;
switch (G__24064) {
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
var c__23661__auto___24113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___24113,tc,fc){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___24113,tc,fc){
return (function (state_24090){
var state_val_24091 = (state_24090[(1)]);
if((state_val_24091 === (7))){
var inst_24086 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
var statearr_24092_24114 = state_24090__$1;
(statearr_24092_24114[(2)] = inst_24086);

(statearr_24092_24114[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (1))){
var state_24090__$1 = state_24090;
var statearr_24093_24115 = state_24090__$1;
(statearr_24093_24115[(2)] = null);

(statearr_24093_24115[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (4))){
var inst_24067 = (state_24090[(7)]);
var inst_24067__$1 = (state_24090[(2)]);
var inst_24068 = (inst_24067__$1 == null);
var state_24090__$1 = (function (){var statearr_24094 = state_24090;
(statearr_24094[(7)] = inst_24067__$1);

return statearr_24094;
})();
if(cljs.core.truth_(inst_24068)){
var statearr_24095_24116 = state_24090__$1;
(statearr_24095_24116[(1)] = (5));

} else {
var statearr_24096_24117 = state_24090__$1;
(statearr_24096_24117[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (13))){
var state_24090__$1 = state_24090;
var statearr_24097_24118 = state_24090__$1;
(statearr_24097_24118[(2)] = null);

(statearr_24097_24118[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (6))){
var inst_24067 = (state_24090[(7)]);
var inst_24073 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24067) : p.call(null,inst_24067));
var state_24090__$1 = state_24090;
if(cljs.core.truth_(inst_24073)){
var statearr_24098_24119 = state_24090__$1;
(statearr_24098_24119[(1)] = (9));

} else {
var statearr_24099_24120 = state_24090__$1;
(statearr_24099_24120[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (3))){
var inst_24088 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24090__$1,inst_24088);
} else {
if((state_val_24091 === (12))){
var state_24090__$1 = state_24090;
var statearr_24100_24121 = state_24090__$1;
(statearr_24100_24121[(2)] = null);

(statearr_24100_24121[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (2))){
var state_24090__$1 = state_24090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24090__$1,(4),ch);
} else {
if((state_val_24091 === (11))){
var inst_24067 = (state_24090[(7)]);
var inst_24077 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24090__$1,(8),inst_24077,inst_24067);
} else {
if((state_val_24091 === (9))){
var state_24090__$1 = state_24090;
var statearr_24101_24122 = state_24090__$1;
(statearr_24101_24122[(2)] = tc);

(statearr_24101_24122[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (5))){
var inst_24070 = cljs.core.async.close_BANG_(tc);
var inst_24071 = cljs.core.async.close_BANG_(fc);
var state_24090__$1 = (function (){var statearr_24102 = state_24090;
(statearr_24102[(8)] = inst_24070);

return statearr_24102;
})();
var statearr_24103_24123 = state_24090__$1;
(statearr_24103_24123[(2)] = inst_24071);

(statearr_24103_24123[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (14))){
var inst_24084 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
var statearr_24104_24124 = state_24090__$1;
(statearr_24104_24124[(2)] = inst_24084);

(statearr_24104_24124[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (10))){
var state_24090__$1 = state_24090;
var statearr_24105_24125 = state_24090__$1;
(statearr_24105_24125[(2)] = fc);

(statearr_24105_24125[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24091 === (8))){
var inst_24079 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
if(cljs.core.truth_(inst_24079)){
var statearr_24106_24126 = state_24090__$1;
(statearr_24106_24126[(1)] = (12));

} else {
var statearr_24107_24127 = state_24090__$1;
(statearr_24107_24127[(1)] = (13));

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
});})(c__23661__auto___24113,tc,fc))
;
return ((function (switch__23559__auto__,c__23661__auto___24113,tc,fc){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_24108 = [null,null,null,null,null,null,null,null,null];
(statearr_24108[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_24108[(1)] = (1));

return statearr_24108;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_24090){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_24090);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e24109){if((e24109 instanceof Object)){
var ex__23563__auto__ = e24109;
var statearr_24110_24128 = state_24090;
(statearr_24110_24128[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24090);

return cljs.core.cst$kw$recur;
} else {
throw e24109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24129 = state_24090;
state_24090 = G__24129;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_24090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_24090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___24113,tc,fc))
})();
var state__23663__auto__ = (function (){var statearr_24111 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_24111[(6)] = c__23661__auto___24113);

return statearr_24111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___24113,tc,fc))
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
var c__23661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto__){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto__){
return (function (state_24150){
var state_val_24151 = (state_24150[(1)]);
if((state_val_24151 === (7))){
var inst_24146 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24152_24170 = state_24150__$1;
(statearr_24152_24170[(2)] = inst_24146);

(statearr_24152_24170[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24151 === (1))){
var inst_24130 = init;
var state_24150__$1 = (function (){var statearr_24153 = state_24150;
(statearr_24153[(7)] = inst_24130);

return statearr_24153;
})();
var statearr_24154_24171 = state_24150__$1;
(statearr_24154_24171[(2)] = null);

(statearr_24154_24171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24151 === (4))){
var inst_24133 = (state_24150[(8)]);
var inst_24133__$1 = (state_24150[(2)]);
var inst_24134 = (inst_24133__$1 == null);
var state_24150__$1 = (function (){var statearr_24155 = state_24150;
(statearr_24155[(8)] = inst_24133__$1);

return statearr_24155;
})();
if(cljs.core.truth_(inst_24134)){
var statearr_24156_24172 = state_24150__$1;
(statearr_24156_24172[(1)] = (5));

} else {
var statearr_24157_24173 = state_24150__$1;
(statearr_24157_24173[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24151 === (6))){
var inst_24133 = (state_24150[(8)]);
var inst_24137 = (state_24150[(9)]);
var inst_24130 = (state_24150[(7)]);
var inst_24137__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24130,inst_24133) : f.call(null,inst_24130,inst_24133));
var inst_24138 = cljs.core.reduced_QMARK_(inst_24137__$1);
var state_24150__$1 = (function (){var statearr_24158 = state_24150;
(statearr_24158[(9)] = inst_24137__$1);

return statearr_24158;
})();
if(inst_24138){
var statearr_24159_24174 = state_24150__$1;
(statearr_24159_24174[(1)] = (8));

} else {
var statearr_24160_24175 = state_24150__$1;
(statearr_24160_24175[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24151 === (3))){
var inst_24148 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24150__$1,inst_24148);
} else {
if((state_val_24151 === (2))){
var state_24150__$1 = state_24150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24150__$1,(4),ch);
} else {
if((state_val_24151 === (9))){
var inst_24137 = (state_24150[(9)]);
var inst_24130 = inst_24137;
var state_24150__$1 = (function (){var statearr_24161 = state_24150;
(statearr_24161[(7)] = inst_24130);

return statearr_24161;
})();
var statearr_24162_24176 = state_24150__$1;
(statearr_24162_24176[(2)] = null);

(statearr_24162_24176[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24151 === (5))){
var inst_24130 = (state_24150[(7)]);
var state_24150__$1 = state_24150;
var statearr_24163_24177 = state_24150__$1;
(statearr_24163_24177[(2)] = inst_24130);

(statearr_24163_24177[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24151 === (10))){
var inst_24144 = (state_24150[(2)]);
var state_24150__$1 = state_24150;
var statearr_24164_24178 = state_24150__$1;
(statearr_24164_24178[(2)] = inst_24144);

(statearr_24164_24178[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24151 === (8))){
var inst_24137 = (state_24150[(9)]);
var inst_24140 = cljs.core.deref(inst_24137);
var state_24150__$1 = state_24150;
var statearr_24165_24179 = state_24150__$1;
(statearr_24165_24179[(2)] = inst_24140);

(statearr_24165_24179[(1)] = (10));


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
});})(c__23661__auto__))
;
return ((function (switch__23559__auto__,c__23661__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23560__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23560__auto____0 = (function (){
var statearr_24166 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24166[(0)] = cljs$core$async$reduce_$_state_machine__23560__auto__);

(statearr_24166[(1)] = (1));

return statearr_24166;
});
var cljs$core$async$reduce_$_state_machine__23560__auto____1 = (function (state_24150){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_24150);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e24167){if((e24167 instanceof Object)){
var ex__23563__auto__ = e24167;
var statearr_24168_24180 = state_24150;
(statearr_24168_24180[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24150);

return cljs.core.cst$kw$recur;
} else {
throw e24167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24181 = state_24150;
state_24150 = G__24181;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23560__auto__ = function(state_24150){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23560__auto____1.call(this,state_24150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23560__auto____0;
cljs$core$async$reduce_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23560__auto____1;
return cljs$core$async$reduce_$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto__))
})();
var state__23663__auto__ = (function (){var statearr_24169 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_24169[(6)] = c__23661__auto__);

return statearr_24169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto__))
);

return c__23661__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__23661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto__,f__$1){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto__,f__$1){
return (function (state_24187){
var state_val_24188 = (state_24187[(1)]);
if((state_val_24188 === (1))){
var inst_24182 = cljs.core.async.reduce(f__$1,init,ch);
var state_24187__$1 = state_24187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24187__$1,(2),inst_24182);
} else {
if((state_val_24188 === (2))){
var inst_24184 = (state_24187[(2)]);
var inst_24185 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_24184) : f__$1.call(null,inst_24184));
var state_24187__$1 = state_24187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24187__$1,inst_24185);
} else {
return null;
}
}
});})(c__23661__auto__,f__$1))
;
return ((function (switch__23559__auto__,c__23661__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23560__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23560__auto____0 = (function (){
var statearr_24189 = [null,null,null,null,null,null,null];
(statearr_24189[(0)] = cljs$core$async$transduce_$_state_machine__23560__auto__);

(statearr_24189[(1)] = (1));

return statearr_24189;
});
var cljs$core$async$transduce_$_state_machine__23560__auto____1 = (function (state_24187){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_24187);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e24190){if((e24190 instanceof Object)){
var ex__23563__auto__ = e24190;
var statearr_24191_24193 = state_24187;
(statearr_24191_24193[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24187);

return cljs.core.cst$kw$recur;
} else {
throw e24190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24194 = state_24187;
state_24187 = G__24194;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23560__auto__ = function(state_24187){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23560__auto____1.call(this,state_24187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23560__auto____0;
cljs$core$async$transduce_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23560__auto____1;
return cljs$core$async$transduce_$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto__,f__$1))
})();
var state__23663__auto__ = (function (){var statearr_24192 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_24192[(6)] = c__23661__auto__);

return statearr_24192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto__,f__$1))
);

return c__23661__auto__;
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
var G__24196 = arguments.length;
switch (G__24196) {
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
var c__23661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto__){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto__){
return (function (state_24221){
var state_val_24222 = (state_24221[(1)]);
if((state_val_24222 === (7))){
var inst_24203 = (state_24221[(2)]);
var state_24221__$1 = state_24221;
var statearr_24223_24244 = state_24221__$1;
(statearr_24223_24244[(2)] = inst_24203);

(statearr_24223_24244[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (1))){
var inst_24197 = cljs.core.seq(coll);
var inst_24198 = inst_24197;
var state_24221__$1 = (function (){var statearr_24224 = state_24221;
(statearr_24224[(7)] = inst_24198);

return statearr_24224;
})();
var statearr_24225_24245 = state_24221__$1;
(statearr_24225_24245[(2)] = null);

(statearr_24225_24245[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (4))){
var inst_24198 = (state_24221[(7)]);
var inst_24201 = cljs.core.first(inst_24198);
var state_24221__$1 = state_24221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24221__$1,(7),ch,inst_24201);
} else {
if((state_val_24222 === (13))){
var inst_24215 = (state_24221[(2)]);
var state_24221__$1 = state_24221;
var statearr_24226_24246 = state_24221__$1;
(statearr_24226_24246[(2)] = inst_24215);

(statearr_24226_24246[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (6))){
var inst_24206 = (state_24221[(2)]);
var state_24221__$1 = state_24221;
if(cljs.core.truth_(inst_24206)){
var statearr_24227_24247 = state_24221__$1;
(statearr_24227_24247[(1)] = (8));

} else {
var statearr_24228_24248 = state_24221__$1;
(statearr_24228_24248[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (3))){
var inst_24219 = (state_24221[(2)]);
var state_24221__$1 = state_24221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24221__$1,inst_24219);
} else {
if((state_val_24222 === (12))){
var state_24221__$1 = state_24221;
var statearr_24229_24249 = state_24221__$1;
(statearr_24229_24249[(2)] = null);

(statearr_24229_24249[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (2))){
var inst_24198 = (state_24221[(7)]);
var state_24221__$1 = state_24221;
if(cljs.core.truth_(inst_24198)){
var statearr_24230_24250 = state_24221__$1;
(statearr_24230_24250[(1)] = (4));

} else {
var statearr_24231_24251 = state_24221__$1;
(statearr_24231_24251[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (11))){
var inst_24212 = cljs.core.async.close_BANG_(ch);
var state_24221__$1 = state_24221;
var statearr_24232_24252 = state_24221__$1;
(statearr_24232_24252[(2)] = inst_24212);

(statearr_24232_24252[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (9))){
var state_24221__$1 = state_24221;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24233_24253 = state_24221__$1;
(statearr_24233_24253[(1)] = (11));

} else {
var statearr_24234_24254 = state_24221__$1;
(statearr_24234_24254[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (5))){
var inst_24198 = (state_24221[(7)]);
var state_24221__$1 = state_24221;
var statearr_24235_24255 = state_24221__$1;
(statearr_24235_24255[(2)] = inst_24198);

(statearr_24235_24255[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (10))){
var inst_24217 = (state_24221[(2)]);
var state_24221__$1 = state_24221;
var statearr_24236_24256 = state_24221__$1;
(statearr_24236_24256[(2)] = inst_24217);

(statearr_24236_24256[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24222 === (8))){
var inst_24198 = (state_24221[(7)]);
var inst_24208 = cljs.core.next(inst_24198);
var inst_24198__$1 = inst_24208;
var state_24221__$1 = (function (){var statearr_24237 = state_24221;
(statearr_24237[(7)] = inst_24198__$1);

return statearr_24237;
})();
var statearr_24238_24257 = state_24221__$1;
(statearr_24238_24257[(2)] = null);

(statearr_24238_24257[(1)] = (2));


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
});})(c__23661__auto__))
;
return ((function (switch__23559__auto__,c__23661__auto__){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_24239 = [null,null,null,null,null,null,null,null];
(statearr_24239[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_24239[(1)] = (1));

return statearr_24239;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_24221){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_24221);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e24240){if((e24240 instanceof Object)){
var ex__23563__auto__ = e24240;
var statearr_24241_24258 = state_24221;
(statearr_24241_24258[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24221);

return cljs.core.cst$kw$recur;
} else {
throw e24240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24259 = state_24221;
state_24221 = G__24259;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_24221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_24221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto__))
})();
var state__23663__auto__ = (function (){var statearr_24242 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_24242[(6)] = c__23661__auto__);

return statearr_24242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto__))
);

return c__23661__auto__;
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
var x__9121__auto__ = (((_ == null))?null:_);
var m__9122__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9122__auto__.call(null,_));
} else {
var m__9122__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9122__auto____$1.call(null,_));
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
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9122__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__9122__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9122__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9122__auto__.call(null,m,ch));
} else {
var m__9122__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9122__auto____$1.call(null,m,ch));
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
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9122__auto__.call(null,m));
} else {
var m__9122__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9122__auto____$1.call(null,m));
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
if(typeof cljs.core.async.t_cljs$core$async24260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24260 = (function (ch,cs,meta24261){
this.ch = ch;
this.cs = cs;
this.meta24261 = meta24261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24262,meta24261__$1){
var self__ = this;
var _24262__$1 = this;
return (new cljs.core.async.t_cljs$core$async24260(self__.ch,self__.cs,meta24261__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24262){
var self__ = this;
var _24262__$1 = this;
return self__.meta24261;
});})(cs))
;

cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24260.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24260.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta24261], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24260";

cljs.core.async.t_cljs$core$async24260.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async24260");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24260 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24260(ch__$1,cs__$1,meta24261){
return (new cljs.core.async.t_cljs$core$async24260(ch__$1,cs__$1,meta24261));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24260(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23661__auto___24482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___24482,cs,m,dchan,dctr,done){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___24482,cs,m,dchan,dctr,done){
return (function (state_24397){
var state_val_24398 = (state_24397[(1)]);
if((state_val_24398 === (7))){
var inst_24393 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24399_24483 = state_24397__$1;
(statearr_24399_24483[(2)] = inst_24393);

(statearr_24399_24483[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (20))){
var inst_24296 = (state_24397[(7)]);
var inst_24308 = cljs.core.first(inst_24296);
var inst_24309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24308,(0),null);
var inst_24310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24308,(1),null);
var state_24397__$1 = (function (){var statearr_24400 = state_24397;
(statearr_24400[(8)] = inst_24309);

return statearr_24400;
})();
if(cljs.core.truth_(inst_24310)){
var statearr_24401_24484 = state_24397__$1;
(statearr_24401_24484[(1)] = (22));

} else {
var statearr_24402_24485 = state_24397__$1;
(statearr_24402_24485[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (27))){
var inst_24265 = (state_24397[(9)]);
var inst_24345 = (state_24397[(10)]);
var inst_24338 = (state_24397[(11)]);
var inst_24340 = (state_24397[(12)]);
var inst_24345__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24338,inst_24340);
var inst_24346 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24345__$1,inst_24265,done);
var state_24397__$1 = (function (){var statearr_24403 = state_24397;
(statearr_24403[(10)] = inst_24345__$1);

return statearr_24403;
})();
if(cljs.core.truth_(inst_24346)){
var statearr_24404_24486 = state_24397__$1;
(statearr_24404_24486[(1)] = (30));

} else {
var statearr_24405_24487 = state_24397__$1;
(statearr_24405_24487[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (1))){
var state_24397__$1 = state_24397;
var statearr_24406_24488 = state_24397__$1;
(statearr_24406_24488[(2)] = null);

(statearr_24406_24488[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (24))){
var inst_24296 = (state_24397[(7)]);
var inst_24315 = (state_24397[(2)]);
var inst_24316 = cljs.core.next(inst_24296);
var inst_24274 = inst_24316;
var inst_24275 = null;
var inst_24276 = (0);
var inst_24277 = (0);
var state_24397__$1 = (function (){var statearr_24407 = state_24397;
(statearr_24407[(13)] = inst_24275);

(statearr_24407[(14)] = inst_24276);

(statearr_24407[(15)] = inst_24274);

(statearr_24407[(16)] = inst_24277);

(statearr_24407[(17)] = inst_24315);

return statearr_24407;
})();
var statearr_24408_24489 = state_24397__$1;
(statearr_24408_24489[(2)] = null);

(statearr_24408_24489[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (39))){
var state_24397__$1 = state_24397;
var statearr_24412_24490 = state_24397__$1;
(statearr_24412_24490[(2)] = null);

(statearr_24412_24490[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (4))){
var inst_24265 = (state_24397[(9)]);
var inst_24265__$1 = (state_24397[(2)]);
var inst_24266 = (inst_24265__$1 == null);
var state_24397__$1 = (function (){var statearr_24413 = state_24397;
(statearr_24413[(9)] = inst_24265__$1);

return statearr_24413;
})();
if(cljs.core.truth_(inst_24266)){
var statearr_24414_24491 = state_24397__$1;
(statearr_24414_24491[(1)] = (5));

} else {
var statearr_24415_24492 = state_24397__$1;
(statearr_24415_24492[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (15))){
var inst_24275 = (state_24397[(13)]);
var inst_24276 = (state_24397[(14)]);
var inst_24274 = (state_24397[(15)]);
var inst_24277 = (state_24397[(16)]);
var inst_24292 = (state_24397[(2)]);
var inst_24293 = (inst_24277 + (1));
var tmp24409 = inst_24275;
var tmp24410 = inst_24276;
var tmp24411 = inst_24274;
var inst_24274__$1 = tmp24411;
var inst_24275__$1 = tmp24409;
var inst_24276__$1 = tmp24410;
var inst_24277__$1 = inst_24293;
var state_24397__$1 = (function (){var statearr_24416 = state_24397;
(statearr_24416[(13)] = inst_24275__$1);

(statearr_24416[(14)] = inst_24276__$1);

(statearr_24416[(15)] = inst_24274__$1);

(statearr_24416[(16)] = inst_24277__$1);

(statearr_24416[(18)] = inst_24292);

return statearr_24416;
})();
var statearr_24417_24493 = state_24397__$1;
(statearr_24417_24493[(2)] = null);

(statearr_24417_24493[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (21))){
var inst_24319 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24421_24494 = state_24397__$1;
(statearr_24421_24494[(2)] = inst_24319);

(statearr_24421_24494[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (31))){
var inst_24345 = (state_24397[(10)]);
var inst_24349 = done(null);
var inst_24350 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24345);
var state_24397__$1 = (function (){var statearr_24422 = state_24397;
(statearr_24422[(19)] = inst_24349);

return statearr_24422;
})();
var statearr_24423_24495 = state_24397__$1;
(statearr_24423_24495[(2)] = inst_24350);

(statearr_24423_24495[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (32))){
var inst_24339 = (state_24397[(20)]);
var inst_24337 = (state_24397[(21)]);
var inst_24338 = (state_24397[(11)]);
var inst_24340 = (state_24397[(12)]);
var inst_24352 = (state_24397[(2)]);
var inst_24353 = (inst_24340 + (1));
var tmp24418 = inst_24339;
var tmp24419 = inst_24337;
var tmp24420 = inst_24338;
var inst_24337__$1 = tmp24419;
var inst_24338__$1 = tmp24420;
var inst_24339__$1 = tmp24418;
var inst_24340__$1 = inst_24353;
var state_24397__$1 = (function (){var statearr_24424 = state_24397;
(statearr_24424[(20)] = inst_24339__$1);

(statearr_24424[(21)] = inst_24337__$1);

(statearr_24424[(22)] = inst_24352);

(statearr_24424[(11)] = inst_24338__$1);

(statearr_24424[(12)] = inst_24340__$1);

return statearr_24424;
})();
var statearr_24425_24496 = state_24397__$1;
(statearr_24425_24496[(2)] = null);

(statearr_24425_24496[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (40))){
var inst_24365 = (state_24397[(23)]);
var inst_24369 = done(null);
var inst_24370 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24365);
var state_24397__$1 = (function (){var statearr_24426 = state_24397;
(statearr_24426[(24)] = inst_24369);

return statearr_24426;
})();
var statearr_24427_24497 = state_24397__$1;
(statearr_24427_24497[(2)] = inst_24370);

(statearr_24427_24497[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (33))){
var inst_24356 = (state_24397[(25)]);
var inst_24358 = cljs.core.chunked_seq_QMARK_(inst_24356);
var state_24397__$1 = state_24397;
if(inst_24358){
var statearr_24428_24498 = state_24397__$1;
(statearr_24428_24498[(1)] = (36));

} else {
var statearr_24429_24499 = state_24397__$1;
(statearr_24429_24499[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (13))){
var inst_24286 = (state_24397[(26)]);
var inst_24289 = cljs.core.async.close_BANG_(inst_24286);
var state_24397__$1 = state_24397;
var statearr_24430_24500 = state_24397__$1;
(statearr_24430_24500[(2)] = inst_24289);

(statearr_24430_24500[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (22))){
var inst_24309 = (state_24397[(8)]);
var inst_24312 = cljs.core.async.close_BANG_(inst_24309);
var state_24397__$1 = state_24397;
var statearr_24431_24501 = state_24397__$1;
(statearr_24431_24501[(2)] = inst_24312);

(statearr_24431_24501[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (36))){
var inst_24356 = (state_24397[(25)]);
var inst_24360 = cljs.core.chunk_first(inst_24356);
var inst_24361 = cljs.core.chunk_rest(inst_24356);
var inst_24362 = cljs.core.count(inst_24360);
var inst_24337 = inst_24361;
var inst_24338 = inst_24360;
var inst_24339 = inst_24362;
var inst_24340 = (0);
var state_24397__$1 = (function (){var statearr_24432 = state_24397;
(statearr_24432[(20)] = inst_24339);

(statearr_24432[(21)] = inst_24337);

(statearr_24432[(11)] = inst_24338);

(statearr_24432[(12)] = inst_24340);

return statearr_24432;
})();
var statearr_24433_24502 = state_24397__$1;
(statearr_24433_24502[(2)] = null);

(statearr_24433_24502[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (41))){
var inst_24356 = (state_24397[(25)]);
var inst_24372 = (state_24397[(2)]);
var inst_24373 = cljs.core.next(inst_24356);
var inst_24337 = inst_24373;
var inst_24338 = null;
var inst_24339 = (0);
var inst_24340 = (0);
var state_24397__$1 = (function (){var statearr_24434 = state_24397;
(statearr_24434[(27)] = inst_24372);

(statearr_24434[(20)] = inst_24339);

(statearr_24434[(21)] = inst_24337);

(statearr_24434[(11)] = inst_24338);

(statearr_24434[(12)] = inst_24340);

return statearr_24434;
})();
var statearr_24435_24503 = state_24397__$1;
(statearr_24435_24503[(2)] = null);

(statearr_24435_24503[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (43))){
var state_24397__$1 = state_24397;
var statearr_24436_24504 = state_24397__$1;
(statearr_24436_24504[(2)] = null);

(statearr_24436_24504[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (29))){
var inst_24381 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24437_24505 = state_24397__$1;
(statearr_24437_24505[(2)] = inst_24381);

(statearr_24437_24505[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (44))){
var inst_24390 = (state_24397[(2)]);
var state_24397__$1 = (function (){var statearr_24438 = state_24397;
(statearr_24438[(28)] = inst_24390);

return statearr_24438;
})();
var statearr_24439_24506 = state_24397__$1;
(statearr_24439_24506[(2)] = null);

(statearr_24439_24506[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (6))){
var inst_24329 = (state_24397[(29)]);
var inst_24328 = cljs.core.deref(cs);
var inst_24329__$1 = cljs.core.keys(inst_24328);
var inst_24330 = cljs.core.count(inst_24329__$1);
var inst_24331 = cljs.core.reset_BANG_(dctr,inst_24330);
var inst_24336 = cljs.core.seq(inst_24329__$1);
var inst_24337 = inst_24336;
var inst_24338 = null;
var inst_24339 = (0);
var inst_24340 = (0);
var state_24397__$1 = (function (){var statearr_24440 = state_24397;
(statearr_24440[(20)] = inst_24339);

(statearr_24440[(21)] = inst_24337);

(statearr_24440[(30)] = inst_24331);

(statearr_24440[(29)] = inst_24329__$1);

(statearr_24440[(11)] = inst_24338);

(statearr_24440[(12)] = inst_24340);

return statearr_24440;
})();
var statearr_24441_24507 = state_24397__$1;
(statearr_24441_24507[(2)] = null);

(statearr_24441_24507[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (28))){
var inst_24337 = (state_24397[(21)]);
var inst_24356 = (state_24397[(25)]);
var inst_24356__$1 = cljs.core.seq(inst_24337);
var state_24397__$1 = (function (){var statearr_24442 = state_24397;
(statearr_24442[(25)] = inst_24356__$1);

return statearr_24442;
})();
if(inst_24356__$1){
var statearr_24443_24508 = state_24397__$1;
(statearr_24443_24508[(1)] = (33));

} else {
var statearr_24444_24509 = state_24397__$1;
(statearr_24444_24509[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (25))){
var inst_24339 = (state_24397[(20)]);
var inst_24340 = (state_24397[(12)]);
var inst_24342 = (inst_24340 < inst_24339);
var inst_24343 = inst_24342;
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24343)){
var statearr_24445_24510 = state_24397__$1;
(statearr_24445_24510[(1)] = (27));

} else {
var statearr_24446_24511 = state_24397__$1;
(statearr_24446_24511[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (34))){
var state_24397__$1 = state_24397;
var statearr_24447_24512 = state_24397__$1;
(statearr_24447_24512[(2)] = null);

(statearr_24447_24512[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (17))){
var state_24397__$1 = state_24397;
var statearr_24448_24513 = state_24397__$1;
(statearr_24448_24513[(2)] = null);

(statearr_24448_24513[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (3))){
var inst_24395 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24397__$1,inst_24395);
} else {
if((state_val_24398 === (12))){
var inst_24324 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24449_24514 = state_24397__$1;
(statearr_24449_24514[(2)] = inst_24324);

(statearr_24449_24514[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (2))){
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24397__$1,(4),ch);
} else {
if((state_val_24398 === (23))){
var state_24397__$1 = state_24397;
var statearr_24450_24515 = state_24397__$1;
(statearr_24450_24515[(2)] = null);

(statearr_24450_24515[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (35))){
var inst_24379 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24451_24516 = state_24397__$1;
(statearr_24451_24516[(2)] = inst_24379);

(statearr_24451_24516[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (19))){
var inst_24296 = (state_24397[(7)]);
var inst_24300 = cljs.core.chunk_first(inst_24296);
var inst_24301 = cljs.core.chunk_rest(inst_24296);
var inst_24302 = cljs.core.count(inst_24300);
var inst_24274 = inst_24301;
var inst_24275 = inst_24300;
var inst_24276 = inst_24302;
var inst_24277 = (0);
var state_24397__$1 = (function (){var statearr_24452 = state_24397;
(statearr_24452[(13)] = inst_24275);

(statearr_24452[(14)] = inst_24276);

(statearr_24452[(15)] = inst_24274);

(statearr_24452[(16)] = inst_24277);

return statearr_24452;
})();
var statearr_24453_24517 = state_24397__$1;
(statearr_24453_24517[(2)] = null);

(statearr_24453_24517[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (11))){
var inst_24274 = (state_24397[(15)]);
var inst_24296 = (state_24397[(7)]);
var inst_24296__$1 = cljs.core.seq(inst_24274);
var state_24397__$1 = (function (){var statearr_24454 = state_24397;
(statearr_24454[(7)] = inst_24296__$1);

return statearr_24454;
})();
if(inst_24296__$1){
var statearr_24455_24518 = state_24397__$1;
(statearr_24455_24518[(1)] = (16));

} else {
var statearr_24456_24519 = state_24397__$1;
(statearr_24456_24519[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (9))){
var inst_24326 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24457_24520 = state_24397__$1;
(statearr_24457_24520[(2)] = inst_24326);

(statearr_24457_24520[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (5))){
var inst_24272 = cljs.core.deref(cs);
var inst_24273 = cljs.core.seq(inst_24272);
var inst_24274 = inst_24273;
var inst_24275 = null;
var inst_24276 = (0);
var inst_24277 = (0);
var state_24397__$1 = (function (){var statearr_24458 = state_24397;
(statearr_24458[(13)] = inst_24275);

(statearr_24458[(14)] = inst_24276);

(statearr_24458[(15)] = inst_24274);

(statearr_24458[(16)] = inst_24277);

return statearr_24458;
})();
var statearr_24459_24521 = state_24397__$1;
(statearr_24459_24521[(2)] = null);

(statearr_24459_24521[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (14))){
var state_24397__$1 = state_24397;
var statearr_24460_24522 = state_24397__$1;
(statearr_24460_24522[(2)] = null);

(statearr_24460_24522[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (45))){
var inst_24387 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24461_24523 = state_24397__$1;
(statearr_24461_24523[(2)] = inst_24387);

(statearr_24461_24523[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (26))){
var inst_24329 = (state_24397[(29)]);
var inst_24383 = (state_24397[(2)]);
var inst_24384 = cljs.core.seq(inst_24329);
var state_24397__$1 = (function (){var statearr_24462 = state_24397;
(statearr_24462[(31)] = inst_24383);

return statearr_24462;
})();
if(inst_24384){
var statearr_24463_24524 = state_24397__$1;
(statearr_24463_24524[(1)] = (42));

} else {
var statearr_24464_24525 = state_24397__$1;
(statearr_24464_24525[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (16))){
var inst_24296 = (state_24397[(7)]);
var inst_24298 = cljs.core.chunked_seq_QMARK_(inst_24296);
var state_24397__$1 = state_24397;
if(inst_24298){
var statearr_24465_24526 = state_24397__$1;
(statearr_24465_24526[(1)] = (19));

} else {
var statearr_24466_24527 = state_24397__$1;
(statearr_24466_24527[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (38))){
var inst_24376 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24467_24528 = state_24397__$1;
(statearr_24467_24528[(2)] = inst_24376);

(statearr_24467_24528[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (30))){
var state_24397__$1 = state_24397;
var statearr_24468_24529 = state_24397__$1;
(statearr_24468_24529[(2)] = null);

(statearr_24468_24529[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (10))){
var inst_24275 = (state_24397[(13)]);
var inst_24277 = (state_24397[(16)]);
var inst_24285 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24275,inst_24277);
var inst_24286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24285,(0),null);
var inst_24287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24285,(1),null);
var state_24397__$1 = (function (){var statearr_24469 = state_24397;
(statearr_24469[(26)] = inst_24286);

return statearr_24469;
})();
if(cljs.core.truth_(inst_24287)){
var statearr_24470_24530 = state_24397__$1;
(statearr_24470_24530[(1)] = (13));

} else {
var statearr_24471_24531 = state_24397__$1;
(statearr_24471_24531[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (18))){
var inst_24322 = (state_24397[(2)]);
var state_24397__$1 = state_24397;
var statearr_24472_24532 = state_24397__$1;
(statearr_24472_24532[(2)] = inst_24322);

(statearr_24472_24532[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (42))){
var state_24397__$1 = state_24397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24397__$1,(45),dchan);
} else {
if((state_val_24398 === (37))){
var inst_24365 = (state_24397[(23)]);
var inst_24356 = (state_24397[(25)]);
var inst_24265 = (state_24397[(9)]);
var inst_24365__$1 = cljs.core.first(inst_24356);
var inst_24366 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24365__$1,inst_24265,done);
var state_24397__$1 = (function (){var statearr_24473 = state_24397;
(statearr_24473[(23)] = inst_24365__$1);

return statearr_24473;
})();
if(cljs.core.truth_(inst_24366)){
var statearr_24474_24533 = state_24397__$1;
(statearr_24474_24533[(1)] = (39));

} else {
var statearr_24475_24534 = state_24397__$1;
(statearr_24475_24534[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24398 === (8))){
var inst_24276 = (state_24397[(14)]);
var inst_24277 = (state_24397[(16)]);
var inst_24279 = (inst_24277 < inst_24276);
var inst_24280 = inst_24279;
var state_24397__$1 = state_24397;
if(cljs.core.truth_(inst_24280)){
var statearr_24476_24535 = state_24397__$1;
(statearr_24476_24535[(1)] = (10));

} else {
var statearr_24477_24536 = state_24397__$1;
(statearr_24477_24536[(1)] = (11));

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
});})(c__23661__auto___24482,cs,m,dchan,dctr,done))
;
return ((function (switch__23559__auto__,c__23661__auto___24482,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23560__auto__ = null;
var cljs$core$async$mult_$_state_machine__23560__auto____0 = (function (){
var statearr_24478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24478[(0)] = cljs$core$async$mult_$_state_machine__23560__auto__);

(statearr_24478[(1)] = (1));

return statearr_24478;
});
var cljs$core$async$mult_$_state_machine__23560__auto____1 = (function (state_24397){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_24397);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e24479){if((e24479 instanceof Object)){
var ex__23563__auto__ = e24479;
var statearr_24480_24537 = state_24397;
(statearr_24480_24537[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24397);

return cljs.core.cst$kw$recur;
} else {
throw e24479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24538 = state_24397;
state_24397 = G__24538;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23560__auto__ = function(state_24397){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23560__auto____1.call(this,state_24397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23560__auto____0;
cljs$core$async$mult_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23560__auto____1;
return cljs$core$async$mult_$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___24482,cs,m,dchan,dctr,done))
})();
var state__23663__auto__ = (function (){var statearr_24481 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_24481[(6)] = c__23661__auto___24482);

return statearr_24481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___24482,cs,m,dchan,dctr,done))
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
var G__24540 = arguments.length;
switch (G__24540) {
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
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9122__auto__.call(null,m,ch));
} else {
var m__9122__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9122__auto____$1.call(null,m,ch));
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
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9122__auto__.call(null,m,ch));
} else {
var m__9122__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9122__auto____$1.call(null,m,ch));
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
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9122__auto__.call(null,m));
} else {
var m__9122__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9122__auto____$1.call(null,m));
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
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9122__auto__.call(null,m,state_map));
} else {
var m__9122__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9122__auto____$1.call(null,m,state_map));
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
var x__9121__auto__ = (((m == null))?null:m);
var m__9122__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9122__auto__.call(null,m,mode));
} else {
var m__9122__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9122__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9674__auto__ = [];
var len__9667__auto___24552 = arguments.length;
var i__9668__auto___24553 = (0);
while(true){
if((i__9668__auto___24553 < len__9667__auto___24552)){
args__9674__auto__.push((arguments[i__9668__auto___24553]));

var G__24554 = (i__9668__auto___24553 + (1));
i__9668__auto___24553 = G__24554;
continue;
} else {
}
break;
}

var argseq__9675__auto__ = ((((3) < args__9674__auto__.length))?(new cljs.core.IndexedSeq(args__9674__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9675__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24546){
var map__24547 = p__24546;
var map__24547__$1 = ((((!((map__24547 == null)))?((((map__24547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24547):map__24547);
var opts = map__24547__$1;
var statearr_24549_24555 = state;
(statearr_24549_24555[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__24547,map__24547__$1,opts){
return (function (val){
var statearr_24550_24556 = state;
(statearr_24550_24556[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24547,map__24547__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24551_24557 = state;
(statearr_24551_24557[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24542){
var G__24543 = cljs.core.first(seq24542);
var seq24542__$1 = cljs.core.next(seq24542);
var G__24544 = cljs.core.first(seq24542__$1);
var seq24542__$2 = cljs.core.next(seq24542__$1);
var G__24545 = cljs.core.first(seq24542__$2);
var seq24542__$3 = cljs.core.next(seq24542__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24543,G__24544,G__24545,seq24542__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24558 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24559){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24559 = meta24559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24560,meta24559__$1){
var self__ = this;
var _24560__$1 = this;
return (new cljs.core.async.t_cljs$core$async24558(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24559__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24560){
var self__ = this;
var _24560__$1 = this;
return self__.meta24559;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24558.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24558.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta24559], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24558";

cljs.core.async.t_cljs$core$async24558.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async24558");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24558 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24558(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24559){
return (new cljs.core.async.t_cljs$core$async24558(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24559));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24558(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23661__auto___24722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___24722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___24722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24662){
var state_val_24663 = (state_24662[(1)]);
if((state_val_24663 === (7))){
var inst_24577 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
var statearr_24664_24723 = state_24662__$1;
(statearr_24664_24723[(2)] = inst_24577);

(statearr_24664_24723[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (20))){
var inst_24589 = (state_24662[(7)]);
var state_24662__$1 = state_24662;
var statearr_24665_24724 = state_24662__$1;
(statearr_24665_24724[(2)] = inst_24589);

(statearr_24665_24724[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (27))){
var state_24662__$1 = state_24662;
var statearr_24666_24725 = state_24662__$1;
(statearr_24666_24725[(2)] = null);

(statearr_24666_24725[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (1))){
var inst_24564 = (state_24662[(8)]);
var inst_24564__$1 = calc_state();
var inst_24566 = (inst_24564__$1 == null);
var inst_24567 = cljs.core.not(inst_24566);
var state_24662__$1 = (function (){var statearr_24667 = state_24662;
(statearr_24667[(8)] = inst_24564__$1);

return statearr_24667;
})();
if(inst_24567){
var statearr_24668_24726 = state_24662__$1;
(statearr_24668_24726[(1)] = (2));

} else {
var statearr_24669_24727 = state_24662__$1;
(statearr_24669_24727[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (24))){
var inst_24613 = (state_24662[(9)]);
var inst_24636 = (state_24662[(10)]);
var inst_24622 = (state_24662[(11)]);
var inst_24636__$1 = (inst_24613.cljs$core$IFn$_invoke$arity$1 ? inst_24613.cljs$core$IFn$_invoke$arity$1(inst_24622) : inst_24613.call(null,inst_24622));
var state_24662__$1 = (function (){var statearr_24670 = state_24662;
(statearr_24670[(10)] = inst_24636__$1);

return statearr_24670;
})();
if(cljs.core.truth_(inst_24636__$1)){
var statearr_24671_24728 = state_24662__$1;
(statearr_24671_24728[(1)] = (29));

} else {
var statearr_24672_24729 = state_24662__$1;
(statearr_24672_24729[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (4))){
var inst_24580 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
if(cljs.core.truth_(inst_24580)){
var statearr_24673_24730 = state_24662__$1;
(statearr_24673_24730[(1)] = (8));

} else {
var statearr_24674_24731 = state_24662__$1;
(statearr_24674_24731[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (15))){
var inst_24607 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
if(cljs.core.truth_(inst_24607)){
var statearr_24675_24732 = state_24662__$1;
(statearr_24675_24732[(1)] = (19));

} else {
var statearr_24676_24733 = state_24662__$1;
(statearr_24676_24733[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (21))){
var inst_24612 = (state_24662[(12)]);
var inst_24612__$1 = (state_24662[(2)]);
var inst_24613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24612__$1,cljs.core.cst$kw$solos);
var inst_24614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24612__$1,cljs.core.cst$kw$mutes);
var inst_24615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24612__$1,cljs.core.cst$kw$reads);
var state_24662__$1 = (function (){var statearr_24677 = state_24662;
(statearr_24677[(9)] = inst_24613);

(statearr_24677[(12)] = inst_24612__$1);

(statearr_24677[(13)] = inst_24614);

return statearr_24677;
})();
return cljs.core.async.ioc_alts_BANG_(state_24662__$1,(22),inst_24615);
} else {
if((state_val_24663 === (31))){
var inst_24644 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
if(cljs.core.truth_(inst_24644)){
var statearr_24678_24734 = state_24662__$1;
(statearr_24678_24734[(1)] = (32));

} else {
var statearr_24679_24735 = state_24662__$1;
(statearr_24679_24735[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (32))){
var inst_24621 = (state_24662[(14)]);
var state_24662__$1 = state_24662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24662__$1,(35),out,inst_24621);
} else {
if((state_val_24663 === (33))){
var inst_24612 = (state_24662[(12)]);
var inst_24589 = inst_24612;
var state_24662__$1 = (function (){var statearr_24680 = state_24662;
(statearr_24680[(7)] = inst_24589);

return statearr_24680;
})();
var statearr_24681_24736 = state_24662__$1;
(statearr_24681_24736[(2)] = null);

(statearr_24681_24736[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (13))){
var inst_24589 = (state_24662[(7)]);
var inst_24596 = inst_24589.cljs$lang$protocol_mask$partition0$;
var inst_24597 = (inst_24596 & (64));
var inst_24598 = inst_24589.cljs$core$ISeq$;
var inst_24599 = (cljs.core.PROTOCOL_SENTINEL === inst_24598);
var inst_24600 = (inst_24597) || (inst_24599);
var state_24662__$1 = state_24662;
if(cljs.core.truth_(inst_24600)){
var statearr_24682_24737 = state_24662__$1;
(statearr_24682_24737[(1)] = (16));

} else {
var statearr_24683_24738 = state_24662__$1;
(statearr_24683_24738[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (22))){
var inst_24621 = (state_24662[(14)]);
var inst_24622 = (state_24662[(11)]);
var inst_24620 = (state_24662[(2)]);
var inst_24621__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24620,(0),null);
var inst_24622__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24620,(1),null);
var inst_24623 = (inst_24621__$1 == null);
var inst_24624 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24622__$1,change);
var inst_24625 = (inst_24623) || (inst_24624);
var state_24662__$1 = (function (){var statearr_24684 = state_24662;
(statearr_24684[(14)] = inst_24621__$1);

(statearr_24684[(11)] = inst_24622__$1);

return statearr_24684;
})();
if(cljs.core.truth_(inst_24625)){
var statearr_24685_24739 = state_24662__$1;
(statearr_24685_24739[(1)] = (23));

} else {
var statearr_24686_24740 = state_24662__$1;
(statearr_24686_24740[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (36))){
var inst_24612 = (state_24662[(12)]);
var inst_24589 = inst_24612;
var state_24662__$1 = (function (){var statearr_24687 = state_24662;
(statearr_24687[(7)] = inst_24589);

return statearr_24687;
})();
var statearr_24688_24741 = state_24662__$1;
(statearr_24688_24741[(2)] = null);

(statearr_24688_24741[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (29))){
var inst_24636 = (state_24662[(10)]);
var state_24662__$1 = state_24662;
var statearr_24689_24742 = state_24662__$1;
(statearr_24689_24742[(2)] = inst_24636);

(statearr_24689_24742[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (6))){
var state_24662__$1 = state_24662;
var statearr_24690_24743 = state_24662__$1;
(statearr_24690_24743[(2)] = false);

(statearr_24690_24743[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (28))){
var inst_24632 = (state_24662[(2)]);
var inst_24633 = calc_state();
var inst_24589 = inst_24633;
var state_24662__$1 = (function (){var statearr_24691 = state_24662;
(statearr_24691[(7)] = inst_24589);

(statearr_24691[(15)] = inst_24632);

return statearr_24691;
})();
var statearr_24692_24744 = state_24662__$1;
(statearr_24692_24744[(2)] = null);

(statearr_24692_24744[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (25))){
var inst_24658 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
var statearr_24693_24745 = state_24662__$1;
(statearr_24693_24745[(2)] = inst_24658);

(statearr_24693_24745[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (34))){
var inst_24656 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
var statearr_24694_24746 = state_24662__$1;
(statearr_24694_24746[(2)] = inst_24656);

(statearr_24694_24746[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (17))){
var state_24662__$1 = state_24662;
var statearr_24695_24747 = state_24662__$1;
(statearr_24695_24747[(2)] = false);

(statearr_24695_24747[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (3))){
var state_24662__$1 = state_24662;
var statearr_24696_24748 = state_24662__$1;
(statearr_24696_24748[(2)] = false);

(statearr_24696_24748[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (12))){
var inst_24660 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24662__$1,inst_24660);
} else {
if((state_val_24663 === (2))){
var inst_24564 = (state_24662[(8)]);
var inst_24569 = inst_24564.cljs$lang$protocol_mask$partition0$;
var inst_24570 = (inst_24569 & (64));
var inst_24571 = inst_24564.cljs$core$ISeq$;
var inst_24572 = (cljs.core.PROTOCOL_SENTINEL === inst_24571);
var inst_24573 = (inst_24570) || (inst_24572);
var state_24662__$1 = state_24662;
if(cljs.core.truth_(inst_24573)){
var statearr_24697_24749 = state_24662__$1;
(statearr_24697_24749[(1)] = (5));

} else {
var statearr_24698_24750 = state_24662__$1;
(statearr_24698_24750[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (23))){
var inst_24621 = (state_24662[(14)]);
var inst_24627 = (inst_24621 == null);
var state_24662__$1 = state_24662;
if(cljs.core.truth_(inst_24627)){
var statearr_24699_24751 = state_24662__$1;
(statearr_24699_24751[(1)] = (26));

} else {
var statearr_24700_24752 = state_24662__$1;
(statearr_24700_24752[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (35))){
var inst_24647 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
if(cljs.core.truth_(inst_24647)){
var statearr_24701_24753 = state_24662__$1;
(statearr_24701_24753[(1)] = (36));

} else {
var statearr_24702_24754 = state_24662__$1;
(statearr_24702_24754[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (19))){
var inst_24589 = (state_24662[(7)]);
var inst_24609 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24589);
var state_24662__$1 = state_24662;
var statearr_24703_24755 = state_24662__$1;
(statearr_24703_24755[(2)] = inst_24609);

(statearr_24703_24755[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (11))){
var inst_24589 = (state_24662[(7)]);
var inst_24593 = (inst_24589 == null);
var inst_24594 = cljs.core.not(inst_24593);
var state_24662__$1 = state_24662;
if(inst_24594){
var statearr_24704_24756 = state_24662__$1;
(statearr_24704_24756[(1)] = (13));

} else {
var statearr_24705_24757 = state_24662__$1;
(statearr_24705_24757[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (9))){
var inst_24564 = (state_24662[(8)]);
var state_24662__$1 = state_24662;
var statearr_24706_24758 = state_24662__$1;
(statearr_24706_24758[(2)] = inst_24564);

(statearr_24706_24758[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (5))){
var state_24662__$1 = state_24662;
var statearr_24707_24759 = state_24662__$1;
(statearr_24707_24759[(2)] = true);

(statearr_24707_24759[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (14))){
var state_24662__$1 = state_24662;
var statearr_24708_24760 = state_24662__$1;
(statearr_24708_24760[(2)] = false);

(statearr_24708_24760[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (26))){
var inst_24622 = (state_24662[(11)]);
var inst_24629 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24622);
var state_24662__$1 = state_24662;
var statearr_24709_24761 = state_24662__$1;
(statearr_24709_24761[(2)] = inst_24629);

(statearr_24709_24761[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (16))){
var state_24662__$1 = state_24662;
var statearr_24710_24762 = state_24662__$1;
(statearr_24710_24762[(2)] = true);

(statearr_24710_24762[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (38))){
var inst_24652 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
var statearr_24711_24763 = state_24662__$1;
(statearr_24711_24763[(2)] = inst_24652);

(statearr_24711_24763[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (30))){
var inst_24613 = (state_24662[(9)]);
var inst_24614 = (state_24662[(13)]);
var inst_24622 = (state_24662[(11)]);
var inst_24639 = cljs.core.empty_QMARK_(inst_24613);
var inst_24640 = (inst_24614.cljs$core$IFn$_invoke$arity$1 ? inst_24614.cljs$core$IFn$_invoke$arity$1(inst_24622) : inst_24614.call(null,inst_24622));
var inst_24641 = cljs.core.not(inst_24640);
var inst_24642 = (inst_24639) && (inst_24641);
var state_24662__$1 = state_24662;
var statearr_24712_24764 = state_24662__$1;
(statearr_24712_24764[(2)] = inst_24642);

(statearr_24712_24764[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (10))){
var inst_24564 = (state_24662[(8)]);
var inst_24585 = (state_24662[(2)]);
var inst_24586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24585,cljs.core.cst$kw$solos);
var inst_24587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24585,cljs.core.cst$kw$mutes);
var inst_24588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24585,cljs.core.cst$kw$reads);
var inst_24589 = inst_24564;
var state_24662__$1 = (function (){var statearr_24713 = state_24662;
(statearr_24713[(7)] = inst_24589);

(statearr_24713[(16)] = inst_24586);

(statearr_24713[(17)] = inst_24588);

(statearr_24713[(18)] = inst_24587);

return statearr_24713;
})();
var statearr_24714_24765 = state_24662__$1;
(statearr_24714_24765[(2)] = null);

(statearr_24714_24765[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (18))){
var inst_24604 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
var statearr_24715_24766 = state_24662__$1;
(statearr_24715_24766[(2)] = inst_24604);

(statearr_24715_24766[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (37))){
var state_24662__$1 = state_24662;
var statearr_24716_24767 = state_24662__$1;
(statearr_24716_24767[(2)] = null);

(statearr_24716_24767[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24663 === (8))){
var inst_24564 = (state_24662[(8)]);
var inst_24582 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24564);
var state_24662__$1 = state_24662;
var statearr_24717_24768 = state_24662__$1;
(statearr_24717_24768[(2)] = inst_24582);

(statearr_24717_24768[(1)] = (10));


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
});})(c__23661__auto___24722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23559__auto__,c__23661__auto___24722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23560__auto__ = null;
var cljs$core$async$mix_$_state_machine__23560__auto____0 = (function (){
var statearr_24718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24718[(0)] = cljs$core$async$mix_$_state_machine__23560__auto__);

(statearr_24718[(1)] = (1));

return statearr_24718;
});
var cljs$core$async$mix_$_state_machine__23560__auto____1 = (function (state_24662){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_24662);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e24719){if((e24719 instanceof Object)){
var ex__23563__auto__ = e24719;
var statearr_24720_24769 = state_24662;
(statearr_24720_24769[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24662);

return cljs.core.cst$kw$recur;
} else {
throw e24719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24770 = state_24662;
state_24662 = G__24770;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23560__auto__ = function(state_24662){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23560__auto____1.call(this,state_24662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23560__auto____0;
cljs$core$async$mix_$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23560__auto____1;
return cljs$core$async$mix_$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___24722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23663__auto__ = (function (){var statearr_24721 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_24721[(6)] = c__23661__auto___24722);

return statearr_24721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___24722,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__9121__auto__ = (((p == null))?null:p);
var m__9122__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$4 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9122__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__9122__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9122__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__9121__auto__ = (((p == null))?null:p);
var m__9122__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9122__auto__.call(null,p,v,ch));
} else {
var m__9122__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9122__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24772 = arguments.length;
switch (G__24772) {
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
var x__9121__auto__ = (((p == null))?null:p);
var m__9122__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__9122__auto__.call(null,p));
} else {
var m__9122__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__9122__auto____$1.call(null,p));
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
var x__9121__auto__ = (((p == null))?null:p);
var m__9122__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__9122__auto__.call(null,p,v));
} else {
var m__9122__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__9122__auto____$1.call(null,p,v));
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
var G__24776 = arguments.length;
switch (G__24776) {
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
var or__8388__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__8388__auto__,mults){
return (function (p1__24774_SHARP_){
if(cljs.core.truth_((p1__24774_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24774_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24774_SHARP_.call(null,topic)))){
return p1__24774_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24774_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__8388__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24777 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24778){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24778 = meta24778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24779,meta24778__$1){
var self__ = this;
var _24779__$1 = this;
return (new cljs.core.async.t_cljs$core$async24777(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24778__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24779){
var self__ = this;
var _24779__$1 = this;
return self__.meta24778;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24777.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24777.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24777.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24777.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24777.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta24778], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24777";

cljs.core.async.t_cljs$core$async24777.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async24777");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24777 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24778){
return (new cljs.core.async.t_cljs$core$async24777(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24778));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24777(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23661__auto___24897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___24897,mults,ensure_mult,p){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___24897,mults,ensure_mult,p){
return (function (state_24851){
var state_val_24852 = (state_24851[(1)]);
if((state_val_24852 === (7))){
var inst_24847 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24853_24898 = state_24851__$1;
(statearr_24853_24898[(2)] = inst_24847);

(statearr_24853_24898[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (20))){
var state_24851__$1 = state_24851;
var statearr_24854_24899 = state_24851__$1;
(statearr_24854_24899[(2)] = null);

(statearr_24854_24899[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (1))){
var state_24851__$1 = state_24851;
var statearr_24855_24900 = state_24851__$1;
(statearr_24855_24900[(2)] = null);

(statearr_24855_24900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (24))){
var inst_24830 = (state_24851[(7)]);
var inst_24839 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24830);
var state_24851__$1 = state_24851;
var statearr_24856_24901 = state_24851__$1;
(statearr_24856_24901[(2)] = inst_24839);

(statearr_24856_24901[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (4))){
var inst_24782 = (state_24851[(8)]);
var inst_24782__$1 = (state_24851[(2)]);
var inst_24783 = (inst_24782__$1 == null);
var state_24851__$1 = (function (){var statearr_24857 = state_24851;
(statearr_24857[(8)] = inst_24782__$1);

return statearr_24857;
})();
if(cljs.core.truth_(inst_24783)){
var statearr_24858_24902 = state_24851__$1;
(statearr_24858_24902[(1)] = (5));

} else {
var statearr_24859_24903 = state_24851__$1;
(statearr_24859_24903[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (15))){
var inst_24824 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24860_24904 = state_24851__$1;
(statearr_24860_24904[(2)] = inst_24824);

(statearr_24860_24904[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (21))){
var inst_24844 = (state_24851[(2)]);
var state_24851__$1 = (function (){var statearr_24861 = state_24851;
(statearr_24861[(9)] = inst_24844);

return statearr_24861;
})();
var statearr_24862_24905 = state_24851__$1;
(statearr_24862_24905[(2)] = null);

(statearr_24862_24905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (13))){
var inst_24806 = (state_24851[(10)]);
var inst_24808 = cljs.core.chunked_seq_QMARK_(inst_24806);
var state_24851__$1 = state_24851;
if(inst_24808){
var statearr_24863_24906 = state_24851__$1;
(statearr_24863_24906[(1)] = (16));

} else {
var statearr_24864_24907 = state_24851__$1;
(statearr_24864_24907[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (22))){
var inst_24836 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
if(cljs.core.truth_(inst_24836)){
var statearr_24865_24908 = state_24851__$1;
(statearr_24865_24908[(1)] = (23));

} else {
var statearr_24866_24909 = state_24851__$1;
(statearr_24866_24909[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (6))){
var inst_24782 = (state_24851[(8)]);
var inst_24832 = (state_24851[(11)]);
var inst_24830 = (state_24851[(7)]);
var inst_24830__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24782) : topic_fn.call(null,inst_24782));
var inst_24831 = cljs.core.deref(mults);
var inst_24832__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24831,inst_24830__$1);
var state_24851__$1 = (function (){var statearr_24867 = state_24851;
(statearr_24867[(11)] = inst_24832__$1);

(statearr_24867[(7)] = inst_24830__$1);

return statearr_24867;
})();
if(cljs.core.truth_(inst_24832__$1)){
var statearr_24868_24910 = state_24851__$1;
(statearr_24868_24910[(1)] = (19));

} else {
var statearr_24869_24911 = state_24851__$1;
(statearr_24869_24911[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (25))){
var inst_24841 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24870_24912 = state_24851__$1;
(statearr_24870_24912[(2)] = inst_24841);

(statearr_24870_24912[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (17))){
var inst_24806 = (state_24851[(10)]);
var inst_24815 = cljs.core.first(inst_24806);
var inst_24816 = cljs.core.async.muxch_STAR_(inst_24815);
var inst_24817 = cljs.core.async.close_BANG_(inst_24816);
var inst_24818 = cljs.core.next(inst_24806);
var inst_24792 = inst_24818;
var inst_24793 = null;
var inst_24794 = (0);
var inst_24795 = (0);
var state_24851__$1 = (function (){var statearr_24871 = state_24851;
(statearr_24871[(12)] = inst_24792);

(statearr_24871[(13)] = inst_24795);

(statearr_24871[(14)] = inst_24817);

(statearr_24871[(15)] = inst_24794);

(statearr_24871[(16)] = inst_24793);

return statearr_24871;
})();
var statearr_24872_24913 = state_24851__$1;
(statearr_24872_24913[(2)] = null);

(statearr_24872_24913[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (3))){
var inst_24849 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24851__$1,inst_24849);
} else {
if((state_val_24852 === (12))){
var inst_24826 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24873_24914 = state_24851__$1;
(statearr_24873_24914[(2)] = inst_24826);

(statearr_24873_24914[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (2))){
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24851__$1,(4),ch);
} else {
if((state_val_24852 === (23))){
var state_24851__$1 = state_24851;
var statearr_24874_24915 = state_24851__$1;
(statearr_24874_24915[(2)] = null);

(statearr_24874_24915[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (19))){
var inst_24782 = (state_24851[(8)]);
var inst_24832 = (state_24851[(11)]);
var inst_24834 = cljs.core.async.muxch_STAR_(inst_24832);
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24851__$1,(22),inst_24834,inst_24782);
} else {
if((state_val_24852 === (11))){
var inst_24792 = (state_24851[(12)]);
var inst_24806 = (state_24851[(10)]);
var inst_24806__$1 = cljs.core.seq(inst_24792);
var state_24851__$1 = (function (){var statearr_24875 = state_24851;
(statearr_24875[(10)] = inst_24806__$1);

return statearr_24875;
})();
if(inst_24806__$1){
var statearr_24876_24916 = state_24851__$1;
(statearr_24876_24916[(1)] = (13));

} else {
var statearr_24877_24917 = state_24851__$1;
(statearr_24877_24917[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (9))){
var inst_24828 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24878_24918 = state_24851__$1;
(statearr_24878_24918[(2)] = inst_24828);

(statearr_24878_24918[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (5))){
var inst_24789 = cljs.core.deref(mults);
var inst_24790 = cljs.core.vals(inst_24789);
var inst_24791 = cljs.core.seq(inst_24790);
var inst_24792 = inst_24791;
var inst_24793 = null;
var inst_24794 = (0);
var inst_24795 = (0);
var state_24851__$1 = (function (){var statearr_24879 = state_24851;
(statearr_24879[(12)] = inst_24792);

(statearr_24879[(13)] = inst_24795);

(statearr_24879[(15)] = inst_24794);

(statearr_24879[(16)] = inst_24793);

return statearr_24879;
})();
var statearr_24880_24919 = state_24851__$1;
(statearr_24880_24919[(2)] = null);

(statearr_24880_24919[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (14))){
var state_24851__$1 = state_24851;
var statearr_24884_24920 = state_24851__$1;
(statearr_24884_24920[(2)] = null);

(statearr_24884_24920[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (16))){
var inst_24806 = (state_24851[(10)]);
var inst_24810 = cljs.core.chunk_first(inst_24806);
var inst_24811 = cljs.core.chunk_rest(inst_24806);
var inst_24812 = cljs.core.count(inst_24810);
var inst_24792 = inst_24811;
var inst_24793 = inst_24810;
var inst_24794 = inst_24812;
var inst_24795 = (0);
var state_24851__$1 = (function (){var statearr_24885 = state_24851;
(statearr_24885[(12)] = inst_24792);

(statearr_24885[(13)] = inst_24795);

(statearr_24885[(15)] = inst_24794);

(statearr_24885[(16)] = inst_24793);

return statearr_24885;
})();
var statearr_24886_24921 = state_24851__$1;
(statearr_24886_24921[(2)] = null);

(statearr_24886_24921[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (10))){
var inst_24792 = (state_24851[(12)]);
var inst_24795 = (state_24851[(13)]);
var inst_24794 = (state_24851[(15)]);
var inst_24793 = (state_24851[(16)]);
var inst_24800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24793,inst_24795);
var inst_24801 = cljs.core.async.muxch_STAR_(inst_24800);
var inst_24802 = cljs.core.async.close_BANG_(inst_24801);
var inst_24803 = (inst_24795 + (1));
var tmp24881 = inst_24792;
var tmp24882 = inst_24794;
var tmp24883 = inst_24793;
var inst_24792__$1 = tmp24881;
var inst_24793__$1 = tmp24883;
var inst_24794__$1 = tmp24882;
var inst_24795__$1 = inst_24803;
var state_24851__$1 = (function (){var statearr_24887 = state_24851;
(statearr_24887[(12)] = inst_24792__$1);

(statearr_24887[(13)] = inst_24795__$1);

(statearr_24887[(17)] = inst_24802);

(statearr_24887[(15)] = inst_24794__$1);

(statearr_24887[(16)] = inst_24793__$1);

return statearr_24887;
})();
var statearr_24888_24922 = state_24851__$1;
(statearr_24888_24922[(2)] = null);

(statearr_24888_24922[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (18))){
var inst_24821 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24889_24923 = state_24851__$1;
(statearr_24889_24923[(2)] = inst_24821);

(statearr_24889_24923[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24852 === (8))){
var inst_24795 = (state_24851[(13)]);
var inst_24794 = (state_24851[(15)]);
var inst_24797 = (inst_24795 < inst_24794);
var inst_24798 = inst_24797;
var state_24851__$1 = state_24851;
if(cljs.core.truth_(inst_24798)){
var statearr_24890_24924 = state_24851__$1;
(statearr_24890_24924[(1)] = (10));

} else {
var statearr_24891_24925 = state_24851__$1;
(statearr_24891_24925[(1)] = (11));

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
});})(c__23661__auto___24897,mults,ensure_mult,p))
;
return ((function (switch__23559__auto__,c__23661__auto___24897,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_24892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24892[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_24892[(1)] = (1));

return statearr_24892;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_24851){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_24851);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e24893){if((e24893 instanceof Object)){
var ex__23563__auto__ = e24893;
var statearr_24894_24926 = state_24851;
(statearr_24894_24926[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24851);

return cljs.core.cst$kw$recur;
} else {
throw e24893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__24927 = state_24851;
state_24851 = G__24927;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_24851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_24851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___24897,mults,ensure_mult,p))
})();
var state__23663__auto__ = (function (){var statearr_24895 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_24895[(6)] = c__23661__auto___24897);

return statearr_24895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___24897,mults,ensure_mult,p))
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
var G__24929 = arguments.length;
switch (G__24929) {
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
var G__24932 = arguments.length;
switch (G__24932) {
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
var G__24935 = arguments.length;
switch (G__24935) {
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
var c__23661__auto___25002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___25002,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___25002,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24974){
var state_val_24975 = (state_24974[(1)]);
if((state_val_24975 === (7))){
var state_24974__$1 = state_24974;
var statearr_24976_25003 = state_24974__$1;
(statearr_24976_25003[(2)] = null);

(statearr_24976_25003[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (1))){
var state_24974__$1 = state_24974;
var statearr_24977_25004 = state_24974__$1;
(statearr_24977_25004[(2)] = null);

(statearr_24977_25004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (4))){
var inst_24938 = (state_24974[(7)]);
var inst_24940 = (inst_24938 < cnt);
var state_24974__$1 = state_24974;
if(cljs.core.truth_(inst_24940)){
var statearr_24978_25005 = state_24974__$1;
(statearr_24978_25005[(1)] = (6));

} else {
var statearr_24979_25006 = state_24974__$1;
(statearr_24979_25006[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (15))){
var inst_24970 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24980_25007 = state_24974__$1;
(statearr_24980_25007[(2)] = inst_24970);

(statearr_24980_25007[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (13))){
var inst_24963 = cljs.core.async.close_BANG_(out);
var state_24974__$1 = state_24974;
var statearr_24981_25008 = state_24974__$1;
(statearr_24981_25008[(2)] = inst_24963);

(statearr_24981_25008[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (6))){
var state_24974__$1 = state_24974;
var statearr_24982_25009 = state_24974__$1;
(statearr_24982_25009[(2)] = null);

(statearr_24982_25009[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (3))){
var inst_24972 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24974__$1,inst_24972);
} else {
if((state_val_24975 === (12))){
var inst_24960 = (state_24974[(8)]);
var inst_24960__$1 = (state_24974[(2)]);
var inst_24961 = cljs.core.some(cljs.core.nil_QMARK_,inst_24960__$1);
var state_24974__$1 = (function (){var statearr_24983 = state_24974;
(statearr_24983[(8)] = inst_24960__$1);

return statearr_24983;
})();
if(cljs.core.truth_(inst_24961)){
var statearr_24984_25010 = state_24974__$1;
(statearr_24984_25010[(1)] = (13));

} else {
var statearr_24985_25011 = state_24974__$1;
(statearr_24985_25011[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (2))){
var inst_24937 = cljs.core.reset_BANG_(dctr,cnt);
var inst_24938 = (0);
var state_24974__$1 = (function (){var statearr_24986 = state_24974;
(statearr_24986[(7)] = inst_24938);

(statearr_24986[(9)] = inst_24937);

return statearr_24986;
})();
var statearr_24987_25012 = state_24974__$1;
(statearr_24987_25012[(2)] = null);

(statearr_24987_25012[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (11))){
var inst_24938 = (state_24974[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24974,(10),Object,null,(9));
var inst_24947 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24938) : chs__$1.call(null,inst_24938));
var inst_24948 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24938) : done.call(null,inst_24938));
var inst_24949 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24947,inst_24948);
var state_24974__$1 = state_24974;
var statearr_24988_25013 = state_24974__$1;
(statearr_24988_25013[(2)] = inst_24949);


cljs.core.async.impl.ioc_helpers.process_exception(state_24974__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (9))){
var inst_24938 = (state_24974[(7)]);
var inst_24951 = (state_24974[(2)]);
var inst_24952 = (inst_24938 + (1));
var inst_24938__$1 = inst_24952;
var state_24974__$1 = (function (){var statearr_24989 = state_24974;
(statearr_24989[(10)] = inst_24951);

(statearr_24989[(7)] = inst_24938__$1);

return statearr_24989;
})();
var statearr_24990_25014 = state_24974__$1;
(statearr_24990_25014[(2)] = null);

(statearr_24990_25014[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (5))){
var inst_24958 = (state_24974[(2)]);
var state_24974__$1 = (function (){var statearr_24991 = state_24974;
(statearr_24991[(11)] = inst_24958);

return statearr_24991;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24974__$1,(12),dchan);
} else {
if((state_val_24975 === (14))){
var inst_24960 = (state_24974[(8)]);
var inst_24965 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24960);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24974__$1,(16),out,inst_24965);
} else {
if((state_val_24975 === (16))){
var inst_24967 = (state_24974[(2)]);
var state_24974__$1 = (function (){var statearr_24992 = state_24974;
(statearr_24992[(12)] = inst_24967);

return statearr_24992;
})();
var statearr_24993_25015 = state_24974__$1;
(statearr_24993_25015[(2)] = null);

(statearr_24993_25015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (10))){
var inst_24942 = (state_24974[(2)]);
var inst_24943 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24974__$1 = (function (){var statearr_24994 = state_24974;
(statearr_24994[(13)] = inst_24942);

return statearr_24994;
})();
var statearr_24995_25016 = state_24974__$1;
(statearr_24995_25016[(2)] = inst_24943);


cljs.core.async.impl.ioc_helpers.process_exception(state_24974__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_24975 === (8))){
var inst_24956 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24996_25017 = state_24974__$1;
(statearr_24996_25017[(2)] = inst_24956);

(statearr_24996_25017[(1)] = (5));


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
});})(c__23661__auto___25002,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23559__auto__,c__23661__auto___25002,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_24997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24997[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_24997[(1)] = (1));

return statearr_24997;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_24974){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_24974);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e24998){if((e24998 instanceof Object)){
var ex__23563__auto__ = e24998;
var statearr_24999_25018 = state_24974;
(statearr_24999_25018[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24974);

return cljs.core.cst$kw$recur;
} else {
throw e24998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__25019 = state_24974;
state_24974 = G__25019;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_24974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_24974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___25002,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23663__auto__ = (function (){var statearr_25000 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_25000[(6)] = c__23661__auto___25002);

return statearr_25000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___25002,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25022 = arguments.length;
switch (G__25022) {
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
var c__23661__auto___25076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___25076,out){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___25076,out){
return (function (state_25054){
var state_val_25055 = (state_25054[(1)]);
if((state_val_25055 === (7))){
var inst_25034 = (state_25054[(7)]);
var inst_25033 = (state_25054[(8)]);
var inst_25033__$1 = (state_25054[(2)]);
var inst_25034__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25033__$1,(0),null);
var inst_25035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25033__$1,(1),null);
var inst_25036 = (inst_25034__$1 == null);
var state_25054__$1 = (function (){var statearr_25056 = state_25054;
(statearr_25056[(9)] = inst_25035);

(statearr_25056[(7)] = inst_25034__$1);

(statearr_25056[(8)] = inst_25033__$1);

return statearr_25056;
})();
if(cljs.core.truth_(inst_25036)){
var statearr_25057_25077 = state_25054__$1;
(statearr_25057_25077[(1)] = (8));

} else {
var statearr_25058_25078 = state_25054__$1;
(statearr_25058_25078[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (1))){
var inst_25023 = cljs.core.vec(chs);
var inst_25024 = inst_25023;
var state_25054__$1 = (function (){var statearr_25059 = state_25054;
(statearr_25059[(10)] = inst_25024);

return statearr_25059;
})();
var statearr_25060_25079 = state_25054__$1;
(statearr_25060_25079[(2)] = null);

(statearr_25060_25079[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (4))){
var inst_25024 = (state_25054[(10)]);
var state_25054__$1 = state_25054;
return cljs.core.async.ioc_alts_BANG_(state_25054__$1,(7),inst_25024);
} else {
if((state_val_25055 === (6))){
var inst_25050 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25061_25080 = state_25054__$1;
(statearr_25061_25080[(2)] = inst_25050);

(statearr_25061_25080[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (3))){
var inst_25052 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25054__$1,inst_25052);
} else {
if((state_val_25055 === (2))){
var inst_25024 = (state_25054[(10)]);
var inst_25026 = cljs.core.count(inst_25024);
var inst_25027 = (inst_25026 > (0));
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_25027)){
var statearr_25063_25081 = state_25054__$1;
(statearr_25063_25081[(1)] = (4));

} else {
var statearr_25064_25082 = state_25054__$1;
(statearr_25064_25082[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (11))){
var inst_25024 = (state_25054[(10)]);
var inst_25043 = (state_25054[(2)]);
var tmp25062 = inst_25024;
var inst_25024__$1 = tmp25062;
var state_25054__$1 = (function (){var statearr_25065 = state_25054;
(statearr_25065[(10)] = inst_25024__$1);

(statearr_25065[(11)] = inst_25043);

return statearr_25065;
})();
var statearr_25066_25083 = state_25054__$1;
(statearr_25066_25083[(2)] = null);

(statearr_25066_25083[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (9))){
var inst_25034 = (state_25054[(7)]);
var state_25054__$1 = state_25054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25054__$1,(11),out,inst_25034);
} else {
if((state_val_25055 === (5))){
var inst_25048 = cljs.core.async.close_BANG_(out);
var state_25054__$1 = state_25054;
var statearr_25067_25084 = state_25054__$1;
(statearr_25067_25084[(2)] = inst_25048);

(statearr_25067_25084[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (10))){
var inst_25046 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25068_25085 = state_25054__$1;
(statearr_25068_25085[(2)] = inst_25046);

(statearr_25068_25085[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25055 === (8))){
var inst_25024 = (state_25054[(10)]);
var inst_25035 = (state_25054[(9)]);
var inst_25034 = (state_25054[(7)]);
var inst_25033 = (state_25054[(8)]);
var inst_25038 = (function (){var cs = inst_25024;
var vec__25029 = inst_25033;
var v = inst_25034;
var c = inst_25035;
return ((function (cs,vec__25029,v,c,inst_25024,inst_25035,inst_25034,inst_25033,state_val_25055,c__23661__auto___25076,out){
return (function (p1__25020_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25020_SHARP_);
});
;})(cs,vec__25029,v,c,inst_25024,inst_25035,inst_25034,inst_25033,state_val_25055,c__23661__auto___25076,out))
})();
var inst_25039 = cljs.core.filterv(inst_25038,inst_25024);
var inst_25024__$1 = inst_25039;
var state_25054__$1 = (function (){var statearr_25069 = state_25054;
(statearr_25069[(10)] = inst_25024__$1);

return statearr_25069;
})();
var statearr_25070_25086 = state_25054__$1;
(statearr_25070_25086[(2)] = null);

(statearr_25070_25086[(1)] = (2));


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
});})(c__23661__auto___25076,out))
;
return ((function (switch__23559__auto__,c__23661__auto___25076,out){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_25071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25071[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_25071[(1)] = (1));

return statearr_25071;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_25054){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_25054);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e25072){if((e25072 instanceof Object)){
var ex__23563__auto__ = e25072;
var statearr_25073_25087 = state_25054;
(statearr_25073_25087[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25054);

return cljs.core.cst$kw$recur;
} else {
throw e25072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__25088 = state_25054;
state_25054 = G__25088;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_25054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_25054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___25076,out))
})();
var state__23663__auto__ = (function (){var statearr_25074 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_25074[(6)] = c__23661__auto___25076);

return statearr_25074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___25076,out))
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
var G__25090 = arguments.length;
switch (G__25090) {
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
var c__23661__auto___25135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___25135,out){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___25135,out){
return (function (state_25114){
var state_val_25115 = (state_25114[(1)]);
if((state_val_25115 === (7))){
var inst_25096 = (state_25114[(7)]);
var inst_25096__$1 = (state_25114[(2)]);
var inst_25097 = (inst_25096__$1 == null);
var inst_25098 = cljs.core.not(inst_25097);
var state_25114__$1 = (function (){var statearr_25116 = state_25114;
(statearr_25116[(7)] = inst_25096__$1);

return statearr_25116;
})();
if(inst_25098){
var statearr_25117_25136 = state_25114__$1;
(statearr_25117_25136[(1)] = (8));

} else {
var statearr_25118_25137 = state_25114__$1;
(statearr_25118_25137[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25115 === (1))){
var inst_25091 = (0);
var state_25114__$1 = (function (){var statearr_25119 = state_25114;
(statearr_25119[(8)] = inst_25091);

return statearr_25119;
})();
var statearr_25120_25138 = state_25114__$1;
(statearr_25120_25138[(2)] = null);

(statearr_25120_25138[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25115 === (4))){
var state_25114__$1 = state_25114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25114__$1,(7),ch);
} else {
if((state_val_25115 === (6))){
var inst_25109 = (state_25114[(2)]);
var state_25114__$1 = state_25114;
var statearr_25121_25139 = state_25114__$1;
(statearr_25121_25139[(2)] = inst_25109);

(statearr_25121_25139[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25115 === (3))){
var inst_25111 = (state_25114[(2)]);
var inst_25112 = cljs.core.async.close_BANG_(out);
var state_25114__$1 = (function (){var statearr_25122 = state_25114;
(statearr_25122[(9)] = inst_25111);

return statearr_25122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25114__$1,inst_25112);
} else {
if((state_val_25115 === (2))){
var inst_25091 = (state_25114[(8)]);
var inst_25093 = (inst_25091 < n);
var state_25114__$1 = state_25114;
if(cljs.core.truth_(inst_25093)){
var statearr_25123_25140 = state_25114__$1;
(statearr_25123_25140[(1)] = (4));

} else {
var statearr_25124_25141 = state_25114__$1;
(statearr_25124_25141[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25115 === (11))){
var inst_25091 = (state_25114[(8)]);
var inst_25101 = (state_25114[(2)]);
var inst_25102 = (inst_25091 + (1));
var inst_25091__$1 = inst_25102;
var state_25114__$1 = (function (){var statearr_25125 = state_25114;
(statearr_25125[(8)] = inst_25091__$1);

(statearr_25125[(10)] = inst_25101);

return statearr_25125;
})();
var statearr_25126_25142 = state_25114__$1;
(statearr_25126_25142[(2)] = null);

(statearr_25126_25142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25115 === (9))){
var state_25114__$1 = state_25114;
var statearr_25127_25143 = state_25114__$1;
(statearr_25127_25143[(2)] = null);

(statearr_25127_25143[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25115 === (5))){
var state_25114__$1 = state_25114;
var statearr_25128_25144 = state_25114__$1;
(statearr_25128_25144[(2)] = null);

(statearr_25128_25144[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25115 === (10))){
var inst_25106 = (state_25114[(2)]);
var state_25114__$1 = state_25114;
var statearr_25129_25145 = state_25114__$1;
(statearr_25129_25145[(2)] = inst_25106);

(statearr_25129_25145[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25115 === (8))){
var inst_25096 = (state_25114[(7)]);
var state_25114__$1 = state_25114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25114__$1,(11),out,inst_25096);
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
});})(c__23661__auto___25135,out))
;
return ((function (switch__23559__auto__,c__23661__auto___25135,out){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_25130 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25130[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_25130[(1)] = (1));

return statearr_25130;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_25114){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_25114);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e25131){if((e25131 instanceof Object)){
var ex__23563__auto__ = e25131;
var statearr_25132_25146 = state_25114;
(statearr_25132_25146[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25114);

return cljs.core.cst$kw$recur;
} else {
throw e25131;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__25147 = state_25114;
state_25114 = G__25147;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_25114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_25114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___25135,out))
})();
var state__23663__auto__ = (function (){var statearr_25133 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_25133[(6)] = c__23661__auto___25135);

return statearr_25133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___25135,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25149 = (function (f,ch,meta25150){
this.f = f;
this.ch = ch;
this.meta25150 = meta25150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25151,meta25150__$1){
var self__ = this;
var _25151__$1 = this;
return (new cljs.core.async.t_cljs$core$async25149(self__.f,self__.ch,meta25150__$1));
});

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25151){
var self__ = this;
var _25151__$1 = this;
return self__.meta25150;
});

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25152 = (function (f,ch,meta25150,_,fn1,meta25153){
this.f = f;
this.ch = ch;
this.meta25150 = meta25150;
this._ = _;
this.fn1 = fn1;
this.meta25153 = meta25153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25154,meta25153__$1){
var self__ = this;
var _25154__$1 = this;
return (new cljs.core.async.t_cljs$core$async25152(self__.f,self__.ch,self__.meta25150,self__._,self__.fn1,meta25153__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25154){
var self__ = this;
var _25154__$1 = this;
return self__.meta25153;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25148_SHARP_){
var G__25155 = (((p1__25148_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25148_SHARP_) : self__.f.call(null,p1__25148_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25155) : f1.call(null,G__25155));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25152.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25150,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async25149], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta25153], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25152";

cljs.core.async.t_cljs$core$async25152.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async25152");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25152 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25152(f__$1,ch__$1,meta25150__$1,___$2,fn1__$1,meta25153){
return (new cljs.core.async.t_cljs$core$async25152(f__$1,ch__$1,meta25150__$1,___$2,fn1__$1,meta25153));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25152(self__.f,self__.ch,self__.meta25150,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8376__auto__ = ret;
if(cljs.core.truth_(and__8376__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__8376__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25156 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25156) : self__.f.call(null,G__25156));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25150], null);
});

cljs.core.async.t_cljs$core$async25149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25149";

cljs.core.async.t_cljs$core$async25149.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async25149");
});

cljs.core.async.__GT_t_cljs$core$async25149 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25149(f__$1,ch__$1,meta25150){
return (new cljs.core.async.t_cljs$core$async25149(f__$1,ch__$1,meta25150));
});

}

return (new cljs.core.async.t_cljs$core$async25149(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25157 = (function (f,ch,meta25158){
this.f = f;
this.ch = ch;
this.meta25158 = meta25158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25159,meta25158__$1){
var self__ = this;
var _25159__$1 = this;
return (new cljs.core.async.t_cljs$core$async25157(self__.f,self__.ch,meta25158__$1));
});

cljs.core.async.t_cljs$core$async25157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25159){
var self__ = this;
var _25159__$1 = this;
return self__.meta25158;
});

cljs.core.async.t_cljs$core$async25157.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25157.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25157.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25157.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25157.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25157.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async25157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25158], null);
});

cljs.core.async.t_cljs$core$async25157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25157";

cljs.core.async.t_cljs$core$async25157.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async25157");
});

cljs.core.async.__GT_t_cljs$core$async25157 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25157(f__$1,ch__$1,meta25158){
return (new cljs.core.async.t_cljs$core$async25157(f__$1,ch__$1,meta25158));
});

}

return (new cljs.core.async.t_cljs$core$async25157(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25160 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25160 = (function (p,ch,meta25161){
this.p = p;
this.ch = ch;
this.meta25161 = meta25161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25162,meta25161__$1){
var self__ = this;
var _25162__$1 = this;
return (new cljs.core.async.t_cljs$core$async25160(self__.p,self__.ch,meta25161__$1));
});

cljs.core.async.t_cljs$core$async25160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25162){
var self__ = this;
var _25162__$1 = this;
return self__.meta25161;
});

cljs.core.async.t_cljs$core$async25160.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25160.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25160.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25160.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25161], null);
});

cljs.core.async.t_cljs$core$async25160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25160";

cljs.core.async.t_cljs$core$async25160.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async/t_cljs$core$async25160");
});

cljs.core.async.__GT_t_cljs$core$async25160 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25160(p__$1,ch__$1,meta25161){
return (new cljs.core.async.t_cljs$core$async25160(p__$1,ch__$1,meta25161));
});

}

return (new cljs.core.async.t_cljs$core$async25160(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25164 = arguments.length;
switch (G__25164) {
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
var c__23661__auto___25204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___25204,out){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___25204,out){
return (function (state_25185){
var state_val_25186 = (state_25185[(1)]);
if((state_val_25186 === (7))){
var inst_25181 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
var statearr_25187_25205 = state_25185__$1;
(statearr_25187_25205[(2)] = inst_25181);

(statearr_25187_25205[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25186 === (1))){
var state_25185__$1 = state_25185;
var statearr_25188_25206 = state_25185__$1;
(statearr_25188_25206[(2)] = null);

(statearr_25188_25206[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25186 === (4))){
var inst_25167 = (state_25185[(7)]);
var inst_25167__$1 = (state_25185[(2)]);
var inst_25168 = (inst_25167__$1 == null);
var state_25185__$1 = (function (){var statearr_25189 = state_25185;
(statearr_25189[(7)] = inst_25167__$1);

return statearr_25189;
})();
if(cljs.core.truth_(inst_25168)){
var statearr_25190_25207 = state_25185__$1;
(statearr_25190_25207[(1)] = (5));

} else {
var statearr_25191_25208 = state_25185__$1;
(statearr_25191_25208[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25186 === (6))){
var inst_25167 = (state_25185[(7)]);
var inst_25172 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25167) : p.call(null,inst_25167));
var state_25185__$1 = state_25185;
if(cljs.core.truth_(inst_25172)){
var statearr_25192_25209 = state_25185__$1;
(statearr_25192_25209[(1)] = (8));

} else {
var statearr_25193_25210 = state_25185__$1;
(statearr_25193_25210[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25186 === (3))){
var inst_25183 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25185__$1,inst_25183);
} else {
if((state_val_25186 === (2))){
var state_25185__$1 = state_25185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25185__$1,(4),ch);
} else {
if((state_val_25186 === (11))){
var inst_25175 = (state_25185[(2)]);
var state_25185__$1 = state_25185;
var statearr_25194_25211 = state_25185__$1;
(statearr_25194_25211[(2)] = inst_25175);

(statearr_25194_25211[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25186 === (9))){
var state_25185__$1 = state_25185;
var statearr_25195_25212 = state_25185__$1;
(statearr_25195_25212[(2)] = null);

(statearr_25195_25212[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25186 === (5))){
var inst_25170 = cljs.core.async.close_BANG_(out);
var state_25185__$1 = state_25185;
var statearr_25196_25213 = state_25185__$1;
(statearr_25196_25213[(2)] = inst_25170);

(statearr_25196_25213[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25186 === (10))){
var inst_25178 = (state_25185[(2)]);
var state_25185__$1 = (function (){var statearr_25197 = state_25185;
(statearr_25197[(8)] = inst_25178);

return statearr_25197;
})();
var statearr_25198_25214 = state_25185__$1;
(statearr_25198_25214[(2)] = null);

(statearr_25198_25214[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25186 === (8))){
var inst_25167 = (state_25185[(7)]);
var state_25185__$1 = state_25185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25185__$1,(11),out,inst_25167);
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
});})(c__23661__auto___25204,out))
;
return ((function (switch__23559__auto__,c__23661__auto___25204,out){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_25199 = [null,null,null,null,null,null,null,null,null];
(statearr_25199[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_25199[(1)] = (1));

return statearr_25199;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_25185){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_25185);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e25200){if((e25200 instanceof Object)){
var ex__23563__auto__ = e25200;
var statearr_25201_25215 = state_25185;
(statearr_25201_25215[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25185);

return cljs.core.cst$kw$recur;
} else {
throw e25200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__25216 = state_25185;
state_25185 = G__25216;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_25185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_25185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___25204,out))
})();
var state__23663__auto__ = (function (){var statearr_25202 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_25202[(6)] = c__23661__auto___25204);

return statearr_25202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___25204,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25218 = arguments.length;
switch (G__25218) {
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
var c__23661__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto__){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto__){
return (function (state_25281){
var state_val_25282 = (state_25281[(1)]);
if((state_val_25282 === (7))){
var inst_25277 = (state_25281[(2)]);
var state_25281__$1 = state_25281;
var statearr_25283_25321 = state_25281__$1;
(statearr_25283_25321[(2)] = inst_25277);

(statearr_25283_25321[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (20))){
var inst_25247 = (state_25281[(7)]);
var inst_25258 = (state_25281[(2)]);
var inst_25259 = cljs.core.next(inst_25247);
var inst_25233 = inst_25259;
var inst_25234 = null;
var inst_25235 = (0);
var inst_25236 = (0);
var state_25281__$1 = (function (){var statearr_25284 = state_25281;
(statearr_25284[(8)] = inst_25234);

(statearr_25284[(9)] = inst_25258);

(statearr_25284[(10)] = inst_25235);

(statearr_25284[(11)] = inst_25236);

(statearr_25284[(12)] = inst_25233);

return statearr_25284;
})();
var statearr_25285_25322 = state_25281__$1;
(statearr_25285_25322[(2)] = null);

(statearr_25285_25322[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (1))){
var state_25281__$1 = state_25281;
var statearr_25286_25323 = state_25281__$1;
(statearr_25286_25323[(2)] = null);

(statearr_25286_25323[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (4))){
var inst_25222 = (state_25281[(13)]);
var inst_25222__$1 = (state_25281[(2)]);
var inst_25223 = (inst_25222__$1 == null);
var state_25281__$1 = (function (){var statearr_25287 = state_25281;
(statearr_25287[(13)] = inst_25222__$1);

return statearr_25287;
})();
if(cljs.core.truth_(inst_25223)){
var statearr_25288_25324 = state_25281__$1;
(statearr_25288_25324[(1)] = (5));

} else {
var statearr_25289_25325 = state_25281__$1;
(statearr_25289_25325[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (15))){
var state_25281__$1 = state_25281;
var statearr_25293_25326 = state_25281__$1;
(statearr_25293_25326[(2)] = null);

(statearr_25293_25326[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (21))){
var state_25281__$1 = state_25281;
var statearr_25294_25327 = state_25281__$1;
(statearr_25294_25327[(2)] = null);

(statearr_25294_25327[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (13))){
var inst_25234 = (state_25281[(8)]);
var inst_25235 = (state_25281[(10)]);
var inst_25236 = (state_25281[(11)]);
var inst_25233 = (state_25281[(12)]);
var inst_25243 = (state_25281[(2)]);
var inst_25244 = (inst_25236 + (1));
var tmp25290 = inst_25234;
var tmp25291 = inst_25235;
var tmp25292 = inst_25233;
var inst_25233__$1 = tmp25292;
var inst_25234__$1 = tmp25290;
var inst_25235__$1 = tmp25291;
var inst_25236__$1 = inst_25244;
var state_25281__$1 = (function (){var statearr_25295 = state_25281;
(statearr_25295[(8)] = inst_25234__$1);

(statearr_25295[(14)] = inst_25243);

(statearr_25295[(10)] = inst_25235__$1);

(statearr_25295[(11)] = inst_25236__$1);

(statearr_25295[(12)] = inst_25233__$1);

return statearr_25295;
})();
var statearr_25296_25328 = state_25281__$1;
(statearr_25296_25328[(2)] = null);

(statearr_25296_25328[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (22))){
var state_25281__$1 = state_25281;
var statearr_25297_25329 = state_25281__$1;
(statearr_25297_25329[(2)] = null);

(statearr_25297_25329[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (6))){
var inst_25222 = (state_25281[(13)]);
var inst_25231 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25222) : f.call(null,inst_25222));
var inst_25232 = cljs.core.seq(inst_25231);
var inst_25233 = inst_25232;
var inst_25234 = null;
var inst_25235 = (0);
var inst_25236 = (0);
var state_25281__$1 = (function (){var statearr_25298 = state_25281;
(statearr_25298[(8)] = inst_25234);

(statearr_25298[(10)] = inst_25235);

(statearr_25298[(11)] = inst_25236);

(statearr_25298[(12)] = inst_25233);

return statearr_25298;
})();
var statearr_25299_25330 = state_25281__$1;
(statearr_25299_25330[(2)] = null);

(statearr_25299_25330[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (17))){
var inst_25247 = (state_25281[(7)]);
var inst_25251 = cljs.core.chunk_first(inst_25247);
var inst_25252 = cljs.core.chunk_rest(inst_25247);
var inst_25253 = cljs.core.count(inst_25251);
var inst_25233 = inst_25252;
var inst_25234 = inst_25251;
var inst_25235 = inst_25253;
var inst_25236 = (0);
var state_25281__$1 = (function (){var statearr_25300 = state_25281;
(statearr_25300[(8)] = inst_25234);

(statearr_25300[(10)] = inst_25235);

(statearr_25300[(11)] = inst_25236);

(statearr_25300[(12)] = inst_25233);

return statearr_25300;
})();
var statearr_25301_25331 = state_25281__$1;
(statearr_25301_25331[(2)] = null);

(statearr_25301_25331[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (3))){
var inst_25279 = (state_25281[(2)]);
var state_25281__$1 = state_25281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25281__$1,inst_25279);
} else {
if((state_val_25282 === (12))){
var inst_25267 = (state_25281[(2)]);
var state_25281__$1 = state_25281;
var statearr_25302_25332 = state_25281__$1;
(statearr_25302_25332[(2)] = inst_25267);

(statearr_25302_25332[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (2))){
var state_25281__$1 = state_25281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25281__$1,(4),in$);
} else {
if((state_val_25282 === (23))){
var inst_25275 = (state_25281[(2)]);
var state_25281__$1 = state_25281;
var statearr_25303_25333 = state_25281__$1;
(statearr_25303_25333[(2)] = inst_25275);

(statearr_25303_25333[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (19))){
var inst_25262 = (state_25281[(2)]);
var state_25281__$1 = state_25281;
var statearr_25304_25334 = state_25281__$1;
(statearr_25304_25334[(2)] = inst_25262);

(statearr_25304_25334[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (11))){
var inst_25247 = (state_25281[(7)]);
var inst_25233 = (state_25281[(12)]);
var inst_25247__$1 = cljs.core.seq(inst_25233);
var state_25281__$1 = (function (){var statearr_25305 = state_25281;
(statearr_25305[(7)] = inst_25247__$1);

return statearr_25305;
})();
if(inst_25247__$1){
var statearr_25306_25335 = state_25281__$1;
(statearr_25306_25335[(1)] = (14));

} else {
var statearr_25307_25336 = state_25281__$1;
(statearr_25307_25336[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (9))){
var inst_25269 = (state_25281[(2)]);
var inst_25270 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25281__$1 = (function (){var statearr_25308 = state_25281;
(statearr_25308[(15)] = inst_25269);

return statearr_25308;
})();
if(cljs.core.truth_(inst_25270)){
var statearr_25309_25337 = state_25281__$1;
(statearr_25309_25337[(1)] = (21));

} else {
var statearr_25310_25338 = state_25281__$1;
(statearr_25310_25338[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (5))){
var inst_25225 = cljs.core.async.close_BANG_(out);
var state_25281__$1 = state_25281;
var statearr_25311_25339 = state_25281__$1;
(statearr_25311_25339[(2)] = inst_25225);

(statearr_25311_25339[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (14))){
var inst_25247 = (state_25281[(7)]);
var inst_25249 = cljs.core.chunked_seq_QMARK_(inst_25247);
var state_25281__$1 = state_25281;
if(inst_25249){
var statearr_25312_25340 = state_25281__$1;
(statearr_25312_25340[(1)] = (17));

} else {
var statearr_25313_25341 = state_25281__$1;
(statearr_25313_25341[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (16))){
var inst_25265 = (state_25281[(2)]);
var state_25281__$1 = state_25281;
var statearr_25314_25342 = state_25281__$1;
(statearr_25314_25342[(2)] = inst_25265);

(statearr_25314_25342[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25282 === (10))){
var inst_25234 = (state_25281[(8)]);
var inst_25236 = (state_25281[(11)]);
var inst_25241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25234,inst_25236);
var state_25281__$1 = state_25281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25281__$1,(13),out,inst_25241);
} else {
if((state_val_25282 === (18))){
var inst_25247 = (state_25281[(7)]);
var inst_25256 = cljs.core.first(inst_25247);
var state_25281__$1 = state_25281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25281__$1,(20),out,inst_25256);
} else {
if((state_val_25282 === (8))){
var inst_25235 = (state_25281[(10)]);
var inst_25236 = (state_25281[(11)]);
var inst_25238 = (inst_25236 < inst_25235);
var inst_25239 = inst_25238;
var state_25281__$1 = state_25281;
if(cljs.core.truth_(inst_25239)){
var statearr_25315_25343 = state_25281__$1;
(statearr_25315_25343[(1)] = (10));

} else {
var statearr_25316_25344 = state_25281__$1;
(statearr_25316_25344[(1)] = (11));

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
});})(c__23661__auto__))
;
return ((function (switch__23559__auto__,c__23661__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23560__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23560__auto____0 = (function (){
var statearr_25317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25317[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23560__auto__);

(statearr_25317[(1)] = (1));

return statearr_25317;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23560__auto____1 = (function (state_25281){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_25281);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e25318){if((e25318 instanceof Object)){
var ex__23563__auto__ = e25318;
var statearr_25319_25345 = state_25281;
(statearr_25319_25345[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25281);

return cljs.core.cst$kw$recur;
} else {
throw e25318;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__25346 = state_25281;
state_25281 = G__25346;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23560__auto__ = function(state_25281){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23560__auto____1.call(this,state_25281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23560__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23560__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto__))
})();
var state__23663__auto__ = (function (){var statearr_25320 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_25320[(6)] = c__23661__auto__);

return statearr_25320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto__))
);

return c__23661__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25348 = arguments.length;
switch (G__25348) {
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
var G__25351 = arguments.length;
switch (G__25351) {
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
var G__25354 = arguments.length;
switch (G__25354) {
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
var c__23661__auto___25401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___25401,out){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___25401,out){
return (function (state_25378){
var state_val_25379 = (state_25378[(1)]);
if((state_val_25379 === (7))){
var inst_25373 = (state_25378[(2)]);
var state_25378__$1 = state_25378;
var statearr_25380_25402 = state_25378__$1;
(statearr_25380_25402[(2)] = inst_25373);

(statearr_25380_25402[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25379 === (1))){
var inst_25355 = null;
var state_25378__$1 = (function (){var statearr_25381 = state_25378;
(statearr_25381[(7)] = inst_25355);

return statearr_25381;
})();
var statearr_25382_25403 = state_25378__$1;
(statearr_25382_25403[(2)] = null);

(statearr_25382_25403[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25379 === (4))){
var inst_25358 = (state_25378[(8)]);
var inst_25358__$1 = (state_25378[(2)]);
var inst_25359 = (inst_25358__$1 == null);
var inst_25360 = cljs.core.not(inst_25359);
var state_25378__$1 = (function (){var statearr_25383 = state_25378;
(statearr_25383[(8)] = inst_25358__$1);

return statearr_25383;
})();
if(inst_25360){
var statearr_25384_25404 = state_25378__$1;
(statearr_25384_25404[(1)] = (5));

} else {
var statearr_25385_25405 = state_25378__$1;
(statearr_25385_25405[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25379 === (6))){
var state_25378__$1 = state_25378;
var statearr_25386_25406 = state_25378__$1;
(statearr_25386_25406[(2)] = null);

(statearr_25386_25406[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25379 === (3))){
var inst_25375 = (state_25378[(2)]);
var inst_25376 = cljs.core.async.close_BANG_(out);
var state_25378__$1 = (function (){var statearr_25387 = state_25378;
(statearr_25387[(9)] = inst_25375);

return statearr_25387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25378__$1,inst_25376);
} else {
if((state_val_25379 === (2))){
var state_25378__$1 = state_25378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25378__$1,(4),ch);
} else {
if((state_val_25379 === (11))){
var inst_25358 = (state_25378[(8)]);
var inst_25367 = (state_25378[(2)]);
var inst_25355 = inst_25358;
var state_25378__$1 = (function (){var statearr_25388 = state_25378;
(statearr_25388[(7)] = inst_25355);

(statearr_25388[(10)] = inst_25367);

return statearr_25388;
})();
var statearr_25389_25407 = state_25378__$1;
(statearr_25389_25407[(2)] = null);

(statearr_25389_25407[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25379 === (9))){
var inst_25358 = (state_25378[(8)]);
var state_25378__$1 = state_25378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25378__$1,(11),out,inst_25358);
} else {
if((state_val_25379 === (5))){
var inst_25358 = (state_25378[(8)]);
var inst_25355 = (state_25378[(7)]);
var inst_25362 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25358,inst_25355);
var state_25378__$1 = state_25378;
if(inst_25362){
var statearr_25391_25408 = state_25378__$1;
(statearr_25391_25408[(1)] = (8));

} else {
var statearr_25392_25409 = state_25378__$1;
(statearr_25392_25409[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25379 === (10))){
var inst_25370 = (state_25378[(2)]);
var state_25378__$1 = state_25378;
var statearr_25393_25410 = state_25378__$1;
(statearr_25393_25410[(2)] = inst_25370);

(statearr_25393_25410[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25379 === (8))){
var inst_25355 = (state_25378[(7)]);
var tmp25390 = inst_25355;
var inst_25355__$1 = tmp25390;
var state_25378__$1 = (function (){var statearr_25394 = state_25378;
(statearr_25394[(7)] = inst_25355__$1);

return statearr_25394;
})();
var statearr_25395_25411 = state_25378__$1;
(statearr_25395_25411[(2)] = null);

(statearr_25395_25411[(1)] = (2));


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
});})(c__23661__auto___25401,out))
;
return ((function (switch__23559__auto__,c__23661__auto___25401,out){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_25396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25396[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_25396[(1)] = (1));

return statearr_25396;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_25378){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_25378);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e25397){if((e25397 instanceof Object)){
var ex__23563__auto__ = e25397;
var statearr_25398_25412 = state_25378;
(statearr_25398_25412[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25378);

return cljs.core.cst$kw$recur;
} else {
throw e25397;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__25413 = state_25378;
state_25378 = G__25413;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_25378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_25378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___25401,out))
})();
var state__23663__auto__ = (function (){var statearr_25399 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_25399[(6)] = c__23661__auto___25401);

return statearr_25399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___25401,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25415 = arguments.length;
switch (G__25415) {
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
var c__23661__auto___25481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___25481,out){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___25481,out){
return (function (state_25453){
var state_val_25454 = (state_25453[(1)]);
if((state_val_25454 === (7))){
var inst_25449 = (state_25453[(2)]);
var state_25453__$1 = state_25453;
var statearr_25455_25482 = state_25453__$1;
(statearr_25455_25482[(2)] = inst_25449);

(statearr_25455_25482[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (1))){
var inst_25416 = (new Array(n));
var inst_25417 = inst_25416;
var inst_25418 = (0);
var state_25453__$1 = (function (){var statearr_25456 = state_25453;
(statearr_25456[(7)] = inst_25418);

(statearr_25456[(8)] = inst_25417);

return statearr_25456;
})();
var statearr_25457_25483 = state_25453__$1;
(statearr_25457_25483[(2)] = null);

(statearr_25457_25483[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (4))){
var inst_25421 = (state_25453[(9)]);
var inst_25421__$1 = (state_25453[(2)]);
var inst_25422 = (inst_25421__$1 == null);
var inst_25423 = cljs.core.not(inst_25422);
var state_25453__$1 = (function (){var statearr_25458 = state_25453;
(statearr_25458[(9)] = inst_25421__$1);

return statearr_25458;
})();
if(inst_25423){
var statearr_25459_25484 = state_25453__$1;
(statearr_25459_25484[(1)] = (5));

} else {
var statearr_25460_25485 = state_25453__$1;
(statearr_25460_25485[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (15))){
var inst_25443 = (state_25453[(2)]);
var state_25453__$1 = state_25453;
var statearr_25461_25486 = state_25453__$1;
(statearr_25461_25486[(2)] = inst_25443);

(statearr_25461_25486[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (13))){
var state_25453__$1 = state_25453;
var statearr_25462_25487 = state_25453__$1;
(statearr_25462_25487[(2)] = null);

(statearr_25462_25487[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (6))){
var inst_25418 = (state_25453[(7)]);
var inst_25439 = (inst_25418 > (0));
var state_25453__$1 = state_25453;
if(cljs.core.truth_(inst_25439)){
var statearr_25463_25488 = state_25453__$1;
(statearr_25463_25488[(1)] = (12));

} else {
var statearr_25464_25489 = state_25453__$1;
(statearr_25464_25489[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (3))){
var inst_25451 = (state_25453[(2)]);
var state_25453__$1 = state_25453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25453__$1,inst_25451);
} else {
if((state_val_25454 === (12))){
var inst_25417 = (state_25453[(8)]);
var inst_25441 = cljs.core.vec(inst_25417);
var state_25453__$1 = state_25453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25453__$1,(15),out,inst_25441);
} else {
if((state_val_25454 === (2))){
var state_25453__$1 = state_25453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25453__$1,(4),ch);
} else {
if((state_val_25454 === (11))){
var inst_25433 = (state_25453[(2)]);
var inst_25434 = (new Array(n));
var inst_25417 = inst_25434;
var inst_25418 = (0);
var state_25453__$1 = (function (){var statearr_25465 = state_25453;
(statearr_25465[(10)] = inst_25433);

(statearr_25465[(7)] = inst_25418);

(statearr_25465[(8)] = inst_25417);

return statearr_25465;
})();
var statearr_25466_25490 = state_25453__$1;
(statearr_25466_25490[(2)] = null);

(statearr_25466_25490[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (9))){
var inst_25417 = (state_25453[(8)]);
var inst_25431 = cljs.core.vec(inst_25417);
var state_25453__$1 = state_25453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25453__$1,(11),out,inst_25431);
} else {
if((state_val_25454 === (5))){
var inst_25421 = (state_25453[(9)]);
var inst_25418 = (state_25453[(7)]);
var inst_25417 = (state_25453[(8)]);
var inst_25426 = (state_25453[(11)]);
var inst_25425 = (inst_25417[inst_25418] = inst_25421);
var inst_25426__$1 = (inst_25418 + (1));
var inst_25427 = (inst_25426__$1 < n);
var state_25453__$1 = (function (){var statearr_25467 = state_25453;
(statearr_25467[(12)] = inst_25425);

(statearr_25467[(11)] = inst_25426__$1);

return statearr_25467;
})();
if(cljs.core.truth_(inst_25427)){
var statearr_25468_25491 = state_25453__$1;
(statearr_25468_25491[(1)] = (8));

} else {
var statearr_25469_25492 = state_25453__$1;
(statearr_25469_25492[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (14))){
var inst_25446 = (state_25453[(2)]);
var inst_25447 = cljs.core.async.close_BANG_(out);
var state_25453__$1 = (function (){var statearr_25471 = state_25453;
(statearr_25471[(13)] = inst_25446);

return statearr_25471;
})();
var statearr_25472_25493 = state_25453__$1;
(statearr_25472_25493[(2)] = inst_25447);

(statearr_25472_25493[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (10))){
var inst_25437 = (state_25453[(2)]);
var state_25453__$1 = state_25453;
var statearr_25473_25494 = state_25453__$1;
(statearr_25473_25494[(2)] = inst_25437);

(statearr_25473_25494[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25454 === (8))){
var inst_25417 = (state_25453[(8)]);
var inst_25426 = (state_25453[(11)]);
var tmp25470 = inst_25417;
var inst_25417__$1 = tmp25470;
var inst_25418 = inst_25426;
var state_25453__$1 = (function (){var statearr_25474 = state_25453;
(statearr_25474[(7)] = inst_25418);

(statearr_25474[(8)] = inst_25417__$1);

return statearr_25474;
})();
var statearr_25475_25495 = state_25453__$1;
(statearr_25475_25495[(2)] = null);

(statearr_25475_25495[(1)] = (2));


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
});})(c__23661__auto___25481,out))
;
return ((function (switch__23559__auto__,c__23661__auto___25481,out){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_25476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25476[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_25476[(1)] = (1));

return statearr_25476;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_25453){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_25453);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e25477){if((e25477 instanceof Object)){
var ex__23563__auto__ = e25477;
var statearr_25478_25496 = state_25453;
(statearr_25478_25496[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25453);

return cljs.core.cst$kw$recur;
} else {
throw e25477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__25497 = state_25453;
state_25453 = G__25497;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_25453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_25453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___25481,out))
})();
var state__23663__auto__ = (function (){var statearr_25479 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_25479[(6)] = c__23661__auto___25481);

return statearr_25479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___25481,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25499 = arguments.length;
switch (G__25499) {
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
var c__23661__auto___25569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__23661__auto___25569,out){
return (function (){
var f__23662__auto__ = (function (){var switch__23559__auto__ = ((function (c__23661__auto___25569,out){
return (function (state_25541){
var state_val_25542 = (state_25541[(1)]);
if((state_val_25542 === (7))){
var inst_25537 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
var statearr_25543_25570 = state_25541__$1;
(statearr_25543_25570[(2)] = inst_25537);

(statearr_25543_25570[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (1))){
var inst_25500 = [];
var inst_25501 = inst_25500;
var inst_25502 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_25541__$1 = (function (){var statearr_25544 = state_25541;
(statearr_25544[(7)] = inst_25502);

(statearr_25544[(8)] = inst_25501);

return statearr_25544;
})();
var statearr_25545_25571 = state_25541__$1;
(statearr_25545_25571[(2)] = null);

(statearr_25545_25571[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (4))){
var inst_25505 = (state_25541[(9)]);
var inst_25505__$1 = (state_25541[(2)]);
var inst_25506 = (inst_25505__$1 == null);
var inst_25507 = cljs.core.not(inst_25506);
var state_25541__$1 = (function (){var statearr_25546 = state_25541;
(statearr_25546[(9)] = inst_25505__$1);

return statearr_25546;
})();
if(inst_25507){
var statearr_25547_25572 = state_25541__$1;
(statearr_25547_25572[(1)] = (5));

} else {
var statearr_25548_25573 = state_25541__$1;
(statearr_25548_25573[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (15))){
var inst_25531 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
var statearr_25549_25574 = state_25541__$1;
(statearr_25549_25574[(2)] = inst_25531);

(statearr_25549_25574[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (13))){
var state_25541__$1 = state_25541;
var statearr_25550_25575 = state_25541__$1;
(statearr_25550_25575[(2)] = null);

(statearr_25550_25575[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (6))){
var inst_25501 = (state_25541[(8)]);
var inst_25526 = inst_25501.length;
var inst_25527 = (inst_25526 > (0));
var state_25541__$1 = state_25541;
if(cljs.core.truth_(inst_25527)){
var statearr_25551_25576 = state_25541__$1;
(statearr_25551_25576[(1)] = (12));

} else {
var statearr_25552_25577 = state_25541__$1;
(statearr_25552_25577[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (3))){
var inst_25539 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25541__$1,inst_25539);
} else {
if((state_val_25542 === (12))){
var inst_25501 = (state_25541[(8)]);
var inst_25529 = cljs.core.vec(inst_25501);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25541__$1,(15),out,inst_25529);
} else {
if((state_val_25542 === (2))){
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25541__$1,(4),ch);
} else {
if((state_val_25542 === (11))){
var inst_25509 = (state_25541[(10)]);
var inst_25505 = (state_25541[(9)]);
var inst_25519 = (state_25541[(2)]);
var inst_25520 = [];
var inst_25521 = inst_25520.push(inst_25505);
var inst_25501 = inst_25520;
var inst_25502 = inst_25509;
var state_25541__$1 = (function (){var statearr_25553 = state_25541;
(statearr_25553[(7)] = inst_25502);

(statearr_25553[(11)] = inst_25521);

(statearr_25553[(12)] = inst_25519);

(statearr_25553[(8)] = inst_25501);

return statearr_25553;
})();
var statearr_25554_25578 = state_25541__$1;
(statearr_25554_25578[(2)] = null);

(statearr_25554_25578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (9))){
var inst_25501 = (state_25541[(8)]);
var inst_25517 = cljs.core.vec(inst_25501);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25541__$1,(11),out,inst_25517);
} else {
if((state_val_25542 === (5))){
var inst_25502 = (state_25541[(7)]);
var inst_25509 = (state_25541[(10)]);
var inst_25505 = (state_25541[(9)]);
var inst_25509__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25505) : f.call(null,inst_25505));
var inst_25510 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25509__$1,inst_25502);
var inst_25511 = cljs.core.keyword_identical_QMARK_(inst_25502,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_25512 = (inst_25510) || (inst_25511);
var state_25541__$1 = (function (){var statearr_25555 = state_25541;
(statearr_25555[(10)] = inst_25509__$1);

return statearr_25555;
})();
if(cljs.core.truth_(inst_25512)){
var statearr_25556_25579 = state_25541__$1;
(statearr_25556_25579[(1)] = (8));

} else {
var statearr_25557_25580 = state_25541__$1;
(statearr_25557_25580[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (14))){
var inst_25534 = (state_25541[(2)]);
var inst_25535 = cljs.core.async.close_BANG_(out);
var state_25541__$1 = (function (){var statearr_25559 = state_25541;
(statearr_25559[(13)] = inst_25534);

return statearr_25559;
})();
var statearr_25560_25581 = state_25541__$1;
(statearr_25560_25581[(2)] = inst_25535);

(statearr_25560_25581[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (10))){
var inst_25524 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
var statearr_25561_25582 = state_25541__$1;
(statearr_25561_25582[(2)] = inst_25524);

(statearr_25561_25582[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25542 === (8))){
var inst_25509 = (state_25541[(10)]);
var inst_25505 = (state_25541[(9)]);
var inst_25501 = (state_25541[(8)]);
var inst_25514 = inst_25501.push(inst_25505);
var tmp25558 = inst_25501;
var inst_25501__$1 = tmp25558;
var inst_25502 = inst_25509;
var state_25541__$1 = (function (){var statearr_25562 = state_25541;
(statearr_25562[(7)] = inst_25502);

(statearr_25562[(14)] = inst_25514);

(statearr_25562[(8)] = inst_25501__$1);

return statearr_25562;
})();
var statearr_25563_25583 = state_25541__$1;
(statearr_25563_25583[(2)] = null);

(statearr_25563_25583[(1)] = (2));


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
});})(c__23661__auto___25569,out))
;
return ((function (switch__23559__auto__,c__23661__auto___25569,out){
return (function() {
var cljs$core$async$state_machine__23560__auto__ = null;
var cljs$core$async$state_machine__23560__auto____0 = (function (){
var statearr_25564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25564[(0)] = cljs$core$async$state_machine__23560__auto__);

(statearr_25564[(1)] = (1));

return statearr_25564;
});
var cljs$core$async$state_machine__23560__auto____1 = (function (state_25541){
while(true){
var ret_value__23561__auto__ = (function (){try{while(true){
var result__23562__auto__ = switch__23559__auto__(state_25541);
if(cljs.core.keyword_identical_QMARK_(result__23562__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__23562__auto__;
}
break;
}
}catch (e25565){if((e25565 instanceof Object)){
var ex__23563__auto__ = e25565;
var statearr_25566_25584 = state_25541;
(statearr_25566_25584[(5)] = ex__23563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25541);

return cljs.core.cst$kw$recur;
} else {
throw e25565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__23561__auto__,cljs.core.cst$kw$recur)){
var G__25585 = state_25541;
state_25541 = G__25585;
continue;
} else {
return ret_value__23561__auto__;
}
break;
}
});
cljs$core$async$state_machine__23560__auto__ = function(state_25541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23560__auto____1.call(this,state_25541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23560__auto____0;
cljs$core$async$state_machine__23560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23560__auto____1;
return cljs$core$async$state_machine__23560__auto__;
})()
;})(switch__23559__auto__,c__23661__auto___25569,out))
})();
var state__23663__auto__ = (function (){var statearr_25567 = (f__23662__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23662__auto__.cljs$core$IFn$_invoke$arity$0() : f__23662__auto__.call(null));
(statearr_25567[(6)] = c__23661__auto___25569);

return statearr_25567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23663__auto__);
});})(c__23661__auto___25569,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

