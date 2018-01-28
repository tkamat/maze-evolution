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
var or__28334__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28334__auto__){
return or__28334__auto__;
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
var or__28334__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
} else {
var or__28334__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28334__auto____$1)){
return or__28334__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35802_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35802_SHARP_));
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
var seq__35803 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35804 = null;
var count__35805 = (0);
var i__35806 = (0);
while(true){
if((i__35806 < count__35805)){
var n = cljs.core._nth.call(null,chunk__35804,i__35806);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35807 = seq__35803;
var G__35808 = chunk__35804;
var G__35809 = count__35805;
var G__35810 = (i__35806 + (1));
seq__35803 = G__35807;
chunk__35804 = G__35808;
count__35805 = G__35809;
i__35806 = G__35810;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35803);
if(temp__4657__auto__){
var seq__35803__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35803__$1)){
var c__29173__auto__ = cljs.core.chunk_first.call(null,seq__35803__$1);
var G__35811 = cljs.core.chunk_rest.call(null,seq__35803__$1);
var G__35812 = c__29173__auto__;
var G__35813 = cljs.core.count.call(null,c__29173__auto__);
var G__35814 = (0);
seq__35803 = G__35811;
chunk__35804 = G__35812;
count__35805 = G__35813;
i__35806 = G__35814;
continue;
} else {
var n = cljs.core.first.call(null,seq__35803__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35815 = cljs.core.next.call(null,seq__35803__$1);
var G__35816 = null;
var G__35817 = (0);
var G__35818 = (0);
seq__35803 = G__35815;
chunk__35804 = G__35816;
count__35805 = G__35817;
i__35806 = G__35818;
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
return cljs.core.some.call(null,(function (p__35819){
var vec__35820 = p__35819;
var _ = cljs.core.nth.call(null,vec__35820,(0),null);
var v = cljs.core.nth.call(null,vec__35820,(1),null);
var and__28322__auto__ = v;
if(cljs.core.truth_(and__28322__auto__)){
return v.call(null,dep);
} else {
return and__28322__auto__;
}
}),cljs.core.filter.call(null,(function (p__35823){
var vec__35824 = p__35823;
var k = cljs.core.nth.call(null,vec__35824,(0),null);
var v = cljs.core.nth.call(null,vec__35824,(1),null);
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

var seq__35836_35844 = cljs.core.seq.call(null,deps);
var chunk__35837_35845 = null;
var count__35838_35846 = (0);
var i__35839_35847 = (0);
while(true){
if((i__35839_35847 < count__35838_35846)){
var dep_35848 = cljs.core._nth.call(null,chunk__35837_35845,i__35839_35847);
if(cljs.core.truth_((function (){var and__28322__auto__ = dep_35848;
if(cljs.core.truth_(and__28322__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35848));
} else {
return and__28322__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35848,(depth + (1)),state);
} else {
}

var G__35849 = seq__35836_35844;
var G__35850 = chunk__35837_35845;
var G__35851 = count__35838_35846;
var G__35852 = (i__35839_35847 + (1));
seq__35836_35844 = G__35849;
chunk__35837_35845 = G__35850;
count__35838_35846 = G__35851;
i__35839_35847 = G__35852;
continue;
} else {
var temp__4657__auto___35853 = cljs.core.seq.call(null,seq__35836_35844);
if(temp__4657__auto___35853){
var seq__35836_35854__$1 = temp__4657__auto___35853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35836_35854__$1)){
var c__29173__auto___35855 = cljs.core.chunk_first.call(null,seq__35836_35854__$1);
var G__35856 = cljs.core.chunk_rest.call(null,seq__35836_35854__$1);
var G__35857 = c__29173__auto___35855;
var G__35858 = cljs.core.count.call(null,c__29173__auto___35855);
var G__35859 = (0);
seq__35836_35844 = G__35856;
chunk__35837_35845 = G__35857;
count__35838_35846 = G__35858;
i__35839_35847 = G__35859;
continue;
} else {
var dep_35860 = cljs.core.first.call(null,seq__35836_35854__$1);
if(cljs.core.truth_((function (){var and__28322__auto__ = dep_35860;
if(cljs.core.truth_(and__28322__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35860));
} else {
return and__28322__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35860,(depth + (1)),state);
} else {
}

var G__35861 = cljs.core.next.call(null,seq__35836_35854__$1);
var G__35862 = null;
var G__35863 = (0);
var G__35864 = (0);
seq__35836_35844 = G__35861;
chunk__35837_35845 = G__35862;
count__35838_35846 = G__35863;
i__35839_35847 = G__35864;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35840){
var vec__35841 = p__35840;
var seq__35842 = cljs.core.seq.call(null,vec__35841);
var first__35843 = cljs.core.first.call(null,seq__35842);
var seq__35842__$1 = cljs.core.next.call(null,seq__35842);
var x = first__35843;
var xs = seq__35842__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35841,seq__35842,first__35843,seq__35842__$1,x,xs,get_deps__$1){
return (function (p1__35827_SHARP_){
return clojure.set.difference.call(null,p1__35827_SHARP_,x);
});})(vec__35841,seq__35842,first__35843,seq__35842__$1,x,xs,get_deps__$1))
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
var seq__35865 = cljs.core.seq.call(null,provides);
var chunk__35866 = null;
var count__35867 = (0);
var i__35868 = (0);
while(true){
if((i__35868 < count__35867)){
var prov = cljs.core._nth.call(null,chunk__35866,i__35868);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35869_35877 = cljs.core.seq.call(null,requires);
var chunk__35870_35878 = null;
var count__35871_35879 = (0);
var i__35872_35880 = (0);
while(true){
if((i__35872_35880 < count__35871_35879)){
var req_35881 = cljs.core._nth.call(null,chunk__35870_35878,i__35872_35880);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35881,prov);

var G__35882 = seq__35869_35877;
var G__35883 = chunk__35870_35878;
var G__35884 = count__35871_35879;
var G__35885 = (i__35872_35880 + (1));
seq__35869_35877 = G__35882;
chunk__35870_35878 = G__35883;
count__35871_35879 = G__35884;
i__35872_35880 = G__35885;
continue;
} else {
var temp__4657__auto___35886 = cljs.core.seq.call(null,seq__35869_35877);
if(temp__4657__auto___35886){
var seq__35869_35887__$1 = temp__4657__auto___35886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35869_35887__$1)){
var c__29173__auto___35888 = cljs.core.chunk_first.call(null,seq__35869_35887__$1);
var G__35889 = cljs.core.chunk_rest.call(null,seq__35869_35887__$1);
var G__35890 = c__29173__auto___35888;
var G__35891 = cljs.core.count.call(null,c__29173__auto___35888);
var G__35892 = (0);
seq__35869_35877 = G__35889;
chunk__35870_35878 = G__35890;
count__35871_35879 = G__35891;
i__35872_35880 = G__35892;
continue;
} else {
var req_35893 = cljs.core.first.call(null,seq__35869_35887__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35893,prov);

var G__35894 = cljs.core.next.call(null,seq__35869_35887__$1);
var G__35895 = null;
var G__35896 = (0);
var G__35897 = (0);
seq__35869_35877 = G__35894;
chunk__35870_35878 = G__35895;
count__35871_35879 = G__35896;
i__35872_35880 = G__35897;
continue;
}
} else {
}
}
break;
}

var G__35898 = seq__35865;
var G__35899 = chunk__35866;
var G__35900 = count__35867;
var G__35901 = (i__35868 + (1));
seq__35865 = G__35898;
chunk__35866 = G__35899;
count__35867 = G__35900;
i__35868 = G__35901;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35865);
if(temp__4657__auto__){
var seq__35865__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35865__$1)){
var c__29173__auto__ = cljs.core.chunk_first.call(null,seq__35865__$1);
var G__35902 = cljs.core.chunk_rest.call(null,seq__35865__$1);
var G__35903 = c__29173__auto__;
var G__35904 = cljs.core.count.call(null,c__29173__auto__);
var G__35905 = (0);
seq__35865 = G__35902;
chunk__35866 = G__35903;
count__35867 = G__35904;
i__35868 = G__35905;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35865__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35873_35906 = cljs.core.seq.call(null,requires);
var chunk__35874_35907 = null;
var count__35875_35908 = (0);
var i__35876_35909 = (0);
while(true){
if((i__35876_35909 < count__35875_35908)){
var req_35910 = cljs.core._nth.call(null,chunk__35874_35907,i__35876_35909);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35910,prov);

var G__35911 = seq__35873_35906;
var G__35912 = chunk__35874_35907;
var G__35913 = count__35875_35908;
var G__35914 = (i__35876_35909 + (1));
seq__35873_35906 = G__35911;
chunk__35874_35907 = G__35912;
count__35875_35908 = G__35913;
i__35876_35909 = G__35914;
continue;
} else {
var temp__4657__auto___35915__$1 = cljs.core.seq.call(null,seq__35873_35906);
if(temp__4657__auto___35915__$1){
var seq__35873_35916__$1 = temp__4657__auto___35915__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35873_35916__$1)){
var c__29173__auto___35917 = cljs.core.chunk_first.call(null,seq__35873_35916__$1);
var G__35918 = cljs.core.chunk_rest.call(null,seq__35873_35916__$1);
var G__35919 = c__29173__auto___35917;
var G__35920 = cljs.core.count.call(null,c__29173__auto___35917);
var G__35921 = (0);
seq__35873_35906 = G__35918;
chunk__35874_35907 = G__35919;
count__35875_35908 = G__35920;
i__35876_35909 = G__35921;
continue;
} else {
var req_35922 = cljs.core.first.call(null,seq__35873_35916__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35922,prov);

var G__35923 = cljs.core.next.call(null,seq__35873_35916__$1);
var G__35924 = null;
var G__35925 = (0);
var G__35926 = (0);
seq__35873_35906 = G__35923;
chunk__35874_35907 = G__35924;
count__35875_35908 = G__35925;
i__35876_35909 = G__35926;
continue;
}
} else {
}
}
break;
}

var G__35927 = cljs.core.next.call(null,seq__35865__$1);
var G__35928 = null;
var G__35929 = (0);
var G__35930 = (0);
seq__35865 = G__35927;
chunk__35866 = G__35928;
count__35867 = G__35929;
i__35868 = G__35930;
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
var seq__35931_35935 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35932_35936 = null;
var count__35933_35937 = (0);
var i__35934_35938 = (0);
while(true){
if((i__35934_35938 < count__35933_35937)){
var ns_35939 = cljs.core._nth.call(null,chunk__35932_35936,i__35934_35938);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35939);

var G__35940 = seq__35931_35935;
var G__35941 = chunk__35932_35936;
var G__35942 = count__35933_35937;
var G__35943 = (i__35934_35938 + (1));
seq__35931_35935 = G__35940;
chunk__35932_35936 = G__35941;
count__35933_35937 = G__35942;
i__35934_35938 = G__35943;
continue;
} else {
var temp__4657__auto___35944 = cljs.core.seq.call(null,seq__35931_35935);
if(temp__4657__auto___35944){
var seq__35931_35945__$1 = temp__4657__auto___35944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35931_35945__$1)){
var c__29173__auto___35946 = cljs.core.chunk_first.call(null,seq__35931_35945__$1);
var G__35947 = cljs.core.chunk_rest.call(null,seq__35931_35945__$1);
var G__35948 = c__29173__auto___35946;
var G__35949 = cljs.core.count.call(null,c__29173__auto___35946);
var G__35950 = (0);
seq__35931_35935 = G__35947;
chunk__35932_35936 = G__35948;
count__35933_35937 = G__35949;
i__35934_35938 = G__35950;
continue;
} else {
var ns_35951 = cljs.core.first.call(null,seq__35931_35945__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35951);

var G__35952 = cljs.core.next.call(null,seq__35931_35945__$1);
var G__35953 = null;
var G__35954 = (0);
var G__35955 = (0);
seq__35931_35935 = G__35952;
chunk__35932_35936 = G__35953;
count__35933_35937 = G__35954;
i__35934_35938 = G__35955;
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
goog.require_figwheel_backup_ = (function (){var or__28334__auto__ = goog.require__;
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
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
var G__35956__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35957__i = 0, G__35957__a = new Array(arguments.length -  0);
while (G__35957__i < G__35957__a.length) {G__35957__a[G__35957__i] = arguments[G__35957__i + 0]; ++G__35957__i;}
  args = new cljs.core.IndexedSeq(G__35957__a,0,null);
} 
return G__35956__delegate.call(this,args);};
G__35956.cljs$lang$maxFixedArity = 0;
G__35956.cljs$lang$applyTo = (function (arglist__35958){
var args = cljs.core.seq(arglist__35958);
return G__35956__delegate(args);
});
G__35956.cljs$core$IFn$_invoke$arity$variadic = G__35956__delegate;
return G__35956;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35959_SHARP_,p2__35960_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35959_SHARP_)].join('')),p2__35960_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35961_SHARP_,p2__35962_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35961_SHARP_)].join(''),p2__35962_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35963 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35963.addCallback(((function (G__35963){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35963))
);

G__35963.addErrback(((function (G__35963){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35963))
);

return G__35963;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35964){if((e35964 instanceof Error)){
var e = e35964;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35964;

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
}catch (e35965){if((e35965 instanceof Error)){
var e = e35965;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35965;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35966 = cljs.core._EQ_;
var expr__35967 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35967))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35967))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35967))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35966,expr__35967){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35966,expr__35967))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35969,callback){
var map__35970 = p__35969;
var map__35970__$1 = ((((!((map__35970 == null)))?((((map__35970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35970):map__35970);
var file_msg = map__35970__$1;
var request_url = cljs.core.get.call(null,map__35970__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28334__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35970,map__35970__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35970,map__35970__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__){
return (function (state_36010){
var state_val_36011 = (state_36010[(1)]);
if((state_val_36011 === (7))){
var inst_36006 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36012_36039 = state_36010__$1;
(statearr_36012_36039[(2)] = inst_36006);

(statearr_36012_36039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (1))){
var state_36010__$1 = state_36010;
var statearr_36013_36040 = state_36010__$1;
(statearr_36013_36040[(2)] = null);

(statearr_36013_36040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (4))){
var inst_35974 = (state_36010[(7)]);
var inst_35974__$1 = (state_36010[(2)]);
var state_36010__$1 = (function (){var statearr_36014 = state_36010;
(statearr_36014[(7)] = inst_35974__$1);

return statearr_36014;
})();
if(cljs.core.truth_(inst_35974__$1)){
var statearr_36015_36041 = state_36010__$1;
(statearr_36015_36041[(1)] = (5));

} else {
var statearr_36016_36042 = state_36010__$1;
(statearr_36016_36042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (15))){
var inst_35988 = (state_36010[(8)]);
var inst_35991 = (state_36010[(9)]);
var inst_35993 = inst_35991.call(null,inst_35988);
var state_36010__$1 = state_36010;
var statearr_36017_36043 = state_36010__$1;
(statearr_36017_36043[(2)] = inst_35993);

(statearr_36017_36043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (13))){
var inst_36000 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36018_36044 = state_36010__$1;
(statearr_36018_36044[(2)] = inst_36000);

(statearr_36018_36044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (6))){
var state_36010__$1 = state_36010;
var statearr_36019_36045 = state_36010__$1;
(statearr_36019_36045[(2)] = null);

(statearr_36019_36045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (17))){
var inst_35997 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36020_36046 = state_36010__$1;
(statearr_36020_36046[(2)] = inst_35997);

(statearr_36020_36046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (3))){
var inst_36008 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36010__$1,inst_36008);
} else {
if((state_val_36011 === (12))){
var state_36010__$1 = state_36010;
var statearr_36021_36047 = state_36010__$1;
(statearr_36021_36047[(2)] = null);

(statearr_36021_36047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (2))){
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36011 === (11))){
var inst_35979 = (state_36010[(10)]);
var inst_35986 = figwheel.client.file_reloading.blocking_load.call(null,inst_35979);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,(14),inst_35986);
} else {
if((state_val_36011 === (9))){
var inst_35979 = (state_36010[(10)]);
var state_36010__$1 = state_36010;
if(cljs.core.truth_(inst_35979)){
var statearr_36022_36048 = state_36010__$1;
(statearr_36022_36048[(1)] = (11));

} else {
var statearr_36023_36049 = state_36010__$1;
(statearr_36023_36049[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (5))){
var inst_35980 = (state_36010[(11)]);
var inst_35974 = (state_36010[(7)]);
var inst_35979 = cljs.core.nth.call(null,inst_35974,(0),null);
var inst_35980__$1 = cljs.core.nth.call(null,inst_35974,(1),null);
var state_36010__$1 = (function (){var statearr_36024 = state_36010;
(statearr_36024[(10)] = inst_35979);

(statearr_36024[(11)] = inst_35980__$1);

return statearr_36024;
})();
if(cljs.core.truth_(inst_35980__$1)){
var statearr_36025_36050 = state_36010__$1;
(statearr_36025_36050[(1)] = (8));

} else {
var statearr_36026_36051 = state_36010__$1;
(statearr_36026_36051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (14))){
var inst_35979 = (state_36010[(10)]);
var inst_35991 = (state_36010[(9)]);
var inst_35988 = (state_36010[(2)]);
var inst_35989 = console.log("Loading!",inst_35979);
var inst_35990 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35991__$1 = cljs.core.get.call(null,inst_35990,inst_35979);
var state_36010__$1 = (function (){var statearr_36027 = state_36010;
(statearr_36027[(12)] = inst_35989);

(statearr_36027[(8)] = inst_35988);

(statearr_36027[(9)] = inst_35991__$1);

return statearr_36027;
})();
if(cljs.core.truth_(inst_35991__$1)){
var statearr_36028_36052 = state_36010__$1;
(statearr_36028_36052[(1)] = (15));

} else {
var statearr_36029_36053 = state_36010__$1;
(statearr_36029_36053[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (16))){
var inst_35988 = (state_36010[(8)]);
var inst_35995 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35988);
var state_36010__$1 = state_36010;
var statearr_36030_36054 = state_36010__$1;
(statearr_36030_36054[(2)] = inst_35995);

(statearr_36030_36054[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (10))){
var inst_36002 = (state_36010[(2)]);
var state_36010__$1 = (function (){var statearr_36031 = state_36010;
(statearr_36031[(13)] = inst_36002);

return statearr_36031;
})();
var statearr_36032_36055 = state_36010__$1;
(statearr_36032_36055[(2)] = null);

(statearr_36032_36055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (8))){
var inst_35980 = (state_36010[(11)]);
var inst_35982 = console.log("Evaling!",inst_35980);
var inst_35983 = eval(inst_35980);
var state_36010__$1 = (function (){var statearr_36033 = state_36010;
(statearr_36033[(14)] = inst_35982);

return statearr_36033;
})();
var statearr_36034_36056 = state_36010__$1;
(statearr_36034_36056[(2)] = inst_35983);

(statearr_36034_36056[(1)] = (10));


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
});})(c__32630__auto__))
;
return ((function (switch__32542__auto__,c__32630__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32543__auto__ = null;
var figwheel$client$file_reloading$state_machine__32543__auto____0 = (function (){
var statearr_36035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36035[(0)] = figwheel$client$file_reloading$state_machine__32543__auto__);

(statearr_36035[(1)] = (1));

return statearr_36035;
});
var figwheel$client$file_reloading$state_machine__32543__auto____1 = (function (state_36010){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_36010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e36036){if((e36036 instanceof Object)){
var ex__32546__auto__ = e36036;
var statearr_36037_36057 = state_36010;
(statearr_36037_36057[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36058 = state_36010;
state_36010 = G__36058;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32543__auto__ = function(state_36010){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32543__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32543__auto____1.call(this,state_36010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32543__auto____0;
figwheel$client$file_reloading$state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32543__auto____1;
return figwheel$client$file_reloading$state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__))
})();
var state__32632__auto__ = (function (){var statearr_36038 = f__32631__auto__.call(null);
(statearr_36038[(6)] = c__32630__auto__);

return statearr_36038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__))
);

return c__32630__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36060 = arguments.length;
switch (G__36060) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36062,callback){
var map__36063 = p__36062;
var map__36063__$1 = ((((!((map__36063 == null)))?((((map__36063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36063):map__36063);
var file_msg = map__36063__$1;
var namespace = cljs.core.get.call(null,map__36063__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36063,map__36063__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36063,map__36063__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36065){
var map__36066 = p__36065;
var map__36066__$1 = ((((!((map__36066 == null)))?((((map__36066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36066):map__36066);
var file_msg = map__36066__$1;
var namespace = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36068){
var map__36069 = p__36068;
var map__36069__$1 = ((((!((map__36069 == null)))?((((map__36069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36069):map__36069);
var file_msg = map__36069__$1;
var namespace = cljs.core.get.call(null,map__36069__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28322__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28322__auto__){
var or__28334__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
} else {
var or__28334__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28334__auto____$1)){
return or__28334__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28322__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36071,callback){
var map__36072 = p__36071;
var map__36072__$1 = ((((!((map__36072 == null)))?((((map__36072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36072):map__36072);
var file_msg = map__36072__$1;
var request_url = cljs.core.get.call(null,map__36072__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36072__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32630__auto___36122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto___36122,out){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto___36122,out){
return (function (state_36107){
var state_val_36108 = (state_36107[(1)]);
if((state_val_36108 === (1))){
var inst_36081 = cljs.core.seq.call(null,files);
var inst_36082 = cljs.core.first.call(null,inst_36081);
var inst_36083 = cljs.core.next.call(null,inst_36081);
var inst_36084 = files;
var state_36107__$1 = (function (){var statearr_36109 = state_36107;
(statearr_36109[(7)] = inst_36083);

(statearr_36109[(8)] = inst_36084);

(statearr_36109[(9)] = inst_36082);

return statearr_36109;
})();
var statearr_36110_36123 = state_36107__$1;
(statearr_36110_36123[(2)] = null);

(statearr_36110_36123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (2))){
var inst_36084 = (state_36107[(8)]);
var inst_36090 = (state_36107[(10)]);
var inst_36089 = cljs.core.seq.call(null,inst_36084);
var inst_36090__$1 = cljs.core.first.call(null,inst_36089);
var inst_36091 = cljs.core.next.call(null,inst_36089);
var inst_36092 = (inst_36090__$1 == null);
var inst_36093 = cljs.core.not.call(null,inst_36092);
var state_36107__$1 = (function (){var statearr_36111 = state_36107;
(statearr_36111[(11)] = inst_36091);

(statearr_36111[(10)] = inst_36090__$1);

return statearr_36111;
})();
if(inst_36093){
var statearr_36112_36124 = state_36107__$1;
(statearr_36112_36124[(1)] = (4));

} else {
var statearr_36113_36125 = state_36107__$1;
(statearr_36113_36125[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (3))){
var inst_36105 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36107__$1,inst_36105);
} else {
if((state_val_36108 === (4))){
var inst_36090 = (state_36107[(10)]);
var inst_36095 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36090);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(7),inst_36095);
} else {
if((state_val_36108 === (5))){
var inst_36101 = cljs.core.async.close_BANG_.call(null,out);
var state_36107__$1 = state_36107;
var statearr_36114_36126 = state_36107__$1;
(statearr_36114_36126[(2)] = inst_36101);

(statearr_36114_36126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (6))){
var inst_36103 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36115_36127 = state_36107__$1;
(statearr_36115_36127[(2)] = inst_36103);

(statearr_36115_36127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (7))){
var inst_36091 = (state_36107[(11)]);
var inst_36097 = (state_36107[(2)]);
var inst_36098 = cljs.core.async.put_BANG_.call(null,out,inst_36097);
var inst_36084 = inst_36091;
var state_36107__$1 = (function (){var statearr_36116 = state_36107;
(statearr_36116[(8)] = inst_36084);

(statearr_36116[(12)] = inst_36098);

return statearr_36116;
})();
var statearr_36117_36128 = state_36107__$1;
(statearr_36117_36128[(2)] = null);

(statearr_36117_36128[(1)] = (2));


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
});})(c__32630__auto___36122,out))
;
return ((function (switch__32542__auto__,c__32630__auto___36122,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto____0 = (function (){
var statearr_36118 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36118[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto__);

(statearr_36118[(1)] = (1));

return statearr_36118;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto____1 = (function (state_36107){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_36107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e36119){if((e36119 instanceof Object)){
var ex__32546__auto__ = e36119;
var statearr_36120_36129 = state_36107;
(statearr_36120_36129[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36130 = state_36107;
state_36107 = G__36130;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto__ = function(state_36107){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto____1.call(this,state_36107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto___36122,out))
})();
var state__32632__auto__ = (function (){var statearr_36121 = f__32631__auto__.call(null);
(statearr_36121[(6)] = c__32630__auto___36122);

return statearr_36121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto___36122,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36131,opts){
var map__36132 = p__36131;
var map__36132__$1 = ((((!((map__36132 == null)))?((((map__36132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36132):map__36132);
var eval_body = cljs.core.get.call(null,map__36132__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36132__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28322__auto__ = eval_body;
if(cljs.core.truth_(and__28322__auto__)){
return typeof eval_body === 'string';
} else {
return and__28322__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36134){var e = e36134;
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
return (function (p1__36135_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36135_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36136){
var vec__36137 = p__36136;
var k = cljs.core.nth.call(null,vec__36137,(0),null);
var v = cljs.core.nth.call(null,vec__36137,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36140){
var vec__36141 = p__36140;
var k = cljs.core.nth.call(null,vec__36141,(0),null);
var v = cljs.core.nth.call(null,vec__36141,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36147,p__36148){
var map__36149 = p__36147;
var map__36149__$1 = ((((!((map__36149 == null)))?((((map__36149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36149):map__36149);
var opts = map__36149__$1;
var before_jsload = cljs.core.get.call(null,map__36149__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36149__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36149__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36150 = p__36148;
var map__36150__$1 = ((((!((map__36150 == null)))?((((map__36150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36150):map__36150);
var msg = map__36150__$1;
var files = cljs.core.get.call(null,map__36150__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36150__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36150__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32631__auto__ = (function (){var switch__32542__auto__ = ((function (c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36304){
var state_val_36305 = (state_36304[(1)]);
if((state_val_36305 === (7))){
var inst_36166 = (state_36304[(7)]);
var inst_36165 = (state_36304[(8)]);
var inst_36167 = (state_36304[(9)]);
var inst_36164 = (state_36304[(10)]);
var inst_36172 = cljs.core._nth.call(null,inst_36165,inst_36167);
var inst_36173 = figwheel.client.file_reloading.eval_body.call(null,inst_36172,opts);
var inst_36174 = (inst_36167 + (1));
var tmp36306 = inst_36166;
var tmp36307 = inst_36165;
var tmp36308 = inst_36164;
var inst_36164__$1 = tmp36308;
var inst_36165__$1 = tmp36307;
var inst_36166__$1 = tmp36306;
var inst_36167__$1 = inst_36174;
var state_36304__$1 = (function (){var statearr_36309 = state_36304;
(statearr_36309[(7)] = inst_36166__$1);

(statearr_36309[(8)] = inst_36165__$1);

(statearr_36309[(11)] = inst_36173);

(statearr_36309[(9)] = inst_36167__$1);

(statearr_36309[(10)] = inst_36164__$1);

return statearr_36309;
})();
var statearr_36310_36393 = state_36304__$1;
(statearr_36310_36393[(2)] = null);

(statearr_36310_36393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (20))){
var inst_36207 = (state_36304[(12)]);
var inst_36215 = figwheel.client.file_reloading.sort_files.call(null,inst_36207);
var state_36304__$1 = state_36304;
var statearr_36311_36394 = state_36304__$1;
(statearr_36311_36394[(2)] = inst_36215);

(statearr_36311_36394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (27))){
var state_36304__$1 = state_36304;
var statearr_36312_36395 = state_36304__$1;
(statearr_36312_36395[(2)] = null);

(statearr_36312_36395[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (1))){
var inst_36156 = (state_36304[(13)]);
var inst_36153 = before_jsload.call(null,files);
var inst_36154 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36155 = (function (){return ((function (inst_36156,inst_36153,inst_36154,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36144_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36144_SHARP_);
});
;})(inst_36156,inst_36153,inst_36154,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36156__$1 = cljs.core.filter.call(null,inst_36155,files);
var inst_36157 = cljs.core.not_empty.call(null,inst_36156__$1);
var state_36304__$1 = (function (){var statearr_36313 = state_36304;
(statearr_36313[(14)] = inst_36153);

(statearr_36313[(13)] = inst_36156__$1);

(statearr_36313[(15)] = inst_36154);

return statearr_36313;
})();
if(cljs.core.truth_(inst_36157)){
var statearr_36314_36396 = state_36304__$1;
(statearr_36314_36396[(1)] = (2));

} else {
var statearr_36315_36397 = state_36304__$1;
(statearr_36315_36397[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (24))){
var state_36304__$1 = state_36304;
var statearr_36316_36398 = state_36304__$1;
(statearr_36316_36398[(2)] = null);

(statearr_36316_36398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (39))){
var inst_36257 = (state_36304[(16)]);
var state_36304__$1 = state_36304;
var statearr_36317_36399 = state_36304__$1;
(statearr_36317_36399[(2)] = inst_36257);

(statearr_36317_36399[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (46))){
var inst_36299 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
var statearr_36318_36400 = state_36304__$1;
(statearr_36318_36400[(2)] = inst_36299);

(statearr_36318_36400[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (4))){
var inst_36201 = (state_36304[(2)]);
var inst_36202 = cljs.core.List.EMPTY;
var inst_36203 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36202);
var inst_36204 = (function (){return ((function (inst_36201,inst_36202,inst_36203,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36145_SHARP_){
var and__28322__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36145_SHARP_);
if(cljs.core.truth_(and__28322__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36145_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36145_SHARP_)));
} else {
return and__28322__auto__;
}
});
;})(inst_36201,inst_36202,inst_36203,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36205 = cljs.core.filter.call(null,inst_36204,files);
var inst_36206 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36207 = cljs.core.concat.call(null,inst_36205,inst_36206);
var state_36304__$1 = (function (){var statearr_36319 = state_36304;
(statearr_36319[(17)] = inst_36203);

(statearr_36319[(12)] = inst_36207);

(statearr_36319[(18)] = inst_36201);

return statearr_36319;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36320_36401 = state_36304__$1;
(statearr_36320_36401[(1)] = (16));

} else {
var statearr_36321_36402 = state_36304__$1;
(statearr_36321_36402[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (15))){
var inst_36191 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
var statearr_36322_36403 = state_36304__$1;
(statearr_36322_36403[(2)] = inst_36191);

(statearr_36322_36403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (21))){
var inst_36217 = (state_36304[(19)]);
var inst_36217__$1 = (state_36304[(2)]);
var inst_36218 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36217__$1);
var state_36304__$1 = (function (){var statearr_36323 = state_36304;
(statearr_36323[(19)] = inst_36217__$1);

return statearr_36323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36304__$1,(22),inst_36218);
} else {
if((state_val_36305 === (31))){
var inst_36302 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36304__$1,inst_36302);
} else {
if((state_val_36305 === (32))){
var inst_36257 = (state_36304[(16)]);
var inst_36262 = inst_36257.cljs$lang$protocol_mask$partition0$;
var inst_36263 = (inst_36262 & (64));
var inst_36264 = inst_36257.cljs$core$ISeq$;
var inst_36265 = (cljs.core.PROTOCOL_SENTINEL === inst_36264);
var inst_36266 = (inst_36263) || (inst_36265);
var state_36304__$1 = state_36304;
if(cljs.core.truth_(inst_36266)){
var statearr_36324_36404 = state_36304__$1;
(statearr_36324_36404[(1)] = (35));

} else {
var statearr_36325_36405 = state_36304__$1;
(statearr_36325_36405[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (40))){
var inst_36279 = (state_36304[(20)]);
var inst_36278 = (state_36304[(2)]);
var inst_36279__$1 = cljs.core.get.call(null,inst_36278,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36280 = cljs.core.get.call(null,inst_36278,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36281 = cljs.core.not_empty.call(null,inst_36279__$1);
var state_36304__$1 = (function (){var statearr_36326 = state_36304;
(statearr_36326[(20)] = inst_36279__$1);

(statearr_36326[(21)] = inst_36280);

return statearr_36326;
})();
if(cljs.core.truth_(inst_36281)){
var statearr_36327_36406 = state_36304__$1;
(statearr_36327_36406[(1)] = (41));

} else {
var statearr_36328_36407 = state_36304__$1;
(statearr_36328_36407[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (33))){
var state_36304__$1 = state_36304;
var statearr_36329_36408 = state_36304__$1;
(statearr_36329_36408[(2)] = false);

(statearr_36329_36408[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (13))){
var inst_36177 = (state_36304[(22)]);
var inst_36181 = cljs.core.chunk_first.call(null,inst_36177);
var inst_36182 = cljs.core.chunk_rest.call(null,inst_36177);
var inst_36183 = cljs.core.count.call(null,inst_36181);
var inst_36164 = inst_36182;
var inst_36165 = inst_36181;
var inst_36166 = inst_36183;
var inst_36167 = (0);
var state_36304__$1 = (function (){var statearr_36330 = state_36304;
(statearr_36330[(7)] = inst_36166);

(statearr_36330[(8)] = inst_36165);

(statearr_36330[(9)] = inst_36167);

(statearr_36330[(10)] = inst_36164);

return statearr_36330;
})();
var statearr_36331_36409 = state_36304__$1;
(statearr_36331_36409[(2)] = null);

(statearr_36331_36409[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (22))){
var inst_36217 = (state_36304[(19)]);
var inst_36221 = (state_36304[(23)]);
var inst_36220 = (state_36304[(24)]);
var inst_36225 = (state_36304[(25)]);
var inst_36220__$1 = (state_36304[(2)]);
var inst_36221__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36220__$1);
var inst_36222 = (function (){var all_files = inst_36217;
var res_SINGLEQUOTE_ = inst_36220__$1;
var res = inst_36221__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36217,inst_36221,inst_36220,inst_36225,inst_36220__$1,inst_36221__$1,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36146_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36146_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36217,inst_36221,inst_36220,inst_36225,inst_36220__$1,inst_36221__$1,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36223 = cljs.core.filter.call(null,inst_36222,inst_36220__$1);
var inst_36224 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36225__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36224);
var inst_36226 = cljs.core.not_empty.call(null,inst_36225__$1);
var state_36304__$1 = (function (){var statearr_36332 = state_36304;
(statearr_36332[(23)] = inst_36221__$1);

(statearr_36332[(26)] = inst_36223);

(statearr_36332[(24)] = inst_36220__$1);

(statearr_36332[(25)] = inst_36225__$1);

return statearr_36332;
})();
if(cljs.core.truth_(inst_36226)){
var statearr_36333_36410 = state_36304__$1;
(statearr_36333_36410[(1)] = (23));

} else {
var statearr_36334_36411 = state_36304__$1;
(statearr_36334_36411[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (36))){
var state_36304__$1 = state_36304;
var statearr_36335_36412 = state_36304__$1;
(statearr_36335_36412[(2)] = false);

(statearr_36335_36412[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (41))){
var inst_36279 = (state_36304[(20)]);
var inst_36283 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36284 = cljs.core.map.call(null,inst_36283,inst_36279);
var inst_36285 = cljs.core.pr_str.call(null,inst_36284);
var inst_36286 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36285)].join('');
var inst_36287 = figwheel.client.utils.log.call(null,inst_36286);
var state_36304__$1 = state_36304;
var statearr_36336_36413 = state_36304__$1;
(statearr_36336_36413[(2)] = inst_36287);

(statearr_36336_36413[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (43))){
var inst_36280 = (state_36304[(21)]);
var inst_36290 = (state_36304[(2)]);
var inst_36291 = cljs.core.not_empty.call(null,inst_36280);
var state_36304__$1 = (function (){var statearr_36337 = state_36304;
(statearr_36337[(27)] = inst_36290);

return statearr_36337;
})();
if(cljs.core.truth_(inst_36291)){
var statearr_36338_36414 = state_36304__$1;
(statearr_36338_36414[(1)] = (44));

} else {
var statearr_36339_36415 = state_36304__$1;
(statearr_36339_36415[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (29))){
var inst_36217 = (state_36304[(19)]);
var inst_36221 = (state_36304[(23)]);
var inst_36223 = (state_36304[(26)]);
var inst_36257 = (state_36304[(16)]);
var inst_36220 = (state_36304[(24)]);
var inst_36225 = (state_36304[(25)]);
var inst_36253 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36256 = (function (){var all_files = inst_36217;
var res_SINGLEQUOTE_ = inst_36220;
var res = inst_36221;
var files_not_loaded = inst_36223;
var dependencies_that_loaded = inst_36225;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36217,inst_36221,inst_36223,inst_36257,inst_36220,inst_36225,inst_36253,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36255){
var map__36340 = p__36255;
var map__36340__$1 = ((((!((map__36340 == null)))?((((map__36340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36340):map__36340);
var namespace = cljs.core.get.call(null,map__36340__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36217,inst_36221,inst_36223,inst_36257,inst_36220,inst_36225,inst_36253,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36257__$1 = cljs.core.group_by.call(null,inst_36256,inst_36223);
var inst_36259 = (inst_36257__$1 == null);
var inst_36260 = cljs.core.not.call(null,inst_36259);
var state_36304__$1 = (function (){var statearr_36342 = state_36304;
(statearr_36342[(28)] = inst_36253);

(statearr_36342[(16)] = inst_36257__$1);

return statearr_36342;
})();
if(inst_36260){
var statearr_36343_36416 = state_36304__$1;
(statearr_36343_36416[(1)] = (32));

} else {
var statearr_36344_36417 = state_36304__$1;
(statearr_36344_36417[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (44))){
var inst_36280 = (state_36304[(21)]);
var inst_36293 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36280);
var inst_36294 = cljs.core.pr_str.call(null,inst_36293);
var inst_36295 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36294)].join('');
var inst_36296 = figwheel.client.utils.log.call(null,inst_36295);
var state_36304__$1 = state_36304;
var statearr_36345_36418 = state_36304__$1;
(statearr_36345_36418[(2)] = inst_36296);

(statearr_36345_36418[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (6))){
var inst_36198 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
var statearr_36346_36419 = state_36304__$1;
(statearr_36346_36419[(2)] = inst_36198);

(statearr_36346_36419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (28))){
var inst_36223 = (state_36304[(26)]);
var inst_36250 = (state_36304[(2)]);
var inst_36251 = cljs.core.not_empty.call(null,inst_36223);
var state_36304__$1 = (function (){var statearr_36347 = state_36304;
(statearr_36347[(29)] = inst_36250);

return statearr_36347;
})();
if(cljs.core.truth_(inst_36251)){
var statearr_36348_36420 = state_36304__$1;
(statearr_36348_36420[(1)] = (29));

} else {
var statearr_36349_36421 = state_36304__$1;
(statearr_36349_36421[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (25))){
var inst_36221 = (state_36304[(23)]);
var inst_36237 = (state_36304[(2)]);
var inst_36238 = cljs.core.not_empty.call(null,inst_36221);
var state_36304__$1 = (function (){var statearr_36350 = state_36304;
(statearr_36350[(30)] = inst_36237);

return statearr_36350;
})();
if(cljs.core.truth_(inst_36238)){
var statearr_36351_36422 = state_36304__$1;
(statearr_36351_36422[(1)] = (26));

} else {
var statearr_36352_36423 = state_36304__$1;
(statearr_36352_36423[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (34))){
var inst_36273 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
if(cljs.core.truth_(inst_36273)){
var statearr_36353_36424 = state_36304__$1;
(statearr_36353_36424[(1)] = (38));

} else {
var statearr_36354_36425 = state_36304__$1;
(statearr_36354_36425[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (17))){
var state_36304__$1 = state_36304;
var statearr_36355_36426 = state_36304__$1;
(statearr_36355_36426[(2)] = recompile_dependents);

(statearr_36355_36426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (3))){
var state_36304__$1 = state_36304;
var statearr_36356_36427 = state_36304__$1;
(statearr_36356_36427[(2)] = null);

(statearr_36356_36427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (12))){
var inst_36194 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
var statearr_36357_36428 = state_36304__$1;
(statearr_36357_36428[(2)] = inst_36194);

(statearr_36357_36428[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (2))){
var inst_36156 = (state_36304[(13)]);
var inst_36163 = cljs.core.seq.call(null,inst_36156);
var inst_36164 = inst_36163;
var inst_36165 = null;
var inst_36166 = (0);
var inst_36167 = (0);
var state_36304__$1 = (function (){var statearr_36358 = state_36304;
(statearr_36358[(7)] = inst_36166);

(statearr_36358[(8)] = inst_36165);

(statearr_36358[(9)] = inst_36167);

(statearr_36358[(10)] = inst_36164);

return statearr_36358;
})();
var statearr_36359_36429 = state_36304__$1;
(statearr_36359_36429[(2)] = null);

(statearr_36359_36429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (23))){
var inst_36217 = (state_36304[(19)]);
var inst_36221 = (state_36304[(23)]);
var inst_36223 = (state_36304[(26)]);
var inst_36220 = (state_36304[(24)]);
var inst_36225 = (state_36304[(25)]);
var inst_36228 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36230 = (function (){var all_files = inst_36217;
var res_SINGLEQUOTE_ = inst_36220;
var res = inst_36221;
var files_not_loaded = inst_36223;
var dependencies_that_loaded = inst_36225;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36217,inst_36221,inst_36223,inst_36220,inst_36225,inst_36228,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36229){
var map__36360 = p__36229;
var map__36360__$1 = ((((!((map__36360 == null)))?((((map__36360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36360):map__36360);
var request_url = cljs.core.get.call(null,map__36360__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36217,inst_36221,inst_36223,inst_36220,inst_36225,inst_36228,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36231 = cljs.core.reverse.call(null,inst_36225);
var inst_36232 = cljs.core.map.call(null,inst_36230,inst_36231);
var inst_36233 = cljs.core.pr_str.call(null,inst_36232);
var inst_36234 = figwheel.client.utils.log.call(null,inst_36233);
var state_36304__$1 = (function (){var statearr_36362 = state_36304;
(statearr_36362[(31)] = inst_36228);

return statearr_36362;
})();
var statearr_36363_36430 = state_36304__$1;
(statearr_36363_36430[(2)] = inst_36234);

(statearr_36363_36430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (35))){
var state_36304__$1 = state_36304;
var statearr_36364_36431 = state_36304__$1;
(statearr_36364_36431[(2)] = true);

(statearr_36364_36431[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (19))){
var inst_36207 = (state_36304[(12)]);
var inst_36213 = figwheel.client.file_reloading.expand_files.call(null,inst_36207);
var state_36304__$1 = state_36304;
var statearr_36365_36432 = state_36304__$1;
(statearr_36365_36432[(2)] = inst_36213);

(statearr_36365_36432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (11))){
var state_36304__$1 = state_36304;
var statearr_36366_36433 = state_36304__$1;
(statearr_36366_36433[(2)] = null);

(statearr_36366_36433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (9))){
var inst_36196 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
var statearr_36367_36434 = state_36304__$1;
(statearr_36367_36434[(2)] = inst_36196);

(statearr_36367_36434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (5))){
var inst_36166 = (state_36304[(7)]);
var inst_36167 = (state_36304[(9)]);
var inst_36169 = (inst_36167 < inst_36166);
var inst_36170 = inst_36169;
var state_36304__$1 = state_36304;
if(cljs.core.truth_(inst_36170)){
var statearr_36368_36435 = state_36304__$1;
(statearr_36368_36435[(1)] = (7));

} else {
var statearr_36369_36436 = state_36304__$1;
(statearr_36369_36436[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (14))){
var inst_36177 = (state_36304[(22)]);
var inst_36186 = cljs.core.first.call(null,inst_36177);
var inst_36187 = figwheel.client.file_reloading.eval_body.call(null,inst_36186,opts);
var inst_36188 = cljs.core.next.call(null,inst_36177);
var inst_36164 = inst_36188;
var inst_36165 = null;
var inst_36166 = (0);
var inst_36167 = (0);
var state_36304__$1 = (function (){var statearr_36370 = state_36304;
(statearr_36370[(7)] = inst_36166);

(statearr_36370[(8)] = inst_36165);

(statearr_36370[(9)] = inst_36167);

(statearr_36370[(32)] = inst_36187);

(statearr_36370[(10)] = inst_36164);

return statearr_36370;
})();
var statearr_36371_36437 = state_36304__$1;
(statearr_36371_36437[(2)] = null);

(statearr_36371_36437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (45))){
var state_36304__$1 = state_36304;
var statearr_36372_36438 = state_36304__$1;
(statearr_36372_36438[(2)] = null);

(statearr_36372_36438[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (26))){
var inst_36217 = (state_36304[(19)]);
var inst_36221 = (state_36304[(23)]);
var inst_36223 = (state_36304[(26)]);
var inst_36220 = (state_36304[(24)]);
var inst_36225 = (state_36304[(25)]);
var inst_36240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36242 = (function (){var all_files = inst_36217;
var res_SINGLEQUOTE_ = inst_36220;
var res = inst_36221;
var files_not_loaded = inst_36223;
var dependencies_that_loaded = inst_36225;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36217,inst_36221,inst_36223,inst_36220,inst_36225,inst_36240,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36241){
var map__36373 = p__36241;
var map__36373__$1 = ((((!((map__36373 == null)))?((((map__36373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373):map__36373);
var namespace = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36217,inst_36221,inst_36223,inst_36220,inst_36225,inst_36240,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36243 = cljs.core.map.call(null,inst_36242,inst_36221);
var inst_36244 = cljs.core.pr_str.call(null,inst_36243);
var inst_36245 = figwheel.client.utils.log.call(null,inst_36244);
var inst_36246 = (function (){var all_files = inst_36217;
var res_SINGLEQUOTE_ = inst_36220;
var res = inst_36221;
var files_not_loaded = inst_36223;
var dependencies_that_loaded = inst_36225;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36217,inst_36221,inst_36223,inst_36220,inst_36225,inst_36240,inst_36242,inst_36243,inst_36244,inst_36245,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36217,inst_36221,inst_36223,inst_36220,inst_36225,inst_36240,inst_36242,inst_36243,inst_36244,inst_36245,state_val_36305,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36247 = setTimeout(inst_36246,(10));
var state_36304__$1 = (function (){var statearr_36375 = state_36304;
(statearr_36375[(33)] = inst_36245);

(statearr_36375[(34)] = inst_36240);

return statearr_36375;
})();
var statearr_36376_36439 = state_36304__$1;
(statearr_36376_36439[(2)] = inst_36247);

(statearr_36376_36439[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (16))){
var state_36304__$1 = state_36304;
var statearr_36377_36440 = state_36304__$1;
(statearr_36377_36440[(2)] = reload_dependents);

(statearr_36377_36440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (38))){
var inst_36257 = (state_36304[(16)]);
var inst_36275 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36257);
var state_36304__$1 = state_36304;
var statearr_36378_36441 = state_36304__$1;
(statearr_36378_36441[(2)] = inst_36275);

(statearr_36378_36441[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (30))){
var state_36304__$1 = state_36304;
var statearr_36379_36442 = state_36304__$1;
(statearr_36379_36442[(2)] = null);

(statearr_36379_36442[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (10))){
var inst_36177 = (state_36304[(22)]);
var inst_36179 = cljs.core.chunked_seq_QMARK_.call(null,inst_36177);
var state_36304__$1 = state_36304;
if(inst_36179){
var statearr_36380_36443 = state_36304__$1;
(statearr_36380_36443[(1)] = (13));

} else {
var statearr_36381_36444 = state_36304__$1;
(statearr_36381_36444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (18))){
var inst_36211 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
if(cljs.core.truth_(inst_36211)){
var statearr_36382_36445 = state_36304__$1;
(statearr_36382_36445[(1)] = (19));

} else {
var statearr_36383_36446 = state_36304__$1;
(statearr_36383_36446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (42))){
var state_36304__$1 = state_36304;
var statearr_36384_36447 = state_36304__$1;
(statearr_36384_36447[(2)] = null);

(statearr_36384_36447[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (37))){
var inst_36270 = (state_36304[(2)]);
var state_36304__$1 = state_36304;
var statearr_36385_36448 = state_36304__$1;
(statearr_36385_36448[(2)] = inst_36270);

(statearr_36385_36448[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36305 === (8))){
var inst_36177 = (state_36304[(22)]);
var inst_36164 = (state_36304[(10)]);
var inst_36177__$1 = cljs.core.seq.call(null,inst_36164);
var state_36304__$1 = (function (){var statearr_36386 = state_36304;
(statearr_36386[(22)] = inst_36177__$1);

return statearr_36386;
})();
if(inst_36177__$1){
var statearr_36387_36449 = state_36304__$1;
(statearr_36387_36449[(1)] = (10));

} else {
var statearr_36388_36450 = state_36304__$1;
(statearr_36388_36450[(1)] = (11));

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
});})(c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32542__auto__,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto____0 = (function (){
var statearr_36389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36389[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto__);

(statearr_36389[(1)] = (1));

return statearr_36389;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto____1 = (function (state_36304){
while(true){
var ret_value__32544__auto__ = (function (){try{while(true){
var result__32545__auto__ = switch__32542__auto__.call(null,state_36304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32545__auto__;
}
break;
}
}catch (e36390){if((e36390 instanceof Object)){
var ex__32546__auto__ = e36390;
var statearr_36391_36451 = state_36304;
(statearr_36391_36451[(5)] = ex__32546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36452 = state_36304;
state_36304 = G__36452;
continue;
} else {
return ret_value__32544__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto__ = function(state_36304){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto____1.call(this,state_36304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32543__auto__;
})()
;})(switch__32542__auto__,c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32632__auto__ = (function (){var statearr_36392 = f__32631__auto__.call(null);
(statearr_36392[(6)] = c__32630__auto__);

return statearr_36392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32632__auto__);
});})(c__32630__auto__,map__36149,map__36149__$1,opts,before_jsload,on_jsload,reload_dependents,map__36150,map__36150__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32630__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36455,link){
var map__36456 = p__36455;
var map__36456__$1 = ((((!((map__36456 == null)))?((((map__36456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36456):map__36456);
var file = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36456,map__36456__$1,file){
return (function (p1__36453_SHARP_,p2__36454_SHARP_){
if(cljs.core._EQ_.call(null,p1__36453_SHARP_,p2__36454_SHARP_)){
return p1__36453_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36456,map__36456__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36459){
var map__36460 = p__36459;
var map__36460__$1 = ((((!((map__36460 == null)))?((((map__36460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36460):map__36460);
var match_length = cljs.core.get.call(null,map__36460__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36460__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36458_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36458_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36462_SHARP_,p2__36463_SHARP_){
return cljs.core.assoc.call(null,p1__36462_SHARP_,cljs.core.get.call(null,p2__36463_SHARP_,key),p2__36463_SHARP_);
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
var loaded_f_datas_36464 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36464);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36464);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36465,p__36466){
var map__36467 = p__36465;
var map__36467__$1 = ((((!((map__36467 == null)))?((((map__36467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36467):map__36467);
var on_cssload = cljs.core.get.call(null,map__36467__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36468 = p__36466;
var map__36468__$1 = ((((!((map__36468 == null)))?((((map__36468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36468):map__36468);
var files_msg = map__36468__$1;
var files = cljs.core.get.call(null,map__36468__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1517031114674
