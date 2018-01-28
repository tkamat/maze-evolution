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
}catch (e37559){if((e37559 instanceof Error)){
var e = e37559;
return "Error: Unable to stringify";
} else {
throw e37559;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37562 = arguments.length;
switch (G__37562) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37560_SHARP_){
if(typeof p1__37560_SHARP_ === 'string'){
return p1__37560_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37560_SHARP_);
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
var args__29512__auto__ = [];
var len__29505__auto___37565 = arguments.length;
var i__29506__auto___37566 = (0);
while(true){
if((i__29506__auto___37566 < len__29505__auto___37565)){
args__29512__auto__.push((arguments[i__29506__auto___37566]));

var G__37567 = (i__29506__auto___37566 + (1));
i__29506__auto___37566 = G__37567;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37564){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37564));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29512__auto__ = [];
var len__29505__auto___37569 = arguments.length;
var i__29506__auto___37570 = (0);
while(true){
if((i__29506__auto___37570 < len__29505__auto___37569)){
args__29512__auto__.push((arguments[i__29506__auto___37570]));

var G__37571 = (i__29506__auto___37570 + (1));
i__29506__auto___37570 = G__37571;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37568){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37568));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37572){
var map__37573 = p__37572;
var map__37573__$1 = ((((!((map__37573 == null)))?((((map__37573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37573):map__37573);
var message = cljs.core.get.call(null,map__37573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28334__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28322__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28322__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28322__auto__;
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
var c__32630__auto___37652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___37652,ch){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___37652,ch){
return (function (state_37624){
var state_val_37625 = (state_37624[(1)]);
if((state_val_37625 === (7))){
var inst_37620 = (state_37624[(2)]);
var state_37624__$1 = state_37624;
var statearr_37626_37653 = state_37624__$1;
(statearr_37626_37653[(2)] = inst_37620);

(statearr_37626_37653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (1))){
var state_37624__$1 = state_37624;
var statearr_37627_37654 = state_37624__$1;
(statearr_37627_37654[(2)] = null);

(statearr_37627_37654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (4))){
var inst_37577 = (state_37624[(7)]);
var inst_37577__$1 = (state_37624[(2)]);
var state_37624__$1 = (function (){var statearr_37628 = state_37624;
(statearr_37628[(7)] = inst_37577__$1);

return statearr_37628;
})();
if(cljs.core.truth_(inst_37577__$1)){
var statearr_37629_37655 = state_37624__$1;
(statearr_37629_37655[(1)] = (5));

} else {
var statearr_37630_37656 = state_37624__$1;
(statearr_37630_37656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (15))){
var inst_37584 = (state_37624[(8)]);
var inst_37599 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37584);
var inst_37600 = cljs.core.first.call(null,inst_37599);
var inst_37601 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37600);
var inst_37602 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37601)].join('');
var inst_37603 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37602);
var state_37624__$1 = state_37624;
var statearr_37631_37657 = state_37624__$1;
(statearr_37631_37657[(2)] = inst_37603);

(statearr_37631_37657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (13))){
var inst_37608 = (state_37624[(2)]);
var state_37624__$1 = state_37624;
var statearr_37632_37658 = state_37624__$1;
(statearr_37632_37658[(2)] = inst_37608);

(statearr_37632_37658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (6))){
var state_37624__$1 = state_37624;
var statearr_37633_37659 = state_37624__$1;
(statearr_37633_37659[(2)] = null);

(statearr_37633_37659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (17))){
var inst_37606 = (state_37624[(2)]);
var state_37624__$1 = state_37624;
var statearr_37634_37660 = state_37624__$1;
(statearr_37634_37660[(2)] = inst_37606);

(statearr_37634_37660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (3))){
var inst_37622 = (state_37624[(2)]);
var state_37624__$1 = state_37624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37624__$1,inst_37622);
} else {
if((state_val_37625 === (12))){
var inst_37583 = (state_37624[(9)]);
var inst_37597 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37583,opts);
var state_37624__$1 = state_37624;
if(cljs.core.truth_(inst_37597)){
var statearr_37635_37661 = state_37624__$1;
(statearr_37635_37661[(1)] = (15));

} else {
var statearr_37636_37662 = state_37624__$1;
(statearr_37636_37662[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (2))){
var state_37624__$1 = state_37624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37624__$1,(4),ch);
} else {
if((state_val_37625 === (11))){
var inst_37584 = (state_37624[(8)]);
var inst_37589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37590 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37584);
var inst_37591 = cljs.core.async.timeout.call(null,(1000));
var inst_37592 = [inst_37590,inst_37591];
var inst_37593 = (new cljs.core.PersistentVector(null,2,(5),inst_37589,inst_37592,null));
var state_37624__$1 = state_37624;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37624__$1,(14),inst_37593);
} else {
if((state_val_37625 === (9))){
var inst_37584 = (state_37624[(8)]);
var inst_37610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37611 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37584);
var inst_37612 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37611);
var inst_37613 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37612)].join('');
var inst_37614 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37613);
var state_37624__$1 = (function (){var statearr_37637 = state_37624;
(statearr_37637[(10)] = inst_37610);

return statearr_37637;
})();
var statearr_37638_37663 = state_37624__$1;
(statearr_37638_37663[(2)] = inst_37614);

(statearr_37638_37663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (5))){
var inst_37577 = (state_37624[(7)]);
var inst_37579 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37580 = (new cljs.core.PersistentArrayMap(null,2,inst_37579,null));
var inst_37581 = (new cljs.core.PersistentHashSet(null,inst_37580,null));
var inst_37582 = figwheel.client.focus_msgs.call(null,inst_37581,inst_37577);
var inst_37583 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37582);
var inst_37584 = cljs.core.first.call(null,inst_37582);
var inst_37585 = figwheel.client.autoload_QMARK_.call(null);
var state_37624__$1 = (function (){var statearr_37639 = state_37624;
(statearr_37639[(9)] = inst_37583);

(statearr_37639[(8)] = inst_37584);

return statearr_37639;
})();
if(cljs.core.truth_(inst_37585)){
var statearr_37640_37664 = state_37624__$1;
(statearr_37640_37664[(1)] = (8));

} else {
var statearr_37641_37665 = state_37624__$1;
(statearr_37641_37665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (14))){
var inst_37595 = (state_37624[(2)]);
var state_37624__$1 = state_37624;
var statearr_37642_37666 = state_37624__$1;
(statearr_37642_37666[(2)] = inst_37595);

(statearr_37642_37666[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (16))){
var state_37624__$1 = state_37624;
var statearr_37643_37667 = state_37624__$1;
(statearr_37643_37667[(2)] = null);

(statearr_37643_37667[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (10))){
var inst_37616 = (state_37624[(2)]);
var state_37624__$1 = (function (){var statearr_37644 = state_37624;
(statearr_37644[(11)] = inst_37616);

return statearr_37644;
})();
var statearr_37645_37668 = state_37624__$1;
(statearr_37645_37668[(2)] = null);

(statearr_37645_37668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (8))){
var inst_37583 = (state_37624[(9)]);
var inst_37587 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37583,opts);
var state_37624__$1 = state_37624;
if(cljs.core.truth_(inst_37587)){
var statearr_37646_37669 = state_37624__$1;
(statearr_37646_37669[(1)] = (11));

} else {
var statearr_37647_37670 = state_37624__$1;
(statearr_37647_37670[(1)] = (12));

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
});})(c__32630__auto___37652,ch))
;
return ((function (switch__32542__auto__,c__32630__auto___37652,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32543__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32543__auto____0 = (function (){
var statearr_37648 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37648[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32543__auto__);

(statearr_37648[(1)] = (1));

return statearr_37648;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32543__auto____1 = (function (state_37624){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_37624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e37649){if((e37649 instanceof Object)){
var ex__32546__auto__ = e37649;
var statearr_37650_37671 = state_37624;
(statearr_37650_37671[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37672 = state_37624;
state_37624 = G__37672;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32543__auto__ = function(state_37624){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32543__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32543__auto____1.call(this,state_37624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32543__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32543__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___37652,ch))
})();
var state__32632__auto__ = (function (){var statearr_37651 = f__32631__auto__.call(null);
(statearr_37651[(6)] = c__32630__auto___37652);

return statearr_37651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___37652,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37673_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37673_SHARP_));
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
var base_path_37675 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37675){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37674){if((e37674 instanceof Error)){
var e = e37674;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37675], null));
} else {
var e = e37674;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37675))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37676){
var map__37677 = p__37676;
var map__37677__$1 = ((((!((map__37677 == null)))?((((map__37677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37677):map__37677);
var opts = map__37677__$1;
var build_id = cljs.core.get.call(null,map__37677__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37677,map__37677__$1,opts,build_id){
return (function (p__37679){
var vec__37680 = p__37679;
var seq__37681 = cljs.core.seq.call(null,vec__37680);
var first__37682 = cljs.core.first.call(null,seq__37681);
var seq__37681__$1 = cljs.core.next.call(null,seq__37681);
var map__37683 = first__37682;
var map__37683__$1 = ((((!((map__37683 == null)))?((((map__37683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37683):map__37683);
var msg = map__37683__$1;
var msg_name = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37681__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37680,seq__37681,first__37682,seq__37681__$1,map__37683,map__37683__$1,msg,msg_name,_,map__37677,map__37677__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37680,seq__37681,first__37682,seq__37681__$1,map__37683,map__37683__$1,msg,msg_name,_,map__37677,map__37677__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37677,map__37677__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37685){
var vec__37686 = p__37685;
var seq__37687 = cljs.core.seq.call(null,vec__37686);
var first__37688 = cljs.core.first.call(null,seq__37687);
var seq__37687__$1 = cljs.core.next.call(null,seq__37687);
var map__37689 = first__37688;
var map__37689__$1 = ((((!((map__37689 == null)))?((((map__37689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37689):map__37689);
var msg = map__37689__$1;
var msg_name = cljs.core.get.call(null,map__37689__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37687__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37691){
var map__37692 = p__37691;
var map__37692__$1 = ((((!((map__37692 == null)))?((((map__37692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37692):map__37692);
var on_compile_warning = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37692__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37692,map__37692__$1,on_compile_warning,on_compile_fail){
return (function (p__37694){
var vec__37695 = p__37694;
var seq__37696 = cljs.core.seq.call(null,vec__37695);
var first__37697 = cljs.core.first.call(null,seq__37696);
var seq__37696__$1 = cljs.core.next.call(null,seq__37696);
var map__37698 = first__37697;
var map__37698__$1 = ((((!((map__37698 == null)))?((((map__37698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37698):map__37698);
var msg = map__37698__$1;
var msg_name = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37696__$1;
var pred__37700 = cljs.core._EQ_;
var expr__37701 = msg_name;
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37701))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37700.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37701))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37692,map__37692__$1,on_compile_warning,on_compile_fail))
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
var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__,msg_hist,msg_names,msg){
return (function (state_37790){
var state_val_37791 = (state_37790[(1)]);
if((state_val_37791 === (7))){
var inst_37710 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37710)){
var statearr_37792_37839 = state_37790__$1;
(statearr_37792_37839[(1)] = (8));

} else {
var statearr_37793_37840 = state_37790__$1;
(statearr_37793_37840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (20))){
var inst_37784 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37794_37841 = state_37790__$1;
(statearr_37794_37841[(2)] = inst_37784);

(statearr_37794_37841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (27))){
var inst_37780 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37795_37842 = state_37790__$1;
(statearr_37795_37842[(2)] = inst_37780);

(statearr_37795_37842[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (1))){
var inst_37703 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37703)){
var statearr_37796_37843 = state_37790__$1;
(statearr_37796_37843[(1)] = (2));

} else {
var statearr_37797_37844 = state_37790__$1;
(statearr_37797_37844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (24))){
var inst_37782 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37798_37845 = state_37790__$1;
(statearr_37798_37845[(2)] = inst_37782);

(statearr_37798_37845[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (4))){
var inst_37788 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37790__$1,inst_37788);
} else {
if((state_val_37791 === (15))){
var inst_37786 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37799_37846 = state_37790__$1;
(statearr_37799_37846[(2)] = inst_37786);

(statearr_37799_37846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (21))){
var inst_37739 = (state_37790[(2)]);
var inst_37740 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37741 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37740);
var state_37790__$1 = (function (){var statearr_37800 = state_37790;
(statearr_37800[(7)] = inst_37739);

return statearr_37800;
})();
var statearr_37801_37847 = state_37790__$1;
(statearr_37801_37847[(2)] = inst_37741);

(statearr_37801_37847[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (31))){
var inst_37769 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37769)){
var statearr_37802_37848 = state_37790__$1;
(statearr_37802_37848[(1)] = (34));

} else {
var statearr_37803_37849 = state_37790__$1;
(statearr_37803_37849[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (32))){
var inst_37778 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37804_37850 = state_37790__$1;
(statearr_37804_37850[(2)] = inst_37778);

(statearr_37804_37850[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (33))){
var inst_37765 = (state_37790[(2)]);
var inst_37766 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37767 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37766);
var state_37790__$1 = (function (){var statearr_37805 = state_37790;
(statearr_37805[(8)] = inst_37765);

return statearr_37805;
})();
var statearr_37806_37851 = state_37790__$1;
(statearr_37806_37851[(2)] = inst_37767);

(statearr_37806_37851[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (13))){
var inst_37724 = figwheel.client.heads_up.clear.call(null);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(16),inst_37724);
} else {
if((state_val_37791 === (22))){
var inst_37745 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37746 = figwheel.client.heads_up.append_warning_message.call(null,inst_37745);
var state_37790__$1 = state_37790;
var statearr_37807_37852 = state_37790__$1;
(statearr_37807_37852[(2)] = inst_37746);

(statearr_37807_37852[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (36))){
var inst_37776 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37808_37853 = state_37790__$1;
(statearr_37808_37853[(2)] = inst_37776);

(statearr_37808_37853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (29))){
var inst_37756 = (state_37790[(2)]);
var inst_37757 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37758 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37757);
var state_37790__$1 = (function (){var statearr_37809 = state_37790;
(statearr_37809[(9)] = inst_37756);

return statearr_37809;
})();
var statearr_37810_37854 = state_37790__$1;
(statearr_37810_37854[(2)] = inst_37758);

(statearr_37810_37854[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (6))){
var inst_37705 = (state_37790[(10)]);
var state_37790__$1 = state_37790;
var statearr_37811_37855 = state_37790__$1;
(statearr_37811_37855[(2)] = inst_37705);

(statearr_37811_37855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (28))){
var inst_37752 = (state_37790[(2)]);
var inst_37753 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37754 = figwheel.client.heads_up.display_warning.call(null,inst_37753);
var state_37790__$1 = (function (){var statearr_37812 = state_37790;
(statearr_37812[(11)] = inst_37752);

return statearr_37812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(29),inst_37754);
} else {
if((state_val_37791 === (25))){
var inst_37750 = figwheel.client.heads_up.clear.call(null);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(28),inst_37750);
} else {
if((state_val_37791 === (34))){
var inst_37771 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(37),inst_37771);
} else {
if((state_val_37791 === (17))){
var inst_37730 = (state_37790[(2)]);
var inst_37731 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37732 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37731);
var state_37790__$1 = (function (){var statearr_37813 = state_37790;
(statearr_37813[(12)] = inst_37730);

return statearr_37813;
})();
var statearr_37814_37856 = state_37790__$1;
(statearr_37814_37856[(2)] = inst_37732);

(statearr_37814_37856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (3))){
var inst_37722 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37722)){
var statearr_37815_37857 = state_37790__$1;
(statearr_37815_37857[(1)] = (13));

} else {
var statearr_37816_37858 = state_37790__$1;
(statearr_37816_37858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (12))){
var inst_37718 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37817_37859 = state_37790__$1;
(statearr_37817_37859[(2)] = inst_37718);

(statearr_37817_37859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (2))){
var inst_37705 = (state_37790[(10)]);
var inst_37705__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37790__$1 = (function (){var statearr_37818 = state_37790;
(statearr_37818[(10)] = inst_37705__$1);

return statearr_37818;
})();
if(cljs.core.truth_(inst_37705__$1)){
var statearr_37819_37860 = state_37790__$1;
(statearr_37819_37860[(1)] = (5));

} else {
var statearr_37820_37861 = state_37790__$1;
(statearr_37820_37861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (23))){
var inst_37748 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37748)){
var statearr_37821_37862 = state_37790__$1;
(statearr_37821_37862[(1)] = (25));

} else {
var statearr_37822_37863 = state_37790__$1;
(statearr_37822_37863[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (35))){
var state_37790__$1 = state_37790;
var statearr_37823_37864 = state_37790__$1;
(statearr_37823_37864[(2)] = null);

(statearr_37823_37864[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (19))){
var inst_37743 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37743)){
var statearr_37824_37865 = state_37790__$1;
(statearr_37824_37865[(1)] = (22));

} else {
var statearr_37825_37866 = state_37790__$1;
(statearr_37825_37866[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (11))){
var inst_37714 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37826_37867 = state_37790__$1;
(statearr_37826_37867[(2)] = inst_37714);

(statearr_37826_37867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (9))){
var inst_37716 = figwheel.client.heads_up.clear.call(null);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(12),inst_37716);
} else {
if((state_val_37791 === (5))){
var inst_37707 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37790__$1 = state_37790;
var statearr_37827_37868 = state_37790__$1;
(statearr_37827_37868[(2)] = inst_37707);

(statearr_37827_37868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (14))){
var inst_37734 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37734)){
var statearr_37828_37869 = state_37790__$1;
(statearr_37828_37869[(1)] = (18));

} else {
var statearr_37829_37870 = state_37790__$1;
(statearr_37829_37870[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (26))){
var inst_37760 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37760)){
var statearr_37830_37871 = state_37790__$1;
(statearr_37830_37871[(1)] = (30));

} else {
var statearr_37831_37872 = state_37790__$1;
(statearr_37831_37872[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (16))){
var inst_37726 = (state_37790[(2)]);
var inst_37727 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37728 = figwheel.client.heads_up.display_exception.call(null,inst_37727);
var state_37790__$1 = (function (){var statearr_37832 = state_37790;
(statearr_37832[(13)] = inst_37726);

return statearr_37832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(17),inst_37728);
} else {
if((state_val_37791 === (30))){
var inst_37762 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37763 = figwheel.client.heads_up.display_warning.call(null,inst_37762);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(33),inst_37763);
} else {
if((state_val_37791 === (10))){
var inst_37720 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37833_37873 = state_37790__$1;
(statearr_37833_37873[(2)] = inst_37720);

(statearr_37833_37873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (18))){
var inst_37736 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37737 = figwheel.client.heads_up.display_exception.call(null,inst_37736);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(21),inst_37737);
} else {
if((state_val_37791 === (37))){
var inst_37773 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37834_37874 = state_37790__$1;
(statearr_37834_37874[(2)] = inst_37773);

(statearr_37834_37874[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (8))){
var inst_37712 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(11),inst_37712);
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
});})(c__32630__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32542__auto__,c__32630__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto____0 = (function (){
var statearr_37835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37835[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto__);

(statearr_37835[(1)] = (1));

return statearr_37835;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto____1 = (function (state_37790){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_37790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e37836){if((e37836 instanceof Object)){
var ex__32546__auto__ = e37836;
var statearr_37837_37875 = state_37790;
(statearr_37837_37875[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37876 = state_37790;
state_37790 = G__37876;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto__ = function(state_37790){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto____1.call(this,state_37790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__,msg_hist,msg_names,msg))
})();
var state__32632__auto__ = (function (){var statearr_37838 = f__32631__auto__.call(null);
(statearr_37838[(6)] = c__32630__auto__);

return statearr_37838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__,msg_hist,msg_names,msg))
);

return c__32630__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32630__auto___37905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___37905,ch){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___37905,ch){
return (function (state_37891){
var state_val_37892 = (state_37891[(1)]);
if((state_val_37892 === (1))){
var state_37891__$1 = state_37891;
var statearr_37893_37906 = state_37891__$1;
(statearr_37893_37906[(2)] = null);

(statearr_37893_37906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37892 === (2))){
var state_37891__$1 = state_37891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37891__$1,(4),ch);
} else {
if((state_val_37892 === (3))){
var inst_37889 = (state_37891[(2)]);
var state_37891__$1 = state_37891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37891__$1,inst_37889);
} else {
if((state_val_37892 === (4))){
var inst_37879 = (state_37891[(7)]);
var inst_37879__$1 = (state_37891[(2)]);
var state_37891__$1 = (function (){var statearr_37894 = state_37891;
(statearr_37894[(7)] = inst_37879__$1);

return statearr_37894;
})();
if(cljs.core.truth_(inst_37879__$1)){
var statearr_37895_37907 = state_37891__$1;
(statearr_37895_37907[(1)] = (5));

} else {
var statearr_37896_37908 = state_37891__$1;
(statearr_37896_37908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37892 === (5))){
var inst_37879 = (state_37891[(7)]);
var inst_37881 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37879);
var state_37891__$1 = state_37891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37891__$1,(8),inst_37881);
} else {
if((state_val_37892 === (6))){
var state_37891__$1 = state_37891;
var statearr_37897_37909 = state_37891__$1;
(statearr_37897_37909[(2)] = null);

(statearr_37897_37909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37892 === (7))){
var inst_37887 = (state_37891[(2)]);
var state_37891__$1 = state_37891;
var statearr_37898_37910 = state_37891__$1;
(statearr_37898_37910[(2)] = inst_37887);

(statearr_37898_37910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37892 === (8))){
var inst_37883 = (state_37891[(2)]);
var state_37891__$1 = (function (){var statearr_37899 = state_37891;
(statearr_37899[(8)] = inst_37883);

return statearr_37899;
})();
var statearr_37900_37911 = state_37891__$1;
(statearr_37900_37911[(2)] = null);

(statearr_37900_37911[(1)] = (2));


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
});})(c__32630__auto___37905,ch))
;
return ((function (switch__32542__auto__,c__32630__auto___37905,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32543__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32543__auto____0 = (function (){
var statearr_37901 = [null,null,null,null,null,null,null,null,null];
(statearr_37901[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32543__auto__);

(statearr_37901[(1)] = (1));

return statearr_37901;
});
var figwheel$client$heads_up_plugin_$_state_machine__32543__auto____1 = (function (state_37891){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_37891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e37902){if((e37902 instanceof Object)){
var ex__32546__auto__ = e37902;
var statearr_37903_37912 = state_37891;
(statearr_37903_37912[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37913 = state_37891;
state_37891 = G__37913;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32543__auto__ = function(state_37891){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32543__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32543__auto____1.call(this,state_37891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32543__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32543__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___37905,ch))
})();
var state__32632__auto__ = (function (){var statearr_37904 = f__32631__auto__.call(null);
(statearr_37904[(6)] = c__32630__auto___37905);

return statearr_37904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___37905,ch))
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
var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__){
return (function (state_37919){
var state_val_37920 = (state_37919[(1)]);
if((state_val_37920 === (1))){
var inst_37914 = cljs.core.async.timeout.call(null,(3000));
var state_37919__$1 = state_37919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37919__$1,(2),inst_37914);
} else {
if((state_val_37920 === (2))){
var inst_37916 = (state_37919[(2)]);
var inst_37917 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37919__$1 = (function (){var statearr_37921 = state_37919;
(statearr_37921[(7)] = inst_37916);

return statearr_37921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37919__$1,inst_37917);
} else {
return null;
}
}
});})(c__32630__auto__))
;
return ((function (switch__32542__auto__,c__32630__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32543__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32543__auto____0 = (function (){
var statearr_37922 = [null,null,null,null,null,null,null,null];
(statearr_37922[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32543__auto__);

(statearr_37922[(1)] = (1));

return statearr_37922;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32543__auto____1 = (function (state_37919){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_37919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e37923){if((e37923 instanceof Object)){
var ex__32546__auto__ = e37923;
var statearr_37924_37926 = state_37919;
(statearr_37924_37926[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37927 = state_37919;
state_37919 = G__37927;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32543__auto__ = function(state_37919){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32543__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32543__auto____1.call(this,state_37919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32543__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32543__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__))
})();
var state__32632__auto__ = (function (){var statearr_37925 = f__32631__auto__.call(null);
(statearr_37925[(6)] = c__32630__auto__);

return statearr_37925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__))
);

return c__32630__auto__;
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
var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37934){
var state_val_37935 = (state_37934[(1)]);
if((state_val_37935 === (1))){
var inst_37928 = cljs.core.async.timeout.call(null,(2000));
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(2),inst_37928);
} else {
if((state_val_37935 === (2))){
var inst_37930 = (state_37934[(2)]);
var inst_37931 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37932 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37931);
var state_37934__$1 = (function (){var statearr_37936 = state_37934;
(statearr_37936[(7)] = inst_37930);

return statearr_37936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37934__$1,inst_37932);
} else {
return null;
}
}
});})(c__32630__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32542__auto__,c__32630__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto____0 = (function (){
var statearr_37937 = [null,null,null,null,null,null,null,null];
(statearr_37937[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto__);

(statearr_37937[(1)] = (1));

return statearr_37937;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto____1 = (function (state_37934){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_37934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e37938){if((e37938 instanceof Object)){
var ex__32546__auto__ = e37938;
var statearr_37939_37941 = state_37934;
(statearr_37939_37941[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37942 = state_37934;
state_37934 = G__37942;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto__ = function(state_37934){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto____1.call(this,state_37934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32632__auto__ = (function (){var statearr_37940 = f__32631__auto__.call(null);
(statearr_37940[(6)] = c__32630__auto__);

return statearr_37940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__,figwheel_version,temp__4657__auto__))
);

return c__32630__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37943){
var map__37944 = p__37943;
var map__37944__$1 = ((((!((map__37944 == null)))?((((map__37944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37944):map__37944);
var file = cljs.core.get.call(null,map__37944__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37944__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37944__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37946 = "";
var G__37946__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37946),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37946);
var G__37946__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37946__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37946__$1);
if(cljs.core.truth_((function (){var and__28322__auto__ = line;
if(cljs.core.truth_(and__28322__auto__)){
return column;
} else {
return and__28322__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37946__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37946__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37947){
var map__37948 = p__37947;
var map__37948__$1 = ((((!((map__37948 == null)))?((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37948):map__37948);
var ed = map__37948__$1;
var formatted_exception = cljs.core.get.call(null,map__37948__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37948__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37948__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37950_37954 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37951_37955 = null;
var count__37952_37956 = (0);
var i__37953_37957 = (0);
while(true){
if((i__37953_37957 < count__37952_37956)){
var msg_37958 = cljs.core._nth.call(null,chunk__37951_37955,i__37953_37957);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37958);

var G__37959 = seq__37950_37954;
var G__37960 = chunk__37951_37955;
var G__37961 = count__37952_37956;
var G__37962 = (i__37953_37957 + (1));
seq__37950_37954 = G__37959;
chunk__37951_37955 = G__37960;
count__37952_37956 = G__37961;
i__37953_37957 = G__37962;
continue;
} else {
var temp__4657__auto___37963 = cljs.core.seq.call(null,seq__37950_37954);
if(temp__4657__auto___37963){
var seq__37950_37964__$1 = temp__4657__auto___37963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37950_37964__$1)){
var c__29173__auto___37965 = cljs.core.chunk_first.call(null,seq__37950_37964__$1);
var G__37966 = cljs.core.chunk_rest.call(null,seq__37950_37964__$1);
var G__37967 = c__29173__auto___37965;
var G__37968 = cljs.core.count.call(null,c__29173__auto___37965);
var G__37969 = (0);
seq__37950_37954 = G__37966;
chunk__37951_37955 = G__37967;
count__37952_37956 = G__37968;
i__37953_37957 = G__37969;
continue;
} else {
var msg_37970 = cljs.core.first.call(null,seq__37950_37964__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37970);

var G__37971 = cljs.core.next.call(null,seq__37950_37964__$1);
var G__37972 = null;
var G__37973 = (0);
var G__37974 = (0);
seq__37950_37954 = G__37971;
chunk__37951_37955 = G__37972;
count__37952_37956 = G__37973;
i__37953_37957 = G__37974;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37975){
var map__37976 = p__37975;
var map__37976__$1 = ((((!((map__37976 == null)))?((((map__37976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37976):map__37976);
var w = map__37976__$1;
var message = cljs.core.get.call(null,map__37976__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__28322__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28322__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28322__auto__;
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
var seq__37978 = cljs.core.seq.call(null,plugins);
var chunk__37979 = null;
var count__37980 = (0);
var i__37981 = (0);
while(true){
if((i__37981 < count__37980)){
var vec__37982 = cljs.core._nth.call(null,chunk__37979,i__37981);
var k = cljs.core.nth.call(null,vec__37982,(0),null);
var plugin = cljs.core.nth.call(null,vec__37982,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37988 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37978,chunk__37979,count__37980,i__37981,pl_37988,vec__37982,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37988.call(null,msg_hist);
});})(seq__37978,chunk__37979,count__37980,i__37981,pl_37988,vec__37982,k,plugin))
);
} else {
}

var G__37989 = seq__37978;
var G__37990 = chunk__37979;
var G__37991 = count__37980;
var G__37992 = (i__37981 + (1));
seq__37978 = G__37989;
chunk__37979 = G__37990;
count__37980 = G__37991;
i__37981 = G__37992;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37978);
if(temp__4657__auto__){
var seq__37978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37978__$1)){
var c__29173__auto__ = cljs.core.chunk_first.call(null,seq__37978__$1);
var G__37993 = cljs.core.chunk_rest.call(null,seq__37978__$1);
var G__37994 = c__29173__auto__;
var G__37995 = cljs.core.count.call(null,c__29173__auto__);
var G__37996 = (0);
seq__37978 = G__37993;
chunk__37979 = G__37994;
count__37980 = G__37995;
i__37981 = G__37996;
continue;
} else {
var vec__37985 = cljs.core.first.call(null,seq__37978__$1);
var k = cljs.core.nth.call(null,vec__37985,(0),null);
var plugin = cljs.core.nth.call(null,vec__37985,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37997 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37978,chunk__37979,count__37980,i__37981,pl_37997,vec__37985,k,plugin,seq__37978__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37997.call(null,msg_hist);
});})(seq__37978,chunk__37979,count__37980,i__37981,pl_37997,vec__37985,k,plugin,seq__37978__$1,temp__4657__auto__))
);
} else {
}

var G__37998 = cljs.core.next.call(null,seq__37978__$1);
var G__37999 = null;
var G__38000 = (0);
var G__38001 = (0);
seq__37978 = G__37998;
chunk__37979 = G__37999;
count__37980 = G__38000;
i__37981 = G__38001;
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
var G__38003 = arguments.length;
switch (G__38003) {
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

var seq__38004_38009 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38005_38010 = null;
var count__38006_38011 = (0);
var i__38007_38012 = (0);
while(true){
if((i__38007_38012 < count__38006_38011)){
var msg_38013 = cljs.core._nth.call(null,chunk__38005_38010,i__38007_38012);
figwheel.client.socket.handle_incoming_message.call(null,msg_38013);

var G__38014 = seq__38004_38009;
var G__38015 = chunk__38005_38010;
var G__38016 = count__38006_38011;
var G__38017 = (i__38007_38012 + (1));
seq__38004_38009 = G__38014;
chunk__38005_38010 = G__38015;
count__38006_38011 = G__38016;
i__38007_38012 = G__38017;
continue;
} else {
var temp__4657__auto___38018 = cljs.core.seq.call(null,seq__38004_38009);
if(temp__4657__auto___38018){
var seq__38004_38019__$1 = temp__4657__auto___38018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38004_38019__$1)){
var c__29173__auto___38020 = cljs.core.chunk_first.call(null,seq__38004_38019__$1);
var G__38021 = cljs.core.chunk_rest.call(null,seq__38004_38019__$1);
var G__38022 = c__29173__auto___38020;
var G__38023 = cljs.core.count.call(null,c__29173__auto___38020);
var G__38024 = (0);
seq__38004_38009 = G__38021;
chunk__38005_38010 = G__38022;
count__38006_38011 = G__38023;
i__38007_38012 = G__38024;
continue;
} else {
var msg_38025 = cljs.core.first.call(null,seq__38004_38019__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38025);

var G__38026 = cljs.core.next.call(null,seq__38004_38019__$1);
var G__38027 = null;
var G__38028 = (0);
var G__38029 = (0);
seq__38004_38009 = G__38026;
chunk__38005_38010 = G__38027;
count__38006_38011 = G__38028;
i__38007_38012 = G__38029;
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
var args__29512__auto__ = [];
var len__29505__auto___38034 = arguments.length;
var i__29506__auto___38035 = (0);
while(true){
if((i__29506__auto___38035 < len__29505__auto___38034)){
args__29512__auto__.push((arguments[i__29506__auto___38035]));

var G__38036 = (i__29506__auto___38035 + (1));
i__29506__auto___38035 = G__38036;
continue;
} else {
}
break;
}

var argseq__29513__auto__ = ((((0) < args__29512__auto__.length))?(new cljs.core.IndexedSeq(args__29512__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29513__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38031){
var map__38032 = p__38031;
var map__38032__$1 = ((((!((map__38032 == null)))?((((map__38032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38032):map__38032);
var opts = map__38032__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38030){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38030));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38037){if((e38037 instanceof Error)){
var e = e38037;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38037;

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
return (function (p__38038){
var map__38039 = p__38038;
var map__38039__$1 = ((((!((map__38039 == null)))?((((map__38039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38039):map__38039);
var msg_name = cljs.core.get.call(null,map__38039__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1517031116753
