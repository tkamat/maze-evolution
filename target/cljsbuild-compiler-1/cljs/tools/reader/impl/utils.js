// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$(x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9076__auto__,k__9077__auto__){
var self__ = this;
var this__9076__auto____$1 = this;
return this__9076__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9077__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9078__auto__,k14616,else__9079__auto__){
var self__ = this;
var this__9078__auto____$1 = this;
var G__14620 = k14616;
var G__14620__$1 = (((G__14620 instanceof cljs.core.Keyword))?G__14620.fqn:null);
switch (G__14620__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14616,else__9079__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9090__auto__,writer__9091__auto__,opts__9092__auto__){
var self__ = this;
var this__9090__auto____$1 = this;
var pr_pair__9093__auto__ = ((function (this__9090__auto____$1){
return (function (keyval__9094__auto__){
return cljs.core.pr_sequential_writer(writer__9091__auto__,cljs.core.pr_writer,""," ","",opts__9092__auto__,keyval__9094__auto__);
});})(this__9090__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9091__auto__,pr_pair__9093__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__9092__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$splicing_QMARK_,self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$form,self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14615){
var self__ = this;
var G__14615__$1 = this;
return (new cljs.core.RecordIter((0),G__14615__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splicing_QMARK_,cljs.core.cst$kw$form], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9074__auto__){
var self__ = this;
var this__9074__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9071__auto__){
var self__ = this;
var this__9071__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9080__auto__){
var self__ = this;
var this__9080__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9072__auto__){
var self__ = this;
var this__9072__auto____$1 = this;
var h__8844__auto__ = self__.__hash;
if(!((h__8844__auto__ == null))){
return h__8844__auto__;
} else {
var h__8844__auto____$1 = (function (){var fexpr__14621 = ((function (h__8844__auto__,this__9072__auto____$1){
return (function (coll__9073__auto__){
return (-209062840 ^ cljs.core.hash_unordered_coll(coll__9073__auto__));
});})(h__8844__auto__,this__9072__auto____$1))
;
return fexpr__14621(this__9072__auto____$1);
})();
self__.__hash = h__8844__auto____$1;

return h__8844__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14617,other14618){
var self__ = this;
var this14617__$1 = this;
return (!((other14618 == null))) && ((this14617__$1.constructor === other14618.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14617__$1.splicing_QMARK_,other14618.splicing_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14617__$1.form,other14618.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14617__$1.__extmap,other14618.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9085__auto__,k__9086__auto__){
var self__ = this;
var this__9085__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$splicing_QMARK_,null,cljs.core.cst$kw$form,null], null), null),k__9086__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9085__auto____$1),self__.__meta),k__9086__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9086__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9083__auto__,k__9084__auto__,G__14615){
var self__ = this;
var this__9083__auto____$1 = this;
var pred__14622 = cljs.core.keyword_identical_QMARK_;
var expr__14623 = k__9084__auto__;
if(cljs.core.truth_((function (){var G__14625 = cljs.core.cst$kw$splicing_QMARK_;
var G__14626 = expr__14623;
return (pred__14622.cljs$core$IFn$_invoke$arity$2 ? pred__14622.cljs$core$IFn$_invoke$arity$2(G__14625,G__14626) : pred__14622.call(null,G__14625,G__14626));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__14615,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14627 = cljs.core.cst$kw$form;
var G__14628 = expr__14623;
return (pred__14622.cljs$core$IFn$_invoke$arity$2 ? pred__14622.cljs$core$IFn$_invoke$arity$2(G__14627,G__14628) : pred__14622.call(null,G__14627,G__14628));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__14615,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9084__auto__,G__14615),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9088__auto__){
var self__ = this;
var this__9088__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$splicing_QMARK_,self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$form,self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9075__auto__,G__14615){
var self__ = this;
var this__9075__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__14615,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9081__auto__,entry__9082__auto__){
var self__ = this;
var this__9081__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9082__auto__)){
return this__9081__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9082__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9081__auto____$1,entry__9082__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$splicing_QMARK_,cljs.core.cst$sym$form], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__9114__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__9114__auto__,writer__9115__auto__){
return cljs.core._write(writer__9115__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__14619){
return (new cljs.tools.reader.impl.utils.ReaderConditional(cljs.core.cst$kw$splicing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14619),cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(G__14619),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14619,cljs.core.cst$kw$splicing_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form], 0))),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write(writer,["#?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$splicing_QMARK_.cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__9270__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__14630(s__14631){
return (new cljs.core.LazySeq(null,(function (){
var s__14631__$1 = s__14631;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14631__$1);
if(temp__5457__auto__){
var s__14631__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14631__$2)){
var c__9268__auto__ = cljs.core.chunk_first(s__14631__$2);
var size__9269__auto__ = cljs.core.count(c__9268__auto__);
var b__14633 = cljs.core.chunk_buffer(size__9269__auto__);
if((function (){var i__14632 = (0);
while(true){
if((i__14632 < size__9269__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9268__auto__,i__14632);
cljs.core.chunk_append(b__14633,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__14634 = (function (){var fexpr__14637 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__14637.cljs$core$IFn$_invoke$arity$1 ? fexpr__14637.cljs$core$IFn$_invoke$arity$1(key) : fexpr__14637.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14634,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14634,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key));

var G__14642 = (i__14632 + (1));
i__14632 = G__14642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14633),cljs$tools$reader$impl$utils$namespace_keys_$_iter__14630(cljs.core.chunk_rest(s__14631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14633),null);
}
} else {
var key = cljs.core.first(s__14631__$2);
return cljs.core.cons(((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__14638 = (function (){var fexpr__14641 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__14641.cljs$core$IFn$_invoke$arity$1 ? fexpr__14641.cljs$core$IFn$_invoke$arity$1(key) : fexpr__14641.call(null,key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14638,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14638,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key.call(null,ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key.call(null,key_name));
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__14630(cljs.core.rest(s__14631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9270__auto__(keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__14643){
var vec__14644 = p__14643;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});
