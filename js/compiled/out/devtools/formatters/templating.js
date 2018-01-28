// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x40258_40259 = value;
x40258_40259.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x40261_40262 = value;
x40261_40262.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x40264_40265 = value;
x40264_40265.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__28322__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__28322__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__28322__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__29512__auto__ = [];
var len__29505__auto___40272 = arguments.length;
var i__29506__auto___40273 = (0);
while(true){
if((i__29506__auto___40273 < len__29505__auto___40272)){
args__29512__auto__.push((arguments[i__29506__auto___40273]));

var G__40274 = (i__29506__auto___40273 + (1));
i__29506__auto___40273 = G__40274;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__40268_40275 = cljs.core.seq.call(null,items);
var chunk__40269_40276 = null;
var count__40270_40277 = (0);
var i__40271_40278 = (0);
while(true){
if((i__40271_40278 < count__40270_40277)){
var item_40279 = cljs.core._nth.call(null,chunk__40269_40276,i__40271_40278);
if(!((item_40279 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40279)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40279)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40279));
}
} else {
}

var G__40280 = seq__40268_40275;
var G__40281 = chunk__40269_40276;
var G__40282 = count__40270_40277;
var G__40283 = (i__40271_40278 + (1));
seq__40268_40275 = G__40280;
chunk__40269_40276 = G__40281;
count__40270_40277 = G__40282;
i__40271_40278 = G__40283;
continue;
} else {
var temp__4657__auto___40284 = cljs.core.seq.call(null,seq__40268_40275);
if(temp__4657__auto___40284){
var seq__40268_40285__$1 = temp__4657__auto___40284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40268_40285__$1)){
var c__29173__auto___40286 = cljs.core.chunk_first.call(null,seq__40268_40285__$1);
var G__40287 = cljs.core.chunk_rest.call(null,seq__40268_40285__$1);
var G__40288 = c__29173__auto___40286;
var G__40289 = cljs.core.count.call(null,c__29173__auto___40286);
var G__40290 = (0);
seq__40268_40275 = G__40287;
chunk__40269_40276 = G__40288;
count__40270_40277 = G__40289;
i__40271_40278 = G__40290;
continue;
} else {
var item_40291 = cljs.core.first.call(null,seq__40268_40285__$1);
if(!((item_40291 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40291)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40291)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40291));
}
} else {
}

var G__40292 = cljs.core.next.call(null,seq__40268_40285__$1);
var G__40293 = null;
var G__40294 = (0);
var G__40295 = (0);
seq__40268_40275 = G__40292;
chunk__40269_40276 = G__40293;
count__40270_40277 = G__40294;
i__40271_40278 = G__40295;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40267){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40267));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__29512__auto__ = [];
var len__29505__auto___40303 = arguments.length;
var i__29506__auto___40304 = (0);
while(true){
if((i__29506__auto___40304 < len__29505__auto___40303)){
args__29512__auto__.push((arguments[i__29506__auto___40304]));

var G__40305 = (i__29506__auto___40304 + (1));
i__29506__auto___40304 = G__40305;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((2) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29513__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__40299_40306 = cljs.core.seq.call(null,children);
var chunk__40300_40307 = null;
var count__40301_40308 = (0);
var i__40302_40309 = (0);
while(true){
if((i__40302_40309 < count__40301_40308)){
var child_40310 = cljs.core._nth.call(null,chunk__40300_40307,i__40302_40309);
if(!((child_40310 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40310)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40310))));
} else {
var temp__4655__auto___40311 = devtools.formatters.helpers.pref.call(null,child_40310);
if(cljs.core.truth_(temp__4655__auto___40311)){
var child_value_40312 = temp__4655__auto___40311;
template.push(child_value_40312);
} else {
}
}
} else {
}

var G__40313 = seq__40299_40306;
var G__40314 = chunk__40300_40307;
var G__40315 = count__40301_40308;
var G__40316 = (i__40302_40309 + (1));
seq__40299_40306 = G__40313;
chunk__40300_40307 = G__40314;
count__40301_40308 = G__40315;
i__40302_40309 = G__40316;
continue;
} else {
var temp__4657__auto___40317 = cljs.core.seq.call(null,seq__40299_40306);
if(temp__4657__auto___40317){
var seq__40299_40318__$1 = temp__4657__auto___40317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40299_40318__$1)){
var c__29173__auto___40319 = cljs.core.chunk_first.call(null,seq__40299_40318__$1);
var G__40320 = cljs.core.chunk_rest.call(null,seq__40299_40318__$1);
var G__40321 = c__29173__auto___40319;
var G__40322 = cljs.core.count.call(null,c__29173__auto___40319);
var G__40323 = (0);
seq__40299_40306 = G__40320;
chunk__40300_40307 = G__40321;
count__40301_40308 = G__40322;
i__40302_40309 = G__40323;
continue;
} else {
var child_40324 = cljs.core.first.call(null,seq__40299_40318__$1);
if(!((child_40324 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40324)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40324))));
} else {
var temp__4655__auto___40325 = devtools.formatters.helpers.pref.call(null,child_40324);
if(cljs.core.truth_(temp__4655__auto___40325)){
var child_value_40326 = temp__4655__auto___40325;
template.push(child_value_40326);
} else {
}
}
} else {
}

