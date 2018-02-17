// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__36308__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__36308__auto__){
return or__36308__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__36308__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
var or__36308__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__36308__auto____$1)){
return or__36308__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40601_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40601_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40602 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40603 = null;
var count__40604 = (0);
var i__40605 = (0);
while(true){
if((i__40605 < count__40604)){
var n = cljs.core._nth.call(null,chunk__40603,i__40605);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40606 = seq__40602;
var G__40607 = chunk__40603;
var G__40608 = count__40604;
var G__40609 = (i__40605 + (1));
seq__40602 = G__40606;
chunk__40603 = G__40607;
count__40604 = G__40608;
i__40605 = G__40609;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40602);
if(temp__4657__auto__){
var seq__40602__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40602__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__40602__$1);
var G__40610 = cljs.core.chunk_rest.call(null,seq__40602__$1);
var G__40611 = c__37147__auto__;
var G__40612 = cljs.core.count.call(null,c__37147__auto__);
var G__40613 = (0);
seq__40602 = G__40610;
chunk__40603 = G__40611;
count__40604 = G__40612;
i__40605 = G__40613;
continue;
} else {
var n = cljs.core.first.call(null,seq__40602__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40614 = cljs.core.next.call(null,seq__40602__$1);
var G__40615 = null;
var G__40616 = (0);
var G__40617 = (0);
seq__40602 = G__40614;
chunk__40603 = G__40615;
count__40604 = G__40616;
i__40605 = G__40617;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__40618){
var vec__40619 = p__40618;
var _ = cljs.core.nth.call(null,vec__40619,(0),null);
var v = cljs.core.nth.call(null,vec__40619,(1),null);
var and__36296__auto__ = v;
if(cljs.core.truth_(and__36296__auto__)){
return v.call(null,dep);
} else {
return and__36296__auto__;
}
}),cljs.core.filter.call(null,(function (p__40622){
var vec__40623 = p__40622;
var k = cljs.core.nth.call(null,vec__40623,(0),null);
var v = cljs.core.nth.call(null,vec__40623,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40635_40643 = cljs.core.seq.call(null,deps);
var chunk__40636_40644 = null;
var count__40637_40645 = (0);
var i__40638_40646 = (0);
while(true){
if((i__40638_40646 < count__40637_40645)){
var dep_40647 = cljs.core._nth.call(null,chunk__40636_40644,i__40638_40646);
if(cljs.core.truth_((function (){var and__36296__auto__ = dep_40647;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40647));
} else {
return and__36296__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40647,(depth + (1)),state);
} else {
}

var G__40648 = seq__40635_40643;
var G__40649 = chunk__40636_40644;
var G__40650 = count__40637_40645;
var G__40651 = (i__40638_40646 + (1));
seq__40635_40643 = G__40648;
chunk__40636_40644 = G__40649;
count__40637_40645 = G__40650;
i__40638_40646 = G__40651;
continue;
} else {
var temp__4657__auto___40652 = cljs.core.seq.call(null,seq__40635_40643);
if(temp__4657__auto___40652){
var seq__40635_40653__$1 = temp__4657__auto___40652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40635_40653__$1)){
var c__37147__auto___40654 = cljs.core.chunk_first.call(null,seq__40635_40653__$1);
var G__40655 = cljs.core.chunk_rest.call(null,seq__40635_40653__$1);
var G__40656 = c__37147__auto___40654;
var G__40657 = cljs.core.count.call(null,c__37147__auto___40654);
var G__40658 = (0);
seq__40635_40643 = G__40655;
chunk__40636_40644 = G__40656;
count__40637_40645 = G__40657;
i__40638_40646 = G__40658;
continue;
} else {
var dep_40659 = cljs.core.first.call(null,seq__40635_40653__$1);
if(cljs.core.truth_((function (){var and__36296__auto__ = dep_40659;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40659));
} else {
return and__36296__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40659,(depth + (1)),state);
} else {
}

var G__40660 = cljs.core.next.call(null,seq__40635_40653__$1);
var G__40661 = null;
var G__40662 = (0);
var G__40663 = (0);
seq__40635_40643 = G__40660;
chunk__40636_40644 = G__40661;
count__40637_40645 = G__40662;
i__40638_40646 = G__40663;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40639){
var vec__40640 = p__40639;
var seq__40641 = cljs.core.seq.call(null,vec__40640);
var first__40642 = cljs.core.first.call(null,seq__40641);
var seq__40641__$1 = cljs.core.next.call(null,seq__40641);
var x = first__40642;
var xs = seq__40641__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40640,seq__40641,first__40642,seq__40641__$1,x,xs,get_deps__$1){
return (function (p1__40626_SHARP_){
return clojure.set.difference.call(null,p1__40626_SHARP_,x);
});})(vec__40640,seq__40641,first__40642,seq__40641__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40664 = cljs.core.seq.call(null,provides);
var chunk__40665 = null;
var count__40666 = (0);
var i__40667 = (0);
while(true){
if((i__40667 < count__40666)){
var prov = cljs.core._nth.call(null,chunk__40665,i__40667);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40668_40676 = cljs.core.seq.call(null,requires);
var chunk__40669_40677 = null;
var count__40670_40678 = (0);
var i__40671_40679 = (0);
while(true){
if((i__40671_40679 < count__40670_40678)){
var req_40680 = cljs.core._nth.call(null,chunk__40669_40677,i__40671_40679);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40680,prov);

var G__40681 = seq__40668_40676;
var G__40682 = chunk__40669_40677;
var G__40683 = count__40670_40678;
var G__40684 = (i__40671_40679 + (1));
seq__40668_40676 = G__40681;
chunk__40669_40677 = G__40682;
count__40670_40678 = G__40683;
i__40671_40679 = G__40684;
continue;
} else {
var temp__4657__auto___40685 = cljs.core.seq.call(null,seq__40668_40676);
if(temp__4657__auto___40685){
var seq__40668_40686__$1 = temp__4657__auto___40685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40668_40686__$1)){
var c__37147__auto___40687 = cljs.core.chunk_first.call(null,seq__40668_40686__$1);
var G__40688 = cljs.core.chunk_rest.call(null,seq__40668_40686__$1);
var G__40689 = c__37147__auto___40687;
var G__40690 = cljs.core.count.call(null,c__37147__auto___40687);
var G__40691 = (0);
seq__40668_40676 = G__40688;
chunk__40669_40677 = G__40689;
count__40670_40678 = G__40690;
i__40671_40679 = G__40691;
continue;
} else {
var req_40692 = cljs.core.first.call(null,seq__40668_40686__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40692,prov);

var G__40693 = cljs.core.next.call(null,seq__40668_40686__$1);
var G__40694 = null;
var G__40695 = (0);
var G__40696 = (0);
seq__40668_40676 = G__40693;
chunk__40669_40677 = G__40694;
count__40670_40678 = G__40695;
i__40671_40679 = G__40696;
continue;
}
} else {
}
}
break;
}

var G__40697 = seq__40664;
var G__40698 = chunk__40665;
var G__40699 = count__40666;
var G__40700 = (i__40667 + (1));
seq__40664 = G__40697;
chunk__40665 = G__40698;
count__40666 = G__40699;
i__40667 = G__40700;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40664);
if(temp__4657__auto__){
var seq__40664__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40664__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__40664__$1);
var G__40701 = cljs.core.chunk_rest.call(null,seq__40664__$1);
var G__40702 = c__37147__auto__;
var G__40703 = cljs.core.count.call(null,c__37147__auto__);
var G__40704 = (0);
seq__40664 = G__40701;
chunk__40665 = G__40702;
count__40666 = G__40703;
i__40667 = G__40704;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40664__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40672_40705 = cljs.core.seq.call(null,requires);
var chunk__40673_40706 = null;
var count__40674_40707 = (0);
var i__40675_40708 = (0);
while(true){
if((i__40675_40708 < count__40674_40707)){
var req_40709 = cljs.core._nth.call(null,chunk__40673_40706,i__40675_40708);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40709,prov);

var G__40710 = seq__40672_40705;
var G__40711 = chunk__40673_40706;
var G__40712 = count__40674_40707;
var G__40713 = (i__40675_40708 + (1));
seq__40672_40705 = G__40710;
chunk__40673_40706 = G__40711;
count__40674_40707 = G__40712;
i__40675_40708 = G__40713;
continue;
} else {
var temp__4657__auto___40714__$1 = cljs.core.seq.call(null,seq__40672_40705);
if(temp__4657__auto___40714__$1){
var seq__40672_40715__$1 = temp__4657__auto___40714__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40672_40715__$1)){
var c__37147__auto___40716 = cljs.core.chunk_first.call(null,seq__40672_40715__$1);
var G__40717 = cljs.core.chunk_rest.call(null,seq__40672_40715__$1);
var G__40718 = c__37147__auto___40716;
var G__40719 = cljs.core.count.call(null,c__37147__auto___40716);
var G__40720 = (0);
seq__40672_40705 = G__40717;
chunk__40673_40706 = G__40718;
count__40674_40707 = G__40719;
i__40675_40708 = G__40720;
continue;
} else {
var req_40721 = cljs.core.first.call(null,seq__40672_40715__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40721,prov);

var G__40722 = cljs.core.next.call(null,seq__40672_40715__$1);
var G__40723 = null;
var G__40724 = (0);
var G__40725 = (0);
seq__40672_40705 = G__40722;
chunk__40673_40706 = G__40723;
count__40674_40707 = G__40724;
i__40675_40708 = G__40725;
continue;
}
} else {
}
}
break;
}

var G__40726 = cljs.core.next.call(null,seq__40664__$1);
var G__40727 = null;
var G__40728 = (0);
var G__40729 = (0);
seq__40664 = G__40726;
chunk__40665 = G__40727;
count__40666 = G__40728;
i__40667 = G__40729;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40730_40734 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40731_40735 = null;
var count__40732_40736 = (0);
var i__40733_40737 = (0);
while(true){
if((i__40733_40737 < count__40732_40736)){
var ns_40738 = cljs.core._nth.call(null,chunk__40731_40735,i__40733_40737);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40738);

var G__40739 = seq__40730_40734;
var G__40740 = chunk__40731_40735;
var G__40741 = count__40732_40736;
var G__40742 = (i__40733_40737 + (1));
seq__40730_40734 = G__40739;
chunk__40731_40735 = G__40740;
count__40732_40736 = G__40741;
i__40733_40737 = G__40742;
continue;
} else {
var temp__4657__auto___40743 = cljs.core.seq.call(null,seq__40730_40734);
if(temp__4657__auto___40743){
var seq__40730_40744__$1 = temp__4657__auto___40743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40730_40744__$1)){
var c__37147__auto___40745 = cljs.core.chunk_first.call(null,seq__40730_40744__$1);
var G__40746 = cljs.core.chunk_rest.call(null,seq__40730_40744__$1);
var G__40747 = c__37147__auto___40745;
var G__40748 = cljs.core.count.call(null,c__37147__auto___40745);
var G__40749 = (0);
seq__40730_40734 = G__40746;
chunk__40731_40735 = G__40747;
count__40732_40736 = G__40748;
i__40733_40737 = G__40749;
continue;
} else {
var ns_40750 = cljs.core.first.call(null,seq__40730_40744__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40750);

var G__40751 = cljs.core.next.call(null,seq__40730_40744__$1);
var G__40752 = null;
var G__40753 = (0);
var G__40754 = (0);
seq__40730_40734 = G__40751;
chunk__40731_40735 = G__40752;
count__40732_40736 = G__40753;
i__40733_40737 = G__40754;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__36308__auto__ = goog.require__;
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40755__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40756__i = 0, G__40756__a = new Array(arguments.length -  0);
while (G__40756__i < G__40756__a.length) {G__40756__a[G__40756__i] = arguments[G__40756__i + 0]; ++G__40756__i;}
  args = new cljs.core.IndexedSeq(G__40756__a,0,null);
} 
return G__40755__delegate.call(this,args);};
G__40755.cljs$lang$maxFixedArity = 0;
G__40755.cljs$lang$applyTo = (function (arglist__40757){
var args = cljs.core.seq(arglist__40757);
return G__40755__delegate(args);
});
G__40755.cljs$core$IFn$_invoke$arity$variadic = G__40755__delegate;
return G__40755;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__40758_SHARP_,p2__40759_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40758_SHARP_)].join('')),p2__40759_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__40760_SHARP_,p2__40761_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40760_SHARP_)].join(''),p2__40761_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__40762 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__40762.addCallback(((function (G__40762){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__40762))
);

G__40762.addErrback(((function (G__40762){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__40762))
);

return G__40762;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40763){if((e40763 instanceof Error)){
var e = e40763;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40763;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40764){if((e40764 instanceof Error)){
var e = e40764;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40764;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40765 = cljs.core._EQ_;
var expr__40766 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40765.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40766))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__40765.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40766))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__40765.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40766))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__40765,expr__40766){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40765,expr__40766))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40768,callback){
var map__40769 = p__40768;
var map__40769__$1 = ((((!((map__40769 == null)))?((((map__40769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40769):map__40769);
var file_msg = map__40769__$1;
var request_url = cljs.core.get.call(null,map__40769__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__36308__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__40769,map__40769__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40769,map__40769__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__39684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto__){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto__){
return (function (state_40809){
var state_val_40810 = (state_40809[(1)]);
if((state_val_40810 === (7))){
var inst_40805 = (state_40809[(2)]);
var state_40809__$1 = state_40809;
var statearr_40811_40838 = state_40809__$1;
(statearr_40811_40838[(2)] = inst_40805);

(statearr_40811_40838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (1))){
var state_40809__$1 = state_40809;
var statearr_40812_40839 = state_40809__$1;
(statearr_40812_40839[(2)] = null);

(statearr_40812_40839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (4))){
var inst_40773 = (state_40809[(7)]);
var inst_40773__$1 = (state_40809[(2)]);
var state_40809__$1 = (function (){var statearr_40813 = state_40809;
(statearr_40813[(7)] = inst_40773__$1);

return statearr_40813;
})();
if(cljs.core.truth_(inst_40773__$1)){
var statearr_40814_40840 = state_40809__$1;
(statearr_40814_40840[(1)] = (5));

} else {
var statearr_40815_40841 = state_40809__$1;
(statearr_40815_40841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (15))){
var inst_40790 = (state_40809[(8)]);
var inst_40787 = (state_40809[(9)]);
var inst_40792 = inst_40790.call(null,inst_40787);
var state_40809__$1 = state_40809;
var statearr_40816_40842 = state_40809__$1;
(statearr_40816_40842[(2)] = inst_40792);

(statearr_40816_40842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (13))){
var inst_40799 = (state_40809[(2)]);
var state_40809__$1 = state_40809;
var statearr_40817_40843 = state_40809__$1;
(statearr_40817_40843[(2)] = inst_40799);

(statearr_40817_40843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (6))){
var state_40809__$1 = state_40809;
var statearr_40818_40844 = state_40809__$1;
(statearr_40818_40844[(2)] = null);

(statearr_40818_40844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (17))){
var inst_40796 = (state_40809[(2)]);
var state_40809__$1 = state_40809;
var statearr_40819_40845 = state_40809__$1;
(statearr_40819_40845[(2)] = inst_40796);

(statearr_40819_40845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (3))){
var inst_40807 = (state_40809[(2)]);
var state_40809__$1 = state_40809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40809__$1,inst_40807);
} else {
if((state_val_40810 === (12))){
var state_40809__$1 = state_40809;
var statearr_40820_40846 = state_40809__$1;
(statearr_40820_40846[(2)] = null);

(statearr_40820_40846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (2))){
var state_40809__$1 = state_40809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40809__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40810 === (11))){
var inst_40778 = (state_40809[(10)]);
var inst_40785 = figwheel.client.file_reloading.blocking_load.call(null,inst_40778);
var state_40809__$1 = state_40809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40809__$1,(14),inst_40785);
} else {
if((state_val_40810 === (9))){
var inst_40778 = (state_40809[(10)]);
var state_40809__$1 = state_40809;
if(cljs.core.truth_(inst_40778)){
var statearr_40821_40847 = state_40809__$1;
(statearr_40821_40847[(1)] = (11));

} else {
var statearr_40822_40848 = state_40809__$1;
(statearr_40822_40848[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (5))){
var inst_40773 = (state_40809[(7)]);
var inst_40779 = (state_40809[(11)]);
var inst_40778 = cljs.core.nth.call(null,inst_40773,(0),null);
var inst_40779__$1 = cljs.core.nth.call(null,inst_40773,(1),null);
var state_40809__$1 = (function (){var statearr_40823 = state_40809;
(statearr_40823[(10)] = inst_40778);

(statearr_40823[(11)] = inst_40779__$1);

return statearr_40823;
})();
if(cljs.core.truth_(inst_40779__$1)){
var statearr_40824_40849 = state_40809__$1;
(statearr_40824_40849[(1)] = (8));

} else {
var statearr_40825_40850 = state_40809__$1;
(statearr_40825_40850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (14))){
var inst_40790 = (state_40809[(8)]);
var inst_40778 = (state_40809[(10)]);
var inst_40787 = (state_40809[(2)]);
var inst_40788 = console.log("Loading!",inst_40778);
var inst_40789 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40790__$1 = cljs.core.get.call(null,inst_40789,inst_40778);
var state_40809__$1 = (function (){var statearr_40826 = state_40809;
(statearr_40826[(12)] = inst_40788);

(statearr_40826[(8)] = inst_40790__$1);

(statearr_40826[(9)] = inst_40787);

return statearr_40826;
})();
if(cljs.core.truth_(inst_40790__$1)){
var statearr_40827_40851 = state_40809__$1;
(statearr_40827_40851[(1)] = (15));

} else {
var statearr_40828_40852 = state_40809__$1;
(statearr_40828_40852[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (16))){
var inst_40787 = (state_40809[(9)]);
var inst_40794 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40787);
var state_40809__$1 = state_40809;
var statearr_40829_40853 = state_40809__$1;
(statearr_40829_40853[(2)] = inst_40794);

(statearr_40829_40853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (10))){
var inst_40801 = (state_40809[(2)]);
var state_40809__$1 = (function (){var statearr_40830 = state_40809;
(statearr_40830[(13)] = inst_40801);

return statearr_40830;
})();
var statearr_40831_40854 = state_40809__$1;
(statearr_40831_40854[(2)] = null);

(statearr_40831_40854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40810 === (8))){
var inst_40779 = (state_40809[(11)]);
var inst_40781 = console.log("Evaling!",inst_40779);
var inst_40782 = eval(inst_40779);
var state_40809__$1 = (function (){var statearr_40832 = state_40809;
(statearr_40832[(14)] = inst_40781);

return statearr_40832;
})();
var statearr_40833_40855 = state_40809__$1;
(statearr_40833_40855[(2)] = inst_40782);

(statearr_40833_40855[(1)] = (10));


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
});})(c__39684__auto__))
;
return ((function (switch__39663__auto__,c__39684__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39664__auto__ = null;
var figwheel$client$file_reloading$state_machine__39664__auto____0 = (function (){
var statearr_40834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40834[(0)] = figwheel$client$file_reloading$state_machine__39664__auto__);

(statearr_40834[(1)] = (1));

return statearr_40834;
});
var figwheel$client$file_reloading$state_machine__39664__auto____1 = (function (state_40809){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_40809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e40835){if((e40835 instanceof Object)){
var ex__39667__auto__ = e40835;
var statearr_40836_40856 = state_40809;
(statearr_40836_40856[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40857 = state_40809;
state_40809 = G__40857;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39664__auto__ = function(state_40809){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39664__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39664__auto____1.call(this,state_40809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39664__auto____0;
figwheel$client$file_reloading$state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39664__auto____1;
return figwheel$client$file_reloading$state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto__))
})();
var state__39686__auto__ = (function (){var statearr_40837 = f__39685__auto__.call(null);
(statearr_40837[(6)] = c__39684__auto__);

return statearr_40837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto__))
);

return c__39684__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__40859 = arguments.length;
switch (G__40859) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40861,callback){
var map__40862 = p__40861;
var map__40862__$1 = ((((!((map__40862 == null)))?((((map__40862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40862):map__40862);
var file_msg = map__40862__$1;
var namespace = cljs.core.get.call(null,map__40862__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40862,map__40862__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40862,map__40862__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40864){
var map__40865 = p__40864;
var map__40865__$1 = ((((!((map__40865 == null)))?((((map__40865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40865):map__40865);
var file_msg = map__40865__$1;
var namespace = cljs.core.get.call(null,map__40865__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40867){
var map__40868 = p__40867;
var map__40868__$1 = ((((!((map__40868 == null)))?((((map__40868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40868):map__40868);
var file_msg = map__40868__$1;
var namespace = cljs.core.get.call(null,map__40868__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__36296__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__36296__auto__){
var or__36308__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
var or__36308__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__36308__auto____$1)){
return or__36308__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__36296__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40870,callback){
var map__40871 = p__40870;
var map__40871__$1 = ((((!((map__40871 == null)))?((((map__40871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40871):map__40871);
var file_msg = map__40871__$1;
var request_url = cljs.core.get.call(null,map__40871__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40871__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__39684__auto___40921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto___40921,out){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto___40921,out){
return (function (state_40906){
var state_val_40907 = (state_40906[(1)]);
if((state_val_40907 === (1))){
var inst_40880 = cljs.core.seq.call(null,files);
var inst_40881 = cljs.core.first.call(null,inst_40880);
var inst_40882 = cljs.core.next.call(null,inst_40880);
var inst_40883 = files;
var state_40906__$1 = (function (){var statearr_40908 = state_40906;
(statearr_40908[(7)] = inst_40882);

(statearr_40908[(8)] = inst_40881);

(statearr_40908[(9)] = inst_40883);

return statearr_40908;
})();
var statearr_40909_40922 = state_40906__$1;
(statearr_40909_40922[(2)] = null);

(statearr_40909_40922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40907 === (2))){
var inst_40883 = (state_40906[(9)]);
var inst_40889 = (state_40906[(10)]);
var inst_40888 = cljs.core.seq.call(null,inst_40883);
var inst_40889__$1 = cljs.core.first.call(null,inst_40888);
var inst_40890 = cljs.core.next.call(null,inst_40888);
var inst_40891 = (inst_40889__$1 == null);
var inst_40892 = cljs.core.not.call(null,inst_40891);
var state_40906__$1 = (function (){var statearr_40910 = state_40906;
(statearr_40910[(11)] = inst_40890);

(statearr_40910[(10)] = inst_40889__$1);

return statearr_40910;
})();
if(inst_40892){
var statearr_40911_40923 = state_40906__$1;
(statearr_40911_40923[(1)] = (4));

} else {
var statearr_40912_40924 = state_40906__$1;
(statearr_40912_40924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40907 === (3))){
var inst_40904 = (state_40906[(2)]);
var state_40906__$1 = state_40906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40906__$1,inst_40904);
} else {
if((state_val_40907 === (4))){
var inst_40889 = (state_40906[(10)]);
var inst_40894 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40889);
var state_40906__$1 = state_40906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40906__$1,(7),inst_40894);
} else {
if((state_val_40907 === (5))){
var inst_40900 = cljs.core.async.close_BANG_.call(null,out);
var state_40906__$1 = state_40906;
var statearr_40913_40925 = state_40906__$1;
(statearr_40913_40925[(2)] = inst_40900);

(statearr_40913_40925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40907 === (6))){
var inst_40902 = (state_40906[(2)]);
var state_40906__$1 = state_40906;
var statearr_40914_40926 = state_40906__$1;
(statearr_40914_40926[(2)] = inst_40902);

(statearr_40914_40926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40907 === (7))){
var inst_40890 = (state_40906[(11)]);
var inst_40896 = (state_40906[(2)]);
var inst_40897 = cljs.core.async.put_BANG_.call(null,out,inst_40896);
var inst_40883 = inst_40890;
var state_40906__$1 = (function (){var statearr_40915 = state_40906;
(statearr_40915[(12)] = inst_40897);

(statearr_40915[(9)] = inst_40883);

return statearr_40915;
})();
var statearr_40916_40927 = state_40906__$1;
(statearr_40916_40927[(2)] = null);

(statearr_40916_40927[(1)] = (2));


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
});})(c__39684__auto___40921,out))
;
return ((function (switch__39663__auto__,c__39684__auto___40921,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto____0 = (function (){
var statearr_40917 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40917[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto__);

(statearr_40917[(1)] = (1));

return statearr_40917;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto____1 = (function (state_40906){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_40906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e40918){if((e40918 instanceof Object)){
var ex__39667__auto__ = e40918;
var statearr_40919_40928 = state_40906;
(statearr_40919_40928[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40929 = state_40906;
state_40906 = G__40929;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto__ = function(state_40906){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto____1.call(this,state_40906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto___40921,out))
})();
var state__39686__auto__ = (function (){var statearr_40920 = f__39685__auto__.call(null);
(statearr_40920[(6)] = c__39684__auto___40921);

return statearr_40920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto___40921,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40930,opts){
var map__40931 = p__40930;
var map__40931__$1 = ((((!((map__40931 == null)))?((((map__40931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40931):map__40931);
var eval_body = cljs.core.get.call(null,map__40931__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40931__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__36296__auto__ = eval_body;
if(cljs.core.truth_(and__36296__auto__)){
return typeof eval_body === 'string';
} else {
return and__36296__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40933){var e = e40933;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40934_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40934_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40935){
var vec__40936 = p__40935;
var k = cljs.core.nth.call(null,vec__40936,(0),null);
var v = cljs.core.nth.call(null,vec__40936,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40939){
var vec__40940 = p__40939;
var k = cljs.core.nth.call(null,vec__40940,(0),null);
var v = cljs.core.nth.call(null,vec__40940,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40946,p__40947){
var map__40948 = p__40946;
var map__40948__$1 = ((((!((map__40948 == null)))?((((map__40948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40948):map__40948);
var opts = map__40948__$1;
var before_jsload = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40949 = p__40947;
var map__40949__$1 = ((((!((map__40949 == null)))?((((map__40949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40949):map__40949);
var msg = map__40949__$1;
var files = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40949__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39684__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39685__auto__ = (function (){var switch__39663__auto__ = ((function (c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41103){
var state_val_41104 = (state_41103[(1)]);
if((state_val_41104 === (7))){
var inst_40965 = (state_41103[(7)]);
var inst_40964 = (state_41103[(8)]);
var inst_40963 = (state_41103[(9)]);
var inst_40966 = (state_41103[(10)]);
var inst_40971 = cljs.core._nth.call(null,inst_40964,inst_40966);
var inst_40972 = figwheel.client.file_reloading.eval_body.call(null,inst_40971,opts);
var inst_40973 = (inst_40966 + (1));
var tmp41105 = inst_40965;
var tmp41106 = inst_40964;
var tmp41107 = inst_40963;
var inst_40963__$1 = tmp41107;
var inst_40964__$1 = tmp41106;
var inst_40965__$1 = tmp41105;
var inst_40966__$1 = inst_40973;
var state_41103__$1 = (function (){var statearr_41108 = state_41103;
(statearr_41108[(7)] = inst_40965__$1);

(statearr_41108[(8)] = inst_40964__$1);

(statearr_41108[(11)] = inst_40972);

(statearr_41108[(9)] = inst_40963__$1);

(statearr_41108[(10)] = inst_40966__$1);

return statearr_41108;
})();
var statearr_41109_41192 = state_41103__$1;
(statearr_41109_41192[(2)] = null);

(statearr_41109_41192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (20))){
var inst_41006 = (state_41103[(12)]);
var inst_41014 = figwheel.client.file_reloading.sort_files.call(null,inst_41006);
var state_41103__$1 = state_41103;
var statearr_41110_41193 = state_41103__$1;
(statearr_41110_41193[(2)] = inst_41014);

(statearr_41110_41193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (27))){
var state_41103__$1 = state_41103;
var statearr_41111_41194 = state_41103__$1;
(statearr_41111_41194[(2)] = null);

(statearr_41111_41194[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (1))){
var inst_40955 = (state_41103[(13)]);
var inst_40952 = before_jsload.call(null,files);
var inst_40953 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40954 = (function (){return ((function (inst_40955,inst_40952,inst_40953,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40943_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40943_SHARP_);
});
;})(inst_40955,inst_40952,inst_40953,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40955__$1 = cljs.core.filter.call(null,inst_40954,files);
var inst_40956 = cljs.core.not_empty.call(null,inst_40955__$1);
var state_41103__$1 = (function (){var statearr_41112 = state_41103;
(statearr_41112[(13)] = inst_40955__$1);

(statearr_41112[(14)] = inst_40952);

(statearr_41112[(15)] = inst_40953);

return statearr_41112;
})();
if(cljs.core.truth_(inst_40956)){
var statearr_41113_41195 = state_41103__$1;
(statearr_41113_41195[(1)] = (2));

} else {
var statearr_41114_41196 = state_41103__$1;
(statearr_41114_41196[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (24))){
var state_41103__$1 = state_41103;
var statearr_41115_41197 = state_41103__$1;
(statearr_41115_41197[(2)] = null);

(statearr_41115_41197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (39))){
var inst_41056 = (state_41103[(16)]);
var state_41103__$1 = state_41103;
var statearr_41116_41198 = state_41103__$1;
(statearr_41116_41198[(2)] = inst_41056);

(statearr_41116_41198[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (46))){
var inst_41098 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
var statearr_41117_41199 = state_41103__$1;
(statearr_41117_41199[(2)] = inst_41098);

(statearr_41117_41199[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (4))){
var inst_41000 = (state_41103[(2)]);
var inst_41001 = cljs.core.List.EMPTY;
var inst_41002 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41001);
var inst_41003 = (function (){return ((function (inst_41000,inst_41001,inst_41002,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40944_SHARP_){
var and__36296__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40944_SHARP_);
if(cljs.core.truth_(and__36296__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40944_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40944_SHARP_)));
} else {
return and__36296__auto__;
}
});
;})(inst_41000,inst_41001,inst_41002,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41004 = cljs.core.filter.call(null,inst_41003,files);
var inst_41005 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41006 = cljs.core.concat.call(null,inst_41004,inst_41005);
var state_41103__$1 = (function (){var statearr_41118 = state_41103;
(statearr_41118[(17)] = inst_41000);

(statearr_41118[(18)] = inst_41002);

(statearr_41118[(12)] = inst_41006);

return statearr_41118;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41119_41200 = state_41103__$1;
(statearr_41119_41200[(1)] = (16));

} else {
var statearr_41120_41201 = state_41103__$1;
(statearr_41120_41201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (15))){
var inst_40990 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
var statearr_41121_41202 = state_41103__$1;
(statearr_41121_41202[(2)] = inst_40990);

(statearr_41121_41202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (21))){
var inst_41016 = (state_41103[(19)]);
var inst_41016__$1 = (state_41103[(2)]);
var inst_41017 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41016__$1);
var state_41103__$1 = (function (){var statearr_41122 = state_41103;
(statearr_41122[(19)] = inst_41016__$1);

return statearr_41122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41103__$1,(22),inst_41017);
} else {
if((state_val_41104 === (31))){
var inst_41101 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41103__$1,inst_41101);
} else {
if((state_val_41104 === (32))){
var inst_41056 = (state_41103[(16)]);
var inst_41061 = inst_41056.cljs$lang$protocol_mask$partition0$;
var inst_41062 = (inst_41061 & (64));
var inst_41063 = inst_41056.cljs$core$ISeq$;
var inst_41064 = (cljs.core.PROTOCOL_SENTINEL === inst_41063);
var inst_41065 = (inst_41062) || (inst_41064);
var state_41103__$1 = state_41103;
if(cljs.core.truth_(inst_41065)){
var statearr_41123_41203 = state_41103__$1;
(statearr_41123_41203[(1)] = (35));

} else {
var statearr_41124_41204 = state_41103__$1;
(statearr_41124_41204[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (40))){
var inst_41078 = (state_41103[(20)]);
var inst_41077 = (state_41103[(2)]);
var inst_41078__$1 = cljs.core.get.call(null,inst_41077,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41079 = cljs.core.get.call(null,inst_41077,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41080 = cljs.core.not_empty.call(null,inst_41078__$1);
var state_41103__$1 = (function (){var statearr_41125 = state_41103;
(statearr_41125[(20)] = inst_41078__$1);

(statearr_41125[(21)] = inst_41079);

return statearr_41125;
})();
if(cljs.core.truth_(inst_41080)){
var statearr_41126_41205 = state_41103__$1;
(statearr_41126_41205[(1)] = (41));

} else {
var statearr_41127_41206 = state_41103__$1;
(statearr_41127_41206[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (33))){
var state_41103__$1 = state_41103;
var statearr_41128_41207 = state_41103__$1;
(statearr_41128_41207[(2)] = false);

(statearr_41128_41207[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (13))){
var inst_40976 = (state_41103[(22)]);
var inst_40980 = cljs.core.chunk_first.call(null,inst_40976);
var inst_40981 = cljs.core.chunk_rest.call(null,inst_40976);
var inst_40982 = cljs.core.count.call(null,inst_40980);
var inst_40963 = inst_40981;
var inst_40964 = inst_40980;
var inst_40965 = inst_40982;
var inst_40966 = (0);
var state_41103__$1 = (function (){var statearr_41129 = state_41103;
(statearr_41129[(7)] = inst_40965);

(statearr_41129[(8)] = inst_40964);

(statearr_41129[(9)] = inst_40963);

(statearr_41129[(10)] = inst_40966);

return statearr_41129;
})();
var statearr_41130_41208 = state_41103__$1;
(statearr_41130_41208[(2)] = null);

(statearr_41130_41208[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (22))){
var inst_41019 = (state_41103[(23)]);
var inst_41024 = (state_41103[(24)]);
var inst_41016 = (state_41103[(19)]);
var inst_41020 = (state_41103[(25)]);
var inst_41019__$1 = (state_41103[(2)]);
var inst_41020__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41019__$1);
var inst_41021 = (function (){var all_files = inst_41016;
var res_SINGLEQUOTE_ = inst_41019__$1;
var res = inst_41020__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41019,inst_41024,inst_41016,inst_41020,inst_41019__$1,inst_41020__$1,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40945_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40945_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41019,inst_41024,inst_41016,inst_41020,inst_41019__$1,inst_41020__$1,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41022 = cljs.core.filter.call(null,inst_41021,inst_41019__$1);
var inst_41023 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41024__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41023);
var inst_41025 = cljs.core.not_empty.call(null,inst_41024__$1);
var state_41103__$1 = (function (){var statearr_41131 = state_41103;
(statearr_41131[(23)] = inst_41019__$1);

(statearr_41131[(24)] = inst_41024__$1);

(statearr_41131[(25)] = inst_41020__$1);

(statearr_41131[(26)] = inst_41022);

return statearr_41131;
})();
if(cljs.core.truth_(inst_41025)){
var statearr_41132_41209 = state_41103__$1;
(statearr_41132_41209[(1)] = (23));

} else {
var statearr_41133_41210 = state_41103__$1;
(statearr_41133_41210[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (36))){
var state_41103__$1 = state_41103;
var statearr_41134_41211 = state_41103__$1;
(statearr_41134_41211[(2)] = false);

(statearr_41134_41211[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (41))){
var inst_41078 = (state_41103[(20)]);
var inst_41082 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41083 = cljs.core.map.call(null,inst_41082,inst_41078);
var inst_41084 = cljs.core.pr_str.call(null,inst_41083);
var inst_41085 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41084)].join('');
var inst_41086 = figwheel.client.utils.log.call(null,inst_41085);
var state_41103__$1 = state_41103;
var statearr_41135_41212 = state_41103__$1;
(statearr_41135_41212[(2)] = inst_41086);

(statearr_41135_41212[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (43))){
var inst_41079 = (state_41103[(21)]);
var inst_41089 = (state_41103[(2)]);
var inst_41090 = cljs.core.not_empty.call(null,inst_41079);
var state_41103__$1 = (function (){var statearr_41136 = state_41103;
(statearr_41136[(27)] = inst_41089);

return statearr_41136;
})();
if(cljs.core.truth_(inst_41090)){
var statearr_41137_41213 = state_41103__$1;
(statearr_41137_41213[(1)] = (44));

} else {
var statearr_41138_41214 = state_41103__$1;
(statearr_41138_41214[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (29))){
var inst_41056 = (state_41103[(16)]);
var inst_41019 = (state_41103[(23)]);
var inst_41024 = (state_41103[(24)]);
var inst_41016 = (state_41103[(19)]);
var inst_41020 = (state_41103[(25)]);
var inst_41022 = (state_41103[(26)]);
var inst_41052 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41055 = (function (){var all_files = inst_41016;
var res_SINGLEQUOTE_ = inst_41019;
var res = inst_41020;
var files_not_loaded = inst_41022;
var dependencies_that_loaded = inst_41024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41056,inst_41019,inst_41024,inst_41016,inst_41020,inst_41022,inst_41052,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41054){
var map__41139 = p__41054;
var map__41139__$1 = ((((!((map__41139 == null)))?((((map__41139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41139):map__41139);
var namespace = cljs.core.get.call(null,map__41139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41056,inst_41019,inst_41024,inst_41016,inst_41020,inst_41022,inst_41052,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41056__$1 = cljs.core.group_by.call(null,inst_41055,inst_41022);
var inst_41058 = (inst_41056__$1 == null);
var inst_41059 = cljs.core.not.call(null,inst_41058);
var state_41103__$1 = (function (){var statearr_41141 = state_41103;
(statearr_41141[(16)] = inst_41056__$1);

(statearr_41141[(28)] = inst_41052);

return statearr_41141;
})();
if(inst_41059){
var statearr_41142_41215 = state_41103__$1;
(statearr_41142_41215[(1)] = (32));

} else {
var statearr_41143_41216 = state_41103__$1;
(statearr_41143_41216[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (44))){
var inst_41079 = (state_41103[(21)]);
var inst_41092 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41079);
var inst_41093 = cljs.core.pr_str.call(null,inst_41092);
var inst_41094 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41093)].join('');
var inst_41095 = figwheel.client.utils.log.call(null,inst_41094);
var state_41103__$1 = state_41103;
var statearr_41144_41217 = state_41103__$1;
(statearr_41144_41217[(2)] = inst_41095);

(statearr_41144_41217[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (6))){
var inst_40997 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
var statearr_41145_41218 = state_41103__$1;
(statearr_41145_41218[(2)] = inst_40997);

(statearr_41145_41218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (28))){
var inst_41022 = (state_41103[(26)]);
var inst_41049 = (state_41103[(2)]);
var inst_41050 = cljs.core.not_empty.call(null,inst_41022);
var state_41103__$1 = (function (){var statearr_41146 = state_41103;
(statearr_41146[(29)] = inst_41049);

return statearr_41146;
})();
if(cljs.core.truth_(inst_41050)){
var statearr_41147_41219 = state_41103__$1;
(statearr_41147_41219[(1)] = (29));

} else {
var statearr_41148_41220 = state_41103__$1;
(statearr_41148_41220[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (25))){
var inst_41020 = (state_41103[(25)]);
var inst_41036 = (state_41103[(2)]);
var inst_41037 = cljs.core.not_empty.call(null,inst_41020);
var state_41103__$1 = (function (){var statearr_41149 = state_41103;
(statearr_41149[(30)] = inst_41036);

return statearr_41149;
})();
if(cljs.core.truth_(inst_41037)){
var statearr_41150_41221 = state_41103__$1;
(statearr_41150_41221[(1)] = (26));

} else {
var statearr_41151_41222 = state_41103__$1;
(statearr_41151_41222[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (34))){
var inst_41072 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
if(cljs.core.truth_(inst_41072)){
var statearr_41152_41223 = state_41103__$1;
(statearr_41152_41223[(1)] = (38));

} else {
var statearr_41153_41224 = state_41103__$1;
(statearr_41153_41224[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (17))){
var state_41103__$1 = state_41103;
var statearr_41154_41225 = state_41103__$1;
(statearr_41154_41225[(2)] = recompile_dependents);

(statearr_41154_41225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (3))){
var state_41103__$1 = state_41103;
var statearr_41155_41226 = state_41103__$1;
(statearr_41155_41226[(2)] = null);

(statearr_41155_41226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (12))){
var inst_40993 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
var statearr_41156_41227 = state_41103__$1;
(statearr_41156_41227[(2)] = inst_40993);

(statearr_41156_41227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (2))){
var inst_40955 = (state_41103[(13)]);
var inst_40962 = cljs.core.seq.call(null,inst_40955);
var inst_40963 = inst_40962;
var inst_40964 = null;
var inst_40965 = (0);
var inst_40966 = (0);
var state_41103__$1 = (function (){var statearr_41157 = state_41103;
(statearr_41157[(7)] = inst_40965);

(statearr_41157[(8)] = inst_40964);

(statearr_41157[(9)] = inst_40963);

(statearr_41157[(10)] = inst_40966);

return statearr_41157;
})();
var statearr_41158_41228 = state_41103__$1;
(statearr_41158_41228[(2)] = null);

(statearr_41158_41228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (23))){
var inst_41019 = (state_41103[(23)]);
var inst_41024 = (state_41103[(24)]);
var inst_41016 = (state_41103[(19)]);
var inst_41020 = (state_41103[(25)]);
var inst_41022 = (state_41103[(26)]);
var inst_41027 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41029 = (function (){var all_files = inst_41016;
var res_SINGLEQUOTE_ = inst_41019;
var res = inst_41020;
var files_not_loaded = inst_41022;
var dependencies_that_loaded = inst_41024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41019,inst_41024,inst_41016,inst_41020,inst_41022,inst_41027,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41028){
var map__41159 = p__41028;
var map__41159__$1 = ((((!((map__41159 == null)))?((((map__41159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41159):map__41159);
var request_url = cljs.core.get.call(null,map__41159__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41019,inst_41024,inst_41016,inst_41020,inst_41022,inst_41027,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41030 = cljs.core.reverse.call(null,inst_41024);
var inst_41031 = cljs.core.map.call(null,inst_41029,inst_41030);
var inst_41032 = cljs.core.pr_str.call(null,inst_41031);
var inst_41033 = figwheel.client.utils.log.call(null,inst_41032);
var state_41103__$1 = (function (){var statearr_41161 = state_41103;
(statearr_41161[(31)] = inst_41027);

return statearr_41161;
})();
var statearr_41162_41229 = state_41103__$1;
(statearr_41162_41229[(2)] = inst_41033);

(statearr_41162_41229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (35))){
var state_41103__$1 = state_41103;
var statearr_41163_41230 = state_41103__$1;
(statearr_41163_41230[(2)] = true);

(statearr_41163_41230[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (19))){
var inst_41006 = (state_41103[(12)]);
var inst_41012 = figwheel.client.file_reloading.expand_files.call(null,inst_41006);
var state_41103__$1 = state_41103;
var statearr_41164_41231 = state_41103__$1;
(statearr_41164_41231[(2)] = inst_41012);

(statearr_41164_41231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (11))){
var state_41103__$1 = state_41103;
var statearr_41165_41232 = state_41103__$1;
(statearr_41165_41232[(2)] = null);

(statearr_41165_41232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (9))){
var inst_40995 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
var statearr_41166_41233 = state_41103__$1;
(statearr_41166_41233[(2)] = inst_40995);

(statearr_41166_41233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (5))){
var inst_40965 = (state_41103[(7)]);
var inst_40966 = (state_41103[(10)]);
var inst_40968 = (inst_40966 < inst_40965);
var inst_40969 = inst_40968;
var state_41103__$1 = state_41103;
if(cljs.core.truth_(inst_40969)){
var statearr_41167_41234 = state_41103__$1;
(statearr_41167_41234[(1)] = (7));

} else {
var statearr_41168_41235 = state_41103__$1;
(statearr_41168_41235[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (14))){
var inst_40976 = (state_41103[(22)]);
var inst_40985 = cljs.core.first.call(null,inst_40976);
var inst_40986 = figwheel.client.file_reloading.eval_body.call(null,inst_40985,opts);
var inst_40987 = cljs.core.next.call(null,inst_40976);
var inst_40963 = inst_40987;
var inst_40964 = null;
var inst_40965 = (0);
var inst_40966 = (0);
var state_41103__$1 = (function (){var statearr_41169 = state_41103;
(statearr_41169[(7)] = inst_40965);

(statearr_41169[(32)] = inst_40986);

(statearr_41169[(8)] = inst_40964);

(statearr_41169[(9)] = inst_40963);

(statearr_41169[(10)] = inst_40966);

return statearr_41169;
})();
var statearr_41170_41236 = state_41103__$1;
(statearr_41170_41236[(2)] = null);

(statearr_41170_41236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (45))){
var state_41103__$1 = state_41103;
var statearr_41171_41237 = state_41103__$1;
(statearr_41171_41237[(2)] = null);

(statearr_41171_41237[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (26))){
var inst_41019 = (state_41103[(23)]);
var inst_41024 = (state_41103[(24)]);
var inst_41016 = (state_41103[(19)]);
var inst_41020 = (state_41103[(25)]);
var inst_41022 = (state_41103[(26)]);
var inst_41039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41041 = (function (){var all_files = inst_41016;
var res_SINGLEQUOTE_ = inst_41019;
var res = inst_41020;
var files_not_loaded = inst_41022;
var dependencies_that_loaded = inst_41024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41019,inst_41024,inst_41016,inst_41020,inst_41022,inst_41039,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41040){
var map__41172 = p__41040;
var map__41172__$1 = ((((!((map__41172 == null)))?((((map__41172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41172):map__41172);
var namespace = cljs.core.get.call(null,map__41172__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41172__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41019,inst_41024,inst_41016,inst_41020,inst_41022,inst_41039,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41042 = cljs.core.map.call(null,inst_41041,inst_41020);
var inst_41043 = cljs.core.pr_str.call(null,inst_41042);
var inst_41044 = figwheel.client.utils.log.call(null,inst_41043);
var inst_41045 = (function (){var all_files = inst_41016;
var res_SINGLEQUOTE_ = inst_41019;
var res = inst_41020;
var files_not_loaded = inst_41022;
var dependencies_that_loaded = inst_41024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41019,inst_41024,inst_41016,inst_41020,inst_41022,inst_41039,inst_41041,inst_41042,inst_41043,inst_41044,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41019,inst_41024,inst_41016,inst_41020,inst_41022,inst_41039,inst_41041,inst_41042,inst_41043,inst_41044,state_val_41104,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41046 = setTimeout(inst_41045,(10));
var state_41103__$1 = (function (){var statearr_41174 = state_41103;
(statearr_41174[(33)] = inst_41044);

(statearr_41174[(34)] = inst_41039);

return statearr_41174;
})();
var statearr_41175_41238 = state_41103__$1;
(statearr_41175_41238[(2)] = inst_41046);

(statearr_41175_41238[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (16))){
var state_41103__$1 = state_41103;
var statearr_41176_41239 = state_41103__$1;
(statearr_41176_41239[(2)] = reload_dependents);

(statearr_41176_41239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (38))){
var inst_41056 = (state_41103[(16)]);
var inst_41074 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41056);
var state_41103__$1 = state_41103;
var statearr_41177_41240 = state_41103__$1;
(statearr_41177_41240[(2)] = inst_41074);

(statearr_41177_41240[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (30))){
var state_41103__$1 = state_41103;
var statearr_41178_41241 = state_41103__$1;
(statearr_41178_41241[(2)] = null);

(statearr_41178_41241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (10))){
var inst_40976 = (state_41103[(22)]);
var inst_40978 = cljs.core.chunked_seq_QMARK_.call(null,inst_40976);
var state_41103__$1 = state_41103;
if(inst_40978){
var statearr_41179_41242 = state_41103__$1;
(statearr_41179_41242[(1)] = (13));

} else {
var statearr_41180_41243 = state_41103__$1;
(statearr_41180_41243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (18))){
var inst_41010 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
if(cljs.core.truth_(inst_41010)){
var statearr_41181_41244 = state_41103__$1;
(statearr_41181_41244[(1)] = (19));

} else {
var statearr_41182_41245 = state_41103__$1;
(statearr_41182_41245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (42))){
var state_41103__$1 = state_41103;
var statearr_41183_41246 = state_41103__$1;
(statearr_41183_41246[(2)] = null);

(statearr_41183_41246[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (37))){
var inst_41069 = (state_41103[(2)]);
var state_41103__$1 = state_41103;
var statearr_41184_41247 = state_41103__$1;
(statearr_41184_41247[(2)] = inst_41069);

(statearr_41184_41247[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41104 === (8))){
var inst_40976 = (state_41103[(22)]);
var inst_40963 = (state_41103[(9)]);
var inst_40976__$1 = cljs.core.seq.call(null,inst_40963);
var state_41103__$1 = (function (){var statearr_41185 = state_41103;
(statearr_41185[(22)] = inst_40976__$1);

return statearr_41185;
})();
if(inst_40976__$1){
var statearr_41186_41248 = state_41103__$1;
(statearr_41186_41248[(1)] = (10));

} else {
var statearr_41187_41249 = state_41103__$1;
(statearr_41187_41249[(1)] = (11));

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
});})(c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39663__auto__,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto____0 = (function (){
var statearr_41188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41188[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto__);

(statearr_41188[(1)] = (1));

return statearr_41188;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto____1 = (function (state_41103){
while(true){
var ret_value__39665__auto__ = (function (){try{while(true){
var result__39666__auto__ = switch__39663__auto__.call(null,state_41103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39666__auto__;
}
break;
}
}catch (e41189){if((e41189 instanceof Object)){
var ex__39667__auto__ = e41189;
var statearr_41190_41250 = state_41103;
(statearr_41190_41250[(5)] = ex__39667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41251 = state_41103;
state_41103 = G__41251;
continue;
} else {
return ret_value__39665__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto__ = function(state_41103){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto____1.call(this,state_41103);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39664__auto__;
})()
;})(switch__39663__auto__,c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39686__auto__ = (function (){var statearr_41191 = f__39685__auto__.call(null);
(statearr_41191[(6)] = c__39684__auto__);

return statearr_41191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39686__auto__);
});})(c__39684__auto__,map__40948,map__40948__$1,opts,before_jsload,on_jsload,reload_dependents,map__40949,map__40949__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39684__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41254,link){
var map__41255 = p__41254;
var map__41255__$1 = ((((!((map__41255 == null)))?((((map__41255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41255):map__41255);
var file = cljs.core.get.call(null,map__41255__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41255,map__41255__$1,file){
return (function (p1__41252_SHARP_,p2__41253_SHARP_){
if(cljs.core._EQ_.call(null,p1__41252_SHARP_,p2__41253_SHARP_)){
return p1__41252_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41255,map__41255__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41258){
var map__41259 = p__41258;
var map__41259__$1 = ((((!((map__41259 == null)))?((((map__41259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41259):map__41259);
var match_length = cljs.core.get.call(null,map__41259__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41259__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41257_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41257_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41261_SHARP_,p2__41262_SHARP_){
return cljs.core.assoc.call(null,p1__41261_SHARP_,cljs.core.get.call(null,p2__41262_SHARP_,key),p2__41262_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41263 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41263);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41263);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41264,p__41265){
var map__41266 = p__41264;
var map__41266__$1 = ((((!((map__41266 == null)))?((((map__41266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41266):map__41266);
var on_cssload = cljs.core.get.call(null,map__41266__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41267 = p__41265;
var map__41267__$1 = ((((!((map__41267 == null)))?((((map__41267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41267):map__41267);
var files_msg = map__41267__$1;
var files = cljs.core.get.call(null,map__41267__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1518645798643
