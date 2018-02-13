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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__27573){
var map__27574 = p__27573;
var map__27574__$1 = ((((!((map__27574 == null)))?((((map__27574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27574):map__27574);
var args = map__27574__$1;
var on_change = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__27574__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__27576 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__7668__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__27576,external_model_value);
} else {
return G__27576;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__27577,event){
var map__27578 = p__27577;
var map__27578__$1 = ((((!((map__27578 == null)))?((((map__27578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27578):map__27578);
var state = map__27578__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__27578__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__27578__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__27580 = event;
var G__27580__$1 = (((G__27580 instanceof cljs.core.Keyword))?G__27580.fqn:null);
switch (G__27580__$1) {
case "input-text-blurred":
var and__7656__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__7656__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__7668__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27580__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__27582,event){
var map__27583 = p__27582;
var map__27583__$1 = ((((!((map__27583 == null)))?((((map__27583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27583):map__27583);
var state = map__27583__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__27583__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__27585 = event;
var G__27585__$1 = (((G__27585 instanceof cljs.core.Keyword))?G__27585.fqn:null);
switch (G__27585__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__27587,new_value){
var map__27588 = p__27587;
var map__27588__$1 = ((((!((map__27588 == null)))?((((map__27588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27588):map__27588);
var state = map__27588__$1;
var on_change = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__27590,suggestion){
var map__27591 = p__27590;
var map__27591__$1 = ((((!((map__27591 == null)))?((((map__27591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27591):map__27591);
var state = map__27591__$1;
var suggestion_to_string = cljs.core.get.call(null,map__27591__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__27593 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__27593,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__27593;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__27594,index){
var map__27595 = p__27594;
var map__27595__$1 = ((((!((map__27595 == null)))?((((map__27595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27595):map__27595);
var state = map__27595__$1;
var suggestions = cljs.core.get.call(null,map__27595__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__27597 = state;
var G__27597__$1 = cljs.core.assoc.call(null,G__27597,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__27597__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__27597__$1,suggestion):G__27597__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__27597__$2,suggestion);
} else {
return G__27597__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__27598,index){
var map__27599 = p__27598;
var map__27599__$1 = ((((!((map__27599 == null)))?((((map__27599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27599):map__27599);
var state = map__27599__$1;
var suggestions = cljs.core.get.call(null,map__27599__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__27601){
var map__27602 = p__27601;
var map__27602__$1 = ((((!((map__27602 == null)))?((((map__27602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27602):map__27602);
var state = map__27602__$1;
var suggestion_active_index = cljs.core.get.call(null,map__27602__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__27604 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__27604,suggestion_active_index);
} else {
return G__27604;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__27605){
var map__27606 = p__27605;
var map__27606__$1 = ((((!((map__27606 == null)))?((((map__27606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27606):map__27606);
var state = map__27606__$1;
var suggestions = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__27606__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__27608 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__27608,re_com.typeahead.wrap.call(null,((function (){var or__7668__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__27608;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__27609){
var map__27610 = p__27609;
var map__27610__$1 = ((((!((map__27610 == null)))?((((map__27610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27610):map__27610);
var state = map__27610__$1;
var suggestions = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__27610__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__27612 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__27612,re_com.typeahead.wrap.call(null,((function (){var or__7668__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__27612;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__27613 = state;
var G__27613__$1 = re_com.typeahead.clear_suggestions.call(null,G__27613)
;
var G__27613__$2 = cljs.core.assoc.call(null,G__27613__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__27613__$2,null);
} else {
return G__27613__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__27614){
var map__27615 = p__27614;
var map__27615__$1 = ((((!((map__27615 == null)))?((((map__27615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27615):map__27615);
var state = map__27615__$1;
var input_text = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__27617 = state;
if(cljs.core.truth_((function (){var and__7656__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__7656__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__7656__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__27617,input_text);
} else {
return G__27617;
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
var temp__4655__auto__ = data_source.call(null,text,(function (p1__27618_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__27618_SHARP_);
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
var c__17552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto__){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto__){
return (function (state_27635){
var state_val_27636 = (state_27635[(1)]);
if((state_val_27636 === (1))){
var state_27635__$1 = state_27635;
var statearr_27637_27649 = state_27635__$1;
(statearr_27637_27649[(2)] = null);

(statearr_27637_27649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (2))){
var state_27635__$1 = state_27635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27635__$1,(4),c_search);
} else {
if((state_val_27636 === (3))){
var inst_27633 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27635__$1,inst_27633);
} else {
if((state_val_27636 === (4))){
var inst_27621 = (state_27635[(7)]);
var inst_27621__$1 = (state_27635[(2)]);
var inst_27622 = cljs.core.deref.call(null,state_atom);
var inst_27623 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_27622);
var inst_27624 = cljs.core._EQ_.call(null,"",inst_27621__$1);
var state_27635__$1 = (function (){var statearr_27638 = state_27635;
(statearr_27638[(8)] = inst_27623);

(statearr_27638[(7)] = inst_27621__$1);

return statearr_27638;
})();
if(inst_27624){
var statearr_27639_27650 = state_27635__$1;
(statearr_27639_27650[(1)] = (5));

} else {
var statearr_27640_27651 = state_27635__$1;
(statearr_27640_27651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (5))){
var inst_27626 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_27635__$1 = state_27635;
var statearr_27641_27652 = state_27635__$1;
(statearr_27641_27652[(2)] = inst_27626);

(statearr_27641_27652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (6))){
var inst_27623 = (state_27635[(8)]);
var inst_27621 = (state_27635[(7)]);
var inst_27628 = re_com.typeahead.search_data_source_BANG_.call(null,inst_27623,state_atom,inst_27621);
var state_27635__$1 = state_27635;
var statearr_27642_27653 = state_27635__$1;
(statearr_27642_27653[(2)] = inst_27628);

(statearr_27642_27653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (7))){
var inst_27630 = (state_27635[(2)]);
var state_27635__$1 = (function (){var statearr_27643 = state_27635;
(statearr_27643[(9)] = inst_27630);

return statearr_27643;
})();
var statearr_27644_27654 = state_27635__$1;
(statearr_27644_27654[(2)] = null);

(statearr_27644_27654[(1)] = (2));


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
});})(c__17552__auto__))
;
return ((function (switch__17464__auto__,c__17552__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto____0 = (function (){
var statearr_27645 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27645[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto__);

(statearr_27645[(1)] = (1));

return statearr_27645;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto____1 = (function (state_27635){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_27635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e27646){if((e27646 instanceof Object)){
var ex__17468__auto__ = e27646;
var statearr_27647_27655 = state_27635;
(statearr_27647_27655[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27656 = state_27635;
state_27635 = G__27656;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto__ = function(state_27635){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto____1.call(this,state_27635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto__))
})();
var state__17554__auto__ = (function (){var statearr_27648 = f__17553__auto__.call(null);
(statearr_27648[(6)] = c__17552__auto__);

return statearr_27648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto__))
);

return c__17552__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__27658 = cljs.core.deref.call(null,state_atom);
var map__27658__$1 = ((((!((map__27658 == null)))?((((map__27658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27658):map__27658);
var state = map__27658__$1;
var input_text = cljs.core.get.call(null,map__27658__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__27658__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__27658,map__27658__$1,state,input_text,c_input){
return (function (p1__27657_SHARP_){
var G__27660 = p1__27657_SHARP_;
var G__27660__$1 = cljs.core.assoc.call(null,G__27660,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__27660__$1,new_text);
} else {
return G__27660__$1;
}
});})(map__27658,map__27658__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__27661 = cljs.core._EQ_;
var expr__27662 = event.which;
if(cljs.core.truth_(pred__27661.call(null,goog.events.KeyCodes.UP,expr__27662))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__27661.call(null,goog.events.KeyCodes.DOWN,expr__27662))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__27661.call(null,goog.events.KeyCodes.ENTER,expr__27662))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__27661.call(null,goog.events.KeyCodes.ESC,expr__27662))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__27661.call(null,goog.events.KeyCodes.TAB,expr__27662))){
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
var args__8846__auto__ = [];
var len__8839__auto___27686 = arguments.length;
var i__8840__auto___27687 = (0);
while(true){
if((i__8840__auto___27687 < len__8839__auto___27686)){
args__8846__auto__.push((arguments[i__8840__auto___27687]));

var G__27688 = (i__8840__auto___27687 + (1));
i__8840__auto___27687 = G__27688;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__27666){
var map__27667 = p__27666;
var map__27667__$1 = ((((!((map__27667 == null)))?((((map__27667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27667):map__27667);
var args = map__27667__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__27669 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__27669__$1 = ((((!((map__27669 == null)))?((((map__27669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27669):map__27669);
var state = map__27669__$1;
var c_search = cljs.core.get.call(null,map__27669__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__27669__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args){
return (function() { 
var G__27689__delegate = function (p__27671){
var map__27672 = p__27671;
var map__27672__$1 = ((((!((map__27672 == null)))?((((map__27672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27672):map__27672);
var args__$1 = map__27672__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__27672__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__27674 = cljs.core.deref.call(null,state_atom);
var map__27674__$1 = ((((!((map__27674 == null)))?((((map__27674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27674):map__27674);
var state__$1 = map__27674__$1;
var suggestions = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__7668__auto__ = width;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
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

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__7668__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__8476__auto__ = ((function (map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args){
return (function re_com$typeahead$iter__27676(s__27677){
return (new cljs.core.LazySeq(null,((function (map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args){
return (function (){
var s__27677__$1 = s__27677;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27677__$1);
if(temp__4657__auto__){
var s__27677__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27677__$2)){
var c__8474__auto__ = cljs.core.chunk_first.call(null,s__27677__$2);
var size__8475__auto__ = cljs.core.count.call(null,c__8474__auto__);
var b__27679 = cljs.core.chunk_buffer.call(null,size__8475__auto__);
if((function (){var i__27678 = (0);
while(true){
if((i__27678 < size__8475__auto__)){
var vec__27680 = cljs.core._nth.call(null,c__8474__auto__,i__27678);
var i = cljs.core.nth.call(null,vec__27680,(0),null);
var s = cljs.core.nth.call(null,vec__27680,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__27679,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__27678,selected_QMARK_,vec__27680,i,s,c__8474__auto__,size__8475__auto__,b__27679,s__27677__$2,temp__4657__auto__,map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__27678,selected_QMARK_,vec__27680,i,s,c__8474__auto__,size__8475__auto__,b__27679,s__27677__$2,temp__4657__auto__,map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__27678,selected_QMARK_,vec__27680,i,s,c__8474__auto__,size__8475__auto__,b__27679,s__27677__$2,temp__4657__auto__,map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args){
return (function (p1__27664_SHARP_){
p1__27664_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__27678,selected_QMARK_,vec__27680,i,s,c__8474__auto__,size__8475__auto__,b__27679,s__27677__$2,temp__4657__auto__,map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__27690 = (i__27678 + (1));
i__27678 = G__27690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27679),re_com$typeahead$iter__27676.call(null,cljs.core.chunk_rest.call(null,s__27677__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27679),null);
}
} else {
var vec__27683 = cljs.core.first.call(null,s__27677__$2);
var i = cljs.core.nth.call(null,vec__27683,(0),null);
var s = cljs.core.nth.call(null,vec__27683,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__27683,i,s,s__27677__$2,temp__4657__auto__,map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__27683,i,s,s__27677__$2,temp__4657__auto__,map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__27683,i,s,s__27677__$2,temp__4657__auto__,map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args){
return (function (p1__27664_SHARP_){
p1__27664_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__27683,i,s,s__27677__$2,temp__4657__auto__,map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__27676.call(null,cljs.core.rest.call(null,s__27677__$2)));
}
} else {
return null;
}
break;
}
});})(map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args))
,null,null));
});})(map__27674,map__27674__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__27672,map__27672__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args))
;
return iter__8476__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__27689 = function (var_args){
var p__27671 = null;
if (arguments.length > 0) {
var G__27691__i = 0, G__27691__a = new Array(arguments.length -  0);
while (G__27691__i < G__27691__a.length) {G__27691__a[G__27691__i] = arguments[G__27691__i + 0]; ++G__27691__i;}
  p__27671 = new cljs.core.IndexedSeq(G__27691__a,0,null);
} 
return G__27689__delegate.call(this,p__27671);};
G__27689.cljs$lang$maxFixedArity = 0;
G__27689.cljs$lang$applyTo = (function (arglist__27692){
var p__27671 = cljs.core.seq(arglist__27692);
return G__27689__delegate(p__27671);
});
G__27689.cljs$core$IFn$_invoke$arity$variadic = G__27689__delegate;
return G__27689;
})()
;
;})(map__27669,map__27669__$1,state,c_search,c_input,state_atom,input_text_model,map__27667,map__27667__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq27665){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27665));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__17552__auto___27773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17552__auto___27773,out){
return (function (){
var f__17553__auto__ = (function (){var switch__17464__auto__ = ((function (c__17552__auto___27773,out){
return (function (state_27743){
var state_val_27744 = (state_27743[(1)]);
if((state_val_27744 === (7))){
var inst_27698 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27745_27774 = state_27743__$1;
(statearr_27745_27774[(2)] = inst_27698);

(statearr_27745_27774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (1))){
var inst_27693 = null;
var state_27743__$1 = (function (){var statearr_27746 = state_27743;
(statearr_27746[(7)] = inst_27693);

return statearr_27746;
})();
var statearr_27747_27775 = state_27743__$1;
(statearr_27747_27775[(2)] = null);

(statearr_27747_27775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (4))){
var state_27743__$1 = state_27743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27743__$1,(7),in$);
} else {
if((state_val_27744 === (15))){
var inst_27728 = (state_27743[(2)]);
var state_27743__$1 = (function (){var statearr_27748 = state_27743;
(statearr_27748[(8)] = inst_27728);

return statearr_27748;
})();
var statearr_27749_27776 = state_27743__$1;
(statearr_27749_27776[(2)] = null);

(statearr_27749_27776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (13))){
var inst_27716 = (state_27743[(9)]);
var inst_27730 = cljs.core._EQ_.call(null,inst_27716,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_27743__$1 = state_27743;
if(inst_27730){
var statearr_27750_27777 = state_27743__$1;
(statearr_27750_27777[(1)] = (16));

} else {
var statearr_27751_27778 = state_27743__$1;
(statearr_27751_27778[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (6))){
var inst_27702 = (state_27743[(10)]);
var inst_27701 = (state_27743[(2)]);
var inst_27702__$1 = cljs.core.async.timeout.call(null,ms);
var inst_27710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27711 = [in$,inst_27702__$1];
var inst_27712 = (new cljs.core.PersistentVector(null,2,(5),inst_27710,inst_27711,null));
var state_27743__$1 = (function (){var statearr_27752 = state_27743;
(statearr_27752[(11)] = inst_27701);

(statearr_27752[(10)] = inst_27702__$1);

return statearr_27752;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27743__$1,(8),inst_27712);
} else {
if((state_val_27744 === (17))){
var state_27743__$1 = state_27743;
var statearr_27753_27779 = state_27743__$1;
(statearr_27753_27779[(2)] = null);

(statearr_27753_27779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (3))){
var inst_27741 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27743__$1,inst_27741);
} else {
if((state_val_27744 === (12))){
var inst_27701 = (state_27743[(11)]);
var state_27743__$1 = state_27743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27743__$1,(15),out,inst_27701);
} else {
if((state_val_27744 === (2))){
var inst_27693 = (state_27743[(7)]);
var inst_27695 = (inst_27693 == null);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27695)){
var statearr_27754_27780 = state_27743__$1;
(statearr_27754_27780[(1)] = (4));

} else {
var statearr_27755_27781 = state_27743__$1;
(statearr_27755_27781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (11))){
var inst_27738 = (state_27743[(2)]);
var inst_27693 = inst_27738;
var state_27743__$1 = (function (){var statearr_27756 = state_27743;
(statearr_27756[(7)] = inst_27693);

return statearr_27756;
})();
var statearr_27757_27782 = state_27743__$1;
(statearr_27757_27782[(2)] = null);

(statearr_27757_27782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (9))){
var inst_27714 = (state_27743[(12)]);
var inst_27722 = cljs.core.nth.call(null,inst_27714,(0),null);
var inst_27723 = cljs.core.nth.call(null,inst_27714,(1),null);
var state_27743__$1 = (function (){var statearr_27758 = state_27743;
(statearr_27758[(13)] = inst_27723);

return statearr_27758;
})();
var statearr_27759_27783 = state_27743__$1;
(statearr_27759_27783[(2)] = inst_27722);

(statearr_27759_27783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (5))){
var inst_27693 = (state_27743[(7)]);
var state_27743__$1 = state_27743;
var statearr_27760_27784 = state_27743__$1;
(statearr_27760_27784[(2)] = inst_27693);

(statearr_27760_27784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (14))){
var inst_27736 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27761_27785 = state_27743__$1;
(statearr_27761_27785[(2)] = inst_27736);

(statearr_27761_27785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (16))){
var inst_27715 = (state_27743[(14)]);
var state_27743__$1 = state_27743;
var statearr_27762_27786 = state_27743__$1;
(statearr_27762_27786[(2)] = inst_27715);

(statearr_27762_27786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (10))){
var inst_27702 = (state_27743[(10)]);
var inst_27716 = (state_27743[(9)]);
var inst_27725 = cljs.core._EQ_.call(null,inst_27716,inst_27702);
var state_27743__$1 = state_27743;
if(inst_27725){
var statearr_27763_27787 = state_27743__$1;
(statearr_27763_27787[(1)] = (12));

} else {
var statearr_27764_27788 = state_27743__$1;
(statearr_27764_27788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (18))){
var inst_27734 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27765_27789 = state_27743__$1;
(statearr_27765_27789[(2)] = inst_27734);

(statearr_27765_27789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (8))){
var inst_27714 = (state_27743[(12)]);
var inst_27716 = (state_27743[(9)]);
var inst_27714__$1 = (state_27743[(2)]);
var inst_27715 = cljs.core.nth.call(null,inst_27714__$1,(0),null);
var inst_27716__$1 = cljs.core.nth.call(null,inst_27714__$1,(1),null);
var inst_27717 = cljs.core._EQ_.call(null,inst_27716__$1,in$);
var state_27743__$1 = (function (){var statearr_27766 = state_27743;
(statearr_27766[(12)] = inst_27714__$1);

(statearr_27766[(9)] = inst_27716__$1);

(statearr_27766[(14)] = inst_27715);

return statearr_27766;
})();
if(inst_27717){
var statearr_27767_27790 = state_27743__$1;
(statearr_27767_27790[(1)] = (9));

} else {
var statearr_27768_27791 = state_27743__$1;
(statearr_27768_27791[(1)] = (10));

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
});})(c__17552__auto___27773,out))
;
return ((function (switch__17464__auto__,c__17552__auto___27773,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__17465__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__17465__auto____0 = (function (){
var statearr_27769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27769[(0)] = re_com$typeahead$debounce_$_state_machine__17465__auto__);

(statearr_27769[(1)] = (1));

return statearr_27769;
});
var re_com$typeahead$debounce_$_state_machine__17465__auto____1 = (function (state_27743){
while(true){
var ret_value__17466__auto__ = (function (){try{while(true){
var result__17467__auto__ = switch__17464__auto__.call(null,state_27743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17467__auto__;
}
break;
}
}catch (e27770){if((e27770 instanceof Object)){
var ex__17468__auto__ = e27770;
var statearr_27771_27792 = state_27743;
(statearr_27771_27792[(5)] = ex__17468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27793 = state_27743;
state_27743 = G__27793;
continue;
} else {
return ret_value__17466__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__17465__auto__ = function(state_27743){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__17465__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__17465__auto____1.call(this,state_27743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__17465__auto____0;
re_com$typeahead$debounce_$_state_machine__17465__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__17465__auto____1;
return re_com$typeahead$debounce_$_state_machine__17465__auto__;
})()
;})(switch__17464__auto__,c__17552__auto___27773,out))
})();
var state__17554__auto__ = (function (){var statearr_27772 = f__17553__auto__.call(null);
(statearr_27772[(6)] = c__17552__auto___27773);

return statearr_27772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17554__auto__);
});})(c__17552__auto___27773,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1518565233016
