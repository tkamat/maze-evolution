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
var G__32676 = arguments.length;
switch (G__32676) {
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
if(typeof cljs.core.async.t_cljs$core$async32677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32677 = (function (f,blockable,meta32678){
this.f = f;
this.blockable = blockable;
this.meta32678 = meta32678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32679,meta32678__$1){
var self__ = this;
var _32679__$1 = this;
return (new cljs.core.async.t_cljs$core$async32677(self__.f,self__.blockable,meta32678__$1));
});

cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32679){
var self__ = this;
var _32679__$1 = this;
return self__.meta32678;
});

cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32678","meta32678",696878259,null)], null);
});

cljs.core.async.t_cljs$core$async32677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32677";

cljs.core.async.t_cljs$core$async32677.cljs$lang$ctorPrWriter = (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async32677");
});

cljs.core.async.__GT_t_cljs$core$async32677 = (function cljs$core$async$__GT_t_cljs$core$async32677(f__$1,blockable__$1,meta32678){
return (new cljs.core.async.t_cljs$core$async32677(f__$1,blockable__$1,meta32678));
});

}

return (new cljs.core.async.t_cljs$core$async32677(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32683 = arguments.length;
switch (G__32683) {
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
var G__32686 = arguments.length;
switch (G__32686) {
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
var G__32689 = arguments.length;
switch (G__32689) {
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
var val_32691 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32691);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32691,ret){
return (function (){
return fn1.call(null,val_32691);
});})(val_32691,ret))
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
var G__32693 = arguments.length;
switch (G__32693) {
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
var n__29281__auto___32695 = n;
var x_32696 = (0);
while(true){
if((x_32696 < n__29281__auto___32695)){
(a[x_32696] = (0));

var G__32697 = (x_32696 + (1));
x_32696 = G__32697;
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

var G__32698 = (i + (1));
i = G__32698;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32699 = (function (flag,meta32700){
this.flag = flag;
this.meta32700 = meta32700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32701,meta32700__$1){
var self__ = this;
var _32701__$1 = this;
return (new cljs.core.async.t_cljs$core$async32699(self__.flag,meta32700__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32701){
var self__ = this;
var _32701__$1 = this;
return self__.meta32700;
});})(flag))
;

cljs.core.async.t_cljs$core$async32699.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32699.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32699.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32699.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32699.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32700","meta32700",-949191092,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32699";

cljs.core.async.t_cljs$core$async32699.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async32699");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32699 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32699(flag__$1,meta32700){
return (new cljs.core.async.t_cljs$core$async32699(flag__$1,meta32700));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32699(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32702 = (function (flag,cb,meta32703){
this.flag = flag;
this.cb = cb;
this.meta32703 = meta32703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32704,meta32703__$1){
var self__ = this;
var _32704__$1 = this;
return (new cljs.core.async.t_cljs$core$async32702(self__.flag,self__.cb,meta32703__$1));
});

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32704){
var self__ = this;
var _32704__$1 = this;
return self__.meta32703;
});

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32703","meta32703",-79976456,null)], null);
});

cljs.core.async.t_cljs$core$async32702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32702";

cljs.core.async.t_cljs$core$async32702.cljs$lang$ctorPrWriter = (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async32702");
});

cljs.core.async.__GT_t_cljs$core$async32702 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32702(flag__$1,cb__$1,meta32703){
return (new cljs.core.async.t_cljs$core$async32702(flag__$1,cb__$1,meta32703));
});

}

