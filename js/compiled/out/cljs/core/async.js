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
var G__17598 = arguments.length;
switch (G__17598) {
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
if(typeof cljs.core.async.t_cljs$core$async17599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17599 = (function (f,blockable,meta17600){
this.f = f;
this.blockable = blockable;
this.meta17600 = meta17600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17601,meta17600__$1){
var self__ = this;
var _17601__$1 = this;
return (new cljs.core.async.t_cljs$core$async17599(self__.f,self__.blockable,meta17600__$1));
});

cljs.core.async.t_cljs$core$async17599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17601){
var self__ = this;
var _17601__$1 = this;
return self__.meta17600;
});

cljs.core.async.t_cljs$core$async17599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17600","meta17600",-2143664485,null)], null);
});

cljs.core.async.t_cljs$core$async17599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17599";

cljs.core.async.t_cljs$core$async17599.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async17599");
});

cljs.core.async.__GT_t_cljs$core$async17599 = (function cljs$core$async$__GT_t_cljs$core$async17599(f__$1,blockable__$1,meta17600){
return (new cljs.core.async.t_cljs$core$async17599(f__$1,blockable__$1,meta17600));
});

}

return (new cljs.core.async.t_cljs$core$async17599(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17605 = arguments.length;
switch (G__17605) {
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
var G__17608 = arguments.length;
switch (G__17608) {
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
var G__17611 = arguments.length;
switch (G__17611) {
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
var val_17613 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17613);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17613,ret){
return (function (){
return fn1.call(null,val_17613);
});})(val_17613,ret))
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
var G__17615 = arguments.length;
switch (G__17615) {
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
var n__8615__auto___17617 = n;
var x_17618 = (0);
while(true){
if((x_17618 < n__8615__auto___17617)){
(a[x_17618] = (0));

var G__17619 = (x_17618 + (1));
x_17618 = G__17619;
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

var G__17620 = (i + (1));
i = G__17620;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async17621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17621 = (function (flag,meta17622){
this.flag = flag;
this.meta17622 = meta17622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17623,meta17622__$1){
var self__ = this;
var _17623__$1 = this;
return (new cljs.core.async.t_cljs$core$async17621(self__.flag,meta17622__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17623){
var self__ = this;
var _17623__$1 = this;
return self__.meta17622;
});})(flag))
;

cljs.core.async.t_cljs$core$async17621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17621.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17622","meta17622",-521207294,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17621";

cljs.core.async.t_cljs$core$async17621.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async17621");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17621 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17621(flag__$1,meta17622){
return (new cljs.core.async.t_cljs$core$async17621(flag__$1,meta17622));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17621(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17624 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17624 = (function (flag,cb,meta17625){
this.flag = flag;
this.cb = cb;
this.meta17625 = meta17625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17626,meta17625__$1){
var self__ = this;
var _17626__$1 = this;
return (new cljs.core.async.t_cljs$core$async17624(self__.flag,self__.cb,meta17625__$1));
});

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17626){
var self__ = this;
var _17626__$1 = this;
return self__.meta17625;
});

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17624.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17625","meta17625",850401517,null)], null);
});

cljs.core.async.t_cljs$core$async17624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17624";

cljs.core.async.t_cljs$core$async17624.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async17624");
});

cljs.core.async.__GT_t_cljs$core$async17624 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17624(flag__$1,cb__$1,meta17625){
return (new cljs.core.async.t_cljs$core$async17624(flag__$1,cb__$1,meta17625));
});

}

