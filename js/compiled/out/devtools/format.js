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
var o22144 = temp__4655__auto__;
var temp__4655__auto____$1 = (o22144["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o22145 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o22145["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o22146 = temp__4655__auto____$2;
return (o22146["make_template"]);
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
var o22147 = temp__4655__auto__;
var temp__4655__auto____$1 = (o22147["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o22148 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o22148["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o22149 = temp__4655__auto____$2;
return (o22149["make_group"]);
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
var o22150 = temp__4655__auto__;
var temp__4655__auto____$1 = (o22150["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o22151 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o22151["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o22152 = temp__4655__auto____$2;
return (o22152["make_reference"]);
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
var o22153 = temp__4655__auto__;
var temp__4655__auto____$1 = (o22153["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o22154 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o22154["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o22155 = temp__4655__auto____$2;
return (o22155["make_surrogate"]);
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
var o22156 = temp__4655__auto__;
var temp__4655__auto____$1 = (o22156["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o22157 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o22157["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o22158 = temp__4655__auto____$2;
return (o22158["render_markup"]);
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
var o22159 = temp__4655__auto__;
var temp__4655__auto____$1 = (o22159["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o22160 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o22160["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o22161 = temp__4655__auto____$2;
return (o22161["_LT_header_GT_"]);
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
var o22162 = temp__4655__auto__;
var temp__4655__auto____$1 = (o22162["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o22163 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o22163["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o22164 = temp__4655__auto____$2;
return (o22164["_LT_standard_body_GT_"]);
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
var len__8839__auto___22166 = arguments.length;
var i__8840__auto___22167 = (0);
while(true){
if((i__8840__auto___22167 < len__8839__auto___22166)){
args__8846__auto__.push((arguments[i__8840__auto___22167]));

var G__22168 = (i__8840__auto___22167 + (1));
i__8840__auto___22167 = G__22168;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq22165){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22165));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___22170 = arguments.length;
var i__8840__auto___22171 = (0);
while(true){
if((i__8840__auto___22171 < len__8839__auto___22170)){
args__8846__auto__.push((arguments[i__8840__auto___22171]));

var G__22172 = (i__8840__auto___22171 + (1));
i__8840__auto___22171 = G__22172;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq22169){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22169));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8846__auto__ = [];
var len__8839__auto___22174 = arguments.length;
var i__8840__auto___22175 = (0);
while(true){
if((i__8840__auto___22175 < len__8839__auto___22174)){
args__8846__auto__.push((arguments[i__8840__auto___22175]));

var G__22176 = (i__8840__auto___22175 + (1));
i__8840__auto___22175 = G__22176;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq22173){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22173));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8846__auto__ = [];
var len__8839__auto___22178 = arguments.length;
var i__8840__auto___22179 = (0);
while(true){
if((i__8840__auto___22179 < len__8839__auto___22178)){
args__8846__auto__.push((arguments[i__8840__auto___22179]));

var G__22180 = (i__8840__auto___22179 + (1));
i__8840__auto___22179 = G__22180;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq22177){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22177));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___22182 = arguments.length;
var i__8840__auto___22183 = (0);
while(true){
if((i__8840__auto___22183 < len__8839__auto___22182)){
args__8846__auto__.push((arguments[i__8840__auto___22183]));

var G__22184 = (i__8840__auto___22183 + (1));
i__8840__auto___22183 = G__22184;
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

devtools.format.template.cljs$lang$applyTo = (function (seq22181){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22181));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8846__auto__ = [];
var len__8839__auto___22186 = arguments.length;
var i__8840__auto___22187 = (0);
while(true){
if((i__8840__auto___22187 < len__8839__auto___22186)){
args__8846__auto__.push((arguments[i__8840__auto___22187]));

var G__22188 = (i__8840__auto___22187 + (1));
i__8840__auto___22187 = G__22188;
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

devtools.format.group.cljs$lang$applyTo = (function (seq22185){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22185));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8846__auto__ = [];
var len__8839__auto___22190 = arguments.length;
var i__8840__auto___22191 = (0);
while(true){
if((i__8840__auto___22191 < len__8839__auto___22190)){
args__8846__auto__.push((arguments[i__8840__auto___22191]));

var G__22192 = (i__8840__auto___22191 + (1));
i__8840__auto___22191 = G__22192;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq22189){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22189));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8846__auto__ = [];
var len__8839__auto___22200 = arguments.length;
var i__8840__auto___22201 = (0);
while(true){
if((i__8840__auto___22201 < len__8839__auto___22200)){
args__8846__auto__.push((arguments[i__8840__auto___22201]));

var G__22202 = (i__8840__auto___22201 + (1));
i__8840__auto___22201 = G__22202;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__22196){
var vec__22197 = p__22196;
var state_override = cljs.core.nth.call(null,vec__22197,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__22197,state_override){
return (function (p1__22193_SHARP_){
return cljs.core.merge.call(null,p1__22193_SHARP_,state_override);
});})(vec__22197,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq22194){
var G__22195 = cljs.core.first.call(null,seq22194);
var seq22194__$1 = cljs.core.next.call(null,seq22194);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__22195,seq22194__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8846__auto__ = [];
var len__8839__auto___22204 = arguments.length;
var i__8840__auto___22205 = (0);
while(true){
if((i__8840__auto___22205 < len__8839__auto___22204)){
args__8846__auto__.push((arguments[i__8840__auto___22205]));

var G__22206 = (i__8840__auto___22205 + (1));
i__8840__auto___22205 = G__22206;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq22203){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22203));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___22209 = arguments.length;
var i__8840__auto___22210 = (0);
while(true){
if((i__8840__auto___22210 < len__8839__auto___22209)){
args__8846__auto__.push((arguments[i__8840__auto___22210]));

var G__22211 = (i__8840__auto___22210 + (1));
i__8840__auto___22210 = G__22211;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq22207){
var G__22208 = cljs.core.first.call(null,seq22207);
var seq22207__$1 = cljs.core.next.call(null,seq22207);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__22208,seq22207__$1);
});


//# sourceMappingURL=format.js.map?rel=1518565224824
