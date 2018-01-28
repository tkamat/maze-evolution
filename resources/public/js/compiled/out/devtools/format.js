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
var x__29017__auto__ = (((value == null))?null:value);
var m__29018__auto__ = (devtools.format._header[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,value);
} else {
var m__29018__auto____$1 = (devtools.format._header["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,value);
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
var x__29017__auto__ = (((value == null))?null:value);
var m__29018__auto__ = (devtools.format._has_body[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,value);
} else {
var m__29018__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,value);
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
var x__29017__auto__ = (((value == null))?null:value);
var m__29018__auto__ = (devtools.format._body[goog.typeOf(x__29017__auto__)]);
if(!((m__29018__auto__ == null))){
return m__29018__auto__.call(null,value);
} else {
var m__29018__auto____$1 = (devtools.format._body["_"]);
if(!((m__29018__auto____$1 == null))){
return m__29018__auto____$1.call(null,value);
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
var o38095 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38095["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38096 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38096["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38097 = temp__4655__auto____$2;
return (o38097["make_template"]);
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
var o38098 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38098["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38099 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38099["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38100 = temp__4655__auto____$2;
return (o38100["make_group"]);
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
var o38101 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38101["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38102 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38102["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38103 = temp__4655__auto____$2;
return (o38103["make_reference"]);
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
var o38104 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38104["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38105 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38105["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38106 = temp__4655__auto____$2;
return (o38106["make_surrogate"]);
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
var o38107 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38107["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38108 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38108["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38109 = temp__4655__auto____$2;
return (o38109["render_markup"]);
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
var o38110 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38110["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38111 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38111["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38112 = temp__4655__auto____$2;
return (o38112["_LT_header_GT_"]);
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
var o38113 = temp__4655__auto__;
var temp__4655__auto____$1 = (o38113["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o38114 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o38114["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o38115 = temp__4655__auto____$2;
return (o38115["_LT_standard_body_GT_"]);
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
var args__29512__auto__ = [];
var len__29505__auto___38117 = arguments.length;
var i__29506__auto___38118 = (0);
while(true){
if((i__29506__auto___38118 < len__29505__auto___38117)){
args__29512__auto__.push((arguments[i__29506__auto___38118]));

var G__38119 = (i__29506__auto___38118 + (1));
i__29506__auto___38118 = G__38119;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38116){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38116));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29512__auto__ = [];
var len__29505__auto___38121 = arguments.length;
var i__29506__auto___38122 = (0);
while(true){
if((i__29506__auto___38122 < len__29505__auto___38121)){
args__29512__auto__.push((arguments[i__29506__auto___38122]));

var G__38123 = (i__29506__auto___38122 + (1));
i__29506__auto___38122 = G__38123;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38120){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38120));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29512__auto__ = [];
var len__29505__auto___38125 = arguments.length;
var i__29506__auto___38126 = (0);
while(true){
if((i__29506__auto___38126 < len__29505__auto___38125)){
args__29512__auto__.push((arguments[i__29506__auto___38126]));

var G__38127 = (i__29506__auto___38126 + (1));
i__29506__auto___38126 = G__38127;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38124){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38124));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29512__auto__ = [];
var len__29505__auto___38129 = arguments.length;
var i__29506__auto___38130 = (0);
while(true){
if((i__29506__auto___38130 < len__29505__auto___38129)){
args__29512__auto__.push((arguments[i__29506__auto___38130]));

var G__38131 = (i__29506__auto___38130 + (1));
i__29506__auto___38130 = G__38131;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38128){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38128));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29512__auto__ = [];
var len__29505__auto___38133 = arguments.length;
var i__29506__auto___38134 = (0);
while(true){
if((i__29506__auto___38134 < len__29505__auto___38133)){
args__29512__auto__.push((arguments[i__29506__auto___38134]));

var G__38135 = (i__29506__auto___38134 + (1));
i__29506__auto___38134 = G__38135;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38132){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38132));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29512__auto__ = [];
var len__29505__auto___38137 = arguments.length;
var i__29506__auto___38138 = (0);
while(true){
if((i__29506__auto___38138 < len__29505__auto___38137)){
args__29512__auto__.push((arguments[i__29506__auto___38138]));

var G__38139 = (i__29506__auto___38138 + (1));
i__29506__auto___38138 = G__38139;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38136){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38136));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29512__auto__ = [];
var len__29505__auto___38141 = arguments.length;
var i__29506__auto___38142 = (0);
while(true){
if((i__29506__auto___38142 < len__29505__auto___38141)){
args__29512__auto__.push((arguments[i__29506__auto___38142]));

var G__38143 = (i__29506__auto___38142 + (1));
i__29506__auto___38142 = G__38143;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38140){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38140));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29512__auto__ = [];
var len__29505__auto___38151 = arguments.length;
var i__29506__auto___38152 = (0);
while(true){
if((i__29506__auto___38152 < len__29505__auto___38151)){
args__29512__auto__.push((arguments[i__29506__auto___38152]));

var G__38153 = (i__29506__auto___38152 + (1));
i__29506__auto___38152 = G__38153;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((1) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29513__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38147){
var vec__38148 = p__38147;
var state_override = cljs.core.nth.call(null,vec__38148,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38148,state_override){
return (function (p1__38144_SHARP_){
return cljs.core.merge.call(null,p1__38144_SHARP_,state_override);
});})(vec__38148,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38145){
var G__38146 = cljs.core.first.call(null,seq38145);
var seq38145__$1 = cljs.core.next.call(null,seq38145);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38146,seq38145__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29512__auto__ = [];
var len__29505__auto___38155 = arguments.length;
var i__29506__auto___38156 = (0);
while(true){
if((i__29506__auto___38156 < len__29505__auto___38155)){
args__29512__auto__.push((arguments[i__29506__auto___38156]));

var G__38157 = (i__29506__auto___38156 + (1));
i__29506__auto___38156 = G__38157;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38154){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38154));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29512__auto__ = [];
var len__29505__auto___38160 = arguments.length;
var i__29506__auto___38161 = (0);
while(true){
if((i__29506__auto___38161 < len__29505__auto___38160)){
args__29512__auto__.push((arguments[i__29506__auto___38161]));

var G__38162 = (i__29506__auto___38161 + (1));
i__29506__auto___38161 = G__38162;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((1) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29513__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38158){
var G__38159 = cljs.core.first.call(null,seq38158);
var seq38158__$1 = cljs.core.next.call(null,seq38158);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38159,seq38158__$1);
});


//# sourceMappingURL=format.js.map?rel=1517031117067
