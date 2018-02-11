// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8351__auto__ = (((value == null))?null:value);
var m__8352__auto__ = (devtools.format._header[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,value);
} else {
var m__8352__auto____$1 = (devtools.format._header["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8351__auto__ = (((value == null))?null:value);
var m__8352__auto__ = (devtools.format._has_body[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,value);
} else {
var m__8352__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8351__auto__ = (((value == null))?null:value);
var m__8352__auto__ = (devtools.format._body[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,value);
} else {
var m__8352__auto____$1 = (devtools.format._body["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o21370 = temp__4655__auto__;
var temp__4655__auto____$1 = (o21370["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o21371 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o21371["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o21372 = temp__4655__auto____$2;
return (o21372["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o21373 = temp__4655__auto__;
var temp__4655__auto____$1 = (o21373["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o21374 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o21374["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o21375 = temp__4655__auto____$2;
return (o21375["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o21376 = temp__4655__auto__;
var temp__4655__auto____$1 = (o21376["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o21377 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o21377["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o21378 = temp__4655__auto____$2;
return (o21378["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o21379 = temp__4655__auto__;
var temp__4655__auto____$1 = (o21379["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o21380 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o21380["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o21381 = temp__4655__auto____$2;
return (o21381["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o21382 = temp__4655__auto__;
var temp__4655__auto____$1 = (o21382["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o21383 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o21383["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o21384 = temp__4655__auto____$2;
return (o21384["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o21385 = temp__4655__auto__;
var temp__4655__auto____$1 = (o21385["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o21386 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o21386["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o21387 = temp__4655__auto____$2;
return (o21387["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o21388 = temp__4655__auto__;
var temp__4655__auto____$1 = (o21388["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o21389 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o21389["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o21390 = temp__4655__auto____$2;
return (o21390["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21392 = arguments.length;
var i__8840__auto___21393 = (0);
while(true){
if((i__8840__auto___21393 < len__8839__auto___21392)){
args__8846__auto__.push((arguments[i__8840__auto___21393]));

var G__21394 = (i__8840__auto___21393 + (1));
i__8840__auto___21393 = G__21394;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq21391){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21391));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21396 = arguments.length;
var i__8840__auto___21397 = (0);
while(true){
if((i__8840__auto___21397 < len__8839__auto___21396)){
args__8846__auto__.push((arguments[i__8840__auto___21397]));

var G__21398 = (i__8840__auto___21397 + (1));
i__8840__auto___21397 = G__21398;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq21395){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21395));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21400 = arguments.length;
var i__8840__auto___21401 = (0);
while(true){
if((i__8840__auto___21401 < len__8839__auto___21400)){
args__8846__auto__.push((arguments[i__8840__auto___21401]));

var G__21402 = (i__8840__auto___21401 + (1));
i__8840__auto___21401 = G__21402;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq21399){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21399));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21404 = arguments.length;
var i__8840__auto___21405 = (0);
while(true){
if((i__8840__auto___21405 < len__8839__auto___21404)){
args__8846__auto__.push((arguments[i__8840__auto___21405]));

var G__21406 = (i__8840__auto___21405 + (1));
i__8840__auto___21405 = G__21406;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq21403){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21403));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21408 = arguments.length;
var i__8840__auto___21409 = (0);
while(true){
if((i__8840__auto___21409 < len__8839__auto___21408)){
args__8846__auto__.push((arguments[i__8840__auto___21409]));

var G__21410 = (i__8840__auto___21409 + (1));
i__8840__auto___21409 = G__21410;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq21407){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21407));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21412 = arguments.length;
var i__8840__auto___21413 = (0);
while(true){
if((i__8840__auto___21413 < len__8839__auto___21412)){
args__8846__auto__.push((arguments[i__8840__auto___21413]));

var G__21414 = (i__8840__auto___21413 + (1));
i__8840__auto___21413 = G__21414;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq21411){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21411));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21416 = arguments.length;
var i__8840__auto___21417 = (0);
while(true){
if((i__8840__auto___21417 < len__8839__auto___21416)){
args__8846__auto__.push((arguments[i__8840__auto___21417]));

var G__21418 = (i__8840__auto___21417 + (1));
i__8840__auto___21417 = G__21418;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq21415){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21415));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21426 = arguments.length;
var i__8840__auto___21427 = (0);
while(true){
if((i__8840__auto___21427 < len__8839__auto___21426)){
args__8846__auto__.push((arguments[i__8840__auto___21427]));

var G__21428 = (i__8840__auto___21427 + (1));
i__8840__auto___21427 = G__21428;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__21422){
var vec__21423 = p__21422;
var state_override = cljs.core.nth.call(null,vec__21423,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__21423,state_override){
return (function (p1__21419_SHARP_){
return cljs.core.merge.call(null,p1__21419_SHARP_,state_override);
});})(vec__21423,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq21420){
var G__21421 = cljs.core.first.call(null,seq21420);
var seq21420__$1 = cljs.core.next.call(null,seq21420);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__21421,seq21420__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21430 = arguments.length;
var i__8840__auto___21431 = (0);
while(true){
if((i__8840__auto___21431 < len__8839__auto___21430)){
args__8846__auto__.push((arguments[i__8840__auto___21431]));

var G__21432 = (i__8840__auto___21431 + (1));
i__8840__auto___21431 = G__21432;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq21429){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21429));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___21435 = arguments.length;
var i__8840__auto___21436 = (0);
while(true){
if((i__8840__auto___21436 < len__8839__auto___21435)){
args__8846__auto__.push((arguments[i__8840__auto___21436]));

var G__21437 = (i__8840__auto___21436 + (1));
i__8840__auto___21436 = G__21437;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq21433){
var G__21434 = cljs.core.first.call(null,seq21433);
var seq21433__$1 = cljs.core.next.call(null,seq21433);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__21434,seq21433__$1);
});


//# sourceMappingURL=format.js.map?rel=1518330964925