var G__40327 = cljs.core.next.call(null,seq__40299_40318__$1);
var G__40328 = null;
var G__40329 = (0);
var G__40330 = (0);
seq__40299_40306 = G__40327;
chunk__40300_40307 = G__40328;
count__40301_40308 = G__40329;
i__40302_40309 = G__40330;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40296){
var G__40297 = cljs.core.first.call(null,seq40296);
var seq40296__$1 = cljs.core.next.call(null,seq40296);
var G__40298 = cljs.core.first.call(null,seq40296__$1);
var seq40296__$2 = cljs.core.next.call(null,seq40296__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40297,G__40298,seq40296__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__29512__auto__ = [];
var len__29505__auto___40333 = arguments.length;
var i__29506__auto___40334 = (0);
while(true){
if((i__29506__auto___40334 < len__29505__auto___40333)){
args__29512__auto__.push((arguments[i__29506__auto___40334]));

var G__40335 = (i__29506__auto___40334 + (1));
i__29506__auto___40334 = G__40335;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((1) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29513__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40331){
var G__40332 = cljs.core.first.call(null,seq40331);
var seq40331__$1 = cljs.core.next.call(null,seq40331);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40332,seq40331__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__29512__auto__ = [];
var len__29505__auto___40338 = arguments.length;
var i__29506__auto___40339 = (0);
while(true){
if((i__29506__auto___40339 < len__29505__auto___40338)){
args__29512__auto__.push((arguments[i__29506__auto___40339]));

var G__40340 = (i__29506__auto___40339 + (1));
i__29506__auto___40339 = G__40340;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((1) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29513__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40336){
var G__40337 = cljs.core.first.call(null,seq40336);
var seq40336__$1 = cljs.core.next.call(null,seq40336);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40337,seq40336__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__40342 = arguments.length;
switch (G__40342) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40344 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__28334__auto__ = start_index;
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
} else {
return (0);
}
})()};
return obj40344;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__29512__auto__ = [];
var len__29505__auto___40352 = arguments.length;
var i__29506__auto___40353 = (0);
while(true){
if((i__29506__auto___40353 < len__29505__auto___40352)){
args__29512__auto__.push((arguments[i__29506__auto___40353]));

var G__40354 = (i__29506__auto___40353 + (1));
i__29506__auto___40353 = G__40354;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((1) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29513__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40348){
var vec__40349 = p__40348;
var state_override_fn = cljs.core.nth.call(null,vec__40349,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40346){
var G__40347 = cljs.core.first.call(null,seq40346);
var seq40346__$1 = cljs.core.next.call(null,seq40346);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40347,seq40346__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40355 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40355;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__40356 = name;
switch (G__40356) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__40358 = tag;
var html_tag = cljs.core.nth.call(null,vec__40358,(0),null);
var style = cljs.core.nth.call(null,vec__40358,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40361 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40361;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40362 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40363 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40363;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40362;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40364 = initial_value;
var G__40365 = value.call(null);
initial_value = G__40364;
value = G__40365;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40366 = initial_value;
var G__40367 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40366;
value = G__40367;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40368 = initial_value;
var G__40369 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40368;
value = G__40369;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1517031120129