return (new cljs.core.async.t_cljs$core$async17624(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17627_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17627_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17628_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17628_SHARP_,port], null));
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
var G__17629 = (i + (1));
i = G__17629;
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
var len__8839__auto___17635 = arguments.length;
var i__8840__auto___17636 = (0);
while(true){
if((i__8840__auto___17636 < len__8839__auto___17635)){
args__8846__auto__.push((arguments[i__8840__auto___17636]));

var G__17637 = (i__8840__auto___17636 + (1));
i__8840__auto___17636 = G__17637;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17632){
var map__17633 = p__17632;
var map__17633__$1 = ((((!((map__17633 == null)))?((((map__17633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17633):map__17633);
var opts = map__17633__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17630){
var G__17631 = cljs.core.first.call(null,seq17630);
var seq17630__$1 = cljs.core.next.call(null,seq17630);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17631,seq17630__$1);
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
var G__17639 = arguments.length;
switch (G__17639) {
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
var c__17552__auto___17685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___17685){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___17685){
return (function (state_17663){
var state_val_17664 = (state_17663[(1)]);
if((state_val_17664 === (7))){
var inst_17659 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17665_17686 = state_17663__$1;
(statearr_17665_17686[(2)] = inst_17659);

(statearr_17665_17686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (1))){
var state_17663__$1 = state_17663;
var statearr_17666_17687 = state_17663__$1;
(statearr_17666_17687[(2)] = null);

(statearr_17666_17687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (4))){
var inst_17642 = (state_17663[(7)]);
var inst_17642__$1 = (state_17663[(2)]);
var inst_17643 = (inst_17642__$1 == null);
var state_17663__$1 = (function (){var statearr_17667 = state_17663;
(statearr_17667[(7)] = inst_17642__$1);

return statearr_17667;
})();
if(cljs.core.truth_(inst_17643)){
var statearr_17668_17688 = state_17663__$1;
(statearr_17668_17688[(1)] = (5));

} else {
var statearr_17669_17689 = state_17663__$1;
(statearr_17669_17689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (13))){
var state_17663__$1 = state_17663;
var statearr_17670_17690 = state_17663__$1;
(statearr_17670_17690[(2)] = null);

(statearr_17670_17690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (6))){
var inst_17642 = (state_17663[(7)]);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17663__$1,(11),to,inst_17642);
} else {
if((state_val_17664 === (3))){
var inst_17661 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17663__$1,inst_17661);
} else {
if((state_val_17664 === (12))){
var state_17663__$1 = state_17663;
var statearr_17671_17691 = state_17663__$1;
(statearr_17671_17691[(2)] = null);

(statearr_17671_17691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (2))){
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17663__$1,(4),from);
} else {
if((state_val_17664 === (11))){
var inst_17652 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
if(cljs.core.truth_(inst_17652)){
var statearr_17672_17692 = state_17663__$1;
(statearr_17672_17692[(1)] = (12));

} else {
var statearr_17673_17693 = state_17663__$1;
(statearr_17673_17693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (9))){
var state_17663__$1 = state_17663;
var statearr_17674_17694 = state_17663__$1;
(statearr_17674_17694[(2)] = null);

(statearr_17674_17694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (5))){
var state_17663__$1 = state_17663;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17675_17695 = state_17663__$1;
(statearr_17675_17695[(1)] = (8));

} else {
var statearr_17676_17696 = state_17663__$1;
(statearr_17676_17696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (14))){
var inst_17657 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17677_17697 = state_17663__$1;
(statearr_17677_17697[(2)] = inst_17657);

(statearr_17677_17697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (10))){
var inst_17649 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17678_17698 = state_17663__$1;
(statearr_17678_17698[(2)] = inst_17649);

(statearr_17678_17698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17664 === (8))){
var inst_17646 = cljs.core.async.close_BANG_.call(null,to);
var state_17663__$1 = state_17663;
var statearr_17679_17699 = state_17663__$1;
(statearr_17679_17699[(2)] = inst_17646);

(statearr_17679_17699[(1)] = (10));


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
});})(c__17552__auto___17685))
;
return ((function (switch__17464__auto__,c__17552__auto___17685){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_17680 = [null,null,null,null,null,null,null,null];
(statearr_17680[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_17680[(1)] = (1));

return statearr_17680;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_17663){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_17663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e17681){if((e17681 instanceof Object)){
var ex__17468__auto__ = e17681;
var statearr_17682_17700 = state_17663;
(statearr_17682_17700[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17701 = state_17663;
state_17663 = G__17701;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_17663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_17663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___17685))
})();
var state__17554__auto__ = (function (){var statearr_17683 = f__17553__auto__.call(null);
(statearr_17683[(6)] = c__17552__auto___17685);

return statearr_17683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___17685))
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
return (function (p__17702){
var vec__17703 = p__17702;
var v = cljs.core.nth.call(null,vec__17703,(0),null);
var p = cljs.core.nth.call(null,vec__17703,(1),null);
var job = vec__17703;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17552__auto___17874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___17874,res,vec__17703,v,p,job,jobs,results){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___17874,res,vec__17703,v,p,job,jobs,results){
return (function (state_17710){
var state_val_17711 = (state_17710[(1)]);
if((state_val_17711 === (1))){
var state_17710__$1 = state_17710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17710__$1,(2),res,v);
} else {
if((state_val_17711 === (2))){
var inst_17707 = (state_17710[(2)]);
var inst_17708 = cljs.core.async.close_BANG_.call(null,res);
var state_17710__$1 = (function (){var statearr_17712 = state_17710;
(statearr_17712[(7)] = inst_17707);

return statearr_17712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17710__$1,inst_17708);
} else {
return null;
}
}
});})(c__17552__auto___17874,res,vec__17703,v,p,job,jobs,results))
;
return ((function (switch__17464__auto__,c__17552__auto___17874,res,vec__17703,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_17713 = [null,null,null,null,null,null,null,null];
(statearr_17713[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_17713[(1)] = (1));

return statearr_17713;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_17710){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_17710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e17714){if((e17714 instanceof Object)){
var ex__17468__auto__ = e17714;
var statearr_17715_17875 = state_17710;
(statearr_17715_17875[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17876 = state_17710;
state_17710 = G__17876;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_17710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_17710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___17874,res,vec__17703,v,p,job,jobs,results))
})();
var state__17554__auto__ = (function (){var statearr_17716 = f__17553__auto__.call(null);
(statearr_17716[(6)] = c__17552__auto___17874);

return statearr_17716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___17874,res,vec__17703,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17717){
var vec__17718 = p__17717;
var v = cljs.core.nth.call(null,vec__17718,(0),null);
var p = cljs.core.nth.call(null,vec__17718,(1),null);
var job = vec__17718;
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
var n__8615__auto___17877 = n;
var __17878 = (0);
while(true){
if((__17878 < n__8615__auto___17877)){
var G__17721_17879 = type;
var G__17721_17880__$1 = (((G__17721_17879 instanceof cljs.core.Keyword))?G__17721_17879.fqn:null);
switch (G__17721_17880__$1) {
case "compute":
var c__17552__auto___17882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17878,c__17552__auto___17882,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (__17878,c__17552__auto___17882,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async){
return (function (state_17734){
var state_val_17735 = (state_17734[(1)]);
if((state_val_17735 === (1))){
var state_17734__$1 = state_17734;
var statearr_17736_17883 = state_17734__$1;
(statearr_17736_17883[(2)] = null);

(statearr_17736_17883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (2))){
var state_17734__$1 = state_17734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17734__$1,(4),jobs);
} else {
if((state_val_17735 === (3))){
var inst_17732 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17734__$1,inst_17732);
} else {
if((state_val_17735 === (4))){
var inst_17724 = (state_17734[(2)]);
var inst_17725 = process.call(null,inst_17724);
var state_17734__$1 = state_17734;
if(cljs.core.truth_(inst_17725)){
var statearr_17737_17884 = state_17734__$1;
(statearr_17737_17884[(1)] = (5));

} else {
var statearr_17738_17885 = state_17734__$1;
(statearr_17738_17885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (5))){
var state_17734__$1 = state_17734;
var statearr_17739_17886 = state_17734__$1;
(statearr_17739_17886[(2)] = null);

(statearr_17739_17886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (6))){
var state_17734__$1 = state_17734;
var statearr_17740_17887 = state_17734__$1;
(statearr_17740_17887[(2)] = null);

(statearr_17740_17887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17735 === (7))){
var inst_17730 = (state_17734[(2)]);
var state_17734__$1 = state_17734;
var statearr_17741_17888 = state_17734__$1;
(statearr_17741_17888[(2)] = inst_17730);

(statearr_17741_17888[(1)] = (3));


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
});})(__17878,c__17552__auto___17882,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async))
;
return ((function (__17878,switch__17464__auto__,c__17552__auto___17882,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_17742 = [null,null,null,null,null,null,null];
(statearr_17742[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_17742[(1)] = (1));

return statearr_17742;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_17734){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_17734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e17743){if((e17743 instanceof Object)){
var ex__17468__auto__ = e17743;
var statearr_17744_17889 = state_17734;
(statearr_17744_17889[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17890 = state_17734;
state_17734 = G__17890;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_17734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_17734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(__17878,switch__17464__auto__,c__17552__auto___17882,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async))
})();
var state__17554__auto__ = (function (){var statearr_17745 = f__17553__auto__.call(null);
(statearr_17745[(6)] = c__17552__auto___17882);

return statearr_17745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(__17878,c__17552__auto___17882,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async))
);


break;
case "async":
var c__17552__auto___17891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17878,c__17552__auto___17891,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (__17878,c__17552__auto___17891,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async){
return (function (state_17758){
var state_val_17759 = (state_17758[(1)]);
if((state_val_17759 === (1))){
var state_17758__$1 = state_17758;
var statearr_17760_17892 = state_17758__$1;
(statearr_17760_17892[(2)] = null);

(statearr_17760_17892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (2))){
var state_17758__$1 = state_17758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17758__$1,(4),jobs);
} else {
if((state_val_17759 === (3))){
var inst_17756 = (state_17758[(2)]);
var state_17758__$1 = state_17758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17758__$1,inst_17756);
} else {
if((state_val_17759 === (4))){
var inst_17748 = (state_17758[(2)]);
var inst_17749 = async.call(null,inst_17748);
var state_17758__$1 = state_17758;
if(cljs.core.truth_(inst_17749)){
var statearr_17761_17893 = state_17758__$1;
(statearr_17761_17893[(1)] = (5));

} else {
var statearr_17762_17894 = state_17758__$1;
(statearr_17762_17894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (5))){
var state_17758__$1 = state_17758;
var statearr_17763_17895 = state_17758__$1;
(statearr_17763_17895[(2)] = null);

(statearr_17763_17895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (6))){
var state_17758__$1 = state_17758;
var statearr_17764_17896 = state_17758__$1;
(statearr_17764_17896[(2)] = null);

(statearr_17764_17896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (7))){
var inst_17754 = (state_17758[(2)]);
var state_17758__$1 = state_17758;
var statearr_17765_17897 = state_17758__$1;
(statearr_17765_17897[(2)] = inst_17754);

(statearr_17765_17897[(1)] = (3));


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
});})(__17878,c__17552__auto___17891,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async))
;
return ((function (__17878,switch__17464__auto__,c__17552__auto___17891,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_17766 = [null,null,null,null,null,null,null];
(statearr_17766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_17766[(1)] = (1));

return statearr_17766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_17758){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_17758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e17767){if((e17767 instanceof Object)){
var ex__17468__auto__ = e17767;
var statearr_17768_17898 = state_17758;
(statearr_17768_17898[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17899 = state_17758;
state_17758 = G__17899;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_17758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_17758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(__17878,switch__17464__auto__,c__17552__auto___17891,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async))
})();
var state__17554__auto__ = (function (){var statearr_17769 = f__17553__auto__.call(null);
(statearr_17769[(6)] = c__17552__auto___17891);

return statearr_17769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(__17878,c__17552__auto___17891,G__17721_17879,G__17721_17880__$1,n__8615__auto___17877,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17721_17880__$1)].join('')));

}

var G__17900 = (__17878 + (1));
__17878 = G__17900;
continue;
} else {
}
break;
}

var c__17552__auto___17901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___17901,jobs,results,process,async){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___17901,jobs,results,process,async){
return (function (state_17791){
var state_val_17792 = (state_17791[(1)]);
if((state_val_17792 === (1))){
var state_17791__$1 = state_17791;
var statearr_17793_17902 = state_17791__$1;
(statearr_17793_17902[(2)] = null);

(statearr_17793_17902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17792 === (2))){
var state_17791__$1 = state_17791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17791__$1,(4),from);
} else {
if((state_val_17792 === (3))){
var inst_17789 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17791__$1,inst_17789);
} else {
if((state_val_17792 === (4))){
var inst_17772 = (state_17791[(7)]);
var inst_17772__$1 = (state_17791[(2)]);
var inst_17773 = (inst_17772__$1 == null);
var state_17791__$1 = (function (){var statearr_17794 = state_17791;
(statearr_17794[(7)] = inst_17772__$1);

return statearr_17794;
})();
if(cljs.core.truth_(inst_17773)){
var statearr_17795_17903 = state_17791__$1;
(statearr_17795_17903[(1)] = (5));

} else {
var statearr_17796_17904 = state_17791__$1;
(statearr_17796_17904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17792 === (5))){
var inst_17775 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17791__$1 = state_17791;
var statearr_17797_17905 = state_17791__$1;
(statearr_17797_17905[(2)] = inst_17775);

(statearr_17797_17905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17792 === (6))){
var inst_17777 = (state_17791[(8)]);
var inst_17772 = (state_17791[(7)]);
var inst_17777__$1 = cljs.core.async.chan.call(null,(1));
var inst_17778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17779 = [inst_17772,inst_17777__$1];
var inst_17780 = (new cljs.core.PersistentVector(null,2,(5),inst_17778,inst_17779,null));
var state_17791__$1 = (function (){var statearr_17798 = state_17791;
(statearr_17798[(8)] = inst_17777__$1);

return statearr_17798;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17791__$1,(8),jobs,inst_17780);
} else {
if((state_val_17792 === (7))){
var inst_17787 = (state_17791[(2)]);
var state_17791__$1 = state_17791;
var statearr_17799_17906 = state_17791__$1;
(statearr_17799_17906[(2)] = inst_17787);

(statearr_17799_17906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17792 === (8))){
var inst_17777 = (state_17791[(8)]);
var inst_17782 = (state_17791[(2)]);
var state_17791__$1 = (function (){var statearr_17800 = state_17791;
(statearr_17800[(9)] = inst_17782);

return statearr_17800;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17791__$1,(9),results,inst_17777);
} else {
if((state_val_17792 === (9))){
var inst_17784 = (state_17791[(2)]);
var state_17791__$1 = (function (){var statearr_17801 = state_17791;
(statearr_17801[(10)] = inst_17784);

return statearr_17801;
})();
var statearr_17802_17907 = state_17791__$1;
(statearr_17802_17907[(2)] = null);

(statearr_17802_17907[(1)] = (2));


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
});})(c__17552__auto___17901,jobs,results,process,async))
;
return ((function (switch__17464__auto__,c__17552__auto___17901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0 = (function (){
var statearr_17803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_17803[(1)] = (1));

return statearr_17803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_17791){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_17791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e17804){if((e17804 instanceof Object)){
var ex__17468__auto__ = e17804;
var statearr_17805_17908 = state_17791;
(statearr_17805_17908[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17909 = state_17791;
state_17791 = G__17909;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_17791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_17791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___17901,jobs,results,process,async))
})();
var state__17554__auto__ = (function (){var statearr_17806 = f__17553__auto__.call(null);
(statearr_17806[(6)] = c__17552__auto___17901);

return statearr_17806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___17901,jobs,results,process,async))
);


var c__17552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto__,jobs,results,process,async){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto__,jobs,results,process,async){
return (function (state_17844){
var state_val_17845 = (state_17844[(1)]);
if((state_val_17845 === (7))){
var inst_17840 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17846_17910 = state_17844__$1;
(statearr_17846_17910[(2)] = inst_17840);

(statearr_17846_17910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (20))){
var state_17844__$1 = state_17844;
var statearr_17847_17911 = state_17844__$1;
(statearr_17847_17911[(2)] = null);

(statearr_17847_17911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (1))){
var state_17844__$1 = state_17844;
var statearr_17848_17912 = state_17844__$1;
(statearr_17848_17912[(2)] = null);

(statearr_17848_17912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (4))){
var inst_17809 = (state_17844[(7)]);
var inst_17809__$1 = (state_17844[(2)]);
var inst_17810 = (inst_17809__$1 == null);
var state_17844__$1 = (function (){var statearr_17849 = state_17844;
(statearr_17849[(7)] = inst_17809__$1);

return statearr_17849;
})();
if(cljs.core.truth_(inst_17810)){
var statearr_17850_17913 = state_17844__$1;
(statearr_17850_17913[(1)] = (5));

} else {
var statearr_17851_17914 = state_17844__$1;
(statearr_17851_17914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (15))){
var inst_17822 = (state_17844[(8)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17844__$1,(18),to,inst_17822);
} else {
if((state_val_17845 === (21))){
var inst_17835 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17852_17915 = state_17844__$1;
(statearr_17852_17915[(2)] = inst_17835);

(statearr_17852_17915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (13))){
var inst_17837 = (state_17844[(2)]);
var state_17844__$1 = (function (){var statearr_17853 = state_17844;
(statearr_17853[(9)] = inst_17837);

return statearr_17853;
})();
var statearr_17854_17916 = state_17844__$1;
(statearr_17854_17916[(2)] = null);

(statearr_17854_17916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (6))){
var inst_17809 = (state_17844[(7)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17844__$1,(11),inst_17809);
} else {
if((state_val_17845 === (17))){
var inst_17830 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
if(cljs.core.truth_(inst_17830)){
var statearr_17855_17917 = state_17844__$1;
(statearr_17855_17917[(1)] = (19));

} else {
var statearr_17856_17918 = state_17844__$1;
(statearr_17856_17918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (3))){
var inst_17842 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17844__$1,inst_17842);
} else {
if((state_val_17845 === (12))){
var inst_17819 = (state_17844[(10)]);
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17844__$1,(14),inst_17819);
} else {
if((state_val_17845 === (2))){
var state_17844__$1 = state_17844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17844__$1,(4),results);
} else {
if((state_val_17845 === (19))){
var state_17844__$1 = state_17844;
var statearr_17857_17919 = state_17844__$1;
(statearr_17857_17919[(2)] = null);

(statearr_17857_17919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (11))){
var inst_17819 = (state_17844[(2)]);
var state_17844__$1 = (function (){var statearr_17858 = state_17844;
(statearr_17858[(10)] = inst_17819);

return statearr_17858;
})();
var statearr_17859_17920 = state_17844__$1;
(statearr_17859_17920[(2)] = null);

(statearr_17859_17920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (9))){
var state_17844__$1 = state_17844;
var statearr_17860_17921 = state_17844__$1;
(statearr_17860_17921[(2)] = null);

(statearr_17860_17921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (5))){
var state_17844__$1 = state_17844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17861_17922 = state_17844__$1;
(statearr_17861_17922[(1)] = (8));

} else {
var statearr_17862_17923 = state_17844__$1;
(statearr_17862_17923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (14))){
var inst_17824 = (state_17844[(11)]);
var inst_17822 = (state_17844[(8)]);
var inst_17822__$1 = (state_17844[(2)]);
var inst_17823 = (inst_17822__$1 == null);
var inst_17824__$1 = cljs.core.not.call(null,inst_17823);
var state_17844__$1 = (function (){var statearr_17863 = state_17844;
(statearr_17863[(11)] = inst_17824__$1);

(statearr_17863[(8)] = inst_17822__$1);

return statearr_17863;
})();
if(inst_17824__$1){
var statearr_17864_17924 = state_17844__$1;
(statearr_17864_17924[(1)] = (15));

} else {
var statearr_17865_17925 = state_17844__$1;
(statearr_17865_17925[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (16))){
var inst_17824 = (state_17844[(11)]);
var state_17844__$1 = state_17844;
var statearr_17866_17926 = state_17844__$1;
(statearr_17866_17926[(2)] = inst_17824);

(statearr_17866_17926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (10))){
var inst_17816 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17867_17927 = state_17844__$1;
(statearr_17867_17927[(2)] = inst_17816);

(statearr_17867_17927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (18))){
var inst_17827 = (state_17844[(2)]);
var state_17844__$1 = state_17844;
var statearr_17868_17928 = state_17844__$1;
(statearr_17868_17928[(2)] = inst_17827);

(statearr_17868_17928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17845 === (8))){
var inst_17813 = cljs.core.async.close_BANG_.call(null,to);
var state_17844__$1 = state_17844;
var statearr_17869_17929 = state_17844__$1;
(statearr_17869_17929[(2)] = inst_17813);

(statearr_17869_17929[(1)] = (10));


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
var statearr_17870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__);

(statearr_17870[(1)] = (1));

return statearr_17870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1 = (function (state_17844){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_17844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e17871){if((e17871 instanceof Object)){
var ex__17468__auto__ = e17871;
var statearr_17872_17930 = state_17844;
(statearr_17872_17930[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17931 = state_17844;
state_17844 = G__17931;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__ = function(state_17844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1.call(this,state_17844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__,jobs,results,process,async))
})();
var state__17554__auto__ = (function (){var statearr_17873 = f__17553__auto__.call(null);
(statearr_17873[(6)] = c__17552__auto__);

return statearr_17873;
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
var G__17933 = arguments.length;
switch (G__17933) {
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
var G__17936 = arguments.length;
switch (G__17936) {
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
var G__17939 = arguments.length;
switch (G__17939) {
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
var c__17552__auto___17988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___17988,tc,fc){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___17988,tc,fc){
return (function (state_17965){
var state_val_17966 = (state_17965[(1)]);
if((state_val_17966 === (7))){
var inst_17961 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
var statearr_17967_17989 = state_17965__$1;
(statearr_17967_17989[(2)] = inst_17961);

(statearr_17967_17989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (1))){
var state_17965__$1 = state_17965;
var statearr_17968_17990 = state_17965__$1;
(statearr_17968_17990[(2)] = null);

(statearr_17968_17990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (4))){
var inst_17942 = (state_17965[(7)]);
var inst_17942__$1 = (state_17965[(2)]);
var inst_17943 = (inst_17942__$1 == null);
var state_17965__$1 = (function (){var statearr_17969 = state_17965;
(statearr_17969[(7)] = inst_17942__$1);

return statearr_17969;
})();
if(cljs.core.truth_(inst_17943)){
var statearr_17970_17991 = state_17965__$1;
(statearr_17970_17991[(1)] = (5));

} else {
var statearr_17971_17992 = state_17965__$1;
(statearr_17971_17992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (13))){
var state_17965__$1 = state_17965;
var statearr_17972_17993 = state_17965__$1;
(statearr_17972_17993[(2)] = null);

(statearr_17972_17993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (6))){
var inst_17942 = (state_17965[(7)]);
var inst_17948 = p.call(null,inst_17942);
var state_17965__$1 = state_17965;
if(cljs.core.truth_(inst_17948)){
var statearr_17973_17994 = state_17965__$1;
(statearr_17973_17994[(1)] = (9));

} else {
var statearr_17974_17995 = state_17965__$1;
(statearr_17974_17995[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (3))){
var inst_17963 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17965__$1,inst_17963);
} else {
if((state_val_17966 === (12))){
var state_17965__$1 = state_17965;
var statearr_17975_17996 = state_17965__$1;
(statearr_17975_17996[(2)] = null);

(statearr_17975_17996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (2))){
var state_17965__$1 = state_17965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17965__$1,(4),ch);
} else {
if((state_val_17966 === (11))){
var inst_17942 = (state_17965[(7)]);
var inst_17952 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17965__$1,(8),inst_17952,inst_17942);
} else {
if((state_val_17966 === (9))){
var state_17965__$1 = state_17965;
var statearr_17976_17997 = state_17965__$1;
(statearr_17976_17997[(2)] = tc);

(statearr_17976_17997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (5))){
var inst_17945 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17946 = cljs.core.async.close_BANG_.call(null,fc);
var state_17965__$1 = (function (){var statearr_17977 = state_17965;
(statearr_17977[(8)] = inst_17945);

return statearr_17977;
})();
var statearr_17978_17998 = state_17965__$1;
(statearr_17978_17998[(2)] = inst_17946);

(statearr_17978_17998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (14))){
var inst_17959 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
var statearr_17979_17999 = state_17965__$1;
(statearr_17979_17999[(2)] = inst_17959);

(statearr_17979_17999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (10))){
var state_17965__$1 = state_17965;
var statearr_17980_18000 = state_17965__$1;
(statearr_17980_18000[(2)] = fc);

(statearr_17980_18000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (8))){
var inst_17954 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
if(cljs.core.truth_(inst_17954)){
var statearr_17981_18001 = state_17965__$1;
(statearr_17981_18001[(1)] = (12));

} else {
var statearr_17982_18002 = state_17965__$1;
(statearr_17982_18002[(1)] = (13));

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
});})(c__17552__auto___17988,tc,fc))
;
return ((function (switch__17464__auto__,c__17552__auto___17988,tc,fc){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_17983 = [null,null,null,null,null,null,null,null,null];
(statearr_17983[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_17983[(1)] = (1));

return statearr_17983;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_17965){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_17965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e17984){if((e17984 instanceof Object)){
var ex__17468__auto__ = e17984;
var statearr_17985_18003 = state_17965;
(statearr_17985_18003[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18004 = state_17965;
state_17965 = G__18004;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_17965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_17965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___17988,tc,fc))
})();
var state__17554__auto__ = (function (){var statearr_17986 = f__17553__auto__.call(null);
(statearr_17986[(6)] = c__17552__auto___17988);

return statearr_17986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___17988,tc,fc))
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
return (function (state_18025){
var state_val_18026 = (state_18025[(1)]);
if((state_val_18026 === (7))){
var inst_18021 = (state_18025[(2)]);
var state_18025__$1 = state_18025;
var statearr_18027_18045 = state_18025__$1;
(statearr_18027_18045[(2)] = inst_18021);

(statearr_18027_18045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18026 === (1))){
var inst_18005 = init;
var state_18025__$1 = (function (){var statearr_18028 = state_18025;
(statearr_18028[(7)] = inst_18005);

return statearr_18028;
})();
var statearr_18029_18046 = state_18025__$1;
(statearr_18029_18046[(2)] = null);

(statearr_18029_18046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18026 === (4))){
var inst_18008 = (state_18025[(8)]);
var inst_18008__$1 = (state_18025[(2)]);
var inst_18009 = (inst_18008__$1 == null);
var state_18025__$1 = (function (){var statearr_18030 = state_18025;
(statearr_18030[(8)] = inst_18008__$1);

return statearr_18030;
})();
if(cljs.core.truth_(inst_18009)){
var statearr_18031_18047 = state_18025__$1;
(statearr_18031_18047[(1)] = (5));

} else {
var statearr_18032_18048 = state_18025__$1;
(statearr_18032_18048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18026 === (6))){
var inst_18008 = (state_18025[(8)]);
var inst_18005 = (state_18025[(7)]);
var inst_18012 = (state_18025[(9)]);
var inst_18012__$1 = f.call(null,inst_18005,inst_18008);
var inst_18013 = cljs.core.reduced_QMARK_.call(null,inst_18012__$1);
var state_18025__$1 = (function (){var statearr_18033 = state_18025;
(statearr_18033[(9)] = inst_18012__$1);

return statearr_18033;
})();
if(inst_18013){
var statearr_18034_18049 = state_18025__$1;
(statearr_18034_18049[(1)] = (8));

} else {
var statearr_18035_18050 = state_18025__$1;
(statearr_18035_18050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18026 === (3))){
var inst_18023 = (state_18025[(2)]);
var state_18025__$1 = state_18025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18025__$1,inst_18023);
} else {
if((state_val_18026 === (2))){
var state_18025__$1 = state_18025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18025__$1,(4),ch);
} else {
if((state_val_18026 === (9))){
var inst_18012 = (state_18025[(9)]);
var inst_18005 = inst_18012;
var state_18025__$1 = (function (){var statearr_18036 = state_18025;
(statearr_18036[(7)] = inst_18005);

return statearr_18036;
})();
var statearr_18037_18051 = state_18025__$1;
(statearr_18037_18051[(2)] = null);

(statearr_18037_18051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18026 === (5))){
var inst_18005 = (state_18025[(7)]);
var state_18025__$1 = state_18025;
var statearr_18038_18052 = state_18025__$1;
(statearr_18038_18052[(2)] = inst_18005);

(statearr_18038_18052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18026 === (10))){
var inst_18019 = (state_18025[(2)]);
var state_18025__$1 = state_18025;
var statearr_18039_18053 = state_18025__$1;
(statearr_18039_18053[(2)] = inst_18019);

(statearr_18039_18053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18026 === (8))){
var inst_18012 = (state_18025[(9)]);
var inst_18015 = cljs.core.deref.call(null,inst_18012);
var state_18025__$1 = state_18025;
var statearr_18040_18054 = state_18025__$1;
(statearr_18040_18054[(2)] = inst_18015);

(statearr_18040_18054[(1)] = (10));


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
var statearr_18041 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18041[(0)] = cljs$core$async$reduce_$_state_machine__17465__auto__);

(statearr_18041[(1)] = (1));

return statearr_18041;
});
var cljs$core$async$reduce_$_state_machine__17465__auto____1 = (function (state_18025){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_18025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e18042){if((e18042 instanceof Object)){
var ex__17468__auto__ = e18042;
var statearr_18043_18055 = state_18025;
(statearr_18043_18055[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18056 = state_18025;
state_18025 = G__18056;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17465__auto__ = function(state_18025){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17465__auto____1.call(this,state_18025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17465__auto____0;
cljs$core$async$reduce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17465__auto____1;
return cljs$core$async$reduce_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__))
})();
var state__17554__auto__ = (function (){var statearr_18044 = f__17553__auto__.call(null);
(statearr_18044[(6)] = c__17552__auto__);

return statearr_18044;
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
return (function (state_18062){
var state_val_18063 = (state_18062[(1)]);
if((state_val_18063 === (1))){
var inst_18057 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18062__$1 = state_18062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18062__$1,(2),inst_18057);
} else {
if((state_val_18063 === (2))){
var inst_18059 = (state_18062[(2)]);
var inst_18060 = f__$1.call(null,inst_18059);
var state_18062__$1 = state_18062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18062__$1,inst_18060);
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
var statearr_18064 = [null,null,null,null,null,null,null];
(statearr_18064[(0)] = cljs$core$async$transduce_$_state_machine__17465__auto__);

(statearr_18064[(1)] = (1));

return statearr_18064;
});
var cljs$core$async$transduce_$_state_machine__17465__auto____1 = (function (state_18062){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_18062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e18065){if((e18065 instanceof Object)){
var ex__17468__auto__ = e18065;
var statearr_18066_18068 = state_18062;
(statearr_18066_18068[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18069 = state_18062;
state_18062 = G__18069;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17465__auto__ = function(state_18062){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17465__auto____1.call(this,state_18062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17465__auto____0;
cljs$core$async$transduce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17465__auto____1;
return cljs$core$async$transduce_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__,f__$1))
})();
var state__17554__auto__ = (function (){var statearr_18067 = f__17553__auto__.call(null);
(statearr_18067[(6)] = c__17552__auto__);

return statearr_18067;
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
var G__18071 = arguments.length;
switch (G__18071) {
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
return (function (state_18096){
var state_val_18097 = (state_18096[(1)]);
if((state_val_18097 === (7))){
var inst_18078 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18098_18119 = state_18096__$1;
(statearr_18098_18119[(2)] = inst_18078);

(statearr_18098_18119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (1))){
var inst_18072 = cljs.core.seq.call(null,coll);
var inst_18073 = inst_18072;
var state_18096__$1 = (function (){var statearr_18099 = state_18096;
(statearr_18099[(7)] = inst_18073);

return statearr_18099;
})();
var statearr_18100_18120 = state_18096__$1;
(statearr_18100_18120[(2)] = null);

(statearr_18100_18120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (4))){
var inst_18073 = (state_18096[(7)]);
var inst_18076 = cljs.core.first.call(null,inst_18073);
var state_18096__$1 = state_18096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18096__$1,(7),ch,inst_18076);
} else {
if((state_val_18097 === (13))){
var inst_18090 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18101_18121 = state_18096__$1;
(statearr_18101_18121[(2)] = inst_18090);

(statearr_18101_18121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (6))){
var inst_18081 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
if(cljs.core.truth_(inst_18081)){
var statearr_18102_18122 = state_18096__$1;
(statearr_18102_18122[(1)] = (8));

} else {
var statearr_18103_18123 = state_18096__$1;
(statearr_18103_18123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (3))){
var inst_18094 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18096__$1,inst_18094);
} else {
if((state_val_18097 === (12))){
var state_18096__$1 = state_18096;
var statearr_18104_18124 = state_18096__$1;
(statearr_18104_18124[(2)] = null);

(statearr_18104_18124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (2))){
var inst_18073 = (state_18096[(7)]);
var state_18096__$1 = state_18096;
if(cljs.core.truth_(inst_18073)){
var statearr_18105_18125 = state_18096__$1;
(statearr_18105_18125[(1)] = (4));

} else {
var statearr_18106_18126 = state_18096__$1;
(statearr_18106_18126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (11))){
var inst_18087 = cljs.core.async.close_BANG_.call(null,ch);
var state_18096__$1 = state_18096;
var statearr_18107_18127 = state_18096__$1;
(statearr_18107_18127[(2)] = inst_18087);

(statearr_18107_18127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (9))){
var state_18096__$1 = state_18096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18108_18128 = state_18096__$1;
(statearr_18108_18128[(1)] = (11));

} else {
var statearr_18109_18129 = state_18096__$1;
(statearr_18109_18129[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (5))){
var inst_18073 = (state_18096[(7)]);
var state_18096__$1 = state_18096;
var statearr_18110_18130 = state_18096__$1;
(statearr_18110_18130[(2)] = inst_18073);

(statearr_18110_18130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (10))){
var inst_18092 = (state_18096[(2)]);
var state_18096__$1 = state_18096;
var statearr_18111_18131 = state_18096__$1;
(statearr_18111_18131[(2)] = inst_18092);

(statearr_18111_18131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18097 === (8))){
var inst_18073 = (state_18096[(7)]);
var inst_18083 = cljs.core.next.call(null,inst_18073);
var inst_18073__$1 = inst_18083;
var state_18096__$1 = (function (){var statearr_18112 = state_18096;
(statearr_18112[(7)] = inst_18073__$1);

return statearr_18112;
})();
var statearr_18113_18132 = state_18096__$1;
(statearr_18113_18132[(2)] = null);

(statearr_18113_18132[(1)] = (2));


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
var statearr_18114 = [null,null,null,null,null,null,null,null];
(statearr_18114[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_18114[(1)] = (1));

return statearr_18114;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_18096){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_18096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e18115){if((e18115 instanceof Object)){
var ex__17468__auto__ = e18115;
var statearr_18116_18133 = state_18096;
(statearr_18116_18133[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18134 = state_18096;
state_18096 = G__18134;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_18096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_18096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__))
})();
var state__17554__auto__ = (function (){var statearr_18117 = f__17553__auto__.call(null);
(statearr_18117[(6)] = c__17552__auto__);

return statearr_18117;
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
if(typeof cljs.core.async.t_cljs$core$async18135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18135 = (function (ch,cs,meta18136){
this.ch = ch;
this.cs = cs;
this.meta18136 = meta18136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18137,meta18136__$1){
var self__ = this;
var _18137__$1 = this;
return (new cljs.core.async.t_cljs$core$async18135(self__.ch,self__.cs,meta18136__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18135.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18137){
var self__ = this;
var _18137__$1 = this;
return self__.meta18136;
});})(cs))
;

cljs.core.async.t_cljs$core$async18135.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18135.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18135.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18135.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18135.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18135.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18136","meta18136",-387219177,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18135";

cljs.core.async.t_cljs$core$async18135.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async18135");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18135 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18135(ch__$1,cs__$1,meta18136){
return (new cljs.core.async.t_cljs$core$async18135(ch__$1,cs__$1,meta18136));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18135(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17552__auto___18357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___18357,cs,m,dchan,dctr,done){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___18357,cs,m,dchan,dctr,done){
return (function (state_18272){
var state_val_18273 = (state_18272[(1)]);
if((state_val_18273 === (7))){
var inst_18268 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
var statearr_18274_18358 = state_18272__$1;
(statearr_18274_18358[(2)] = inst_18268);

(statearr_18274_18358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (20))){
var inst_18171 = (state_18272[(7)]);
var inst_18183 = cljs.core.first.call(null,inst_18171);
var inst_18184 = cljs.core.nth.call(null,inst_18183,(0),null);
var inst_18185 = cljs.core.nth.call(null,inst_18183,(1),null);
var state_18272__$1 = (function (){var statearr_18275 = state_18272;
(statearr_18275[(8)] = inst_18184);

return statearr_18275;
})();
if(cljs.core.truth_(inst_18185)){
var statearr_18276_18359 = state_18272__$1;
(statearr_18276_18359[(1)] = (22));

} else {
var statearr_18277_18360 = state_18272__$1;
(statearr_18277_18360[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (27))){
var inst_18220 = (state_18272[(9)]);
var inst_18213 = (state_18272[(10)]);
var inst_18140 = (state_18272[(11)]);
var inst_18215 = (state_18272[(12)]);
var inst_18220__$1 = cljs.core._nth.call(null,inst_18213,inst_18215);
var inst_18221 = cljs.core.async.put_BANG_.call(null,inst_18220__$1,inst_18140,done);
var state_18272__$1 = (function (){var statearr_18278 = state_18272;
(statearr_18278[(9)] = inst_18220__$1);

return statearr_18278;
})();
if(cljs.core.truth_(inst_18221)){
var statearr_18279_18361 = state_18272__$1;
(statearr_18279_18361[(1)] = (30));

} else {
var statearr_18280_18362 = state_18272__$1;
(statearr_18280_18362[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (1))){
var state_18272__$1 = state_18272;
var statearr_18281_18363 = state_18272__$1;
(statearr_18281_18363[(2)] = null);

(statearr_18281_18363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (24))){
var inst_18171 = (state_18272[(7)]);
var inst_18190 = (state_18272[(2)]);
var inst_18191 = cljs.core.next.call(null,inst_18171);
var inst_18149 = inst_18191;
var inst_18150 = null;
var inst_18151 = (0);
var inst_18152 = (0);
var state_18272__$1 = (function (){var statearr_18282 = state_18272;
(statearr_18282[(13)] = inst_18151);

(statearr_18282[(14)] = inst_18150);

(statearr_18282[(15)] = inst_18152);

(statearr_18282[(16)] = inst_18149);

(statearr_18282[(17)] = inst_18190);

return statearr_18282;
})();
var statearr_18283_18364 = state_18272__$1;
(statearr_18283_18364[(2)] = null);

(statearr_18283_18364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (39))){
var state_18272__$1 = state_18272;
var statearr_18287_18365 = state_18272__$1;
(statearr_18287_18365[(2)] = null);

(statearr_18287_18365[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (4))){
var inst_18140 = (state_18272[(11)]);
var inst_18140__$1 = (state_18272[(2)]);
var inst_18141 = (inst_18140__$1 == null);
var state_18272__$1 = (function (){var statearr_18288 = state_18272;
(statearr_18288[(11)] = inst_18140__$1);

return statearr_18288;
})();
if(cljs.core.truth_(inst_18141)){
var statearr_18289_18366 = state_18272__$1;
(statearr_18289_18366[(1)] = (5));

} else {
var statearr_18290_18367 = state_18272__$1;
(statearr_18290_18367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (15))){
var inst_18151 = (state_18272[(13)]);
var inst_18150 = (state_18272[(14)]);
var inst_18152 = (state_18272[(15)]);
var inst_18149 = (state_18272[(16)]);
var inst_18167 = (state_18272[(2)]);
var inst_18168 = (inst_18152 + (1));
var tmp18284 = inst_18151;
var tmp18285 = inst_18150;
var tmp18286 = inst_18149;
var inst_18149__$1 = tmp18286;
var inst_18150__$1 = tmp18285;
var inst_18151__$1 = tmp18284;
var inst_18152__$1 = inst_18168;
var state_18272__$1 = (function (){var statearr_18291 = state_18272;
(statearr_18291[(13)] = inst_18151__$1);

(statearr_18291[(14)] = inst_18150__$1);

(statearr_18291[(15)] = inst_18152__$1);

(statearr_18291[(18)] = inst_18167);

(statearr_18291[(16)] = inst_18149__$1);

return statearr_18291;
})();
var statearr_18292_18368 = state_18272__$1;
(statearr_18292_18368[(2)] = null);

(statearr_18292_18368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (21))){
var inst_18194 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
var statearr_18296_18369 = state_18272__$1;
(statearr_18296_18369[(2)] = inst_18194);

(statearr_18296_18369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (31))){
var inst_18220 = (state_18272[(9)]);
var inst_18224 = done.call(null,null);
var inst_18225 = cljs.core.async.untap_STAR_.call(null,m,inst_18220);
var state_18272__$1 = (function (){var statearr_18297 = state_18272;
(statearr_18297[(19)] = inst_18224);

return statearr_18297;
})();
var statearr_18298_18370 = state_18272__$1;
(statearr_18298_18370[(2)] = inst_18225);

(statearr_18298_18370[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (32))){
var inst_18212 = (state_18272[(20)]);
var inst_18213 = (state_18272[(10)]);
var inst_18214 = (state_18272[(21)]);
var inst_18215 = (state_18272[(12)]);
var inst_18227 = (state_18272[(2)]);
var inst_18228 = (inst_18215 + (1));
var tmp18293 = inst_18212;
var tmp18294 = inst_18213;
var tmp18295 = inst_18214;
var inst_18212__$1 = tmp18293;
var inst_18213__$1 = tmp18294;
var inst_18214__$1 = tmp18295;
var inst_18215__$1 = inst_18228;
var state_18272__$1 = (function (){var statearr_18299 = state_18272;
(statearr_18299[(20)] = inst_18212__$1);

(statearr_18299[(10)] = inst_18213__$1);

(statearr_18299[(21)] = inst_18214__$1);

(statearr_18299[(12)] = inst_18215__$1);

(statearr_18299[(22)] = inst_18227);

return statearr_18299;
})();
var statearr_18300_18371 = state_18272__$1;
(statearr_18300_18371[(2)] = null);

(statearr_18300_18371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (40))){
var inst_18240 = (state_18272[(23)]);
var inst_18244 = done.call(null,null);
var inst_18245 = cljs.core.async.untap_STAR_.call(null,m,inst_18240);
var state_18272__$1 = (function (){var statearr_18301 = state_18272;
(statearr_18301[(24)] = inst_18244);

return statearr_18301;
})();
var statearr_18302_18372 = state_18272__$1;
(statearr_18302_18372[(2)] = inst_18245);

(statearr_18302_18372[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (33))){
var inst_18231 = (state_18272[(25)]);
var inst_18233 = cljs.core.chunked_seq_QMARK_.call(null,inst_18231);
var state_18272__$1 = state_18272;
if(inst_18233){
var statearr_18303_18373 = state_18272__$1;
(statearr_18303_18373[(1)] = (36));

} else {
var statearr_18304_18374 = state_18272__$1;
(statearr_18304_18374[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (13))){
var inst_18161 = (state_18272[(26)]);
var inst_18164 = cljs.core.async.close_BANG_.call(null,inst_18161);
var state_18272__$1 = state_18272;
var statearr_18305_18375 = state_18272__$1;
(statearr_18305_18375[(2)] = inst_18164);

(statearr_18305_18375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (22))){
var inst_18184 = (state_18272[(8)]);
var inst_18187 = cljs.core.async.close_BANG_.call(null,inst_18184);
var state_18272__$1 = state_18272;
var statearr_18306_18376 = state_18272__$1;
(statearr_18306_18376[(2)] = inst_18187);

(statearr_18306_18376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (36))){
var inst_18231 = (state_18272[(25)]);
var inst_18235 = cljs.core.chunk_first.call(null,inst_18231);
var inst_18236 = cljs.core.chunk_rest.call(null,inst_18231);
var inst_18237 = cljs.core.count.call(null,inst_18235);
var inst_18212 = inst_18236;
var inst_18213 = inst_18235;
var inst_18214 = inst_18237;
var inst_18215 = (0);
var state_18272__$1 = (function (){var statearr_18307 = state_18272;
(statearr_18307[(20)] = inst_18212);

(statearr_18307[(10)] = inst_18213);

(statearr_18307[(21)] = inst_18214);

(statearr_18307[(12)] = inst_18215);

return statearr_18307;
})();
var statearr_18308_18377 = state_18272__$1;
(statearr_18308_18377[(2)] = null);

(statearr_18308_18377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (41))){
var inst_18231 = (state_18272[(25)]);
var inst_18247 = (state_18272[(2)]);
var inst_18248 = cljs.core.next.call(null,inst_18231);
var inst_18212 = inst_18248;
var inst_18213 = null;
var inst_18214 = (0);
var inst_18215 = (0);
var state_18272__$1 = (function (){var statearr_18309 = state_18272;
(statearr_18309[(20)] = inst_18212);

(statearr_18309[(10)] = inst_18213);

(statearr_18309[(27)] = inst_18247);

(statearr_18309[(21)] = inst_18214);

(statearr_18309[(12)] = inst_18215);

return statearr_18309;
})();
var statearr_18310_18378 = state_18272__$1;
(statearr_18310_18378[(2)] = null);

(statearr_18310_18378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (43))){
var state_18272__$1 = state_18272;
var statearr_18311_18379 = state_18272__$1;
(statearr_18311_18379[(2)] = null);

(statearr_18311_18379[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (29))){
var inst_18256 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
var statearr_18312_18380 = state_18272__$1;
(statearr_18312_18380[(2)] = inst_18256);

(statearr_18312_18380[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (44))){
var inst_18265 = (state_18272[(2)]);
var state_18272__$1 = (function (){var statearr_18313 = state_18272;
(statearr_18313[(28)] = inst_18265);

return statearr_18313;
})();
var statearr_18314_18381 = state_18272__$1;
(statearr_18314_18381[(2)] = null);

(statearr_18314_18381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (6))){
var inst_18204 = (state_18272[(29)]);
var inst_18203 = cljs.core.deref.call(null,cs);
var inst_18204__$1 = cljs.core.keys.call(null,inst_18203);
var inst_18205 = cljs.core.count.call(null,inst_18204__$1);
var inst_18206 = cljs.core.reset_BANG_.call(null,dctr,inst_18205);
var inst_18211 = cljs.core.seq.call(null,inst_18204__$1);
var inst_18212 = inst_18211;
var inst_18213 = null;
var inst_18214 = (0);
var inst_18215 = (0);
var state_18272__$1 = (function (){var statearr_18315 = state_18272;
(statearr_18315[(29)] = inst_18204__$1);

(statearr_18315[(20)] = inst_18212);

(statearr_18315[(10)] = inst_18213);

(statearr_18315[(30)] = inst_18206);

(statearr_18315[(21)] = inst_18214);

(statearr_18315[(12)] = inst_18215);

return statearr_18315;
})();
var statearr_18316_18382 = state_18272__$1;
(statearr_18316_18382[(2)] = null);

(statearr_18316_18382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (28))){
var inst_18212 = (state_18272[(20)]);
var inst_18231 = (state_18272[(25)]);
var inst_18231__$1 = cljs.core.seq.call(null,inst_18212);
var state_18272__$1 = (function (){var statearr_18317 = state_18272;
(statearr_18317[(25)] = inst_18231__$1);

return statearr_18317;
})();
if(inst_18231__$1){
var statearr_18318_18383 = state_18272__$1;
(statearr_18318_18383[(1)] = (33));

} else {
var statearr_18319_18384 = state_18272__$1;
(statearr_18319_18384[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (25))){
var inst_18214 = (state_18272[(21)]);
var inst_18215 = (state_18272[(12)]);
var inst_18217 = (inst_18215 < inst_18214);
var inst_18218 = inst_18217;
var state_18272__$1 = state_18272;
if(cljs.core.truth_(inst_18218)){
var statearr_18320_18385 = state_18272__$1;
(statearr_18320_18385[(1)] = (27));

} else {
var statearr_18321_18386 = state_18272__$1;
(statearr_18321_18386[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (34))){
var state_18272__$1 = state_18272;
var statearr_18322_18387 = state_18272__$1;
(statearr_18322_18387[(2)] = null);

(statearr_18322_18387[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (17))){
var state_18272__$1 = state_18272;
var statearr_18323_18388 = state_18272__$1;
(statearr_18323_18388[(2)] = null);

(statearr_18323_18388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (3))){
var inst_18270 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18272__$1,inst_18270);
} else {
if((state_val_18273 === (12))){
var inst_18199 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
var statearr_18324_18389 = state_18272__$1;
(statearr_18324_18389[(2)] = inst_18199);

(statearr_18324_18389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (2))){
var state_18272__$1 = state_18272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18272__$1,(4),ch);
} else {
if((state_val_18273 === (23))){
var state_18272__$1 = state_18272;
var statearr_18325_18390 = state_18272__$1;
(statearr_18325_18390[(2)] = null);

(statearr_18325_18390[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (35))){
var inst_18254 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
var statearr_18326_18391 = state_18272__$1;
(statearr_18326_18391[(2)] = inst_18254);

(statearr_18326_18391[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (19))){
var inst_18171 = (state_18272[(7)]);
var inst_18175 = cljs.core.chunk_first.call(null,inst_18171);
var inst_18176 = cljs.core.chunk_rest.call(null,inst_18171);
var inst_18177 = cljs.core.count.call(null,inst_18175);
var inst_18149 = inst_18176;
var inst_18150 = inst_18175;
var inst_18151 = inst_18177;
var inst_18152 = (0);
var state_18272__$1 = (function (){var statearr_18327 = state_18272;
(statearr_18327[(13)] = inst_18151);

(statearr_18327[(14)] = inst_18150);

(statearr_18327[(15)] = inst_18152);

(statearr_18327[(16)] = inst_18149);

return statearr_18327;
})();
var statearr_18328_18392 = state_18272__$1;
(statearr_18328_18392[(2)] = null);

(statearr_18328_18392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (11))){
var inst_18171 = (state_18272[(7)]);
var inst_18149 = (state_18272[(16)]);
var inst_18171__$1 = cljs.core.seq.call(null,inst_18149);
var state_18272__$1 = (function (){var statearr_18329 = state_18272;
(statearr_18329[(7)] = inst_18171__$1);

return statearr_18329;
})();
if(inst_18171__$1){
var statearr_18330_18393 = state_18272__$1;
(statearr_18330_18393[(1)] = (16));

} else {
var statearr_18331_18394 = state_18272__$1;
(statearr_18331_18394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (9))){
var inst_18201 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
var statearr_18332_18395 = state_18272__$1;
(statearr_18332_18395[(2)] = inst_18201);

(statearr_18332_18395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (5))){
var inst_18147 = cljs.core.deref.call(null,cs);
var inst_18148 = cljs.core.seq.call(null,inst_18147);
var inst_18149 = inst_18148;
var inst_18150 = null;
var inst_18151 = (0);
var inst_18152 = (0);
var state_18272__$1 = (function (){var statearr_18333 = state_18272;
(statearr_18333[(13)] = inst_18151);

(statearr_18333[(14)] = inst_18150);

(statearr_18333[(15)] = inst_18152);

(statearr_18333[(16)] = inst_18149);

return statearr_18333;
})();
var statearr_18334_18396 = state_18272__$1;
(statearr_18334_18396[(2)] = null);

(statearr_18334_18396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (14))){
var state_18272__$1 = state_18272;
var statearr_18335_18397 = state_18272__$1;
(statearr_18335_18397[(2)] = null);

(statearr_18335_18397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (45))){
var inst_18262 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
var statearr_18336_18398 = state_18272__$1;
(statearr_18336_18398[(2)] = inst_18262);

(statearr_18336_18398[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (26))){
var inst_18204 = (state_18272[(29)]);
var inst_18258 = (state_18272[(2)]);
var inst_18259 = cljs.core.seq.call(null,inst_18204);
var state_18272__$1 = (function (){var statearr_18337 = state_18272;
(statearr_18337[(31)] = inst_18258);

return statearr_18337;
})();
if(inst_18259){
var statearr_18338_18399 = state_18272__$1;
(statearr_18338_18399[(1)] = (42));

} else {
var statearr_18339_18400 = state_18272__$1;
(statearr_18339_18400[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (16))){
var inst_18171 = (state_18272[(7)]);
var inst_18173 = cljs.core.chunked_seq_QMARK_.call(null,inst_18171);
var state_18272__$1 = state_18272;
if(inst_18173){
var statearr_18340_18401 = state_18272__$1;
(statearr_18340_18401[(1)] = (19));

} else {
var statearr_18341_18402 = state_18272__$1;
(statearr_18341_18402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (38))){
var inst_18251 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
var statearr_18342_18403 = state_18272__$1;
(statearr_18342_18403[(2)] = inst_18251);

(statearr_18342_18403[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (30))){
var state_18272__$1 = state_18272;
var statearr_18343_18404 = state_18272__$1;
(statearr_18343_18404[(2)] = null);

(statearr_18343_18404[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (10))){
var inst_18150 = (state_18272[(14)]);
var inst_18152 = (state_18272[(15)]);
var inst_18160 = cljs.core._nth.call(null,inst_18150,inst_18152);
var inst_18161 = cljs.core.nth.call(null,inst_18160,(0),null);
var inst_18162 = cljs.core.nth.call(null,inst_18160,(1),null);
var state_18272__$1 = (function (){var statearr_18344 = state_18272;
(statearr_18344[(26)] = inst_18161);

return statearr_18344;
})();
if(cljs.core.truth_(inst_18162)){
var statearr_18345_18405 = state_18272__$1;
(statearr_18345_18405[(1)] = (13));

} else {
var statearr_18346_18406 = state_18272__$1;
(statearr_18346_18406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (18))){
var inst_18197 = (state_18272[(2)]);
var state_18272__$1 = state_18272;
var statearr_18347_18407 = state_18272__$1;
(statearr_18347_18407[(2)] = inst_18197);

(statearr_18347_18407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (42))){
var state_18272__$1 = state_18272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18272__$1,(45),dchan);
} else {
if((state_val_18273 === (37))){
var inst_18240 = (state_18272[(23)]);
var inst_18231 = (state_18272[(25)]);
var inst_18140 = (state_18272[(11)]);
var inst_18240__$1 = cljs.core.first.call(null,inst_18231);
var inst_18241 = cljs.core.async.put_BANG_.call(null,inst_18240__$1,inst_18140,done);
var state_18272__$1 = (function (){var statearr_18348 = state_18272;
(statearr_18348[(23)] = inst_18240__$1);

return statearr_18348;
})();
if(cljs.core.truth_(inst_18241)){
var statearr_18349_18408 = state_18272__$1;
(statearr_18349_18408[(1)] = (39));

} else {
var statearr_18350_18409 = state_18272__$1;
(statearr_18350_18409[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18273 === (8))){
var inst_18151 = (state_18272[(13)]);
var inst_18152 = (state_18272[(15)]);
var inst_18154 = (inst_18152 < inst_18151);
var inst_18155 = inst_18154;
var state_18272__$1 = state_18272;
if(cljs.core.truth_(inst_18155)){
var statearr_18351_18410 = state_18272__$1;
(statearr_18351_18410[(1)] = (10));

} else {
var statearr_18352_18411 = state_18272__$1;
(statearr_18352_18411[(1)] = (11));

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
});})(c__17552__auto___18357,cs,m,dchan,dctr,done))
;
return ((function (switch__17464__auto__,c__17552__auto___18357,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17465__auto__ = null;
var cljs$core$async$mult_$_state_machine__17465__auto____0 = (function (){
var statearr_18353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18353[(0)] = cljs$core$async$mult_$_state_machine__17465__auto__);

(statearr_18353[(1)] = (1));

return statearr_18353;
});
var cljs$core$async$mult_$_state_machine__17465__auto____1 = (function (state_18272){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_18272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e18354){if((e18354 instanceof Object)){
var ex__17468__auto__ = e18354;
var statearr_18355_18412 = state_18272;
(statearr_18355_18412[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18413 = state_18272;
state_18272 = G__18413;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17465__auto__ = function(state_18272){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17465__auto____1.call(this,state_18272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17465__auto____0;
cljs$core$async$mult_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17465__auto____1;
return cljs$core$async$mult_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___18357,cs,m,dchan,dctr,done))
})();
var state__17554__auto__ = (function (){var statearr_18356 = f__17553__auto__.call(null);
(statearr_18356[(6)] = c__17552__auto___18357);

return statearr_18356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___18357,cs,m,dchan,dctr,done))
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
var G__18415 = arguments.length;
switch (G__18415) {
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
var len__8839__auto___18427 = arguments.length;
var i__8840__auto___18428 = (0);
while(true){
if((i__8840__auto___18428 < len__8839__auto___18427)){
args__8846__auto__.push((arguments[i__8840__auto___18428]));

var G__18429 = (i__8840__auto___18428 + (1));
i__8840__auto___18428 = G__18429;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((3) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8847__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18421){
var map__18422 = p__18421;
var map__18422__$1 = ((((!((map__18422 == null)))?((((map__18422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18422):map__18422);
var opts = map__18422__$1;
var statearr_18424_18430 = state;
(statearr_18424_18430[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__18422,map__18422__$1,opts){
return (function (val){
var statearr_18425_18431 = state;
(statearr_18425_18431[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18422,map__18422__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_18426_18432 = state;
(statearr_18426_18432[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18417){
var G__18418 = cljs.core.first.call(null,seq18417);
var seq18417__$1 = cljs.core.next.call(null,seq18417);
var G__18419 = cljs.core.first.call(null,seq18417__$1);
var seq18417__$2 = cljs.core.next.call(null,seq18417__$1);
var G__18420 = cljs.core.first.call(null,seq18417__$2);
var seq18417__$3 = cljs.core.next.call(null,seq18417__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18418,G__18419,G__18420,seq18417__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18433 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18434){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18434 = meta18434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18435,meta18434__$1){
var self__ = this;
var _18435__$1 = this;
return (new cljs.core.async.t_cljs$core$async18433(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18434__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18435){
var self__ = this;
var _18435__$1 = this;
return self__.meta18434;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18433.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta18434","meta18434",360097177,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18433";

cljs.core.async.t_cljs$core$async18433.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async18433");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18433 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18433(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18434){
return (new cljs.core.async.t_cljs$core$async18433(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18434));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18433(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17552__auto___18597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18537){
var state_val_18538 = (state_18537[(1)]);
if((state_val_18538 === (7))){
var inst_18452 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18539_18598 = state_18537__$1;
(statearr_18539_18598[(2)] = inst_18452);

(statearr_18539_18598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (20))){
var inst_18464 = (state_18537[(7)]);
var state_18537__$1 = state_18537;
var statearr_18540_18599 = state_18537__$1;
(statearr_18540_18599[(2)] = inst_18464);

(statearr_18540_18599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (27))){
var state_18537__$1 = state_18537;
var statearr_18541_18600 = state_18537__$1;
(statearr_18541_18600[(2)] = null);

(statearr_18541_18600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (1))){
var inst_18439 = (state_18537[(8)]);
var inst_18439__$1 = calc_state.call(null);
var inst_18441 = (inst_18439__$1 == null);
var inst_18442 = cljs.core.not.call(null,inst_18441);
var state_18537__$1 = (function (){var statearr_18542 = state_18537;
(statearr_18542[(8)] = inst_18439__$1);

return statearr_18542;
})();
if(inst_18442){
var statearr_18543_18601 = state_18537__$1;
(statearr_18543_18601[(1)] = (2));

} else {
var statearr_18544_18602 = state_18537__$1;
(statearr_18544_18602[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (24))){
var inst_18511 = (state_18537[(9)]);
var inst_18488 = (state_18537[(10)]);
var inst_18497 = (state_18537[(11)]);
var inst_18511__$1 = inst_18488.call(null,inst_18497);
var state_18537__$1 = (function (){var statearr_18545 = state_18537;
(statearr_18545[(9)] = inst_18511__$1);

return statearr_18545;
})();
if(cljs.core.truth_(inst_18511__$1)){
var statearr_18546_18603 = state_18537__$1;
(statearr_18546_18603[(1)] = (29));

} else {
var statearr_18547_18604 = state_18537__$1;
(statearr_18547_18604[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (4))){
var inst_18455 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18455)){
var statearr_18548_18605 = state_18537__$1;
(statearr_18548_18605[(1)] = (8));

} else {
var statearr_18549_18606 = state_18537__$1;
(statearr_18549_18606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (15))){
var inst_18482 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18482)){
var statearr_18550_18607 = state_18537__$1;
(statearr_18550_18607[(1)] = (19));

} else {
var statearr_18551_18608 = state_18537__$1;
(statearr_18551_18608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (21))){
var inst_18487 = (state_18537[(12)]);
var inst_18487__$1 = (state_18537[(2)]);
var inst_18488 = cljs.core.get.call(null,inst_18487__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18489 = cljs.core.get.call(null,inst_18487__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18490 = cljs.core.get.call(null,inst_18487__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18537__$1 = (function (){var statearr_18552 = state_18537;
(statearr_18552[(12)] = inst_18487__$1);

(statearr_18552[(13)] = inst_18489);

(statearr_18552[(10)] = inst_18488);

return statearr_18552;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18537__$1,(22),inst_18490);
} else {
if((state_val_18538 === (31))){
var inst_18519 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18519)){
var statearr_18553_18609 = state_18537__$1;
(statearr_18553_18609[(1)] = (32));

} else {
var statearr_18554_18610 = state_18537__$1;
(statearr_18554_18610[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (32))){
var inst_18496 = (state_18537[(14)]);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18537__$1,(35),out,inst_18496);
} else {
if((state_val_18538 === (33))){
var inst_18487 = (state_18537[(12)]);
var inst_18464 = inst_18487;
var state_18537__$1 = (function (){var statearr_18555 = state_18537;
(statearr_18555[(7)] = inst_18464);

return statearr_18555;
})();
var statearr_18556_18611 = state_18537__$1;
(statearr_18556_18611[(2)] = null);

(statearr_18556_18611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (13))){
var inst_18464 = (state_18537[(7)]);
var inst_18471 = inst_18464.cljs$lang$protocol_mask$partition0$;
var inst_18472 = (inst_18471 & (64));
var inst_18473 = inst_18464.cljs$core$ISeq$;
var inst_18474 = (cljs.core.PROTOCOL_SENTINEL === inst_18473);
var inst_18475 = (inst_18472) || (inst_18474);
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18475)){
var statearr_18557_18612 = state_18537__$1;
(statearr_18557_18612[(1)] = (16));

} else {
var statearr_18558_18613 = state_18537__$1;
(statearr_18558_18613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (22))){
var inst_18497 = (state_18537[(11)]);
var inst_18496 = (state_18537[(14)]);
var inst_18495 = (state_18537[(2)]);
var inst_18496__$1 = cljs.core.nth.call(null,inst_18495,(0),null);
var inst_18497__$1 = cljs.core.nth.call(null,inst_18495,(1),null);
var inst_18498 = (inst_18496__$1 == null);
var inst_18499 = cljs.core._EQ_.call(null,inst_18497__$1,change);
var inst_18500 = (inst_18498) || (inst_18499);
var state_18537__$1 = (function (){var statearr_18559 = state_18537;
(statearr_18559[(11)] = inst_18497__$1);

(statearr_18559[(14)] = inst_18496__$1);

return statearr_18559;
})();
if(cljs.core.truth_(inst_18500)){
var statearr_18560_18614 = state_18537__$1;
(statearr_18560_18614[(1)] = (23));

} else {
var statearr_18561_18615 = state_18537__$1;
(statearr_18561_18615[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (36))){
var inst_18487 = (state_18537[(12)]);
var inst_18464 = inst_18487;
var state_18537__$1 = (function (){var statearr_18562 = state_18537;
(statearr_18562[(7)] = inst_18464);

return statearr_18562;
})();
var statearr_18563_18616 = state_18537__$1;
(statearr_18563_18616[(2)] = null);

(statearr_18563_18616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (29))){
var inst_18511 = (state_18537[(9)]);
var state_18537__$1 = state_18537;
var statearr_18564_18617 = state_18537__$1;
(statearr_18564_18617[(2)] = inst_18511);

(statearr_18564_18617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (6))){
var state_18537__$1 = state_18537;
var statearr_18565_18618 = state_18537__$1;
(statearr_18565_18618[(2)] = false);

(statearr_18565_18618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (28))){
var inst_18507 = (state_18537[(2)]);
var inst_18508 = calc_state.call(null);
var inst_18464 = inst_18508;
var state_18537__$1 = (function (){var statearr_18566 = state_18537;
(statearr_18566[(15)] = inst_18507);

(statearr_18566[(7)] = inst_18464);

return statearr_18566;
})();
var statearr_18567_18619 = state_18537__$1;
(statearr_18567_18619[(2)] = null);

(statearr_18567_18619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (25))){
var inst_18533 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18568_18620 = state_18537__$1;
(statearr_18568_18620[(2)] = inst_18533);

(statearr_18568_18620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (34))){
var inst_18531 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18569_18621 = state_18537__$1;
(statearr_18569_18621[(2)] = inst_18531);

(statearr_18569_18621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (17))){
var state_18537__$1 = state_18537;
var statearr_18570_18622 = state_18537__$1;
(statearr_18570_18622[(2)] = false);

(statearr_18570_18622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (3))){
var state_18537__$1 = state_18537;
var statearr_18571_18623 = state_18537__$1;
(statearr_18571_18623[(2)] = false);

(statearr_18571_18623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (12))){
var inst_18535 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18537__$1,inst_18535);
} else {
if((state_val_18538 === (2))){
var inst_18439 = (state_18537[(8)]);
var inst_18444 = inst_18439.cljs$lang$protocol_mask$partition0$;
var inst_18445 = (inst_18444 & (64));
var inst_18446 = inst_18439.cljs$core$ISeq$;
var inst_18447 = (cljs.core.PROTOCOL_SENTINEL === inst_18446);
var inst_18448 = (inst_18445) || (inst_18447);
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18448)){
var statearr_18572_18624 = state_18537__$1;
(statearr_18572_18624[(1)] = (5));

} else {
var statearr_18573_18625 = state_18537__$1;
(statearr_18573_18625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (23))){
var inst_18496 = (state_18537[(14)]);
var inst_18502 = (inst_18496 == null);
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18502)){
var statearr_18574_18626 = state_18537__$1;
(statearr_18574_18626[(1)] = (26));

} else {
var statearr_18575_18627 = state_18537__$1;
(statearr_18575_18627[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (35))){
var inst_18522 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18522)){
var statearr_18576_18628 = state_18537__$1;
(statearr_18576_18628[(1)] = (36));

} else {
var statearr_18577_18629 = state_18537__$1;
(statearr_18577_18629[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (19))){
var inst_18464 = (state_18537[(7)]);
var inst_18484 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18464);
var state_18537__$1 = state_18537;
var statearr_18578_18630 = state_18537__$1;
(statearr_18578_18630[(2)] = inst_18484);

(statearr_18578_18630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (11))){
var inst_18464 = (state_18537[(7)]);
var inst_18468 = (inst_18464 == null);
var inst_18469 = cljs.core.not.call(null,inst_18468);
var state_18537__$1 = state_18537;
if(inst_18469){
var statearr_18579_18631 = state_18537__$1;
(statearr_18579_18631[(1)] = (13));

} else {
var statearr_18580_18632 = state_18537__$1;
(statearr_18580_18632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (9))){
var inst_18439 = (state_18537[(8)]);
var state_18537__$1 = state_18537;
var statearr_18581_18633 = state_18537__$1;
(statearr_18581_18633[(2)] = inst_18439);

(statearr_18581_18633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (5))){
var state_18537__$1 = state_18537;
var statearr_18582_18634 = state_18537__$1;
(statearr_18582_18634[(2)] = true);

(statearr_18582_18634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (14))){
var state_18537__$1 = state_18537;
var statearr_18583_18635 = state_18537__$1;
(statearr_18583_18635[(2)] = false);

(statearr_18583_18635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (26))){
var inst_18497 = (state_18537[(11)]);
var inst_18504 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18497);
var state_18537__$1 = state_18537;
var statearr_18584_18636 = state_18537__$1;
(statearr_18584_18636[(2)] = inst_18504);

(statearr_18584_18636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (16))){
var state_18537__$1 = state_18537;
var statearr_18585_18637 = state_18537__$1;
(statearr_18585_18637[(2)] = true);

(statearr_18585_18637[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (38))){
var inst_18527 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18586_18638 = state_18537__$1;
(statearr_18586_18638[(2)] = inst_18527);

(statearr_18586_18638[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (30))){
var inst_18489 = (state_18537[(13)]);
var inst_18488 = (state_18537[(10)]);
var inst_18497 = (state_18537[(11)]);
var inst_18514 = cljs.core.empty_QMARK_.call(null,inst_18488);
var inst_18515 = inst_18489.call(null,inst_18497);
var inst_18516 = cljs.core.not.call(null,inst_18515);
var inst_18517 = (inst_18514) && (inst_18516);
var state_18537__$1 = state_18537;
var statearr_18587_18639 = state_18537__$1;
(statearr_18587_18639[(2)] = inst_18517);

(statearr_18587_18639[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (10))){
var inst_18439 = (state_18537[(8)]);
var inst_18460 = (state_18537[(2)]);
var inst_18461 = cljs.core.get.call(null,inst_18460,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18462 = cljs.core.get.call(null,inst_18460,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18463 = cljs.core.get.call(null,inst_18460,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18464 = inst_18439;
var state_18537__$1 = (function (){var statearr_18588 = state_18537;
(statearr_18588[(16)] = inst_18462);

(statearr_18588[(17)] = inst_18461);

(statearr_18588[(7)] = inst_18464);

(statearr_18588[(18)] = inst_18463);

return statearr_18588;
})();
var statearr_18589_18640 = state_18537__$1;
(statearr_18589_18640[(2)] = null);

(statearr_18589_18640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (18))){
var inst_18479 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18590_18641 = state_18537__$1;
(statearr_18590_18641[(2)] = inst_18479);

(statearr_18590_18641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (37))){
var state_18537__$1 = state_18537;
var statearr_18591_18642 = state_18537__$1;
(statearr_18591_18642[(2)] = null);

(statearr_18591_18642[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18538 === (8))){
var inst_18439 = (state_18537[(8)]);
var inst_18457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18439);
var state_18537__$1 = state_18537;
var statearr_18592_18643 = state_18537__$1;
(statearr_18592_18643[(2)] = inst_18457);

(statearr_18592_18643[(1)] = (10));


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
});})(c__17552__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17464__auto__,c__17552__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17465__auto__ = null;
var cljs$core$async$mix_$_state_machine__17465__auto____0 = (function (){
var statearr_18593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18593[(0)] = cljs$core$async$mix_$_state_machine__17465__auto__);

(statearr_18593[(1)] = (1));

return statearr_18593;
});
var cljs$core$async$mix_$_state_machine__17465__auto____1 = (function (state_18537){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_18537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e18594){if((e18594 instanceof Object)){
var ex__17468__auto__ = e18594;
var statearr_18595_18644 = state_18537;
(statearr_18595_18644[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18645 = state_18537;
state_18537 = G__18645;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17465__auto__ = function(state_18537){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17465__auto____1.call(this,state_18537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17465__auto____0;
cljs$core$async$mix_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17465__auto____1;
return cljs$core$async$mix_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17554__auto__ = (function (){var statearr_18596 = f__17553__auto__.call(null);
(statearr_18596[(6)] = c__17552__auto___18597);

return statearr_18596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___18597,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__18647 = arguments.length;
switch (G__18647) {
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
var G__18651 = arguments.length;
switch (G__18651) {
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
return (function (p1__18649_SHARP_){
if(cljs.core.truth_(p1__18649_SHARP_.call(null,topic))){
return p1__18649_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18649_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18652 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18653){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18653 = meta18653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18654,meta18653__$1){
var self__ = this;
var _18654__$1 = this;
return (new cljs.core.async.t_cljs$core$async18652(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18653__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18654){
var self__ = this;
var _18654__$1 = this;
return self__.meta18653;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18652.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18652.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18652.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18652.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18652.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18652.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18652.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18652.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18653","meta18653",-1910469305,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18652";

cljs.core.async.t_cljs$core$async18652.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async18652");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18652 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18652(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18653){
return (new cljs.core.async.t_cljs$core$async18652(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18653));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18652(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17552__auto___18772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___18772,mults,ensure_mult,p){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___18772,mults,ensure_mult,p){
return (function (state_18726){
var state_val_18727 = (state_18726[(1)]);
if((state_val_18727 === (7))){
var inst_18722 = (state_18726[(2)]);
var state_18726__$1 = state_18726;
var statearr_18728_18773 = state_18726__$1;
(statearr_18728_18773[(2)] = inst_18722);

(statearr_18728_18773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (20))){
var state_18726__$1 = state_18726;
var statearr_18729_18774 = state_18726__$1;
(statearr_18729_18774[(2)] = null);

(statearr_18729_18774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (1))){
var state_18726__$1 = state_18726;
var statearr_18730_18775 = state_18726__$1;
(statearr_18730_18775[(2)] = null);

(statearr_18730_18775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (24))){
var inst_18705 = (state_18726[(7)]);
var inst_18714 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18705);
var state_18726__$1 = state_18726;
var statearr_18731_18776 = state_18726__$1;
(statearr_18731_18776[(2)] = inst_18714);

(statearr_18731_18776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (4))){
var inst_18657 = (state_18726[(8)]);
var inst_18657__$1 = (state_18726[(2)]);
var inst_18658 = (inst_18657__$1 == null);
var state_18726__$1 = (function (){var statearr_18732 = state_18726;
(statearr_18732[(8)] = inst_18657__$1);

return statearr_18732;
})();
if(cljs.core.truth_(inst_18658)){
var statearr_18733_18777 = state_18726__$1;
(statearr_18733_18777[(1)] = (5));

} else {
var statearr_18734_18778 = state_18726__$1;
(statearr_18734_18778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (15))){
var inst_18699 = (state_18726[(2)]);
var state_18726__$1 = state_18726;
var statearr_18735_18779 = state_18726__$1;
(statearr_18735_18779[(2)] = inst_18699);

(statearr_18735_18779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (21))){
var inst_18719 = (state_18726[(2)]);
var state_18726__$1 = (function (){var statearr_18736 = state_18726;
(statearr_18736[(9)] = inst_18719);

return statearr_18736;
})();
var statearr_18737_18780 = state_18726__$1;
(statearr_18737_18780[(2)] = null);

(statearr_18737_18780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (13))){
var inst_18681 = (state_18726[(10)]);
var inst_18683 = cljs.core.chunked_seq_QMARK_.call(null,inst_18681);
var state_18726__$1 = state_18726;
if(inst_18683){
var statearr_18738_18781 = state_18726__$1;
(statearr_18738_18781[(1)] = (16));

} else {
var statearr_18739_18782 = state_18726__$1;
(statearr_18739_18782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (22))){
var inst_18711 = (state_18726[(2)]);
var state_18726__$1 = state_18726;
if(cljs.core.truth_(inst_18711)){
var statearr_18740_18783 = state_18726__$1;
(statearr_18740_18783[(1)] = (23));

} else {
var statearr_18741_18784 = state_18726__$1;
(statearr_18741_18784[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (6))){
var inst_18657 = (state_18726[(8)]);
var inst_18707 = (state_18726[(11)]);
var inst_18705 = (state_18726[(7)]);
var inst_18705__$1 = topic_fn.call(null,inst_18657);
var inst_18706 = cljs.core.deref.call(null,mults);
var inst_18707__$1 = cljs.core.get.call(null,inst_18706,inst_18705__$1);
var state_18726__$1 = (function (){var statearr_18742 = state_18726;
(statearr_18742[(11)] = inst_18707__$1);

(statearr_18742[(7)] = inst_18705__$1);

return statearr_18742;
})();
if(cljs.core.truth_(inst_18707__$1)){
var statearr_18743_18785 = state_18726__$1;
(statearr_18743_18785[(1)] = (19));

} else {
var statearr_18744_18786 = state_18726__$1;
(statearr_18744_18786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (25))){
var inst_18716 = (state_18726[(2)]);
var state_18726__$1 = state_18726;
var statearr_18745_18787 = state_18726__$1;
(statearr_18745_18787[(2)] = inst_18716);

(statearr_18745_18787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (17))){
var inst_18681 = (state_18726[(10)]);
var inst_18690 = cljs.core.first.call(null,inst_18681);
var inst_18691 = cljs.core.async.muxch_STAR_.call(null,inst_18690);
var inst_18692 = cljs.core.async.close_BANG_.call(null,inst_18691);
var inst_18693 = cljs.core.next.call(null,inst_18681);
var inst_18667 = inst_18693;
var inst_18668 = null;
var inst_18669 = (0);
var inst_18670 = (0);
var state_18726__$1 = (function (){var statearr_18746 = state_18726;
(statearr_18746[(12)] = inst_18667);

(statearr_18746[(13)] = inst_18670);

(statearr_18746[(14)] = inst_18692);

(statearr_18746[(15)] = inst_18669);

(statearr_18746[(16)] = inst_18668);

return statearr_18746;
})();
var statearr_18747_18788 = state_18726__$1;
(statearr_18747_18788[(2)] = null);

(statearr_18747_18788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (3))){
var inst_18724 = (state_18726[(2)]);
var state_18726__$1 = state_18726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18726__$1,inst_18724);
} else {
if((state_val_18727 === (12))){
var inst_18701 = (state_18726[(2)]);
var state_18726__$1 = state_18726;
var statearr_18748_18789 = state_18726__$1;
(statearr_18748_18789[(2)] = inst_18701);

(statearr_18748_18789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (2))){
var state_18726__$1 = state_18726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18726__$1,(4),ch);
} else {
if((state_val_18727 === (23))){
var state_18726__$1 = state_18726;
var statearr_18749_18790 = state_18726__$1;
(statearr_18749_18790[(2)] = null);

(statearr_18749_18790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (19))){
var inst_18657 = (state_18726[(8)]);
var inst_18707 = (state_18726[(11)]);
var inst_18709 = cljs.core.async.muxch_STAR_.call(null,inst_18707);
var state_18726__$1 = state_18726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18726__$1,(22),inst_18709,inst_18657);
} else {
if((state_val_18727 === (11))){
var inst_18681 = (state_18726[(10)]);
var inst_18667 = (state_18726[(12)]);
var inst_18681__$1 = cljs.core.seq.call(null,inst_18667);
var state_18726__$1 = (function (){var statearr_18750 = state_18726;
(statearr_18750[(10)] = inst_18681__$1);

return statearr_18750;
})();
if(inst_18681__$1){
var statearr_18751_18791 = state_18726__$1;
(statearr_18751_18791[(1)] = (13));

} else {
var statearr_18752_18792 = state_18726__$1;
(statearr_18752_18792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (9))){
var inst_18703 = (state_18726[(2)]);
var state_18726__$1 = state_18726;
var statearr_18753_18793 = state_18726__$1;
(statearr_18753_18793[(2)] = inst_18703);

(statearr_18753_18793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (5))){
var inst_18664 = cljs.core.deref.call(null,mults);
var inst_18665 = cljs.core.vals.call(null,inst_18664);
var inst_18666 = cljs.core.seq.call(null,inst_18665);
var inst_18667 = inst_18666;
var inst_18668 = null;
var inst_18669 = (0);
var inst_18670 = (0);
var state_18726__$1 = (function (){var statearr_18754 = state_18726;
(statearr_18754[(12)] = inst_18667);

(statearr_18754[(13)] = inst_18670);

(statearr_18754[(15)] = inst_18669);

(statearr_18754[(16)] = inst_18668);

return statearr_18754;
})();
var statearr_18755_18794 = state_18726__$1;
(statearr_18755_18794[(2)] = null);

(statearr_18755_18794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (14))){
var state_18726__$1 = state_18726;
var statearr_18759_18795 = state_18726__$1;
(statearr_18759_18795[(2)] = null);

(statearr_18759_18795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (16))){
var inst_18681 = (state_18726[(10)]);
var inst_18685 = cljs.core.chunk_first.call(null,inst_18681);
var inst_18686 = cljs.core.chunk_rest.call(null,inst_18681);
var inst_18687 = cljs.core.count.call(null,inst_18685);
var inst_18667 = inst_18686;
var inst_18668 = inst_18685;
var inst_18669 = inst_18687;
var inst_18670 = (0);
var state_18726__$1 = (function (){var statearr_18760 = state_18726;
(statearr_18760[(12)] = inst_18667);

(statearr_18760[(13)] = inst_18670);

(statearr_18760[(15)] = inst_18669);

(statearr_18760[(16)] = inst_18668);

return statearr_18760;
})();
var statearr_18761_18796 = state_18726__$1;
(statearr_18761_18796[(2)] = null);

(statearr_18761_18796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (10))){
var inst_18667 = (state_18726[(12)]);
var inst_18670 = (state_18726[(13)]);
var inst_18669 = (state_18726[(15)]);
var inst_18668 = (state_18726[(16)]);
var inst_18675 = cljs.core._nth.call(null,inst_18668,inst_18670);
var inst_18676 = cljs.core.async.muxch_STAR_.call(null,inst_18675);
var inst_18677 = cljs.core.async.close_BANG_.call(null,inst_18676);
var inst_18678 = (inst_18670 + (1));
var tmp18756 = inst_18667;
var tmp18757 = inst_18669;
var tmp18758 = inst_18668;
var inst_18667__$1 = tmp18756;
var inst_18668__$1 = tmp18758;
var inst_18669__$1 = tmp18757;
var inst_18670__$1 = inst_18678;
var state_18726__$1 = (function (){var statearr_18762 = state_18726;
(statearr_18762[(17)] = inst_18677);

(statearr_18762[(12)] = inst_18667__$1);

(statearr_18762[(13)] = inst_18670__$1);

(statearr_18762[(15)] = inst_18669__$1);

(statearr_18762[(16)] = inst_18668__$1);

return statearr_18762;
})();
var statearr_18763_18797 = state_18726__$1;
(statearr_18763_18797[(2)] = null);

(statearr_18763_18797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (18))){
var inst_18696 = (state_18726[(2)]);
var state_18726__$1 = state_18726;
var statearr_18764_18798 = state_18726__$1;
(statearr_18764_18798[(2)] = inst_18696);

(statearr_18764_18798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18727 === (8))){
var inst_18670 = (state_18726[(13)]);
var inst_18669 = (state_18726[(15)]);
var inst_18672 = (inst_18670 < inst_18669);
var inst_18673 = inst_18672;
var state_18726__$1 = state_18726;
if(cljs.core.truth_(inst_18673)){
var statearr_18765_18799 = state_18726__$1;
(statearr_18765_18799[(1)] = (10));

} else {
var statearr_18766_18800 = state_18726__$1;
(statearr_18766_18800[(1)] = (11));

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
});})(c__17552__auto___18772,mults,ensure_mult,p))
;
return ((function (switch__17464__auto__,c__17552__auto___18772,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_18767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18767[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_18767[(1)] = (1));

return statearr_18767;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_18726){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_18726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e18768){if((e18768 instanceof Object)){
var ex__17468__auto__ = e18768;
var statearr_18769_18801 = state_18726;
(statearr_18769_18801[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18802 = state_18726;
state_18726 = G__18802;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_18726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_18726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___18772,mults,ensure_mult,p))
})();
var state__17554__auto__ = (function (){var statearr_18770 = f__17553__auto__.call(null);
(statearr_18770[(6)] = c__17552__auto___18772);

return statearr_18770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___18772,mults,ensure_mult,p))
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
var G__18804 = arguments.length;
switch (G__18804) {
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
var G__18807 = arguments.length;
switch (G__18807) {
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
var G__18810 = arguments.length;
switch (G__18810) {
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
var c__17552__auto___18877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___18877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___18877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18849){
var state_val_18850 = (state_18849[(1)]);
if((state_val_18850 === (7))){
var state_18849__$1 = state_18849;
var statearr_18851_18878 = state_18849__$1;
(statearr_18851_18878[(2)] = null);

(statearr_18851_18878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (1))){
var state_18849__$1 = state_18849;
var statearr_18852_18879 = state_18849__$1;
(statearr_18852_18879[(2)] = null);

(statearr_18852_18879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (4))){
var inst_18813 = (state_18849[(7)]);
var inst_18815 = (inst_18813 < cnt);
var state_18849__$1 = state_18849;
if(cljs.core.truth_(inst_18815)){
var statearr_18853_18880 = state_18849__$1;
(statearr_18853_18880[(1)] = (6));

} else {
var statearr_18854_18881 = state_18849__$1;
(statearr_18854_18881[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (15))){
var inst_18845 = (state_18849[(2)]);
var state_18849__$1 = state_18849;
var statearr_18855_18882 = state_18849__$1;
(statearr_18855_18882[(2)] = inst_18845);

(statearr_18855_18882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (13))){
var inst_18838 = cljs.core.async.close_BANG_.call(null,out);
var state_18849__$1 = state_18849;
var statearr_18856_18883 = state_18849__$1;
(statearr_18856_18883[(2)] = inst_18838);

(statearr_18856_18883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (6))){
var state_18849__$1 = state_18849;
var statearr_18857_18884 = state_18849__$1;
(statearr_18857_18884[(2)] = null);

(statearr_18857_18884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (3))){
var inst_18847 = (state_18849[(2)]);
var state_18849__$1 = state_18849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18849__$1,inst_18847);
} else {
if((state_val_18850 === (12))){
var inst_18835 = (state_18849[(8)]);
var inst_18835__$1 = (state_18849[(2)]);
var inst_18836 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18835__$1);
var state_18849__$1 = (function (){var statearr_18858 = state_18849;
(statearr_18858[(8)] = inst_18835__$1);

return statearr_18858;
})();
if(cljs.core.truth_(inst_18836)){
var statearr_18859_18885 = state_18849__$1;
(statearr_18859_18885[(1)] = (13));

} else {
var statearr_18860_18886 = state_18849__$1;
(statearr_18860_18886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (2))){
var inst_18812 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18813 = (0);
var state_18849__$1 = (function (){var statearr_18861 = state_18849;
(statearr_18861[(7)] = inst_18813);

(statearr_18861[(9)] = inst_18812);

return statearr_18861;
})();
var statearr_18862_18887 = state_18849__$1;
(statearr_18862_18887[(2)] = null);

(statearr_18862_18887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (11))){
var inst_18813 = (state_18849[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18849,(10),Object,null,(9));
var inst_18822 = chs__$1.call(null,inst_18813);
var inst_18823 = done.call(null,inst_18813);
var inst_18824 = cljs.core.async.take_BANG_.call(null,inst_18822,inst_18823);
var state_18849__$1 = state_18849;
var statearr_18863_18888 = state_18849__$1;
(statearr_18863_18888[(2)] = inst_18824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (9))){
var inst_18813 = (state_18849[(7)]);
var inst_18826 = (state_18849[(2)]);
var inst_18827 = (inst_18813 + (1));
var inst_18813__$1 = inst_18827;
var state_18849__$1 = (function (){var statearr_18864 = state_18849;
(statearr_18864[(7)] = inst_18813__$1);

(statearr_18864[(10)] = inst_18826);

return statearr_18864;
})();
var statearr_18865_18889 = state_18849__$1;
(statearr_18865_18889[(2)] = null);

(statearr_18865_18889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (5))){
var inst_18833 = (state_18849[(2)]);
var state_18849__$1 = (function (){var statearr_18866 = state_18849;
(statearr_18866[(11)] = inst_18833);

return statearr_18866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18849__$1,(12),dchan);
} else {
if((state_val_18850 === (14))){
var inst_18835 = (state_18849[(8)]);
var inst_18840 = cljs.core.apply.call(null,f,inst_18835);
var state_18849__$1 = state_18849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18849__$1,(16),out,inst_18840);
} else {
if((state_val_18850 === (16))){
var inst_18842 = (state_18849[(2)]);
var state_18849__$1 = (function (){var statearr_18867 = state_18849;
(statearr_18867[(12)] = inst_18842);

return statearr_18867;
})();
var statearr_18868_18890 = state_18849__$1;
(statearr_18868_18890[(2)] = null);

(statearr_18868_18890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (10))){
var inst_18817 = (state_18849[(2)]);
var inst_18818 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18849__$1 = (function (){var statearr_18869 = state_18849;
(statearr_18869[(13)] = inst_18817);

return statearr_18869;
})();
var statearr_18870_18891 = state_18849__$1;
(statearr_18870_18891[(2)] = inst_18818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18850 === (8))){
var inst_18831 = (state_18849[(2)]);
var state_18849__$1 = state_18849;
var statearr_18871_18892 = state_18849__$1;
(statearr_18871_18892[(2)] = inst_18831);

(statearr_18871_18892[(1)] = (5));


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
});})(c__17552__auto___18877,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17464__auto__,c__17552__auto___18877,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_18872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18872[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_18872[(1)] = (1));

return statearr_18872;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_18849){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_18849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e18873){if((e18873 instanceof Object)){
var ex__17468__auto__ = e18873;
var statearr_18874_18893 = state_18849;
(statearr_18874_18893[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18894 = state_18849;
state_18849 = G__18894;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_18849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_18849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___18877,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17554__auto__ = (function (){var statearr_18875 = f__17553__auto__.call(null);
(statearr_18875[(6)] = c__17552__auto___18877);

return statearr_18875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___18877,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__18897 = arguments.length;
switch (G__18897) {
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
var c__17552__auto___18951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___18951,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___18951,out){
return (function (state_18929){
var state_val_18930 = (state_18929[(1)]);
if((state_val_18930 === (7))){
var inst_18909 = (state_18929[(7)]);
var inst_18908 = (state_18929[(8)]);
var inst_18908__$1 = (state_18929[(2)]);
var inst_18909__$1 = cljs.core.nth.call(null,inst_18908__$1,(0),null);
var inst_18910 = cljs.core.nth.call(null,inst_18908__$1,(1),null);
var inst_18911 = (inst_18909__$1 == null);
var state_18929__$1 = (function (){var statearr_18931 = state_18929;
(statearr_18931[(7)] = inst_18909__$1);

(statearr_18931[(9)] = inst_18910);

(statearr_18931[(8)] = inst_18908__$1);

return statearr_18931;
})();
if(cljs.core.truth_(inst_18911)){
var statearr_18932_18952 = state_18929__$1;
(statearr_18932_18952[(1)] = (8));

} else {
var statearr_18933_18953 = state_18929__$1;
(statearr_18933_18953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (1))){
var inst_18898 = cljs.core.vec.call(null,chs);
var inst_18899 = inst_18898;
var state_18929__$1 = (function (){var statearr_18934 = state_18929;
(statearr_18934[(10)] = inst_18899);

return statearr_18934;
})();
var statearr_18935_18954 = state_18929__$1;
(statearr_18935_18954[(2)] = null);

(statearr_18935_18954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (4))){
var inst_18899 = (state_18929[(10)]);
var state_18929__$1 = state_18929;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18929__$1,(7),inst_18899);
} else {
if((state_val_18930 === (6))){
var inst_18925 = (state_18929[(2)]);
var state_18929__$1 = state_18929;
var statearr_18936_18955 = state_18929__$1;
(statearr_18936_18955[(2)] = inst_18925);

(statearr_18936_18955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (3))){
var inst_18927 = (state_18929[(2)]);
var state_18929__$1 = state_18929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18929__$1,inst_18927);
} else {
if((state_val_18930 === (2))){
var inst_18899 = (state_18929[(10)]);
var inst_18901 = cljs.core.count.call(null,inst_18899);
var inst_18902 = (inst_18901 > (0));
var state_18929__$1 = state_18929;
if(cljs.core.truth_(inst_18902)){
var statearr_18938_18956 = state_18929__$1;
(statearr_18938_18956[(1)] = (4));

} else {
var statearr_18939_18957 = state_18929__$1;
(statearr_18939_18957[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (11))){
var inst_18899 = (state_18929[(10)]);
var inst_18918 = (state_18929[(2)]);
var tmp18937 = inst_18899;
var inst_18899__$1 = tmp18937;
var state_18929__$1 = (function (){var statearr_18940 = state_18929;
(statearr_18940[(11)] = inst_18918);

(statearr_18940[(10)] = inst_18899__$1);

return statearr_18940;
})();
var statearr_18941_18958 = state_18929__$1;
(statearr_18941_18958[(2)] = null);

(statearr_18941_18958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (9))){
var inst_18909 = (state_18929[(7)]);
var state_18929__$1 = state_18929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18929__$1,(11),out,inst_18909);
} else {
if((state_val_18930 === (5))){
var inst_18923 = cljs.core.async.close_BANG_.call(null,out);
var state_18929__$1 = state_18929;
var statearr_18942_18959 = state_18929__$1;
(statearr_18942_18959[(2)] = inst_18923);

(statearr_18942_18959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (10))){
var inst_18921 = (state_18929[(2)]);
var state_18929__$1 = state_18929;
var statearr_18943_18960 = state_18929__$1;
(statearr_18943_18960[(2)] = inst_18921);

(statearr_18943_18960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18930 === (8))){
var inst_18909 = (state_18929[(7)]);
var inst_18910 = (state_18929[(9)]);
var inst_18899 = (state_18929[(10)]);
var inst_18908 = (state_18929[(8)]);
var inst_18913 = (function (){var cs = inst_18899;
var vec__18904 = inst_18908;
var v = inst_18909;
var c = inst_18910;
return ((function (cs,vec__18904,v,c,inst_18909,inst_18910,inst_18899,inst_18908,state_val_18930,c__17552__auto___18951,out){
return (function (p1__18895_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18895_SHARP_);
});
;})(cs,vec__18904,v,c,inst_18909,inst_18910,inst_18899,inst_18908,state_val_18930,c__17552__auto___18951,out))
})();
var inst_18914 = cljs.core.filterv.call(null,inst_18913,inst_18899);
var inst_18899__$1 = inst_18914;
var state_18929__$1 = (function (){var statearr_18944 = state_18929;
(statearr_18944[(10)] = inst_18899__$1);

return statearr_18944;
})();
var statearr_18945_18961 = state_18929__$1;
(statearr_18945_18961[(2)] = null);

(statearr_18945_18961[(1)] = (2));


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
});})(c__17552__auto___18951,out))
;
return ((function (switch__17464__auto__,c__17552__auto___18951,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_18946 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18946[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_18946[(1)] = (1));

return statearr_18946;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_18929){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_18929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e18947){if((e18947 instanceof Object)){
var ex__17468__auto__ = e18947;
var statearr_18948_18962 = state_18929;
(statearr_18948_18962[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18963 = state_18929;
state_18929 = G__18963;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_18929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_18929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___18951,out))
})();
var state__17554__auto__ = (function (){var statearr_18949 = f__17553__auto__.call(null);
(statearr_18949[(6)] = c__17552__auto___18951);

return statearr_18949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___18951,out))
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
var G__18965 = arguments.length;
switch (G__18965) {
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
var c__17552__auto___19010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___19010,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___19010,out){
return (function (state_18989){
var state_val_18990 = (state_18989[(1)]);
if((state_val_18990 === (7))){
var inst_18971 = (state_18989[(7)]);
var inst_18971__$1 = (state_18989[(2)]);
var inst_18972 = (inst_18971__$1 == null);
var inst_18973 = cljs.core.not.call(null,inst_18972);
var state_18989__$1 = (function (){var statearr_18991 = state_18989;
(statearr_18991[(7)] = inst_18971__$1);

return statearr_18991;
})();
if(inst_18973){
var statearr_18992_19011 = state_18989__$1;
(statearr_18992_19011[(1)] = (8));

} else {
var statearr_18993_19012 = state_18989__$1;
(statearr_18993_19012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18990 === (1))){
var inst_18966 = (0);
var state_18989__$1 = (function (){var statearr_18994 = state_18989;
(statearr_18994[(8)] = inst_18966);

return statearr_18994;
})();
var statearr_18995_19013 = state_18989__$1;
(statearr_18995_19013[(2)] = null);

(statearr_18995_19013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18990 === (4))){
var state_18989__$1 = state_18989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18989__$1,(7),ch);
} else {
if((state_val_18990 === (6))){
var inst_18984 = (state_18989[(2)]);
var state_18989__$1 = state_18989;
var statearr_18996_19014 = state_18989__$1;
(statearr_18996_19014[(2)] = inst_18984);

(statearr_18996_19014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18990 === (3))){
var inst_18986 = (state_18989[(2)]);
var inst_18987 = cljs.core.async.close_BANG_.call(null,out);
var state_18989__$1 = (function (){var statearr_18997 = state_18989;
(statearr_18997[(9)] = inst_18986);

return statearr_18997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18989__$1,inst_18987);
} else {
if((state_val_18990 === (2))){
var inst_18966 = (state_18989[(8)]);
var inst_18968 = (inst_18966 < n);
var state_18989__$1 = state_18989;
if(cljs.core.truth_(inst_18968)){
var statearr_18998_19015 = state_18989__$1;
(statearr_18998_19015[(1)] = (4));

} else {
var statearr_18999_19016 = state_18989__$1;
(statearr_18999_19016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18990 === (11))){
var inst_18966 = (state_18989[(8)]);
var inst_18976 = (state_18989[(2)]);
var inst_18977 = (inst_18966 + (1));
var inst_18966__$1 = inst_18977;
var state_18989__$1 = (function (){var statearr_19000 = state_18989;
(statearr_19000[(10)] = inst_18976);

(statearr_19000[(8)] = inst_18966__$1);

return statearr_19000;
})();
var statearr_19001_19017 = state_18989__$1;
(statearr_19001_19017[(2)] = null);

(statearr_19001_19017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18990 === (9))){
var state_18989__$1 = state_18989;
var statearr_19002_19018 = state_18989__$1;
(statearr_19002_19018[(2)] = null);

(statearr_19002_19018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18990 === (5))){
var state_18989__$1 = state_18989;
var statearr_19003_19019 = state_18989__$1;
(statearr_19003_19019[(2)] = null);

(statearr_19003_19019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18990 === (10))){
var inst_18981 = (state_18989[(2)]);
var state_18989__$1 = state_18989;
var statearr_19004_19020 = state_18989__$1;
(statearr_19004_19020[(2)] = inst_18981);

(statearr_19004_19020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18990 === (8))){
var inst_18971 = (state_18989[(7)]);
var state_18989__$1 = state_18989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18989__$1,(11),out,inst_18971);
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
});})(c__17552__auto___19010,out))
;
return ((function (switch__17464__auto__,c__17552__auto___19010,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_19005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19005[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_19005[(1)] = (1));

return statearr_19005;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_18989){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_18989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e19006){if((e19006 instanceof Object)){
var ex__17468__auto__ = e19006;
var statearr_19007_19021 = state_18989;
(statearr_19007_19021[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19022 = state_18989;
state_18989 = G__19022;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_18989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_18989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___19010,out))
})();
var state__17554__auto__ = (function (){var statearr_19008 = f__17553__auto__.call(null);
(statearr_19008[(6)] = c__17552__auto___19010);

return statearr_19008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___19010,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19024 = (function (f,ch,meta19025){
this.f = f;
this.ch = ch;
this.meta19025 = meta19025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19026,meta19025__$1){
var self__ = this;
var _19026__$1 = this;
return (new cljs.core.async.t_cljs$core$async19024(self__.f,self__.ch,meta19025__$1));
});

cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19026){
var self__ = this;
var _19026__$1 = this;
return self__.meta19025;
});

cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19027 = (function (f,ch,meta19025,_,fn1,meta19028){
this.f = f;
this.ch = ch;
this.meta19025 = meta19025;
this._ = _;
this.fn1 = fn1;
this.meta19028 = meta19028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19029,meta19028__$1){
var self__ = this;
var _19029__$1 = this;
return (new cljs.core.async.t_cljs$core$async19027(self__.f,self__.ch,self__.meta19025,self__._,self__.fn1,meta19028__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19029){
var self__ = this;
var _19029__$1 = this;
return self__.meta19028;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19027.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19027.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19023_SHARP_){
return f1.call(null,(((p1__19023_SHARP_ == null))?null:self__.f.call(null,p1__19023_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19027.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19025","meta19025",1997785870,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19024","cljs.core.async/t_cljs$core$async19024",1103160803,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19028","meta19028",1673681238,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19027";

cljs.core.async.t_cljs$core$async19027.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async19027");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19027 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19027(f__$1,ch__$1,meta19025__$1,___$2,fn1__$1,meta19028){
return (new cljs.core.async.t_cljs$core$async19027(f__$1,ch__$1,meta19025__$1,___$2,fn1__$1,meta19028));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19027(self__.f,self__.ch,self__.meta19025,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19025","meta19025",1997785870,null)], null);
});

cljs.core.async.t_cljs$core$async19024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19024";

cljs.core.async.t_cljs$core$async19024.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async19024");
});

cljs.core.async.__GT_t_cljs$core$async19024 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19024(f__$1,ch__$1,meta19025){
return (new cljs.core.async.t_cljs$core$async19024(f__$1,ch__$1,meta19025));
});

}

return (new cljs.core.async.t_cljs$core$async19024(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19030 = (function (f,ch,meta19031){
this.f = f;
this.ch = ch;
this.meta19031 = meta19031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19032,meta19031__$1){
var self__ = this;
var _19032__$1 = this;
return (new cljs.core.async.t_cljs$core$async19030(self__.f,self__.ch,meta19031__$1));
});

cljs.core.async.t_cljs$core$async19030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19032){
var self__ = this;
var _19032__$1 = this;
return self__.meta19031;
});

cljs.core.async.t_cljs$core$async19030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async19030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19031","meta19031",874053221,null)], null);
});

cljs.core.async.t_cljs$core$async19030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19030";

cljs.core.async.t_cljs$core$async19030.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async19030");
});

cljs.core.async.__GT_t_cljs$core$async19030 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19030(f__$1,ch__$1,meta19031){
return (new cljs.core.async.t_cljs$core$async19030(f__$1,ch__$1,meta19031));
});

}

return (new cljs.core.async.t_cljs$core$async19030(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19033 = (function (p,ch,meta19034){
this.p = p;
this.ch = ch;
this.meta19034 = meta19034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19035,meta19034__$1){
var self__ = this;
var _19035__$1 = this;
return (new cljs.core.async.t_cljs$core$async19033(self__.p,self__.ch,meta19034__$1));
});

cljs.core.async.t_cljs$core$async19033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19035){
var self__ = this;
var _19035__$1 = this;
return self__.meta19034;
});

cljs.core.async.t_cljs$core$async19033.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19033.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19033.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19033.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19033.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19033.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19033.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19034","meta19034",28349621,null)], null);
});

cljs.core.async.t_cljs$core$async19033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19033";

cljs.core.async.t_cljs$core$async19033.cljs$lang$ctorPrWriter = (function (this__8293__auto__,writer__8294__auto__,opt__8295__auto__){
return cljs.core._write.call(null,writer__8294__auto__,"cljs.core.async/t_cljs$core$async19033");
});

cljs.core.async.__GT_t_cljs$core$async19033 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19033(p__$1,ch__$1,meta19034){
return (new cljs.core.async.t_cljs$core$async19033(p__$1,ch__$1,meta19034));
});

}

return (new cljs.core.async.t_cljs$core$async19033(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19037 = arguments.length;
switch (G__19037) {
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
var c__17552__auto___19077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___19077,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___19077,out){
return (function (state_19058){
var state_val_19059 = (state_19058[(1)]);
if((state_val_19059 === (7))){
var inst_19054 = (state_19058[(2)]);
var state_19058__$1 = state_19058;
var statearr_19060_19078 = state_19058__$1;
(statearr_19060_19078[(2)] = inst_19054);

(statearr_19060_19078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19059 === (1))){
var state_19058__$1 = state_19058;
var statearr_19061_19079 = state_19058__$1;
(statearr_19061_19079[(2)] = null);

(statearr_19061_19079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19059 === (4))){
var inst_19040 = (state_19058[(7)]);
var inst_19040__$1 = (state_19058[(2)]);
var inst_19041 = (inst_19040__$1 == null);
var state_19058__$1 = (function (){var statearr_19062 = state_19058;
(statearr_19062[(7)] = inst_19040__$1);

return statearr_19062;
})();
if(cljs.core.truth_(inst_19041)){
var statearr_19063_19080 = state_19058__$1;
(statearr_19063_19080[(1)] = (5));

} else {
var statearr_19064_19081 = state_19058__$1;
(statearr_19064_19081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19059 === (6))){
var inst_19040 = (state_19058[(7)]);
var inst_19045 = p.call(null,inst_19040);
var state_19058__$1 = state_19058;
if(cljs.core.truth_(inst_19045)){
var statearr_19065_19082 = state_19058__$1;
(statearr_19065_19082[(1)] = (8));

} else {
var statearr_19066_19083 = state_19058__$1;
(statearr_19066_19083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19059 === (3))){
var inst_19056 = (state_19058[(2)]);
var state_19058__$1 = state_19058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19058__$1,inst_19056);
} else {
if((state_val_19059 === (2))){
var state_19058__$1 = state_19058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19058__$1,(4),ch);
} else {
if((state_val_19059 === (11))){
var inst_19048 = (state_19058[(2)]);
var state_19058__$1 = state_19058;
var statearr_19067_19084 = state_19058__$1;
(statearr_19067_19084[(2)] = inst_19048);

(statearr_19067_19084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19059 === (9))){
var state_19058__$1 = state_19058;
var statearr_19068_19085 = state_19058__$1;
(statearr_19068_19085[(2)] = null);

(statearr_19068_19085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19059 === (5))){
var inst_19043 = cljs.core.async.close_BANG_.call(null,out);
var state_19058__$1 = state_19058;
var statearr_19069_19086 = state_19058__$1;
(statearr_19069_19086[(2)] = inst_19043);

(statearr_19069_19086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19059 === (10))){
var inst_19051 = (state_19058[(2)]);
var state_19058__$1 = (function (){var statearr_19070 = state_19058;
(statearr_19070[(8)] = inst_19051);

return statearr_19070;
})();
var statearr_19071_19087 = state_19058__$1;
(statearr_19071_19087[(2)] = null);

(statearr_19071_19087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19059 === (8))){
var inst_19040 = (state_19058[(7)]);
var state_19058__$1 = state_19058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19058__$1,(11),out,inst_19040);
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
});})(c__17552__auto___19077,out))
;
return ((function (switch__17464__auto__,c__17552__auto___19077,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_19072 = [null,null,null,null,null,null,null,null,null];
(statearr_19072[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_19072[(1)] = (1));

return statearr_19072;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_19058){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_19058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e19073){if((e19073 instanceof Object)){
var ex__17468__auto__ = e19073;
var statearr_19074_19088 = state_19058;
(statearr_19074_19088[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19089 = state_19058;
state_19058 = G__19089;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_19058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_19058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___19077,out))
})();
var state__17554__auto__ = (function (){var statearr_19075 = f__17553__auto__.call(null);
(statearr_19075[(6)] = c__17552__auto___19077);

return statearr_19075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___19077,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19091 = arguments.length;
switch (G__19091) {
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
return (function (state_19154){
var state_val_19155 = (state_19154[(1)]);
if((state_val_19155 === (7))){
var inst_19150 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19156_19194 = state_19154__$1;
(statearr_19156_19194[(2)] = inst_19150);

(statearr_19156_19194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (20))){
var inst_19120 = (state_19154[(7)]);
var inst_19131 = (state_19154[(2)]);
var inst_19132 = cljs.core.next.call(null,inst_19120);
var inst_19106 = inst_19132;
var inst_19107 = null;
var inst_19108 = (0);
var inst_19109 = (0);
var state_19154__$1 = (function (){var statearr_19157 = state_19154;
(statearr_19157[(8)] = inst_19109);

(statearr_19157[(9)] = inst_19107);

(statearr_19157[(10)] = inst_19108);

(statearr_19157[(11)] = inst_19131);

(statearr_19157[(12)] = inst_19106);

return statearr_19157;
})();
var statearr_19158_19195 = state_19154__$1;
(statearr_19158_19195[(2)] = null);

(statearr_19158_19195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (1))){
var state_19154__$1 = state_19154;
var statearr_19159_19196 = state_19154__$1;
(statearr_19159_19196[(2)] = null);

(statearr_19159_19196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (4))){
var inst_19095 = (state_19154[(13)]);
var inst_19095__$1 = (state_19154[(2)]);
var inst_19096 = (inst_19095__$1 == null);
var state_19154__$1 = (function (){var statearr_19160 = state_19154;
(statearr_19160[(13)] = inst_19095__$1);

return statearr_19160;
})();
if(cljs.core.truth_(inst_19096)){
var statearr_19161_19197 = state_19154__$1;
(statearr_19161_19197[(1)] = (5));

} else {
var statearr_19162_19198 = state_19154__$1;
(statearr_19162_19198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (15))){
var state_19154__$1 = state_19154;
var statearr_19166_19199 = state_19154__$1;
(statearr_19166_19199[(2)] = null);

(statearr_19166_19199[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (21))){
var state_19154__$1 = state_19154;
var statearr_19167_19200 = state_19154__$1;
(statearr_19167_19200[(2)] = null);

(statearr_19167_19200[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (13))){
var inst_19109 = (state_19154[(8)]);
var inst_19107 = (state_19154[(9)]);
var inst_19108 = (state_19154[(10)]);
var inst_19106 = (state_19154[(12)]);
var inst_19116 = (state_19154[(2)]);
var inst_19117 = (inst_19109 + (1));
var tmp19163 = inst_19107;
var tmp19164 = inst_19108;
var tmp19165 = inst_19106;
var inst_19106__$1 = tmp19165;
var inst_19107__$1 = tmp19163;
var inst_19108__$1 = tmp19164;
var inst_19109__$1 = inst_19117;
var state_19154__$1 = (function (){var statearr_19168 = state_19154;
(statearr_19168[(8)] = inst_19109__$1);

(statearr_19168[(9)] = inst_19107__$1);

(statearr_19168[(14)] = inst_19116);

(statearr_19168[(10)] = inst_19108__$1);

(statearr_19168[(12)] = inst_19106__$1);

return statearr_19168;
})();
var statearr_19169_19201 = state_19154__$1;
(statearr_19169_19201[(2)] = null);

(statearr_19169_19201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (22))){
var state_19154__$1 = state_19154;
var statearr_19170_19202 = state_19154__$1;
(statearr_19170_19202[(2)] = null);

(statearr_19170_19202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (6))){
var inst_19095 = (state_19154[(13)]);
var inst_19104 = f.call(null,inst_19095);
var inst_19105 = cljs.core.seq.call(null,inst_19104);
var inst_19106 = inst_19105;
var inst_19107 = null;
var inst_19108 = (0);
var inst_19109 = (0);
var state_19154__$1 = (function (){var statearr_19171 = state_19154;
(statearr_19171[(8)] = inst_19109);

(statearr_19171[(9)] = inst_19107);

(statearr_19171[(10)] = inst_19108);

(statearr_19171[(12)] = inst_19106);

return statearr_19171;
})();
var statearr_19172_19203 = state_19154__$1;
(statearr_19172_19203[(2)] = null);

(statearr_19172_19203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (17))){
var inst_19120 = (state_19154[(7)]);
var inst_19124 = cljs.core.chunk_first.call(null,inst_19120);
var inst_19125 = cljs.core.chunk_rest.call(null,inst_19120);
var inst_19126 = cljs.core.count.call(null,inst_19124);
var inst_19106 = inst_19125;
var inst_19107 = inst_19124;
var inst_19108 = inst_19126;
var inst_19109 = (0);
var state_19154__$1 = (function (){var statearr_19173 = state_19154;
(statearr_19173[(8)] = inst_19109);

(statearr_19173[(9)] = inst_19107);

(statearr_19173[(10)] = inst_19108);

(statearr_19173[(12)] = inst_19106);

return statearr_19173;
})();
var statearr_19174_19204 = state_19154__$1;
(statearr_19174_19204[(2)] = null);

(statearr_19174_19204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (3))){
var inst_19152 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19154__$1,inst_19152);
} else {
if((state_val_19155 === (12))){
var inst_19140 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19175_19205 = state_19154__$1;
(statearr_19175_19205[(2)] = inst_19140);

(statearr_19175_19205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (2))){
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19154__$1,(4),in$);
} else {
if((state_val_19155 === (23))){
var inst_19148 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19176_19206 = state_19154__$1;
(statearr_19176_19206[(2)] = inst_19148);

(statearr_19176_19206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (19))){
var inst_19135 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19177_19207 = state_19154__$1;
(statearr_19177_19207[(2)] = inst_19135);

(statearr_19177_19207[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (11))){
var inst_19120 = (state_19154[(7)]);
var inst_19106 = (state_19154[(12)]);
var inst_19120__$1 = cljs.core.seq.call(null,inst_19106);
var state_19154__$1 = (function (){var statearr_19178 = state_19154;
(statearr_19178[(7)] = inst_19120__$1);

return statearr_19178;
})();
if(inst_19120__$1){
var statearr_19179_19208 = state_19154__$1;
(statearr_19179_19208[(1)] = (14));

} else {
var statearr_19180_19209 = state_19154__$1;
(statearr_19180_19209[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (9))){
var inst_19142 = (state_19154[(2)]);
var inst_19143 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19154__$1 = (function (){var statearr_19181 = state_19154;
(statearr_19181[(15)] = inst_19142);

return statearr_19181;
})();
if(cljs.core.truth_(inst_19143)){
var statearr_19182_19210 = state_19154__$1;
(statearr_19182_19210[(1)] = (21));

} else {
var statearr_19183_19211 = state_19154__$1;
(statearr_19183_19211[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (5))){
var inst_19098 = cljs.core.async.close_BANG_.call(null,out);
var state_19154__$1 = state_19154;
var statearr_19184_19212 = state_19154__$1;
(statearr_19184_19212[(2)] = inst_19098);

(statearr_19184_19212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (14))){
var inst_19120 = (state_19154[(7)]);
var inst_19122 = cljs.core.chunked_seq_QMARK_.call(null,inst_19120);
var state_19154__$1 = state_19154;
if(inst_19122){
var statearr_19185_19213 = state_19154__$1;
(statearr_19185_19213[(1)] = (17));

} else {
var statearr_19186_19214 = state_19154__$1;
(statearr_19186_19214[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (16))){
var inst_19138 = (state_19154[(2)]);
var state_19154__$1 = state_19154;
var statearr_19187_19215 = state_19154__$1;
(statearr_19187_19215[(2)] = inst_19138);

(statearr_19187_19215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19155 === (10))){
var inst_19109 = (state_19154[(8)]);
var inst_19107 = (state_19154[(9)]);
var inst_19114 = cljs.core._nth.call(null,inst_19107,inst_19109);
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19154__$1,(13),out,inst_19114);
} else {
if((state_val_19155 === (18))){
var inst_19120 = (state_19154[(7)]);
var inst_19129 = cljs.core.first.call(null,inst_19120);
var state_19154__$1 = state_19154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19154__$1,(20),out,inst_19129);
} else {
if((state_val_19155 === (8))){
var inst_19109 = (state_19154[(8)]);
var inst_19108 = (state_19154[(10)]);
var inst_19111 = (inst_19109 < inst_19108);
var inst_19112 = inst_19111;
var state_19154__$1 = state_19154;
if(cljs.core.truth_(inst_19112)){
var statearr_19188_19216 = state_19154__$1;
(statearr_19188_19216[(1)] = (10));

} else {
var statearr_19189_19217 = state_19154__$1;
(statearr_19189_19217[(1)] = (11));

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
var statearr_19190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19190[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__);

(statearr_19190[(1)] = (1));

return statearr_19190;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____1 = (function (state_19154){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_19154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e19191){if((e19191 instanceof Object)){
var ex__17468__auto__ = e19191;
var statearr_19192_19218 = state_19154;
(statearr_19192_19218[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19219 = state_19154;
state_19154 = G__19219;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__ = function(state_19154){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____1.call(this,state_19154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17465__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__))
})();
var state__17554__auto__ = (function (){var statearr_19193 = f__17553__auto__.call(null);
(statearr_19193[(6)] = c__17552__auto__);

return statearr_19193;
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
var G__19221 = arguments.length;
switch (G__19221) {
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
var G__19224 = arguments.length;
switch (G__19224) {
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
var G__19227 = arguments.length;
switch (G__19227) {
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
var c__17552__auto___19274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___19274,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___19274,out){
return (function (state_19251){
var state_val_19252 = (state_19251[(1)]);
if((state_val_19252 === (7))){
var inst_19246 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19253_19275 = state_19251__$1;
(statearr_19253_19275[(2)] = inst_19246);

(statearr_19253_19275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (1))){
var inst_19228 = null;
var state_19251__$1 = (function (){var statearr_19254 = state_19251;
(statearr_19254[(7)] = inst_19228);

return statearr_19254;
})();
var statearr_19255_19276 = state_19251__$1;
(statearr_19255_19276[(2)] = null);

(statearr_19255_19276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (4))){
var inst_19231 = (state_19251[(8)]);
var inst_19231__$1 = (state_19251[(2)]);
var inst_19232 = (inst_19231__$1 == null);
var inst_19233 = cljs.core.not.call(null,inst_19232);
var state_19251__$1 = (function (){var statearr_19256 = state_19251;
(statearr_19256[(8)] = inst_19231__$1);

return statearr_19256;
})();
if(inst_19233){
var statearr_19257_19277 = state_19251__$1;
(statearr_19257_19277[(1)] = (5));

} else {
var statearr_19258_19278 = state_19251__$1;
(statearr_19258_19278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (6))){
var state_19251__$1 = state_19251;
var statearr_19259_19279 = state_19251__$1;
(statearr_19259_19279[(2)] = null);

(statearr_19259_19279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (3))){
var inst_19248 = (state_19251[(2)]);
var inst_19249 = cljs.core.async.close_BANG_.call(null,out);
var state_19251__$1 = (function (){var statearr_19260 = state_19251;
(statearr_19260[(9)] = inst_19248);

return statearr_19260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19251__$1,inst_19249);
} else {
if((state_val_19252 === (2))){
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19251__$1,(4),ch);
} else {
if((state_val_19252 === (11))){
var inst_19231 = (state_19251[(8)]);
var inst_19240 = (state_19251[(2)]);
var inst_19228 = inst_19231;
var state_19251__$1 = (function (){var statearr_19261 = state_19251;
(statearr_19261[(7)] = inst_19228);

(statearr_19261[(10)] = inst_19240);

return statearr_19261;
})();
var statearr_19262_19280 = state_19251__$1;
(statearr_19262_19280[(2)] = null);

(statearr_19262_19280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (9))){
var inst_19231 = (state_19251[(8)]);
var state_19251__$1 = state_19251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19251__$1,(11),out,inst_19231);
} else {
if((state_val_19252 === (5))){
var inst_19228 = (state_19251[(7)]);
var inst_19231 = (state_19251[(8)]);
var inst_19235 = cljs.core._EQ_.call(null,inst_19231,inst_19228);
var state_19251__$1 = state_19251;
if(inst_19235){
var statearr_19264_19281 = state_19251__$1;
(statearr_19264_19281[(1)] = (8));

} else {
var statearr_19265_19282 = state_19251__$1;
(statearr_19265_19282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (10))){
var inst_19243 = (state_19251[(2)]);
var state_19251__$1 = state_19251;
var statearr_19266_19283 = state_19251__$1;
(statearr_19266_19283[(2)] = inst_19243);

(statearr_19266_19283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19252 === (8))){
var inst_19228 = (state_19251[(7)]);
var tmp19263 = inst_19228;
var inst_19228__$1 = tmp19263;
var state_19251__$1 = (function (){var statearr_19267 = state_19251;
(statearr_19267[(7)] = inst_19228__$1);

return statearr_19267;
})();
var statearr_19268_19284 = state_19251__$1;
(statearr_19268_19284[(2)] = null);

(statearr_19268_19284[(1)] = (2));


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
});})(c__17552__auto___19274,out))
;
return ((function (switch__17464__auto__,c__17552__auto___19274,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_19269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19269[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_19269[(1)] = (1));

return statearr_19269;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_19251){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_19251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e19270){if((e19270 instanceof Object)){
var ex__17468__auto__ = e19270;
var statearr_19271_19285 = state_19251;
(statearr_19271_19285[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19286 = state_19251;
state_19251 = G__19286;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_19251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_19251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___19274,out))
})();
var state__17554__auto__ = (function (){var statearr_19272 = f__17553__auto__.call(null);
(statearr_19272[(6)] = c__17552__auto___19274);

return statearr_19272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___19274,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19288 = arguments.length;
switch (G__19288) {
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
var c__17552__auto___19354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___19354,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___19354,out){
return (function (state_19326){
var state_val_19327 = (state_19326[(1)]);
if((state_val_19327 === (7))){
var inst_19322 = (state_19326[(2)]);
var state_19326__$1 = state_19326;
var statearr_19328_19355 = state_19326__$1;
(statearr_19328_19355[(2)] = inst_19322);

(statearr_19328_19355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (1))){
var inst_19289 = (new Array(n));
var inst_19290 = inst_19289;
var inst_19291 = (0);
var state_19326__$1 = (function (){var statearr_19329 = state_19326;
(statearr_19329[(7)] = inst_19290);

(statearr_19329[(8)] = inst_19291);

return statearr_19329;
})();
var statearr_19330_19356 = state_19326__$1;
(statearr_19330_19356[(2)] = null);

(statearr_19330_19356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (4))){
var inst_19294 = (state_19326[(9)]);
var inst_19294__$1 = (state_19326[(2)]);
var inst_19295 = (inst_19294__$1 == null);
var inst_19296 = cljs.core.not.call(null,inst_19295);
var state_19326__$1 = (function (){var statearr_19331 = state_19326;
(statearr_19331[(9)] = inst_19294__$1);

return statearr_19331;
})();
if(inst_19296){
var statearr_19332_19357 = state_19326__$1;
(statearr_19332_19357[(1)] = (5));

} else {
var statearr_19333_19358 = state_19326__$1;
(statearr_19333_19358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (15))){
var inst_19316 = (state_19326[(2)]);
var state_19326__$1 = state_19326;
var statearr_19334_19359 = state_19326__$1;
(statearr_19334_19359[(2)] = inst_19316);

(statearr_19334_19359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (13))){
var state_19326__$1 = state_19326;
var statearr_19335_19360 = state_19326__$1;
(statearr_19335_19360[(2)] = null);

(statearr_19335_19360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (6))){
var inst_19291 = (state_19326[(8)]);
var inst_19312 = (inst_19291 > (0));
var state_19326__$1 = state_19326;
if(cljs.core.truth_(inst_19312)){
var statearr_19336_19361 = state_19326__$1;
(statearr_19336_19361[(1)] = (12));

} else {
var statearr_19337_19362 = state_19326__$1;
(statearr_19337_19362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (3))){
var inst_19324 = (state_19326[(2)]);
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19326__$1,inst_19324);
} else {
if((state_val_19327 === (12))){
var inst_19290 = (state_19326[(7)]);
var inst_19314 = cljs.core.vec.call(null,inst_19290);
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19326__$1,(15),out,inst_19314);
} else {
if((state_val_19327 === (2))){
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19326__$1,(4),ch);
} else {
if((state_val_19327 === (11))){
var inst_19306 = (state_19326[(2)]);
var inst_19307 = (new Array(n));
var inst_19290 = inst_19307;
var inst_19291 = (0);
var state_19326__$1 = (function (){var statearr_19338 = state_19326;
(statearr_19338[(7)] = inst_19290);

(statearr_19338[(8)] = inst_19291);

(statearr_19338[(10)] = inst_19306);

return statearr_19338;
})();
var statearr_19339_19363 = state_19326__$1;
(statearr_19339_19363[(2)] = null);

(statearr_19339_19363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (9))){
var inst_19290 = (state_19326[(7)]);
var inst_19304 = cljs.core.vec.call(null,inst_19290);
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19326__$1,(11),out,inst_19304);
} else {
if((state_val_19327 === (5))){
var inst_19299 = (state_19326[(11)]);
var inst_19290 = (state_19326[(7)]);
var inst_19294 = (state_19326[(9)]);
var inst_19291 = (state_19326[(8)]);
var inst_19298 = (inst_19290[inst_19291] = inst_19294);
var inst_19299__$1 = (inst_19291 + (1));
var inst_19300 = (inst_19299__$1 < n);
var state_19326__$1 = (function (){var statearr_19340 = state_19326;
(statearr_19340[(11)] = inst_19299__$1);

(statearr_19340[(12)] = inst_19298);

return statearr_19340;
})();
if(cljs.core.truth_(inst_19300)){
var statearr_19341_19364 = state_19326__$1;
(statearr_19341_19364[(1)] = (8));

} else {
var statearr_19342_19365 = state_19326__$1;
(statearr_19342_19365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (14))){
var inst_19319 = (state_19326[(2)]);
var inst_19320 = cljs.core.async.close_BANG_.call(null,out);
var state_19326__$1 = (function (){var statearr_19344 = state_19326;
(statearr_19344[(13)] = inst_19319);

return statearr_19344;
})();
var statearr_19345_19366 = state_19326__$1;
(statearr_19345_19366[(2)] = inst_19320);

(statearr_19345_19366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (10))){
var inst_19310 = (state_19326[(2)]);
var state_19326__$1 = state_19326;
var statearr_19346_19367 = state_19326__$1;
(statearr_19346_19367[(2)] = inst_19310);

(statearr_19346_19367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (8))){
var inst_19299 = (state_19326[(11)]);
var inst_19290 = (state_19326[(7)]);
var tmp19343 = inst_19290;
var inst_19290__$1 = tmp19343;
var inst_19291 = inst_19299;
var state_19326__$1 = (function (){var statearr_19347 = state_19326;
(statearr_19347[(7)] = inst_19290__$1);

(statearr_19347[(8)] = inst_19291);

return statearr_19347;
})();
var statearr_19348_19368 = state_19326__$1;
(statearr_19348_19368[(2)] = null);

(statearr_19348_19368[(1)] = (2));


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
});})(c__17552__auto___19354,out))
;
return ((function (switch__17464__auto__,c__17552__auto___19354,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_19349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19349[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_19349[(1)] = (1));

return statearr_19349;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_19326){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_19326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e19350){if((e19350 instanceof Object)){
var ex__17468__auto__ = e19350;
var statearr_19351_19369 = state_19326;
(statearr_19351_19369[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19370 = state_19326;
state_19326 = G__19370;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_19326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_19326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___19354,out))
})();
var state__17554__auto__ = (function (){var statearr_19352 = f__17553__auto__.call(null);
(statearr_19352[(6)] = c__17552__auto___19354);

return statearr_19352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___19354,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19372 = arguments.length;
switch (G__19372) {
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
var c__17552__auto___19442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___19442,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___19442,out){
return (function (state_19414){
var state_val_19415 = (state_19414[(1)]);
if((state_val_19415 === (7))){
var inst_19410 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19416_19443 = state_19414__$1;
(statearr_19416_19443[(2)] = inst_19410);

(statearr_19416_19443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (1))){
var inst_19373 = [];
var inst_19374 = inst_19373;
var inst_19375 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19414__$1 = (function (){var statearr_19417 = state_19414;
(statearr_19417[(7)] = inst_19374);

(statearr_19417[(8)] = inst_19375);

return statearr_19417;
})();
var statearr_19418_19444 = state_19414__$1;
(statearr_19418_19444[(2)] = null);

(statearr_19418_19444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (4))){
var inst_19378 = (state_19414[(9)]);
var inst_19378__$1 = (state_19414[(2)]);
var inst_19379 = (inst_19378__$1 == null);
var inst_19380 = cljs.core.not.call(null,inst_19379);
var state_19414__$1 = (function (){var statearr_19419 = state_19414;
(statearr_19419[(9)] = inst_19378__$1);

return statearr_19419;
})();
if(inst_19380){
var statearr_19420_19445 = state_19414__$1;
(statearr_19420_19445[(1)] = (5));

} else {
var statearr_19421_19446 = state_19414__$1;
(statearr_19421_19446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (15))){
var inst_19404 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19422_19447 = state_19414__$1;
(statearr_19422_19447[(2)] = inst_19404);

(statearr_19422_19447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (13))){
var state_19414__$1 = state_19414;
var statearr_19423_19448 = state_19414__$1;
(statearr_19423_19448[(2)] = null);

(statearr_19423_19448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (6))){
var inst_19374 = (state_19414[(7)]);
var inst_19399 = inst_19374.length;
var inst_19400 = (inst_19399 > (0));
var state_19414__$1 = state_19414;
if(cljs.core.truth_(inst_19400)){
var statearr_19424_19449 = state_19414__$1;
(statearr_19424_19449[(1)] = (12));

} else {
var statearr_19425_19450 = state_19414__$1;
(statearr_19425_19450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (3))){
var inst_19412 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19414__$1,inst_19412);
} else {
if((state_val_19415 === (12))){
var inst_19374 = (state_19414[(7)]);
var inst_19402 = cljs.core.vec.call(null,inst_19374);
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19414__$1,(15),out,inst_19402);
} else {
if((state_val_19415 === (2))){
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19414__$1,(4),ch);
} else {
if((state_val_19415 === (11))){
var inst_19378 = (state_19414[(9)]);
var inst_19382 = (state_19414[(10)]);
var inst_19392 = (state_19414[(2)]);
var inst_19393 = [];
var inst_19394 = inst_19393.push(inst_19378);
var inst_19374 = inst_19393;
var inst_19375 = inst_19382;
var state_19414__$1 = (function (){var statearr_19426 = state_19414;
(statearr_19426[(11)] = inst_19392);

(statearr_19426[(7)] = inst_19374);

(statearr_19426[(12)] = inst_19394);

(statearr_19426[(8)] = inst_19375);

return statearr_19426;
})();
var statearr_19427_19451 = state_19414__$1;
(statearr_19427_19451[(2)] = null);

(statearr_19427_19451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (9))){
var inst_19374 = (state_19414[(7)]);
var inst_19390 = cljs.core.vec.call(null,inst_19374);
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19414__$1,(11),out,inst_19390);
} else {
if((state_val_19415 === (5))){
var inst_19378 = (state_19414[(9)]);
var inst_19375 = (state_19414[(8)]);
var inst_19382 = (state_19414[(10)]);
var inst_19382__$1 = f.call(null,inst_19378);
var inst_19383 = cljs.core._EQ_.call(null,inst_19382__$1,inst_19375);
var inst_19384 = cljs.core.keyword_identical_QMARK_.call(null,inst_19375,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19385 = (inst_19383) || (inst_19384);
var state_19414__$1 = (function (){var statearr_19428 = state_19414;
(statearr_19428[(10)] = inst_19382__$1);

return statearr_19428;
})();
if(cljs.core.truth_(inst_19385)){
var statearr_19429_19452 = state_19414__$1;
(statearr_19429_19452[(1)] = (8));

} else {
var statearr_19430_19453 = state_19414__$1;
(statearr_19430_19453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (14))){
var inst_19407 = (state_19414[(2)]);
var inst_19408 = cljs.core.async.close_BANG_.call(null,out);
var state_19414__$1 = (function (){var statearr_19432 = state_19414;
(statearr_19432[(13)] = inst_19407);

return statearr_19432;
})();
var statearr_19433_19454 = state_19414__$1;
(statearr_19433_19454[(2)] = inst_19408);

(statearr_19433_19454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (10))){
var inst_19397 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19434_19455 = state_19414__$1;
(statearr_19434_19455[(2)] = inst_19397);

(statearr_19434_19455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (8))){
var inst_19374 = (state_19414[(7)]);
var inst_19378 = (state_19414[(9)]);
var inst_19382 = (state_19414[(10)]);
var inst_19387 = inst_19374.push(inst_19378);
var tmp19431 = inst_19374;
var inst_19374__$1 = tmp19431;
var inst_19375 = inst_19382;
var state_19414__$1 = (function (){var statearr_19435 = state_19414;
(statearr_19435[(14)] = inst_19387);

(statearr_19435[(7)] = inst_19374__$1);

(statearr_19435[(8)] = inst_19375);

return statearr_19435;
})();
var statearr_19436_19456 = state_19414__$1;
(statearr_19436_19456[(2)] = null);

(statearr_19436_19456[(1)] = (2));


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
});})(c__17552__auto___19442,out))
;
return ((function (switch__17464__auto__,c__17552__auto___19442,out){
return (function() {
var cljs$core$async$state_machine__17465__auto__ = null;
var cljs$core$async$state_machine__17465__auto____0 = (function (){
var statearr_19437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19437[(0)] = cljs$core$async$state_machine__17465__auto__);

(statearr_19437[(1)] = (1));

return statearr_19437;
});
var cljs$core$async$state_machine__17465__auto____1 = (function (state_19414){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_19414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e19438){if((e19438 instanceof Object)){
var ex__17468__auto__ = e19438;
var statearr_19439_19457 = state_19414;
(statearr_19439_19457[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19458 = state_19414;
state_19414 = G__19458;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
cljs$core$async$state_machine__17465__auto__ = function(state_19414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17465__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17465__auto____1.call(this,state_19414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17465__auto____0;
cljs$core$async$state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17465__auto____1;
return cljs$core$async$state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___19442,out))
})();
var state__17554__auto__ = (function (){var statearr_19440 = f__17553__auto__.call(null);
(statearr_19440[(6)] = c__17552__auto___19442);

return statearr_19440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___19442,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1518330961267
