// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075 = (function (val,meta18076){
this.val = val;
this.meta18076 = meta18076;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18077,meta18076__$1){
var self__ = this;
var _18077__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075(self__.val,meta18076__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18077){
var self__ = this;
var _18077__$1 = this;
return self__.meta18076;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta18076], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels18075";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels18075");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels18075 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels18075(val__$1,meta18076){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075(val__$1,meta18076));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18075(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$val], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__9121__auto__ = (((this$ == null))?null:this$);
var m__9122__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__9121__auto__)]);
if(!((m__9122__auto__ == null))){
return (m__9122__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9122__auto__.call(null,this$));
} else {
var m__9122__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__9122__auto____$1 == null))){
return (m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9122__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9122__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_18089 = self__.puts.pop();
if((putter_18089 == null)){
} else {
var put_handler_18090 = putter_18089.handler;
var val_18091 = putter_18089.val;
if(put_handler_18090.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_18092 = put_handler_18090.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_18092,put_handler_18090,val_18091,putter_18089,this$__$1){
return (function (){
return (put_cb_18092.cljs$core$IFn$_invoke$arity$1 ? put_cb_18092.cljs$core$IFn$_invoke$arity$1(true) : put_cb_18092.call(null,true));
});})(put_cb_18092,put_handler_18090,val_18091,putter_18089,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__8376__auto__ = self__.buf;
if(cljs.core.truth_(and__8376__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__8376__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__18093 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__18093;
continue;
} else {
var G__18094 = takers;
takers = G__18094;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__18078_18095 = cljs.core.seq(take_cbs);
var chunk__18079_18096 = null;
var count__18080_18097 = (0);
var i__18081_18098 = (0);
while(true){
if((i__18081_18098 < count__18080_18097)){
var f_18099 = chunk__18079_18096.cljs$core$IIndexed$_nth$arity$2(null,i__18081_18098);
cljs.core.async.impl.dispatch.run(f_18099);

var G__18100 = seq__18078_18095;
var G__18101 = chunk__18079_18096;
var G__18102 = count__18080_18097;
var G__18103 = (i__18081_18098 + (1));
seq__18078_18095 = G__18100;
chunk__18079_18096 = G__18101;
count__18080_18097 = G__18102;
i__18081_18098 = G__18103;
continue;
} else {
var temp__5457__auto___18104 = cljs.core.seq(seq__18078_18095);
if(temp__5457__auto___18104){
var seq__18078_18105__$1 = temp__5457__auto___18104;
if(cljs.core.chunked_seq_QMARK_(seq__18078_18105__$1)){
var c__9319__auto___18106 = cljs.core.chunk_first(seq__18078_18105__$1);
var G__18107 = cljs.core.chunk_rest(seq__18078_18105__$1);
var G__18108 = c__9319__auto___18106;
var G__18109 = cljs.core.count(c__9319__auto___18106);
var G__18110 = (0);
seq__18078_18095 = G__18107;
chunk__18079_18096 = G__18108;
count__18080_18097 = G__18109;
i__18081_18098 = G__18110;
continue;
} else {
var f_18111 = cljs.core.first(seq__18078_18105__$1);
cljs.core.async.impl.dispatch.run(f_18111);

var G__18112 = cljs.core.next(seq__18078_18105__$1);
var G__18113 = null;
var G__18114 = (0);
var G__18115 = (0);
seq__18078_18095 = G__18112;
chunk__18079_18096 = G__18113;
count__18080_18097 = G__18114;
i__18081_18098 = G__18115;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var temp__5455__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__18082 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__8376__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__8376__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__8376__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))){
var G__18116 = cbs__$1;
cbs = G__18116;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18082,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18082,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__18085_18117 = cljs.core.seq(cbs);
var chunk__18086_18118 = null;
var count__18087_18119 = (0);
var i__18088_18120 = (0);
while(true){
if((i__18088_18120 < count__18087_18119)){
var cb_18121 = chunk__18086_18118.cljs$core$IIndexed$_nth$arity$2(null,i__18088_18120);
cljs.core.async.impl.dispatch.run(((function (seq__18085_18117,chunk__18086_18118,count__18087_18119,i__18088_18120,cb_18121,val,vec__18082,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_18121.cljs$core$IFn$_invoke$arity$1 ? cb_18121.cljs$core$IFn$_invoke$arity$1(true) : cb_18121.call(null,true));
});})(seq__18085_18117,chunk__18086_18118,count__18087_18119,i__18088_18120,cb_18121,val,vec__18082,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__18122 = seq__18085_18117;
var G__18123 = chunk__18086_18118;
var G__18124 = count__18087_18119;
var G__18125 = (i__18088_18120 + (1));
seq__18085_18117 = G__18122;
chunk__18086_18118 = G__18123;
count__18087_18119 = G__18124;
i__18088_18120 = G__18125;
continue;
} else {
var temp__5457__auto___18126 = cljs.core.seq(seq__18085_18117);
if(temp__5457__auto___18126){
var seq__18085_18127__$1 = temp__5457__auto___18126;
if(cljs.core.chunked_seq_QMARK_(seq__18085_18127__$1)){
var c__9319__auto___18128 = cljs.core.chunk_first(seq__18085_18127__$1);
var G__18129 = cljs.core.chunk_rest(seq__18085_18127__$1);
var G__18130 = c__9319__auto___18128;
var G__18131 = cljs.core.count(c__9319__auto___18128);
var G__18132 = (0);
seq__18085_18117 = G__18129;
chunk__18086_18118 = G__18130;
count__18087_18119 = G__18131;
i__18088_18120 = G__18132;
continue;
} else {
var cb_18133 = cljs.core.first(seq__18085_18127__$1);
cljs.core.async.impl.dispatch.run(((function (seq__18085_18117,chunk__18086_18118,count__18087_18119,i__18088_18120,cb_18133,seq__18085_18127__$1,temp__5457__auto___18126,val,vec__18082,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_18133.cljs$core$IFn$_invoke$arity$1 ? cb_18133.cljs$core$IFn$_invoke$arity$1(true) : cb_18133.call(null,true));
});})(seq__18085_18117,chunk__18086_18118,count__18087_18119,i__18088_18120,cb_18133,seq__18085_18127__$1,temp__5457__auto___18126,val,vec__18082,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__18134 = cljs.core.next(seq__18085_18127__$1);
var G__18135 = null;
var G__18136 = (0);
var G__18137 = (0);
seq__18085_18117 = G__18134;
chunk__18086_18118 = G__18135;
count__18087_18119 = G__18136;
i__18088_18120 = G__18137;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__8376__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__8376__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__8376__auto__;
}
})())){
var has_val = (function (){var and__8376__auto__ = self__.buf;
if(cljs.core.truth_(and__8376__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__8376__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__8376__auto__ = self__.buf;
if(cljs.core.truth_(and__8376__auto__)){
return (self__.puts.length === (0));
} else {
return and__8376__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_18138 = self__.takes.pop();
if((taker_18138 == null)){
} else {
if(taker_18138.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_18139 = taker_18138.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_18140 = (cljs.core.truth_((function (){var and__8376__auto__ = self__.buf;
if(cljs.core.truth_(and__8376__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__8376__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_18139,val_18140,taker_18138,this$__$1){
return (function (){
return (take_cb_18139.cljs$core$IFn$_invoke$arity$1 ? take_cb_18139.cljs$core$IFn$_invoke$arity$1(val_18140) : take_cb_18139.call(null,val_18140));
});})(take_cb_18139,val_18140,taker_18138,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$takes,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_takes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$puts,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_puts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.with_meta(cljs.core.cst$sym$closed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$add_BANG_], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__9059__auto__,writer__9060__auto__,opt__9061__auto__){
return cljs.core._write(writer__9060__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__18141 = (function (){var or__8388__auto__ = exh;
if(cljs.core.truth_(or__8388__auto__)){
return or__8388__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__18141.cljs$core$IFn$_invoke$arity$1 ? fexpr__18141.cljs$core$IFn$_invoke$arity$1(t) : fexpr__18141.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__18143 = arguments.length;
switch (G__18143) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__18147 = null;
var G__18147__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e18144){var t = e18144;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__18147__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e18145){var t = e18145;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__18147 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__18147__1.call(this,buf__$1);
case 2:
return G__18147__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__18147.cljs$core$IFn$_invoke$arity$1 = G__18147__1;
G__18147.cljs$core$IFn$_invoke$arity$2 = G__18147__2;
return G__18147;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

