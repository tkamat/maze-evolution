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
}catch (e50279){if((e50279 instanceof Error)){
var e = e50279;
return "Error: Unable to stringify";
} else {
throw e50279;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50282 = arguments.length;
switch (G__50282) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50280_SHARP_){
if(typeof p1__50280_SHARP_ === 'string'){
return p1__50280_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50280_SHARP_);
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
var len__37479__auto___50285 = arguments.length;
var i__37480__auto___50286 = (0);
while(true){
if((i__37480__auto___50286 < len__37479__auto___50285)){
args__37486__auto__.push((arguments[i__37480__auto___50286]));

var G__50287 = (i__37480__auto___50286 + (1));
i__37480__auto___50286 = G__50287;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50284){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50284));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37486__auto__ = [];
var len__37479__auto___50289 = arguments.length;
var i__37480__auto___50290 = (0);
while(true){
if((i__37480__auto___50290 < len__37479__auto___50289)){
args__37486__auto__.push((arguments[i__37480__auto___50290]));

var G__50291 = (i__37480__auto___50290 + (1));
i__37480__auto___50290 = G__50291;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50288){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50288));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50292){
var map__50293 = p__50292;
var map__50293__$1 = ((((!((map__50293 == null)))?((((map__50293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50293):map__50293);
var message = cljs.core.get.call(null,map__50293__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50293__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__45492__auto___50372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___50372,ch){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___50372,ch){
return (function (state_50344){
var state_val_50345 = (state_50344[(1)]);
if((state_val_50345 === (7))){
var inst_50340 = (state_50344[(2)]);
var state_50344__$1 = state_50344;
var statearr_50346_50373 = state_50344__$1;
(statearr_50346_50373[(2)] = inst_50340);

(statearr_50346_50373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (1))){
var state_50344__$1 = state_50344;
var statearr_50347_50374 = state_50344__$1;
(statearr_50347_50374[(2)] = null);

(statearr_50347_50374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (4))){
var inst_50297 = (state_50344[(7)]);
var inst_50297__$1 = (state_50344[(2)]);
var state_50344__$1 = (function (){var statearr_50348 = state_50344;
(statearr_50348[(7)] = inst_50297__$1);

return statearr_50348;
})();
if(cljs.core.truth_(inst_50297__$1)){
var statearr_50349_50375 = state_50344__$1;
(statearr_50349_50375[(1)] = (5));

} else {
var statearr_50350_50376 = state_50344__$1;
(statearr_50350_50376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (15))){
var inst_50304 = (state_50344[(8)]);
var inst_50319 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50304);
var inst_50320 = cljs.core.first.call(null,inst_50319);
var inst_50321 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50320);
var inst_50322 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50321)].join('');
var inst_50323 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50322);
var state_50344__$1 = state_50344;
var statearr_50351_50377 = state_50344__$1;
(statearr_50351_50377[(2)] = inst_50323);

(statearr_50351_50377[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (13))){
var inst_50328 = (state_50344[(2)]);
var state_50344__$1 = state_50344;
var statearr_50352_50378 = state_50344__$1;
(statearr_50352_50378[(2)] = inst_50328);

(statearr_50352_50378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (6))){
var state_50344__$1 = state_50344;
var statearr_50353_50379 = state_50344__$1;
(statearr_50353_50379[(2)] = null);

(statearr_50353_50379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (17))){
var inst_50326 = (state_50344[(2)]);
var state_50344__$1 = state_50344;
var statearr_50354_50380 = state_50344__$1;
(statearr_50354_50380[(2)] = inst_50326);

(statearr_50354_50380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (3))){
var inst_50342 = (state_50344[(2)]);
var state_50344__$1 = state_50344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50344__$1,inst_50342);
} else {
if((state_val_50345 === (12))){
var inst_50303 = (state_50344[(9)]);
var inst_50317 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50303,opts);
var state_50344__$1 = state_50344;
if(cljs.core.truth_(inst_50317)){
var statearr_50355_50381 = state_50344__$1;
(statearr_50355_50381[(1)] = (15));

} else {
var statearr_50356_50382 = state_50344__$1;
(statearr_50356_50382[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (2))){
var state_50344__$1 = state_50344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50344__$1,(4),ch);
} else {
if((state_val_50345 === (11))){
var inst_50304 = (state_50344[(8)]);
var inst_50309 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50310 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50304);
var inst_50311 = cljs.core.async.timeout.call(null,(1000));
var inst_50312 = [inst_50310,inst_50311];
var inst_50313 = (new cljs.core.PersistentVector(null,2,(5),inst_50309,inst_50312,null));
var state_50344__$1 = state_50344;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50344__$1,(14),inst_50313);
} else {
if((state_val_50345 === (9))){
var inst_50304 = (state_50344[(8)]);
var inst_50330 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50331 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50304);
var inst_50332 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50331);
var inst_50333 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50332)].join('');
var inst_50334 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50333);
var state_50344__$1 = (function (){var statearr_50357 = state_50344;
(statearr_50357[(10)] = inst_50330);

return statearr_50357;
})();
var statearr_50358_50383 = state_50344__$1;
(statearr_50358_50383[(2)] = inst_50334);

(statearr_50358_50383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (5))){
var inst_50297 = (state_50344[(7)]);
var inst_50299 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50300 = (new cljs.core.PersistentArrayMap(null,2,inst_50299,null));
var inst_50301 = (new cljs.core.PersistentHashSet(null,inst_50300,null));
var inst_50302 = figwheel.client.focus_msgs.call(null,inst_50301,inst_50297);
var inst_50303 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50302);
var inst_50304 = cljs.core.first.call(null,inst_50302);
var inst_50305 = figwheel.client.autoload_QMARK_.call(null);
var state_50344__$1 = (function (){var statearr_50359 = state_50344;
(statearr_50359[(9)] = inst_50303);

(statearr_50359[(8)] = inst_50304);

return statearr_50359;
})();
if(cljs.core.truth_(inst_50305)){
var statearr_50360_50384 = state_50344__$1;
(statearr_50360_50384[(1)] = (8));

} else {
var statearr_50361_50385 = state_50344__$1;
(statearr_50361_50385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (14))){
var inst_50315 = (state_50344[(2)]);
var state_50344__$1 = state_50344;
var statearr_50362_50386 = state_50344__$1;
(statearr_50362_50386[(2)] = inst_50315);

(statearr_50362_50386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (16))){
var state_50344__$1 = state_50344;
var statearr_50363_50387 = state_50344__$1;
(statearr_50363_50387[(2)] = null);

(statearr_50363_50387[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (10))){
var inst_50336 = (state_50344[(2)]);
var state_50344__$1 = (function (){var statearr_50364 = state_50344;
(statearr_50364[(11)] = inst_50336);

return statearr_50364;
})();
var statearr_50365_50388 = state_50344__$1;
(statearr_50365_50388[(2)] = null);

(statearr_50365_50388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50345 === (8))){
var inst_50303 = (state_50344[(9)]);
var inst_50307 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50303,opts);
var state_50344__$1 = state_50344;
if(cljs.core.truth_(inst_50307)){
var statearr_50366_50389 = state_50344__$1;
(statearr_50366_50389[(1)] = (11));

} else {
var statearr_50367_50390 = state_50344__$1;
(statearr_50367_50390[(1)] = (12));

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
});})(c__45492__auto___50372,ch))
;
return ((function (switch__45404__auto__,c__45492__auto___50372,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__45405__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__45405__auto____0 = (function (){
var statearr_50368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50368[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__45405__auto__);

(statearr_50368[(1)] = (1));

return statearr_50368;
});
var figwheel$client$file_reloader_plugin_$_state_machine__45405__auto____1 = (function (state_50344){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_50344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e50369){if((e50369 instanceof Object)){
var ex__45408__auto__ = e50369;
var statearr_50370_50391 = state_50344;
(statearr_50370_50391[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50392 = state_50344;
state_50344 = G__50392;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__45405__auto__ = function(state_50344){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__45405__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__45405__auto____1.call(this,state_50344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__45405__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__45405__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___50372,ch))
})();
var state__45494__auto__ = (function (){var statearr_50371 = f__45493__auto__.call(null);
(statearr_50371[(6)] = c__45492__auto___50372);

return statearr_50371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___50372,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50393_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50393_SHARP_));
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
var base_path_50395 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50395){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e50394){if((e50394 instanceof Error)){
var e = e50394;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50395], null));
} else {
var e = e50394;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_50395))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50396){
var map__50397 = p__50396;
var map__50397__$1 = ((((!((map__50397 == null)))?((((map__50397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50397):map__50397);
var opts = map__50397__$1;
var build_id = cljs.core.get.call(null,map__50397__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50397,map__50397__$1,opts,build_id){
return (function (p__50399){
var vec__50400 = p__50399;
var seq__50401 = cljs.core.seq.call(null,vec__50400);
var first__50402 = cljs.core.first.call(null,seq__50401);
var seq__50401__$1 = cljs.core.next.call(null,seq__50401);
var map__50403 = first__50402;
var map__50403__$1 = ((((!((map__50403 == null)))?((((map__50403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50403):map__50403);
var msg = map__50403__$1;
var msg_name = cljs.core.get.call(null,map__50403__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50401__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50400,seq__50401,first__50402,seq__50401__$1,map__50403,map__50403__$1,msg,msg_name,_,map__50397,map__50397__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50400,seq__50401,first__50402,seq__50401__$1,map__50403,map__50403__$1,msg,msg_name,_,map__50397,map__50397__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50397,map__50397__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50405){
var vec__50406 = p__50405;
var seq__50407 = cljs.core.seq.call(null,vec__50406);
var first__50408 = cljs.core.first.call(null,seq__50407);
var seq__50407__$1 = cljs.core.next.call(null,seq__50407);
var map__50409 = first__50408;
var map__50409__$1 = ((((!((map__50409 == null)))?((((map__50409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50409):map__50409);
var msg = map__50409__$1;
var msg_name = cljs.core.get.call(null,map__50409__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50407__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50411){
var map__50412 = p__50411;
var map__50412__$1 = ((((!((map__50412 == null)))?((((map__50412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50412):map__50412);
var on_compile_warning = cljs.core.get.call(null,map__50412__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50412__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50412,map__50412__$1,on_compile_warning,on_compile_fail){
return (function (p__50414){
var vec__50415 = p__50414;
var seq__50416 = cljs.core.seq.call(null,vec__50415);
var first__50417 = cljs.core.first.call(null,seq__50416);
var seq__50416__$1 = cljs.core.next.call(null,seq__50416);
var map__50418 = first__50417;
var map__50418__$1 = ((((!((map__50418 == null)))?((((map__50418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50418):map__50418);
var msg = map__50418__$1;
var msg_name = cljs.core.get.call(null,map__50418__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50416__$1;
var pred__50420 = cljs.core._EQ_;
var expr__50421 = msg_name;
if(cljs.core.truth_(pred__50420.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50421))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50420.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50421))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50412,map__50412__$1,on_compile_warning,on_compile_fail))
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
var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__,msg_hist,msg_names,msg){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__,msg_hist,msg_names,msg){
return (function (state_50510){
var state_val_50511 = (state_50510[(1)]);
if((state_val_50511 === (7))){
var inst_50430 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
if(cljs.core.truth_(inst_50430)){
var statearr_50512_50559 = state_50510__$1;
(statearr_50512_50559[(1)] = (8));

} else {
var statearr_50513_50560 = state_50510__$1;
(statearr_50513_50560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (20))){
var inst_50504 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50514_50561 = state_50510__$1;
(statearr_50514_50561[(2)] = inst_50504);

(statearr_50514_50561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (27))){
var inst_50500 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50515_50562 = state_50510__$1;
(statearr_50515_50562[(2)] = inst_50500);

(statearr_50515_50562[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (1))){
var inst_50423 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50510__$1 = state_50510;
if(cljs.core.truth_(inst_50423)){
var statearr_50516_50563 = state_50510__$1;
(statearr_50516_50563[(1)] = (2));

} else {
var statearr_50517_50564 = state_50510__$1;
(statearr_50517_50564[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (24))){
var inst_50502 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50518_50565 = state_50510__$1;
(statearr_50518_50565[(2)] = inst_50502);

(statearr_50518_50565[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (4))){
var inst_50508 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50510__$1,inst_50508);
} else {
if((state_val_50511 === (15))){
var inst_50506 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50519_50566 = state_50510__$1;
(statearr_50519_50566[(2)] = inst_50506);

(statearr_50519_50566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (21))){
var inst_50459 = (state_50510[(2)]);
var inst_50460 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50461 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50460);
var state_50510__$1 = (function (){var statearr_50520 = state_50510;
(statearr_50520[(7)] = inst_50459);

return statearr_50520;
})();
var statearr_50521_50567 = state_50510__$1;
(statearr_50521_50567[(2)] = inst_50461);

(statearr_50521_50567[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (31))){
var inst_50489 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50510__$1 = state_50510;
if(cljs.core.truth_(inst_50489)){
var statearr_50522_50568 = state_50510__$1;
(statearr_50522_50568[(1)] = (34));

} else {
var statearr_50523_50569 = state_50510__$1;
(statearr_50523_50569[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (32))){
var inst_50498 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50524_50570 = state_50510__$1;
(statearr_50524_50570[(2)] = inst_50498);

(statearr_50524_50570[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (33))){
var inst_50485 = (state_50510[(2)]);
var inst_50486 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50487 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50486);
var state_50510__$1 = (function (){var statearr_50525 = state_50510;
(statearr_50525[(8)] = inst_50485);

return statearr_50525;
})();
var statearr_50526_50571 = state_50510__$1;
(statearr_50526_50571[(2)] = inst_50487);

(statearr_50526_50571[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (13))){
var inst_50444 = figwheel.client.heads_up.clear.call(null);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50510__$1,(16),inst_50444);
} else {
if((state_val_50511 === (22))){
var inst_50465 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50466 = figwheel.client.heads_up.append_warning_message.call(null,inst_50465);
var state_50510__$1 = state_50510;
var statearr_50527_50572 = state_50510__$1;
(statearr_50527_50572[(2)] = inst_50466);

(statearr_50527_50572[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (36))){
var inst_50496 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50528_50573 = state_50510__$1;
(statearr_50528_50573[(2)] = inst_50496);

(statearr_50528_50573[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (29))){
var inst_50476 = (state_50510[(2)]);
var inst_50477 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50478 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50477);
var state_50510__$1 = (function (){var statearr_50529 = state_50510;
(statearr_50529[(9)] = inst_50476);

return statearr_50529;
})();
var statearr_50530_50574 = state_50510__$1;
(statearr_50530_50574[(2)] = inst_50478);

(statearr_50530_50574[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (6))){
var inst_50425 = (state_50510[(10)]);
var state_50510__$1 = state_50510;
var statearr_50531_50575 = state_50510__$1;
(statearr_50531_50575[(2)] = inst_50425);

(statearr_50531_50575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (28))){
var inst_50472 = (state_50510[(2)]);
var inst_50473 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50474 = figwheel.client.heads_up.display_warning.call(null,inst_50473);
var state_50510__$1 = (function (){var statearr_50532 = state_50510;
(statearr_50532[(11)] = inst_50472);

return statearr_50532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50510__$1,(29),inst_50474);
} else {
if((state_val_50511 === (25))){
var inst_50470 = figwheel.client.heads_up.clear.call(null);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50510__$1,(28),inst_50470);
} else {
if((state_val_50511 === (34))){
var inst_50491 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50510__$1,(37),inst_50491);
} else {
if((state_val_50511 === (17))){
var inst_50450 = (state_50510[(2)]);
var inst_50451 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50452 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50451);
var state_50510__$1 = (function (){var statearr_50533 = state_50510;
(statearr_50533[(12)] = inst_50450);

return statearr_50533;
})();
var statearr_50534_50576 = state_50510__$1;
(statearr_50534_50576[(2)] = inst_50452);

(statearr_50534_50576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (3))){
var inst_50442 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50510__$1 = state_50510;
if(cljs.core.truth_(inst_50442)){
var statearr_50535_50577 = state_50510__$1;
(statearr_50535_50577[(1)] = (13));

} else {
var statearr_50536_50578 = state_50510__$1;
(statearr_50536_50578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (12))){
var inst_50438 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50537_50579 = state_50510__$1;
(statearr_50537_50579[(2)] = inst_50438);

(statearr_50537_50579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (2))){
var inst_50425 = (state_50510[(10)]);
var inst_50425__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50510__$1 = (function (){var statearr_50538 = state_50510;
(statearr_50538[(10)] = inst_50425__$1);

return statearr_50538;
})();
if(cljs.core.truth_(inst_50425__$1)){
var statearr_50539_50580 = state_50510__$1;
(statearr_50539_50580[(1)] = (5));

} else {
var statearr_50540_50581 = state_50510__$1;
(statearr_50540_50581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (23))){
var inst_50468 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50510__$1 = state_50510;
if(cljs.core.truth_(inst_50468)){
var statearr_50541_50582 = state_50510__$1;
(statearr_50541_50582[(1)] = (25));

} else {
var statearr_50542_50583 = state_50510__$1;
(statearr_50542_50583[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (35))){
var state_50510__$1 = state_50510;
var statearr_50543_50584 = state_50510__$1;
(statearr_50543_50584[(2)] = null);

(statearr_50543_50584[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (19))){
var inst_50463 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50510__$1 = state_50510;
if(cljs.core.truth_(inst_50463)){
var statearr_50544_50585 = state_50510__$1;
(statearr_50544_50585[(1)] = (22));

} else {
var statearr_50545_50586 = state_50510__$1;
(statearr_50545_50586[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (11))){
var inst_50434 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50546_50587 = state_50510__$1;
(statearr_50546_50587[(2)] = inst_50434);

(statearr_50546_50587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (9))){
var inst_50436 = figwheel.client.heads_up.clear.call(null);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50510__$1,(12),inst_50436);
} else {
if((state_val_50511 === (5))){
var inst_50427 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50510__$1 = state_50510;
var statearr_50547_50588 = state_50510__$1;
(statearr_50547_50588[(2)] = inst_50427);

(statearr_50547_50588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (14))){
var inst_50454 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50510__$1 = state_50510;
if(cljs.core.truth_(inst_50454)){
var statearr_50548_50589 = state_50510__$1;
(statearr_50548_50589[(1)] = (18));

} else {
var statearr_50549_50590 = state_50510__$1;
(statearr_50549_50590[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (26))){
var inst_50480 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50510__$1 = state_50510;
if(cljs.core.truth_(inst_50480)){
var statearr_50550_50591 = state_50510__$1;
(statearr_50550_50591[(1)] = (30));

} else {
var statearr_50551_50592 = state_50510__$1;
(statearr_50551_50592[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (16))){
var inst_50446 = (state_50510[(2)]);
var inst_50447 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50448 = figwheel.client.heads_up.display_exception.call(null,inst_50447);
var state_50510__$1 = (function (){var statearr_50552 = state_50510;
(statearr_50552[(13)] = inst_50446);

return statearr_50552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50510__$1,(17),inst_50448);
} else {
if((state_val_50511 === (30))){
var inst_50482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50483 = figwheel.client.heads_up.display_warning.call(null,inst_50482);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50510__$1,(33),inst_50483);
} else {
if((state_val_50511 === (10))){
var inst_50440 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50553_50593 = state_50510__$1;
(statearr_50553_50593[(2)] = inst_50440);

(statearr_50553_50593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (18))){
var inst_50456 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50457 = figwheel.client.heads_up.display_exception.call(null,inst_50456);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50510__$1,(21),inst_50457);
} else {
if((state_val_50511 === (37))){
var inst_50493 = (state_50510[(2)]);
var state_50510__$1 = state_50510;
var statearr_50554_50594 = state_50510__$1;
(statearr_50554_50594[(2)] = inst_50493);

(statearr_50554_50594[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50511 === (8))){
var inst_50432 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50510__$1 = state_50510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50510__$1,(11),inst_50432);
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
});})(c__45492__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__45404__auto__,c__45492__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto____0 = (function (){
var statearr_50555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50555[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto__);

(statearr_50555[(1)] = (1));

return statearr_50555;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto____1 = (function (state_50510){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_50510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e50556){if((e50556 instanceof Object)){
var ex__45408__auto__ = e50556;
var statearr_50557_50595 = state_50510;
(statearr_50557_50595[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50596 = state_50510;
state_50510 = G__50596;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto__ = function(state_50510){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto____1.call(this,state_50510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__,msg_hist,msg_names,msg))
})();
var state__45494__auto__ = (function (){var statearr_50558 = f__45493__auto__.call(null);
(statearr_50558[(6)] = c__45492__auto__);

return statearr_50558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__,msg_hist,msg_names,msg))
);

return c__45492__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__45492__auto___50625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___50625,ch){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___50625,ch){
return (function (state_50611){
var state_val_50612 = (state_50611[(1)]);
if((state_val_50612 === (1))){
var state_50611__$1 = state_50611;
var statearr_50613_50626 = state_50611__$1;
(statearr_50613_50626[(2)] = null);

(statearr_50613_50626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (2))){
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50611__$1,(4),ch);
} else {
if((state_val_50612 === (3))){
var inst_50609 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50611__$1,inst_50609);
} else {
if((state_val_50612 === (4))){
var inst_50599 = (state_50611[(7)]);
var inst_50599__$1 = (state_50611[(2)]);
var state_50611__$1 = (function (){var statearr_50614 = state_50611;
(statearr_50614[(7)] = inst_50599__$1);

return statearr_50614;
})();
if(cljs.core.truth_(inst_50599__$1)){
var statearr_50615_50627 = state_50611__$1;
(statearr_50615_50627[(1)] = (5));

} else {
var statearr_50616_50628 = state_50611__$1;
(statearr_50616_50628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (5))){
var inst_50599 = (state_50611[(7)]);
var inst_50601 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50599);
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50611__$1,(8),inst_50601);
} else {
if((state_val_50612 === (6))){
var state_50611__$1 = state_50611;
var statearr_50617_50629 = state_50611__$1;
(statearr_50617_50629[(2)] = null);

(statearr_50617_50629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (7))){
var inst_50607 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
var statearr_50618_50630 = state_50611__$1;
(statearr_50618_50630[(2)] = inst_50607);

(statearr_50618_50630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50612 === (8))){
var inst_50603 = (state_50611[(2)]);
var state_50611__$1 = (function (){var statearr_50619 = state_50611;
(statearr_50619[(8)] = inst_50603);

return statearr_50619;
})();
var statearr_50620_50631 = state_50611__$1;
(statearr_50620_50631[(2)] = null);

(statearr_50620_50631[(1)] = (2));


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
});})(c__45492__auto___50625,ch))
;
return ((function (switch__45404__auto__,c__45492__auto___50625,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__45405__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__45405__auto____0 = (function (){
var statearr_50621 = [null,null,null,null,null,null,null,null,null];
(statearr_50621[(0)] = figwheel$client$heads_up_plugin_$_state_machine__45405__auto__);

(statearr_50621[(1)] = (1));

return statearr_50621;
});
var figwheel$client$heads_up_plugin_$_state_machine__45405__auto____1 = (function (state_50611){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_50611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e50622){if((e50622 instanceof Object)){
var ex__45408__auto__ = e50622;
var statearr_50623_50632 = state_50611;
(statearr_50623_50632[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50633 = state_50611;
state_50611 = G__50633;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__45405__auto__ = function(state_50611){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__45405__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__45405__auto____1.call(this,state_50611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__45405__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__45405__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___50625,ch))
})();
var state__45494__auto__ = (function (){var statearr_50624 = f__45493__auto__.call(null);
(statearr_50624[(6)] = c__45492__auto___50625);

return statearr_50624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___50625,ch))
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
var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__){
return (function (state_50639){
var state_val_50640 = (state_50639[(1)]);
if((state_val_50640 === (1))){
var inst_50634 = cljs.core.async.timeout.call(null,(3000));
var state_50639__$1 = state_50639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50639__$1,(2),inst_50634);
} else {
if((state_val_50640 === (2))){
var inst_50636 = (state_50639[(2)]);
var inst_50637 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50639__$1 = (function (){var statearr_50641 = state_50639;
(statearr_50641[(7)] = inst_50636);

return statearr_50641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50639__$1,inst_50637);
} else {
return null;
}
}
});})(c__45492__auto__))
;
return ((function (switch__45404__auto__,c__45492__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__45405__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__45405__auto____0 = (function (){
var statearr_50642 = [null,null,null,null,null,null,null,null];
(statearr_50642[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__45405__auto__);

(statearr_50642[(1)] = (1));

return statearr_50642;
});
var figwheel$client$enforce_project_plugin_$_state_machine__45405__auto____1 = (function (state_50639){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_50639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e50643){if((e50643 instanceof Object)){
var ex__45408__auto__ = e50643;
var statearr_50644_50646 = state_50639;
(statearr_50644_50646[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50647 = state_50639;
state_50639 = G__50647;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__45405__auto__ = function(state_50639){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__45405__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__45405__auto____1.call(this,state_50639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__45405__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__45405__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__))
})();
var state__45494__auto__ = (function (){var statearr_50645 = f__45493__auto__.call(null);
(statearr_50645[(6)] = c__45492__auto__);

return statearr_50645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__))
);

return c__45492__auto__;
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
var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__,figwheel_version,temp__4657__auto__){
return (function (state_50654){
var state_val_50655 = (state_50654[(1)]);
if((state_val_50655 === (1))){
var inst_50648 = cljs.core.async.timeout.call(null,(2000));
var state_50654__$1 = state_50654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50654__$1,(2),inst_50648);
} else {
if((state_val_50655 === (2))){
var inst_50650 = (state_50654[(2)]);
var inst_50651 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50652 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50651);
var state_50654__$1 = (function (){var statearr_50656 = state_50654;
(statearr_50656[(7)] = inst_50650);

return statearr_50656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50654__$1,inst_50652);
} else {
return null;
}
}
});})(c__45492__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__45404__auto__,c__45492__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto____0 = (function (){
var statearr_50657 = [null,null,null,null,null,null,null,null];
(statearr_50657[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto__);

(statearr_50657[(1)] = (1));

return statearr_50657;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto____1 = (function (state_50654){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_50654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e50658){if((e50658 instanceof Object)){
var ex__45408__auto__ = e50658;
var statearr_50659_50661 = state_50654;
(statearr_50659_50661[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50662 = state_50654;
state_50654 = G__50662;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto__ = function(state_50654){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto____1.call(this,state_50654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__,figwheel_version,temp__4657__auto__))
})();
var state__45494__auto__ = (function (){var statearr_50660 = f__45493__auto__.call(null);
(statearr_50660[(6)] = c__45492__auto__);

return statearr_50660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__,figwheel_version,temp__4657__auto__))
);

return c__45492__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50663){
var map__50664 = p__50663;
var map__50664__$1 = ((((!((map__50664 == null)))?((((map__50664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50664):map__50664);
var file = cljs.core.get.call(null,map__50664__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50664__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50664__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50666 = "";
var G__50666__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50666),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50666);
var G__50666__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50666__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50666__$1);
if(cljs.core.truth_((function (){var and__36296__auto__ = line;
if(cljs.core.truth_(and__36296__auto__)){
return column;
} else {
return and__36296__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50666__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50666__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50667){
var map__50668 = p__50667;
var map__50668__$1 = ((((!((map__50668 == null)))?((((map__50668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50668):map__50668);
var ed = map__50668__$1;
var formatted_exception = cljs.core.get.call(null,map__50668__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50668__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50668__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50670_50674 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50671_50675 = null;
var count__50672_50676 = (0);
var i__50673_50677 = (0);
while(true){
if((i__50673_50677 < count__50672_50676)){
var msg_50678 = cljs.core._nth.call(null,chunk__50671_50675,i__50673_50677);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50678);

var G__50679 = seq__50670_50674;
var G__50680 = chunk__50671_50675;
var G__50681 = count__50672_50676;
var G__50682 = (i__50673_50677 + (1));
seq__50670_50674 = G__50679;
chunk__50671_50675 = G__50680;
count__50672_50676 = G__50681;
i__50673_50677 = G__50682;
continue;
} else {
var temp__4657__auto___50683 = cljs.core.seq.call(null,seq__50670_50674);
if(temp__4657__auto___50683){
var seq__50670_50684__$1 = temp__4657__auto___50683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50670_50684__$1)){
var c__37147__auto___50685 = cljs.core.chunk_first.call(null,seq__50670_50684__$1);
var G__50686 = cljs.core.chunk_rest.call(null,seq__50670_50684__$1);
var G__50687 = c__37147__auto___50685;
var G__50688 = cljs.core.count.call(null,c__37147__auto___50685);
var G__50689 = (0);
seq__50670_50674 = G__50686;
chunk__50671_50675 = G__50687;
count__50672_50676 = G__50688;
i__50673_50677 = G__50689;
continue;
} else {
var msg_50690 = cljs.core.first.call(null,seq__50670_50684__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50690);

var G__50691 = cljs.core.next.call(null,seq__50670_50684__$1);
var G__50692 = null;
var G__50693 = (0);
var G__50694 = (0);
seq__50670_50674 = G__50691;
chunk__50671_50675 = G__50692;
count__50672_50676 = G__50693;
i__50673_50677 = G__50694;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50695){
var map__50696 = p__50695;
var map__50696__$1 = ((((!((map__50696 == null)))?((((map__50696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50696):map__50696);
var w = map__50696__$1;
var message = cljs.core.get.call(null,map__50696__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__50698 = cljs.core.seq.call(null,plugins);
var chunk__50699 = null;
var count__50700 = (0);
var i__50701 = (0);
while(true){
if((i__50701 < count__50700)){
var vec__50702 = cljs.core._nth.call(null,chunk__50699,i__50701);
var k = cljs.core.nth.call(null,vec__50702,(0),null);
var plugin = cljs.core.nth.call(null,vec__50702,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50708 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50698,chunk__50699,count__50700,i__50701,pl_50708,vec__50702,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50708.call(null,msg_hist);
});})(seq__50698,chunk__50699,count__50700,i__50701,pl_50708,vec__50702,k,plugin))
);
} else {
}

var G__50709 = seq__50698;
var G__50710 = chunk__50699;
var G__50711 = count__50700;
var G__50712 = (i__50701 + (1));
seq__50698 = G__50709;
chunk__50699 = G__50710;
count__50700 = G__50711;
i__50701 = G__50712;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50698);
if(temp__4657__auto__){
var seq__50698__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50698__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__50698__$1);
var G__50713 = cljs.core.chunk_rest.call(null,seq__50698__$1);
var G__50714 = c__37147__auto__;
var G__50715 = cljs.core.count.call(null,c__37147__auto__);
var G__50716 = (0);
seq__50698 = G__50713;
chunk__50699 = G__50714;
count__50700 = G__50715;
i__50701 = G__50716;
continue;
} else {
var vec__50705 = cljs.core.first.call(null,seq__50698__$1);
var k = cljs.core.nth.call(null,vec__50705,(0),null);
var plugin = cljs.core.nth.call(null,vec__50705,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50717 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50698,chunk__50699,count__50700,i__50701,pl_50717,vec__50705,k,plugin,seq__50698__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50717.call(null,msg_hist);
});})(seq__50698,chunk__50699,count__50700,i__50701,pl_50717,vec__50705,k,plugin,seq__50698__$1,temp__4657__auto__))
);
} else {
}

var G__50718 = cljs.core.next.call(null,seq__50698__$1);
var G__50719 = null;
var G__50720 = (0);
var G__50721 = (0);
seq__50698 = G__50718;
chunk__50699 = G__50719;
count__50700 = G__50720;
i__50701 = G__50721;
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
var G__50723 = arguments.length;
switch (G__50723) {
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

var seq__50724_50729 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50725_50730 = null;
var count__50726_50731 = (0);
var i__50727_50732 = (0);
while(true){
if((i__50727_50732 < count__50726_50731)){
var msg_50733 = cljs.core._nth.call(null,chunk__50725_50730,i__50727_50732);
figwheel.client.socket.handle_incoming_message.call(null,msg_50733);

var G__50734 = seq__50724_50729;
var G__50735 = chunk__50725_50730;
var G__50736 = count__50726_50731;
var G__50737 = (i__50727_50732 + (1));
seq__50724_50729 = G__50734;
chunk__50725_50730 = G__50735;
count__50726_50731 = G__50736;
i__50727_50732 = G__50737;
continue;
} else {
var temp__4657__auto___50738 = cljs.core.seq.call(null,seq__50724_50729);
if(temp__4657__auto___50738){
var seq__50724_50739__$1 = temp__4657__auto___50738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50724_50739__$1)){
var c__37147__auto___50740 = cljs.core.chunk_first.call(null,seq__50724_50739__$1);
var G__50741 = cljs.core.chunk_rest.call(null,seq__50724_50739__$1);
var G__50742 = c__37147__auto___50740;
var G__50743 = cljs.core.count.call(null,c__37147__auto___50740);
var G__50744 = (0);
seq__50724_50729 = G__50741;
chunk__50725_50730 = G__50742;
count__50726_50731 = G__50743;
i__50727_50732 = G__50744;
continue;
} else {
var msg_50745 = cljs.core.first.call(null,seq__50724_50739__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50745);

var G__50746 = cljs.core.next.call(null,seq__50724_50739__$1);
var G__50747 = null;
var G__50748 = (0);
var G__50749 = (0);
seq__50724_50729 = G__50746;
chunk__50725_50730 = G__50747;
count__50726_50731 = G__50748;
i__50727_50732 = G__50749;
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
var len__37479__auto___50754 = arguments.length;
var i__37480__auto___50755 = (0);
while(true){
if((i__37480__auto___50755 < len__37479__auto___50754)){
args__37486__auto__.push((arguments[i__37480__auto___50755]));

var G__50756 = (i__37480__auto___50755 + (1));
i__37480__auto___50755 = G__50756;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50751){
var map__50752 = p__50751;
var map__50752__$1 = ((((!((map__50752 == null)))?((((map__50752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50752):map__50752);
var opts = map__50752__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50750){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50750));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50757){if((e50757 instanceof Error)){
var e = e50757;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50757;

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
return (function (p__50758){
var map__50759 = p__50758;
var map__50759__$1 = ((((!((map__50759 == null)))?((((map__50759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50759):map__50759);
var msg_name = cljs.core.get.call(null,map__50759__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518330187329
