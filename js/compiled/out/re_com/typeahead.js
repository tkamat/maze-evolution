// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__40291){
var map__40292 = p__40291;
var map__40292__$1 = ((((!((map__40292 == null)))?((((map__40292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40292):map__40292);
var args = map__40292__$1;
var on_change = cljs.core.get.call(null,map__40292__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__40292__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__40292__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__40292__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__40292__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__40292__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__40292__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__40294 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__36308__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__40294,external_model_value);
} else {
return G__40294;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__40295,event){
var map__40296 = p__40295;
var map__40296__$1 = ((((!((map__40296 == null)))?((((map__40296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40296):map__40296);
var state = map__40296__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__40296__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__40296__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__40298 = event;
var G__40298__$1 = (((G__40298 instanceof cljs.core.Keyword))?G__40298.fqn:null);
switch (G__40298__$1) {
case "input-text-blurred":
var and__36296__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__36296__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__36308__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40298__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__40300,event){
var map__40301 = p__40300;
var map__40301__$1 = ((((!((map__40301 == null)))?((((map__40301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40301):map__40301);
var state = map__40301__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__40301__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__40303 = event;
var G__40303__$1 = (((G__40303 instanceof cljs.core.Keyword))?G__40303.fqn:null);
switch (G__40303__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__40305,new_value){
var map__40306 = p__40305;
var map__40306__$1 = ((((!((map__40306 == null)))?((((map__40306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40306):map__40306);
var state = map__40306__$1;
var on_change = cljs.core.get.call(null,map__40306__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__40308,suggestion){
var map__40309 = p__40308;
var map__40309__$1 = ((((!((map__40309 == null)))?((((map__40309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40309):map__40309);
var state = map__40309__$1;
var suggestion_to_string = cljs.core.get.call(null,map__40309__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__40311 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__40311,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__40311;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__40312,index){
var map__40313 = p__40312;
var map__40313__$1 = ((((!((map__40313 == null)))?((((map__40313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40313):map__40313);
var state = map__40313__$1;
var suggestions = cljs.core.get.call(null,map__40313__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__40315 = state;
var G__40315__$1 = cljs.core.assoc.call(null,G__40315,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__40315__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__40315__$1,suggestion):G__40315__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__40315__$2,suggestion);
} else {
return G__40315__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__40316,index){
var map__40317 = p__40316;
var map__40317__$1 = ((((!((map__40317 == null)))?((((map__40317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40317):map__40317);
var state = map__40317__$1;
var suggestions = cljs.core.get.call(null,map__40317__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__40319){
var map__40320 = p__40319;
var map__40320__$1 = ((((!((map__40320 == null)))?((((map__40320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40320):map__40320);
var state = map__40320__$1;
var suggestion_active_index = cljs.core.get.call(null,map__40320__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__40322 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__40322,suggestion_active_index);
} else {
return G__40322;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__40323){
var map__40324 = p__40323;
var map__40324__$1 = ((((!((map__40324 == null)))?((((map__40324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40324):map__40324);
var state = map__40324__$1;
var suggestions = cljs.core.get.call(null,map__40324__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__40324__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__40326 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__40326,re_com.typeahead.wrap.call(null,((function (){var or__36308__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__40326;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__40327){
var map__40328 = p__40327;
var map__40328__$1 = ((((!((map__40328 == null)))?((((map__40328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40328):map__40328);
var state = map__40328__$1;
var suggestions = cljs.core.get.call(null,map__40328__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__40328__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__40330 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__40330,re_com.typeahead.wrap.call(null,((function (){var or__36308__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__40330;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__40331 = state;
var G__40331__$1 = re_com.typeahead.clear_suggestions.call(null,G__40331)
;
var G__40331__$2 = cljs.core.assoc.call(null,G__40331__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__40331__$2,null);
} else {
return G__40331__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__40332){
var map__40333 = p__40332;
var map__40333__$1 = ((((!((map__40333 == null)))?((((map__40333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40333):map__40333);
var state = map__40333__$1;
var input_text = cljs.core.get.call(null,map__40333__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__40333__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__40335 = state;
if(cljs.core.truth_((function (){var and__36296__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__36296__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__36296__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__40335,input_text);
} else {
return G__40335;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__40336_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__40336_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__39058__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39058__auto__){
return (function (){
var f__39059__auto__ = (function (){var switch__39037__auto__ = ((function (c__39058__auto__){
return (function (state_40353){
var state_val_40354 = (state_40353[(1)]);
if((state_val_40354 === (1))){
var state_40353__$1 = state_40353;
var statearr_40355_40367 = state_40353__$1;
(statearr_40355_40367[(2)] = null);

(statearr_40355_40367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40354 === (2))){
var state_40353__$1 = state_40353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40353__$1,(4),c_search);
} else {
if((state_val_40354 === (3))){
var inst_40351 = (state_40353[(2)]);
var state_40353__$1 = state_40353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40353__$1,inst_40351);
} else {
if((state_val_40354 === (4))){
var inst_40339 = (state_40353[(7)]);
var inst_40339__$1 = (state_40353[(2)]);
var inst_40340 = cljs.core.deref.call(null,state_atom);
var inst_40341 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_40340);
var inst_40342 = cljs.core._EQ_.call(null,"",inst_40339__$1);
var state_40353__$1 = (function (){var statearr_40356 = state_40353;
(statearr_40356[(8)] = inst_40341);

(statearr_40356[(7)] = inst_40339__$1);

return statearr_40356;
})();
if(inst_40342){
var statearr_40357_40368 = state_40353__$1;
(statearr_40357_40368[(1)] = (5));

} else {
var statearr_40358_40369 = state_40353__$1;
(statearr_40358_40369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40354 === (5))){
var inst_40344 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_40353__$1 = state_40353;
var statearr_40359_40370 = state_40353__$1;
(statearr_40359_40370[(2)] = inst_40344);

(statearr_40359_40370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40354 === (6))){
var inst_40341 = (state_40353[(8)]);
var inst_40339 = (state_40353[(7)]);
var inst_40346 = re_com.typeahead.search_data_source_BANG_.call(null,inst_40341,state_atom,inst_40339);
var state_40353__$1 = state_40353;
var statearr_40360_40371 = state_40353__$1;
(statearr_40360_40371[(2)] = inst_40346);

(statearr_40360_40371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40354 === (7))){
var inst_40348 = (state_40353[(2)]);
var state_40353__$1 = (function (){var statearr_40361 = state_40353;
(statearr_40361[(9)] = inst_40348);

return statearr_40361;
})();
var statearr_40362_40372 = state_40353__$1;
(statearr_40362_40372[(2)] = null);

(statearr_40362_40372[(1)] = (2));


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
});})(c__39058__auto__))
;
return ((function (switch__39037__auto__,c__39058__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto____0 = (function (){
var statearr_40363 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40363[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto__);

(statearr_40363[(1)] = (1));

return statearr_40363;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto____1 = (function (state_40353){
while(true){
var ret_value__39039__auto__ = (function (){try{while(true){
var result__39040__auto__ = switch__39037__auto__.call(null,state_40353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39040__auto__;
}
break;
}
}catch (e40364){if((e40364 instanceof Object)){
var ex__39041__auto__ = e40364;
var statearr_40365_40373 = state_40353;
(statearr_40365_40373[(5)] = ex__39041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40374 = state_40353;
state_40353 = G__40374;
continue;
} else {
return ret_value__39039__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto__ = function(state_40353){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto____1.call(this,state_40353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39038__auto__;
})()
;})(switch__39037__auto__,c__39058__auto__))
})();
var state__39060__auto__ = (function (){var statearr_40366 = f__39059__auto__.call(null);
(statearr_40366[(6)] = c__39058__auto__);

return statearr_40366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39060__auto__);
});})(c__39058__auto__))
);

return c__39058__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__40376 = cljs.core.deref.call(null,state_atom);
var map__40376__$1 = ((((!((map__40376 == null)))?((((map__40376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40376):map__40376);
var state = map__40376__$1;
var input_text = cljs.core.get.call(null,map__40376__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__40376__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__40376,map__40376__$1,state,input_text,c_input){
return (function (p1__40375_SHARP_){
var G__40378 = p1__40375_SHARP_;
var G__40378__$1 = cljs.core.assoc.call(null,G__40378,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__40378__$1,new_text);
} else {
return G__40378__$1;
}
});})(map__40376,map__40376__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__40379 = cljs.core._EQ_;
var expr__40380 = event.which;
if(cljs.core.truth_(pred__40379.call(null,goog.events.KeyCodes.UP,expr__40380))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__40379.call(null,goog.events.KeyCodes.DOWN,expr__40380))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__40379.call(null,goog.events.KeyCodes.ENTER,expr__40380))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__40379.call(null,goog.events.KeyCodes.ESC,expr__40380))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__40379.call(null,goog.events.KeyCodes.TAB,expr__40380))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__37486__auto__ = [];
var len__37479__auto___40404 = arguments.length;
var i__37480__auto___40405 = (0);
while(true){
if((i__37480__auto___40405 < len__37479__auto___40404)){
args__37486__auto__.push((arguments[i__37480__auto___40405]));

var G__40406 = (i__37480__auto___40405 + (1));
i__37480__auto___40405 = G__40406;
continue;
} else {
}
break;
}

var argseq__37487__auto__ = ((((0) < args__37486__auto__.length))?(new cljs.core.IndexedSeq(args__37486__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__37487__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__40384){
var map__40385 = p__40384;
var map__40385__$1 = ((((!((map__40385 == null)))?((((map__40385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40385):map__40385);
var args = map__40385__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__40387 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__40387__$1 = ((((!((map__40387 == null)))?((((map__40387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40387):map__40387);
var state = map__40387__$1;
var c_search = cljs.core.get.call(null,map__40387__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__40387__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args){
return (function() { 
var G__40407__delegate = function (p__40389){
var map__40390 = p__40389;
var map__40390__$1 = ((((!((map__40390 == null)))?((((map__40390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40390):map__40390);
var args__$1 = map__40390__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__40390__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__40392 = cljs.core.deref.call(null,state_atom);
var map__40392__$1 = ((((!((map__40392 == null)))?((((map__40392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40392):map__40392);
var state__$1 = map__40392__$1;
var suggestions = cljs.core.get.call(null,map__40392__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__40392__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__40392__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__40392__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__36308__auto__ = width;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__36308__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__37116__auto__ = ((function (map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args){
return (function re_com$typeahead$iter__40394(s__40395){
return (new cljs.core.LazySeq(null,((function (map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args){
return (function (){
var s__40395__$1 = s__40395;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40395__$1);
if(temp__4657__auto__){
var s__40395__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40395__$2)){
var c__37114__auto__ = cljs.core.chunk_first.call(null,s__40395__$2);
var size__37115__auto__ = cljs.core.count.call(null,c__37114__auto__);
var b__40397 = cljs.core.chunk_buffer.call(null,size__37115__auto__);
if((function (){var i__40396 = (0);
while(true){
if((i__40396 < size__37115__auto__)){
var vec__40398 = cljs.core._nth.call(null,c__37114__auto__,i__40396);
var i = cljs.core.nth.call(null,vec__40398,(0),null);
var s = cljs.core.nth.call(null,vec__40398,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__40397,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__40396,selected_QMARK_,vec__40398,i,s,c__37114__auto__,size__37115__auto__,b__40397,s__40395__$2,temp__4657__auto__,map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__40396,selected_QMARK_,vec__40398,i,s,c__37114__auto__,size__37115__auto__,b__40397,s__40395__$2,temp__4657__auto__,map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__40396,selected_QMARK_,vec__40398,i,s,c__37114__auto__,size__37115__auto__,b__40397,s__40395__$2,temp__4657__auto__,map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args){
return (function (p1__40382_SHARP_){
p1__40382_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__40396,selected_QMARK_,vec__40398,i,s,c__37114__auto__,size__37115__auto__,b__40397,s__40395__$2,temp__4657__auto__,map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__40408 = (i__40396 + (1));
i__40396 = G__40408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40397),re_com$typeahead$iter__40394.call(null,cljs.core.chunk_rest.call(null,s__40395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40397),null);
}
} else {
var vec__40401 = cljs.core.first.call(null,s__40395__$2);
var i = cljs.core.nth.call(null,vec__40401,(0),null);
var s = cljs.core.nth.call(null,vec__40401,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__40401,i,s,s__40395__$2,temp__4657__auto__,map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__40401,i,s,s__40395__$2,temp__4657__auto__,map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__40401,i,s,s__40395__$2,temp__4657__auto__,map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args){
return (function (p1__40382_SHARP_){
p1__40382_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__40401,i,s,s__40395__$2,temp__4657__auto__,map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__40394.call(null,cljs.core.rest.call(null,s__40395__$2)));
}
} else {
return null;
}
break;
}
});})(map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args))
,null,null));
});})(map__40392,map__40392__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__40390,map__40390__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args))
;
return iter__37116__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__40407 = function (var_args){
var p__40389 = null;
if (arguments.length > 0) {
var G__40409__i = 0, G__40409__a = new Array(arguments.length -  0);
while (G__40409__i < G__40409__a.length) {G__40409__a[G__40409__i] = arguments[G__40409__i + 0]; ++G__40409__i;}
  p__40389 = new cljs.core.IndexedSeq(G__40409__a,0,null);
} 
return G__40407__delegate.call(this,p__40389);};
G__40407.cljs$lang$maxFixedArity = 0;
G__40407.cljs$lang$applyTo = (function (arglist__40410){
var p__40389 = cljs.core.seq(arglist__40410);
return G__40407__delegate(p__40389);
});
G__40407.cljs$core$IFn$_invoke$arity$variadic = G__40407__delegate;
return G__40407;
})()
;
;})(map__40387,map__40387__$1,state,c_search,c_input,state_atom,input_text_model,map__40385,map__40385__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq40383){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40383));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__39058__auto___40491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39058__auto___40491,out){
return (function (){
var f__39059__auto__ = (function (){var switch__39037__auto__ = ((function (c__39058__auto___40491,out){
return (function (state_40461){
var state_val_40462 = (state_40461[(1)]);
if((state_val_40462 === (7))){
var inst_40416 = (state_40461[(2)]);
var state_40461__$1 = state_40461;
var statearr_40463_40492 = state_40461__$1;
(statearr_40463_40492[(2)] = inst_40416);

(statearr_40463_40492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (1))){
var inst_40411 = null;
var state_40461__$1 = (function (){var statearr_40464 = state_40461;
(statearr_40464[(7)] = inst_40411);

return statearr_40464;
})();
var statearr_40465_40493 = state_40461__$1;
(statearr_40465_40493[(2)] = null);

(statearr_40465_40493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (4))){
var state_40461__$1 = state_40461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40461__$1,(7),in$);
} else {
if((state_val_40462 === (15))){
var inst_40446 = (state_40461[(2)]);
var state_40461__$1 = (function (){var statearr_40466 = state_40461;
(statearr_40466[(8)] = inst_40446);

return statearr_40466;
})();
var statearr_40467_40494 = state_40461__$1;
(statearr_40467_40494[(2)] = null);

(statearr_40467_40494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (13))){
var inst_40434 = (state_40461[(9)]);
var inst_40448 = cljs.core._EQ_.call(null,inst_40434,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_40461__$1 = state_40461;
if(inst_40448){
var statearr_40468_40495 = state_40461__$1;
(statearr_40468_40495[(1)] = (16));

} else {
var statearr_40469_40496 = state_40461__$1;
(statearr_40469_40496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (6))){
var inst_40420 = (state_40461[(10)]);
var inst_40419 = (state_40461[(2)]);
var inst_40420__$1 = cljs.core.async.timeout.call(null,ms);
var inst_40428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40429 = [in$,inst_40420__$1];
var inst_40430 = (new cljs.core.PersistentVector(null,2,(5),inst_40428,inst_40429,null));
var state_40461__$1 = (function (){var statearr_40470 = state_40461;
(statearr_40470[(10)] = inst_40420__$1);

(statearr_40470[(11)] = inst_40419);

return statearr_40470;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40461__$1,(8),inst_40430);
} else {
if((state_val_40462 === (17))){
var state_40461__$1 = state_40461;
var statearr_40471_40497 = state_40461__$1;
(statearr_40471_40497[(2)] = null);

(statearr_40471_40497[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (3))){
var inst_40459 = (state_40461[(2)]);
var state_40461__$1 = state_40461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40461__$1,inst_40459);
} else {
if((state_val_40462 === (12))){
var inst_40419 = (state_40461[(11)]);
var state_40461__$1 = state_40461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40461__$1,(15),out,inst_40419);
} else {
if((state_val_40462 === (2))){
var inst_40411 = (state_40461[(7)]);
var inst_40413 = (inst_40411 == null);
var state_40461__$1 = state_40461;
if(cljs.core.truth_(inst_40413)){
var statearr_40472_40498 = state_40461__$1;
(statearr_40472_40498[(1)] = (4));

} else {
var statearr_40473_40499 = state_40461__$1;
(statearr_40473_40499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (11))){
var inst_40456 = (state_40461[(2)]);
var inst_40411 = inst_40456;
var state_40461__$1 = (function (){var statearr_40474 = state_40461;
(statearr_40474[(7)] = inst_40411);

return statearr_40474;
})();
var statearr_40475_40500 = state_40461__$1;
(statearr_40475_40500[(2)] = null);

(statearr_40475_40500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (9))){
var inst_40432 = (state_40461[(12)]);
var inst_40440 = cljs.core.nth.call(null,inst_40432,(0),null);
var inst_40441 = cljs.core.nth.call(null,inst_40432,(1),null);
var state_40461__$1 = (function (){var statearr_40476 = state_40461;
(statearr_40476[(13)] = inst_40441);

return statearr_40476;
})();
var statearr_40477_40501 = state_40461__$1;
(statearr_40477_40501[(2)] = inst_40440);

(statearr_40477_40501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (5))){
var inst_40411 = (state_40461[(7)]);
var state_40461__$1 = state_40461;
var statearr_40478_40502 = state_40461__$1;
(statearr_40478_40502[(2)] = inst_40411);

(statearr_40478_40502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (14))){
var inst_40454 = (state_40461[(2)]);
var state_40461__$1 = state_40461;
var statearr_40479_40503 = state_40461__$1;
(statearr_40479_40503[(2)] = inst_40454);

(statearr_40479_40503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (16))){
var inst_40433 = (state_40461[(14)]);
var state_40461__$1 = state_40461;
var statearr_40480_40504 = state_40461__$1;
(statearr_40480_40504[(2)] = inst_40433);

(statearr_40480_40504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (10))){
var inst_40434 = (state_40461[(9)]);
var inst_40420 = (state_40461[(10)]);
var inst_40443 = cljs.core._EQ_.call(null,inst_40434,inst_40420);
var state_40461__$1 = state_40461;
if(inst_40443){
var statearr_40481_40505 = state_40461__$1;
(statearr_40481_40505[(1)] = (12));

} else {
var statearr_40482_40506 = state_40461__$1;
(statearr_40482_40506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (18))){
var inst_40452 = (state_40461[(2)]);
var state_40461__$1 = state_40461;
var statearr_40483_40507 = state_40461__$1;
(statearr_40483_40507[(2)] = inst_40452);

(statearr_40483_40507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40462 === (8))){
var inst_40434 = (state_40461[(9)]);
var inst_40432 = (state_40461[(12)]);
var inst_40432__$1 = (state_40461[(2)]);
var inst_40433 = cljs.core.nth.call(null,inst_40432__$1,(0),null);
var inst_40434__$1 = cljs.core.nth.call(null,inst_40432__$1,(1),null);
var inst_40435 = cljs.core._EQ_.call(null,inst_40434__$1,in$);
var state_40461__$1 = (function (){var statearr_40484 = state_40461;
(statearr_40484[(14)] = inst_40433);

(statearr_40484[(9)] = inst_40434__$1);

(statearr_40484[(12)] = inst_40432__$1);

return statearr_40484;
})();
if(inst_40435){
var statearr_40485_40508 = state_40461__$1;
(statearr_40485_40508[(1)] = (9));

} else {
var statearr_40486_40509 = state_40461__$1;
(statearr_40486_40509[(1)] = (10));

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
}
});})(c__39058__auto___40491,out))
;
return ((function (switch__39037__auto__,c__39058__auto___40491,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__39038__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__39038__auto____0 = (function (){
var statearr_40487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40487[(0)] = re_com$typeahead$debounce_$_state_machine__39038__auto__);

(statearr_40487[(1)] = (1));

return statearr_40487;
});
var re_com$typeahead$debounce_$_state_machine__39038__auto____1 = (function (state_40461){
while(true){
var ret_value__39039__auto__ = (function (){try{while(true){
var result__39040__auto__ = switch__39037__auto__.call(null,state_40461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39040__auto__;
}
break;
}
}catch (e40488){if((e40488 instanceof Object)){
var ex__39041__auto__ = e40488;
var statearr_40489_40510 = state_40461;
(statearr_40489_40510[(5)] = ex__39041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40511 = state_40461;
state_40461 = G__40511;
continue;
} else {
return ret_value__39039__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__39038__auto__ = function(state_40461){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__39038__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__39038__auto____1.call(this,state_40461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__39038__auto____0;
re_com$typeahead$debounce_$_state_machine__39038__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__39038__auto____1;
return re_com$typeahead$debounce_$_state_machine__39038__auto__;
})()
;})(switch__39037__auto__,c__39058__auto___40491,out))
})();
var state__39060__auto__ = (function (){var statearr_40490 = f__39059__auto__.call(null);
(statearr_40490[(6)] = c__39058__auto___40491);

return statearr_40490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39060__auto__);
});})(c__39058__auto___40491,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1518491414301