return (new cljs.core.async.t_cljs$core$async32702(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32705_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32705_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32706_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32706_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28334__auto__ = wport;
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32707 = (i + (1));
i = G__32707;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28334__auto__ = ret;
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28322__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28322__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28322__auto__;
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
var args__29512__auto__ = [];
var len__29505__auto___32713 = arguments.length;
var i__29506__auto___32714 = (0);
while(true){
if((i__29506__auto___32714 < len__29505__auto___32713)){
args__29512__auto__.push((arguments[i__29506__auto___32714]));

var G__32715 = (i__29506__auto___32714 + (1));
i__29506__auto___32714 = G__32715;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((1) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29513__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32710){
var map__32711 = p__32710;
var map__32711__$1 = ((((!((map__32711 == null)))?((((map__32711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32711):map__32711);
var opts = map__32711__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32708){
var G__32709 = cljs.core.first.call(null,seq32708);
var seq32708__$1 = cljs.core.next.call(null,seq32708);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32709,seq32708__$1);
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
var G__32717 = arguments.length;
switch (G__32717) {
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
var c__32630__auto___32763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___32763){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___32763){
return (function (state_32741){
var state_val_32742 = (state_32741[(1)]);
if((state_val_32742 === (7))){
var inst_32737 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32743_32764 = state_32741__$1;
(statearr_32743_32764[(2)] = inst_32737);

(statearr_32743_32764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (1))){
var state_32741__$1 = state_32741;
var statearr_32744_32765 = state_32741__$1;
(statearr_32744_32765[(2)] = null);

(statearr_32744_32765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (4))){
var inst_32720 = (state_32741[(7)]);
var inst_32720__$1 = (state_32741[(2)]);
var inst_32721 = (inst_32720__$1 == null);
var state_32741__$1 = (function (){var statearr_32745 = state_32741;
(statearr_32745[(7)] = inst_32720__$1);

return statearr_32745;
})();
if(cljs.core.truth_(inst_32721)){
var statearr_32746_32766 = state_32741__$1;
(statearr_32746_32766[(1)] = (5));

} else {
var statearr_32747_32767 = state_32741__$1;
(statearr_32747_32767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (13))){
var state_32741__$1 = state_32741;
var statearr_32748_32768 = state_32741__$1;
(statearr_32748_32768[(2)] = null);

(statearr_32748_32768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (6))){
var inst_32720 = (state_32741[(7)]);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32741__$1,(11),to,inst_32720);
} else {
if((state_val_32742 === (3))){
var inst_32739 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32741__$1,inst_32739);
} else {
if((state_val_32742 === (12))){
var state_32741__$1 = state_32741;
var statearr_32749_32769 = state_32741__$1;
(statearr_32749_32769[(2)] = null);

(statearr_32749_32769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (2))){
var state_32741__$1 = state_32741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32741__$1,(4),from);
} else {
if((state_val_32742 === (11))){
var inst_32730 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
if(cljs.core.truth_(inst_32730)){
var statearr_32750_32770 = state_32741__$1;
(statearr_32750_32770[(1)] = (12));

} else {
var statearr_32751_32771 = state_32741__$1;
(statearr_32751_32771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (9))){
var state_32741__$1 = state_32741;
var statearr_32752_32772 = state_32741__$1;
(statearr_32752_32772[(2)] = null);

(statearr_32752_32772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (5))){
var state_32741__$1 = state_32741;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32753_32773 = state_32741__$1;
(statearr_32753_32773[(1)] = (8));

} else {
var statearr_32754_32774 = state_32741__$1;
(statearr_32754_32774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (14))){
var inst_32735 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32755_32775 = state_32741__$1;
(statearr_32755_32775[(2)] = inst_32735);

(statearr_32755_32775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (10))){
var inst_32727 = (state_32741[(2)]);
var state_32741__$1 = state_32741;
var statearr_32756_32776 = state_32741__$1;
(statearr_32756_32776[(2)] = inst_32727);

(statearr_32756_32776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32742 === (8))){
var inst_32724 = cljs.core.async.close_BANG_.call(null,to);
var state_32741__$1 = state_32741;
var statearr_32757_32777 = state_32741__$1;
(statearr_32757_32777[(2)] = inst_32724);

(statearr_32757_32777[(1)] = (10));


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
});})(c__32630__auto___32763))
;
return ((function (switch__32542__auto__,c__32630__auto___32763){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_32758 = [null,null,null,null,null,null,null,null];
(statearr_32758[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_32758[(1)] = (1));

return statearr_32758;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_32741){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_32741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e32759){if((e32759 instanceof Object)){
var ex__32546__auto__ = e32759;
var statearr_32760_32778 = state_32741;
(statearr_32760_32778[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32779 = state_32741;
state_32741 = G__32779;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_32741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_32741);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___32763))
})();
var state__32632__auto__ = (function (){var statearr_32761 = f__32631__auto__.call(null);
(statearr_32761[(6)] = c__32630__auto___32763);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___32763))
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
return (function (p__32780){
var vec__32781 = p__32780;
var v = cljs.core.nth.call(null,vec__32781,(0),null);
var p = cljs.core.nth.call(null,vec__32781,(1),null);
var job = vec__32781;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32630__auto___32952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___32952,res,vec__32781,v,p,job,jobs,results){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___32952,res,vec__32781,v,p,job,jobs,results){
return (function (state_32788){
var state_val_32789 = (state_32788[(1)]);
if((state_val_32789 === (1))){
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32788__$1,(2),res,v);
} else {
if((state_val_32789 === (2))){
var inst_32785 = (state_32788[(2)]);
var inst_32786 = cljs.core.async.close_BANG_.call(null,res);
var state_32788__$1 = (function (){var statearr_32790 = state_32788;
(statearr_32790[(7)] = inst_32785);

return statearr_32790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32788__$1,inst_32786);
} else {
return null;
}
}
});})(c__32630__auto___32952,res,vec__32781,v,p,job,jobs,results))
;
return ((function (switch__32542__auto__,c__32630__auto___32952,res,vec__32781,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0 = (function (){
var statearr_32791 = [null,null,null,null,null,null,null,null];
(statearr_32791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__);

(statearr_32791[(1)] = (1));

return statearr_32791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1 = (function (state_32788){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_32788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e32792){if((e32792 instanceof Object)){
var ex__32546__auto__ = e32792;
var statearr_32793_32953 = state_32788;
(statearr_32793_32953[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32954 = state_32788;
state_32788 = G__32954;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = function(state_32788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1.call(this,state_32788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___32952,res,vec__32781,v,p,job,jobs,results))
})();
var state__32632__auto__ = (function (){var statearr_32794 = f__32631__auto__.call(null);
(statearr_32794[(6)] = c__32630__auto___32952);

return statearr_32794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___32952,res,vec__32781,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32795){
var vec__32796 = p__32795;
var v = cljs.core.nth.call(null,vec__32796,(0),null);
var p = cljs.core.nth.call(null,vec__32796,(1),null);
var job = vec__32796;
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
var n__29281__auto___32955 = n;
var __32956 = (0);
while(true){
if((__32956 < n__29281__auto___32955)){
var G__32799_32957 = type;
var G__32799_32958__$1 = (((G__32799_32957 instanceof cljs.core.Keyword))?G__32799_32957.fqn:null);
switch (G__32799_32958__$1) {
case "compute":
var c__32630__auto___32960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32956,c__32630__auto___32960,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (__32956,c__32630__auto___32960,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async){
return (function (state_32812){
var state_val_32813 = (state_32812[(1)]);
if((state_val_32813 === (1))){
var state_32812__$1 = state_32812;
var statearr_32814_32961 = state_32812__$1;
(statearr_32814_32961[(2)] = null);

(statearr_32814_32961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (2))){
var state_32812__$1 = state_32812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32812__$1,(4),jobs);
} else {
if((state_val_32813 === (3))){
var inst_32810 = (state_32812[(2)]);
var state_32812__$1 = state_32812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32812__$1,inst_32810);
} else {
if((state_val_32813 === (4))){
var inst_32802 = (state_32812[(2)]);
var inst_32803 = process.call(null,inst_32802);
var state_32812__$1 = state_32812;
if(cljs.core.truth_(inst_32803)){
var statearr_32815_32962 = state_32812__$1;
(statearr_32815_32962[(1)] = (5));

} else {
var statearr_32816_32963 = state_32812__$1;
(statearr_32816_32963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (5))){
var state_32812__$1 = state_32812;
var statearr_32817_32964 = state_32812__$1;
(statearr_32817_32964[(2)] = null);

(statearr_32817_32964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (6))){
var state_32812__$1 = state_32812;
var statearr_32818_32965 = state_32812__$1;
(statearr_32818_32965[(2)] = null);

(statearr_32818_32965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (7))){
var inst_32808 = (state_32812[(2)]);
var state_32812__$1 = state_32812;
var statearr_32819_32966 = state_32812__$1;
(statearr_32819_32966[(2)] = inst_32808);

(statearr_32819_32966[(1)] = (3));


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
});})(__32956,c__32630__auto___32960,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async))
;
return ((function (__32956,switch__32542__auto__,c__32630__auto___32960,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0 = (function (){
var statearr_32820 = [null,null,null,null,null,null,null];
(statearr_32820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__);

(statearr_32820[(1)] = (1));

return statearr_32820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1 = (function (state_32812){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_32812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e32821){if((e32821 instanceof Object)){
var ex__32546__auto__ = e32821;
var statearr_32822_32967 = state_32812;
(statearr_32822_32967[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32968 = state_32812;
state_32812 = G__32968;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = function(state_32812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1.call(this,state_32812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__;
})()
;})(__32956,switch__32542__auto__,c__32630__auto___32960,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async))
})();
var state__32632__auto__ = (function (){var statearr_32823 = f__32631__auto__.call(null);
(statearr_32823[(6)] = c__32630__auto___32960);

return statearr_32823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(__32956,c__32630__auto___32960,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async))
);


break;
case "async":
var c__32630__auto___32969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32956,c__32630__auto___32969,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (__32956,c__32630__auto___32969,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async){
return (function (state_32836){
var state_val_32837 = (state_32836[(1)]);
if((state_val_32837 === (1))){
var state_32836__$1 = state_32836;
var statearr_32838_32970 = state_32836__$1;
(statearr_32838_32970[(2)] = null);

(statearr_32838_32970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (2))){
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32836__$1,(4),jobs);
} else {
if((state_val_32837 === (3))){
var inst_32834 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32836__$1,inst_32834);
} else {
if((state_val_32837 === (4))){
var inst_32826 = (state_32836[(2)]);
var inst_32827 = async.call(null,inst_32826);
var state_32836__$1 = state_32836;
if(cljs.core.truth_(inst_32827)){
var statearr_32839_32971 = state_32836__$1;
(statearr_32839_32971[(1)] = (5));

} else {
var statearr_32840_32972 = state_32836__$1;
(statearr_32840_32972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (5))){
var state_32836__$1 = state_32836;
var statearr_32841_32973 = state_32836__$1;
(statearr_32841_32973[(2)] = null);

(statearr_32841_32973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (6))){
var state_32836__$1 = state_32836;
var statearr_32842_32974 = state_32836__$1;
(statearr_32842_32974[(2)] = null);

(statearr_32842_32974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (7))){
var inst_32832 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
var statearr_32843_32975 = state_32836__$1;
(statearr_32843_32975[(2)] = inst_32832);

(statearr_32843_32975[(1)] = (3));


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
});})(__32956,c__32630__auto___32969,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async))
;
return ((function (__32956,switch__32542__auto__,c__32630__auto___32969,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0 = (function (){
var statearr_32844 = [null,null,null,null,null,null,null];
(statearr_32844[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__);

(statearr_32844[(1)] = (1));

return statearr_32844;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1 = (function (state_32836){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_32836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e32845){if((e32845 instanceof Object)){
var ex__32546__auto__ = e32845;
var statearr_32846_32976 = state_32836;
(statearr_32846_32976[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32977 = state_32836;
state_32836 = G__32977;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = function(state_32836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1.call(this,state_32836);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__;
})()
;})(__32956,switch__32542__auto__,c__32630__auto___32969,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async))
})();
var state__32632__auto__ = (function (){var statearr_32847 = f__32631__auto__.call(null);
(statearr_32847[(6)] = c__32630__auto___32969);

return statearr_32847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(__32956,c__32630__auto___32969,G__32799_32957,G__32799_32958__$1,n__29281__auto___32955,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32799_32958__$1)].join('')));

}

var G__32978 = (__32956 + (1));
__32956 = G__32978;
continue;
} else {
}
break;
}

var c__32630__auto___32979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___32979,jobs,results,process,async){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___32979,jobs,results,process,async){
return (function (state_32869){
var state_val_32870 = (state_32869[(1)]);
if((state_val_32870 === (1))){
var state_32869__$1 = state_32869;
var statearr_32871_32980 = state_32869__$1;
(statearr_32871_32980[(2)] = null);

(statearr_32871_32980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (2))){
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32869__$1,(4),from);
} else {
if((state_val_32870 === (3))){
var inst_32867 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32869__$1,inst_32867);
} else {
if((state_val_32870 === (4))){
var inst_32850 = (state_32869[(7)]);
var inst_32850__$1 = (state_32869[(2)]);
var inst_32851 = (inst_32850__$1 == null);
var state_32869__$1 = (function (){var statearr_32872 = state_32869;
(statearr_32872[(7)] = inst_32850__$1);

return statearr_32872;
})();
if(cljs.core.truth_(inst_32851)){
var statearr_32873_32981 = state_32869__$1;
(statearr_32873_32981[(1)] = (5));

} else {
var statearr_32874_32982 = state_32869__$1;
(statearr_32874_32982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (5))){
var inst_32853 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32869__$1 = state_32869;
var statearr_32875_32983 = state_32869__$1;
(statearr_32875_32983[(2)] = inst_32853);

(statearr_32875_32983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (6))){
var inst_32850 = (state_32869[(7)]);
var inst_32855 = (state_32869[(8)]);
var inst_32855__$1 = cljs.core.async.chan.call(null,(1));
var inst_32856 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32857 = [inst_32850,inst_32855__$1];
var inst_32858 = (new cljs.core.PersistentVector(null,2,(5),inst_32856,inst_32857,null));
var state_32869__$1 = (function (){var statearr_32876 = state_32869;
(statearr_32876[(8)] = inst_32855__$1);

return statearr_32876;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32869__$1,(8),jobs,inst_32858);
} else {
if((state_val_32870 === (7))){
var inst_32865 = (state_32869[(2)]);
var state_32869__$1 = state_32869;
var statearr_32877_32984 = state_32869__$1;
(statearr_32877_32984[(2)] = inst_32865);

(statearr_32877_32984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32870 === (8))){
var inst_32855 = (state_32869[(8)]);
var inst_32860 = (state_32869[(2)]);
var state_32869__$1 = (function (){var statearr_32878 = state_32869;
(statearr_32878[(9)] = inst_32860);

return statearr_32878;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32869__$1,(9),results,inst_32855);
} else {
if((state_val_32870 === (9))){
var inst_32862 = (state_32869[(2)]);
var state_32869__$1 = (function (){var statearr_32879 = state_32869;
(statearr_32879[(10)] = inst_32862);

return statearr_32879;
})();
var statearr_32880_32985 = state_32869__$1;
(statearr_32880_32985[(2)] = null);

(statearr_32880_32985[(1)] = (2));


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
});})(c__32630__auto___32979,jobs,results,process,async))
;
return ((function (switch__32542__auto__,c__32630__auto___32979,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0 = (function (){
var statearr_32881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__);

(statearr_32881[(1)] = (1));

return statearr_32881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1 = (function (state_32869){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_32869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e32882){if((e32882 instanceof Object)){
var ex__32546__auto__ = e32882;
var statearr_32883_32986 = state_32869;
(statearr_32883_32986[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32987 = state_32869;
state_32869 = G__32987;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = function(state_32869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1.call(this,state_32869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___32979,jobs,results,process,async))
})();
var state__32632__auto__ = (function (){var statearr_32884 = f__32631__auto__.call(null);
(statearr_32884[(6)] = c__32630__auto___32979);

return statearr_32884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___32979,jobs,results,process,async))
);


var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__,jobs,results,process,async){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__,jobs,results,process,async){
return (function (state_32922){
var state_val_32923 = (state_32922[(1)]);
if((state_val_32923 === (7))){
var inst_32918 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
var statearr_32924_32988 = state_32922__$1;
(statearr_32924_32988[(2)] = inst_32918);

(statearr_32924_32988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (20))){
var state_32922__$1 = state_32922;
var statearr_32925_32989 = state_32922__$1;
(statearr_32925_32989[(2)] = null);

(statearr_32925_32989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (1))){
var state_32922__$1 = state_32922;
var statearr_32926_32990 = state_32922__$1;
(statearr_32926_32990[(2)] = null);

(statearr_32926_32990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (4))){
var inst_32887 = (state_32922[(7)]);
var inst_32887__$1 = (state_32922[(2)]);
var inst_32888 = (inst_32887__$1 == null);
var state_32922__$1 = (function (){var statearr_32927 = state_32922;
(statearr_32927[(7)] = inst_32887__$1);

return statearr_32927;
})();
if(cljs.core.truth_(inst_32888)){
var statearr_32928_32991 = state_32922__$1;
(statearr_32928_32991[(1)] = (5));

} else {
var statearr_32929_32992 = state_32922__$1;
(statearr_32929_32992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (15))){
var inst_32900 = (state_32922[(8)]);
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32922__$1,(18),to,inst_32900);
} else {
if((state_val_32923 === (21))){
var inst_32913 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
var statearr_32930_32993 = state_32922__$1;
(statearr_32930_32993[(2)] = inst_32913);

(statearr_32930_32993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (13))){
var inst_32915 = (state_32922[(2)]);
var state_32922__$1 = (function (){var statearr_32931 = state_32922;
(statearr_32931[(9)] = inst_32915);

return statearr_32931;
})();
var statearr_32932_32994 = state_32922__$1;
(statearr_32932_32994[(2)] = null);

(statearr_32932_32994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (6))){
var inst_32887 = (state_32922[(7)]);
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32922__$1,(11),inst_32887);
} else {
if((state_val_32923 === (17))){
var inst_32908 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
if(cljs.core.truth_(inst_32908)){
var statearr_32933_32995 = state_32922__$1;
(statearr_32933_32995[(1)] = (19));

} else {
var statearr_32934_32996 = state_32922__$1;
(statearr_32934_32996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (3))){
var inst_32920 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32922__$1,inst_32920);
} else {
if((state_val_32923 === (12))){
var inst_32897 = (state_32922[(10)]);
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32922__$1,(14),inst_32897);
} else {
if((state_val_32923 === (2))){
var state_32922__$1 = state_32922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32922__$1,(4),results);
} else {
if((state_val_32923 === (19))){
var state_32922__$1 = state_32922;
var statearr_32935_32997 = state_32922__$1;
(statearr_32935_32997[(2)] = null);

(statearr_32935_32997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (11))){
var inst_32897 = (state_32922[(2)]);
var state_32922__$1 = (function (){var statearr_32936 = state_32922;
(statearr_32936[(10)] = inst_32897);

return statearr_32936;
})();
var statearr_32937_32998 = state_32922__$1;
(statearr_32937_32998[(2)] = null);

(statearr_32937_32998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (9))){
var state_32922__$1 = state_32922;
var statearr_32938_32999 = state_32922__$1;
(statearr_32938_32999[(2)] = null);

(statearr_32938_32999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (5))){
var state_32922__$1 = state_32922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32939_33000 = state_32922__$1;
(statearr_32939_33000[(1)] = (8));

} else {
var statearr_32940_33001 = state_32922__$1;
(statearr_32940_33001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (14))){
var inst_32902 = (state_32922[(11)]);
var inst_32900 = (state_32922[(8)]);
var inst_32900__$1 = (state_32922[(2)]);
var inst_32901 = (inst_32900__$1 == null);
var inst_32902__$1 = cljs.core.not.call(null,inst_32901);
var state_32922__$1 = (function (){var statearr_32941 = state_32922;
(statearr_32941[(11)] = inst_32902__$1);

(statearr_32941[(8)] = inst_32900__$1);

return statearr_32941;
})();
if(inst_32902__$1){
var statearr_32942_33002 = state_32922__$1;
(statearr_32942_33002[(1)] = (15));

} else {
var statearr_32943_33003 = state_32922__$1;
(statearr_32943_33003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (16))){
var inst_32902 = (state_32922[(11)]);
var state_32922__$1 = state_32922;
var statearr_32944_33004 = state_32922__$1;
(statearr_32944_33004[(2)] = inst_32902);

(statearr_32944_33004[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (10))){
var inst_32894 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
var statearr_32945_33005 = state_32922__$1;
(statearr_32945_33005[(2)] = inst_32894);

(statearr_32945_33005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (18))){
var inst_32905 = (state_32922[(2)]);
var state_32922__$1 = state_32922;
var statearr_32946_33006 = state_32922__$1;
(statearr_32946_33006[(2)] = inst_32905);

(statearr_32946_33006[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32923 === (8))){
var inst_32891 = cljs.core.async.close_BANG_.call(null,to);
var state_32922__$1 = state_32922;
var statearr_32947_33007 = state_32922__$1;
(statearr_32947_33007[(2)] = inst_32891);

(statearr_32947_33007[(1)] = (10));


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
});})(c__32630__auto__,jobs,results,process,async))
;
return ((function (switch__32542__auto__,c__32630__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0 = (function (){
var statearr_32948 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32948[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__);

(statearr_32948[(1)] = (1));

return statearr_32948;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1 = (function (state_32922){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_32922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e32949){if((e32949 instanceof Object)){
var ex__32546__auto__ = e32949;
var statearr_32950_33008 = state_32922;
(statearr_32950_33008[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33009 = state_32922;
state_32922 = G__33009;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__ = function(state_32922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1.call(this,state_32922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32543__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__,jobs,results,process,async))
})();
var state__32632__auto__ = (function (){var statearr_32951 = f__32631__auto__.call(null);
(statearr_32951[(6)] = c__32630__auto__);

return statearr_32951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__,jobs,results,process,async))
);

return c__32630__auto__;
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
var G__33011 = arguments.length;
switch (G__33011) {
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
var G__33014 = arguments.length;
switch (G__33014) {
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
var G__33017 = arguments.length;
switch (G__33017) {
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
var c__32630__auto___33066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___33066,tc,fc){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___33066,tc,fc){
return (function (state_33043){
var state_val_33044 = (state_33043[(1)]);
if((state_val_33044 === (7))){
var inst_33039 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33045_33067 = state_33043__$1;
(statearr_33045_33067[(2)] = inst_33039);

(statearr_33045_33067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (1))){
var state_33043__$1 = state_33043;
var statearr_33046_33068 = state_33043__$1;
(statearr_33046_33068[(2)] = null);

(statearr_33046_33068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (4))){
var inst_33020 = (state_33043[(7)]);
var inst_33020__$1 = (state_33043[(2)]);
var inst_33021 = (inst_33020__$1 == null);
var state_33043__$1 = (function (){var statearr_33047 = state_33043;
(statearr_33047[(7)] = inst_33020__$1);

return statearr_33047;
})();
if(cljs.core.truth_(inst_33021)){
var statearr_33048_33069 = state_33043__$1;
(statearr_33048_33069[(1)] = (5));

} else {
var statearr_33049_33070 = state_33043__$1;
(statearr_33049_33070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (13))){
var state_33043__$1 = state_33043;
var statearr_33050_33071 = state_33043__$1;
(statearr_33050_33071[(2)] = null);

(statearr_33050_33071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (6))){
var inst_33020 = (state_33043[(7)]);
var inst_33026 = p.call(null,inst_33020);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_33026)){
var statearr_33051_33072 = state_33043__$1;
(statearr_33051_33072[(1)] = (9));

} else {
var statearr_33052_33073 = state_33043__$1;
(statearr_33052_33073[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (3))){
var inst_33041 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33043__$1,inst_33041);
} else {
if((state_val_33044 === (12))){
var state_33043__$1 = state_33043;
var statearr_33053_33074 = state_33043__$1;
(statearr_33053_33074[(2)] = null);

(statearr_33053_33074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (2))){
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(4),ch);
} else {
if((state_val_33044 === (11))){
var inst_33020 = (state_33043[(7)]);
var inst_33030 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33043__$1,(8),inst_33030,inst_33020);
} else {
if((state_val_33044 === (9))){
var state_33043__$1 = state_33043;
var statearr_33054_33075 = state_33043__$1;
(statearr_33054_33075[(2)] = tc);

(statearr_33054_33075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (5))){
var inst_33023 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33024 = cljs.core.async.close_BANG_.call(null,fc);
var state_33043__$1 = (function (){var statearr_33055 = state_33043;
(statearr_33055[(8)] = inst_33023);

return statearr_33055;
})();
var statearr_33056_33076 = state_33043__$1;
(statearr_33056_33076[(2)] = inst_33024);

(statearr_33056_33076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (14))){
var inst_33037 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33057_33077 = state_33043__$1;
(statearr_33057_33077[(2)] = inst_33037);

(statearr_33057_33077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (10))){
var state_33043__$1 = state_33043;
var statearr_33058_33078 = state_33043__$1;
(statearr_33058_33078[(2)] = fc);

(statearr_33058_33078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (8))){
var inst_33032 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_33032)){
var statearr_33059_33079 = state_33043__$1;
(statearr_33059_33079[(1)] = (12));

} else {
var statearr_33060_33080 = state_33043__$1;
(statearr_33060_33080[(1)] = (13));

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
});})(c__32630__auto___33066,tc,fc))
;
return ((function (switch__32542__auto__,c__32630__auto___33066,tc,fc){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_33061 = [null,null,null,null,null,null,null,null,null];
(statearr_33061[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_33061[(1)] = (1));

return statearr_33061;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_33043){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_33043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e33062){if((e33062 instanceof Object)){
var ex__32546__auto__ = e33062;
var statearr_33063_33081 = state_33043;
(statearr_33063_33081[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33082 = state_33043;
state_33043 = G__33082;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_33043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_33043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___33066,tc,fc))
})();
var state__32632__auto__ = (function (){var statearr_33064 = f__32631__auto__.call(null);
(statearr_33064[(6)] = c__32630__auto___33066);

return statearr_33064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___33066,tc,fc))
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
var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__){
return (function (state_33103){
var state_val_33104 = (state_33103[(1)]);
if((state_val_33104 === (7))){
var inst_33099 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33105_33123 = state_33103__$1;
(statearr_33105_33123[(2)] = inst_33099);

(statearr_33105_33123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (1))){
var inst_33083 = init;
var state_33103__$1 = (function (){var statearr_33106 = state_33103;
(statearr_33106[(7)] = inst_33083);

return statearr_33106;
})();
var statearr_33107_33124 = state_33103__$1;
(statearr_33107_33124[(2)] = null);

(statearr_33107_33124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (4))){
var inst_33086 = (state_33103[(8)]);
var inst_33086__$1 = (state_33103[(2)]);
var inst_33087 = (inst_33086__$1 == null);
var state_33103__$1 = (function (){var statearr_33108 = state_33103;
(statearr_33108[(8)] = inst_33086__$1);

return statearr_33108;
})();
if(cljs.core.truth_(inst_33087)){
var statearr_33109_33125 = state_33103__$1;
(statearr_33109_33125[(1)] = (5));

} else {
var statearr_33110_33126 = state_33103__$1;
(statearr_33110_33126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (6))){
var inst_33090 = (state_33103[(9)]);
var inst_33086 = (state_33103[(8)]);
var inst_33083 = (state_33103[(7)]);
var inst_33090__$1 = f.call(null,inst_33083,inst_33086);
var inst_33091 = cljs.core.reduced_QMARK_.call(null,inst_33090__$1);
var state_33103__$1 = (function (){var statearr_33111 = state_33103;
(statearr_33111[(9)] = inst_33090__$1);

return statearr_33111;
})();
if(inst_33091){
var statearr_33112_33127 = state_33103__$1;
(statearr_33112_33127[(1)] = (8));

} else {
var statearr_33113_33128 = state_33103__$1;
(statearr_33113_33128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (3))){
var inst_33101 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33103__$1,inst_33101);
} else {
if((state_val_33104 === (2))){
var state_33103__$1 = state_33103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33103__$1,(4),ch);
} else {
if((state_val_33104 === (9))){
var inst_33090 = (state_33103[(9)]);
var inst_33083 = inst_33090;
var state_33103__$1 = (function (){var statearr_33114 = state_33103;
(statearr_33114[(7)] = inst_33083);

return statearr_33114;
})();
var statearr_33115_33129 = state_33103__$1;
(statearr_33115_33129[(2)] = null);

(statearr_33115_33129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (5))){
var inst_33083 = (state_33103[(7)]);
var state_33103__$1 = state_33103;
var statearr_33116_33130 = state_33103__$1;
(statearr_33116_33130[(2)] = inst_33083);

(statearr_33116_33130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (10))){
var inst_33097 = (state_33103[(2)]);
var state_33103__$1 = state_33103;
var statearr_33117_33131 = state_33103__$1;
(statearr_33117_33131[(2)] = inst_33097);

(statearr_33117_33131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33104 === (8))){
var inst_33090 = (state_33103[(9)]);
var inst_33093 = cljs.core.deref.call(null,inst_33090);
var state_33103__$1 = state_33103;
var statearr_33118_33132 = state_33103__$1;
(statearr_33118_33132[(2)] = inst_33093);

(statearr_33118_33132[(1)] = (10));


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
});})(c__32630__auto__))
;
return ((function (switch__32542__auto__,c__32630__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32543__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32543__auto____0 = (function (){
var statearr_33119 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33119[(0)] = cljs$core$async$reduce_$_state_machine__32543__auto__);

(statearr_33119[(1)] = (1));

return statearr_33119;
});
var cljs$core$async$reduce_$_state_machine__32543__auto____1 = (function (state_33103){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_33103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e33120){if((e33120 instanceof Object)){
var ex__32546__auto__ = e33120;
var statearr_33121_33133 = state_33103;
(statearr_33121_33133[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33134 = state_33103;
state_33103 = G__33134;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32543__auto__ = function(state_33103){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32543__auto____1.call(this,state_33103);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32543__auto____0;
cljs$core$async$reduce_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32543__auto____1;
return cljs$core$async$reduce_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__))
})();
var state__32632__auto__ = (function (){var statearr_33122 = f__32631__auto__.call(null);
(statearr_33122[(6)] = c__32630__auto__);

return statearr_33122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__))
);

return c__32630__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__,f__$1){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__,f__$1){
return (function (state_33140){
var state_val_33141 = (state_33140[(1)]);
if((state_val_33141 === (1))){
var inst_33135 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33140__$1 = state_33140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33140__$1,(2),inst_33135);
} else {
if((state_val_33141 === (2))){
var inst_33137 = (state_33140[(2)]);
var inst_33138 = f__$1.call(null,inst_33137);
var state_33140__$1 = state_33140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33140__$1,inst_33138);
} else {
return null;
}
}
});})(c__32630__auto__,f__$1))
;
return ((function (switch__32542__auto__,c__32630__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32543__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32543__auto____0 = (function (){
var statearr_33142 = [null,null,null,null,null,null,null];
(statearr_33142[(0)] = cljs$core$async$transduce_$_state_machine__32543__auto__);

(statearr_33142[(1)] = (1));

return statearr_33142;
});
var cljs$core$async$transduce_$_state_machine__32543__auto____1 = (function (state_33140){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_33140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e33143){if((e33143 instanceof Object)){
var ex__32546__auto__ = e33143;
var statearr_33144_33146 = state_33140;
(statearr_33144_33146[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33147 = state_33140;
state_33140 = G__33147;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32543__auto__ = function(state_33140){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32543__auto____1.call(this,state_33140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32543__auto____0;
cljs$core$async$transduce_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32543__auto____1;
return cljs$core$async$transduce_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__,f__$1))
})();
var state__32632__auto__ = (function (){var statearr_33145 = f__32631__auto__.call(null);
(statearr_33145[(6)] = c__32630__auto__);

return statearr_33145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__,f__$1))
);

return c__32630__auto__;
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
var G__33149 = arguments.length;
switch (G__33149) {
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
var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__){
return (function (state_33174){
var state_val_33175 = (state_33174[(1)]);
if((state_val_33175 === (7))){
var inst_33156 = (state_33174[(2)]);
var state_33174__$1 = state_33174;
var statearr_33176_33197 = state_33174__$1;
(statearr_33176_33197[(2)] = inst_33156);

(statearr_33176_33197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (1))){
var inst_33150 = cljs.core.seq.call(null,coll);
var inst_33151 = inst_33150;
var state_33174__$1 = (function (){var statearr_33177 = state_33174;
(statearr_33177[(7)] = inst_33151);

return statearr_33177;
})();
var statearr_33178_33198 = state_33174__$1;
(statearr_33178_33198[(2)] = null);

(statearr_33178_33198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (4))){
var inst_33151 = (state_33174[(7)]);
var inst_33154 = cljs.core.first.call(null,inst_33151);
var state_33174__$1 = state_33174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33174__$1,(7),ch,inst_33154);
} else {
if((state_val_33175 === (13))){
var inst_33168 = (state_33174[(2)]);
var state_33174__$1 = state_33174;
var statearr_33179_33199 = state_33174__$1;
(statearr_33179_33199[(2)] = inst_33168);

(statearr_33179_33199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (6))){
var inst_33159 = (state_33174[(2)]);
var state_33174__$1 = state_33174;
if(cljs.core.truth_(inst_33159)){
var statearr_33180_33200 = state_33174__$1;
(statearr_33180_33200[(1)] = (8));

} else {
var statearr_33181_33201 = state_33174__$1;
(statearr_33181_33201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (3))){
var inst_33172 = (state_33174[(2)]);
var state_33174__$1 = state_33174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33174__$1,inst_33172);
} else {
if((state_val_33175 === (12))){
var state_33174__$1 = state_33174;
var statearr_33182_33202 = state_33174__$1;
(statearr_33182_33202[(2)] = null);

(statearr_33182_33202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (2))){
var inst_33151 = (state_33174[(7)]);
var state_33174__$1 = state_33174;
if(cljs.core.truth_(inst_33151)){
var statearr_33183_33203 = state_33174__$1;
(statearr_33183_33203[(1)] = (4));

} else {
var statearr_33184_33204 = state_33174__$1;
(statearr_33184_33204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (11))){
var inst_33165 = cljs.core.async.close_BANG_.call(null,ch);
var state_33174__$1 = state_33174;
var statearr_33185_33205 = state_33174__$1;
(statearr_33185_33205[(2)] = inst_33165);

(statearr_33185_33205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (9))){
var state_33174__$1 = state_33174;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33186_33206 = state_33174__$1;
(statearr_33186_33206[(1)] = (11));

} else {
var statearr_33187_33207 = state_33174__$1;
(statearr_33187_33207[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (5))){
var inst_33151 = (state_33174[(7)]);
var state_33174__$1 = state_33174;
var statearr_33188_33208 = state_33174__$1;
(statearr_33188_33208[(2)] = inst_33151);

(statearr_33188_33208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (10))){
var inst_33170 = (state_33174[(2)]);
var state_33174__$1 = state_33174;
var statearr_33189_33209 = state_33174__$1;
(statearr_33189_33209[(2)] = inst_33170);

(statearr_33189_33209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33175 === (8))){
var inst_33151 = (state_33174[(7)]);
var inst_33161 = cljs.core.next.call(null,inst_33151);
var inst_33151__$1 = inst_33161;
var state_33174__$1 = (function (){var statearr_33190 = state_33174;
(statearr_33190[(7)] = inst_33151__$1);

return statearr_33190;
})();
var statearr_33191_33210 = state_33174__$1;
(statearr_33191_33210[(2)] = null);

(statearr_33191_33210[(1)] = (2));


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
});})(c__32630__auto__))
;
return ((function (switch__32542__auto__,c__32630__auto__){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_33192 = [null,null,null,null,null,null,null,null];
(statearr_33192[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_33192[(1)] = (1));

return statearr_33192;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_33174){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_33174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e33193){if((e33193 instanceof Object)){
var ex__32546__auto__ = e33193;
var statearr_33194_33211 = state_33174;
(statearr_33194_33211[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33212 = state_33174;
state_33174 = G__33212;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_33174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_33174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__))
})();
var state__32632__auto__ = (function (){var statearr_33195 = f__32631__auto__.call(null);
(statearr_33195[(6)] = c__32630__auto__);

return statearr_33195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__))
);

return c__32630__auto__;
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
var x__29017__auto__ = (((_ == null))?null:_);
var m__29018__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,_);
} else {
var m__29018__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,_);
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
var x__29017__auto__ = (((m == null))?null:m);
var m__29018__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29018__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__29017__auto__ = (((m == null))?null:m);
var m__29018__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,m,ch);
} else {
var m__29018__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,m,ch);
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
var x__29017__auto__ = (((m == null))?null:m);
var m__29018__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,m);
} else {
var m__29018__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33213 = (function (ch,cs,meta33214){
this.ch = ch;
this.cs = cs;
this.meta33214 = meta33214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33215,meta33214__$1){
var self__ = this;
var _33215__$1 = this;
return (new cljs.core.async.t_cljs$core$async33213(self__.ch,self__.cs,meta33214__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33215){
var self__ = this;
var _33215__$1 = this;
return self__.meta33214;
});})(cs))
;

cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33213.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33213.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33214","meta33214",-1737785527,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33213";

cljs.core.async.t_cljs$core$async33213.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async33213");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33213 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33213(ch__$1,cs__$1,meta33214){
return (new cljs.core.async.t_cljs$core$async33213(ch__$1,cs__$1,meta33214));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33213(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32630__auto___33435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___33435,cs,m,dchan,dctr,done){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___33435,cs,m,dchan,dctr,done){
return (function (state_33350){
var state_val_33351 = (state_33350[(1)]);
if((state_val_33351 === (7))){
var inst_33346 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
var statearr_33352_33436 = state_33350__$1;
(statearr_33352_33436[(2)] = inst_33346);

(statearr_33352_33436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (20))){
var inst_33249 = (state_33350[(7)]);
var inst_33261 = cljs.core.first.call(null,inst_33249);
var inst_33262 = cljs.core.nth.call(null,inst_33261,(0),null);
var inst_33263 = cljs.core.nth.call(null,inst_33261,(1),null);
var state_33350__$1 = (function (){var statearr_33353 = state_33350;
(statearr_33353[(8)] = inst_33262);

return statearr_33353;
})();
if(cljs.core.truth_(inst_33263)){
var statearr_33354_33437 = state_33350__$1;
(statearr_33354_33437[(1)] = (22));

} else {
var statearr_33355_33438 = state_33350__$1;
(statearr_33355_33438[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (27))){
var inst_33298 = (state_33350[(9)]);
var inst_33291 = (state_33350[(10)]);
var inst_33218 = (state_33350[(11)]);
var inst_33293 = (state_33350[(12)]);
var inst_33298__$1 = cljs.core._nth.call(null,inst_33291,inst_33293);
var inst_33299 = cljs.core.async.put_BANG_.call(null,inst_33298__$1,inst_33218,done);
var state_33350__$1 = (function (){var statearr_33356 = state_33350;
(statearr_33356[(9)] = inst_33298__$1);

return statearr_33356;
})();
if(cljs.core.truth_(inst_33299)){
var statearr_33357_33439 = state_33350__$1;
(statearr_33357_33439[(1)] = (30));

} else {
var statearr_33358_33440 = state_33350__$1;
(statearr_33358_33440[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (1))){
var state_33350__$1 = state_33350;
var statearr_33359_33441 = state_33350__$1;
(statearr_33359_33441[(2)] = null);

(statearr_33359_33441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (24))){
var inst_33249 = (state_33350[(7)]);
var inst_33268 = (state_33350[(2)]);
var inst_33269 = cljs.core.next.call(null,inst_33249);
var inst_33227 = inst_33269;
var inst_33228 = null;
var inst_33229 = (0);
var inst_33230 = (0);
var state_33350__$1 = (function (){var statearr_33360 = state_33350;
(statearr_33360[(13)] = inst_33229);

(statearr_33360[(14)] = inst_33227);

(statearr_33360[(15)] = inst_33230);

(statearr_33360[(16)] = inst_33228);

(statearr_33360[(17)] = inst_33268);

return statearr_33360;
})();
var statearr_33361_33442 = state_33350__$1;
(statearr_33361_33442[(2)] = null);

(statearr_33361_33442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (39))){
var state_33350__$1 = state_33350;
var statearr_33365_33443 = state_33350__$1;
(statearr_33365_33443[(2)] = null);

(statearr_33365_33443[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (4))){
var inst_33218 = (state_33350[(11)]);
var inst_33218__$1 = (state_33350[(2)]);
var inst_33219 = (inst_33218__$1 == null);
var state_33350__$1 = (function (){var statearr_33366 = state_33350;
(statearr_33366[(11)] = inst_33218__$1);

return statearr_33366;
})();
if(cljs.core.truth_(inst_33219)){
var statearr_33367_33444 = state_33350__$1;
(statearr_33367_33444[(1)] = (5));

} else {
var statearr_33368_33445 = state_33350__$1;
(statearr_33368_33445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (15))){
var inst_33229 = (state_33350[(13)]);
var inst_33227 = (state_33350[(14)]);
var inst_33230 = (state_33350[(15)]);
var inst_33228 = (state_33350[(16)]);
var inst_33245 = (state_33350[(2)]);
var inst_33246 = (inst_33230 + (1));
var tmp33362 = inst_33229;
var tmp33363 = inst_33227;
var tmp33364 = inst_33228;
var inst_33227__$1 = tmp33363;
var inst_33228__$1 = tmp33364;
var inst_33229__$1 = tmp33362;
var inst_33230__$1 = inst_33246;
var state_33350__$1 = (function (){var statearr_33369 = state_33350;
(statearr_33369[(13)] = inst_33229__$1);

(statearr_33369[(14)] = inst_33227__$1);

(statearr_33369[(15)] = inst_33230__$1);

(statearr_33369[(16)] = inst_33228__$1);

(statearr_33369[(18)] = inst_33245);

return statearr_33369;
})();
var statearr_33370_33446 = state_33350__$1;
(statearr_33370_33446[(2)] = null);

(statearr_33370_33446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (21))){
var inst_33272 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
var statearr_33374_33447 = state_33350__$1;
(statearr_33374_33447[(2)] = inst_33272);

(statearr_33374_33447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (31))){
var inst_33298 = (state_33350[(9)]);
var inst_33302 = done.call(null,null);
var inst_33303 = cljs.core.async.untap_STAR_.call(null,m,inst_33298);
var state_33350__$1 = (function (){var statearr_33375 = state_33350;
(statearr_33375[(19)] = inst_33302);

return statearr_33375;
})();
var statearr_33376_33448 = state_33350__$1;
(statearr_33376_33448[(2)] = inst_33303);

(statearr_33376_33448[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (32))){
var inst_33292 = (state_33350[(20)]);
var inst_33291 = (state_33350[(10)]);
var inst_33290 = (state_33350[(21)]);
var inst_33293 = (state_33350[(12)]);
var inst_33305 = (state_33350[(2)]);
var inst_33306 = (inst_33293 + (1));
var tmp33371 = inst_33292;
var tmp33372 = inst_33291;
var tmp33373 = inst_33290;
var inst_33290__$1 = tmp33373;
var inst_33291__$1 = tmp33372;
var inst_33292__$1 = tmp33371;
var inst_33293__$1 = inst_33306;
var state_33350__$1 = (function (){var statearr_33377 = state_33350;
(statearr_33377[(20)] = inst_33292__$1);

(statearr_33377[(10)] = inst_33291__$1);

(statearr_33377[(21)] = inst_33290__$1);

(statearr_33377[(22)] = inst_33305);

(statearr_33377[(12)] = inst_33293__$1);

return statearr_33377;
})();
var statearr_33378_33449 = state_33350__$1;
(statearr_33378_33449[(2)] = null);

(statearr_33378_33449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (40))){
var inst_33318 = (state_33350[(23)]);
var inst_33322 = done.call(null,null);
var inst_33323 = cljs.core.async.untap_STAR_.call(null,m,inst_33318);
var state_33350__$1 = (function (){var statearr_33379 = state_33350;
(statearr_33379[(24)] = inst_33322);

return statearr_33379;
})();
var statearr_33380_33450 = state_33350__$1;
(statearr_33380_33450[(2)] = inst_33323);

(statearr_33380_33450[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (33))){
var inst_33309 = (state_33350[(25)]);
var inst_33311 = cljs.core.chunked_seq_QMARK_.call(null,inst_33309);
var state_33350__$1 = state_33350;
if(inst_33311){
var statearr_33381_33451 = state_33350__$1;
(statearr_33381_33451[(1)] = (36));

} else {
var statearr_33382_33452 = state_33350__$1;
(statearr_33382_33452[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (13))){
var inst_33239 = (state_33350[(26)]);
var inst_33242 = cljs.core.async.close_BANG_.call(null,inst_33239);
var state_33350__$1 = state_33350;
var statearr_33383_33453 = state_33350__$1;
(statearr_33383_33453[(2)] = inst_33242);

(statearr_33383_33453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (22))){
var inst_33262 = (state_33350[(8)]);
var inst_33265 = cljs.core.async.close_BANG_.call(null,inst_33262);
var state_33350__$1 = state_33350;
var statearr_33384_33454 = state_33350__$1;
(statearr_33384_33454[(2)] = inst_33265);

(statearr_33384_33454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (36))){
var inst_33309 = (state_33350[(25)]);
var inst_33313 = cljs.core.chunk_first.call(null,inst_33309);
var inst_33314 = cljs.core.chunk_rest.call(null,inst_33309);
var inst_33315 = cljs.core.count.call(null,inst_33313);
var inst_33290 = inst_33314;
var inst_33291 = inst_33313;
var inst_33292 = inst_33315;
var inst_33293 = (0);
var state_33350__$1 = (function (){var statearr_33385 = state_33350;
(statearr_33385[(20)] = inst_33292);

(statearr_33385[(10)] = inst_33291);

(statearr_33385[(21)] = inst_33290);

(statearr_33385[(12)] = inst_33293);

return statearr_33385;
})();
var statearr_33386_33455 = state_33350__$1;
(statearr_33386_33455[(2)] = null);

(statearr_33386_33455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (41))){
var inst_33309 = (state_33350[(25)]);
var inst_33325 = (state_33350[(2)]);
var inst_33326 = cljs.core.next.call(null,inst_33309);
var inst_33290 = inst_33326;
var inst_33291 = null;
var inst_33292 = (0);
var inst_33293 = (0);
var state_33350__$1 = (function (){var statearr_33387 = state_33350;
(statearr_33387[(20)] = inst_33292);

(statearr_33387[(10)] = inst_33291);

(statearr_33387[(21)] = inst_33290);

(statearr_33387[(27)] = inst_33325);

(statearr_33387[(12)] = inst_33293);

return statearr_33387;
})();
var statearr_33388_33456 = state_33350__$1;
(statearr_33388_33456[(2)] = null);

(statearr_33388_33456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (43))){
var state_33350__$1 = state_33350;
var statearr_33389_33457 = state_33350__$1;
(statearr_33389_33457[(2)] = null);

(statearr_33389_33457[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (29))){
var inst_33334 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
var statearr_33390_33458 = state_33350__$1;
(statearr_33390_33458[(2)] = inst_33334);

(statearr_33390_33458[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (44))){
var inst_33343 = (state_33350[(2)]);
var state_33350__$1 = (function (){var statearr_33391 = state_33350;
(statearr_33391[(28)] = inst_33343);

return statearr_33391;
})();
var statearr_33392_33459 = state_33350__$1;
(statearr_33392_33459[(2)] = null);

(statearr_33392_33459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (6))){
var inst_33282 = (state_33350[(29)]);
var inst_33281 = cljs.core.deref.call(null,cs);
var inst_33282__$1 = cljs.core.keys.call(null,inst_33281);
var inst_33283 = cljs.core.count.call(null,inst_33282__$1);
var inst_33284 = cljs.core.reset_BANG_.call(null,dctr,inst_33283);
var inst_33289 = cljs.core.seq.call(null,inst_33282__$1);
var inst_33290 = inst_33289;
var inst_33291 = null;
var inst_33292 = (0);
var inst_33293 = (0);
var state_33350__$1 = (function (){var statearr_33393 = state_33350;
(statearr_33393[(20)] = inst_33292);

(statearr_33393[(29)] = inst_33282__$1);

(statearr_33393[(10)] = inst_33291);

(statearr_33393[(21)] = inst_33290);

(statearr_33393[(12)] = inst_33293);

(statearr_33393[(30)] = inst_33284);

return statearr_33393;
})();
var statearr_33394_33460 = state_33350__$1;
(statearr_33394_33460[(2)] = null);

(statearr_33394_33460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (28))){
var inst_33309 = (state_33350[(25)]);
var inst_33290 = (state_33350[(21)]);
var inst_33309__$1 = cljs.core.seq.call(null,inst_33290);
var state_33350__$1 = (function (){var statearr_33395 = state_33350;
(statearr_33395[(25)] = inst_33309__$1);

return statearr_33395;
})();
if(inst_33309__$1){
var statearr_33396_33461 = state_33350__$1;
(statearr_33396_33461[(1)] = (33));

} else {
var statearr_33397_33462 = state_33350__$1;
(statearr_33397_33462[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (25))){
var inst_33292 = (state_33350[(20)]);
var inst_33293 = (state_33350[(12)]);
var inst_33295 = (inst_33293 < inst_33292);
var inst_33296 = inst_33295;
var state_33350__$1 = state_33350;
if(cljs.core.truth_(inst_33296)){
var statearr_33398_33463 = state_33350__$1;
(statearr_33398_33463[(1)] = (27));

} else {
var statearr_33399_33464 = state_33350__$1;
(statearr_33399_33464[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (34))){
var state_33350__$1 = state_33350;
var statearr_33400_33465 = state_33350__$1;
(statearr_33400_33465[(2)] = null);

(statearr_33400_33465[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (17))){
var state_33350__$1 = state_33350;
var statearr_33401_33466 = state_33350__$1;
(statearr_33401_33466[(2)] = null);

(statearr_33401_33466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (3))){
var inst_33348 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33350__$1,inst_33348);
} else {
if((state_val_33351 === (12))){
var inst_33277 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
var statearr_33402_33467 = state_33350__$1;
(statearr_33402_33467[(2)] = inst_33277);

(statearr_33402_33467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (2))){
var state_33350__$1 = state_33350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33350__$1,(4),ch);
} else {
if((state_val_33351 === (23))){
var state_33350__$1 = state_33350;
var statearr_33403_33468 = state_33350__$1;
(statearr_33403_33468[(2)] = null);

(statearr_33403_33468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (35))){
var inst_33332 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
var statearr_33404_33469 = state_33350__$1;
(statearr_33404_33469[(2)] = inst_33332);

(statearr_33404_33469[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (19))){
var inst_33249 = (state_33350[(7)]);
var inst_33253 = cljs.core.chunk_first.call(null,inst_33249);
var inst_33254 = cljs.core.chunk_rest.call(null,inst_33249);
var inst_33255 = cljs.core.count.call(null,inst_33253);
var inst_33227 = inst_33254;
var inst_33228 = inst_33253;
var inst_33229 = inst_33255;
var inst_33230 = (0);
var state_33350__$1 = (function (){var statearr_33405 = state_33350;
(statearr_33405[(13)] = inst_33229);

(statearr_33405[(14)] = inst_33227);

(statearr_33405[(15)] = inst_33230);

(statearr_33405[(16)] = inst_33228);

return statearr_33405;
})();
var statearr_33406_33470 = state_33350__$1;
(statearr_33406_33470[(2)] = null);

(statearr_33406_33470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (11))){
var inst_33249 = (state_33350[(7)]);
var inst_33227 = (state_33350[(14)]);
var inst_33249__$1 = cljs.core.seq.call(null,inst_33227);
var state_33350__$1 = (function (){var statearr_33407 = state_33350;
(statearr_33407[(7)] = inst_33249__$1);

return statearr_33407;
})();
if(inst_33249__$1){
var statearr_33408_33471 = state_33350__$1;
(statearr_33408_33471[(1)] = (16));

} else {
var statearr_33409_33472 = state_33350__$1;
(statearr_33409_33472[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (9))){
var inst_33279 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
var statearr_33410_33473 = state_33350__$1;
(statearr_33410_33473[(2)] = inst_33279);

(statearr_33410_33473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (5))){
var inst_33225 = cljs.core.deref.call(null,cs);
var inst_33226 = cljs.core.seq.call(null,inst_33225);
var inst_33227 = inst_33226;
var inst_33228 = null;
var inst_33229 = (0);
var inst_33230 = (0);
var state_33350__$1 = (function (){var statearr_33411 = state_33350;
(statearr_33411[(13)] = inst_33229);

(statearr_33411[(14)] = inst_33227);

(statearr_33411[(15)] = inst_33230);

(statearr_33411[(16)] = inst_33228);

return statearr_33411;
})();
var statearr_33412_33474 = state_33350__$1;
(statearr_33412_33474[(2)] = null);

(statearr_33412_33474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (14))){
var state_33350__$1 = state_33350;
var statearr_33413_33475 = state_33350__$1;
(statearr_33413_33475[(2)] = null);

(statearr_33413_33475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (45))){
var inst_33340 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
var statearr_33414_33476 = state_33350__$1;
(statearr_33414_33476[(2)] = inst_33340);

(statearr_33414_33476[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (26))){
var inst_33282 = (state_33350[(29)]);
var inst_33336 = (state_33350[(2)]);
var inst_33337 = cljs.core.seq.call(null,inst_33282);
var state_33350__$1 = (function (){var statearr_33415 = state_33350;
(statearr_33415[(31)] = inst_33336);

return statearr_33415;
})();
if(inst_33337){
var statearr_33416_33477 = state_33350__$1;
(statearr_33416_33477[(1)] = (42));

} else {
var statearr_33417_33478 = state_33350__$1;
(statearr_33417_33478[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (16))){
var inst_33249 = (state_33350[(7)]);
var inst_33251 = cljs.core.chunked_seq_QMARK_.call(null,inst_33249);
var state_33350__$1 = state_33350;
if(inst_33251){
var statearr_33418_33479 = state_33350__$1;
(statearr_33418_33479[(1)] = (19));

} else {
var statearr_33419_33480 = state_33350__$1;
(statearr_33419_33480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (38))){
var inst_33329 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
var statearr_33420_33481 = state_33350__$1;
(statearr_33420_33481[(2)] = inst_33329);

(statearr_33420_33481[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (30))){
var state_33350__$1 = state_33350;
var statearr_33421_33482 = state_33350__$1;
(statearr_33421_33482[(2)] = null);

(statearr_33421_33482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (10))){
var inst_33230 = (state_33350[(15)]);
var inst_33228 = (state_33350[(16)]);
var inst_33238 = cljs.core._nth.call(null,inst_33228,inst_33230);
var inst_33239 = cljs.core.nth.call(null,inst_33238,(0),null);
var inst_33240 = cljs.core.nth.call(null,inst_33238,(1),null);
var state_33350__$1 = (function (){var statearr_33422 = state_33350;
(statearr_33422[(26)] = inst_33239);

return statearr_33422;
})();
if(cljs.core.truth_(inst_33240)){
var statearr_33423_33483 = state_33350__$1;
(statearr_33423_33483[(1)] = (13));

} else {
var statearr_33424_33484 = state_33350__$1;
(statearr_33424_33484[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (18))){
var inst_33275 = (state_33350[(2)]);
var state_33350__$1 = state_33350;
var statearr_33425_33485 = state_33350__$1;
(statearr_33425_33485[(2)] = inst_33275);

(statearr_33425_33485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (42))){
var state_33350__$1 = state_33350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33350__$1,(45),dchan);
} else {
if((state_val_33351 === (37))){
var inst_33309 = (state_33350[(25)]);
var inst_33318 = (state_33350[(23)]);
var inst_33218 = (state_33350[(11)]);
var inst_33318__$1 = cljs.core.first.call(null,inst_33309);
var inst_33319 = cljs.core.async.put_BANG_.call(null,inst_33318__$1,inst_33218,done);
var state_33350__$1 = (function (){var statearr_33426 = state_33350;
(statearr_33426[(23)] = inst_33318__$1);

return statearr_33426;
})();
if(cljs.core.truth_(inst_33319)){
var statearr_33427_33486 = state_33350__$1;
(statearr_33427_33486[(1)] = (39));

} else {
var statearr_33428_33487 = state_33350__$1;
(statearr_33428_33487[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33351 === (8))){
var inst_33229 = (state_33350[(13)]);
var inst_33230 = (state_33350[(15)]);
var inst_33232 = (inst_33230 < inst_33229);
var inst_33233 = inst_33232;
var state_33350__$1 = state_33350;
if(cljs.core.truth_(inst_33233)){
var statearr_33429_33488 = state_33350__$1;
(statearr_33429_33488[(1)] = (10));

} else {
var statearr_33430_33489 = state_33350__$1;
(statearr_33430_33489[(1)] = (11));

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
});})(c__32630__auto___33435,cs,m,dchan,dctr,done))
;
return ((function (switch__32542__auto__,c__32630__auto___33435,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32543__auto__ = null;
var cljs$core$async$mult_$_state_machine__32543__auto____0 = (function (){
var statearr_33431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33431[(0)] = cljs$core$async$mult_$_state_machine__32543__auto__);

(statearr_33431[(1)] = (1));

return statearr_33431;
});
var cljs$core$async$mult_$_state_machine__32543__auto____1 = (function (state_33350){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_33350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e33432){if((e33432 instanceof Object)){
var ex__32546__auto__ = e33432;
var statearr_33433_33490 = state_33350;
(statearr_33433_33490[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33491 = state_33350;
state_33350 = G__33491;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32543__auto__ = function(state_33350){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32543__auto____1.call(this,state_33350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32543__auto____0;
cljs$core$async$mult_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32543__auto____1;
return cljs$core$async$mult_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___33435,cs,m,dchan,dctr,done))
})();
var state__32632__auto__ = (function (){var statearr_33434 = f__32631__auto__.call(null);
(statearr_33434[(6)] = c__32630__auto___33435);

return statearr_33434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___33435,cs,m,dchan,dctr,done))
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
var G__33493 = arguments.length;
switch (G__33493) {
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
var x__29017__auto__ = (((m == null))?null:m);
var m__29018__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,m,ch);
} else {
var m__29018__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,m,ch);
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
var x__29017__auto__ = (((m == null))?null:m);
var m__29018__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,m,ch);
} else {
var m__29018__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,m,ch);
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
var x__29017__auto__ = (((m == null))?null:m);
var m__29018__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,m);
} else {
var m__29018__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,m);
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
var x__29017__auto__ = (((m == null))?null:m);
var m__29018__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,m,state_map);
} else {
var m__29018__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,m,state_map);
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
var x__29017__auto__ = (((m == null))?null:m);
var m__29018__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,m,mode);
} else {
var m__29018__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29512__auto__ = [];
var len__29505__auto___33505 = arguments.length;
var i__29506__auto___33506 = (0);
while(true){
if((i__29506__auto___33506 < len__29505__auto___33505)){
args__29512__auto__.push((arguments[i__29506__auto___33506]));

var G__33507 = (i__29506__auto___33506 + (1));
i__29506__auto___33506 = G__33507;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((3) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29513__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33499){
var map__33500 = p__33499;
var map__33500__$1 = ((((!((map__33500 == null)))?((((map__33500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33500):map__33500);
var opts = map__33500__$1;
var statearr_33502_33508 = state;
(statearr_33502_33508[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33500,map__33500__$1,opts){
return (function (val){
var statearr_33503_33509 = state;
(statearr_33503_33509[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33500,map__33500__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33504_33510 = state;
(statearr_33504_33510[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33495){
var G__33496 = cljs.core.first.call(null,seq33495);
var seq33495__$1 = cljs.core.next.call(null,seq33495);
var G__33497 = cljs.core.first.call(null,seq33495__$1);
var seq33495__$2 = cljs.core.next.call(null,seq33495__$1);
var G__33498 = cljs.core.first.call(null,seq33495__$2);
var seq33495__$3 = cljs.core.next.call(null,seq33495__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33496,G__33497,G__33498,seq33495__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33511 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33512){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33512 = meta33512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33513,meta33512__$1){
var self__ = this;
var _33513__$1 = this;
return (new cljs.core.async.t_cljs$core$async33511(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33512__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33513){
var self__ = this;
var _33513__$1 = this;
return self__.meta33512;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33511.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33511.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33512","meta33512",-1060172865,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33511";

cljs.core.async.t_cljs$core$async33511.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async33511");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33511 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33511(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33512){
return (new cljs.core.async.t_cljs$core$async33511(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33512));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33511(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32630__auto___33675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___33675,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___33675,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33615){
var state_val_33616 = (state_33615[(1)]);
if((state_val_33616 === (7))){
var inst_33530 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
var statearr_33617_33676 = state_33615__$1;
(statearr_33617_33676[(2)] = inst_33530);

(statearr_33617_33676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (20))){
var inst_33542 = (state_33615[(7)]);
var state_33615__$1 = state_33615;
var statearr_33618_33677 = state_33615__$1;
(statearr_33618_33677[(2)] = inst_33542);

(statearr_33618_33677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (27))){
var state_33615__$1 = state_33615;
var statearr_33619_33678 = state_33615__$1;
(statearr_33619_33678[(2)] = null);

(statearr_33619_33678[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (1))){
var inst_33517 = (state_33615[(8)]);
var inst_33517__$1 = calc_state.call(null);
var inst_33519 = (inst_33517__$1 == null);
var inst_33520 = cljs.core.not.call(null,inst_33519);
var state_33615__$1 = (function (){var statearr_33620 = state_33615;
(statearr_33620[(8)] = inst_33517__$1);

return statearr_33620;
})();
if(inst_33520){
var statearr_33621_33679 = state_33615__$1;
(statearr_33621_33679[(1)] = (2));

} else {
var statearr_33622_33680 = state_33615__$1;
(statearr_33622_33680[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (24))){
var inst_33589 = (state_33615[(9)]);
var inst_33575 = (state_33615[(10)]);
var inst_33566 = (state_33615[(11)]);
var inst_33589__$1 = inst_33566.call(null,inst_33575);
var state_33615__$1 = (function (){var statearr_33623 = state_33615;
(statearr_33623[(9)] = inst_33589__$1);

return statearr_33623;
})();
if(cljs.core.truth_(inst_33589__$1)){
var statearr_33624_33681 = state_33615__$1;
(statearr_33624_33681[(1)] = (29));

} else {
var statearr_33625_33682 = state_33615__$1;
(statearr_33625_33682[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (4))){
var inst_33533 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
if(cljs.core.truth_(inst_33533)){
var statearr_33626_33683 = state_33615__$1;
(statearr_33626_33683[(1)] = (8));

} else {
var statearr_33627_33684 = state_33615__$1;
(statearr_33627_33684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (15))){
var inst_33560 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
if(cljs.core.truth_(inst_33560)){
var statearr_33628_33685 = state_33615__$1;
(statearr_33628_33685[(1)] = (19));

} else {
var statearr_33629_33686 = state_33615__$1;
(statearr_33629_33686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (21))){
var inst_33565 = (state_33615[(12)]);
var inst_33565__$1 = (state_33615[(2)]);
var inst_33566 = cljs.core.get.call(null,inst_33565__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33567 = cljs.core.get.call(null,inst_33565__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33568 = cljs.core.get.call(null,inst_33565__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33615__$1 = (function (){var statearr_33630 = state_33615;
(statearr_33630[(12)] = inst_33565__$1);

(statearr_33630[(13)] = inst_33567);

(statearr_33630[(11)] = inst_33566);

return statearr_33630;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33615__$1,(22),inst_33568);
} else {
if((state_val_33616 === (31))){
var inst_33597 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
if(cljs.core.truth_(inst_33597)){
var statearr_33631_33687 = state_33615__$1;
(statearr_33631_33687[(1)] = (32));

} else {
var statearr_33632_33688 = state_33615__$1;
(statearr_33632_33688[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (32))){
var inst_33574 = (state_33615[(14)]);
var state_33615__$1 = state_33615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33615__$1,(35),out,inst_33574);
} else {
if((state_val_33616 === (33))){
var inst_33565 = (state_33615[(12)]);
var inst_33542 = inst_33565;
var state_33615__$1 = (function (){var statearr_33633 = state_33615;
(statearr_33633[(7)] = inst_33542);

return statearr_33633;
})();
var statearr_33634_33689 = state_33615__$1;
(statearr_33634_33689[(2)] = null);

(statearr_33634_33689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (13))){
var inst_33542 = (state_33615[(7)]);
var inst_33549 = inst_33542.cljs$lang$protocol_mask$partition0$;
var inst_33550 = (inst_33549 & (64));
var inst_33551 = inst_33542.cljs$core$ISeq$;
var inst_33552 = (cljs.core.PROTOCOL_SENTINEL === inst_33551);
var inst_33553 = (inst_33550) || (inst_33552);
var state_33615__$1 = state_33615;
if(cljs.core.truth_(inst_33553)){
var statearr_33635_33690 = state_33615__$1;
(statearr_33635_33690[(1)] = (16));

} else {
var statearr_33636_33691 = state_33615__$1;
(statearr_33636_33691[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (22))){
var inst_33574 = (state_33615[(14)]);
var inst_33575 = (state_33615[(10)]);
var inst_33573 = (state_33615[(2)]);
var inst_33574__$1 = cljs.core.nth.call(null,inst_33573,(0),null);
var inst_33575__$1 = cljs.core.nth.call(null,inst_33573,(1),null);
var inst_33576 = (inst_33574__$1 == null);
var inst_33577 = cljs.core._EQ_.call(null,inst_33575__$1,change);
var inst_33578 = (inst_33576) || (inst_33577);
var state_33615__$1 = (function (){var statearr_33637 = state_33615;
(statearr_33637[(14)] = inst_33574__$1);

(statearr_33637[(10)] = inst_33575__$1);

return statearr_33637;
})();
if(cljs.core.truth_(inst_33578)){
var statearr_33638_33692 = state_33615__$1;
(statearr_33638_33692[(1)] = (23));

} else {
var statearr_33639_33693 = state_33615__$1;
(statearr_33639_33693[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (36))){
var inst_33565 = (state_33615[(12)]);
var inst_33542 = inst_33565;
var state_33615__$1 = (function (){var statearr_33640 = state_33615;
(statearr_33640[(7)] = inst_33542);

return statearr_33640;
})();
var statearr_33641_33694 = state_33615__$1;
(statearr_33641_33694[(2)] = null);

(statearr_33641_33694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (29))){
var inst_33589 = (state_33615[(9)]);
var state_33615__$1 = state_33615;
var statearr_33642_33695 = state_33615__$1;
(statearr_33642_33695[(2)] = inst_33589);

(statearr_33642_33695[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (6))){
var state_33615__$1 = state_33615;
var statearr_33643_33696 = state_33615__$1;
(statearr_33643_33696[(2)] = false);

(statearr_33643_33696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (28))){
var inst_33585 = (state_33615[(2)]);
var inst_33586 = calc_state.call(null);
var inst_33542 = inst_33586;
var state_33615__$1 = (function (){var statearr_33644 = state_33615;
(statearr_33644[(15)] = inst_33585);

(statearr_33644[(7)] = inst_33542);

return statearr_33644;
})();
var statearr_33645_33697 = state_33615__$1;
(statearr_33645_33697[(2)] = null);

(statearr_33645_33697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (25))){
var inst_33611 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
var statearr_33646_33698 = state_33615__$1;
(statearr_33646_33698[(2)] = inst_33611);

(statearr_33646_33698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (34))){
var inst_33609 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
var statearr_33647_33699 = state_33615__$1;
(statearr_33647_33699[(2)] = inst_33609);

(statearr_33647_33699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (17))){
var state_33615__$1 = state_33615;
var statearr_33648_33700 = state_33615__$1;
(statearr_33648_33700[(2)] = false);

(statearr_33648_33700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (3))){
var state_33615__$1 = state_33615;
var statearr_33649_33701 = state_33615__$1;
(statearr_33649_33701[(2)] = false);

(statearr_33649_33701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (12))){
var inst_33613 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33615__$1,inst_33613);
} else {
if((state_val_33616 === (2))){
var inst_33517 = (state_33615[(8)]);
var inst_33522 = inst_33517.cljs$lang$protocol_mask$partition0$;
var inst_33523 = (inst_33522 & (64));
var inst_33524 = inst_33517.cljs$core$ISeq$;
var inst_33525 = (cljs.core.PROTOCOL_SENTINEL === inst_33524);
var inst_33526 = (inst_33523) || (inst_33525);
var state_33615__$1 = state_33615;
if(cljs.core.truth_(inst_33526)){
var statearr_33650_33702 = state_33615__$1;
(statearr_33650_33702[(1)] = (5));

} else {
var statearr_33651_33703 = state_33615__$1;
(statearr_33651_33703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (23))){
var inst_33574 = (state_33615[(14)]);
var inst_33580 = (inst_33574 == null);
var state_33615__$1 = state_33615;
if(cljs.core.truth_(inst_33580)){
var statearr_33652_33704 = state_33615__$1;
(statearr_33652_33704[(1)] = (26));

} else {
var statearr_33653_33705 = state_33615__$1;
(statearr_33653_33705[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (35))){
var inst_33600 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
if(cljs.core.truth_(inst_33600)){
var statearr_33654_33706 = state_33615__$1;
(statearr_33654_33706[(1)] = (36));

} else {
var statearr_33655_33707 = state_33615__$1;
(statearr_33655_33707[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (19))){
var inst_33542 = (state_33615[(7)]);
var inst_33562 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33542);
var state_33615__$1 = state_33615;
var statearr_33656_33708 = state_33615__$1;
(statearr_33656_33708[(2)] = inst_33562);

(statearr_33656_33708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (11))){
var inst_33542 = (state_33615[(7)]);
var inst_33546 = (inst_33542 == null);
var inst_33547 = cljs.core.not.call(null,inst_33546);
var state_33615__$1 = state_33615;
if(inst_33547){
var statearr_33657_33709 = state_33615__$1;
(statearr_33657_33709[(1)] = (13));

} else {
var statearr_33658_33710 = state_33615__$1;
(statearr_33658_33710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (9))){
var inst_33517 = (state_33615[(8)]);
var state_33615__$1 = state_33615;
var statearr_33659_33711 = state_33615__$1;
(statearr_33659_33711[(2)] = inst_33517);

(statearr_33659_33711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (5))){
var state_33615__$1 = state_33615;
var statearr_33660_33712 = state_33615__$1;
(statearr_33660_33712[(2)] = true);

(statearr_33660_33712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (14))){
var state_33615__$1 = state_33615;
var statearr_33661_33713 = state_33615__$1;
(statearr_33661_33713[(2)] = false);

(statearr_33661_33713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (26))){
var inst_33575 = (state_33615[(10)]);
var inst_33582 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33575);
var state_33615__$1 = state_33615;
var statearr_33662_33714 = state_33615__$1;
(statearr_33662_33714[(2)] = inst_33582);

(statearr_33662_33714[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (16))){
var state_33615__$1 = state_33615;
var statearr_33663_33715 = state_33615__$1;
(statearr_33663_33715[(2)] = true);

(statearr_33663_33715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (38))){
var inst_33605 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
var statearr_33664_33716 = state_33615__$1;
(statearr_33664_33716[(2)] = inst_33605);

(statearr_33664_33716[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (30))){
var inst_33575 = (state_33615[(10)]);
var inst_33567 = (state_33615[(13)]);
var inst_33566 = (state_33615[(11)]);
var inst_33592 = cljs.core.empty_QMARK_.call(null,inst_33566);
var inst_33593 = inst_33567.call(null,inst_33575);
var inst_33594 = cljs.core.not.call(null,inst_33593);
var inst_33595 = (inst_33592) && (inst_33594);
var state_33615__$1 = state_33615;
var statearr_33665_33717 = state_33615__$1;
(statearr_33665_33717[(2)] = inst_33595);

(statearr_33665_33717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (10))){
var inst_33517 = (state_33615[(8)]);
var inst_33538 = (state_33615[(2)]);
var inst_33539 = cljs.core.get.call(null,inst_33538,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33540 = cljs.core.get.call(null,inst_33538,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33541 = cljs.core.get.call(null,inst_33538,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33542 = inst_33517;
var state_33615__$1 = (function (){var statearr_33666 = state_33615;
(statearr_33666[(16)] = inst_33539);

(statearr_33666[(17)] = inst_33540);

(statearr_33666[(18)] = inst_33541);

(statearr_33666[(7)] = inst_33542);

return statearr_33666;
})();
var statearr_33667_33718 = state_33615__$1;
(statearr_33667_33718[(2)] = null);

(statearr_33667_33718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (18))){
var inst_33557 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
var statearr_33668_33719 = state_33615__$1;
(statearr_33668_33719[(2)] = inst_33557);

(statearr_33668_33719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (37))){
var state_33615__$1 = state_33615;
var statearr_33669_33720 = state_33615__$1;
(statearr_33669_33720[(2)] = null);

(statearr_33669_33720[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (8))){
var inst_33517 = (state_33615[(8)]);
var inst_33535 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33517);
var state_33615__$1 = state_33615;
var statearr_33670_33721 = state_33615__$1;
(statearr_33670_33721[(2)] = inst_33535);

(statearr_33670_33721[(1)] = (10));


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
});})(c__32630__auto___33675,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32542__auto__,c__32630__auto___33675,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32543__auto__ = null;
var cljs$core$async$mix_$_state_machine__32543__auto____0 = (function (){
var statearr_33671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33671[(0)] = cljs$core$async$mix_$_state_machine__32543__auto__);

(statearr_33671[(1)] = (1));

return statearr_33671;
});
var cljs$core$async$mix_$_state_machine__32543__auto____1 = (function (state_33615){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_33615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e33672){if((e33672 instanceof Object)){
var ex__32546__auto__ = e33672;
var statearr_33673_33722 = state_33615;
(statearr_33673_33722[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33723 = state_33615;
state_33615 = G__33723;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32543__auto__ = function(state_33615){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32543__auto____1.call(this,state_33615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32543__auto____0;
cljs$core$async$mix_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32543__auto____1;
return cljs$core$async$mix_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___33675,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32632__auto__ = (function (){var statearr_33674 = f__32631__auto__.call(null);
(statearr_33674[(6)] = c__32630__auto___33675);

return statearr_33674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___33675,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__29017__auto__ = (((p == null))?null:p);
var m__29018__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29018__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__29017__auto__ = (((p == null))?null:p);
var m__29018__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,p,v,ch);
} else {
var m__29018__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33725 = arguments.length;
switch (G__33725) {
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
var x__29017__auto__ = (((p == null))?null:p);
var m__29018__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,p);
} else {
var m__29018__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,p);
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
var x__29017__auto__ = (((p == null))?null:p);
var m__29018__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,p,v);
} else {
var m__29018__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,p,v);
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
var G__33729 = arguments.length;
switch (G__33729) {
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
var or__28334__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28334__auto__,mults){
return (function (p1__33727_SHARP_){
if(cljs.core.truth_(p1__33727_SHARP_.call(null,topic))){
return p1__33727_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33727_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28334__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33730 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33731){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33731 = meta33731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33732,meta33731__$1){
var self__ = this;
var _33732__$1 = this;
return (new cljs.core.async.t_cljs$core$async33730(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33731__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33732){
var self__ = this;
var _33732__$1 = this;
return self__.meta33731;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33730.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33730.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33730.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33730.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33730.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33730.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33730.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33730.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33731","meta33731",1703688559,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33730";

cljs.core.async.t_cljs$core$async33730.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async33730");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33730 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33730(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33731){
return (new cljs.core.async.t_cljs$core$async33730(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33731));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33730(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32630__auto___33850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___33850,mults,ensure_mult,p){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___33850,mults,ensure_mult,p){
return (function (state_33804){
var state_val_33805 = (state_33804[(1)]);
if((state_val_33805 === (7))){
var inst_33800 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
var statearr_33806_33851 = state_33804__$1;
(statearr_33806_33851[(2)] = inst_33800);

(statearr_33806_33851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (20))){
var state_33804__$1 = state_33804;
var statearr_33807_33852 = state_33804__$1;
(statearr_33807_33852[(2)] = null);

(statearr_33807_33852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (1))){
var state_33804__$1 = state_33804;
var statearr_33808_33853 = state_33804__$1;
(statearr_33808_33853[(2)] = null);

(statearr_33808_33853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (24))){
var inst_33783 = (state_33804[(7)]);
var inst_33792 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33783);
var state_33804__$1 = state_33804;
var statearr_33809_33854 = state_33804__$1;
(statearr_33809_33854[(2)] = inst_33792);

(statearr_33809_33854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (4))){
var inst_33735 = (state_33804[(8)]);
var inst_33735__$1 = (state_33804[(2)]);
var inst_33736 = (inst_33735__$1 == null);
var state_33804__$1 = (function (){var statearr_33810 = state_33804;
(statearr_33810[(8)] = inst_33735__$1);

return statearr_33810;
})();
if(cljs.core.truth_(inst_33736)){
var statearr_33811_33855 = state_33804__$1;
(statearr_33811_33855[(1)] = (5));

} else {
var statearr_33812_33856 = state_33804__$1;
(statearr_33812_33856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (15))){
var inst_33777 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
var statearr_33813_33857 = state_33804__$1;
(statearr_33813_33857[(2)] = inst_33777);

(statearr_33813_33857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (21))){
var inst_33797 = (state_33804[(2)]);
var state_33804__$1 = (function (){var statearr_33814 = state_33804;
(statearr_33814[(9)] = inst_33797);

return statearr_33814;
})();
var statearr_33815_33858 = state_33804__$1;
(statearr_33815_33858[(2)] = null);

(statearr_33815_33858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (13))){
var inst_33759 = (state_33804[(10)]);
var inst_33761 = cljs.core.chunked_seq_QMARK_.call(null,inst_33759);
var state_33804__$1 = state_33804;
if(inst_33761){
var statearr_33816_33859 = state_33804__$1;
(statearr_33816_33859[(1)] = (16));

} else {
var statearr_33817_33860 = state_33804__$1;
(statearr_33817_33860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (22))){
var inst_33789 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
if(cljs.core.truth_(inst_33789)){
var statearr_33818_33861 = state_33804__$1;
(statearr_33818_33861[(1)] = (23));

} else {
var statearr_33819_33862 = state_33804__$1;
(statearr_33819_33862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (6))){
var inst_33783 = (state_33804[(7)]);
var inst_33785 = (state_33804[(11)]);
var inst_33735 = (state_33804[(8)]);
var inst_33783__$1 = topic_fn.call(null,inst_33735);
var inst_33784 = cljs.core.deref.call(null,mults);
var inst_33785__$1 = cljs.core.get.call(null,inst_33784,inst_33783__$1);
var state_33804__$1 = (function (){var statearr_33820 = state_33804;
(statearr_33820[(7)] = inst_33783__$1);

(statearr_33820[(11)] = inst_33785__$1);

return statearr_33820;
})();
if(cljs.core.truth_(inst_33785__$1)){
var statearr_33821_33863 = state_33804__$1;
(statearr_33821_33863[(1)] = (19));

} else {
var statearr_33822_33864 = state_33804__$1;
(statearr_33822_33864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (25))){
var inst_33794 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
var statearr_33823_33865 = state_33804__$1;
(statearr_33823_33865[(2)] = inst_33794);

(statearr_33823_33865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (17))){
var inst_33759 = (state_33804[(10)]);
var inst_33768 = cljs.core.first.call(null,inst_33759);
var inst_33769 = cljs.core.async.muxch_STAR_.call(null,inst_33768);
var inst_33770 = cljs.core.async.close_BANG_.call(null,inst_33769);
var inst_33771 = cljs.core.next.call(null,inst_33759);
var inst_33745 = inst_33771;
var inst_33746 = null;
var inst_33747 = (0);
var inst_33748 = (0);
var state_33804__$1 = (function (){var statearr_33824 = state_33804;
(statearr_33824[(12)] = inst_33770);

(statearr_33824[(13)] = inst_33745);

(statearr_33824[(14)] = inst_33748);

(statearr_33824[(15)] = inst_33746);

(statearr_33824[(16)] = inst_33747);

return statearr_33824;
})();
var statearr_33825_33866 = state_33804__$1;
(statearr_33825_33866[(2)] = null);

(statearr_33825_33866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (3))){
var inst_33802 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33804__$1,inst_33802);
} else {
if((state_val_33805 === (12))){
var inst_33779 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
var statearr_33826_33867 = state_33804__$1;
(statearr_33826_33867[(2)] = inst_33779);

(statearr_33826_33867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (2))){
var state_33804__$1 = state_33804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33804__$1,(4),ch);
} else {
if((state_val_33805 === (23))){
var state_33804__$1 = state_33804;
var statearr_33827_33868 = state_33804__$1;
(statearr_33827_33868[(2)] = null);

(statearr_33827_33868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (19))){
var inst_33785 = (state_33804[(11)]);
var inst_33735 = (state_33804[(8)]);
var inst_33787 = cljs.core.async.muxch_STAR_.call(null,inst_33785);
var state_33804__$1 = state_33804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33804__$1,(22),inst_33787,inst_33735);
} else {
if((state_val_33805 === (11))){
var inst_33745 = (state_33804[(13)]);
var inst_33759 = (state_33804[(10)]);
var inst_33759__$1 = cljs.core.seq.call(null,inst_33745);
var state_33804__$1 = (function (){var statearr_33828 = state_33804;
(statearr_33828[(10)] = inst_33759__$1);

return statearr_33828;
})();
if(inst_33759__$1){
var statearr_33829_33869 = state_33804__$1;
(statearr_33829_33869[(1)] = (13));

} else {
var statearr_33830_33870 = state_33804__$1;
(statearr_33830_33870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (9))){
var inst_33781 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
var statearr_33831_33871 = state_33804__$1;
(statearr_33831_33871[(2)] = inst_33781);

(statearr_33831_33871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (5))){
var inst_33742 = cljs.core.deref.call(null,mults);
var inst_33743 = cljs.core.vals.call(null,inst_33742);
var inst_33744 = cljs.core.seq.call(null,inst_33743);
var inst_33745 = inst_33744;
var inst_33746 = null;
var inst_33747 = (0);
var inst_33748 = (0);
var state_33804__$1 = (function (){var statearr_33832 = state_33804;
(statearr_33832[(13)] = inst_33745);

(statearr_33832[(14)] = inst_33748);

(statearr_33832[(15)] = inst_33746);

(statearr_33832[(16)] = inst_33747);

return statearr_33832;
})();
var statearr_33833_33872 = state_33804__$1;
(statearr_33833_33872[(2)] = null);

(statearr_33833_33872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (14))){
var state_33804__$1 = state_33804;
var statearr_33837_33873 = state_33804__$1;
(statearr_33837_33873[(2)] = null);

(statearr_33837_33873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (16))){
var inst_33759 = (state_33804[(10)]);
var inst_33763 = cljs.core.chunk_first.call(null,inst_33759);
var inst_33764 = cljs.core.chunk_rest.call(null,inst_33759);
var inst_33765 = cljs.core.count.call(null,inst_33763);
var inst_33745 = inst_33764;
var inst_33746 = inst_33763;
var inst_33747 = inst_33765;
var inst_33748 = (0);
var state_33804__$1 = (function (){var statearr_33838 = state_33804;
(statearr_33838[(13)] = inst_33745);

(statearr_33838[(14)] = inst_33748);

(statearr_33838[(15)] = inst_33746);

(statearr_33838[(16)] = inst_33747);

return statearr_33838;
})();
var statearr_33839_33874 = state_33804__$1;
(statearr_33839_33874[(2)] = null);

(statearr_33839_33874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (10))){
var inst_33745 = (state_33804[(13)]);
var inst_33748 = (state_33804[(14)]);
var inst_33746 = (state_33804[(15)]);
var inst_33747 = (state_33804[(16)]);
var inst_33753 = cljs.core._nth.call(null,inst_33746,inst_33748);
var inst_33754 = cljs.core.async.muxch_STAR_.call(null,inst_33753);
var inst_33755 = cljs.core.async.close_BANG_.call(null,inst_33754);
var inst_33756 = (inst_33748 + (1));
var tmp33834 = inst_33745;
var tmp33835 = inst_33746;
var tmp33836 = inst_33747;
var inst_33745__$1 = tmp33834;
var inst_33746__$1 = tmp33835;
var inst_33747__$1 = tmp33836;
var inst_33748__$1 = inst_33756;
var state_33804__$1 = (function (){var statearr_33840 = state_33804;
(statearr_33840[(13)] = inst_33745__$1);

(statearr_33840[(14)] = inst_33748__$1);

(statearr_33840[(15)] = inst_33746__$1);

(statearr_33840[(17)] = inst_33755);

(statearr_33840[(16)] = inst_33747__$1);

return statearr_33840;
})();
var statearr_33841_33875 = state_33804__$1;
(statearr_33841_33875[(2)] = null);

(statearr_33841_33875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (18))){
var inst_33774 = (state_33804[(2)]);
var state_33804__$1 = state_33804;
var statearr_33842_33876 = state_33804__$1;
(statearr_33842_33876[(2)] = inst_33774);

(statearr_33842_33876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33805 === (8))){
var inst_33748 = (state_33804[(14)]);
var inst_33747 = (state_33804[(16)]);
var inst_33750 = (inst_33748 < inst_33747);
var inst_33751 = inst_33750;
var state_33804__$1 = state_33804;
if(cljs.core.truth_(inst_33751)){
var statearr_33843_33877 = state_33804__$1;
(statearr_33843_33877[(1)] = (10));

} else {
var statearr_33844_33878 = state_33804__$1;
(statearr_33844_33878[(1)] = (11));

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
});})(c__32630__auto___33850,mults,ensure_mult,p))
;
return ((function (switch__32542__auto__,c__32630__auto___33850,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_33845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33845[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_33845[(1)] = (1));

return statearr_33845;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_33804){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_33804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e33846){if((e33846 instanceof Object)){
var ex__32546__auto__ = e33846;
var statearr_33847_33879 = state_33804;
(statearr_33847_33879[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33880 = state_33804;
state_33804 = G__33880;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_33804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_33804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___33850,mults,ensure_mult,p))
})();
var state__32632__auto__ = (function (){var statearr_33848 = f__32631__auto__.call(null);
(statearr_33848[(6)] = c__32630__auto___33850);

return statearr_33848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___33850,mults,ensure_mult,p))
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
var G__33882 = arguments.length;
switch (G__33882) {
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
var G__33885 = arguments.length;
switch (G__33885) {
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
var G__33888 = arguments.length;
switch (G__33888) {
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
var c__32630__auto___33955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___33955,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___33955,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33927){
var state_val_33928 = (state_33927[(1)]);
if((state_val_33928 === (7))){
var state_33927__$1 = state_33927;
var statearr_33929_33956 = state_33927__$1;
(statearr_33929_33956[(2)] = null);

(statearr_33929_33956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (1))){
var state_33927__$1 = state_33927;
var statearr_33930_33957 = state_33927__$1;
(statearr_33930_33957[(2)] = null);

(statearr_33930_33957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (4))){
var inst_33891 = (state_33927[(7)]);
var inst_33893 = (inst_33891 < cnt);
var state_33927__$1 = state_33927;
if(cljs.core.truth_(inst_33893)){
var statearr_33931_33958 = state_33927__$1;
(statearr_33931_33958[(1)] = (6));

} else {
var statearr_33932_33959 = state_33927__$1;
(statearr_33932_33959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (15))){
var inst_33923 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33933_33960 = state_33927__$1;
(statearr_33933_33960[(2)] = inst_33923);

(statearr_33933_33960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (13))){
var inst_33916 = cljs.core.async.close_BANG_.call(null,out);
var state_33927__$1 = state_33927;
var statearr_33934_33961 = state_33927__$1;
(statearr_33934_33961[(2)] = inst_33916);

(statearr_33934_33961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (6))){
var state_33927__$1 = state_33927;
var statearr_33935_33962 = state_33927__$1;
(statearr_33935_33962[(2)] = null);

(statearr_33935_33962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (3))){
var inst_33925 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33927__$1,inst_33925);
} else {
if((state_val_33928 === (12))){
var inst_33913 = (state_33927[(8)]);
var inst_33913__$1 = (state_33927[(2)]);
var inst_33914 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33913__$1);
var state_33927__$1 = (function (){var statearr_33936 = state_33927;
(statearr_33936[(8)] = inst_33913__$1);

return statearr_33936;
})();
if(cljs.core.truth_(inst_33914)){
var statearr_33937_33963 = state_33927__$1;
(statearr_33937_33963[(1)] = (13));

} else {
var statearr_33938_33964 = state_33927__$1;
(statearr_33938_33964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (2))){
var inst_33890 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33891 = (0);
var state_33927__$1 = (function (){var statearr_33939 = state_33927;
(statearr_33939[(9)] = inst_33890);

(statearr_33939[(7)] = inst_33891);

return statearr_33939;
})();
var statearr_33940_33965 = state_33927__$1;
(statearr_33940_33965[(2)] = null);

(statearr_33940_33965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (11))){
var inst_33891 = (state_33927[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33927,(10),Object,null,(9));
var inst_33900 = chs__$1.call(null,inst_33891);
var inst_33901 = done.call(null,inst_33891);
var inst_33902 = cljs.core.async.take_BANG_.call(null,inst_33900,inst_33901);
var state_33927__$1 = state_33927;
var statearr_33941_33966 = state_33927__$1;
(statearr_33941_33966[(2)] = inst_33902);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33927__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (9))){
var inst_33891 = (state_33927[(7)]);
var inst_33904 = (state_33927[(2)]);
var inst_33905 = (inst_33891 + (1));
var inst_33891__$1 = inst_33905;
var state_33927__$1 = (function (){var statearr_33942 = state_33927;
(statearr_33942[(10)] = inst_33904);

(statearr_33942[(7)] = inst_33891__$1);

return statearr_33942;
})();
var statearr_33943_33967 = state_33927__$1;
(statearr_33943_33967[(2)] = null);

(statearr_33943_33967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (5))){
var inst_33911 = (state_33927[(2)]);
var state_33927__$1 = (function (){var statearr_33944 = state_33927;
(statearr_33944[(11)] = inst_33911);

return statearr_33944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33927__$1,(12),dchan);
} else {
if((state_val_33928 === (14))){
var inst_33913 = (state_33927[(8)]);
var inst_33918 = cljs.core.apply.call(null,f,inst_33913);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33927__$1,(16),out,inst_33918);
} else {
if((state_val_33928 === (16))){
var inst_33920 = (state_33927[(2)]);
var state_33927__$1 = (function (){var statearr_33945 = state_33927;
(statearr_33945[(12)] = inst_33920);

return statearr_33945;
})();
var statearr_33946_33968 = state_33927__$1;
(statearr_33946_33968[(2)] = null);

(statearr_33946_33968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (10))){
var inst_33895 = (state_33927[(2)]);
var inst_33896 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33927__$1 = (function (){var statearr_33947 = state_33927;
(statearr_33947[(13)] = inst_33895);

return statearr_33947;
})();
var statearr_33948_33969 = state_33927__$1;
(statearr_33948_33969[(2)] = inst_33896);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33927__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33928 === (8))){
var inst_33909 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33949_33970 = state_33927__$1;
(statearr_33949_33970[(2)] = inst_33909);

(statearr_33949_33970[(1)] = (5));


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
});})(c__32630__auto___33955,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32542__auto__,c__32630__auto___33955,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_33950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33950[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_33950[(1)] = (1));

return statearr_33950;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_33927){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_33927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e33951){if((e33951 instanceof Object)){
var ex__32546__auto__ = e33951;
var statearr_33952_33971 = state_33927;
(statearr_33952_33971[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33972 = state_33927;
state_33927 = G__33972;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_33927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_33927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___33955,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32632__auto__ = (function (){var statearr_33953 = f__32631__auto__.call(null);
(statearr_33953[(6)] = c__32630__auto___33955);

return statearr_33953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___33955,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33975 = arguments.length;
switch (G__33975) {
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
var c__32630__auto___34029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___34029,out){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___34029,out){
return (function (state_34007){
var state_val_34008 = (state_34007[(1)]);
if((state_val_34008 === (7))){
var inst_33987 = (state_34007[(7)]);
var inst_33986 = (state_34007[(8)]);
var inst_33986__$1 = (state_34007[(2)]);
var inst_33987__$1 = cljs.core.nth.call(null,inst_33986__$1,(0),null);
var inst_33988 = cljs.core.nth.call(null,inst_33986__$1,(1),null);
var inst_33989 = (inst_33987__$1 == null);
var state_34007__$1 = (function (){var statearr_34009 = state_34007;
(statearr_34009[(9)] = inst_33988);

(statearr_34009[(7)] = inst_33987__$1);

(statearr_34009[(8)] = inst_33986__$1);

return statearr_34009;
})();
if(cljs.core.truth_(inst_33989)){
var statearr_34010_34030 = state_34007__$1;
(statearr_34010_34030[(1)] = (8));

} else {
var statearr_34011_34031 = state_34007__$1;
(statearr_34011_34031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (1))){
var inst_33976 = cljs.core.vec.call(null,chs);
var inst_33977 = inst_33976;
var state_34007__$1 = (function (){var statearr_34012 = state_34007;
(statearr_34012[(10)] = inst_33977);

return statearr_34012;
})();
var statearr_34013_34032 = state_34007__$1;
(statearr_34013_34032[(2)] = null);

(statearr_34013_34032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (4))){
var inst_33977 = (state_34007[(10)]);
var state_34007__$1 = state_34007;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34007__$1,(7),inst_33977);
} else {
if((state_val_34008 === (6))){
var inst_34003 = (state_34007[(2)]);
var state_34007__$1 = state_34007;
var statearr_34014_34033 = state_34007__$1;
(statearr_34014_34033[(2)] = inst_34003);

(statearr_34014_34033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (3))){
var inst_34005 = (state_34007[(2)]);
var state_34007__$1 = state_34007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34007__$1,inst_34005);
} else {
if((state_val_34008 === (2))){
var inst_33977 = (state_34007[(10)]);
var inst_33979 = cljs.core.count.call(null,inst_33977);
var inst_33980 = (inst_33979 > (0));
var state_34007__$1 = state_34007;
if(cljs.core.truth_(inst_33980)){
var statearr_34016_34034 = state_34007__$1;
(statearr_34016_34034[(1)] = (4));

} else {
var statearr_34017_34035 = state_34007__$1;
(statearr_34017_34035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (11))){
var inst_33977 = (state_34007[(10)]);
var inst_33996 = (state_34007[(2)]);
var tmp34015 = inst_33977;
var inst_33977__$1 = tmp34015;
var state_34007__$1 = (function (){var statearr_34018 = state_34007;
(statearr_34018[(11)] = inst_33996);

(statearr_34018[(10)] = inst_33977__$1);

return statearr_34018;
})();
var statearr_34019_34036 = state_34007__$1;
(statearr_34019_34036[(2)] = null);

(statearr_34019_34036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (9))){
var inst_33987 = (state_34007[(7)]);
var state_34007__$1 = state_34007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34007__$1,(11),out,inst_33987);
} else {
if((state_val_34008 === (5))){
var inst_34001 = cljs.core.async.close_BANG_.call(null,out);
var state_34007__$1 = state_34007;
var statearr_34020_34037 = state_34007__$1;
(statearr_34020_34037[(2)] = inst_34001);

(statearr_34020_34037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (10))){
var inst_33999 = (state_34007[(2)]);
var state_34007__$1 = state_34007;
var statearr_34021_34038 = state_34007__$1;
(statearr_34021_34038[(2)] = inst_33999);

(statearr_34021_34038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34008 === (8))){
var inst_33988 = (state_34007[(9)]);
var inst_33987 = (state_34007[(7)]);
var inst_33986 = (state_34007[(8)]);
var inst_33977 = (state_34007[(10)]);
var inst_33991 = (function (){var cs = inst_33977;
var vec__33982 = inst_33986;
var v = inst_33987;
var c = inst_33988;
return ((function (cs,vec__33982,v,c,inst_33988,inst_33987,inst_33986,inst_33977,state_val_34008,c__32630__auto___34029,out){
return (function (p1__33973_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33973_SHARP_);
});
;})(cs,vec__33982,v,c,inst_33988,inst_33987,inst_33986,inst_33977,state_val_34008,c__32630__auto___34029,out))
})();
var inst_33992 = cljs.core.filterv.call(null,inst_33991,inst_33977);
var inst_33977__$1 = inst_33992;
var state_34007__$1 = (function (){var statearr_34022 = state_34007;
(statearr_34022[(10)] = inst_33977__$1);

return statearr_34022;
})();
var statearr_34023_34039 = state_34007__$1;
(statearr_34023_34039[(2)] = null);

(statearr_34023_34039[(1)] = (2));


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
});})(c__32630__auto___34029,out))
;
return ((function (switch__32542__auto__,c__32630__auto___34029,out){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_34024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34024[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_34024[(1)] = (1));

return statearr_34024;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_34007){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_34007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e34025){if((e34025 instanceof Object)){
var ex__32546__auto__ = e34025;
var statearr_34026_34040 = state_34007;
(statearr_34026_34040[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34041 = state_34007;
state_34007 = G__34041;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_34007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_34007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___34029,out))
})();
var state__32632__auto__ = (function (){var statearr_34027 = f__32631__auto__.call(null);
(statearr_34027[(6)] = c__32630__auto___34029);

return statearr_34027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___34029,out))
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
var G__34043 = arguments.length;
switch (G__34043) {
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
var c__32630__auto___34088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___34088,out){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___34088,out){
return (function (state_34067){
var state_val_34068 = (state_34067[(1)]);
if((state_val_34068 === (7))){
var inst_34049 = (state_34067[(7)]);
var inst_34049__$1 = (state_34067[(2)]);
var inst_34050 = (inst_34049__$1 == null);
var inst_34051 = cljs.core.not.call(null,inst_34050);
var state_34067__$1 = (function (){var statearr_34069 = state_34067;
(statearr_34069[(7)] = inst_34049__$1);

return statearr_34069;
})();
if(inst_34051){
var statearr_34070_34089 = state_34067__$1;
(statearr_34070_34089[(1)] = (8));

} else {
var statearr_34071_34090 = state_34067__$1;
(statearr_34071_34090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (1))){
var inst_34044 = (0);
var state_34067__$1 = (function (){var statearr_34072 = state_34067;
(statearr_34072[(8)] = inst_34044);

return statearr_34072;
})();
var statearr_34073_34091 = state_34067__$1;
(statearr_34073_34091[(2)] = null);

(statearr_34073_34091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (4))){
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34067__$1,(7),ch);
} else {
if((state_val_34068 === (6))){
var inst_34062 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34074_34092 = state_34067__$1;
(statearr_34074_34092[(2)] = inst_34062);

(statearr_34074_34092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (3))){
var inst_34064 = (state_34067[(2)]);
var inst_34065 = cljs.core.async.close_BANG_.call(null,out);
var state_34067__$1 = (function (){var statearr_34075 = state_34067;
(statearr_34075[(9)] = inst_34064);

return statearr_34075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34067__$1,inst_34065);
} else {
if((state_val_34068 === (2))){
var inst_34044 = (state_34067[(8)]);
var inst_34046 = (inst_34044 < n);
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_34046)){
var statearr_34076_34093 = state_34067__$1;
(statearr_34076_34093[(1)] = (4));

} else {
var statearr_34077_34094 = state_34067__$1;
(statearr_34077_34094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (11))){
var inst_34044 = (state_34067[(8)]);
var inst_34054 = (state_34067[(2)]);
var inst_34055 = (inst_34044 + (1));
var inst_34044__$1 = inst_34055;
var state_34067__$1 = (function (){var statearr_34078 = state_34067;
(statearr_34078[(10)] = inst_34054);

(statearr_34078[(8)] = inst_34044__$1);

return statearr_34078;
})();
var statearr_34079_34095 = state_34067__$1;
(statearr_34079_34095[(2)] = null);

(statearr_34079_34095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (9))){
var state_34067__$1 = state_34067;
var statearr_34080_34096 = state_34067__$1;
(statearr_34080_34096[(2)] = null);

(statearr_34080_34096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (5))){
var state_34067__$1 = state_34067;
var statearr_34081_34097 = state_34067__$1;
(statearr_34081_34097[(2)] = null);

(statearr_34081_34097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (10))){
var inst_34059 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34082_34098 = state_34067__$1;
(statearr_34082_34098[(2)] = inst_34059);

(statearr_34082_34098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (8))){
var inst_34049 = (state_34067[(7)]);
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34067__$1,(11),out,inst_34049);
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
});})(c__32630__auto___34088,out))
;
return ((function (switch__32542__auto__,c__32630__auto___34088,out){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_34083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34083[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_34083[(1)] = (1));

return statearr_34083;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_34067){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_34067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e34084){if((e34084 instanceof Object)){
var ex__32546__auto__ = e34084;
var statearr_34085_34099 = state_34067;
(statearr_34085_34099[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34100 = state_34067;
state_34067 = G__34100;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_34067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_34067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___34088,out))
})();
var state__32632__auto__ = (function (){var statearr_34086 = f__32631__auto__.call(null);
(statearr_34086[(6)] = c__32630__auto___34088);

return statearr_34086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___34088,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34102 = (function (f,ch,meta34103){
this.f = f;
this.ch = ch;
this.meta34103 = meta34103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34104,meta34103__$1){
var self__ = this;
var _34104__$1 = this;
return (new cljs.core.async.t_cljs$core$async34102(self__.f,self__.ch,meta34103__$1));
});

cljs.core.async.t_cljs$core$async34102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34104){
var self__ = this;
var _34104__$1 = this;
return self__.meta34103;
});

cljs.core.async.t_cljs$core$async34102.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34102.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34102.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34105 = (function (f,ch,meta34103,_,fn1,meta34106){
this.f = f;
this.ch = ch;
this.meta34103 = meta34103;
this._ = _;
this.fn1 = fn1;
this.meta34106 = meta34106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34107,meta34106__$1){
var self__ = this;
var _34107__$1 = this;
return (new cljs.core.async.t_cljs$core$async34105(self__.f,self__.ch,self__.meta34103,self__._,self__.fn1,meta34106__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34107){
var self__ = this;
var _34107__$1 = this;
return self__.meta34106;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34101_SHARP_){
return f1.call(null,(((p1__34101_SHARP_ == null))?null:self__.f.call(null,p1__34101_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34105.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34103","meta34103",215448967,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34102","cljs.core.async/t_cljs$core$async34102",530323950,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34106","meta34106",-1221612676,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34105";

cljs.core.async.t_cljs$core$async34105.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async34105");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34105 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34105(f__$1,ch__$1,meta34103__$1,___$2,fn1__$1,meta34106){
return (new cljs.core.async.t_cljs$core$async34105(f__$1,ch__$1,meta34103__$1,___$2,fn1__$1,meta34106));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34105(self__.f,self__.ch,self__.meta34103,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28322__auto__ = ret;
if(cljs.core.truth_(and__28322__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28322__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34102.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34103","meta34103",215448967,null)], null);
});

cljs.core.async.t_cljs$core$async34102.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34102";

cljs.core.async.t_cljs$core$async34102.cljs$lang$ctorPrWriter = (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async34102");
});

cljs.core.async.__GT_t_cljs$core$async34102 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34102(f__$1,ch__$1,meta34103){
return (new cljs.core.async.t_cljs$core$async34102(f__$1,ch__$1,meta34103));
});

}

return (new cljs.core.async.t_cljs$core$async34102(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34108 = (function (f,ch,meta34109){
this.f = f;
this.ch = ch;
this.meta34109 = meta34109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34110,meta34109__$1){
var self__ = this;
var _34110__$1 = this;
return (new cljs.core.async.t_cljs$core$async34108(self__.f,self__.ch,meta34109__$1));
});

cljs.core.async.t_cljs$core$async34108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34110){
var self__ = this;
var _34110__$1 = this;
return self__.meta34109;
});

cljs.core.async.t_cljs$core$async34108.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34108.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34108.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34109","meta34109",394182355,null)], null);
});

cljs.core.async.t_cljs$core$async34108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34108";

cljs.core.async.t_cljs$core$async34108.cljs$lang$ctorPrWriter = (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async34108");
});

cljs.core.async.__GT_t_cljs$core$async34108 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34108(f__$1,ch__$1,meta34109){
return (new cljs.core.async.t_cljs$core$async34108(f__$1,ch__$1,meta34109));
});

}

return (new cljs.core.async.t_cljs$core$async34108(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34111 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34111 = (function (p,ch,meta34112){
this.p = p;
this.ch = ch;
this.meta34112 = meta34112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34113,meta34112__$1){
var self__ = this;
var _34113__$1 = this;
return (new cljs.core.async.t_cljs$core$async34111(self__.p,self__.ch,meta34112__$1));
});

cljs.core.async.t_cljs$core$async34111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34113){
var self__ = this;
var _34113__$1 = this;
return self__.meta34112;
});

cljs.core.async.t_cljs$core$async34111.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34111.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34111.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34111.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34112","meta34112",91480517,null)], null);
});

cljs.core.async.t_cljs$core$async34111.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34111";

cljs.core.async.t_cljs$core$async34111.cljs$lang$ctorPrWriter = (function (this__28959__auto__,writer__28960__auto__,opt__28961__auto__){
return cljs.core._write.call(null,writer__28960__auto__,"cljs.core.async/t_cljs$core$async34111");
});

cljs.core.async.__GT_t_cljs$core$async34111 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34111(p__$1,ch__$1,meta34112){
return (new cljs.core.async.t_cljs$core$async34111(p__$1,ch__$1,meta34112));
});

}

return (new cljs.core.async.t_cljs$core$async34111(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34115 = arguments.length;
switch (G__34115) {
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
var c__32630__auto___34155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___34155,out){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___34155,out){
return (function (state_34136){
var state_val_34137 = (state_34136[(1)]);
if((state_val_34137 === (7))){
var inst_34132 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
var statearr_34138_34156 = state_34136__$1;
(statearr_34138_34156[(2)] = inst_34132);

(statearr_34138_34156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (1))){
var state_34136__$1 = state_34136;
var statearr_34139_34157 = state_34136__$1;
(statearr_34139_34157[(2)] = null);

(statearr_34139_34157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (4))){
var inst_34118 = (state_34136[(7)]);
var inst_34118__$1 = (state_34136[(2)]);
var inst_34119 = (inst_34118__$1 == null);
var state_34136__$1 = (function (){var statearr_34140 = state_34136;
(statearr_34140[(7)] = inst_34118__$1);

return statearr_34140;
})();
if(cljs.core.truth_(inst_34119)){
var statearr_34141_34158 = state_34136__$1;
(statearr_34141_34158[(1)] = (5));

} else {
var statearr_34142_34159 = state_34136__$1;
(statearr_34142_34159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (6))){
var inst_34118 = (state_34136[(7)]);
var inst_34123 = p.call(null,inst_34118);
var state_34136__$1 = state_34136;
if(cljs.core.truth_(inst_34123)){
var statearr_34143_34160 = state_34136__$1;
(statearr_34143_34160[(1)] = (8));

} else {
var statearr_34144_34161 = state_34136__$1;
(statearr_34144_34161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (3))){
var inst_34134 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34136__$1,inst_34134);
} else {
if((state_val_34137 === (2))){
var state_34136__$1 = state_34136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34136__$1,(4),ch);
} else {
if((state_val_34137 === (11))){
var inst_34126 = (state_34136[(2)]);
var state_34136__$1 = state_34136;
var statearr_34145_34162 = state_34136__$1;
(statearr_34145_34162[(2)] = inst_34126);

(statearr_34145_34162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (9))){
var state_34136__$1 = state_34136;
var statearr_34146_34163 = state_34136__$1;
(statearr_34146_34163[(2)] = null);

(statearr_34146_34163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (5))){
var inst_34121 = cljs.core.async.close_BANG_.call(null,out);
var state_34136__$1 = state_34136;
var statearr_34147_34164 = state_34136__$1;
(statearr_34147_34164[(2)] = inst_34121);

(statearr_34147_34164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (10))){
var inst_34129 = (state_34136[(2)]);
var state_34136__$1 = (function (){var statearr_34148 = state_34136;
(statearr_34148[(8)] = inst_34129);

return statearr_34148;
})();
var statearr_34149_34165 = state_34136__$1;
(statearr_34149_34165[(2)] = null);

(statearr_34149_34165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34137 === (8))){
var inst_34118 = (state_34136[(7)]);
var state_34136__$1 = state_34136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34136__$1,(11),out,inst_34118);
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
});})(c__32630__auto___34155,out))
;
return ((function (switch__32542__auto__,c__32630__auto___34155,out){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_34150 = [null,null,null,null,null,null,null,null,null];
(statearr_34150[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_34150[(1)] = (1));

return statearr_34150;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_34136){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_34136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e34151){if((e34151 instanceof Object)){
var ex__32546__auto__ = e34151;
var statearr_34152_34166 = state_34136;
(statearr_34152_34166[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34167 = state_34136;
state_34136 = G__34167;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_34136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_34136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___34155,out))
})();
var state__32632__auto__ = (function (){var statearr_34153 = f__32631__auto__.call(null);
(statearr_34153[(6)] = c__32630__auto___34155);

return statearr_34153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___34155,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34169 = arguments.length;
switch (G__34169) {
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
var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__){
return (function (state_34232){
var state_val_34233 = (state_34232[(1)]);
if((state_val_34233 === (7))){
var inst_34228 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34234_34272 = state_34232__$1;
(statearr_34234_34272[(2)] = inst_34228);

(statearr_34234_34272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (20))){
var inst_34198 = (state_34232[(7)]);
var inst_34209 = (state_34232[(2)]);
var inst_34210 = cljs.core.next.call(null,inst_34198);
var inst_34184 = inst_34210;
var inst_34185 = null;
var inst_34186 = (0);
var inst_34187 = (0);
var state_34232__$1 = (function (){var statearr_34235 = state_34232;
(statearr_34235[(8)] = inst_34186);

(statearr_34235[(9)] = inst_34184);

(statearr_34235[(10)] = inst_34185);

(statearr_34235[(11)] = inst_34187);

(statearr_34235[(12)] = inst_34209);

return statearr_34235;
})();
var statearr_34236_34273 = state_34232__$1;
(statearr_34236_34273[(2)] = null);

(statearr_34236_34273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (1))){
var state_34232__$1 = state_34232;
var statearr_34237_34274 = state_34232__$1;
(statearr_34237_34274[(2)] = null);

(statearr_34237_34274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (4))){
var inst_34173 = (state_34232[(13)]);
var inst_34173__$1 = (state_34232[(2)]);
var inst_34174 = (inst_34173__$1 == null);
var state_34232__$1 = (function (){var statearr_34238 = state_34232;
(statearr_34238[(13)] = inst_34173__$1);

return statearr_34238;
})();
if(cljs.core.truth_(inst_34174)){
var statearr_34239_34275 = state_34232__$1;
(statearr_34239_34275[(1)] = (5));

} else {
var statearr_34240_34276 = state_34232__$1;
(statearr_34240_34276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (15))){
var state_34232__$1 = state_34232;
var statearr_34244_34277 = state_34232__$1;
(statearr_34244_34277[(2)] = null);

(statearr_34244_34277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (21))){
var state_34232__$1 = state_34232;
var statearr_34245_34278 = state_34232__$1;
(statearr_34245_34278[(2)] = null);

(statearr_34245_34278[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (13))){
var inst_34186 = (state_34232[(8)]);
var inst_34184 = (state_34232[(9)]);
var inst_34185 = (state_34232[(10)]);
var inst_34187 = (state_34232[(11)]);
var inst_34194 = (state_34232[(2)]);
var inst_34195 = (inst_34187 + (1));
var tmp34241 = inst_34186;
var tmp34242 = inst_34184;
var tmp34243 = inst_34185;
var inst_34184__$1 = tmp34242;
var inst_34185__$1 = tmp34243;
var inst_34186__$1 = tmp34241;
var inst_34187__$1 = inst_34195;
var state_34232__$1 = (function (){var statearr_34246 = state_34232;
(statearr_34246[(14)] = inst_34194);

(statearr_34246[(8)] = inst_34186__$1);

(statearr_34246[(9)] = inst_34184__$1);

(statearr_34246[(10)] = inst_34185__$1);

(statearr_34246[(11)] = inst_34187__$1);

return statearr_34246;
})();
var statearr_34247_34279 = state_34232__$1;
(statearr_34247_34279[(2)] = null);

(statearr_34247_34279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (22))){
var state_34232__$1 = state_34232;
var statearr_34248_34280 = state_34232__$1;
(statearr_34248_34280[(2)] = null);

(statearr_34248_34280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (6))){
var inst_34173 = (state_34232[(13)]);
var inst_34182 = f.call(null,inst_34173);
var inst_34183 = cljs.core.seq.call(null,inst_34182);
var inst_34184 = inst_34183;
var inst_34185 = null;
var inst_34186 = (0);
var inst_34187 = (0);
var state_34232__$1 = (function (){var statearr_34249 = state_34232;
(statearr_34249[(8)] = inst_34186);

(statearr_34249[(9)] = inst_34184);

(statearr_34249[(10)] = inst_34185);

(statearr_34249[(11)] = inst_34187);

return statearr_34249;
})();
var statearr_34250_34281 = state_34232__$1;
(statearr_34250_34281[(2)] = null);

(statearr_34250_34281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (17))){
var inst_34198 = (state_34232[(7)]);
var inst_34202 = cljs.core.chunk_first.call(null,inst_34198);
var inst_34203 = cljs.core.chunk_rest.call(null,inst_34198);
var inst_34204 = cljs.core.count.call(null,inst_34202);
var inst_34184 = inst_34203;
var inst_34185 = inst_34202;
var inst_34186 = inst_34204;
var inst_34187 = (0);
var state_34232__$1 = (function (){var statearr_34251 = state_34232;
(statearr_34251[(8)] = inst_34186);

(statearr_34251[(9)] = inst_34184);

(statearr_34251[(10)] = inst_34185);

(statearr_34251[(11)] = inst_34187);

return statearr_34251;
})();
var statearr_34252_34282 = state_34232__$1;
(statearr_34252_34282[(2)] = null);

(statearr_34252_34282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (3))){
var inst_34230 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34232__$1,inst_34230);
} else {
if((state_val_34233 === (12))){
var inst_34218 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34253_34283 = state_34232__$1;
(statearr_34253_34283[(2)] = inst_34218);

(statearr_34253_34283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (2))){
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34232__$1,(4),in$);
} else {
if((state_val_34233 === (23))){
var inst_34226 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34254_34284 = state_34232__$1;
(statearr_34254_34284[(2)] = inst_34226);

(statearr_34254_34284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (19))){
var inst_34213 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34255_34285 = state_34232__$1;
(statearr_34255_34285[(2)] = inst_34213);

(statearr_34255_34285[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (11))){
var inst_34198 = (state_34232[(7)]);
var inst_34184 = (state_34232[(9)]);
var inst_34198__$1 = cljs.core.seq.call(null,inst_34184);
var state_34232__$1 = (function (){var statearr_34256 = state_34232;
(statearr_34256[(7)] = inst_34198__$1);

return statearr_34256;
})();
if(inst_34198__$1){
var statearr_34257_34286 = state_34232__$1;
(statearr_34257_34286[(1)] = (14));

} else {
var statearr_34258_34287 = state_34232__$1;
(statearr_34258_34287[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (9))){
var inst_34220 = (state_34232[(2)]);
var inst_34221 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34232__$1 = (function (){var statearr_34259 = state_34232;
(statearr_34259[(15)] = inst_34220);

return statearr_34259;
})();
if(cljs.core.truth_(inst_34221)){
var statearr_34260_34288 = state_34232__$1;
(statearr_34260_34288[(1)] = (21));

} else {
var statearr_34261_34289 = state_34232__$1;
(statearr_34261_34289[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (5))){
var inst_34176 = cljs.core.async.close_BANG_.call(null,out);
var state_34232__$1 = state_34232;
var statearr_34262_34290 = state_34232__$1;
(statearr_34262_34290[(2)] = inst_34176);

(statearr_34262_34290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (14))){
var inst_34198 = (state_34232[(7)]);
var inst_34200 = cljs.core.chunked_seq_QMARK_.call(null,inst_34198);
var state_34232__$1 = state_34232;
if(inst_34200){
var statearr_34263_34291 = state_34232__$1;
(statearr_34263_34291[(1)] = (17));

} else {
var statearr_34264_34292 = state_34232__$1;
(statearr_34264_34292[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (16))){
var inst_34216 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34265_34293 = state_34232__$1;
(statearr_34265_34293[(2)] = inst_34216);

(statearr_34265_34293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (10))){
var inst_34185 = (state_34232[(10)]);
var inst_34187 = (state_34232[(11)]);
var inst_34192 = cljs.core._nth.call(null,inst_34185,inst_34187);
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34232__$1,(13),out,inst_34192);
} else {
if((state_val_34233 === (18))){
var inst_34198 = (state_34232[(7)]);
var inst_34207 = cljs.core.first.call(null,inst_34198);
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34232__$1,(20),out,inst_34207);
} else {
if((state_val_34233 === (8))){
var inst_34186 = (state_34232[(8)]);
var inst_34187 = (state_34232[(11)]);
var inst_34189 = (inst_34187 < inst_34186);
var inst_34190 = inst_34189;
var state_34232__$1 = state_34232;
if(cljs.core.truth_(inst_34190)){
var statearr_34266_34294 = state_34232__$1;
(statearr_34266_34294[(1)] = (10));

} else {
var statearr_34267_34295 = state_34232__$1;
(statearr_34267_34295[(1)] = (11));

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
});})(c__32630__auto__))
;
return ((function (switch__32542__auto__,c__32630__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32543__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32543__auto____0 = (function (){
var statearr_34268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34268[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32543__auto__);

(statearr_34268[(1)] = (1));

return statearr_34268;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32543__auto____1 = (function (state_34232){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_34232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e34269){if((e34269 instanceof Object)){
var ex__32546__auto__ = e34269;
var statearr_34270_34296 = state_34232;
(statearr_34270_34296[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34297 = state_34232;
state_34232 = G__34297;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32543__auto__ = function(state_34232){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32543__auto____1.call(this,state_34232);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32543__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32543__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__))
})();
var state__32632__auto__ = (function (){var statearr_34271 = f__32631__auto__.call(null);
(statearr_34271[(6)] = c__32630__auto__);

return statearr_34271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__))
);

return c__32630__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34299 = arguments.length;
switch (G__34299) {
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
var G__34302 = arguments.length;
switch (G__34302) {
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
var G__34305 = arguments.length;
switch (G__34305) {
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
var c__32630__auto___34352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___34352,out){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___34352,out){
return (function (state_34329){
var state_val_34330 = (state_34329[(1)]);
if((state_val_34330 === (7))){
var inst_34324 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34331_34353 = state_34329__$1;
(statearr_34331_34353[(2)] = inst_34324);

(statearr_34331_34353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (1))){
var inst_34306 = null;
var state_34329__$1 = (function (){var statearr_34332 = state_34329;
(statearr_34332[(7)] = inst_34306);

return statearr_34332;
})();
var statearr_34333_34354 = state_34329__$1;
(statearr_34333_34354[(2)] = null);

(statearr_34333_34354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (4))){
var inst_34309 = (state_34329[(8)]);
var inst_34309__$1 = (state_34329[(2)]);
var inst_34310 = (inst_34309__$1 == null);
var inst_34311 = cljs.core.not.call(null,inst_34310);
var state_34329__$1 = (function (){var statearr_34334 = state_34329;
(statearr_34334[(8)] = inst_34309__$1);

return statearr_34334;
})();
if(inst_34311){
var statearr_34335_34355 = state_34329__$1;
(statearr_34335_34355[(1)] = (5));

} else {
var statearr_34336_34356 = state_34329__$1;
(statearr_34336_34356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (6))){
var state_34329__$1 = state_34329;
var statearr_34337_34357 = state_34329__$1;
(statearr_34337_34357[(2)] = null);

(statearr_34337_34357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (3))){
var inst_34326 = (state_34329[(2)]);
var inst_34327 = cljs.core.async.close_BANG_.call(null,out);
var state_34329__$1 = (function (){var statearr_34338 = state_34329;
(statearr_34338[(9)] = inst_34326);

return statearr_34338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34329__$1,inst_34327);
} else {
if((state_val_34330 === (2))){
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34329__$1,(4),ch);
} else {
if((state_val_34330 === (11))){
var inst_34309 = (state_34329[(8)]);
var inst_34318 = (state_34329[(2)]);
var inst_34306 = inst_34309;
var state_34329__$1 = (function (){var statearr_34339 = state_34329;
(statearr_34339[(10)] = inst_34318);

(statearr_34339[(7)] = inst_34306);

return statearr_34339;
})();
var statearr_34340_34358 = state_34329__$1;
(statearr_34340_34358[(2)] = null);

(statearr_34340_34358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (9))){
var inst_34309 = (state_34329[(8)]);
var state_34329__$1 = state_34329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34329__$1,(11),out,inst_34309);
} else {
if((state_val_34330 === (5))){
var inst_34306 = (state_34329[(7)]);
var inst_34309 = (state_34329[(8)]);
var inst_34313 = cljs.core._EQ_.call(null,inst_34309,inst_34306);
var state_34329__$1 = state_34329;
if(inst_34313){
var statearr_34342_34359 = state_34329__$1;
(statearr_34342_34359[(1)] = (8));

} else {
var statearr_34343_34360 = state_34329__$1;
(statearr_34343_34360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (10))){
var inst_34321 = (state_34329[(2)]);
var state_34329__$1 = state_34329;
var statearr_34344_34361 = state_34329__$1;
(statearr_34344_34361[(2)] = inst_34321);

(statearr_34344_34361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34330 === (8))){
var inst_34306 = (state_34329[(7)]);
var tmp34341 = inst_34306;
var inst_34306__$1 = tmp34341;
var state_34329__$1 = (function (){var statearr_34345 = state_34329;
(statearr_34345[(7)] = inst_34306__$1);

return statearr_34345;
})();
var statearr_34346_34362 = state_34329__$1;
(statearr_34346_34362[(2)] = null);

(statearr_34346_34362[(1)] = (2));


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
});})(c__32630__auto___34352,out))
;
return ((function (switch__32542__auto__,c__32630__auto___34352,out){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_34347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34347[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_34347[(1)] = (1));

return statearr_34347;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_34329){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_34329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e34348){if((e34348 instanceof Object)){
var ex__32546__auto__ = e34348;
var statearr_34349_34363 = state_34329;
(statearr_34349_34363[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34364 = state_34329;
state_34329 = G__34364;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_34329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_34329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___34352,out))
})();
var state__32632__auto__ = (function (){var statearr_34350 = f__32631__auto__.call(null);
(statearr_34350[(6)] = c__32630__auto___34352);

return statearr_34350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___34352,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34366 = arguments.length;
switch (G__34366) {
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
var c__32630__auto___34432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___34432,out){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___34432,out){
return (function (state_34404){
var state_val_34405 = (state_34404[(1)]);
if((state_val_34405 === (7))){
var inst_34400 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34406_34433 = state_34404__$1;
(statearr_34406_34433[(2)] = inst_34400);

(statearr_34406_34433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (1))){
var inst_34367 = (new Array(n));
var inst_34368 = inst_34367;
var inst_34369 = (0);
var state_34404__$1 = (function (){var statearr_34407 = state_34404;
(statearr_34407[(7)] = inst_34369);

(statearr_34407[(8)] = inst_34368);

return statearr_34407;
})();
var statearr_34408_34434 = state_34404__$1;
(statearr_34408_34434[(2)] = null);

(statearr_34408_34434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (4))){
var inst_34372 = (state_34404[(9)]);
var inst_34372__$1 = (state_34404[(2)]);
var inst_34373 = (inst_34372__$1 == null);
var inst_34374 = cljs.core.not.call(null,inst_34373);
var state_34404__$1 = (function (){var statearr_34409 = state_34404;
(statearr_34409[(9)] = inst_34372__$1);

return statearr_34409;
})();
if(inst_34374){
var statearr_34410_34435 = state_34404__$1;
(statearr_34410_34435[(1)] = (5));

} else {
var statearr_34411_34436 = state_34404__$1;
(statearr_34411_34436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (15))){
var inst_34394 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34412_34437 = state_34404__$1;
(statearr_34412_34437[(2)] = inst_34394);

(statearr_34412_34437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (13))){
var state_34404__$1 = state_34404;
var statearr_34413_34438 = state_34404__$1;
(statearr_34413_34438[(2)] = null);

(statearr_34413_34438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (6))){
var inst_34369 = (state_34404[(7)]);
var inst_34390 = (inst_34369 > (0));
var state_34404__$1 = state_34404;
if(cljs.core.truth_(inst_34390)){
var statearr_34414_34439 = state_34404__$1;
(statearr_34414_34439[(1)] = (12));

} else {
var statearr_34415_34440 = state_34404__$1;
(statearr_34415_34440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (3))){
var inst_34402 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34404__$1,inst_34402);
} else {
if((state_val_34405 === (12))){
var inst_34368 = (state_34404[(8)]);
var inst_34392 = cljs.core.vec.call(null,inst_34368);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34404__$1,(15),out,inst_34392);
} else {
if((state_val_34405 === (2))){
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34404__$1,(4),ch);
} else {
if((state_val_34405 === (11))){
var inst_34384 = (state_34404[(2)]);
var inst_34385 = (new Array(n));
var inst_34368 = inst_34385;
var inst_34369 = (0);
var state_34404__$1 = (function (){var statearr_34416 = state_34404;
(statearr_34416[(10)] = inst_34384);

(statearr_34416[(7)] = inst_34369);

(statearr_34416[(8)] = inst_34368);

return statearr_34416;
})();
var statearr_34417_34441 = state_34404__$1;
(statearr_34417_34441[(2)] = null);

(statearr_34417_34441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (9))){
var inst_34368 = (state_34404[(8)]);
var inst_34382 = cljs.core.vec.call(null,inst_34368);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34404__$1,(11),out,inst_34382);
} else {
if((state_val_34405 === (5))){
var inst_34372 = (state_34404[(9)]);
var inst_34377 = (state_34404[(11)]);
var inst_34369 = (state_34404[(7)]);
var inst_34368 = (state_34404[(8)]);
var inst_34376 = (inst_34368[inst_34369] = inst_34372);
var inst_34377__$1 = (inst_34369 + (1));
var inst_34378 = (inst_34377__$1 < n);
var state_34404__$1 = (function (){var statearr_34418 = state_34404;
(statearr_34418[(11)] = inst_34377__$1);

(statearr_34418[(12)] = inst_34376);

return statearr_34418;
})();
if(cljs.core.truth_(inst_34378)){
var statearr_34419_34442 = state_34404__$1;
(statearr_34419_34442[(1)] = (8));

} else {
var statearr_34420_34443 = state_34404__$1;
(statearr_34420_34443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (14))){
var inst_34397 = (state_34404[(2)]);
var inst_34398 = cljs.core.async.close_BANG_.call(null,out);
var state_34404__$1 = (function (){var statearr_34422 = state_34404;
(statearr_34422[(13)] = inst_34397);

return statearr_34422;
})();
var statearr_34423_34444 = state_34404__$1;
(statearr_34423_34444[(2)] = inst_34398);

(statearr_34423_34444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (10))){
var inst_34388 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34424_34445 = state_34404__$1;
(statearr_34424_34445[(2)] = inst_34388);

(statearr_34424_34445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (8))){
var inst_34377 = (state_34404[(11)]);
var inst_34368 = (state_34404[(8)]);
var tmp34421 = inst_34368;
var inst_34368__$1 = tmp34421;
var inst_34369 = inst_34377;
var state_34404__$1 = (function (){var statearr_34425 = state_34404;
(statearr_34425[(7)] = inst_34369);

(statearr_34425[(8)] = inst_34368__$1);

return statearr_34425;
})();
var statearr_34426_34446 = state_34404__$1;
(statearr_34426_34446[(2)] = null);

(statearr_34426_34446[(1)] = (2));


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
});})(c__32630__auto___34432,out))
;
return ((function (switch__32542__auto__,c__32630__auto___34432,out){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_34427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34427[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_34427[(1)] = (1));

return statearr_34427;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_34404){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_34404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e34428){if((e34428 instanceof Object)){
var ex__32546__auto__ = e34428;
var statearr_34429_34447 = state_34404;
(statearr_34429_34447[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34448 = state_34404;
state_34404 = G__34448;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_34404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_34404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___34432,out))
})();
var state__32632__auto__ = (function (){var statearr_34430 = f__32631__auto__.call(null);
(statearr_34430[(6)] = c__32630__auto___34432);

return statearr_34430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___34432,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34450 = arguments.length;
switch (G__34450) {
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
var c__32630__auto___34520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___34520,out){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___34520,out){
return (function (state_34492){
var state_val_34493 = (state_34492[(1)]);
if((state_val_34493 === (7))){
var inst_34488 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34494_34521 = state_34492__$1;
(statearr_34494_34521[(2)] = inst_34488);

(statearr_34494_34521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (1))){
var inst_34451 = [];
var inst_34452 = inst_34451;
var inst_34453 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34492__$1 = (function (){var statearr_34495 = state_34492;
(statearr_34495[(7)] = inst_34453);

(statearr_34495[(8)] = inst_34452);

return statearr_34495;
})();
var statearr_34496_34522 = state_34492__$1;
(statearr_34496_34522[(2)] = null);

(statearr_34496_34522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (4))){
var inst_34456 = (state_34492[(9)]);
var inst_34456__$1 = (state_34492[(2)]);
var inst_34457 = (inst_34456__$1 == null);
var inst_34458 = cljs.core.not.call(null,inst_34457);
var state_34492__$1 = (function (){var statearr_34497 = state_34492;
(statearr_34497[(9)] = inst_34456__$1);

return statearr_34497;
})();
if(inst_34458){
var statearr_34498_34523 = state_34492__$1;
(statearr_34498_34523[(1)] = (5));

} else {
var statearr_34499_34524 = state_34492__$1;
(statearr_34499_34524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (15))){
var inst_34482 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34500_34525 = state_34492__$1;
(statearr_34500_34525[(2)] = inst_34482);

(statearr_34500_34525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (13))){
var state_34492__$1 = state_34492;
var statearr_34501_34526 = state_34492__$1;
(statearr_34501_34526[(2)] = null);

(statearr_34501_34526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (6))){
var inst_34452 = (state_34492[(8)]);
var inst_34477 = inst_34452.length;
var inst_34478 = (inst_34477 > (0));
var state_34492__$1 = state_34492;
if(cljs.core.truth_(inst_34478)){
var statearr_34502_34527 = state_34492__$1;
(statearr_34502_34527[(1)] = (12));

} else {
var statearr_34503_34528 = state_34492__$1;
(statearr_34503_34528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (3))){
var inst_34490 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34492__$1,inst_34490);
} else {
if((state_val_34493 === (12))){
var inst_34452 = (state_34492[(8)]);
var inst_34480 = cljs.core.vec.call(null,inst_34452);
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34492__$1,(15),out,inst_34480);
} else {
if((state_val_34493 === (2))){
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34492__$1,(4),ch);
} else {
if((state_val_34493 === (11))){
var inst_34460 = (state_34492[(10)]);
var inst_34456 = (state_34492[(9)]);
var inst_34470 = (state_34492[(2)]);
var inst_34471 = [];
var inst_34472 = inst_34471.push(inst_34456);
var inst_34452 = inst_34471;
var inst_34453 = inst_34460;
var state_34492__$1 = (function (){var statearr_34504 = state_34492;
(statearr_34504[(11)] = inst_34470);

(statearr_34504[(7)] = inst_34453);

(statearr_34504[(12)] = inst_34472);

(statearr_34504[(8)] = inst_34452);

return statearr_34504;
})();
var statearr_34505_34529 = state_34492__$1;
(statearr_34505_34529[(2)] = null);

(statearr_34505_34529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (9))){
var inst_34452 = (state_34492[(8)]);
var inst_34468 = cljs.core.vec.call(null,inst_34452);
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34492__$1,(11),out,inst_34468);
} else {
if((state_val_34493 === (5))){
var inst_34453 = (state_34492[(7)]);
var inst_34460 = (state_34492[(10)]);
var inst_34456 = (state_34492[(9)]);
var inst_34460__$1 = f.call(null,inst_34456);
var inst_34461 = cljs.core._EQ_.call(null,inst_34460__$1,inst_34453);
var inst_34462 = cljs.core.keyword_identical_QMARK_.call(null,inst_34453,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34463 = (inst_34461) || (inst_34462);
var state_34492__$1 = (function (){var statearr_34506 = state_34492;
(statearr_34506[(10)] = inst_34460__$1);

return statearr_34506;
})();
if(cljs.core.truth_(inst_34463)){
var statearr_34507_34530 = state_34492__$1;
(statearr_34507_34530[(1)] = (8));

} else {
var statearr_34508_34531 = state_34492__$1;
(statearr_34508_34531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (14))){
var inst_34485 = (state_34492[(2)]);
var inst_34486 = cljs.core.async.close_BANG_.call(null,out);
var state_34492__$1 = (function (){var statearr_34510 = state_34492;
(statearr_34510[(13)] = inst_34485);

return statearr_34510;
})();
var statearr_34511_34532 = state_34492__$1;
(statearr_34511_34532[(2)] = inst_34486);

(statearr_34511_34532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (10))){
var inst_34475 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34512_34533 = state_34492__$1;
(statearr_34512_34533[(2)] = inst_34475);

(statearr_34512_34533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (8))){
var inst_34460 = (state_34492[(10)]);
var inst_34456 = (state_34492[(9)]);
var inst_34452 = (state_34492[(8)]);
var inst_34465 = inst_34452.push(inst_34456);
var tmp34509 = inst_34452;
var inst_34452__$1 = tmp34509;
var inst_34453 = inst_34460;
var state_34492__$1 = (function (){var statearr_34513 = state_34492;
(statearr_34513[(7)] = inst_34453);

(statearr_34513[(8)] = inst_34452__$1);

(statearr_34513[(14)] = inst_34465);

return statearr_34513;
})();
var statearr_34514_34534 = state_34492__$1;
(statearr_34514_34534[(2)] = null);

(statearr_34514_34534[(1)] = (2));


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
});})(c__32630__auto___34520,out))
;
return ((function (switch__32542__auto__,c__32630__auto___34520,out){
return (function() {
var cljs$core$async$state_machine__32543__auto__ = null;
var cljs$core$async$state_machine__32543__auto____0 = (function (){
var statearr_34515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34515[(0)] = cljs$core$async$state_machine__32543__auto__);

(statearr_34515[(1)] = (1));

return statearr_34515;
});
var cljs$core$async$state_machine__32543__auto____1 = (function (state_34492){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_34492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e34516){if((e34516 instanceof Object)){
var ex__32546__auto__ = e34516;
var statearr_34517_34535 = state_34492;
(statearr_34517_34535[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34536 = state_34492;
state_34492 = G__34536;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
cljs$core$async$state_machine__32543__auto__ = function(state_34492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32543__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32543__auto____1.call(this,state_34492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32543__auto____0;
cljs$core$async$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32543__auto____1;
return cljs$core$async$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___34520,out))
})();
var state__32632__auto__ = (function (){var statearr_34518 = f__32631__auto__.call(null);
(statearr_34518[(6)] = c__32630__auto___34520);

return statearr_34518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___34520,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1517031111159
