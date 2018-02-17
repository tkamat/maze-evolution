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
}catch (e41562){if((e41562 instanceof Error)){
var e = e41562;
return "Error: Unable to stringify";
} else {
throw e41562;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41565 = arguments.length;
switch (G__41565) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41563_SHARP_){
if(typeof p1__41563_SHARP_ === 'string'){
return p1__41563_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41563_SHARP_);
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
var len__37479__auto___41568 = arguments.length;
var i__37480__auto___41569 = (0);
while(true){
if((i__37480__auto___41569 < len__37479__auto___41568)){
args__37486__auto__.push((arguments[i__37480__auto___41569]));

var G__41570 = (i__37480__auto___41569 + (1));
i__37480__auto___41569 = G__41570;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41567){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41567));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37486__auto__ = [];
var len__37479__auto___41572 = arguments.length;
var i__37480__auto___41573 = (0);
while(true){
if((i__37480__auto___41573 < len__37479__auto___41572)){
args__37486__auto__.push((arguments[i__37480__auto___41573]));

var G__41574 = (i__37480__auto___41573 + (1));
i__37480__auto___41573 = G__41574;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41571){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41571));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41575){
var map__41576 = p__41575;
var map__41576__$1 = ((((!((map__41576 == null)))?((((map__41576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41576):map__41576);
var message = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41576__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__39684__auto___41655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto___41655,ch){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto___41655,ch){
return (function (state_41627){
var state_val_41628 = (state_41627[(1)]);
if((state_val_41628 === (7))){
var inst_41623 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
var statearr_41629_41656 = state_41627__$1;
(statearr_41629_41656[(2)] = inst_41623);

(statearr_41629_41656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (1))){
var state_41627__$1 = state_41627;
var statearr_41630_41657 = state_41627__$1;
(statearr_41630_41657[(2)] = null);

(statearr_41630_41657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (4))){
var inst_41580 = (state_41627[(7)]);
var inst_41580__$1 = (state_41627[(2)]);
var state_41627__$1 = (function (){var statearr_41631 = state_41627;
(statearr_41631[(7)] = inst_41580__$1);

return statearr_41631;
})();
if(cljs.core.truth_(inst_41580__$1)){
var statearr_41632_41658 = state_41627__$1;
(statearr_41632_41658[(1)] = (5));

} else {
var statearr_41633_41659 = state_41627__$1;
(statearr_41633_41659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (15))){
var inst_41587 = (state_41627[(8)]);
var inst_41602 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41587);
var inst_41603 = cljs.core.first.call(null,inst_41602);
var inst_41604 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41603);
var inst_41605 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41604)].join('');
var inst_41606 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41605);
var state_41627__$1 = state_41627;
var statearr_41634_41660 = state_41627__$1;
(statearr_41634_41660[(2)] = inst_41606);

(statearr_41634_41660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (13))){
var inst_41611 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
var statearr_41635_41661 = state_41627__$1;
(statearr_41635_41661[(2)] = inst_41611);

(statearr_41635_41661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (6))){
var state_41627__$1 = state_41627;
var statearr_41636_41662 = state_41627__$1;
(statearr_41636_41662[(2)] = null);

(statearr_41636_41662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (17))){
var inst_41609 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
var statearr_41637_41663 = state_41627__$1;
(statearr_41637_41663[(2)] = inst_41609);

(statearr_41637_41663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (3))){
var inst_41625 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41627__$1,inst_41625);
} else {
if((state_val_41628 === (12))){
var inst_41586 = (state_41627[(9)]);
var inst_41600 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41586,opts);
var state_41627__$1 = state_41627;
if(cljs.core.truth_(inst_41600)){
var statearr_41638_41664 = state_41627__$1;
(statearr_41638_41664[(1)] = (15));

} else {
var statearr_41639_41665 = state_41627__$1;
(statearr_41639_41665[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (2))){
var state_41627__$1 = state_41627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41627__$1,(4),ch);
} else {
if((state_val_41628 === (11))){
var inst_41587 = (state_41627[(8)]);
var inst_41592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41593 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41587);
var inst_41594 = cljs.core.async.timeout.call(null,(1000));
var inst_41595 = [inst_41593,inst_41594];
var inst_41596 = (new cljs.core.PersistentVector(null,2,(5),inst_41592,inst_41595,null));
var state_41627__$1 = state_41627;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41627__$1,(14),inst_41596);
} else {
if((state_val_41628 === (9))){
var inst_41587 = (state_41627[(8)]);
var inst_41613 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41614 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41587);
var inst_41615 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41614);
var inst_41616 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41615)].join('');
var inst_41617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41616);
var state_41627__$1 = (function (){var statearr_41640 = state_41627;
(statearr_41640[(10)] = inst_41613);

return statearr_41640;
})();
var statearr_41641_41666 = state_41627__$1;
(statearr_41641_41666[(2)] = inst_41617);

(statearr_41641_41666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (5))){
var inst_41580 = (state_41627[(7)]);
var inst_41582 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41583 = (new cljs.core.PersistentArrayMap(null,2,inst_41582,null));
var inst_41584 = (new cljs.core.PersistentHashSet(null,inst_41583,null));
var inst_41585 = figwheel.client.focus_msgs.call(null,inst_41584,inst_41580);
var inst_41586 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41585);
var inst_41587 = cljs.core.first.call(null,inst_41585);
var inst_41588 = figwheel.client.autoload_QMARK_.call(null);
var state_41627__$1 = (function (){var statearr_41642 = state_41627;
(statearr_41642[(9)] = inst_41586);

(statearr_41642[(8)] = inst_41587);

return statearr_41642;
})();
if(cljs.core.truth_(inst_41588)){
var statearr_41643_41667 = state_41627__$1;
(statearr_41643_41667[(1)] = (8));

} else {
var statearr_41644_41668 = state_41627__$1;
(statearr_41644_41668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (14))){
var inst_41598 = (state_41627[(2)]);
var state_41627__$1 = state_41627;
var statearr_41645_41669 = state_41627__$1;
(statearr_41645_41669[(2)] = inst_41598);

(statearr_41645_41669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (16))){
var state_41627__$1 = state_41627;
var statearr_41646_41670 = state_41627__$1;
(statearr_41646_41670[(2)] = null);

(statearr_41646_41670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (10))){
var inst_41619 = (state_41627[(2)]);
var state_41627__$1 = (function (){var statearr_41647 = state_41627;
(statearr_41647[(11)] = inst_41619);

return statearr_41647;
})();
var statearr_41648_41671 = state_41627__$1;
(statearr_41648_41671[(2)] = null);

(statearr_41648_41671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41628 === (8))){
var inst_41586 = (state_41627[(9)]);
var inst_41590 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41586,opts);
var state_41627__$1 = state_41627;
if(cljs.core.truth_(inst_41590)){
var statearr_41649_41672 = state_41627__$1;
(statearr_41649_41672[(1)] = (11));

} else {
var statearr_41650_41673 = state_41627__$1;
(statearr_41650_41673[(1)] = (12));

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
});})(c__39684__auto___41655,ch))
;
return ((function (switch__39663__auto__,c__39684__auto___41655,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39664__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39664__auto____0 = (function (){
var statearr_41651 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41651[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39664__auto__);

(statearr_41651[(1)] = (1));

return statearr_41651;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39664__auto____1 = (function (state_41627){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_41627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e41652){if((e41652 instanceof Object)){
var ex__39667__auto__ = e41652;
var statearr_41653_41674 = state_41627;
(statearr_41653_41674[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41675 = state_41627;
state_41627 = G__41675;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39664__auto__ = function(state_41627){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39664__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39664__auto____1.call(this,state_41627);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39664__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39664__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto___41655,ch))
})();
var state__39686__auto__ = (function (){var statearr_41654 = f__39685__auto__.call(null);
(statearr_41654[(6)] = c__39684__auto___41655);

return statearr_41654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto___41655,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41676_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41676_SHARP_));
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
var base_path_41678 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41678){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41677){if((e41677 instanceof Error)){
var e = e41677;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41678], null));
} else {
var e = e41677;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41678))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41679){
var map__41680 = p__41679;
var map__41680__$1 = ((((!((map__41680 == null)))?((((map__41680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41680):map__41680);
var opts = map__41680__$1;
var build_id = cljs.core.get.call(null,map__41680__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41680,map__41680__$1,opts,build_id){
return (function (p__41682){
var vec__41683 = p__41682;
var seq__41684 = cljs.core.seq.call(null,vec__41683);
var first__41685 = cljs.core.first.call(null,seq__41684);
var seq__41684__$1 = cljs.core.next.call(null,seq__41684);
var map__41686 = first__41685;
var map__41686__$1 = ((((!((map__41686 == null)))?((((map__41686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41686):map__41686);
var msg = map__41686__$1;
var msg_name = cljs.core.get.call(null,map__41686__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41684__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41683,seq__41684,first__41685,seq__41684__$1,map__41686,map__41686__$1,msg,msg_name,_,map__41680,map__41680__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41683,seq__41684,first__41685,seq__41684__$1,map__41686,map__41686__$1,msg,msg_name,_,map__41680,map__41680__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41680,map__41680__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41688){
var vec__41689 = p__41688;
var seq__41690 = cljs.core.seq.call(null,vec__41689);
var first__41691 = cljs.core.first.call(null,seq__41690);
var seq__41690__$1 = cljs.core.next.call(null,seq__41690);
var map__41692 = first__41691;
var map__41692__$1 = ((((!((map__41692 == null)))?((((map__41692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41692):map__41692);
var msg = map__41692__$1;
var msg_name = cljs.core.get.call(null,map__41692__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41690__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41694){
var map__41695 = p__41694;
var map__41695__$1 = ((((!((map__41695 == null)))?((((map__41695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41695):map__41695);
var on_compile_warning = cljs.core.get.call(null,map__41695__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41695__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41695,map__41695__$1,on_compile_warning,on_compile_fail){
return (function (p__41697){
var vec__41698 = p__41697;
var seq__41699 = cljs.core.seq.call(null,vec__41698);
var first__41700 = cljs.core.first.call(null,seq__41699);
var seq__41699__$1 = cljs.core.next.call(null,seq__41699);
var map__41701 = first__41700;
var map__41701__$1 = ((((!((map__41701 == null)))?((((map__41701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41701):map__41701);
var msg = map__41701__$1;
var msg_name = cljs.core.get.call(null,map__41701__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41699__$1;
var pred__41703 = cljs.core._EQ_;
var expr__41704 = msg_name;
if(cljs.core.truth_(pred__41703.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41704))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41703.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41704))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41695,map__41695__$1,on_compile_warning,on_compile_fail))
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
var c__39684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto__,msg_hist,msg_names,msg){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto__,msg_hist,msg_names,msg){
return (function (state_41793){
var state_val_41794 = (state_41793[(1)]);
if((state_val_41794 === (7))){
var inst_41713 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
if(cljs.core.truth_(inst_41713)){
var statearr_41795_41842 = state_41793__$1;
(statearr_41795_41842[(1)] = (8));

} else {
var statearr_41796_41843 = state_41793__$1;
(statearr_41796_41843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (20))){
var inst_41787 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41797_41844 = state_41793__$1;
(statearr_41797_41844[(2)] = inst_41787);

(statearr_41797_41844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (27))){
var inst_41783 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41798_41845 = state_41793__$1;
(statearr_41798_41845[(2)] = inst_41783);

(statearr_41798_41845[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (1))){
var inst_41706 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41793__$1 = state_41793;
if(cljs.core.truth_(inst_41706)){
var statearr_41799_41846 = state_41793__$1;
(statearr_41799_41846[(1)] = (2));

} else {
var statearr_41800_41847 = state_41793__$1;
(statearr_41800_41847[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (24))){
var inst_41785 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41801_41848 = state_41793__$1;
(statearr_41801_41848[(2)] = inst_41785);

(statearr_41801_41848[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (4))){
var inst_41791 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41793__$1,inst_41791);
} else {
if((state_val_41794 === (15))){
var inst_41789 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41802_41849 = state_41793__$1;
(statearr_41802_41849[(2)] = inst_41789);

(statearr_41802_41849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (21))){
var inst_41742 = (state_41793[(2)]);
var inst_41743 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41744 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41743);
var state_41793__$1 = (function (){var statearr_41803 = state_41793;
(statearr_41803[(7)] = inst_41742);

return statearr_41803;
})();
var statearr_41804_41850 = state_41793__$1;
(statearr_41804_41850[(2)] = inst_41744);

(statearr_41804_41850[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (31))){
var inst_41772 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41793__$1 = state_41793;
if(cljs.core.truth_(inst_41772)){
var statearr_41805_41851 = state_41793__$1;
(statearr_41805_41851[(1)] = (34));

} else {
var statearr_41806_41852 = state_41793__$1;
(statearr_41806_41852[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (32))){
var inst_41781 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41807_41853 = state_41793__$1;
(statearr_41807_41853[(2)] = inst_41781);

(statearr_41807_41853[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (33))){
var inst_41768 = (state_41793[(2)]);
var inst_41769 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41770 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41769);
var state_41793__$1 = (function (){var statearr_41808 = state_41793;
(statearr_41808[(8)] = inst_41768);

return statearr_41808;
})();
var statearr_41809_41854 = state_41793__$1;
(statearr_41809_41854[(2)] = inst_41770);

(statearr_41809_41854[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (13))){
var inst_41727 = figwheel.client.heads_up.clear.call(null);
var state_41793__$1 = state_41793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41793__$1,(16),inst_41727);
} else {
if((state_val_41794 === (22))){
var inst_41748 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41749 = figwheel.client.heads_up.append_warning_message.call(null,inst_41748);
var state_41793__$1 = state_41793;
var statearr_41810_41855 = state_41793__$1;
(statearr_41810_41855[(2)] = inst_41749);

(statearr_41810_41855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (36))){
var inst_41779 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41811_41856 = state_41793__$1;
(statearr_41811_41856[(2)] = inst_41779);

(statearr_41811_41856[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (29))){
var inst_41759 = (state_41793[(2)]);
var inst_41760 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41761 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41760);
var state_41793__$1 = (function (){var statearr_41812 = state_41793;
(statearr_41812[(9)] = inst_41759);

return statearr_41812;
})();
var statearr_41813_41857 = state_41793__$1;
(statearr_41813_41857[(2)] = inst_41761);

(statearr_41813_41857[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (6))){
var inst_41708 = (state_41793[(10)]);
var state_41793__$1 = state_41793;
var statearr_41814_41858 = state_41793__$1;
(statearr_41814_41858[(2)] = inst_41708);

(statearr_41814_41858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (28))){
var inst_41755 = (state_41793[(2)]);
var inst_41756 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41757 = figwheel.client.heads_up.display_warning.call(null,inst_41756);
var state_41793__$1 = (function (){var statearr_41815 = state_41793;
(statearr_41815[(11)] = inst_41755);

return statearr_41815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41793__$1,(29),inst_41757);
} else {
if((state_val_41794 === (25))){
var inst_41753 = figwheel.client.heads_up.clear.call(null);
var state_41793__$1 = state_41793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41793__$1,(28),inst_41753);
} else {
if((state_val_41794 === (34))){
var inst_41774 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41793__$1 = state_41793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41793__$1,(37),inst_41774);
} else {
if((state_val_41794 === (17))){
var inst_41733 = (state_41793[(2)]);
var inst_41734 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41735 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41734);
var state_41793__$1 = (function (){var statearr_41816 = state_41793;
(statearr_41816[(12)] = inst_41733);

return statearr_41816;
})();
var statearr_41817_41859 = state_41793__$1;
(statearr_41817_41859[(2)] = inst_41735);

(statearr_41817_41859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (3))){
var inst_41725 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41793__$1 = state_41793;
if(cljs.core.truth_(inst_41725)){
var statearr_41818_41860 = state_41793__$1;
(statearr_41818_41860[(1)] = (13));

} else {
var statearr_41819_41861 = state_41793__$1;
(statearr_41819_41861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (12))){
var inst_41721 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41820_41862 = state_41793__$1;
(statearr_41820_41862[(2)] = inst_41721);

(statearr_41820_41862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (2))){
var inst_41708 = (state_41793[(10)]);
var inst_41708__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41793__$1 = (function (){var statearr_41821 = state_41793;
(statearr_41821[(10)] = inst_41708__$1);

return statearr_41821;
})();
if(cljs.core.truth_(inst_41708__$1)){
var statearr_41822_41863 = state_41793__$1;
(statearr_41822_41863[(1)] = (5));

} else {
var statearr_41823_41864 = state_41793__$1;
(statearr_41823_41864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (23))){
var inst_41751 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41793__$1 = state_41793;
if(cljs.core.truth_(inst_41751)){
var statearr_41824_41865 = state_41793__$1;
(statearr_41824_41865[(1)] = (25));

} else {
var statearr_41825_41866 = state_41793__$1;
(statearr_41825_41866[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (35))){
var state_41793__$1 = state_41793;
var statearr_41826_41867 = state_41793__$1;
(statearr_41826_41867[(2)] = null);

(statearr_41826_41867[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (19))){
var inst_41746 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41793__$1 = state_41793;
if(cljs.core.truth_(inst_41746)){
var statearr_41827_41868 = state_41793__$1;
(statearr_41827_41868[(1)] = (22));

} else {
var statearr_41828_41869 = state_41793__$1;
(statearr_41828_41869[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (11))){
var inst_41717 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41829_41870 = state_41793__$1;
(statearr_41829_41870[(2)] = inst_41717);

(statearr_41829_41870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (9))){
var inst_41719 = figwheel.client.heads_up.clear.call(null);
var state_41793__$1 = state_41793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41793__$1,(12),inst_41719);
} else {
if((state_val_41794 === (5))){
var inst_41710 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41793__$1 = state_41793;
var statearr_41830_41871 = state_41793__$1;
(statearr_41830_41871[(2)] = inst_41710);

(statearr_41830_41871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (14))){
var inst_41737 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41793__$1 = state_41793;
if(cljs.core.truth_(inst_41737)){
var statearr_41831_41872 = state_41793__$1;
(statearr_41831_41872[(1)] = (18));

} else {
var statearr_41832_41873 = state_41793__$1;
(statearr_41832_41873[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (26))){
var inst_41763 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41793__$1 = state_41793;
if(cljs.core.truth_(inst_41763)){
var statearr_41833_41874 = state_41793__$1;
(statearr_41833_41874[(1)] = (30));

} else {
var statearr_41834_41875 = state_41793__$1;
(statearr_41834_41875[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (16))){
var inst_41729 = (state_41793[(2)]);
var inst_41730 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41731 = figwheel.client.heads_up.display_exception.call(null,inst_41730);
var state_41793__$1 = (function (){var statearr_41835 = state_41793;
(statearr_41835[(13)] = inst_41729);

return statearr_41835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41793__$1,(17),inst_41731);
} else {
if((state_val_41794 === (30))){
var inst_41765 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41766 = figwheel.client.heads_up.display_warning.call(null,inst_41765);
var state_41793__$1 = state_41793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41793__$1,(33),inst_41766);
} else {
if((state_val_41794 === (10))){
var inst_41723 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41836_41876 = state_41793__$1;
(statearr_41836_41876[(2)] = inst_41723);

(statearr_41836_41876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (18))){
var inst_41739 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41740 = figwheel.client.heads_up.display_exception.call(null,inst_41739);
var state_41793__$1 = state_41793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41793__$1,(21),inst_41740);
} else {
if((state_val_41794 === (37))){
var inst_41776 = (state_41793[(2)]);
var state_41793__$1 = state_41793;
var statearr_41837_41877 = state_41793__$1;
(statearr_41837_41877[(2)] = inst_41776);

(statearr_41837_41877[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41794 === (8))){
var inst_41715 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41793__$1 = state_41793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41793__$1,(11),inst_41715);
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
});})(c__39684__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39663__auto__,c__39684__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto____0 = (function (){
var statearr_41838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41838[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto__);

(statearr_41838[(1)] = (1));

return statearr_41838;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto____1 = (function (state_41793){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_41793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e41839){if((e41839 instanceof Object)){
var ex__39667__auto__ = e41839;
var statearr_41840_41878 = state_41793;
(statearr_41840_41878[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41879 = state_41793;
state_41793 = G__41879;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto__ = function(state_41793){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto____1.call(this,state_41793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto__,msg_hist,msg_names,msg))
})();
var state__39686__auto__ = (function (){var statearr_41841 = f__39685__auto__.call(null);
(statearr_41841[(6)] = c__39684__auto__);

return statearr_41841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto__,msg_hist,msg_names,msg))
);

return c__39684__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39684__auto___41908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto___41908,ch){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto___41908,ch){
return (function (state_41894){
var state_val_41895 = (state_41894[(1)]);
if((state_val_41895 === (1))){
var state_41894__$1 = state_41894;
var statearr_41896_41909 = state_41894__$1;
(statearr_41896_41909[(2)] = null);

(statearr_41896_41909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41895 === (2))){
var state_41894__$1 = state_41894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41894__$1,(4),ch);
} else {
if((state_val_41895 === (3))){
var inst_41892 = (state_41894[(2)]);
var state_41894__$1 = state_41894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41894__$1,inst_41892);
} else {
if((state_val_41895 === (4))){
var inst_41882 = (state_41894[(7)]);
var inst_41882__$1 = (state_41894[(2)]);
var state_41894__$1 = (function (){var statearr_41897 = state_41894;
(statearr_41897[(7)] = inst_41882__$1);

return statearr_41897;
})();
if(cljs.core.truth_(inst_41882__$1)){
var statearr_41898_41910 = state_41894__$1;
(statearr_41898_41910[(1)] = (5));

} else {
var statearr_41899_41911 = state_41894__$1;
(statearr_41899_41911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41895 === (5))){
var inst_41882 = (state_41894[(7)]);
var inst_41884 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41882);
var state_41894__$1 = state_41894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41894__$1,(8),inst_41884);
} else {
if((state_val_41895 === (6))){
var state_41894__$1 = state_41894;
var statearr_41900_41912 = state_41894__$1;
(statearr_41900_41912[(2)] = null);

(statearr_41900_41912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41895 === (7))){
var inst_41890 = (state_41894[(2)]);
var state_41894__$1 = state_41894;
var statearr_41901_41913 = state_41894__$1;
(statearr_41901_41913[(2)] = inst_41890);

(statearr_41901_41913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41895 === (8))){
var inst_41886 = (state_41894[(2)]);
var state_41894__$1 = (function (){var statearr_41902 = state_41894;
(statearr_41902[(8)] = inst_41886);

return statearr_41902;
})();
var statearr_41903_41914 = state_41894__$1;
(statearr_41903_41914[(2)] = null);

(statearr_41903_41914[(1)] = (2));


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
});})(c__39684__auto___41908,ch))
;
return ((function (switch__39663__auto__,c__39684__auto___41908,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39664__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39664__auto____0 = (function (){
var statearr_41904 = [null,null,null,null,null,null,null,null,null];
(statearr_41904[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39664__auto__);

(statearr_41904[(1)] = (1));

return statearr_41904;
});
var figwheel$client$heads_up_plugin_$_state_machine__39664__auto____1 = (function (state_41894){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_41894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e41905){if((e41905 instanceof Object)){
var ex__39667__auto__ = e41905;
var statearr_41906_41915 = state_41894;
(statearr_41906_41915[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41916 = state_41894;
state_41894 = G__41916;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39664__auto__ = function(state_41894){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39664__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39664__auto____1.call(this,state_41894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39664__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39664__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto___41908,ch))
})();
var state__39686__auto__ = (function (){var statearr_41907 = f__39685__auto__.call(null);
(statearr_41907[(6)] = c__39684__auto___41908);

return statearr_41907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto___41908,ch))
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
var c__39684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto__){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto__){
return (function (state_41922){
var state_val_41923 = (state_41922[(1)]);
if((state_val_41923 === (1))){
var inst_41917 = cljs.core.async.timeout.call(null,(3000));
var state_41922__$1 = state_41922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41922__$1,(2),inst_41917);
} else {
if((state_val_41923 === (2))){
var inst_41919 = (state_41922[(2)]);
var inst_41920 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41922__$1 = (function (){var statearr_41924 = state_41922;
(statearr_41924[(7)] = inst_41919);

return statearr_41924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41922__$1,inst_41920);
} else {
return null;
}
}
});})(c__39684__auto__))
;
return ((function (switch__39663__auto__,c__39684__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39664__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39664__auto____0 = (function (){
var statearr_41925 = [null,null,null,null,null,null,null,null];
(statearr_41925[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39664__auto__);

(statearr_41925[(1)] = (1));

return statearr_41925;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39664__auto____1 = (function (state_41922){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_41922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e41926){if((e41926 instanceof Object)){
var ex__39667__auto__ = e41926;
var statearr_41927_41929 = state_41922;
(statearr_41927_41929[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41930 = state_41922;
state_41922 = G__41930;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39664__auto__ = function(state_41922){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39664__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39664__auto____1.call(this,state_41922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39664__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39664__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto__))
})();
var state__39686__auto__ = (function (){var statearr_41928 = f__39685__auto__.call(null);
(statearr_41928[(6)] = c__39684__auto__);

return statearr_41928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto__))
);

return c__39684__auto__;
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
var c__39684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto__,figwheel_version,temp__4657__auto__){
return (function (state_41937){
var state_val_41938 = (state_41937[(1)]);
if((state_val_41938 === (1))){
var inst_41931 = cljs.core.async.timeout.call(null,(2000));
var state_41937__$1 = state_41937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41937__$1,(2),inst_41931);
} else {
if((state_val_41938 === (2))){
var inst_41933 = (state_41937[(2)]);
var inst_41934 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_41935 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41934);
var state_41937__$1 = (function (){var statearr_41939 = state_41937;
(statearr_41939[(7)] = inst_41933);

return statearr_41939;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41937__$1,inst_41935);
} else {
return null;
}
}
});})(c__39684__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__39663__auto__,c__39684__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto____0 = (function (){
var statearr_41940 = [null,null,null,null,null,null,null,null];
(statearr_41940[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto__);

(statearr_41940[(1)] = (1));

return statearr_41940;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto____1 = (function (state_41937){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_41937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e41941){if((e41941 instanceof Object)){
var ex__39667__auto__ = e41941;
var statearr_41942_41944 = state_41937;
(statearr_41942_41944[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41945 = state_41937;
state_41937 = G__41945;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto__ = function(state_41937){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto____1.call(this,state_41937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto__,figwheel_version,temp__4657__auto__))
})();
var state__39686__auto__ = (function (){var statearr_41943 = f__39685__auto__.call(null);
(statearr_41943[(6)] = c__39684__auto__);

return statearr_41943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto__,figwheel_version,temp__4657__auto__))
);

return c__39684__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41946){
var map__41947 = p__41946;
var map__41947__$1 = ((((!((map__41947 == null)))?((((map__41947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41947):map__41947);
var file = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41949 = "";
var G__41949__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41949),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__41949);
var G__41949__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41949__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41949__$1);
if(cljs.core.truth_((function (){var and__36296__auto__ = line;
if(cljs.core.truth_(and__36296__auto__)){
return column;
} else {
return and__36296__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41949__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__41949__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41950){
var map__41951 = p__41950;
var map__41951__$1 = ((((!((map__41951 == null)))?((((map__41951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41951):map__41951);
var ed = map__41951__$1;
var formatted_exception = cljs.core.get.call(null,map__41951__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41951__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41951__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41953_41957 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41954_41958 = null;
var count__41955_41959 = (0);
var i__41956_41960 = (0);
while(true){
if((i__41956_41960 < count__41955_41959)){
var msg_41961 = cljs.core._nth.call(null,chunk__41954_41958,i__41956_41960);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41961);

var G__41962 = seq__41953_41957;
var G__41963 = chunk__41954_41958;
var G__41964 = count__41955_41959;
var G__41965 = (i__41956_41960 + (1));
seq__41953_41957 = G__41962;
chunk__41954_41958 = G__41963;
count__41955_41959 = G__41964;
i__41956_41960 = G__41965;
continue;
} else {
var temp__4657__auto___41966 = cljs.core.seq.call(null,seq__41953_41957);
if(temp__4657__auto___41966){
var seq__41953_41967__$1 = temp__4657__auto___41966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41953_41967__$1)){
var c__37147__auto___41968 = cljs.core.chunk_first.call(null,seq__41953_41967__$1);
var G__41969 = cljs.core.chunk_rest.call(null,seq__41953_41967__$1);
var G__41970 = c__37147__auto___41968;
var G__41971 = cljs.core.count.call(null,c__37147__auto___41968);
var G__41972 = (0);
seq__41953_41957 = G__41969;
chunk__41954_41958 = G__41970;
count__41955_41959 = G__41971;
i__41956_41960 = G__41972;
continue;
} else {
var msg_41973 = cljs.core.first.call(null,seq__41953_41967__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41973);

var G__41974 = cljs.core.next.call(null,seq__41953_41967__$1);
var G__41975 = null;
var G__41976 = (0);
var G__41977 = (0);
seq__41953_41957 = G__41974;
chunk__41954_41958 = G__41975;
count__41955_41959 = G__41976;
i__41956_41960 = G__41977;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41978){
var map__41979 = p__41978;
var map__41979__$1 = ((((!((map__41979 == null)))?((((map__41979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41979):map__41979);
var w = map__41979__$1;
var message = cljs.core.get.call(null,map__41979__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__41981 = cljs.core.seq.call(null,plugins);
var chunk__41982 = null;
var count__41983 = (0);
var i__41984 = (0);
while(true){
if((i__41984 < count__41983)){
var vec__41985 = cljs.core._nth.call(null,chunk__41982,i__41984);
var k = cljs.core.nth.call(null,vec__41985,(0),null);
var plugin = cljs.core.nth.call(null,vec__41985,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41991 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41981,chunk__41982,count__41983,i__41984,pl_41991,vec__41985,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41991.call(null,msg_hist);
});})(seq__41981,chunk__41982,count__41983,i__41984,pl_41991,vec__41985,k,plugin))
);
} else {
}

var G__41992 = seq__41981;
var G__41993 = chunk__41982;
var G__41994 = count__41983;
var G__41995 = (i__41984 + (1));
seq__41981 = G__41992;
chunk__41982 = G__41993;
count__41983 = G__41994;
i__41984 = G__41995;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41981);
if(temp__4657__auto__){
var seq__41981__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41981__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__41981__$1);
var G__41996 = cljs.core.chunk_rest.call(null,seq__41981__$1);
var G__41997 = c__37147__auto__;
var G__41998 = cljs.core.count.call(null,c__37147__auto__);
var G__41999 = (0);
seq__41981 = G__41996;
chunk__41982 = G__41997;
count__41983 = G__41998;
i__41984 = G__41999;
continue;
} else {
var vec__41988 = cljs.core.first.call(null,seq__41981__$1);
var k = cljs.core.nth.call(null,vec__41988,(0),null);
var plugin = cljs.core.nth.call(null,vec__41988,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42000 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41981,chunk__41982,count__41983,i__41984,pl_42000,vec__41988,k,plugin,seq__41981__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42000.call(null,msg_hist);
});})(seq__41981,chunk__41982,count__41983,i__41984,pl_42000,vec__41988,k,plugin,seq__41981__$1,temp__4657__auto__))
);
} else {
}

var G__42001 = cljs.core.next.call(null,seq__41981__$1);
var G__42002 = null;
var G__42003 = (0);
var G__42004 = (0);
seq__41981 = G__42001;
chunk__41982 = G__42002;
count__41983 = G__42003;
i__41984 = G__42004;
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
var G__42006 = arguments.length;
switch (G__42006) {
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

var seq__42007_42012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42008_42013 = null;
var count__42009_42014 = (0);
var i__42010_42015 = (0);
while(true){
if((i__42010_42015 < count__42009_42014)){
var msg_42016 = cljs.core._nth.call(null,chunk__42008_42013,i__42010_42015);
figwheel.client.socket.handle_incoming_message.call(null,msg_42016);

var G__42017 = seq__42007_42012;
var G__42018 = chunk__42008_42013;
var G__42019 = count__42009_42014;
var G__42020 = (i__42010_42015 + (1));
seq__42007_42012 = G__42017;
chunk__42008_42013 = G__42018;
count__42009_42014 = G__42019;
i__42010_42015 = G__42020;
continue;
} else {
var temp__4657__auto___42021 = cljs.core.seq.call(null,seq__42007_42012);
if(temp__4657__auto___42021){
var seq__42007_42022__$1 = temp__4657__auto___42021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42007_42022__$1)){
var c__37147__auto___42023 = cljs.core.chunk_first.call(null,seq__42007_42022__$1);
var G__42024 = cljs.core.chunk_rest.call(null,seq__42007_42022__$1);
var G__42025 = c__37147__auto___42023;
var G__42026 = cljs.core.count.call(null,c__37147__auto___42023);
var G__42027 = (0);
seq__42007_42012 = G__42024;
chunk__42008_42013 = G__42025;
count__42009_42014 = G__42026;
i__42010_42015 = G__42027;
continue;
} else {
var msg_42028 = cljs.core.first.call(null,seq__42007_42022__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42028);

var G__42029 = cljs.core.next.call(null,seq__42007_42022__$1);
var G__42030 = null;
var G__42031 = (0);
var G__42032 = (0);
seq__42007_42012 = G__42029;
chunk__42008_42013 = G__42030;
count__42009_42014 = G__42031;
i__42010_42015 = G__42032;
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
var len__37479__auto___42037 = arguments.length;
var i__37480__auto___42038 = (0);
while(true){
if((i__37480__auto___42038 < len__37479__auto___42037)){
args__37486__auto__.push((arguments[i__37480__auto___42038]));

var G__42039 = (i__37480__auto___42038 + (1));
i__37480__auto___42038 = G__42039;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42034){
var map__42035 = p__42034;
var map__42035__$1 = ((((!((map__42035 == null)))?((((map__42035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42035):map__42035);
var opts = map__42035__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42033){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42033));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42040){if((e42040 instanceof Error)){
var e = e42040;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42040;

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
return (function (p__42041){
var map__42042 = p__42041;
var map__42042__$1 = ((((!((map__42042 == null)))?((((map__42042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42042):map__42042);
var msg_name = cljs.core.get.call(null,map__42042__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518645800395
