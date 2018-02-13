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
var G__25636 = arguments.length;
switch (G__25636) {
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
if(typeof cljs.core.async.t_cljs$core$async25637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25637 = (function (f,blockable,meta25638){
this.f = f;
this.blockable = blockable;
this.meta25638 = meta25638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25639,meta25638__$1){
var self__ = this;
var _25639__$1 = this;
return (new cljs.core.async.t_cljs$core$async25637(self__.f,self__.blockable,meta25638__$1));
});

cljs.core.async.t_cljs$core$async25637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25639){
var self__ = this;
var _25639__$1 = this;
return self__.meta25638;
});

cljs.core.async.t_cljs$core$async25637.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25638","meta25638",-1785017905,null)], null);
});

cljs.core.async.t_cljs$core$async25637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25637";

cljs.core.async.t_cljs$core$async25637.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async25637");
});

cljs.core.async.__GT_t_cljs$core$async25637 = (function cljs$core$async$__GT_t_cljs$core$async25637(f__$1,blockable__$1,meta25638){
return (new cljs.core.async.t_cljs$core$async25637(f__$1,blockable__$1,meta25638));
});

}

return (new cljs.core.async.t_cljs$core$async25637(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25643 = arguments.length;
switch (G__25643) {
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
var G__25646 = arguments.length;
switch (G__25646) {
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
var G__25649 = arguments.length;
switch (G__25649) {
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
var val_25651 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25651);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25651,ret){
return (function (){
return fn1.call(null,val_25651);
});})(val_25651,ret))
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
var G__25653 = arguments.length;
switch (G__25653) {
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
var n__8615__auto___25655 = n;
var x_25656 = (0);
while(true){
if((x_25656 < n__8615__auto___25655)){
(a[x_25656] = (0));

var G__25657 = (x_25656 + (1));
x_25656 = G__25657;
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

var G__25658 = (i + (1));
i = G__25658;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25659 = (function (flag,meta25660){
this.flag = flag;
this.meta25660 = meta25660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25661,meta25660__$1){
var self__ = this;
var _25661__$1 = this;
return (new cljs.core.async.t_cljs$core$async25659(self__.flag,meta25660__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25661){
var self__ = this;
var _25661__$1 = this;
return self__.meta25660;
});})(flag))
;

cljs.core.async.t_cljs$core$async25659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25659.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25660","meta25660",1617620872,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25659";

cljs.core.async.t_cljs$core$async25659.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async25659");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25659 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25659(flag__$1,meta25660){
return (new cljs.core.async.t_cljs$core$async25659(flag__$1,meta25660));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25659(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25662 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25662 = (function (flag,cb,meta25663){
this.flag = flag;
this.cb = cb;
this.meta25663 = meta25663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25664,meta25663__$1){
var self__ = this;
var _25664__$1 = this;
return (new cljs.core.async.t_cljs$core$async25662(self__.flag,self__.cb,meta25663__$1));
});

cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25664){
var self__ = this;
var _25664__$1 = this;
return self__.meta25663;
});

cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25663","meta25663",289532203,null)], null);
});

cljs.core.async.t_cljs$core$async25662.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25662";

cljs.core.async.t_cljs$core$async25662.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async25662");
});

cljs.core.async.__GT_t_cljs$core$async25662 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25662(flag__$1,cb__$1,meta25663){
return (new cljs.core.async.t_cljs$core$async25662(flag__$1,cb__$1,meta25663));
});

}

