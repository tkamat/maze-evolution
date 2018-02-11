// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e40336){if((e40336 instanceof Error)){
var e = e40336;
return "Error: Unable to stringify";
} else {
throw e40336;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__40339 = arguments.length;
switch (G__40339) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__40337_SHARP_){
if(typeof p1__40337_SHARP_ === 'string'){
return p1__40337_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__40337_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__37486__auto__ = [];
var len__37479__auto___40342 = arguments.length;
var i__37480__auto___40343 = (0);
while(true){
if((i__37480__auto___40343 < len__37479__auto___40342)){
args__37486__auto__.push((arguments[i__37480__auto___40343]));

var G__40344 = (i__37480__auto___40343 + (1));
i__37480__auto___40343 = G__40344;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40341){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40341));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37486__auto__ = [];
var len__37479__auto___40346 = arguments.length;
var i__37480__auto___40347 = (0);
while(true){
if((i__37480__auto___40347 < len__37479__auto___40346)){
args__37486__auto__.push((arguments[i__37480__auto___40347]));

var G__40348 = (i__37480__auto___40347 + (1));
i__37480__auto___40347 = G__40348;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40345){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40345));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40349){
var map__40350 = p__40349;
var map__40350__$1 = ((((!((map__40350 == null)))?((((map__40350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40350):map__40350);
var message = cljs.core.get.call(null,map__40350__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40350__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__36308__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__36296__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__36296__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__36296__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__38905__auto___40429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto___40429,ch){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto___40429,ch){
return (function (state_40401){
var state_val_40402 = (state_40401[(1)]);
if((state_val_40402 === (7))){
var inst_40397 = (state_40401[(2)]);
var state_40401__$1 = state_40401;
var statearr_40403_40430 = state_40401__$1;
(statearr_40403_40430[(2)] = inst_40397);

(statearr_40403_40430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (1))){
var state_40401__$1 = state_40401;
var statearr_40404_40431 = state_40401__$1;
(statearr_40404_40431[(2)] = null);

(statearr_40404_40431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (4))){
var inst_40354 = (state_40401[(7)]);
var inst_40354__$1 = (state_40401[(2)]);
var state_40401__$1 = (function (){var statearr_40405 = state_40401;
(statearr_40405[(7)] = inst_40354__$1);

return statearr_40405;
})();
if(cljs.core.truth_(inst_40354__$1)){
var statearr_40406_40432 = state_40401__$1;
(statearr_40406_40432[(1)] = (5));

} else {
var statearr_40407_40433 = state_40401__$1;
(statearr_40407_40433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (15))){
var inst_40361 = (state_40401[(8)]);
var inst_40376 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40361);
var inst_40377 = cljs.core.first.call(null,inst_40376);
var inst_40378 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40377);
var inst_40379 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40378)].join('');
var inst_40380 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40379);
var state_40401__$1 = state_40401;
var statearr_40408_40434 = state_40401__$1;
(statearr_40408_40434[(2)] = inst_40380);

(statearr_40408_40434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (13))){
var inst_40385 = (state_40401[(2)]);
var state_40401__$1 = state_40401;
var statearr_40409_40435 = state_40401__$1;
(statearr_40409_40435[(2)] = inst_40385);

(statearr_40409_40435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (6))){
var state_40401__$1 = state_40401;
var statearr_40410_40436 = state_40401__$1;
(statearr_40410_40436[(2)] = null);

(statearr_40410_40436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (17))){
var inst_40383 = (state_40401[(2)]);
var state_40401__$1 = state_40401;
var statearr_40411_40437 = state_40401__$1;
(statearr_40411_40437[(2)] = inst_40383);

(statearr_40411_40437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (3))){
var inst_40399 = (state_40401[(2)]);
var state_40401__$1 = state_40401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40401__$1,inst_40399);
} else {
if((state_val_40402 === (12))){
var inst_40360 = (state_40401[(9)]);
var inst_40374 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40360,opts);
var state_40401__$1 = state_40401;
if(cljs.core.truth_(inst_40374)){
var statearr_40412_40438 = state_40401__$1;
(statearr_40412_40438[(1)] = (15));

} else {
var statearr_40413_40439 = state_40401__$1;
(statearr_40413_40439[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (2))){
var state_40401__$1 = state_40401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40401__$1,(4),ch);
} else {
if((state_val_40402 === (11))){
var inst_40361 = (state_40401[(8)]);
var inst_40366 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40367 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40361);
var inst_40368 = cljs.core.async.timeout.call(null,(1000));
var inst_40369 = [inst_40367,inst_40368];
var inst_40370 = (new cljs.core.PersistentVector(null,2,(5),inst_40366,inst_40369,null));
var state_40401__$1 = state_40401;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40401__$1,(14),inst_40370);
} else {
if((state_val_40402 === (9))){
var inst_40361 = (state_40401[(8)]);
var inst_40387 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40388 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40361);
var inst_40389 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40388);
var inst_40390 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40389)].join('');
var inst_40391 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40390);
var state_40401__$1 = (function (){var statearr_40414 = state_40401;
(statearr_40414[(10)] = inst_40387);

return statearr_40414;
})();
var statearr_40415_40440 = state_40401__$1;
(statearr_40415_40440[(2)] = inst_40391);

(statearr_40415_40440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (5))){
var inst_40354 = (state_40401[(7)]);
var inst_40356 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40357 = (new cljs.core.PersistentArrayMap(null,2,inst_40356,null));
var inst_40358 = (new cljs.core.PersistentHashSet(null,inst_40357,null));
var inst_40359 = figwheel.client.focus_msgs.call(null,inst_40358,inst_40354);
var inst_40360 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40359);
var inst_40361 = cljs.core.first.call(null,inst_40359);
var inst_40362 = figwheel.client.autoload_QMARK_.call(null);
var state_40401__$1 = (function (){var statearr_40416 = state_40401;
(statearr_40416[(8)] = inst_40361);

(statearr_40416[(9)] = inst_40360);

return statearr_40416;
})();
if(cljs.core.truth_(inst_40362)){
var statearr_40417_40441 = state_40401__$1;
(statearr_40417_40441[(1)] = (8));

} else {
var statearr_40418_40442 = state_40401__$1;
(statearr_40418_40442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (14))){
var inst_40372 = (state_40401[(2)]);
var state_40401__$1 = state_40401;
var statearr_40419_40443 = state_40401__$1;
(statearr_40419_40443[(2)] = inst_40372);

(statearr_40419_40443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (16))){
var state_40401__$1 = state_40401;
var statearr_40420_40444 = state_40401__$1;
(statearr_40420_40444[(2)] = null);

(statearr_40420_40444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (10))){
var inst_40393 = (state_40401[(2)]);
var state_40401__$1 = (function (){var statearr_40421 = state_40401;
(statearr_40421[(11)] = inst_40393);

return statearr_40421;
})();
var statearr_40422_40445 = state_40401__$1;
(statearr_40422_40445[(2)] = null);

(statearr_40422_40445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40402 === (8))){
var inst_40360 = (state_40401[(9)]);
var inst_40364 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40360,opts);
var state_40401__$1 = state_40401;
if(cljs.core.truth_(inst_40364)){
var statearr_40423_40446 = state_40401__$1;
(statearr_40423_40446[(1)] = (11));

} else {
var statearr_40424_40447 = state_40401__$1;
(statearr_40424_40447[(1)] = (12));

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
});})(c__38905__auto___40429,ch))
;
return ((function (switch__38884__auto__,c__38905__auto___40429,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38885__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38885__auto____0 = (function (){
var statearr_40425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40425[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38885__auto__);

(statearr_40425[(1)] = (1));

return statearr_40425;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38885__auto____1 = (function (state_40401){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_40401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e40426){if((e40426 instanceof Object)){
var ex__38888__auto__ = e40426;
var statearr_40427_40448 = state_40401;
(statearr_40427_40448[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40449 = state_40401;
state_40401 = G__40449;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38885__auto__ = function(state_40401){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38885__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38885__auto____1.call(this,state_40401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38885__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38885__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto___40429,ch))
})();
var state__38907__auto__ = (function (){var statearr_40428 = f__38906__auto__.call(null);
(statearr_40428[(6)] = c__38905__auto___40429);

return statearr_40428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto___40429,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40450_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40450_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40452 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40452){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e40451){if((e40451 instanceof Error)){
var e = e40451;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40452], null));
} else {
var e = e40451;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_40452))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40453){
var map__40454 = p__40453;
var map__40454__$1 = ((((!((map__40454 == null)))?((((map__40454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40454):map__40454);
var opts = map__40454__$1;
var build_id = cljs.core.get.call(null,map__40454__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40454,map__40454__$1,opts,build_id){
return (function (p__40456){
var vec__40457 = p__40456;
var seq__40458 = cljs.core.seq.call(null,vec__40457);
var first__40459 = cljs.core.first.call(null,seq__40458);
var seq__40458__$1 = cljs.core.next.call(null,seq__40458);
var map__40460 = first__40459;
var map__40460__$1 = ((((!((map__40460 == null)))?((((map__40460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40460):map__40460);
var msg = map__40460__$1;
var msg_name = cljs.core.get.call(null,map__40460__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40458__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40457,seq__40458,first__40459,seq__40458__$1,map__40460,map__40460__$1,msg,msg_name,_,map__40454,map__40454__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40457,seq__40458,first__40459,seq__40458__$1,map__40460,map__40460__$1,msg,msg_name,_,map__40454,map__40454__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40454,map__40454__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40462){
var vec__40463 = p__40462;
var seq__40464 = cljs.core.seq.call(null,vec__40463);
var first__40465 = cljs.core.first.call(null,seq__40464);
var seq__40464__$1 = cljs.core.next.call(null,seq__40464);
var map__40466 = first__40465;
var map__40466__$1 = ((((!((map__40466 == null)))?((((map__40466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40466):map__40466);
var msg = map__40466__$1;
var msg_name = cljs.core.get.call(null,map__40466__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40464__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40468){
var map__40469 = p__40468;
var map__40469__$1 = ((((!((map__40469 == null)))?((((map__40469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40469):map__40469);
var on_compile_warning = cljs.core.get.call(null,map__40469__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40469__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40469,map__40469__$1,on_compile_warning,on_compile_fail){
return (function (p__40471){
var vec__40472 = p__40471;
var seq__40473 = cljs.core.seq.call(null,vec__40472);
var first__40474 = cljs.core.first.call(null,seq__40473);
var seq__40473__$1 = cljs.core.next.call(null,seq__40473);
var map__40475 = first__40474;
var map__40475__$1 = ((((!((map__40475 == null)))?((((map__40475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40475):map__40475);
var msg = map__40475__$1;
var msg_name = cljs.core.get.call(null,map__40475__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40473__$1;
var pred__40477 = cljs.core._EQ_;
var expr__40478 = msg_name;
if(cljs.core.truth_(pred__40477.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40478))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40477.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40478))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40469,map__40469__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38905__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto__,msg_hist,msg_names,msg){
return (function (state_40567){
var state_val_40568 = (state_40567[(1)]);
if((state_val_40568 === (7))){
var inst_40487 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40487)){
var statearr_40569_40616 = state_40567__$1;
(statearr_40569_40616[(1)] = (8));

} else {
var statearr_40570_40617 = state_40567__$1;
(statearr_40570_40617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (20))){
var inst_40561 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40571_40618 = state_40567__$1;
(statearr_40571_40618[(2)] = inst_40561);

(statearr_40571_40618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (27))){
var inst_40557 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40572_40619 = state_40567__$1;
(statearr_40572_40619[(2)] = inst_40557);

(statearr_40572_40619[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (1))){
var inst_40480 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40480)){
var statearr_40573_40620 = state_40567__$1;
(statearr_40573_40620[(1)] = (2));

} else {
var statearr_40574_40621 = state_40567__$1;
(statearr_40574_40621[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (24))){
var inst_40559 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40575_40622 = state_40567__$1;
(statearr_40575_40622[(2)] = inst_40559);

(statearr_40575_40622[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (4))){
var inst_40565 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40567__$1,inst_40565);
} else {
if((state_val_40568 === (15))){
var inst_40563 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40576_40623 = state_40567__$1;
(statearr_40576_40623[(2)] = inst_40563);

(statearr_40576_40623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (21))){
var inst_40516 = (state_40567[(2)]);
var inst_40517 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40518 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40517);
var state_40567__$1 = (function (){var statearr_40577 = state_40567;
(statearr_40577[(7)] = inst_40516);

return statearr_40577;
})();
var statearr_40578_40624 = state_40567__$1;
(statearr_40578_40624[(2)] = inst_40518);

(statearr_40578_40624[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (31))){
var inst_40546 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40546)){
var statearr_40579_40625 = state_40567__$1;
(statearr_40579_40625[(1)] = (34));

} else {
var statearr_40580_40626 = state_40567__$1;
(statearr_40580_40626[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (32))){
var inst_40555 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40581_40627 = state_40567__$1;
(statearr_40581_40627[(2)] = inst_40555);

(statearr_40581_40627[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (33))){
var inst_40542 = (state_40567[(2)]);
var inst_40543 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40544 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40543);
var state_40567__$1 = (function (){var statearr_40582 = state_40567;
(statearr_40582[(8)] = inst_40542);

return statearr_40582;
})();
var statearr_40583_40628 = state_40567__$1;
(statearr_40583_40628[(2)] = inst_40544);

(statearr_40583_40628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (13))){
var inst_40501 = figwheel.client.heads_up.clear.call(null);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(16),inst_40501);
} else {
if((state_val_40568 === (22))){
var inst_40522 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40523 = figwheel.client.heads_up.append_warning_message.call(null,inst_40522);
var state_40567__$1 = state_40567;
var statearr_40584_40629 = state_40567__$1;
(statearr_40584_40629[(2)] = inst_40523);

(statearr_40584_40629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (36))){
var inst_40553 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40585_40630 = state_40567__$1;
(statearr_40585_40630[(2)] = inst_40553);

(statearr_40585_40630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (29))){
var inst_40533 = (state_40567[(2)]);
var inst_40534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40535 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40534);
var state_40567__$1 = (function (){var statearr_40586 = state_40567;
(statearr_40586[(9)] = inst_40533);

return statearr_40586;
})();
var statearr_40587_40631 = state_40567__$1;
(statearr_40587_40631[(2)] = inst_40535);

(statearr_40587_40631[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (6))){
var inst_40482 = (state_40567[(10)]);
var state_40567__$1 = state_40567;
var statearr_40588_40632 = state_40567__$1;
(statearr_40588_40632[(2)] = inst_40482);

(statearr_40588_40632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (28))){
var inst_40529 = (state_40567[(2)]);
var inst_40530 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40531 = figwheel.client.heads_up.display_warning.call(null,inst_40530);
var state_40567__$1 = (function (){var statearr_40589 = state_40567;
(statearr_40589[(11)] = inst_40529);

return statearr_40589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(29),inst_40531);
} else {
if((state_val_40568 === (25))){
var inst_40527 = figwheel.client.heads_up.clear.call(null);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(28),inst_40527);
} else {
if((state_val_40568 === (34))){
var inst_40548 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(37),inst_40548);
} else {
if((state_val_40568 === (17))){
var inst_40507 = (state_40567[(2)]);
var inst_40508 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40509 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40508);
var state_40567__$1 = (function (){var statearr_40590 = state_40567;
(statearr_40590[(12)] = inst_40507);

return statearr_40590;
})();
var statearr_40591_40633 = state_40567__$1;
(statearr_40591_40633[(2)] = inst_40509);

(statearr_40591_40633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (3))){
var inst_40499 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40499)){
var statearr_40592_40634 = state_40567__$1;
(statearr_40592_40634[(1)] = (13));

} else {
var statearr_40593_40635 = state_40567__$1;
(statearr_40593_40635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (12))){
var inst_40495 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40594_40636 = state_40567__$1;
(statearr_40594_40636[(2)] = inst_40495);

(statearr_40594_40636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (2))){
var inst_40482 = (state_40567[(10)]);
var inst_40482__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40567__$1 = (function (){var statearr_40595 = state_40567;
(statearr_40595[(10)] = inst_40482__$1);

return statearr_40595;
})();
if(cljs.core.truth_(inst_40482__$1)){
var statearr_40596_40637 = state_40567__$1;
(statearr_40596_40637[(1)] = (5));

} else {
var statearr_40597_40638 = state_40567__$1;
(statearr_40597_40638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (23))){
var inst_40525 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40525)){
var statearr_40598_40639 = state_40567__$1;
(statearr_40598_40639[(1)] = (25));

} else {
var statearr_40599_40640 = state_40567__$1;
(statearr_40599_40640[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (35))){
var state_40567__$1 = state_40567;
var statearr_40600_40641 = state_40567__$1;
(statearr_40600_40641[(2)] = null);

(statearr_40600_40641[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (19))){
var inst_40520 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40520)){
var statearr_40601_40642 = state_40567__$1;
(statearr_40601_40642[(1)] = (22));

} else {
var statearr_40602_40643 = state_40567__$1;
(statearr_40602_40643[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (11))){
var inst_40491 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40603_40644 = state_40567__$1;
(statearr_40603_40644[(2)] = inst_40491);

(statearr_40603_40644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (9))){
var inst_40493 = figwheel.client.heads_up.clear.call(null);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(12),inst_40493);
} else {
if((state_val_40568 === (5))){
var inst_40484 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40567__$1 = state_40567;
var statearr_40604_40645 = state_40567__$1;
(statearr_40604_40645[(2)] = inst_40484);

(statearr_40604_40645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (14))){
var inst_40511 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40511)){
var statearr_40605_40646 = state_40567__$1;
(statearr_40605_40646[(1)] = (18));

} else {
var statearr_40606_40647 = state_40567__$1;
(statearr_40606_40647[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (26))){
var inst_40537 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40537)){
var statearr_40607_40648 = state_40567__$1;
(statearr_40607_40648[(1)] = (30));

} else {
var statearr_40608_40649 = state_40567__$1;
(statearr_40608_40649[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (16))){
var inst_40503 = (state_40567[(2)]);
var inst_40504 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40505 = figwheel.client.heads_up.display_exception.call(null,inst_40504);
var state_40567__$1 = (function (){var statearr_40609 = state_40567;
(statearr_40609[(13)] = inst_40503);

return statearr_40609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(17),inst_40505);
} else {
if((state_val_40568 === (30))){
var inst_40539 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40540 = figwheel.client.heads_up.display_warning.call(null,inst_40539);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(33),inst_40540);
} else {
if((state_val_40568 === (10))){
var inst_40497 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40610_40650 = state_40567__$1;
(statearr_40610_40650[(2)] = inst_40497);

(statearr_40610_40650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (18))){
var inst_40513 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40514 = figwheel.client.heads_up.display_exception.call(null,inst_40513);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(21),inst_40514);
} else {
if((state_val_40568 === (37))){
var inst_40550 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40611_40651 = state_40567__$1;
(statearr_40611_40651[(2)] = inst_40550);

(statearr_40611_40651[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (8))){
var inst_40489 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(11),inst_40489);
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
});})(c__38905__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38884__auto__,c__38905__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto____0 = (function (){
var statearr_40612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40612[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto__);

(statearr_40612[(1)] = (1));

return statearr_40612;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto____1 = (function (state_40567){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_40567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e40613){if((e40613 instanceof Object)){
var ex__38888__auto__ = e40613;
var statearr_40614_40652 = state_40567;
(statearr_40614_40652[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40653 = state_40567;
state_40567 = G__40653;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto__ = function(state_40567){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto____1.call(this,state_40567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto__,msg_hist,msg_names,msg))
})();
var state__38907__auto__ = (function (){var statearr_40615 = f__38906__auto__.call(null);
(statearr_40615[(6)] = c__38905__auto__);

return statearr_40615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto__,msg_hist,msg_names,msg))
);

return c__38905__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38905__auto___40682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto___40682,ch){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto___40682,ch){
return (function (state_40668){
var state_val_40669 = (state_40668[(1)]);
if((state_val_40669 === (1))){
var state_40668__$1 = state_40668;
var statearr_40670_40683 = state_40668__$1;
(statearr_40670_40683[(2)] = null);

(statearr_40670_40683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (2))){
var state_40668__$1 = state_40668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40668__$1,(4),ch);
} else {
if((state_val_40669 === (3))){
var inst_40666 = (state_40668[(2)]);
var state_40668__$1 = state_40668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40668__$1,inst_40666);
} else {
if((state_val_40669 === (4))){
var inst_40656 = (state_40668[(7)]);
var inst_40656__$1 = (state_40668[(2)]);
var state_40668__$1 = (function (){var statearr_40671 = state_40668;
(statearr_40671[(7)] = inst_40656__$1);

return statearr_40671;
})();
if(cljs.core.truth_(inst_40656__$1)){
var statearr_40672_40684 = state_40668__$1;
(statearr_40672_40684[(1)] = (5));

} else {
var statearr_40673_40685 = state_40668__$1;
(statearr_40673_40685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (5))){
var inst_40656 = (state_40668[(7)]);
var inst_40658 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40656);
var state_40668__$1 = state_40668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40668__$1,(8),inst_40658);
} else {
if((state_val_40669 === (6))){
var state_40668__$1 = state_40668;
var statearr_40674_40686 = state_40668__$1;
(statearr_40674_40686[(2)] = null);

(statearr_40674_40686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (7))){
var inst_40664 = (state_40668[(2)]);
var state_40668__$1 = state_40668;
var statearr_40675_40687 = state_40668__$1;
(statearr_40675_40687[(2)] = inst_40664);

(statearr_40675_40687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40669 === (8))){
var inst_40660 = (state_40668[(2)]);
var state_40668__$1 = (function (){var statearr_40676 = state_40668;
(statearr_40676[(8)] = inst_40660);

return statearr_40676;
})();
var statearr_40677_40688 = state_40668__$1;
(statearr_40677_40688[(2)] = null);

(statearr_40677_40688[(1)] = (2));


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
});})(c__38905__auto___40682,ch))
;
return ((function (switch__38884__auto__,c__38905__auto___40682,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38885__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38885__auto____0 = (function (){
var statearr_40678 = [null,null,null,null,null,null,null,null,null];
(statearr_40678[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38885__auto__);

(statearr_40678[(1)] = (1));

return statearr_40678;
});
var figwheel$client$heads_up_plugin_$_state_machine__38885__auto____1 = (function (state_40668){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_40668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e40679){if((e40679 instanceof Object)){
var ex__38888__auto__ = e40679;
var statearr_40680_40689 = state_40668;
(statearr_40680_40689[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40690 = state_40668;
state_40668 = G__40690;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38885__auto__ = function(state_40668){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38885__auto____1.call(this,state_40668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38885__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38885__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto___40682,ch))
})();
var state__38907__auto__ = (function (){var statearr_40681 = f__38906__auto__.call(null);
(statearr_40681[(6)] = c__38905__auto___40682);

return statearr_40681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto___40682,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38905__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto__){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto__){
return (function (state_40696){
var state_val_40697 = (state_40696[(1)]);
if((state_val_40697 === (1))){
var inst_40691 = cljs.core.async.timeout.call(null,(3000));
var state_40696__$1 = state_40696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40696__$1,(2),inst_40691);
} else {
if((state_val_40697 === (2))){
var inst_40693 = (state_40696[(2)]);
var inst_40694 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40696__$1 = (function (){var statearr_40698 = state_40696;
(statearr_40698[(7)] = inst_40693);

return statearr_40698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40696__$1,inst_40694);
} else {
return null;
}
}
});})(c__38905__auto__))
;
return ((function (switch__38884__auto__,c__38905__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38885__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38885__auto____0 = (function (){
var statearr_40699 = [null,null,null,null,null,null,null,null];
(statearr_40699[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38885__auto__);

(statearr_40699[(1)] = (1));

return statearr_40699;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38885__auto____1 = (function (state_40696){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_40696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e40700){if((e40700 instanceof Object)){
var ex__38888__auto__ = e40700;
var statearr_40701_40703 = state_40696;
(statearr_40701_40703[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40704 = state_40696;
state_40696 = G__40704;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38885__auto__ = function(state_40696){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38885__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38885__auto____1.call(this,state_40696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38885__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38885__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto__))
})();
var state__38907__auto__ = (function (){var statearr_40702 = f__38906__auto__.call(null);
(statearr_40702[(6)] = c__38905__auto__);

return statearr_40702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto__))
);

return c__38905__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38905__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto__,figwheel_version,temp__4657__auto__){
return (function (state_40711){
var state_val_40712 = (state_40711[(1)]);
if((state_val_40712 === (1))){
var inst_40705 = cljs.core.async.timeout.call(null,(2000));
var state_40711__$1 = state_40711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40711__$1,(2),inst_40705);
} else {
if((state_val_40712 === (2))){
var inst_40707 = (state_40711[(2)]);
var inst_40708 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_40709 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40708);
var state_40711__$1 = (function (){var statearr_40713 = state_40711;
(statearr_40713[(7)] = inst_40707);

return statearr_40713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40711__$1,inst_40709);
} else {
return null;
}
}
});})(c__38905__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__38884__auto__,c__38905__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto____0 = (function (){
var statearr_40714 = [null,null,null,null,null,null,null,null];
(statearr_40714[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto__);

(statearr_40714[(1)] = (1));

return statearr_40714;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto____1 = (function (state_40711){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_40711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e40715){if((e40715 instanceof Object)){
var ex__38888__auto__ = e40715;
var statearr_40716_40718 = state_40711;
(statearr_40716_40718[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40719 = state_40711;
state_40711 = G__40719;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto__ = function(state_40711){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto____1.call(this,state_40711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto__,figwheel_version,temp__4657__auto__))
})();
var state__38907__auto__ = (function (){var statearr_40717 = f__38906__auto__.call(null);
(statearr_40717[(6)] = c__38905__auto__);

return statearr_40717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto__,figwheel_version,temp__4657__auto__))
);

return c__38905__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40720){
var map__40721 = p__40720;
var map__40721__$1 = ((((!((map__40721 == null)))?((((map__40721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40721):map__40721);
var file = cljs.core.get.call(null,map__40721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40721__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40721__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40723 = "";
var G__40723__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40723),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40723);
var G__40723__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40723__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40723__$1);
if(cljs.core.truth_((function (){var and__36296__auto__ = line;
if(cljs.core.truth_(and__36296__auto__)){
return column;
} else {
return and__36296__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40723__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40723__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40724){
var map__40725 = p__40724;
var map__40725__$1 = ((((!((map__40725 == null)))?((((map__40725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40725):map__40725);
var ed = map__40725__$1;
var formatted_exception = cljs.core.get.call(null,map__40725__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40725__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40725__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40727_40731 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40728_40732 = null;
var count__40729_40733 = (0);
var i__40730_40734 = (0);
while(true){
if((i__40730_40734 < count__40729_40733)){
var msg_40735 = cljs.core._nth.call(null,chunk__40728_40732,i__40730_40734);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40735);

var G__40736 = seq__40727_40731;
var G__40737 = chunk__40728_40732;
var G__40738 = count__40729_40733;
var G__40739 = (i__40730_40734 + (1));
seq__40727_40731 = G__40736;
chunk__40728_40732 = G__40737;
count__40729_40733 = G__40738;
i__40730_40734 = G__40739;
continue;
} else {
var temp__4657__auto___40740 = cljs.core.seq.call(null,seq__40727_40731);
if(temp__4657__auto___40740){
var seq__40727_40741__$1 = temp__4657__auto___40740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40727_40741__$1)){
var c__37147__auto___40742 = cljs.core.chunk_first.call(null,seq__40727_40741__$1);
var G__40743 = cljs.core.chunk_rest.call(null,seq__40727_40741__$1);
var G__40744 = c__37147__auto___40742;
var G__40745 = cljs.core.count.call(null,c__37147__auto___40742);
var G__40746 = (0);
seq__40727_40731 = G__40743;
chunk__40728_40732 = G__40744;
count__40729_40733 = G__40745;
i__40730_40734 = G__40746;
continue;
} else {
var msg_40747 = cljs.core.first.call(null,seq__40727_40741__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40747);

var G__40748 = cljs.core.next.call(null,seq__40727_40741__$1);
var G__40749 = null;
var G__40750 = (0);
var G__40751 = (0);
seq__40727_40731 = G__40748;
chunk__40728_40732 = G__40749;
count__40729_40733 = G__40750;
i__40730_40734 = G__40751;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40752){
var map__40753 = p__40752;
var map__40753__$1 = ((((!((map__40753 == null)))?((((map__40753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40753):map__40753);
var w = map__40753__$1;
var message = cljs.core.get.call(null,map__40753__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__36296__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__36296__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__36296__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40755 = cljs.core.seq.call(null,plugins);
var chunk__40756 = null;
var count__40757 = (0);
var i__40758 = (0);
while(true){
if((i__40758 < count__40757)){
var vec__40759 = cljs.core._nth.call(null,chunk__40756,i__40758);
var k = cljs.core.nth.call(null,vec__40759,(0),null);
var plugin = cljs.core.nth.call(null,vec__40759,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40765 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40755,chunk__40756,count__40757,i__40758,pl_40765,vec__40759,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40765.call(null,msg_hist);
});})(seq__40755,chunk__40756,count__40757,i__40758,pl_40765,vec__40759,k,plugin))
);
} else {
}

var G__40766 = seq__40755;
var G__40767 = chunk__40756;
var G__40768 = count__40757;
var G__40769 = (i__40758 + (1));
seq__40755 = G__40766;
chunk__40756 = G__40767;
count__40757 = G__40768;
i__40758 = G__40769;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40755);
if(temp__4657__auto__){
var seq__40755__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40755__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__40755__$1);
var G__40770 = cljs.core.chunk_rest.call(null,seq__40755__$1);
var G__40771 = c__37147__auto__;
var G__40772 = cljs.core.count.call(null,c__37147__auto__);
var G__40773 = (0);
seq__40755 = G__40770;
chunk__40756 = G__40771;
count__40757 = G__40772;
i__40758 = G__40773;
continue;
} else {
var vec__40762 = cljs.core.first.call(null,seq__40755__$1);
var k = cljs.core.nth.call(null,vec__40762,(0),null);
var plugin = cljs.core.nth.call(null,vec__40762,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40774 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40755,chunk__40756,count__40757,i__40758,pl_40774,vec__40762,k,plugin,seq__40755__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40774.call(null,msg_hist);
});})(seq__40755,chunk__40756,count__40757,i__40758,pl_40774,vec__40762,k,plugin,seq__40755__$1,temp__4657__auto__))
);
} else {
}

var G__40775 = cljs.core.next.call(null,seq__40755__$1);
var G__40776 = null;
var G__40777 = (0);
var G__40778 = (0);
seq__40755 = G__40775;
chunk__40756 = G__40776;
count__40757 = G__40777;
i__40758 = G__40778;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__40780 = arguments.length;
switch (G__40780) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40781_40786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40782_40787 = null;
var count__40783_40788 = (0);
var i__40784_40789 = (0);
while(true){
if((i__40784_40789 < count__40783_40788)){
var msg_40790 = cljs.core._nth.call(null,chunk__40782_40787,i__40784_40789);
figwheel.client.socket.handle_incoming_message.call(null,msg_40790);

var G__40791 = seq__40781_40786;
var G__40792 = chunk__40782_40787;
var G__40793 = count__40783_40788;
var G__40794 = (i__40784_40789 + (1));
seq__40781_40786 = G__40791;
chunk__40782_40787 = G__40792;
count__40783_40788 = G__40793;
i__40784_40789 = G__40794;
continue;
} else {
var temp__4657__auto___40795 = cljs.core.seq.call(null,seq__40781_40786);
if(temp__4657__auto___40795){
var seq__40781_40796__$1 = temp__4657__auto___40795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40781_40796__$1)){
var c__37147__auto___40797 = cljs.core.chunk_first.call(null,seq__40781_40796__$1);
var G__40798 = cljs.core.chunk_rest.call(null,seq__40781_40796__$1);
var G__40799 = c__37147__auto___40797;
var G__40800 = cljs.core.count.call(null,c__37147__auto___40797);
var G__40801 = (0);
seq__40781_40786 = G__40798;
chunk__40782_40787 = G__40799;
count__40783_40788 = G__40800;
i__40784_40789 = G__40801;
continue;
} else {
var msg_40802 = cljs.core.first.call(null,seq__40781_40796__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40802);

var G__40803 = cljs.core.next.call(null,seq__40781_40796__$1);
var G__40804 = null;
var G__40805 = (0);
var G__40806 = (0);
seq__40781_40786 = G__40803;
chunk__40782_40787 = G__40804;
count__40783_40788 = G__40805;
i__40784_40789 = G__40806;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__37486__auto__ = [];
var len__37479__auto___40811 = arguments.length;
var i__37480__auto___40812 = (0);
while(true){
if((i__37480__auto___40812 < len__37479__auto___40811)){
args__37486__auto__.push((arguments[i__37480__auto___40812]));

var G__40813 = (i__37480__auto___40812 + (1));
i__37480__auto___40812 = G__40813;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40808){
var map__40809 = p__40808;
var map__40809__$1 = ((((!((map__40809 == null)))?((((map__40809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40809):map__40809);
var opts = map__40809__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40807){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40807));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40814){if((e40814 instanceof Error)){
var e = e40814;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40814;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40815){
var map__40816 = p__40815;
var map__40816__$1 = ((((!((map__40816 == null)))?((((map__40816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40816):map__40816);
var msg_name = cljs.core.get.call(null,map__40816__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518331027912