return (new cljs.core.async.t_cljs$core$async25662(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25665_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25665_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25666_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25666_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7668__auto__ = wport;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25667 = (i + (1));
i = G__25667;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7656__auto__;
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
var args__8846__auto__ = [];
var len__8839__auto___25673 = arguments.length;
var i__8840__auto___25674 = (0);
while(true){
if((i__8840__auto___25674 < len__8839__auto___25673)){
args__8846__auto__.push((arguments[i__8840__auto___25674]));

var G__25675 = (i__8840__auto___25674 + (1));
i__8840__auto___25674 = G__25675;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25670){
var map__25671 = p__25670;
var map__25671__$1 = ((((!((map__25671 == null)))?((((map__25671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25671):map__25671);
var opts = map__25671__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25668){
var G__25669 = cljs.core.first.call(null,seq25668);
var seq25668__$1 = cljs.core.next.call(null,seq25668);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25669,seq25668__$1);
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
var G__25677 = arguments.length;
switch (G__25677) {
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
var c__17552__auto___25723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___25723){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___25723){
return (function (state_25701){
var state_val_25702 = (state_25701[(1)]);
if((state_val_25702 === (7))){
var inst_25697 = (state_25701[(2)]);
var state_25701__$1 = state_25701;
var statearr_25703_25724 = state_25701__$1;
(statearr_25703_25724[(2)] = inst_25697);

(statearr_25703_25724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (1))){
var state_25701__$1 = state_25701;
var statearr_25704_25725 = state_25701__$1;
(statearr_25704_25725[(2)] = null);

(statearr_25704_25725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (4))){
var inst_25680 = (state_25701[(7)]);
var inst_25680__$1 = (state_25701[(2)]);
var inst_25681 = (inst_25680__$1 == null);
var state_25701__$1 = (function (){var statearr_25705 = state_25701;
(statearr_25705[(7)] = inst_25680__$1);

return statearr_25705;
})();
if(cljs.core.truth_(inst_25681)){
var statearr_25706_25726 = state_25701__$1;
(statearr_25706_25726[(1)] = (5));

} else {
var statearr_25707_25727 = state_25701__$1;
(statearr_25707_25727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (13))){
var state_25701__$1 = state_25701;
var statearr_25708_25728 = state_25701__$1;
(statearr_25708_25728[(2)] = null);

(statearr_25708_25728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (6))){
var inst_25680 = (state_25701[(7)]);
var state_25701__$1 = state_25701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25701__$1,(11),to,inst_25680);
} else {
if((state_val_25702 === (3))){
var inst_25699 = (state_25701[(2)]);
var state_25701__$1 = state_25701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25701__$1,inst_25699);
} else {
if((state_val_25702 === (12))){
var state_25701__$1 = state_25701;
var statearr_25709_25729 = state_25701__$1;
(statearr_25709_25729[(2)] = null);

(statearr_25709_25729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (2))){
var state_25701__$1 = state_25701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25701__$1,(4),from);
} else {
if((state_val_25702 === (11))){
var inst_25690 = (state_25701[(2)]);
var state_25701__$1 = state_25701;
if(cljs.core.truth_(inst_25690)){
var statearr_25710_25730 = state_25701__$1;
(statearr_25710_25730[(1)] = (12));

} else {
var statearr_25711_25731 = state_25701__$1;
(statearr_25711_25731[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (9))){
var state_25701__$1 = state_25701;
var statearr_25712_25732 = state_25701__$1;
(statearr_25712_25732[(2)] = null);

(statearr_25712_25732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (5))){
var state_25701__$1 = state_25701;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25713_25733 = state_25701__$1;
(statearr_25713_25733[(1)] = (8));

} else {
var statearr_25714_25734 = state_25701__$1;
(statearr_25714_25734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (14))){
var inst_25695 = (state_25701[(2)]);
var state_25701__$1 = state_25701;
var statearr_25715_25735 = state_25701__$1;
(statearr_25715_25735[(2)] = inst_25695);

(statearr_25715_25735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (10))){
var inst_25687 = (state_25701[(2)]);
var state_25701__$1 = state_25701;
var statearr_25716_25736 = state_25701__$1;
(statearr_25716_25736[(2)] = inst_25687);

(statearr_25716_25736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25702 === (8))){
var inst_25684 = cljs.core.async.close_BANG_.call(null,to);
var state_25701__$1 = state_25701;
var statearr_25717_25737 = state_25701__$1;
(statearr_25717_25737[(2)] = inst_25684);

(statearr_25717_25737[(1)] = (10));


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
});})(c__17552__auto___25723))
;
return ((function (switch__17464__auto__,c__17552__auto___25723){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_25718 = [null,null,null,null,null,null,null,null];
(statearr_25718[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_25718[(1)] = (1));

return statearr_25718;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_25701){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_25701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e25719){if((e25719 instanceof Object)){
var ex__17468__auto__ = e25719;
var statearr_25720_25738 = state_25701;
(statearr_25720_25738[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25739 = state_25701;
state_25701 = G__25739;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_25701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_25701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___25723))
})();
var state__17554__auto__ = (function (){var statearr_25721 = f__17553__auto__.call(null);
(statearr_25721[(6)] = c__17552__auto___25723);

return statearr_25721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___25723))
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
return (function (p__25740){
var vec__25741 = p__25740;
var v = cljs.core.nth.call(null,vec__25741,(0),null);
var p = cljs.core.nth.call(null,vec__25741,(1),null);
var job = vec__25741;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17552__auto___25912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___25912,res,vec__25741,v,p,job,jobs,results){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___25912,res,vec__25741,v,p,job,jobs,results){
return (function (state_25748){
var state_val_25749 = (state_25748[(1)]);
if((state_val_25749 === (1))){
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25748__$1,(2),res,v);
} else {
if((state_val_25749 === (2))){
var inst_25745 = (state_25748[(2)]);
var inst_25746 = cljs.core.async.close_BANG_.call(null,res);
var state_25748__$1 = (function (){var statearr_25750 = state_25748;
(statearr_25750[(7)] = inst_25745);

return statearr_25750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25748__$1,inst_25746);
} else {
return null;
}
}
});})(c__17552__auto___25912,res,vec__25741,v,p,job,jobs,results))
;
return ((function (switch__17464__auto__,c__17552__auto___25912,res,vec__25741,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_25751 = [null,null,null,null,null,null,null,null];
(statearr_25751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_25751[(1)] = (1));

return statearr_25751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_25748){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_25748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e25752){if((e25752 instanceof Object)){
var ex__17468__auto__ = e25752;
var statearr_25753_25913 = state_25748;
(statearr_25753_25913[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25914 = state_25748;
state_25748 = G__25914;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_25748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_25748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___25912,res,vec__25741,v,p,job,jobs,results))
})();
var state__17554__auto__ = (function (){var statearr_25754 = f__17553__auto__.call(null);
(statearr_25754[(6)] = c__17552__auto___25912);

return statearr_25754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___25912,res,vec__25741,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25755){
var vec__25756 = p__25755;
var v = cljs.core.nth.call(null,vec__25756,(0),null);
var p = cljs.core.nth.call(null,vec__25756,(1),null);
var job = vec__25756;
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
var n__8615__auto___25915 = n;
var __25916 = (0);
while(true){
if((__25916 < n__8615__auto___25915)){
var G__25759_25917 = type;
var G__25759_25918__$1 = (((G__25759_25917 instanceof cljs.core.Keyword))?G__25759_25917.fqn:null);
switch (G__25759_25918__$1) {
case "compute":
var c__17552__auto___25920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25916,c__17552__auto___25920,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (__25916,c__17552__auto___25920,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async){
return (function (state_25772){
var state_val_25773 = (state_25772[(1)]);
if((state_val_25773 === (1))){
var state_25772__$1 = state_25772;
var statearr_25774_25921 = state_25772__$1;
(statearr_25774_25921[(2)] = null);

(statearr_25774_25921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25773 === (2))){
var state_25772__$1 = state_25772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25772__$1,(4),jobs);
} else {
if((state_val_25773 === (3))){
var inst_25770 = (state_25772[(2)]);
var state_25772__$1 = state_25772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25772__$1,inst_25770);
} else {
if((state_val_25773 === (4))){
var inst_25762 = (state_25772[(2)]);
var inst_25763 = process.call(null,inst_25762);
var state_25772__$1 = state_25772;
if(cljs.core.truth_(inst_25763)){
var statearr_25775_25922 = state_25772__$1;
(statearr_25775_25922[(1)] = (5));

} else {
var statearr_25776_25923 = state_25772__$1;
(statearr_25776_25923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25773 === (5))){
var state_25772__$1 = state_25772;
var statearr_25777_25924 = state_25772__$1;
(statearr_25777_25924[(2)] = null);

(statearr_25777_25924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25773 === (6))){
var state_25772__$1 = state_25772;
var statearr_25778_25925 = state_25772__$1;
(statearr_25778_25925[(2)] = null);

(statearr_25778_25925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25773 === (7))){
var inst_25768 = (state_25772[(2)]);
var state_25772__$1 = state_25772;
var statearr_25779_25926 = state_25772__$1;
(statearr_25779_25926[(2)] = inst_25768);

(statearr_25779_25926[(1)] = (3));


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
});})(__25916,c__17552__auto___25920,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async))
;
return ((function (__25916,switch__17464__auto__,c__17552__auto___25920,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_25780 = [null,null,null,null,null,null,null];
(statearr_25780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_25780[(1)] = (1));

return statearr_25780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_25772){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_25772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e25781){if((e25781 instanceof Object)){
var ex__17468__auto__ = e25781;
var statearr_25782_25927 = state_25772;
(statearr_25782_25927[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25928 = state_25772;
state_25772 = G__25928;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_25772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_25772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(__25916,switch__17464__auto__,c__17552__auto___25920,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async))
})();
var state__17554__auto__ = (function (){var statearr_25783 = f__17553__auto__.call(null);
(statearr_25783[(6)] = c__17552__auto___25920);

return statearr_25783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(__25916,c__17552__auto___25920,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async))
);


break;
case "async":
var c__17552__auto___25929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25916,c__17552__auto___25929,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (__25916,c__17552__auto___25929,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async){
return (function (state_25796){
var state_val_25797 = (state_25796[(1)]);
if((state_val_25797 === (1))){
var state_25796__$1 = state_25796;
var statearr_25798_25930 = state_25796__$1;
(statearr_25798_25930[(2)] = null);

(statearr_25798_25930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (2))){
var state_25796__$1 = state_25796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25796__$1,(4),jobs);
} else {
if((state_val_25797 === (3))){
var inst_25794 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25796__$1,inst_25794);
} else {
if((state_val_25797 === (4))){
var inst_25786 = (state_25796[(2)]);
var inst_25787 = async.call(null,inst_25786);
var state_25796__$1 = state_25796;
if(cljs.core.truth_(inst_25787)){
var statearr_25799_25931 = state_25796__$1;
(statearr_25799_25931[(1)] = (5));

} else {
var statearr_25800_25932 = state_25796__$1;
(statearr_25800_25932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (5))){
var state_25796__$1 = state_25796;
var statearr_25801_25933 = state_25796__$1;
(statearr_25801_25933[(2)] = null);

(statearr_25801_25933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (6))){
var state_25796__$1 = state_25796;
var statearr_25802_25934 = state_25796__$1;
(statearr_25802_25934[(2)] = null);

(statearr_25802_25934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (7))){
var inst_25792 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
var statearr_25803_25935 = state_25796__$1;
(statearr_25803_25935[(2)] = inst_25792);

(statearr_25803_25935[(1)] = (3));


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
});})(__25916,c__17552__auto___25929,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async))
;
return ((function (__25916,switch__17464__auto__,c__17552__auto___25929,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_25804 = [null,null,null,null,null,null,null];
(statearr_25804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_25804[(1)] = (1));

return statearr_25804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_25796){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_25796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e25805){if((e25805 instanceof Object)){
var ex__17468__auto__ = e25805;
var statearr_25806_25936 = state_25796;
(statearr_25806_25936[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25937 = state_25796;
state_25796 = G__25937;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_25796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_25796);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(__25916,switch__17464__auto__,c__17552__auto___25929,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async))
})();
var state__17554__auto__ = (function (){var statearr_25807 = f__17553__auto__.call(null);
(statearr_25807[(6)] = c__17552__auto___25929);

return statearr_25807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(__25916,c__17552__auto___25929,G__25759_25917,G__25759_25918__$1,n__8615__auto___25915,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25759_25918__$1)].join('')));

}

var G__25938 = (__25916 + (1));
__25916 = G__25938;
continue;
} else {
}
break;
}

var c__17552__auto___25939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___25939,jobs,results,process,async){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___25939,jobs,results,process,async){
return (function (state_25829){
var state_val_25830 = (state_25829[(1)]);
if((state_val_25830 === (1))){
var state_25829__$1 = state_25829;
var statearr_25831_25940 = state_25829__$1;
(statearr_25831_25940[(2)] = null);

(statearr_25831_25940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25830 === (2))){
var state_25829__$1 = state_25829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25829__$1,(4),from);
} else {
if((state_val_25830 === (3))){
var inst_25827 = (state_25829[(2)]);
var state_25829__$1 = state_25829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25829__$1,inst_25827);
} else {
if((state_val_25830 === (4))){
var inst_25810 = (state_25829[(7)]);
var inst_25810__$1 = (state_25829[(2)]);
var inst_25811 = (inst_25810__$1 == null);
var state_25829__$1 = (function (){var statearr_25832 = state_25829;
(statearr_25832[(7)] = inst_25810__$1);

return statearr_25832;
})();
if(cljs.core.truth_(inst_25811)){
var statearr_25833_25941 = state_25829__$1;
(statearr_25833_25941[(1)] = (5));

} else {
var statearr_25834_25942 = state_25829__$1;
(statearr_25834_25942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25830 === (5))){
var inst_25813 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25829__$1 = state_25829;
var statearr_25835_25943 = state_25829__$1;
(statearr_25835_25943[(2)] = inst_25813);

(statearr_25835_25943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25830 === (6))){
var inst_25810 = (state_25829[(7)]);
var inst_25815 = (state_25829[(8)]);
var inst_25815__$1 = cljs.core.async.chan.call(null,(1));
var inst_25816 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25817 = [inst_25810,inst_25815__$1];
var inst_25818 = (new cljs.core.PersistentVector(null,2,(5),inst_25816,inst_25817,null));
var state_25829__$1 = (function (){var statearr_25836 = state_25829;
(statearr_25836[(8)] = inst_25815__$1);

return statearr_25836;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25829__$1,(8),jobs,inst_25818);
} else {
if((state_val_25830 === (7))){
var inst_25825 = (state_25829[(2)]);
var state_25829__$1 = state_25829;
var statearr_25837_25944 = state_25829__$1;
(statearr_25837_25944[(2)] = inst_25825);

(statearr_25837_25944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25830 === (8))){
var inst_25815 = (state_25829[(8)]);
var inst_25820 = (state_25829[(2)]);
var state_25829__$1 = (function (){var statearr_25838 = state_25829;
(statearr_25838[(9)] = inst_25820);

return statearr_25838;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25829__$1,(9),results,inst_25815);
} else {
if((state_val_25830 === (9))){
var inst_25822 = (state_25829[(2)]);
var state_25829__$1 = (function (){var statearr_25839 = state_25829;
(statearr_25839[(10)] = inst_25822);

return statearr_25839;
})();
var statearr_25840_25945 = state_25829__$1;
(statearr_25840_25945[(2)] = null);

(statearr_25840_25945[(1)] = (2));


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
});})(c__17552__auto___25939,jobs,results,process,async))
;
return ((function (switch__17464__auto__,c__17552__auto___25939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_25841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_25841[(1)] = (1));

return statearr_25841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_25829){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_25829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e25842){if((e25842 instanceof Object)){
var ex__17468__auto__ = e25842;
var statearr_25843_25946 = state_25829;
(statearr_25843_25946[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25947 = state_25829;
state_25829 = G__25947;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_25829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_25829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___25939,jobs,results,process,async))
})();
var state__17554__auto__ = (function (){var statearr_25844 = f__17553__auto__.call(null);
(statearr_25844[(6)] = c__17552__auto___25939);

return statearr_25844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___25939,jobs,results,process,async))
);


var c__17552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto__,jobs,results,process,async){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto__,jobs,results,process,async){
return (function (state_25882){
var state_val_25883 = (state_25882[(1)]);
if((state_val_25883 === (7))){
var inst_25878 = (state_25882[(2)]);
var state_25882__$1 = state_25882;
var statearr_25884_25948 = state_25882__$1;
(statearr_25884_25948[(2)] = inst_25878);

(statearr_25884_25948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (20))){
var state_25882__$1 = state_25882;
var statearr_25885_25949 = state_25882__$1;
(statearr_25885_25949[(2)] = null);

(statearr_25885_25949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (1))){
var state_25882__$1 = state_25882;
var statearr_25886_25950 = state_25882__$1;
(statearr_25886_25950[(2)] = null);

(statearr_25886_25950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (4))){
var inst_25847 = (state_25882[(7)]);
var inst_25847__$1 = (state_25882[(2)]);
var inst_25848 = (inst_25847__$1 == null);
var state_25882__$1 = (function (){var statearr_25887 = state_25882;
(statearr_25887[(7)] = inst_25847__$1);

return statearr_25887;
})();
if(cljs.core.truth_(inst_25848)){
var statearr_25888_25951 = state_25882__$1;
(statearr_25888_25951[(1)] = (5));

} else {
var statearr_25889_25952 = state_25882__$1;
(statearr_25889_25952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (15))){
var inst_25860 = (state_25882[(8)]);
var state_25882__$1 = state_25882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25882__$1,(18),to,inst_25860);
} else {
if((state_val_25883 === (21))){
var inst_25873 = (state_25882[(2)]);
var state_25882__$1 = state_25882;
var statearr_25890_25953 = state_25882__$1;
(statearr_25890_25953[(2)] = inst_25873);

(statearr_25890_25953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (13))){
var inst_25875 = (state_25882[(2)]);
var state_25882__$1 = (function (){var statearr_25891 = state_25882;
(statearr_25891[(9)] = inst_25875);

return statearr_25891;
})();
var statearr_25892_25954 = state_25882__$1;
(statearr_25892_25954[(2)] = null);

(statearr_25892_25954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (6))){
var inst_25847 = (state_25882[(7)]);
var state_25882__$1 = state_25882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25882__$1,(11),inst_25847);
} else {
if((state_val_25883 === (17))){
var inst_25868 = (state_25882[(2)]);
var state_25882__$1 = state_25882;
if(cljs.core.truth_(inst_25868)){
var statearr_25893_25955 = state_25882__$1;
(statearr_25893_25955[(1)] = (19));

} else {
var statearr_25894_25956 = state_25882__$1;
(statearr_25894_25956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (3))){
var inst_25880 = (state_25882[(2)]);
var state_25882__$1 = state_25882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25882__$1,inst_25880);
} else {
if((state_val_25883 === (12))){
var inst_25857 = (state_25882[(10)]);
var state_25882__$1 = state_25882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25882__$1,(14),inst_25857);
} else {
if((state_val_25883 === (2))){
var state_25882__$1 = state_25882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25882__$1,(4),results);
} else {
if((state_val_25883 === (19))){
var state_25882__$1 = state_25882;
var statearr_25895_25957 = state_25882__$1;
(statearr_25895_25957[(2)] = null);

(statearr_25895_25957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (11))){
var inst_25857 = (state_25882[(2)]);
var state_25882__$1 = (function (){var statearr_25896 = state_25882;
(statearr_25896[(10)] = inst_25857);

return statearr_25896;
})();
var statearr_25897_25958 = state_25882__$1;
(statearr_25897_25958[(2)] = null);

(statearr_25897_25958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (9))){
var state_25882__$1 = state_25882;
var statearr_25898_25959 = state_25882__$1;
(statearr_25898_25959[(2)] = null);

(statearr_25898_25959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (5))){
var state_25882__$1 = state_25882;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25899_25960 = state_25882__$1;
(statearr_25899_25960[(1)] = (8));

} else {
var statearr_25900_25961 = state_25882__$1;
(statearr_25900_25961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (14))){
var inst_25860 = (state_25882[(8)]);
var inst_25862 = (state_25882[(11)]);
var inst_25860__$1 = (state_25882[(2)]);
var inst_25861 = (inst_25860__$1 == null);
var inst_25862__$1 = cljs.core.not.call(null,inst_25861);
var state_25882__$1 = (function (){var statearr_25901 = state_25882;
(statearr_25901[(8)] = inst_25860__$1);

(statearr_25901[(11)] = inst_25862__$1);

return statearr_25901;
})();
if(inst_25862__$1){
var statearr_25902_25962 = state_25882__$1;
(statearr_25902_25962[(1)] = (15));

} else {
var statearr_25903_25963 = state_25882__$1;
(statearr_25903_25963[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (16))){
var inst_25862 = (state_25882[(11)]);
var state_25882__$1 = state_25882;
var statearr_25904_25964 = state_25882__$1;
(statearr_25904_25964[(2)] = inst_25862);

(statearr_25904_25964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (10))){
var inst_25854 = (state_25882[(2)]);
var state_25882__$1 = state_25882;
var statearr_25905_25965 = state_25882__$1;
(statearr_25905_25965[(2)] = inst_25854);

(statearr_25905_25965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (18))){
var inst_25865 = (state_25882[(2)]);
var state_25882__$1 = state_25882;
var statearr_25906_25966 = state_25882__$1;
(statearr_25906_25966[(2)] = inst_25865);

(statearr_25906_25966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25883 === (8))){
var inst_25851 = cljs.core.async.close_BANG_.call(null,to);
var state_25882__$1 = state_25882;
var statearr_25907_25967 = state_25882__$1;
(statearr_25907_25967[(2)] = inst_25851);

(statearr_25907_25967[(1)] = (10));


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
});})(c__17552__auto__,jobs,results,process,async))
;
return ((function (switch__17464__auto__,c__17552__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_25908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_25908[(1)] = (1));

return statearr_25908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_25882){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_25882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e25909){if((e25909 instanceof Object)){
var ex__17468__auto__ = e25909;
var statearr_25910_25968 = state_25882;
(statearr_25910_25968[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25969 = state_25882;
state_25882 = G__25969;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_25882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_25882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__,jobs,results,process,async))
})();
var state__17554__auto__ = (function (){var statearr_25911 = f__17553__auto__.call(null);
(statearr_25911[(6)] = c__17552__auto__);

return statearr_25911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto__,jobs,results,process,async))
);

return c__17552__auto__;
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
var G__25971 = arguments.length;
switch (G__25971) {
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
var G__25974 = arguments.length;
switch (G__25974) {
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
var G__25977 = arguments.length;
switch (G__25977) {
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
var c__17552__auto___26026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___26026,tc,fc){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___26026,tc,fc){
return (function (state_26003){
var state_val_26004 = (state_26003[(1)]);
if((state_val_26004 === (7))){
var inst_25999 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26005_26027 = state_26003__$1;
(statearr_26005_26027[(2)] = inst_25999);

(statearr_26005_26027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (1))){
var state_26003__$1 = state_26003;
var statearr_26006_26028 = state_26003__$1;
(statearr_26006_26028[(2)] = null);

(statearr_26006_26028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (4))){
var inst_25980 = (state_26003[(7)]);
var inst_25980__$1 = (state_26003[(2)]);
var inst_25981 = (inst_25980__$1 == null);
var state_26003__$1 = (function (){var statearr_26007 = state_26003;
(statearr_26007[(7)] = inst_25980__$1);

return statearr_26007;
})();
if(cljs.core.truth_(inst_25981)){
var statearr_26008_26029 = state_26003__$1;
(statearr_26008_26029[(1)] = (5));

} else {
var statearr_26009_26030 = state_26003__$1;
(statearr_26009_26030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (13))){
var state_26003__$1 = state_26003;
var statearr_26010_26031 = state_26003__$1;
(statearr_26010_26031[(2)] = null);

(statearr_26010_26031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (6))){
var inst_25980 = (state_26003[(7)]);
var inst_25986 = p.call(null,inst_25980);
var state_26003__$1 = state_26003;
if(cljs.core.truth_(inst_25986)){
var statearr_26011_26032 = state_26003__$1;
(statearr_26011_26032[(1)] = (9));

} else {
var statearr_26012_26033 = state_26003__$1;
(statearr_26012_26033[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (3))){
var inst_26001 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26003__$1,inst_26001);
} else {
if((state_val_26004 === (12))){
var state_26003__$1 = state_26003;
var statearr_26013_26034 = state_26003__$1;
(statearr_26013_26034[(2)] = null);

(statearr_26013_26034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (2))){
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26003__$1,(4),ch);
} else {
if((state_val_26004 === (11))){
var inst_25980 = (state_26003[(7)]);
var inst_25990 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26003__$1,(8),inst_25990,inst_25980);
} else {
if((state_val_26004 === (9))){
var state_26003__$1 = state_26003;
var statearr_26014_26035 = state_26003__$1;
(statearr_26014_26035[(2)] = tc);

(statearr_26014_26035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (5))){
var inst_25983 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25984 = cljs.core.async.close_BANG_.call(null,fc);
var state_26003__$1 = (function (){var statearr_26015 = state_26003;
(statearr_26015[(8)] = inst_25983);

return statearr_26015;
})();
var statearr_26016_26036 = state_26003__$1;
(statearr_26016_26036[(2)] = inst_25984);

(statearr_26016_26036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (14))){
var inst_25997 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26017_26037 = state_26003__$1;
(statearr_26017_26037[(2)] = inst_25997);

(statearr_26017_26037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (10))){
var state_26003__$1 = state_26003;
var statearr_26018_26038 = state_26003__$1;
(statearr_26018_26038[(2)] = fc);

(statearr_26018_26038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (8))){
var inst_25992 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
if(cljs.core.truth_(inst_25992)){
var statearr_26019_26039 = state_26003__$1;
(statearr_26019_26039[(1)] = (12));

} else {
var statearr_26020_26040 = state_26003__$1;
(statearr_26020_26040[(1)] = (13));

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
});})(c__17552__auto___26026,tc,fc))
;
return ((function (switch__17464__auto__,c__17552__auto___26026,tc,fc){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_26021 = [null,null,null,null,null,null,null,null,null];
(statearr_26021[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_26021[(1)] = (1));

return statearr_26021;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_26003){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_26003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e26022){if((e26022 instanceof Object)){
var ex__17468__auto__ = e26022;
var statearr_26023_26041 = state_26003;
(statearr_26023_26041[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26042 = state_26003;
state_26003 = G__26042;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_26003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_26003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___26026,tc,fc))
})();
var state__17554__auto__ = (function (){var statearr_26024 = f__17553__auto__.call(null);
(statearr_26024[(6)] = c__17552__auto___26026);

return statearr_26024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___26026,tc,fc))
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
var c__17552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto__){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto__){
return (function (state_26063){
var state_val_26064 = (state_26063[(1)]);
if((state_val_26064 === (7))){
var inst_26059 = (state_26063[(2)]);
var state_26063__$1 = state_26063;
var statearr_26065_26083 = state_26063__$1;
(statearr_26065_26083[(2)] = inst_26059);

(statearr_26065_26083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (1))){
var inst_26043 = init;
var state_26063__$1 = (function (){var statearr_26066 = state_26063;
(statearr_26066[(7)] = inst_26043);

return statearr_26066;
})();
var statearr_26067_26084 = state_26063__$1;
(statearr_26067_26084[(2)] = null);

(statearr_26067_26084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (4))){
var inst_26046 = (state_26063[(8)]);
var inst_26046__$1 = (state_26063[(2)]);
var inst_26047 = (inst_26046__$1 == null);
var state_26063__$1 = (function (){var statearr_26068 = state_26063;
(statearr_26068[(8)] = inst_26046__$1);

return statearr_26068;
})();
if(cljs.core.truth_(inst_26047)){
var statearr_26069_26085 = state_26063__$1;
(statearr_26069_26085[(1)] = (5));

} else {
var statearr_26070_26086 = state_26063__$1;
(statearr_26070_26086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (6))){
var inst_26043 = (state_26063[(7)]);
var inst_26050 = (state_26063[(9)]);
var inst_26046 = (state_26063[(8)]);
var inst_26050__$1 = f.call(null,inst_26043,inst_26046);
var inst_26051 = cljs.core.reduced_QMARK_.call(null,inst_26050__$1);
var state_26063__$1 = (function (){var statearr_26071 = state_26063;
(statearr_26071[(9)] = inst_26050__$1);

return statearr_26071;
})();
if(inst_26051){
var statearr_26072_26087 = state_26063__$1;
(statearr_26072_26087[(1)] = (8));

} else {
var statearr_26073_26088 = state_26063__$1;
(statearr_26073_26088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (3))){
var inst_26061 = (state_26063[(2)]);
var state_26063__$1 = state_26063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26063__$1,inst_26061);
} else {
if((state_val_26064 === (2))){
var state_26063__$1 = state_26063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26063__$1,(4),ch);
} else {
if((state_val_26064 === (9))){
var inst_26050 = (state_26063[(9)]);
var inst_26043 = inst_26050;
var state_26063__$1 = (function (){var statearr_26074 = state_26063;
(statearr_26074[(7)] = inst_26043);

return statearr_26074;
})();
var statearr_26075_26089 = state_26063__$1;
(statearr_26075_26089[(2)] = null);

(statearr_26075_26089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (5))){
var inst_26043 = (state_26063[(7)]);
var state_26063__$1 = state_26063;
var statearr_26076_26090 = state_26063__$1;
(statearr_26076_26090[(2)] = inst_26043);

(statearr_26076_26090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (10))){
var inst_26057 = (state_26063[(2)]);
var state_26063__$1 = state_26063;
var statearr_26077_26091 = state_26063__$1;
(statearr_26077_26091[(2)] = inst_26057);

(statearr_26077_26091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26064 === (8))){
var inst_26050 = (state_26063[(9)]);
var inst_26053 = cljs.core.deref.call(null,inst_26050);
var state_26063__$1 = state_26063;
var statearr_26078_26092 = state_26063__$1;
(statearr_26078_26092[(2)] = inst_26053);

(statearr_26078_26092[(1)] = (10));


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
});})(c__17552__auto__))
;
return ((function (switch__17464__auto__,c__17552__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17465__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17465__auto____0 = (function (){
var statearr_26079 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26079[(0)] = cljs$core$async$reduce_$_state_machine__17465__auto__);

(statearr_26079[(1)] = (1));

return statearr_26079;
});
var cljs$core$async$reduce_$_state_machine__17465__auto____1 = (function (state_26063){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_26063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e26080){if((e26080 instanceof Object)){
var ex__17468__auto__ = e26080;
var statearr_26081_26093 = state_26063;
(statearr_26081_26093[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26094 = state_26063;
state_26063 = G__26094;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17465__auto__ = function(state_26063){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17465__auto____1.call(this,state_26063);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17465__auto____0;
cljs$core$async$reduce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17465__auto____1;
return cljs$core$async$reduce_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__))
})();
var state__17554__auto__ = (function (){var statearr_26082 = f__17553__auto__.call(null);
(statearr_26082[(6)] = c__17552__auto__);

return statearr_26082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto__))
);

return c__17552__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto__,f__$1){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto__,f__$1){
return (function (state_26100){
var state_val_26101 = (state_26100[(1)]);
if((state_val_26101 === (1))){
var inst_26095 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26100__$1 = state_26100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26100__$1,(2),inst_26095);
} else {
if((state_val_26101 === (2))){
var inst_26097 = (state_26100[(2)]);
var inst_26098 = f__$1.call(null,inst_26097);
var state_26100__$1 = state_26100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26100__$1,inst_26098);
} else {
return null;
}
}
});})(c__17552__auto__,f__$1))
;
return ((function (switch__17464__auto__,c__17552__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17465__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17465__auto____0 = (function (){
var statearr_26102 = [null,null,null,null,null,null,null];
(statearr_26102[(0)] = cljs$core$async$transduce_$_state_machine__17465__auto__);

(statearr_26102[(1)] = (1));

return statearr_26102;
});
var cljs$core$async$transduce_$_state_machine__17465__auto____1 = (function (state_26100){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_26100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e26103){if((e26103 instanceof Object)){
var ex__17468__auto__ = e26103;
var statearr_26104_26106 = state_26100;
(statearr_26104_26106[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26107 = state_26100;
state_26100 = G__26107;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17465__auto__ = function(state_26100){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17465__auto____1.call(this,state_26100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17465__auto____0;
cljs$core$async$transduce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17465__auto____1;
return cljs$core$async$transduce_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__,f__$1))
})();
var state__17554__auto__ = (function (){var statearr_26105 = f__17553__auto__.call(null);
(statearr_26105[(6)] = c__17552__auto__);

return statearr_26105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto__,f__$1))
);

return c__17552__auto__;
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
var G__26109 = arguments.length;
switch (G__26109) {
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
var c__17552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto__){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto__){
return (function (state_26134){
var state_val_26135 = (state_26134[(1)]);
if((state_val_26135 === (7))){
var inst_26116 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
var statearr_26136_26157 = state_26134__$1;
(statearr_26136_26157[(2)] = inst_26116);

(statearr_26136_26157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (1))){
var inst_26110 = cljs.core.seq.call(null,coll);
var inst_26111 = inst_26110;
var state_26134__$1 = (function (){var statearr_26137 = state_26134;
(statearr_26137[(7)] = inst_26111);

return statearr_26137;
})();
var statearr_26138_26158 = state_26134__$1;
(statearr_26138_26158[(2)] = null);

(statearr_26138_26158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (4))){
var inst_26111 = (state_26134[(7)]);
var inst_26114 = cljs.core.first.call(null,inst_26111);
var state_26134__$1 = state_26134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26134__$1,(7),ch,inst_26114);
} else {
if((state_val_26135 === (13))){
var inst_26128 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
var statearr_26139_26159 = state_26134__$1;
(statearr_26139_26159[(2)] = inst_26128);

(statearr_26139_26159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (6))){
var inst_26119 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
if(cljs.core.truth_(inst_26119)){
var statearr_26140_26160 = state_26134__$1;
(statearr_26140_26160[(1)] = (8));

} else {
var statearr_26141_26161 = state_26134__$1;
(statearr_26141_26161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (3))){
var inst_26132 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26134__$1,inst_26132);
} else {
if((state_val_26135 === (12))){
var state_26134__$1 = state_26134;
var statearr_26142_26162 = state_26134__$1;
(statearr_26142_26162[(2)] = null);

(statearr_26142_26162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (2))){
var inst_26111 = (state_26134[(7)]);
var state_26134__$1 = state_26134;
if(cljs.core.truth_(inst_26111)){
var statearr_26143_26163 = state_26134__$1;
(statearr_26143_26163[(1)] = (4));

} else {
var statearr_26144_26164 = state_26134__$1;
(statearr_26144_26164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (11))){
var inst_26125 = cljs.core.async.close_BANG_.call(null,ch);
var state_26134__$1 = state_26134;
var statearr_26145_26165 = state_26134__$1;
(statearr_26145_26165[(2)] = inst_26125);

(statearr_26145_26165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (9))){
var state_26134__$1 = state_26134;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26146_26166 = state_26134__$1;
(statearr_26146_26166[(1)] = (11));

} else {
var statearr_26147_26167 = state_26134__$1;
(statearr_26147_26167[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (5))){
var inst_26111 = (state_26134[(7)]);
var state_26134__$1 = state_26134;
var statearr_26148_26168 = state_26134__$1;
(statearr_26148_26168[(2)] = inst_26111);

(statearr_26148_26168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (10))){
var inst_26130 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
var statearr_26149_26169 = state_26134__$1;
(statearr_26149_26169[(2)] = inst_26130);

(statearr_26149_26169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (8))){
var inst_26111 = (state_26134[(7)]);
var inst_26121 = cljs.core.next.call(null,inst_26111);
var inst_26111__$1 = inst_26121;
var state_26134__$1 = (function (){var statearr_26150 = state_26134;
(statearr_26150[(7)] = inst_26111__$1);

return statearr_26150;
})();
var statearr_26151_26170 = state_26134__$1;
(statearr_26151_26170[(2)] = null);

(statearr_26151_26170[(1)] = (2));


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
});})(c__17552__auto__))
;
return ((function (switch__17464__auto__,c__17552__auto__){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_26152 = [null,null,null,null,null,null,null,null];
(statearr_26152[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_26152[(1)] = (1));

return statearr_26152;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_26134){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_26134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e26153){if((e26153 instanceof Object)){
var ex__17468__auto__ = e26153;
var statearr_26154_26171 = state_26134;
(statearr_26154_26171[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26172 = state_26134;
state_26134 = G__26172;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_26134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_26134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__))
})();
var state__17554__auto__ = (function (){var statearr_26155 = f__17553__auto__.call(null);
(statearr_26155[(6)] = c__17552__auto__);

return statearr_26155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto__))
);

return c__17552__auto__;
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
var x__8351__auto__ = (((_ == null))?null:_);
var m__8352__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,_);
} else {
var m__8352__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,_);
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8352__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,ch);
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,ch);
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m);
} else {
var m__8352__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async26173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26173 = (function (ch,cs,meta26174){
this.ch = ch;
this.cs = cs;
this.meta26174 = meta26174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26175,meta26174__$1){
var self__ = this;
var _26175__$1 = this;
return (new cljs.core.async.t_cljs$core$async26173(self__.ch,self__.cs,meta26174__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26175){
var self__ = this;
var _26175__$1 = this;
return self__.meta26174;
});})(cs))
;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26173.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26173.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26174","meta26174",2082542694,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26173";

cljs.core.async.t_cljs$core$async26173.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async26173");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26173 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26173(ch__$1,cs__$1,meta26174){
return (new cljs.core.async.t_cljs$core$async26173(ch__$1,cs__$1,meta26174));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26173(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17552__auto___26395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___26395,cs,m,dchan,dctr,done){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___26395,cs,m,dchan,dctr,done){
return (function (state_26310){
var state_val_26311 = (state_26310[(1)]);
if((state_val_26311 === (7))){
var inst_26306 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26312_26396 = state_26310__$1;
(statearr_26312_26396[(2)] = inst_26306);

(statearr_26312_26396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (20))){
var inst_26209 = (state_26310[(7)]);
var inst_26221 = cljs.core.first.call(null,inst_26209);
var inst_26222 = cljs.core.nth.call(null,inst_26221,(0),null);
var inst_26223 = cljs.core.nth.call(null,inst_26221,(1),null);
var state_26310__$1 = (function (){var statearr_26313 = state_26310;
(statearr_26313[(8)] = inst_26222);

return statearr_26313;
})();
if(cljs.core.truth_(inst_26223)){
var statearr_26314_26397 = state_26310__$1;
(statearr_26314_26397[(1)] = (22));

} else {
var statearr_26315_26398 = state_26310__$1;
(statearr_26315_26398[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (27))){
var inst_26258 = (state_26310[(9)]);
var inst_26251 = (state_26310[(10)]);
var inst_26178 = (state_26310[(11)]);
var inst_26253 = (state_26310[(12)]);
var inst_26258__$1 = cljs.core._nth.call(null,inst_26251,inst_26253);
var inst_26259 = cljs.core.async.put_BANG_.call(null,inst_26258__$1,inst_26178,done);
var state_26310__$1 = (function (){var statearr_26316 = state_26310;
(statearr_26316[(9)] = inst_26258__$1);

return statearr_26316;
})();
if(cljs.core.truth_(inst_26259)){
var statearr_26317_26399 = state_26310__$1;
(statearr_26317_26399[(1)] = (30));

} else {
var statearr_26318_26400 = state_26310__$1;
(statearr_26318_26400[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (1))){
var state_26310__$1 = state_26310;
var statearr_26319_26401 = state_26310__$1;
(statearr_26319_26401[(2)] = null);

(statearr_26319_26401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (24))){
var inst_26209 = (state_26310[(7)]);
var inst_26228 = (state_26310[(2)]);
var inst_26229 = cljs.core.next.call(null,inst_26209);
var inst_26187 = inst_26229;
var inst_26188 = null;
var inst_26189 = (0);
var inst_26190 = (0);
var state_26310__$1 = (function (){var statearr_26320 = state_26310;
(statearr_26320[(13)] = inst_26228);

(statearr_26320[(14)] = inst_26190);

(statearr_26320[(15)] = inst_26187);

(statearr_26320[(16)] = inst_26189);

(statearr_26320[(17)] = inst_26188);

return statearr_26320;
})();
var statearr_26321_26402 = state_26310__$1;
(statearr_26321_26402[(2)] = null);

(statearr_26321_26402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (39))){
var state_26310__$1 = state_26310;
var statearr_26325_26403 = state_26310__$1;
(statearr_26325_26403[(2)] = null);

(statearr_26325_26403[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (4))){
var inst_26178 = (state_26310[(11)]);
var inst_26178__$1 = (state_26310[(2)]);
var inst_26179 = (inst_26178__$1 == null);
var state_26310__$1 = (function (){var statearr_26326 = state_26310;
(statearr_26326[(11)] = inst_26178__$1);

return statearr_26326;
})();
if(cljs.core.truth_(inst_26179)){
var statearr_26327_26404 = state_26310__$1;
(statearr_26327_26404[(1)] = (5));

} else {
var statearr_26328_26405 = state_26310__$1;
(statearr_26328_26405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (15))){
var inst_26190 = (state_26310[(14)]);
var inst_26187 = (state_26310[(15)]);
var inst_26189 = (state_26310[(16)]);
var inst_26188 = (state_26310[(17)]);
var inst_26205 = (state_26310[(2)]);
var inst_26206 = (inst_26190 + (1));
var tmp26322 = inst_26187;
var tmp26323 = inst_26189;
var tmp26324 = inst_26188;
var inst_26187__$1 = tmp26322;
var inst_26188__$1 = tmp26324;
var inst_26189__$1 = tmp26323;
var inst_26190__$1 = inst_26206;
var state_26310__$1 = (function (){var statearr_26329 = state_26310;
(statearr_26329[(14)] = inst_26190__$1);

(statearr_26329[(15)] = inst_26187__$1);

(statearr_26329[(18)] = inst_26205);

(statearr_26329[(16)] = inst_26189__$1);

(statearr_26329[(17)] = inst_26188__$1);

return statearr_26329;
})();
var statearr_26330_26406 = state_26310__$1;
(statearr_26330_26406[(2)] = null);

(statearr_26330_26406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (21))){
var inst_26232 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26334_26407 = state_26310__$1;
(statearr_26334_26407[(2)] = inst_26232);

(statearr_26334_26407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (31))){
var inst_26258 = (state_26310[(9)]);
var inst_26262 = done.call(null,null);
var inst_26263 = cljs.core.async.untap_STAR_.call(null,m,inst_26258);
var state_26310__$1 = (function (){var statearr_26335 = state_26310;
(statearr_26335[(19)] = inst_26262);

return statearr_26335;
})();
var statearr_26336_26408 = state_26310__$1;
(statearr_26336_26408[(2)] = inst_26263);

(statearr_26336_26408[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (32))){
var inst_26250 = (state_26310[(20)]);
var inst_26252 = (state_26310[(21)]);
var inst_26251 = (state_26310[(10)]);
var inst_26253 = (state_26310[(12)]);
var inst_26265 = (state_26310[(2)]);
var inst_26266 = (inst_26253 + (1));
var tmp26331 = inst_26250;
var tmp26332 = inst_26252;
var tmp26333 = inst_26251;
var inst_26250__$1 = tmp26331;
var inst_26251__$1 = tmp26333;
var inst_26252__$1 = tmp26332;
var inst_26253__$1 = inst_26266;
var state_26310__$1 = (function (){var statearr_26337 = state_26310;
(statearr_26337[(20)] = inst_26250__$1);

(statearr_26337[(21)] = inst_26252__$1);

(statearr_26337[(10)] = inst_26251__$1);

(statearr_26337[(22)] = inst_26265);

(statearr_26337[(12)] = inst_26253__$1);

return statearr_26337;
})();
var statearr_26338_26409 = state_26310__$1;
(statearr_26338_26409[(2)] = null);

(statearr_26338_26409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (40))){
var inst_26278 = (state_26310[(23)]);
var inst_26282 = done.call(null,null);
var inst_26283 = cljs.core.async.untap_STAR_.call(null,m,inst_26278);
var state_26310__$1 = (function (){var statearr_26339 = state_26310;
(statearr_26339[(24)] = inst_26282);

return statearr_26339;
})();
var statearr_26340_26410 = state_26310__$1;
(statearr_26340_26410[(2)] = inst_26283);

(statearr_26340_26410[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (33))){
var inst_26269 = (state_26310[(25)]);
var inst_26271 = cljs.core.chunked_seq_QMARK_.call(null,inst_26269);
var state_26310__$1 = state_26310;
if(inst_26271){
var statearr_26341_26411 = state_26310__$1;
(statearr_26341_26411[(1)] = (36));

} else {
var statearr_26342_26412 = state_26310__$1;
(statearr_26342_26412[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (13))){
var inst_26199 = (state_26310[(26)]);
var inst_26202 = cljs.core.async.close_BANG_.call(null,inst_26199);
var state_26310__$1 = state_26310;
var statearr_26343_26413 = state_26310__$1;
(statearr_26343_26413[(2)] = inst_26202);

(statearr_26343_26413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (22))){
var inst_26222 = (state_26310[(8)]);
var inst_26225 = cljs.core.async.close_BANG_.call(null,inst_26222);
var state_26310__$1 = state_26310;
var statearr_26344_26414 = state_26310__$1;
(statearr_26344_26414[(2)] = inst_26225);

(statearr_26344_26414[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (36))){
var inst_26269 = (state_26310[(25)]);
var inst_26273 = cljs.core.chunk_first.call(null,inst_26269);
var inst_26274 = cljs.core.chunk_rest.call(null,inst_26269);
var inst_26275 = cljs.core.count.call(null,inst_26273);
var inst_26250 = inst_26274;
var inst_26251 = inst_26273;
var inst_26252 = inst_26275;
var inst_26253 = (0);
var state_26310__$1 = (function (){var statearr_26345 = state_26310;
(statearr_26345[(20)] = inst_26250);

(statearr_26345[(21)] = inst_26252);

(statearr_26345[(10)] = inst_26251);

(statearr_26345[(12)] = inst_26253);

return statearr_26345;
})();
var statearr_26346_26415 = state_26310__$1;
(statearr_26346_26415[(2)] = null);

(statearr_26346_26415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (41))){
var inst_26269 = (state_26310[(25)]);
var inst_26285 = (state_26310[(2)]);
var inst_26286 = cljs.core.next.call(null,inst_26269);
var inst_26250 = inst_26286;
var inst_26251 = null;
var inst_26252 = (0);
var inst_26253 = (0);
var state_26310__$1 = (function (){var statearr_26347 = state_26310;
(statearr_26347[(20)] = inst_26250);

(statearr_26347[(21)] = inst_26252);

(statearr_26347[(27)] = inst_26285);

(statearr_26347[(10)] = inst_26251);

(statearr_26347[(12)] = inst_26253);

return statearr_26347;
})();
var statearr_26348_26416 = state_26310__$1;
(statearr_26348_26416[(2)] = null);

(statearr_26348_26416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (43))){
var state_26310__$1 = state_26310;
var statearr_26349_26417 = state_26310__$1;
(statearr_26349_26417[(2)] = null);

(statearr_26349_26417[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (29))){
var inst_26294 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26350_26418 = state_26310__$1;
(statearr_26350_26418[(2)] = inst_26294);

(statearr_26350_26418[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (44))){
var inst_26303 = (state_26310[(2)]);
var state_26310__$1 = (function (){var statearr_26351 = state_26310;
(statearr_26351[(28)] = inst_26303);

return statearr_26351;
})();
var statearr_26352_26419 = state_26310__$1;
(statearr_26352_26419[(2)] = null);

(statearr_26352_26419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (6))){
var inst_26242 = (state_26310[(29)]);
var inst_26241 = cljs.core.deref.call(null,cs);
var inst_26242__$1 = cljs.core.keys.call(null,inst_26241);
var inst_26243 = cljs.core.count.call(null,inst_26242__$1);
var inst_26244 = cljs.core.reset_BANG_.call(null,dctr,inst_26243);
var inst_26249 = cljs.core.seq.call(null,inst_26242__$1);
var inst_26250 = inst_26249;
var inst_26251 = null;
var inst_26252 = (0);
var inst_26253 = (0);
var state_26310__$1 = (function (){var statearr_26353 = state_26310;
(statearr_26353[(20)] = inst_26250);

(statearr_26353[(21)] = inst_26252);

(statearr_26353[(30)] = inst_26244);

(statearr_26353[(10)] = inst_26251);

(statearr_26353[(29)] = inst_26242__$1);

(statearr_26353[(12)] = inst_26253);

return statearr_26353;
})();
var statearr_26354_26420 = state_26310__$1;
(statearr_26354_26420[(2)] = null);

(statearr_26354_26420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (28))){
var inst_26250 = (state_26310[(20)]);
var inst_26269 = (state_26310[(25)]);
var inst_26269__$1 = cljs.core.seq.call(null,inst_26250);
var state_26310__$1 = (function (){var statearr_26355 = state_26310;
(statearr_26355[(25)] = inst_26269__$1);

return statearr_26355;
})();
if(inst_26269__$1){
var statearr_26356_26421 = state_26310__$1;
(statearr_26356_26421[(1)] = (33));

} else {
var statearr_26357_26422 = state_26310__$1;
(statearr_26357_26422[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (25))){
var inst_26252 = (state_26310[(21)]);
var inst_26253 = (state_26310[(12)]);
var inst_26255 = (inst_26253 < inst_26252);
var inst_26256 = inst_26255;
var state_26310__$1 = state_26310;
if(cljs.core.truth_(inst_26256)){
var statearr_26358_26423 = state_26310__$1;
(statearr_26358_26423[(1)] = (27));

} else {
var statearr_26359_26424 = state_26310__$1;
(statearr_26359_26424[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (34))){
var state_26310__$1 = state_26310;
var statearr_26360_26425 = state_26310__$1;
(statearr_26360_26425[(2)] = null);

(statearr_26360_26425[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (17))){
var state_26310__$1 = state_26310;
var statearr_26361_26426 = state_26310__$1;
(statearr_26361_26426[(2)] = null);

(statearr_26361_26426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (3))){
var inst_26308 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26310__$1,inst_26308);
} else {
if((state_val_26311 === (12))){
var inst_26237 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26362_26427 = state_26310__$1;
(statearr_26362_26427[(2)] = inst_26237);

(statearr_26362_26427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (2))){
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26310__$1,(4),ch);
} else {
if((state_val_26311 === (23))){
var state_26310__$1 = state_26310;
var statearr_26363_26428 = state_26310__$1;
(statearr_26363_26428[(2)] = null);

(statearr_26363_26428[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (35))){
var inst_26292 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26364_26429 = state_26310__$1;
(statearr_26364_26429[(2)] = inst_26292);

(statearr_26364_26429[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (19))){
var inst_26209 = (state_26310[(7)]);
var inst_26213 = cljs.core.chunk_first.call(null,inst_26209);
var inst_26214 = cljs.core.chunk_rest.call(null,inst_26209);
var inst_26215 = cljs.core.count.call(null,inst_26213);
var inst_26187 = inst_26214;
var inst_26188 = inst_26213;
var inst_26189 = inst_26215;
var inst_26190 = (0);
var state_26310__$1 = (function (){var statearr_26365 = state_26310;
(statearr_26365[(14)] = inst_26190);

(statearr_26365[(15)] = inst_26187);

(statearr_26365[(16)] = inst_26189);

(statearr_26365[(17)] = inst_26188);

return statearr_26365;
})();
var statearr_26366_26430 = state_26310__$1;
(statearr_26366_26430[(2)] = null);

(statearr_26366_26430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (11))){
var inst_26187 = (state_26310[(15)]);
var inst_26209 = (state_26310[(7)]);
var inst_26209__$1 = cljs.core.seq.call(null,inst_26187);
var state_26310__$1 = (function (){var statearr_26367 = state_26310;
(statearr_26367[(7)] = inst_26209__$1);

return statearr_26367;
})();
if(inst_26209__$1){
var statearr_26368_26431 = state_26310__$1;
(statearr_26368_26431[(1)] = (16));

} else {
var statearr_26369_26432 = state_26310__$1;
(statearr_26369_26432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (9))){
var inst_26239 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26370_26433 = state_26310__$1;
(statearr_26370_26433[(2)] = inst_26239);

(statearr_26370_26433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (5))){
var inst_26185 = cljs.core.deref.call(null,cs);
var inst_26186 = cljs.core.seq.call(null,inst_26185);
var inst_26187 = inst_26186;
var inst_26188 = null;
var inst_26189 = (0);
var inst_26190 = (0);
var state_26310__$1 = (function (){var statearr_26371 = state_26310;
(statearr_26371[(14)] = inst_26190);

(statearr_26371[(15)] = inst_26187);

(statearr_26371[(16)] = inst_26189);

(statearr_26371[(17)] = inst_26188);

return statearr_26371;
})();
var statearr_26372_26434 = state_26310__$1;
(statearr_26372_26434[(2)] = null);

(statearr_26372_26434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (14))){
var state_26310__$1 = state_26310;
var statearr_26373_26435 = state_26310__$1;
(statearr_26373_26435[(2)] = null);

(statearr_26373_26435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (45))){
var inst_26300 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26374_26436 = state_26310__$1;
(statearr_26374_26436[(2)] = inst_26300);

(statearr_26374_26436[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (26))){
var inst_26242 = (state_26310[(29)]);
var inst_26296 = (state_26310[(2)]);
var inst_26297 = cljs.core.seq.call(null,inst_26242);
var state_26310__$1 = (function (){var statearr_26375 = state_26310;
(statearr_26375[(31)] = inst_26296);

return statearr_26375;
})();
if(inst_26297){
var statearr_26376_26437 = state_26310__$1;
(statearr_26376_26437[(1)] = (42));

} else {
var statearr_26377_26438 = state_26310__$1;
(statearr_26377_26438[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (16))){
var inst_26209 = (state_26310[(7)]);
var inst_26211 = cljs.core.chunked_seq_QMARK_.call(null,inst_26209);
var state_26310__$1 = state_26310;
if(inst_26211){
var statearr_26378_26439 = state_26310__$1;
(statearr_26378_26439[(1)] = (19));

} else {
var statearr_26379_26440 = state_26310__$1;
(statearr_26379_26440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (38))){
var inst_26289 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26380_26441 = state_26310__$1;
(statearr_26380_26441[(2)] = inst_26289);

(statearr_26380_26441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (30))){
var state_26310__$1 = state_26310;
var statearr_26381_26442 = state_26310__$1;
(statearr_26381_26442[(2)] = null);

(statearr_26381_26442[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (10))){
var inst_26190 = (state_26310[(14)]);
var inst_26188 = (state_26310[(17)]);
var inst_26198 = cljs.core._nth.call(null,inst_26188,inst_26190);
var inst_26199 = cljs.core.nth.call(null,inst_26198,(0),null);
var inst_26200 = cljs.core.nth.call(null,inst_26198,(1),null);
var state_26310__$1 = (function (){var statearr_26382 = state_26310;
(statearr_26382[(26)] = inst_26199);

return statearr_26382;
})();
if(cljs.core.truth_(inst_26200)){
var statearr_26383_26443 = state_26310__$1;
(statearr_26383_26443[(1)] = (13));

} else {
var statearr_26384_26444 = state_26310__$1;
(statearr_26384_26444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (18))){
var inst_26235 = (state_26310[(2)]);
var state_26310__$1 = state_26310;
var statearr_26385_26445 = state_26310__$1;
(statearr_26385_26445[(2)] = inst_26235);

(statearr_26385_26445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (42))){
var state_26310__$1 = state_26310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26310__$1,(45),dchan);
} else {
if((state_val_26311 === (37))){
var inst_26178 = (state_26310[(11)]);
var inst_26269 = (state_26310[(25)]);
var inst_26278 = (state_26310[(23)]);
var inst_26278__$1 = cljs.core.first.call(null,inst_26269);
var inst_26279 = cljs.core.async.put_BANG_.call(null,inst_26278__$1,inst_26178,done);
var state_26310__$1 = (function (){var statearr_26386 = state_26310;
(statearr_26386[(23)] = inst_26278__$1);

return statearr_26386;
})();
if(cljs.core.truth_(inst_26279)){
var statearr_26387_26446 = state_26310__$1;
(statearr_26387_26446[(1)] = (39));

} else {
var statearr_26388_26447 = state_26310__$1;
(statearr_26388_26447[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26311 === (8))){
var inst_26190 = (state_26310[(14)]);
var inst_26189 = (state_26310[(16)]);
var inst_26192 = (inst_26190 < inst_26189);
var inst_26193 = inst_26192;
var state_26310__$1 = state_26310;
if(cljs.core.truth_(inst_26193)){
var statearr_26389_26448 = state_26310__$1;
(statearr_26389_26448[(1)] = (10));

} else {
var statearr_26390_26449 = state_26310__$1;
(statearr_26390_26449[(1)] = (11));

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
});})(c__17552__auto___26395,cs,m,dchan,dctr,done))
;
return ((function (switch__17464__auto__,c__17552__auto___26395,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17465__auto__ = null;
var cljs$core$async$mult_$_state_machine__17465__auto____0 = (function (){
var statearr_26391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26391[(0)] = cljs$core$async$mult_$_state_machine__17465__auto__);

(statearr_26391[(1)] = (1));

return statearr_26391;
});
var cljs$core$async$mult_$_state_machine__17465__auto____1 = (function (state_26310){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_26310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e26392){if((e26392 instanceof Object)){
var ex__17468__auto__ = e26392;
var statearr_26393_26450 = state_26310;
(statearr_26393_26450[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26451 = state_26310;
state_26310 = G__26451;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17465__auto__ = function(state_26310){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17465__auto____1.call(this,state_26310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17465__auto____0;
cljs$core$async$mult_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17465__auto____1;
return cljs$core$async$mult_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___26395,cs,m,dchan,dctr,done))
})();
var state__17554__auto__ = (function (){var statearr_26394 = f__17553__auto__.call(null);
(statearr_26394[(6)] = c__17552__auto___26395);

return statearr_26394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___26395,cs,m,dchan,dctr,done))
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
var G__26453 = arguments.length;
switch (G__26453) {
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,ch);
} else {
var m__8352__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,ch);
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,ch);
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,ch);
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m);
} else {
var m__8352__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m);
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,state_map);
} else {
var m__8352__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,state_map);
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
var x__8351__auto__ = (((m == null))?null:m);
var m__8352__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,m,mode);
} else {
var m__8352__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___26465 = arguments.length;
var i__8840__auto___26466 = (0);
while(true){
if((i__8840__auto___26466 < len__8839__auto___26465)){
args__8846__auto__.push((arguments[i__8840__auto___26466]));

var G__26467 = (i__8840__auto___26466 + (1));
i__8840__auto___26466 = G__26467;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26459){
var map__26460 = p__26459;
var map__26460__$1 = ((((!((map__26460 == null)))?((((map__26460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26460):map__26460);
var opts = map__26460__$1;
var statearr_26462_26468 = state;
(statearr_26462_26468[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26460,map__26460__$1,opts){
return (function (val){
var statearr_26463_26469 = state;
(statearr_26463_26469[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26460,map__26460__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26464_26470 = state;
(statearr_26464_26470[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26455){
var G__26456 = cljs.core.first.call(null,seq26455);
var seq26455__$1 = cljs.core.next.call(null,seq26455);
var G__26457 = cljs.core.first.call(null,seq26455__$1);
var seq26455__$2 = cljs.core.next.call(null,seq26455__$1);
var G__26458 = cljs.core.first.call(null,seq26455__$2);
var seq26455__$3 = cljs.core.next.call(null,seq26455__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26456,G__26457,G__26458,seq26455__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26471 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26472){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26472 = meta26472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26473,meta26472__$1){
var self__ = this;
var _26473__$1 = this;
return (new cljs.core.async.t_cljs$core$async26471(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26472__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26473){
var self__ = this;
var _26473__$1 = this;
return self__.meta26472;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26471.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26471.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26472","meta26472",-1496518167,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26471";

cljs.core.async.t_cljs$core$async26471.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async26471");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26471 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26471(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26472){
return (new cljs.core.async.t_cljs$core$async26471(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26472));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26471(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17552__auto___26635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___26635,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___26635,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26575){
var state_val_26576 = (state_26575[(1)]);
if((state_val_26576 === (7))){
var inst_26490 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26577_26636 = state_26575__$1;
(statearr_26577_26636[(2)] = inst_26490);

(statearr_26577_26636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (20))){
var inst_26502 = (state_26575[(7)]);
var state_26575__$1 = state_26575;
var statearr_26578_26637 = state_26575__$1;
(statearr_26578_26637[(2)] = inst_26502);

(statearr_26578_26637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (27))){
var state_26575__$1 = state_26575;
var statearr_26579_26638 = state_26575__$1;
(statearr_26579_26638[(2)] = null);

(statearr_26579_26638[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (1))){
var inst_26477 = (state_26575[(8)]);
var inst_26477__$1 = calc_state.call(null);
var inst_26479 = (inst_26477__$1 == null);
var inst_26480 = cljs.core.not.call(null,inst_26479);
var state_26575__$1 = (function (){var statearr_26580 = state_26575;
(statearr_26580[(8)] = inst_26477__$1);

return statearr_26580;
})();
if(inst_26480){
var statearr_26581_26639 = state_26575__$1;
(statearr_26581_26639[(1)] = (2));

} else {
var statearr_26582_26640 = state_26575__$1;
(statearr_26582_26640[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (24))){
var inst_26526 = (state_26575[(9)]);
var inst_26535 = (state_26575[(10)]);
var inst_26549 = (state_26575[(11)]);
var inst_26549__$1 = inst_26526.call(null,inst_26535);
var state_26575__$1 = (function (){var statearr_26583 = state_26575;
(statearr_26583[(11)] = inst_26549__$1);

return statearr_26583;
})();
if(cljs.core.truth_(inst_26549__$1)){
var statearr_26584_26641 = state_26575__$1;
(statearr_26584_26641[(1)] = (29));

} else {
var statearr_26585_26642 = state_26575__$1;
(statearr_26585_26642[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (4))){
var inst_26493 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26493)){
var statearr_26586_26643 = state_26575__$1;
(statearr_26586_26643[(1)] = (8));

} else {
var statearr_26587_26644 = state_26575__$1;
(statearr_26587_26644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (15))){
var inst_26520 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26520)){
var statearr_26588_26645 = state_26575__$1;
(statearr_26588_26645[(1)] = (19));

} else {
var statearr_26589_26646 = state_26575__$1;
(statearr_26589_26646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (21))){
var inst_26525 = (state_26575[(12)]);
var inst_26525__$1 = (state_26575[(2)]);
var inst_26526 = cljs.core.get.call(null,inst_26525__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26527 = cljs.core.get.call(null,inst_26525__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26528 = cljs.core.get.call(null,inst_26525__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26575__$1 = (function (){var statearr_26590 = state_26575;
(statearr_26590[(13)] = inst_26527);

(statearr_26590[(12)] = inst_26525__$1);

(statearr_26590[(9)] = inst_26526);

return statearr_26590;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26575__$1,(22),inst_26528);
} else {
if((state_val_26576 === (31))){
var inst_26557 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26557)){
var statearr_26591_26647 = state_26575__$1;
(statearr_26591_26647[(1)] = (32));

} else {
var statearr_26592_26648 = state_26575__$1;
(statearr_26592_26648[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (32))){
var inst_26534 = (state_26575[(14)]);
var state_26575__$1 = state_26575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26575__$1,(35),out,inst_26534);
} else {
if((state_val_26576 === (33))){
var inst_26525 = (state_26575[(12)]);
var inst_26502 = inst_26525;
var state_26575__$1 = (function (){var statearr_26593 = state_26575;
(statearr_26593[(7)] = inst_26502);

return statearr_26593;
})();
var statearr_26594_26649 = state_26575__$1;
(statearr_26594_26649[(2)] = null);

(statearr_26594_26649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (13))){
var inst_26502 = (state_26575[(7)]);
var inst_26509 = inst_26502.cljs$lang$protocol_mask$partition0$;
var inst_26510 = (inst_26509 & (64));
var inst_26511 = inst_26502.cljs$core$ISeq$;
var inst_26512 = (cljs.core.PROTOCOL_SENTINEL === inst_26511);
var inst_26513 = (inst_26510) || (inst_26512);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26513)){
var statearr_26595_26650 = state_26575__$1;
(statearr_26595_26650[(1)] = (16));

} else {
var statearr_26596_26651 = state_26575__$1;
(statearr_26596_26651[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (22))){
var inst_26534 = (state_26575[(14)]);
var inst_26535 = (state_26575[(10)]);
var inst_26533 = (state_26575[(2)]);
var inst_26534__$1 = cljs.core.nth.call(null,inst_26533,(0),null);
var inst_26535__$1 = cljs.core.nth.call(null,inst_26533,(1),null);
var inst_26536 = (inst_26534__$1 == null);
var inst_26537 = cljs.core._EQ_.call(null,inst_26535__$1,change);
var inst_26538 = (inst_26536) || (inst_26537);
var state_26575__$1 = (function (){var statearr_26597 = state_26575;
(statearr_26597[(14)] = inst_26534__$1);

(statearr_26597[(10)] = inst_26535__$1);

return statearr_26597;
})();
if(cljs.core.truth_(inst_26538)){
var statearr_26598_26652 = state_26575__$1;
(statearr_26598_26652[(1)] = (23));

} else {
var statearr_26599_26653 = state_26575__$1;
(statearr_26599_26653[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (36))){
var inst_26525 = (state_26575[(12)]);
var inst_26502 = inst_26525;
var state_26575__$1 = (function (){var statearr_26600 = state_26575;
(statearr_26600[(7)] = inst_26502);

return statearr_26600;
})();
var statearr_26601_26654 = state_26575__$1;
(statearr_26601_26654[(2)] = null);

(statearr_26601_26654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (29))){
var inst_26549 = (state_26575[(11)]);
var state_26575__$1 = state_26575;
var statearr_26602_26655 = state_26575__$1;
(statearr_26602_26655[(2)] = inst_26549);

(statearr_26602_26655[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (6))){
var state_26575__$1 = state_26575;
var statearr_26603_26656 = state_26575__$1;
(statearr_26603_26656[(2)] = false);

(statearr_26603_26656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (28))){
var inst_26545 = (state_26575[(2)]);
var inst_26546 = calc_state.call(null);
var inst_26502 = inst_26546;
var state_26575__$1 = (function (){var statearr_26604 = state_26575;
(statearr_26604[(15)] = inst_26545);

(statearr_26604[(7)] = inst_26502);

return statearr_26604;
})();
var statearr_26605_26657 = state_26575__$1;
(statearr_26605_26657[(2)] = null);

(statearr_26605_26657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (25))){
var inst_26571 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26606_26658 = state_26575__$1;
(statearr_26606_26658[(2)] = inst_26571);

(statearr_26606_26658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (34))){
var inst_26569 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26607_26659 = state_26575__$1;
(statearr_26607_26659[(2)] = inst_26569);

(statearr_26607_26659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (17))){
var state_26575__$1 = state_26575;
var statearr_26608_26660 = state_26575__$1;
(statearr_26608_26660[(2)] = false);

(statearr_26608_26660[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (3))){
var state_26575__$1 = state_26575;
var statearr_26609_26661 = state_26575__$1;
(statearr_26609_26661[(2)] = false);

(statearr_26609_26661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (12))){
var inst_26573 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26575__$1,inst_26573);
} else {
if((state_val_26576 === (2))){
var inst_26477 = (state_26575[(8)]);
var inst_26482 = inst_26477.cljs$lang$protocol_mask$partition0$;
var inst_26483 = (inst_26482 & (64));
var inst_26484 = inst_26477.cljs$core$ISeq$;
var inst_26485 = (cljs.core.PROTOCOL_SENTINEL === inst_26484);
var inst_26486 = (inst_26483) || (inst_26485);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26486)){
var statearr_26610_26662 = state_26575__$1;
(statearr_26610_26662[(1)] = (5));

} else {
var statearr_26611_26663 = state_26575__$1;
(statearr_26611_26663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (23))){
var inst_26534 = (state_26575[(14)]);
var inst_26540 = (inst_26534 == null);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26540)){
var statearr_26612_26664 = state_26575__$1;
(statearr_26612_26664[(1)] = (26));

} else {
var statearr_26613_26665 = state_26575__$1;
(statearr_26613_26665[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (35))){
var inst_26560 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
if(cljs.core.truth_(inst_26560)){
var statearr_26614_26666 = state_26575__$1;
(statearr_26614_26666[(1)] = (36));

} else {
var statearr_26615_26667 = state_26575__$1;
(statearr_26615_26667[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (19))){
var inst_26502 = (state_26575[(7)]);
var inst_26522 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26502);
var state_26575__$1 = state_26575;
var statearr_26616_26668 = state_26575__$1;
(statearr_26616_26668[(2)] = inst_26522);

(statearr_26616_26668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (11))){
var inst_26502 = (state_26575[(7)]);
var inst_26506 = (inst_26502 == null);
var inst_26507 = cljs.core.not.call(null,inst_26506);
var state_26575__$1 = state_26575;
if(inst_26507){
var statearr_26617_26669 = state_26575__$1;
(statearr_26617_26669[(1)] = (13));

} else {
var statearr_26618_26670 = state_26575__$1;
(statearr_26618_26670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (9))){
var inst_26477 = (state_26575[(8)]);
var state_26575__$1 = state_26575;
var statearr_26619_26671 = state_26575__$1;
(statearr_26619_26671[(2)] = inst_26477);

(statearr_26619_26671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (5))){
var state_26575__$1 = state_26575;
var statearr_26620_26672 = state_26575__$1;
(statearr_26620_26672[(2)] = true);

(statearr_26620_26672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (14))){
var state_26575__$1 = state_26575;
var statearr_26621_26673 = state_26575__$1;
(statearr_26621_26673[(2)] = false);

(statearr_26621_26673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (26))){
var inst_26535 = (state_26575[(10)]);
var inst_26542 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26535);
var state_26575__$1 = state_26575;
var statearr_26622_26674 = state_26575__$1;
(statearr_26622_26674[(2)] = inst_26542);

(statearr_26622_26674[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (16))){
var state_26575__$1 = state_26575;
var statearr_26623_26675 = state_26575__$1;
(statearr_26623_26675[(2)] = true);

(statearr_26623_26675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (38))){
var inst_26565 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26624_26676 = state_26575__$1;
(statearr_26624_26676[(2)] = inst_26565);

(statearr_26624_26676[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (30))){
var inst_26527 = (state_26575[(13)]);
var inst_26526 = (state_26575[(9)]);
var inst_26535 = (state_26575[(10)]);
var inst_26552 = cljs.core.empty_QMARK_.call(null,inst_26526);
var inst_26553 = inst_26527.call(null,inst_26535);
var inst_26554 = cljs.core.not.call(null,inst_26553);
var inst_26555 = (inst_26552) && (inst_26554);
var state_26575__$1 = state_26575;
var statearr_26625_26677 = state_26575__$1;
(statearr_26625_26677[(2)] = inst_26555);

(statearr_26625_26677[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (10))){
var inst_26477 = (state_26575[(8)]);
var inst_26498 = (state_26575[(2)]);
var inst_26499 = cljs.core.get.call(null,inst_26498,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26500 = cljs.core.get.call(null,inst_26498,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26501 = cljs.core.get.call(null,inst_26498,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26502 = inst_26477;
var state_26575__$1 = (function (){var statearr_26626 = state_26575;
(statearr_26626[(16)] = inst_26499);

(statearr_26626[(17)] = inst_26501);

(statearr_26626[(7)] = inst_26502);

(statearr_26626[(18)] = inst_26500);

return statearr_26626;
})();
var statearr_26627_26678 = state_26575__$1;
(statearr_26627_26678[(2)] = null);

(statearr_26627_26678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (18))){
var inst_26517 = (state_26575[(2)]);
var state_26575__$1 = state_26575;
var statearr_26628_26679 = state_26575__$1;
(statearr_26628_26679[(2)] = inst_26517);

(statearr_26628_26679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (37))){
var state_26575__$1 = state_26575;
var statearr_26629_26680 = state_26575__$1;
(statearr_26629_26680[(2)] = null);

(statearr_26629_26680[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26576 === (8))){
var inst_26477 = (state_26575[(8)]);
var inst_26495 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26477);
var state_26575__$1 = state_26575;
var statearr_26630_26681 = state_26575__$1;
(statearr_26630_26681[(2)] = inst_26495);

(statearr_26630_26681[(1)] = (10));


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
});})(c__17552__auto___26635,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17464__auto__,c__17552__auto___26635,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17465__auto__ = null;
var cljs$core$async$mix_$_state_machine__17465__auto____0 = (function (){
var statearr_26631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26631[(0)] = cljs$core$async$mix_$_state_machine__17465__auto__);

(statearr_26631[(1)] = (1));

return statearr_26631;
});
var cljs$core$async$mix_$_state_machine__17465__auto____1 = (function (state_26575){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_26575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e26632){if((e26632 instanceof Object)){
var ex__17468__auto__ = e26632;
var statearr_26633_26682 = state_26575;
(statearr_26633_26682[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26683 = state_26575;
state_26575 = G__26683;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17465__auto__ = function(state_26575){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17465__auto____1.call(this,state_26575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17465__auto____0;
cljs$core$async$mix_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17465__auto____1;
return cljs$core$async$mix_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___26635,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17554__auto__ = (function (){var statearr_26634 = f__17553__auto__.call(null);
(statearr_26634[(6)] = c__17552__auto___26635);

return statearr_26634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___26635,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8352__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,p,v,ch);
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26685 = arguments.length;
switch (G__26685) {
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
return m__8352__auto__.call(null,p);
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,p);
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
var x__8351__auto__ = (((p == null))?null:p);
var m__8352__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,p,v);
} else {
var m__8352__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,p,v);
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
var G__26689 = arguments.length;
switch (G__26689) {
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
var or__7668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7668__auto__,mults){
return (function (p1__26687_SHARP_){
if(cljs.core.truth_(p1__26687_SHARP_.call(null,topic))){
return p1__26687_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26687_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26690 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26690 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26691){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26691 = meta26691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26692,meta26691__$1){
var self__ = this;
var _26692__$1 = this;
return (new cljs.core.async.t_cljs$core$async26690(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26691__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26692){
var self__ = this;
var _26692__$1 = this;
return self__.meta26691;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26690.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26690.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26690.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26690.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26690.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26690.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26690.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26691","meta26691",-1484152550,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26690";

cljs.core.async.t_cljs$core$async26690.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async26690");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26690 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26690(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26691){
return (new cljs.core.async.t_cljs$core$async26690(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26691));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26690(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17552__auto___26810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___26810,mults,ensure_mult,p){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___26810,mults,ensure_mult,p){
return (function (state_26764){
var state_val_26765 = (state_26764[(1)]);
if((state_val_26765 === (7))){
var inst_26760 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26766_26811 = state_26764__$1;
(statearr_26766_26811[(2)] = inst_26760);

(statearr_26766_26811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (20))){
var state_26764__$1 = state_26764;
var statearr_26767_26812 = state_26764__$1;
(statearr_26767_26812[(2)] = null);

(statearr_26767_26812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (1))){
var state_26764__$1 = state_26764;
var statearr_26768_26813 = state_26764__$1;
(statearr_26768_26813[(2)] = null);

(statearr_26768_26813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (24))){
var inst_26743 = (state_26764[(7)]);
var inst_26752 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26743);
var state_26764__$1 = state_26764;
var statearr_26769_26814 = state_26764__$1;
(statearr_26769_26814[(2)] = inst_26752);

(statearr_26769_26814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (4))){
var inst_26695 = (state_26764[(8)]);
var inst_26695__$1 = (state_26764[(2)]);
var inst_26696 = (inst_26695__$1 == null);
var state_26764__$1 = (function (){var statearr_26770 = state_26764;
(statearr_26770[(8)] = inst_26695__$1);

return statearr_26770;
})();
if(cljs.core.truth_(inst_26696)){
var statearr_26771_26815 = state_26764__$1;
(statearr_26771_26815[(1)] = (5));

} else {
var statearr_26772_26816 = state_26764__$1;
(statearr_26772_26816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (15))){
var inst_26737 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26773_26817 = state_26764__$1;
(statearr_26773_26817[(2)] = inst_26737);

(statearr_26773_26817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (21))){
var inst_26757 = (state_26764[(2)]);
var state_26764__$1 = (function (){var statearr_26774 = state_26764;
(statearr_26774[(9)] = inst_26757);

return statearr_26774;
})();
var statearr_26775_26818 = state_26764__$1;
(statearr_26775_26818[(2)] = null);

(statearr_26775_26818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (13))){
var inst_26719 = (state_26764[(10)]);
var inst_26721 = cljs.core.chunked_seq_QMARK_.call(null,inst_26719);
var state_26764__$1 = state_26764;
if(inst_26721){
var statearr_26776_26819 = state_26764__$1;
(statearr_26776_26819[(1)] = (16));

} else {
var statearr_26777_26820 = state_26764__$1;
(statearr_26777_26820[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (22))){
var inst_26749 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26749)){
var statearr_26778_26821 = state_26764__$1;
(statearr_26778_26821[(1)] = (23));

} else {
var statearr_26779_26822 = state_26764__$1;
(statearr_26779_26822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (6))){
var inst_26745 = (state_26764[(11)]);
var inst_26743 = (state_26764[(7)]);
var inst_26695 = (state_26764[(8)]);
var inst_26743__$1 = topic_fn.call(null,inst_26695);
var inst_26744 = cljs.core.deref.call(null,mults);
var inst_26745__$1 = cljs.core.get.call(null,inst_26744,inst_26743__$1);
var state_26764__$1 = (function (){var statearr_26780 = state_26764;
(statearr_26780[(11)] = inst_26745__$1);

(statearr_26780[(7)] = inst_26743__$1);

return statearr_26780;
})();
if(cljs.core.truth_(inst_26745__$1)){
var statearr_26781_26823 = state_26764__$1;
(statearr_26781_26823[(1)] = (19));

} else {
var statearr_26782_26824 = state_26764__$1;
(statearr_26782_26824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (25))){
var inst_26754 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26783_26825 = state_26764__$1;
(statearr_26783_26825[(2)] = inst_26754);

(statearr_26783_26825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (17))){
var inst_26719 = (state_26764[(10)]);
var inst_26728 = cljs.core.first.call(null,inst_26719);
var inst_26729 = cljs.core.async.muxch_STAR_.call(null,inst_26728);
var inst_26730 = cljs.core.async.close_BANG_.call(null,inst_26729);
var inst_26731 = cljs.core.next.call(null,inst_26719);
var inst_26705 = inst_26731;
var inst_26706 = null;
var inst_26707 = (0);
var inst_26708 = (0);
var state_26764__$1 = (function (){var statearr_26784 = state_26764;
(statearr_26784[(12)] = inst_26708);

(statearr_26784[(13)] = inst_26707);

(statearr_26784[(14)] = inst_26706);

(statearr_26784[(15)] = inst_26730);

(statearr_26784[(16)] = inst_26705);

return statearr_26784;
})();
var statearr_26785_26826 = state_26764__$1;
(statearr_26785_26826[(2)] = null);

(statearr_26785_26826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (3))){
var inst_26762 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26764__$1,inst_26762);
} else {
if((state_val_26765 === (12))){
var inst_26739 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26786_26827 = state_26764__$1;
(statearr_26786_26827[(2)] = inst_26739);

(statearr_26786_26827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (2))){
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26764__$1,(4),ch);
} else {
if((state_val_26765 === (23))){
var state_26764__$1 = state_26764;
var statearr_26787_26828 = state_26764__$1;
(statearr_26787_26828[(2)] = null);

(statearr_26787_26828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (19))){
var inst_26745 = (state_26764[(11)]);
var inst_26695 = (state_26764[(8)]);
var inst_26747 = cljs.core.async.muxch_STAR_.call(null,inst_26745);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26764__$1,(22),inst_26747,inst_26695);
} else {
if((state_val_26765 === (11))){
var inst_26719 = (state_26764[(10)]);
var inst_26705 = (state_26764[(16)]);
var inst_26719__$1 = cljs.core.seq.call(null,inst_26705);
var state_26764__$1 = (function (){var statearr_26788 = state_26764;
(statearr_26788[(10)] = inst_26719__$1);

return statearr_26788;
})();
if(inst_26719__$1){
var statearr_26789_26829 = state_26764__$1;
(statearr_26789_26829[(1)] = (13));

} else {
var statearr_26790_26830 = state_26764__$1;
(statearr_26790_26830[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (9))){
var inst_26741 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26791_26831 = state_26764__$1;
(statearr_26791_26831[(2)] = inst_26741);

(statearr_26791_26831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (5))){
var inst_26702 = cljs.core.deref.call(null,mults);
var inst_26703 = cljs.core.vals.call(null,inst_26702);
var inst_26704 = cljs.core.seq.call(null,inst_26703);
var inst_26705 = inst_26704;
var inst_26706 = null;
var inst_26707 = (0);
var inst_26708 = (0);
var state_26764__$1 = (function (){var statearr_26792 = state_26764;
(statearr_26792[(12)] = inst_26708);

(statearr_26792[(13)] = inst_26707);

(statearr_26792[(14)] = inst_26706);

(statearr_26792[(16)] = inst_26705);

return statearr_26792;
})();
var statearr_26793_26832 = state_26764__$1;
(statearr_26793_26832[(2)] = null);

(statearr_26793_26832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (14))){
var state_26764__$1 = state_26764;
var statearr_26797_26833 = state_26764__$1;
(statearr_26797_26833[(2)] = null);

(statearr_26797_26833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (16))){
var inst_26719 = (state_26764[(10)]);
var inst_26723 = cljs.core.chunk_first.call(null,inst_26719);
var inst_26724 = cljs.core.chunk_rest.call(null,inst_26719);
var inst_26725 = cljs.core.count.call(null,inst_26723);
var inst_26705 = inst_26724;
var inst_26706 = inst_26723;
var inst_26707 = inst_26725;
var inst_26708 = (0);
var state_26764__$1 = (function (){var statearr_26798 = state_26764;
(statearr_26798[(12)] = inst_26708);

(statearr_26798[(13)] = inst_26707);

(statearr_26798[(14)] = inst_26706);

(statearr_26798[(16)] = inst_26705);

return statearr_26798;
})();
var statearr_26799_26834 = state_26764__$1;
(statearr_26799_26834[(2)] = null);

(statearr_26799_26834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (10))){
var inst_26708 = (state_26764[(12)]);
var inst_26707 = (state_26764[(13)]);
var inst_26706 = (state_26764[(14)]);
var inst_26705 = (state_26764[(16)]);
var inst_26713 = cljs.core._nth.call(null,inst_26706,inst_26708);
var inst_26714 = cljs.core.async.muxch_STAR_.call(null,inst_26713);
var inst_26715 = cljs.core.async.close_BANG_.call(null,inst_26714);
var inst_26716 = (inst_26708 + (1));
var tmp26794 = inst_26707;
var tmp26795 = inst_26706;
var tmp26796 = inst_26705;
var inst_26705__$1 = tmp26796;
var inst_26706__$1 = tmp26795;
var inst_26707__$1 = tmp26794;
var inst_26708__$1 = inst_26716;
var state_26764__$1 = (function (){var statearr_26800 = state_26764;
(statearr_26800[(17)] = inst_26715);

(statearr_26800[(12)] = inst_26708__$1);

(statearr_26800[(13)] = inst_26707__$1);

(statearr_26800[(14)] = inst_26706__$1);

(statearr_26800[(16)] = inst_26705__$1);

return statearr_26800;
})();
var statearr_26801_26835 = state_26764__$1;
(statearr_26801_26835[(2)] = null);

(statearr_26801_26835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (18))){
var inst_26734 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26802_26836 = state_26764__$1;
(statearr_26802_26836[(2)] = inst_26734);

(statearr_26802_26836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (8))){
var inst_26708 = (state_26764[(12)]);
var inst_26707 = (state_26764[(13)]);
var inst_26710 = (inst_26708 < inst_26707);
var inst_26711 = inst_26710;
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26711)){
var statearr_26803_26837 = state_26764__$1;
(statearr_26803_26837[(1)] = (10));

} else {
var statearr_26804_26838 = state_26764__$1;
(statearr_26804_26838[(1)] = (11));

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
});})(c__17552__auto___26810,mults,ensure_mult,p))
;
return ((function (switch__17464__auto__,c__17552__auto___26810,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_26805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_26764){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_26764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object)){
var ex__17468__auto__ = e26806;
var statearr_26807_26839 = state_26764;
(statearr_26807_26839[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26840 = state_26764;
state_26764 = G__26840;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_26764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_26764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___26810,mults,ensure_mult,p))
})();
var state__17554__auto__ = (function (){var statearr_26808 = f__17553__auto__.call(null);
(statearr_26808[(6)] = c__17552__auto___26810);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___26810,mults,ensure_mult,p))
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
var G__26842 = arguments.length;
switch (G__26842) {
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
var G__26845 = arguments.length;
switch (G__26845) {
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
var G__26848 = arguments.length;
switch (G__26848) {
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
var c__17552__auto___26915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___26915,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___26915,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26887){
var state_val_26888 = (state_26887[(1)]);
if((state_val_26888 === (7))){
var state_26887__$1 = state_26887;
var statearr_26889_26916 = state_26887__$1;
(statearr_26889_26916[(2)] = null);

(statearr_26889_26916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (1))){
var state_26887__$1 = state_26887;
var statearr_26890_26917 = state_26887__$1;
(statearr_26890_26917[(2)] = null);

(statearr_26890_26917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (4))){
var inst_26851 = (state_26887[(7)]);
var inst_26853 = (inst_26851 < cnt);
var state_26887__$1 = state_26887;
if(cljs.core.truth_(inst_26853)){
var statearr_26891_26918 = state_26887__$1;
(statearr_26891_26918[(1)] = (6));

} else {
var statearr_26892_26919 = state_26887__$1;
(statearr_26892_26919[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (15))){
var inst_26883 = (state_26887[(2)]);
var state_26887__$1 = state_26887;
var statearr_26893_26920 = state_26887__$1;
(statearr_26893_26920[(2)] = inst_26883);

(statearr_26893_26920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (13))){
var inst_26876 = cljs.core.async.close_BANG_.call(null,out);
var state_26887__$1 = state_26887;
var statearr_26894_26921 = state_26887__$1;
(statearr_26894_26921[(2)] = inst_26876);

(statearr_26894_26921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (6))){
var state_26887__$1 = state_26887;
var statearr_26895_26922 = state_26887__$1;
(statearr_26895_26922[(2)] = null);

(statearr_26895_26922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (3))){
var inst_26885 = (state_26887[(2)]);
var state_26887__$1 = state_26887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26887__$1,inst_26885);
} else {
if((state_val_26888 === (12))){
var inst_26873 = (state_26887[(8)]);
var inst_26873__$1 = (state_26887[(2)]);
var inst_26874 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26873__$1);
var state_26887__$1 = (function (){var statearr_26896 = state_26887;
(statearr_26896[(8)] = inst_26873__$1);

return statearr_26896;
})();
if(cljs.core.truth_(inst_26874)){
var statearr_26897_26923 = state_26887__$1;
(statearr_26897_26923[(1)] = (13));

} else {
var statearr_26898_26924 = state_26887__$1;
(statearr_26898_26924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (2))){
var inst_26850 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26851 = (0);
var state_26887__$1 = (function (){var statearr_26899 = state_26887;
(statearr_26899[(9)] = inst_26850);

(statearr_26899[(7)] = inst_26851);

return statearr_26899;
})();
var statearr_26900_26925 = state_26887__$1;
(statearr_26900_26925[(2)] = null);

(statearr_26900_26925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (11))){
var inst_26851 = (state_26887[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26887,(10),Object,null,(9));
var inst_26860 = chs__$1.call(null,inst_26851);
var inst_26861 = done.call(null,inst_26851);
var inst_26862 = cljs.core.async.take_BANG_.call(null,inst_26860,inst_26861);
var state_26887__$1 = state_26887;
var statearr_26901_26926 = state_26887__$1;
(statearr_26901_26926[(2)] = inst_26862);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (9))){
var inst_26851 = (state_26887[(7)]);
var inst_26864 = (state_26887[(2)]);
var inst_26865 = (inst_26851 + (1));
var inst_26851__$1 = inst_26865;
var state_26887__$1 = (function (){var statearr_26902 = state_26887;
(statearr_26902[(7)] = inst_26851__$1);

(statearr_26902[(10)] = inst_26864);

return statearr_26902;
})();
var statearr_26903_26927 = state_26887__$1;
(statearr_26903_26927[(2)] = null);

(statearr_26903_26927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (5))){
var inst_26871 = (state_26887[(2)]);
var state_26887__$1 = (function (){var statearr_26904 = state_26887;
(statearr_26904[(11)] = inst_26871);

return statearr_26904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26887__$1,(12),dchan);
} else {
if((state_val_26888 === (14))){
var inst_26873 = (state_26887[(8)]);
var inst_26878 = cljs.core.apply.call(null,f,inst_26873);
var state_26887__$1 = state_26887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26887__$1,(16),out,inst_26878);
} else {
if((state_val_26888 === (16))){
var inst_26880 = (state_26887[(2)]);
var state_26887__$1 = (function (){var statearr_26905 = state_26887;
(statearr_26905[(12)] = inst_26880);

return statearr_26905;
})();
var statearr_26906_26928 = state_26887__$1;
(statearr_26906_26928[(2)] = null);

(statearr_26906_26928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (10))){
var inst_26855 = (state_26887[(2)]);
var inst_26856 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26887__$1 = (function (){var statearr_26907 = state_26887;
(statearr_26907[(13)] = inst_26855);

return statearr_26907;
})();
var statearr_26908_26929 = state_26887__$1;
(statearr_26908_26929[(2)] = inst_26856);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (8))){
var inst_26869 = (state_26887[(2)]);
var state_26887__$1 = state_26887;
var statearr_26909_26930 = state_26887__$1;
(statearr_26909_26930[(2)] = inst_26869);

(statearr_26909_26930[(1)] = (5));


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
});})(c__17552__auto___26915,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17464__auto__,c__17552__auto___26915,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_26910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26910[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_26910[(1)] = (1));

return statearr_26910;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_26887){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_26887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e26911){if((e26911 instanceof Object)){
var ex__17468__auto__ = e26911;
var statearr_26912_26931 = state_26887;
(statearr_26912_26931[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26932 = state_26887;
state_26887 = G__26932;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_26887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_26887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___26915,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17554__auto__ = (function (){var statearr_26913 = f__17553__auto__.call(null);
(statearr_26913[(6)] = c__17552__auto___26915);

return statearr_26913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___26915,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26935 = arguments.length;
switch (G__26935) {
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
var c__17552__auto___26989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___26989,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___26989,out){
return (function (state_26967){
var state_val_26968 = (state_26967[(1)]);
if((state_val_26968 === (7))){
var inst_26947 = (state_26967[(7)]);
var inst_26946 = (state_26967[(8)]);
var inst_26946__$1 = (state_26967[(2)]);
var inst_26947__$1 = cljs.core.nth.call(null,inst_26946__$1,(0),null);
var inst_26948 = cljs.core.nth.call(null,inst_26946__$1,(1),null);
var inst_26949 = (inst_26947__$1 == null);
var state_26967__$1 = (function (){var statearr_26969 = state_26967;
(statearr_26969[(7)] = inst_26947__$1);

(statearr_26969[(8)] = inst_26946__$1);

(statearr_26969[(9)] = inst_26948);

return statearr_26969;
})();
if(cljs.core.truth_(inst_26949)){
var statearr_26970_26990 = state_26967__$1;
(statearr_26970_26990[(1)] = (8));

} else {
var statearr_26971_26991 = state_26967__$1;
(statearr_26971_26991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (1))){
var inst_26936 = cljs.core.vec.call(null,chs);
var inst_26937 = inst_26936;
var state_26967__$1 = (function (){var statearr_26972 = state_26967;
(statearr_26972[(10)] = inst_26937);

return statearr_26972;
})();
var statearr_26973_26992 = state_26967__$1;
(statearr_26973_26992[(2)] = null);

(statearr_26973_26992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (4))){
var inst_26937 = (state_26967[(10)]);
var state_26967__$1 = state_26967;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26967__$1,(7),inst_26937);
} else {
if((state_val_26968 === (6))){
var inst_26963 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26974_26993 = state_26967__$1;
(statearr_26974_26993[(2)] = inst_26963);

(statearr_26974_26993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (3))){
var inst_26965 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26967__$1,inst_26965);
} else {
if((state_val_26968 === (2))){
var inst_26937 = (state_26967[(10)]);
var inst_26939 = cljs.core.count.call(null,inst_26937);
var inst_26940 = (inst_26939 > (0));
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26940)){
var statearr_26976_26994 = state_26967__$1;
(statearr_26976_26994[(1)] = (4));

} else {
var statearr_26977_26995 = state_26967__$1;
(statearr_26977_26995[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (11))){
var inst_26937 = (state_26967[(10)]);
var inst_26956 = (state_26967[(2)]);
var tmp26975 = inst_26937;
var inst_26937__$1 = tmp26975;
var state_26967__$1 = (function (){var statearr_26978 = state_26967;
(statearr_26978[(10)] = inst_26937__$1);

(statearr_26978[(11)] = inst_26956);

return statearr_26978;
})();
var statearr_26979_26996 = state_26967__$1;
(statearr_26979_26996[(2)] = null);

(statearr_26979_26996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (9))){
var inst_26947 = (state_26967[(7)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26967__$1,(11),out,inst_26947);
} else {
if((state_val_26968 === (5))){
var inst_26961 = cljs.core.async.close_BANG_.call(null,out);
var state_26967__$1 = state_26967;
var statearr_26980_26997 = state_26967__$1;
(statearr_26980_26997[(2)] = inst_26961);

(statearr_26980_26997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (10))){
var inst_26959 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26981_26998 = state_26967__$1;
(statearr_26981_26998[(2)] = inst_26959);

(statearr_26981_26998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (8))){
var inst_26937 = (state_26967[(10)]);
var inst_26947 = (state_26967[(7)]);
var inst_26946 = (state_26967[(8)]);
var inst_26948 = (state_26967[(9)]);
var inst_26951 = (function (){var cs = inst_26937;
var vec__26942 = inst_26946;
var v = inst_26947;
var c = inst_26948;
return ((function (cs,vec__26942,v,c,inst_26937,inst_26947,inst_26946,inst_26948,state_val_26968,c__17552__auto___26989,out){
return (function (p1__26933_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26933_SHARP_);
});
;})(cs,vec__26942,v,c,inst_26937,inst_26947,inst_26946,inst_26948,state_val_26968,c__17552__auto___26989,out))
})();
var inst_26952 = cljs.core.filterv.call(null,inst_26951,inst_26937);
var inst_26937__$1 = inst_26952;
var state_26967__$1 = (function (){var statearr_26982 = state_26967;
(statearr_26982[(10)] = inst_26937__$1);

return statearr_26982;
})();
var statearr_26983_26999 = state_26967__$1;
(statearr_26983_26999[(2)] = null);

(statearr_26983_26999[(1)] = (2));


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
});})(c__17552__auto___26989,out))
;
return ((function (switch__17464__auto__,c__17552__auto___26989,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_26984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26984[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_26984[(1)] = (1));

return statearr_26984;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_26967){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_26967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e26985){if((e26985 instanceof Object)){
var ex__17468__auto__ = e26985;
var statearr_26986_27000 = state_26967;
(statearr_26986_27000[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27001 = state_26967;
state_26967 = G__27001;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___26989,out))
})();
var state__17554__auto__ = (function (){var statearr_26987 = f__17553__auto__.call(null);
(statearr_26987[(6)] = c__17552__auto___26989);

return statearr_26987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___26989,out))
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
var G__27003 = arguments.length;
switch (G__27003) {
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
var c__17552__auto___27048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___27048,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___27048,out){
return (function (state_27027){
var state_val_27028 = (state_27027[(1)]);
if((state_val_27028 === (7))){
var inst_27009 = (state_27027[(7)]);
var inst_27009__$1 = (state_27027[(2)]);
var inst_27010 = (inst_27009__$1 == null);
var inst_27011 = cljs.core.not.call(null,inst_27010);
var state_27027__$1 = (function (){var statearr_27029 = state_27027;
(statearr_27029[(7)] = inst_27009__$1);

return statearr_27029;
})();
if(inst_27011){
var statearr_27030_27049 = state_27027__$1;
(statearr_27030_27049[(1)] = (8));

} else {
var statearr_27031_27050 = state_27027__$1;
(statearr_27031_27050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (1))){
var inst_27004 = (0);
var state_27027__$1 = (function (){var statearr_27032 = state_27027;
(statearr_27032[(8)] = inst_27004);

return statearr_27032;
})();
var statearr_27033_27051 = state_27027__$1;
(statearr_27033_27051[(2)] = null);

(statearr_27033_27051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (4))){
var state_27027__$1 = state_27027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27027__$1,(7),ch);
} else {
if((state_val_27028 === (6))){
var inst_27022 = (state_27027[(2)]);
var state_27027__$1 = state_27027;
var statearr_27034_27052 = state_27027__$1;
(statearr_27034_27052[(2)] = inst_27022);

(statearr_27034_27052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (3))){
var inst_27024 = (state_27027[(2)]);
var inst_27025 = cljs.core.async.close_BANG_.call(null,out);
var state_27027__$1 = (function (){var statearr_27035 = state_27027;
(statearr_27035[(9)] = inst_27024);

return statearr_27035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27027__$1,inst_27025);
} else {
if((state_val_27028 === (2))){
var inst_27004 = (state_27027[(8)]);
var inst_27006 = (inst_27004 < n);
var state_27027__$1 = state_27027;
if(cljs.core.truth_(inst_27006)){
var statearr_27036_27053 = state_27027__$1;
(statearr_27036_27053[(1)] = (4));

} else {
var statearr_27037_27054 = state_27027__$1;
(statearr_27037_27054[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (11))){
var inst_27004 = (state_27027[(8)]);
var inst_27014 = (state_27027[(2)]);
var inst_27015 = (inst_27004 + (1));
var inst_27004__$1 = inst_27015;
var state_27027__$1 = (function (){var statearr_27038 = state_27027;
(statearr_27038[(8)] = inst_27004__$1);

(statearr_27038[(10)] = inst_27014);

return statearr_27038;
})();
var statearr_27039_27055 = state_27027__$1;
(statearr_27039_27055[(2)] = null);

(statearr_27039_27055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (9))){
var state_27027__$1 = state_27027;
var statearr_27040_27056 = state_27027__$1;
(statearr_27040_27056[(2)] = null);

(statearr_27040_27056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (5))){
var state_27027__$1 = state_27027;
var statearr_27041_27057 = state_27027__$1;
(statearr_27041_27057[(2)] = null);

(statearr_27041_27057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (10))){
var inst_27019 = (state_27027[(2)]);
var state_27027__$1 = state_27027;
var statearr_27042_27058 = state_27027__$1;
(statearr_27042_27058[(2)] = inst_27019);

(statearr_27042_27058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27028 === (8))){
var inst_27009 = (state_27027[(7)]);
var state_27027__$1 = state_27027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27027__$1,(11),out,inst_27009);
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
});})(c__17552__auto___27048,out))
;
return ((function (switch__17464__auto__,c__17552__auto___27048,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_27043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27043[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_27043[(1)] = (1));

return statearr_27043;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_27027){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_27027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e27044){if((e27044 instanceof Object)){
var ex__17468__auto__ = e27044;
var statearr_27045_27059 = state_27027;
(statearr_27045_27059[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27060 = state_27027;
state_27027 = G__27060;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_27027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_27027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___27048,out))
})();
var state__17554__auto__ = (function (){var statearr_27046 = f__17553__auto__.call(null);
(statearr_27046[(6)] = c__17552__auto___27048);

return statearr_27046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___27048,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27062 = (function (f,ch,meta27063){
this.f = f;
this.ch = ch;
this.meta27063 = meta27063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27064,meta27063__$1){
var self__ = this;
var _27064__$1 = this;
return (new cljs.core.async.t_cljs$core$async27062(self__.f,self__.ch,meta27063__$1));
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27064){
var self__ = this;
var _27064__$1 = this;
return self__.meta27063;
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27065 = (function (f,ch,meta27063,_,fn1,meta27066){
this.f = f;
this.ch = ch;
this.meta27063 = meta27063;
this._ = _;
this.fn1 = fn1;
this.meta27066 = meta27066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27067,meta27066__$1){
var self__ = this;
var _27067__$1 = this;
return (new cljs.core.async.t_cljs$core$async27065(self__.f,self__.ch,self__.meta27063,self__._,self__.fn1,meta27066__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27067){
var self__ = this;
var _27067__$1 = this;
return self__.meta27066;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27061_SHARP_){
return f1.call(null,(((p1__27061_SHARP_ == null))?null:self__.f.call(null,p1__27061_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27065.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27063","meta27063",2131616568,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27062","cljs.core.async/t_cljs$core$async27062",224077699,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27066","meta27066",419482520,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27065";

cljs.core.async.t_cljs$core$async27065.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async27065");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27065 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27065(f__$1,ch__$1,meta27063__$1,___$2,fn1__$1,meta27066){
return (new cljs.core.async.t_cljs$core$async27065(f__$1,ch__$1,meta27063__$1,___$2,fn1__$1,meta27066));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27065(self__.f,self__.ch,self__.meta27063,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7656__auto__ = ret;
if(cljs.core.truth_(and__7656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27063","meta27063",2131616568,null)], null);
});

cljs.core.async.t_cljs$core$async27062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27062";

cljs.core.async.t_cljs$core$async27062.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async27062");
});

cljs.core.async.__GT_t_cljs$core$async27062 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27062(f__$1,ch__$1,meta27063){
return (new cljs.core.async.t_cljs$core$async27062(f__$1,ch__$1,meta27063));
});

}

return (new cljs.core.async.t_cljs$core$async27062(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27068 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27068 = (function (f,ch,meta27069){
this.f = f;
this.ch = ch;
this.meta27069 = meta27069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27070,meta27069__$1){
var self__ = this;
var _27070__$1 = this;
return (new cljs.core.async.t_cljs$core$async27068(self__.f,self__.ch,meta27069__$1));
});

cljs.core.async.t_cljs$core$async27068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27070){
var self__ = this;
var _27070__$1 = this;
return self__.meta27069;
});

cljs.core.async.t_cljs$core$async27068.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27068.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27068.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27069","meta27069",1600191511,null)], null);
});

cljs.core.async.t_cljs$core$async27068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27068";

cljs.core.async.t_cljs$core$async27068.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async27068");
});

cljs.core.async.__GT_t_cljs$core$async27068 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27068(f__$1,ch__$1,meta27069){
return (new cljs.core.async.t_cljs$core$async27068(f__$1,ch__$1,meta27069));
});

}

return (new cljs.core.async.t_cljs$core$async27068(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27071 = (function (p,ch,meta27072){
this.p = p;
this.ch = ch;
this.meta27072 = meta27072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27073,meta27072__$1){
var self__ = this;
var _27073__$1 = this;
return (new cljs.core.async.t_cljs$core$async27071(self__.p,self__.ch,meta27072__$1));
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27073){
var self__ = this;
var _27073__$1 = this;
return self__.meta27072;
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27072","meta27072",1308492625,null)], null);
});

cljs.core.async.t_cljs$core$async27071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27071";

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async27071");
});

cljs.core.async.__GT_t_cljs$core$async27071 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27071(p__$1,ch__$1,meta27072){
return (new cljs.core.async.t_cljs$core$async27071(p__$1,ch__$1,meta27072));
});

}

return (new cljs.core.async.t_cljs$core$async27071(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27075 = arguments.length;
switch (G__27075) {
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
var c__17552__auto___27115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___27115,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___27115,out){
return (function (state_27096){
var state_val_27097 = (state_27096[(1)]);
if((state_val_27097 === (7))){
var inst_27092 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27098_27116 = state_27096__$1;
(statearr_27098_27116[(2)] = inst_27092);

(statearr_27098_27116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (1))){
var state_27096__$1 = state_27096;
var statearr_27099_27117 = state_27096__$1;
(statearr_27099_27117[(2)] = null);

(statearr_27099_27117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (4))){
var inst_27078 = (state_27096[(7)]);
var inst_27078__$1 = (state_27096[(2)]);
var inst_27079 = (inst_27078__$1 == null);
var state_27096__$1 = (function (){var statearr_27100 = state_27096;
(statearr_27100[(7)] = inst_27078__$1);

return statearr_27100;
})();
if(cljs.core.truth_(inst_27079)){
var statearr_27101_27118 = state_27096__$1;
(statearr_27101_27118[(1)] = (5));

} else {
var statearr_27102_27119 = state_27096__$1;
(statearr_27102_27119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (6))){
var inst_27078 = (state_27096[(7)]);
var inst_27083 = p.call(null,inst_27078);
var state_27096__$1 = state_27096;
if(cljs.core.truth_(inst_27083)){
var statearr_27103_27120 = state_27096__$1;
(statearr_27103_27120[(1)] = (8));

} else {
var statearr_27104_27121 = state_27096__$1;
(statearr_27104_27121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (3))){
var inst_27094 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27096__$1,inst_27094);
} else {
if((state_val_27097 === (2))){
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27096__$1,(4),ch);
} else {
if((state_val_27097 === (11))){
var inst_27086 = (state_27096[(2)]);
var state_27096__$1 = state_27096;
var statearr_27105_27122 = state_27096__$1;
(statearr_27105_27122[(2)] = inst_27086);

(statearr_27105_27122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (9))){
var state_27096__$1 = state_27096;
var statearr_27106_27123 = state_27096__$1;
(statearr_27106_27123[(2)] = null);

(statearr_27106_27123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (5))){
var inst_27081 = cljs.core.async.close_BANG_.call(null,out);
var state_27096__$1 = state_27096;
var statearr_27107_27124 = state_27096__$1;
(statearr_27107_27124[(2)] = inst_27081);

(statearr_27107_27124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (10))){
var inst_27089 = (state_27096[(2)]);
var state_27096__$1 = (function (){var statearr_27108 = state_27096;
(statearr_27108[(8)] = inst_27089);

return statearr_27108;
})();
var statearr_27109_27125 = state_27096__$1;
(statearr_27109_27125[(2)] = null);

(statearr_27109_27125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27097 === (8))){
var inst_27078 = (state_27096[(7)]);
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27096__$1,(11),out,inst_27078);
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
});})(c__17552__auto___27115,out))
;
return ((function (switch__17464__auto__,c__17552__auto___27115,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_27110 = [null,null,null,null,null,null,null,null,null];
(statearr_27110[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_27110[(1)] = (1));

return statearr_27110;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_27096){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_27096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e27111){if((e27111 instanceof Object)){
var ex__17468__auto__ = e27111;
var statearr_27112_27126 = state_27096;
(statearr_27112_27126[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27127 = state_27096;
state_27096 = G__27127;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_27096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_27096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___27115,out))
})();
var state__17554__auto__ = (function (){var statearr_27113 = f__17553__auto__.call(null);
(statearr_27113[(6)] = c__17552__auto___27115);

return statearr_27113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___27115,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27129 = arguments.length;
switch (G__27129) {
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
var c__17552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto__){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto__){
return (function (state_27192){
var state_val_27193 = (state_27192[(1)]);
if((state_val_27193 === (7))){
var inst_27188 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27194_27232 = state_27192__$1;
(statearr_27194_27232[(2)] = inst_27188);

(statearr_27194_27232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (20))){
var inst_27158 = (state_27192[(7)]);
var inst_27169 = (state_27192[(2)]);
var inst_27170 = cljs.core.next.call(null,inst_27158);
var inst_27144 = inst_27170;
var inst_27145 = null;
var inst_27146 = (0);
var inst_27147 = (0);
var state_27192__$1 = (function (){var statearr_27195 = state_27192;
(statearr_27195[(8)] = inst_27144);

(statearr_27195[(9)] = inst_27146);

(statearr_27195[(10)] = inst_27145);

(statearr_27195[(11)] = inst_27169);

(statearr_27195[(12)] = inst_27147);

return statearr_27195;
})();
var statearr_27196_27233 = state_27192__$1;
(statearr_27196_27233[(2)] = null);

(statearr_27196_27233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (1))){
var state_27192__$1 = state_27192;
var statearr_27197_27234 = state_27192__$1;
(statearr_27197_27234[(2)] = null);

(statearr_27197_27234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (4))){
var inst_27133 = (state_27192[(13)]);
var inst_27133__$1 = (state_27192[(2)]);
var inst_27134 = (inst_27133__$1 == null);
var state_27192__$1 = (function (){var statearr_27198 = state_27192;
(statearr_27198[(13)] = inst_27133__$1);

return statearr_27198;
})();
if(cljs.core.truth_(inst_27134)){
var statearr_27199_27235 = state_27192__$1;
(statearr_27199_27235[(1)] = (5));

} else {
var statearr_27200_27236 = state_27192__$1;
(statearr_27200_27236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (15))){
var state_27192__$1 = state_27192;
var statearr_27204_27237 = state_27192__$1;
(statearr_27204_27237[(2)] = null);

(statearr_27204_27237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (21))){
var state_27192__$1 = state_27192;
var statearr_27205_27238 = state_27192__$1;
(statearr_27205_27238[(2)] = null);

(statearr_27205_27238[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (13))){
var inst_27144 = (state_27192[(8)]);
var inst_27146 = (state_27192[(9)]);
var inst_27145 = (state_27192[(10)]);
var inst_27147 = (state_27192[(12)]);
var inst_27154 = (state_27192[(2)]);
var inst_27155 = (inst_27147 + (1));
var tmp27201 = inst_27144;
var tmp27202 = inst_27146;
var tmp27203 = inst_27145;
var inst_27144__$1 = tmp27201;
var inst_27145__$1 = tmp27203;
var inst_27146__$1 = tmp27202;
var inst_27147__$1 = inst_27155;
var state_27192__$1 = (function (){var statearr_27206 = state_27192;
(statearr_27206[(8)] = inst_27144__$1);

(statearr_27206[(9)] = inst_27146__$1);

(statearr_27206[(10)] = inst_27145__$1);

(statearr_27206[(12)] = inst_27147__$1);

(statearr_27206[(14)] = inst_27154);

return statearr_27206;
})();
var statearr_27207_27239 = state_27192__$1;
(statearr_27207_27239[(2)] = null);

(statearr_27207_27239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (22))){
var state_27192__$1 = state_27192;
var statearr_27208_27240 = state_27192__$1;
(statearr_27208_27240[(2)] = null);

(statearr_27208_27240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (6))){
var inst_27133 = (state_27192[(13)]);
var inst_27142 = f.call(null,inst_27133);
var inst_27143 = cljs.core.seq.call(null,inst_27142);
var inst_27144 = inst_27143;
var inst_27145 = null;
var inst_27146 = (0);
var inst_27147 = (0);
var state_27192__$1 = (function (){var statearr_27209 = state_27192;
(statearr_27209[(8)] = inst_27144);

(statearr_27209[(9)] = inst_27146);

(statearr_27209[(10)] = inst_27145);

(statearr_27209[(12)] = inst_27147);

return statearr_27209;
})();
var statearr_27210_27241 = state_27192__$1;
(statearr_27210_27241[(2)] = null);

(statearr_27210_27241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (17))){
var inst_27158 = (state_27192[(7)]);
var inst_27162 = cljs.core.chunk_first.call(null,inst_27158);
var inst_27163 = cljs.core.chunk_rest.call(null,inst_27158);
var inst_27164 = cljs.core.count.call(null,inst_27162);
var inst_27144 = inst_27163;
var inst_27145 = inst_27162;
var inst_27146 = inst_27164;
var inst_27147 = (0);
var state_27192__$1 = (function (){var statearr_27211 = state_27192;
(statearr_27211[(8)] = inst_27144);

(statearr_27211[(9)] = inst_27146);

(statearr_27211[(10)] = inst_27145);

(statearr_27211[(12)] = inst_27147);

return statearr_27211;
})();
var statearr_27212_27242 = state_27192__$1;
(statearr_27212_27242[(2)] = null);

(statearr_27212_27242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (3))){
var inst_27190 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27192__$1,inst_27190);
} else {
if((state_val_27193 === (12))){
var inst_27178 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27213_27243 = state_27192__$1;
(statearr_27213_27243[(2)] = inst_27178);

(statearr_27213_27243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (2))){
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27192__$1,(4),in$);
} else {
if((state_val_27193 === (23))){
var inst_27186 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27214_27244 = state_27192__$1;
(statearr_27214_27244[(2)] = inst_27186);

(statearr_27214_27244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (19))){
var inst_27173 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27215_27245 = state_27192__$1;
(statearr_27215_27245[(2)] = inst_27173);

(statearr_27215_27245[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (11))){
var inst_27144 = (state_27192[(8)]);
var inst_27158 = (state_27192[(7)]);
var inst_27158__$1 = cljs.core.seq.call(null,inst_27144);
var state_27192__$1 = (function (){var statearr_27216 = state_27192;
(statearr_27216[(7)] = inst_27158__$1);

return statearr_27216;
})();
if(inst_27158__$1){
var statearr_27217_27246 = state_27192__$1;
(statearr_27217_27246[(1)] = (14));

} else {
var statearr_27218_27247 = state_27192__$1;
(statearr_27218_27247[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (9))){
var inst_27180 = (state_27192[(2)]);
var inst_27181 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27192__$1 = (function (){var statearr_27219 = state_27192;
(statearr_27219[(15)] = inst_27180);

return statearr_27219;
})();
if(cljs.core.truth_(inst_27181)){
var statearr_27220_27248 = state_27192__$1;
(statearr_27220_27248[(1)] = (21));

} else {
var statearr_27221_27249 = state_27192__$1;
(statearr_27221_27249[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (5))){
var inst_27136 = cljs.core.async.close_BANG_.call(null,out);
var state_27192__$1 = state_27192;
var statearr_27222_27250 = state_27192__$1;
(statearr_27222_27250[(2)] = inst_27136);

(statearr_27222_27250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (14))){
var inst_27158 = (state_27192[(7)]);
var inst_27160 = cljs.core.chunked_seq_QMARK_.call(null,inst_27158);
var state_27192__$1 = state_27192;
if(inst_27160){
var statearr_27223_27251 = state_27192__$1;
(statearr_27223_27251[(1)] = (17));

} else {
var statearr_27224_27252 = state_27192__$1;
(statearr_27224_27252[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (16))){
var inst_27176 = (state_27192[(2)]);
var state_27192__$1 = state_27192;
var statearr_27225_27253 = state_27192__$1;
(statearr_27225_27253[(2)] = inst_27176);

(statearr_27225_27253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27193 === (10))){
var inst_27145 = (state_27192[(10)]);
var inst_27147 = (state_27192[(12)]);
var inst_27152 = cljs.core._nth.call(null,inst_27145,inst_27147);
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27192__$1,(13),out,inst_27152);
} else {
if((state_val_27193 === (18))){
var inst_27158 = (state_27192[(7)]);
var inst_27167 = cljs.core.first.call(null,inst_27158);
var state_27192__$1 = state_27192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27192__$1,(20),out,inst_27167);
} else {
if((state_val_27193 === (8))){
var inst_27146 = (state_27192[(9)]);
var inst_27147 = (state_27192[(12)]);
var inst_27149 = (inst_27147 < inst_27146);
var inst_27150 = inst_27149;
var state_27192__$1 = state_27192;
if(cljs.core.truth_(inst_27150)){
var statearr_27226_27254 = state_27192__$1;
(statearr_27226_27254[(1)] = (10));

} else {
var statearr_27227_27255 = state_27192__$1;
(statearr_27227_27255[(1)] = (11));

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
});})(c__17552__auto__))
;
return ((function (switch__17464__auto__,c__17552__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_27228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27228[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__);

(statearr_27228[(1)] = (1));

return statearr_27228;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____1 = (function (state_27192){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_27192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e27229){if((e27229 instanceof Object)){
var ex__17468__auto__ = e27229;
var statearr_27230_27256 = state_27192;
(statearr_27230_27256[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27257 = state_27192;
state_27192 = G__27257;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__ = function(state_27192){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____1.call(this,state_27192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__))
})();
var state__17554__auto__ = (function (){var statearr_27231 = f__17553__auto__.call(null);
(statearr_27231[(6)] = c__17552__auto__);

return statearr_27231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto__))
);

return c__17552__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27259 = arguments.length;
switch (G__27259) {
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
var G__27262 = arguments.length;
switch (G__27262) {
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
var G__27265 = arguments.length;
switch (G__27265) {
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
var c__17552__auto___27312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___27312,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___27312,out){
return (function (state_27289){
var state_val_27290 = (state_27289[(1)]);
if((state_val_27290 === (7))){
var inst_27284 = (state_27289[(2)]);
var state_27289__$1 = state_27289;
var statearr_27291_27313 = state_27289__$1;
(statearr_27291_27313[(2)] = inst_27284);

(statearr_27291_27313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (1))){
var inst_27266 = null;
var state_27289__$1 = (function (){var statearr_27292 = state_27289;
(statearr_27292[(7)] = inst_27266);

return statearr_27292;
})();
var statearr_27293_27314 = state_27289__$1;
(statearr_27293_27314[(2)] = null);

(statearr_27293_27314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (4))){
var inst_27269 = (state_27289[(8)]);
var inst_27269__$1 = (state_27289[(2)]);
var inst_27270 = (inst_27269__$1 == null);
var inst_27271 = cljs.core.not.call(null,inst_27270);
var state_27289__$1 = (function (){var statearr_27294 = state_27289;
(statearr_27294[(8)] = inst_27269__$1);

return statearr_27294;
})();
if(inst_27271){
var statearr_27295_27315 = state_27289__$1;
(statearr_27295_27315[(1)] = (5));

} else {
var statearr_27296_27316 = state_27289__$1;
(statearr_27296_27316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (6))){
var state_27289__$1 = state_27289;
var statearr_27297_27317 = state_27289__$1;
(statearr_27297_27317[(2)] = null);

(statearr_27297_27317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (3))){
var inst_27286 = (state_27289[(2)]);
var inst_27287 = cljs.core.async.close_BANG_.call(null,out);
var state_27289__$1 = (function (){var statearr_27298 = state_27289;
(statearr_27298[(9)] = inst_27286);

return statearr_27298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27289__$1,inst_27287);
} else {
if((state_val_27290 === (2))){
var state_27289__$1 = state_27289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27289__$1,(4),ch);
} else {
if((state_val_27290 === (11))){
var inst_27269 = (state_27289[(8)]);
var inst_27278 = (state_27289[(2)]);
var inst_27266 = inst_27269;
var state_27289__$1 = (function (){var statearr_27299 = state_27289;
(statearr_27299[(10)] = inst_27278);

(statearr_27299[(7)] = inst_27266);

return statearr_27299;
})();
var statearr_27300_27318 = state_27289__$1;
(statearr_27300_27318[(2)] = null);

(statearr_27300_27318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (9))){
var inst_27269 = (state_27289[(8)]);
var state_27289__$1 = state_27289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27289__$1,(11),out,inst_27269);
} else {
if((state_val_27290 === (5))){
var inst_27269 = (state_27289[(8)]);
var inst_27266 = (state_27289[(7)]);
var inst_27273 = cljs.core._EQ_.call(null,inst_27269,inst_27266);
var state_27289__$1 = state_27289;
if(inst_27273){
var statearr_27302_27319 = state_27289__$1;
(statearr_27302_27319[(1)] = (8));

} else {
var statearr_27303_27320 = state_27289__$1;
(statearr_27303_27320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (10))){
var inst_27281 = (state_27289[(2)]);
var state_27289__$1 = state_27289;
var statearr_27304_27321 = state_27289__$1;
(statearr_27304_27321[(2)] = inst_27281);

(statearr_27304_27321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (8))){
var inst_27266 = (state_27289[(7)]);
var tmp27301 = inst_27266;
var inst_27266__$1 = tmp27301;
var state_27289__$1 = (function (){var statearr_27305 = state_27289;
(statearr_27305[(7)] = inst_27266__$1);

return statearr_27305;
})();
var statearr_27306_27322 = state_27289__$1;
(statearr_27306_27322[(2)] = null);

(statearr_27306_27322[(1)] = (2));


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
});})(c__17552__auto___27312,out))
;
return ((function (switch__17464__auto__,c__17552__auto___27312,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_27307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27307[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_27307[(1)] = (1));

return statearr_27307;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_27289){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_27289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e27308){if((e27308 instanceof Object)){
var ex__17468__auto__ = e27308;
var statearr_27309_27323 = state_27289;
(statearr_27309_27323[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27324 = state_27289;
state_27289 = G__27324;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_27289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_27289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___27312,out))
})();
var state__17554__auto__ = (function (){var statearr_27310 = f__17553__auto__.call(null);
(statearr_27310[(6)] = c__17552__auto___27312);

return statearr_27310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___27312,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27326 = arguments.length;
switch (G__27326) {
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
var c__17552__auto___27392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___27392,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___27392,out){
return (function (state_27364){
var state_val_27365 = (state_27364[(1)]);
if((state_val_27365 === (7))){
var inst_27360 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27366_27393 = state_27364__$1;
(statearr_27366_27393[(2)] = inst_27360);

(statearr_27366_27393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (1))){
var inst_27327 = (new Array(n));
var inst_27328 = inst_27327;
var inst_27329 = (0);
var state_27364__$1 = (function (){var statearr_27367 = state_27364;
(statearr_27367[(7)] = inst_27328);

(statearr_27367[(8)] = inst_27329);

return statearr_27367;
})();
var statearr_27368_27394 = state_27364__$1;
(statearr_27368_27394[(2)] = null);

(statearr_27368_27394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (4))){
var inst_27332 = (state_27364[(9)]);
var inst_27332__$1 = (state_27364[(2)]);
var inst_27333 = (inst_27332__$1 == null);
var inst_27334 = cljs.core.not.call(null,inst_27333);
var state_27364__$1 = (function (){var statearr_27369 = state_27364;
(statearr_27369[(9)] = inst_27332__$1);

return statearr_27369;
})();
if(inst_27334){
var statearr_27370_27395 = state_27364__$1;
(statearr_27370_27395[(1)] = (5));

} else {
var statearr_27371_27396 = state_27364__$1;
(statearr_27371_27396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (15))){
var inst_27354 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27372_27397 = state_27364__$1;
(statearr_27372_27397[(2)] = inst_27354);

(statearr_27372_27397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (13))){
var state_27364__$1 = state_27364;
var statearr_27373_27398 = state_27364__$1;
(statearr_27373_27398[(2)] = null);

(statearr_27373_27398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (6))){
var inst_27329 = (state_27364[(8)]);
var inst_27350 = (inst_27329 > (0));
var state_27364__$1 = state_27364;
if(cljs.core.truth_(inst_27350)){
var statearr_27374_27399 = state_27364__$1;
(statearr_27374_27399[(1)] = (12));

} else {
var statearr_27375_27400 = state_27364__$1;
(statearr_27375_27400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (3))){
var inst_27362 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27364__$1,inst_27362);
} else {
if((state_val_27365 === (12))){
var inst_27328 = (state_27364[(7)]);
var inst_27352 = cljs.core.vec.call(null,inst_27328);
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27364__$1,(15),out,inst_27352);
} else {
if((state_val_27365 === (2))){
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27364__$1,(4),ch);
} else {
if((state_val_27365 === (11))){
var inst_27344 = (state_27364[(2)]);
var inst_27345 = (new Array(n));
var inst_27328 = inst_27345;
var inst_27329 = (0);
var state_27364__$1 = (function (){var statearr_27376 = state_27364;
(statearr_27376[(7)] = inst_27328);

(statearr_27376[(8)] = inst_27329);

(statearr_27376[(10)] = inst_27344);

return statearr_27376;
})();
var statearr_27377_27401 = state_27364__$1;
(statearr_27377_27401[(2)] = null);

(statearr_27377_27401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (9))){
var inst_27328 = (state_27364[(7)]);
var inst_27342 = cljs.core.vec.call(null,inst_27328);
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27364__$1,(11),out,inst_27342);
} else {
if((state_val_27365 === (5))){
var inst_27337 = (state_27364[(11)]);
var inst_27328 = (state_27364[(7)]);
var inst_27329 = (state_27364[(8)]);
var inst_27332 = (state_27364[(9)]);
var inst_27336 = (inst_27328[inst_27329] = inst_27332);
var inst_27337__$1 = (inst_27329 + (1));
var inst_27338 = (inst_27337__$1 < n);
var state_27364__$1 = (function (){var statearr_27378 = state_27364;
(statearr_27378[(12)] = inst_27336);

(statearr_27378[(11)] = inst_27337__$1);

return statearr_27378;
})();
if(cljs.core.truth_(inst_27338)){
var statearr_27379_27402 = state_27364__$1;
(statearr_27379_27402[(1)] = (8));

} else {
var statearr_27380_27403 = state_27364__$1;
(statearr_27380_27403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (14))){
var inst_27357 = (state_27364[(2)]);
var inst_27358 = cljs.core.async.close_BANG_.call(null,out);
var state_27364__$1 = (function (){var statearr_27382 = state_27364;
(statearr_27382[(13)] = inst_27357);

return statearr_27382;
})();
var statearr_27383_27404 = state_27364__$1;
(statearr_27383_27404[(2)] = inst_27358);

(statearr_27383_27404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (10))){
var inst_27348 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27384_27405 = state_27364__$1;
(statearr_27384_27405[(2)] = inst_27348);

(statearr_27384_27405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (8))){
var inst_27337 = (state_27364[(11)]);
var inst_27328 = (state_27364[(7)]);
var tmp27381 = inst_27328;
var inst_27328__$1 = tmp27381;
var inst_27329 = inst_27337;
var state_27364__$1 = (function (){var statearr_27385 = state_27364;
(statearr_27385[(7)] = inst_27328__$1);

(statearr_27385[(8)] = inst_27329);

return statearr_27385;
})();
var statearr_27386_27406 = state_27364__$1;
(statearr_27386_27406[(2)] = null);

(statearr_27386_27406[(1)] = (2));


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
});})(c__17552__auto___27392,out))
;
return ((function (switch__17464__auto__,c__17552__auto___27392,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_27387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27387[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_27387[(1)] = (1));

return statearr_27387;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_27364){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_27364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e27388){if((e27388 instanceof Object)){
var ex__17468__auto__ = e27388;
var statearr_27389_27407 = state_27364;
(statearr_27389_27407[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27408 = state_27364;
state_27364 = G__27408;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_27364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_27364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___27392,out))
})();
var state__17554__auto__ = (function (){var statearr_27390 = f__17553__auto__.call(null);
(statearr_27390[(6)] = c__17552__auto___27392);

return statearr_27390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___27392,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27410 = arguments.length;
switch (G__27410) {
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
var c__17552__auto___27480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___27480,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___27480,out){
return (function (state_27452){
var state_val_27453 = (state_27452[(1)]);
if((state_val_27453 === (7))){
var inst_27448 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27454_27481 = state_27452__$1;
(statearr_27454_27481[(2)] = inst_27448);

(statearr_27454_27481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (1))){
var inst_27411 = [];
var inst_27412 = inst_27411;
var inst_27413 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27452__$1 = (function (){var statearr_27455 = state_27452;
(statearr_27455[(7)] = inst_27413);

(statearr_27455[(8)] = inst_27412);

return statearr_27455;
})();
var statearr_27456_27482 = state_27452__$1;
(statearr_27456_27482[(2)] = null);

(statearr_27456_27482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (4))){
var inst_27416 = (state_27452[(9)]);
var inst_27416__$1 = (state_27452[(2)]);
var inst_27417 = (inst_27416__$1 == null);
var inst_27418 = cljs.core.not.call(null,inst_27417);
var state_27452__$1 = (function (){var statearr_27457 = state_27452;
(statearr_27457[(9)] = inst_27416__$1);

return statearr_27457;
})();
if(inst_27418){
var statearr_27458_27483 = state_27452__$1;
(statearr_27458_27483[(1)] = (5));

} else {
var statearr_27459_27484 = state_27452__$1;
(statearr_27459_27484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (15))){
var inst_27442 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27460_27485 = state_27452__$1;
(statearr_27460_27485[(2)] = inst_27442);

(statearr_27460_27485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (13))){
var state_27452__$1 = state_27452;
var statearr_27461_27486 = state_27452__$1;
(statearr_27461_27486[(2)] = null);

(statearr_27461_27486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (6))){
var inst_27412 = (state_27452[(8)]);
var inst_27437 = inst_27412.length;
var inst_27438 = (inst_27437 > (0));
var state_27452__$1 = state_27452;
if(cljs.core.truth_(inst_27438)){
var statearr_27462_27487 = state_27452__$1;
(statearr_27462_27487[(1)] = (12));

} else {
var statearr_27463_27488 = state_27452__$1;
(statearr_27463_27488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (3))){
var inst_27450 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27452__$1,inst_27450);
} else {
if((state_val_27453 === (12))){
var inst_27412 = (state_27452[(8)]);
var inst_27440 = cljs.core.vec.call(null,inst_27412);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27452__$1,(15),out,inst_27440);
} else {
if((state_val_27453 === (2))){
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27452__$1,(4),ch);
} else {
if((state_val_27453 === (11))){
var inst_27420 = (state_27452[(10)]);
var inst_27416 = (state_27452[(9)]);
var inst_27430 = (state_27452[(2)]);
var inst_27431 = [];
var inst_27432 = inst_27431.push(inst_27416);
var inst_27412 = inst_27431;
var inst_27413 = inst_27420;
var state_27452__$1 = (function (){var statearr_27464 = state_27452;
(statearr_27464[(7)] = inst_27413);

(statearr_27464[(11)] = inst_27430);

(statearr_27464[(12)] = inst_27432);

(statearr_27464[(8)] = inst_27412);

return statearr_27464;
})();
var statearr_27465_27489 = state_27452__$1;
(statearr_27465_27489[(2)] = null);

(statearr_27465_27489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (9))){
var inst_27412 = (state_27452[(8)]);
var inst_27428 = cljs.core.vec.call(null,inst_27412);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27452__$1,(11),out,inst_27428);
} else {
if((state_val_27453 === (5))){
var inst_27420 = (state_27452[(10)]);
var inst_27413 = (state_27452[(7)]);
var inst_27416 = (state_27452[(9)]);
var inst_27420__$1 = f.call(null,inst_27416);
var inst_27421 = cljs.core._EQ_.call(null,inst_27420__$1,inst_27413);
var inst_27422 = cljs.core.keyword_identical_QMARK_.call(null,inst_27413,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27423 = (inst_27421) || (inst_27422);
var state_27452__$1 = (function (){var statearr_27466 = state_27452;
(statearr_27466[(10)] = inst_27420__$1);

return statearr_27466;
})();
if(cljs.core.truth_(inst_27423)){
var statearr_27467_27490 = state_27452__$1;
(statearr_27467_27490[(1)] = (8));

} else {
var statearr_27468_27491 = state_27452__$1;
(statearr_27468_27491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (14))){
var inst_27445 = (state_27452[(2)]);
var inst_27446 = cljs.core.async.close_BANG_.call(null,out);
var state_27452__$1 = (function (){var statearr_27470 = state_27452;
(statearr_27470[(13)] = inst_27445);

return statearr_27470;
})();
var statearr_27471_27492 = state_27452__$1;
(statearr_27471_27492[(2)] = inst_27446);

(statearr_27471_27492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (10))){
var inst_27435 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27472_27493 = state_27452__$1;
(statearr_27472_27493[(2)] = inst_27435);

(statearr_27472_27493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (8))){
var inst_27420 = (state_27452[(10)]);
var inst_27416 = (state_27452[(9)]);
var inst_27412 = (state_27452[(8)]);
var inst_27425 = inst_27412.push(inst_27416);
var tmp27469 = inst_27412;
var inst_27412__$1 = tmp27469;
var inst_27413 = inst_27420;
var state_27452__$1 = (function (){var statearr_27473 = state_27452;
(statearr_27473[(7)] = inst_27413);

(statearr_27473[(14)] = inst_27425);

(statearr_27473[(8)] = inst_27412__$1);

return statearr_27473;
})();
var statearr_27474_27494 = state_27452__$1;
(statearr_27474_27494[(2)] = null);

(statearr_27474_27494[(1)] = (2));


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
});})(c__17552__auto___27480,out))
;
return ((function (switch__17464__auto__,c__17552__auto___27480,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_27475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27475[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_27475[(1)] = (1));

return statearr_27475;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_27452){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_27452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e27476){if((e27476 instanceof Object)){
var ex__17468__auto__ = e27476;
var statearr_27477_27495 = state_27452;
(statearr_27477_27495[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27496 = state_27452;
state_27452 = G__27496;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_27452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_27452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___27480,out))
})();
var state__17554__auto__ = (function (){var statearr_27478 = f__17553__auto__.call(null);
(statearr_27478[(6)] = c__17552__auto___27480);

return statearr_27478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___27480,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518565232589
