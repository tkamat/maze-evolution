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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38984_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38984_SHARP_));
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
var seq__38985 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38986 = null;
var count__38987 = (0);
var i__38988 = (0);
while(true){
if((i__38988 < count__38987)){
var n = cljs.core._nth.call(null,chunk__38986,i__38988);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38989 = seq__38985;
var G__38990 = chunk__38986;
var G__38991 = count__38987;
var G__38992 = (i__38988 + (1));
seq__38985 = G__38989;
chunk__38986 = G__38990;
count__38987 = G__38991;
i__38988 = G__38992;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38985);
if(temp__4657__auto__){
var seq__38985__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38985__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__38985__$1);
var G__38993 = cljs.core.chunk_rest.call(null,seq__38985__$1);
var G__38994 = c__37147__auto__;
var G__38995 = cljs.core.count.call(null,c__37147__auto__);
var G__38996 = (0);
seq__38985 = G__38993;
chunk__38986 = G__38994;
count__38987 = G__38995;
i__38988 = G__38996;
continue;
} else {
var n = cljs.core.first.call(null,seq__38985__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38997 = cljs.core.next.call(null,seq__38985__$1);
var G__38998 = null;
var G__38999 = (0);
var G__39000 = (0);
seq__38985 = G__38997;
chunk__38986 = G__38998;
count__38987 = G__38999;
i__38988 = G__39000;
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
return cljs.core.some.call(null,(function (p__39001){
var vec__39002 = p__39001;
var _ = cljs.core.nth.call(null,vec__39002,(0),null);
var v = cljs.core.nth.call(null,vec__39002,(1),null);
var and__36296__auto__ = v;
if(cljs.core.truth_(and__36296__auto__)){
return v.call(null,dep);
} else {
return and__36296__auto__;
}
}),cljs.core.filter.call(null,(function (p__39005){
var vec__39006 = p__39005;
var k = cljs.core.nth.call(null,vec__39006,(0),null);
var v = cljs.core.nth.call(null,vec__39006,(1),null);
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

var seq__39018_39026 = cljs.core.seq.call(null,deps);
var chunk__39019_39027 = null;
var count__39020_39028 = (0);
var i__39021_39029 = (0);
while(true){
if((i__39021_39029 < count__39020_39028)){
var dep_39030 = cljs.core._nth.call(null,chunk__39019_39027,i__39021_39029);
if(cljs.core.truth_((function (){var and__36296__auto__ = dep_39030;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39030));
} else {
return and__36296__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39030,(depth + (1)),state);
} else {
}

var G__39031 = seq__39018_39026;
var G__39032 = chunk__39019_39027;
var G__39033 = count__39020_39028;
var G__39034 = (i__39021_39029 + (1));
seq__39018_39026 = G__39031;
chunk__39019_39027 = G__39032;
count__39020_39028 = G__39033;
i__39021_39029 = G__39034;
continue;
} else {
var temp__4657__auto___39035 = cljs.core.seq.call(null,seq__39018_39026);
if(temp__4657__auto___39035){
var seq__39018_39036__$1 = temp__4657__auto___39035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39018_39036__$1)){
var c__37147__auto___39037 = cljs.core.chunk_first.call(null,seq__39018_39036__$1);
var G__39038 = cljs.core.chunk_rest.call(null,seq__39018_39036__$1);
var G__39039 = c__37147__auto___39037;
var G__39040 = cljs.core.count.call(null,c__37147__auto___39037);
var G__39041 = (0);
seq__39018_39026 = G__39038;
chunk__39019_39027 = G__39039;
count__39020_39028 = G__39040;
i__39021_39029 = G__39041;
continue;
} else {
var dep_39042 = cljs.core.first.call(null,seq__39018_39036__$1);
if(cljs.core.truth_((function (){var and__36296__auto__ = dep_39042;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39042));
} else {
return and__36296__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39042,(depth + (1)),state);
} else {
}

var G__39043 = cljs.core.next.call(null,seq__39018_39036__$1);
var G__39044 = null;
var G__39045 = (0);
var G__39046 = (0);
seq__39018_39026 = G__39043;
chunk__39019_39027 = G__39044;
count__39020_39028 = G__39045;
i__39021_39029 = G__39046;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39022){
var vec__39023 = p__39022;
var seq__39024 = cljs.core.seq.call(null,vec__39023);
var first__39025 = cljs.core.first.call(null,seq__39024);
var seq__39024__$1 = cljs.core.next.call(null,seq__39024);
var x = first__39025;
var xs = seq__39024__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39023,seq__39024,first__39025,seq__39024__$1,x,xs,get_deps__$1){
return (function (p1__39009_SHARP_){
return clojure.set.difference.call(null,p1__39009_SHARP_,x);
});})(vec__39023,seq__39024,first__39025,seq__39024__$1,x,xs,get_deps__$1))
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
var seq__39047 = cljs.core.seq.call(null,provides);
var chunk__39048 = null;
var count__39049 = (0);
var i__39050 = (0);
while(true){
if((i__39050 < count__39049)){
var prov = cljs.core._nth.call(null,chunk__39048,i__39050);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39051_39059 = cljs.core.seq.call(null,requires);
var chunk__39052_39060 = null;
var count__39053_39061 = (0);
var i__39054_39062 = (0);
while(true){
if((i__39054_39062 < count__39053_39061)){
var req_39063 = cljs.core._nth.call(null,chunk__39052_39060,i__39054_39062);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39063,prov);

var G__39064 = seq__39051_39059;
var G__39065 = chunk__39052_39060;
var G__39066 = count__39053_39061;
var G__39067 = (i__39054_39062 + (1));
seq__39051_39059 = G__39064;
chunk__39052_39060 = G__39065;
count__39053_39061 = G__39066;
i__39054_39062 = G__39067;
continue;
} else {
var temp__4657__auto___39068 = cljs.core.seq.call(null,seq__39051_39059);
if(temp__4657__auto___39068){
var seq__39051_39069__$1 = temp__4657__auto___39068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39051_39069__$1)){
var c__37147__auto___39070 = cljs.core.chunk_first.call(null,seq__39051_39069__$1);
var G__39071 = cljs.core.chunk_rest.call(null,seq__39051_39069__$1);
var G__39072 = c__37147__auto___39070;
var G__39073 = cljs.core.count.call(null,c__37147__auto___39070);
var G__39074 = (0);
seq__39051_39059 = G__39071;
chunk__39052_39060 = G__39072;
count__39053_39061 = G__39073;
i__39054_39062 = G__39074;
continue;
} else {
var req_39075 = cljs.core.first.call(null,seq__39051_39069__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39075,prov);

var G__39076 = cljs.core.next.call(null,seq__39051_39069__$1);
var G__39077 = null;
var G__39078 = (0);
var G__39079 = (0);
seq__39051_39059 = G__39076;
chunk__39052_39060 = G__39077;
count__39053_39061 = G__39078;
i__39054_39062 = G__39079;
continue;
}
} else {
}
}
break;
}

var G__39080 = seq__39047;
var G__39081 = chunk__39048;
var G__39082 = count__39049;
var G__39083 = (i__39050 + (1));
seq__39047 = G__39080;
chunk__39048 = G__39081;
count__39049 = G__39082;
i__39050 = G__39083;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39047);
if(temp__4657__auto__){
var seq__39047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39047__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__39047__$1);
var G__39084 = cljs.core.chunk_rest.call(null,seq__39047__$1);
var G__39085 = c__37147__auto__;
var G__39086 = cljs.core.count.call(null,c__37147__auto__);
var G__39087 = (0);
seq__39047 = G__39084;
chunk__39048 = G__39085;
count__39049 = G__39086;
i__39050 = G__39087;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39047__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39055_39088 = cljs.core.seq.call(null,requires);
var chunk__39056_39089 = null;
var count__39057_39090 = (0);
var i__39058_39091 = (0);
while(true){
if((i__39058_39091 < count__39057_39090)){
var req_39092 = cljs.core._nth.call(null,chunk__39056_39089,i__39058_39091);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39092,prov);

var G__39093 = seq__39055_39088;
var G__39094 = chunk__39056_39089;
var G__39095 = count__39057_39090;
var G__39096 = (i__39058_39091 + (1));
seq__39055_39088 = G__39093;
chunk__39056_39089 = G__39094;
count__39057_39090 = G__39095;
i__39058_39091 = G__39096;
continue;
} else {
var temp__4657__auto___39097__$1 = cljs.core.seq.call(null,seq__39055_39088);
if(temp__4657__auto___39097__$1){
var seq__39055_39098__$1 = temp__4657__auto___39097__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39055_39098__$1)){
var c__37147__auto___39099 = cljs.core.chunk_first.call(null,seq__39055_39098__$1);
var G__39100 = cljs.core.chunk_rest.call(null,seq__39055_39098__$1);
var G__39101 = c__37147__auto___39099;
var G__39102 = cljs.core.count.call(null,c__37147__auto___39099);
var G__39103 = (0);
seq__39055_39088 = G__39100;
chunk__39056_39089 = G__39101;
count__39057_39090 = G__39102;
i__39058_39091 = G__39103;
continue;
} else {
var req_39104 = cljs.core.first.call(null,seq__39055_39098__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39104,prov);

var G__39105 = cljs.core.next.call(null,seq__39055_39098__$1);
var G__39106 = null;
var G__39107 = (0);
var G__39108 = (0);
seq__39055_39088 = G__39105;
chunk__39056_39089 = G__39106;
count__39057_39090 = G__39107;
i__39058_39091 = G__39108;
continue;
}
} else {
}
}
break;
}

var G__39109 = cljs.core.next.call(null,seq__39047__$1);
var G__39110 = null;
var G__39111 = (0);
var G__39112 = (0);
seq__39047 = G__39109;
chunk__39048 = G__39110;
count__39049 = G__39111;
i__39050 = G__39112;
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
var seq__39113_39117 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39114_39118 = null;
var count__39115_39119 = (0);
var i__39116_39120 = (0);
while(true){
if((i__39116_39120 < count__39115_39119)){
var ns_39121 = cljs.core._nth.call(null,chunk__39114_39118,i__39116_39120);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39121);

var G__39122 = seq__39113_39117;
var G__39123 = chunk__39114_39118;
var G__39124 = count__39115_39119;
var G__39125 = (i__39116_39120 + (1));
seq__39113_39117 = G__39122;
chunk__39114_39118 = G__39123;
count__39115_39119 = G__39124;
i__39116_39120 = G__39125;
continue;
} else {
var temp__4657__auto___39126 = cljs.core.seq.call(null,seq__39113_39117);
if(temp__4657__auto___39126){
var seq__39113_39127__$1 = temp__4657__auto___39126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39113_39127__$1)){
var c__37147__auto___39128 = cljs.core.chunk_first.call(null,seq__39113_39127__$1);
var G__39129 = cljs.core.chunk_rest.call(null,seq__39113_39127__$1);
var G__39130 = c__37147__auto___39128;
var G__39131 = cljs.core.count.call(null,c__37147__auto___39128);
var G__39132 = (0);
seq__39113_39117 = G__39129;
chunk__39114_39118 = G__39130;
count__39115_39119 = G__39131;
i__39116_39120 = G__39132;
continue;
} else {
var ns_39133 = cljs.core.first.call(null,seq__39113_39127__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39133);

var G__39134 = cljs.core.next.call(null,seq__39113_39127__$1);
var G__39135 = null;
var G__39136 = (0);
var G__39137 = (0);
seq__39113_39117 = G__39134;
chunk__39114_39118 = G__39135;
count__39115_39119 = G__39136;
i__39116_39120 = G__39137;
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
var G__39138__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39139__i = 0, G__39139__a = new Array(arguments.length -  0);
while (G__39139__i < G__39139__a.length) {G__39139__a[G__39139__i] = arguments[G__39139__i + 0]; ++G__39139__i;}
  args = new cljs.core.IndexedSeq(G__39139__a,0,null);
} 
return G__39138__delegate.call(this,args);};
G__39138.cljs$lang$maxFixedArity = 0;
G__39138.cljs$lang$applyTo = (function (arglist__39140){
var args = cljs.core.seq(arglist__39140);
return G__39138__delegate(args);
});
G__39138.cljs$core$IFn$_invoke$arity$variadic = G__39138__delegate;
return G__39138;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__39141_SHARP_,p2__39142_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39141_SHARP_)].join('')),p2__39142_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__39143_SHARP_,p2__39144_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39143_SHARP_)].join(''),p2__39144_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__39145 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39145.addCallback(((function (G__39145){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39145))
);

G__39145.addErrback(((function (G__39145){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39145))
);

return G__39145;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39146){if((e39146 instanceof Error)){
var e = e39146;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39146;

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
}catch (e39147){if((e39147 instanceof Error)){
var e = e39147;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39147;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39148 = cljs.core._EQ_;
var expr__39149 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39148.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39149))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39148.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39149))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39148.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39149))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__39148,expr__39149){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39148,expr__39149))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39151,callback){
var map__39152 = p__39151;
var map__39152__$1 = ((((!((map__39152 == null)))?((((map__39152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39152):map__39152);
var file_msg = map__39152__$1;
var request_url = cljs.core.get.call(null,map__39152__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__36308__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__39152,map__39152__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39152,map__39152__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__38905__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto__){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto__){
return (function (state_39192){
var state_val_39193 = (state_39192[(1)]);
if((state_val_39193 === (7))){
var inst_39188 = (state_39192[(2)]);
var state_39192__$1 = state_39192;
var statearr_39194_39221 = state_39192__$1;
(statearr_39194_39221[(2)] = inst_39188);

(statearr_39194_39221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (1))){
var state_39192__$1 = state_39192;
var statearr_39195_39222 = state_39192__$1;
(statearr_39195_39222[(2)] = null);

(statearr_39195_39222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (4))){
var inst_39156 = (state_39192[(7)]);
var inst_39156__$1 = (state_39192[(2)]);
var state_39192__$1 = (function (){var statearr_39196 = state_39192;
(statearr_39196[(7)] = inst_39156__$1);

return statearr_39196;
})();
if(cljs.core.truth_(inst_39156__$1)){
var statearr_39197_39223 = state_39192__$1;
(statearr_39197_39223[(1)] = (5));

} else {
var statearr_39198_39224 = state_39192__$1;
(statearr_39198_39224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (15))){
var inst_39173 = (state_39192[(8)]);
var inst_39170 = (state_39192[(9)]);
var inst_39175 = inst_39173.call(null,inst_39170);
var state_39192__$1 = state_39192;
var statearr_39199_39225 = state_39192__$1;
(statearr_39199_39225[(2)] = inst_39175);

(statearr_39199_39225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (13))){
var inst_39182 = (state_39192[(2)]);
var state_39192__$1 = state_39192;
var statearr_39200_39226 = state_39192__$1;
(statearr_39200_39226[(2)] = inst_39182);

(statearr_39200_39226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (6))){
var state_39192__$1 = state_39192;
var statearr_39201_39227 = state_39192__$1;
(statearr_39201_39227[(2)] = null);

(statearr_39201_39227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (17))){
var inst_39179 = (state_39192[(2)]);
var state_39192__$1 = state_39192;
var statearr_39202_39228 = state_39192__$1;
(statearr_39202_39228[(2)] = inst_39179);

(statearr_39202_39228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (3))){
var inst_39190 = (state_39192[(2)]);
var state_39192__$1 = state_39192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39192__$1,inst_39190);
} else {
if((state_val_39193 === (12))){
var state_39192__$1 = state_39192;
var statearr_39203_39229 = state_39192__$1;
(statearr_39203_39229[(2)] = null);

(statearr_39203_39229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (2))){
var state_39192__$1 = state_39192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39192__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39193 === (11))){
var inst_39161 = (state_39192[(10)]);
var inst_39168 = figwheel.client.file_reloading.blocking_load.call(null,inst_39161);
var state_39192__$1 = state_39192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39192__$1,(14),inst_39168);
} else {
if((state_val_39193 === (9))){
var inst_39161 = (state_39192[(10)]);
var state_39192__$1 = state_39192;
if(cljs.core.truth_(inst_39161)){
var statearr_39204_39230 = state_39192__$1;
(statearr_39204_39230[(1)] = (11));

} else {
var statearr_39205_39231 = state_39192__$1;
(statearr_39205_39231[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (5))){
var inst_39156 = (state_39192[(7)]);
var inst_39162 = (state_39192[(11)]);
var inst_39161 = cljs.core.nth.call(null,inst_39156,(0),null);
var inst_39162__$1 = cljs.core.nth.call(null,inst_39156,(1),null);
var state_39192__$1 = (function (){var statearr_39206 = state_39192;
(statearr_39206[(11)] = inst_39162__$1);

(statearr_39206[(10)] = inst_39161);

return statearr_39206;
})();
if(cljs.core.truth_(inst_39162__$1)){
var statearr_39207_39232 = state_39192__$1;
(statearr_39207_39232[(1)] = (8));

} else {
var statearr_39208_39233 = state_39192__$1;
(statearr_39208_39233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (14))){
var inst_39173 = (state_39192[(8)]);
var inst_39161 = (state_39192[(10)]);
var inst_39170 = (state_39192[(2)]);
var inst_39171 = console.log("Loading!",inst_39161);
var inst_39172 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39173__$1 = cljs.core.get.call(null,inst_39172,inst_39161);
var state_39192__$1 = (function (){var statearr_39209 = state_39192;
(statearr_39209[(8)] = inst_39173__$1);

(statearr_39209[(12)] = inst_39171);

(statearr_39209[(9)] = inst_39170);

return statearr_39209;
})();
if(cljs.core.truth_(inst_39173__$1)){
var statearr_39210_39234 = state_39192__$1;
(statearr_39210_39234[(1)] = (15));

} else {
var statearr_39211_39235 = state_39192__$1;
(statearr_39211_39235[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (16))){
var inst_39170 = (state_39192[(9)]);
var inst_39177 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39170);
var state_39192__$1 = state_39192;
var statearr_39212_39236 = state_39192__$1;
(statearr_39212_39236[(2)] = inst_39177);

(statearr_39212_39236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (10))){
var inst_39184 = (state_39192[(2)]);
var state_39192__$1 = (function (){var statearr_39213 = state_39192;
(statearr_39213[(13)] = inst_39184);

return statearr_39213;
})();
var statearr_39214_39237 = state_39192__$1;
(statearr_39214_39237[(2)] = null);

(statearr_39214_39237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39193 === (8))){
var inst_39162 = (state_39192[(11)]);
var inst_39164 = console.log("Evaling!",inst_39162);
var inst_39165 = eval(inst_39162);
var state_39192__$1 = (function (){var statearr_39215 = state_39192;
(statearr_39215[(14)] = inst_39164);

return statearr_39215;
})();
var statearr_39216_39238 = state_39192__$1;
(statearr_39216_39238[(2)] = inst_39165);

(statearr_39216_39238[(1)] = (10));


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
});})(c__38905__auto__))
;
return ((function (switch__38884__auto__,c__38905__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38885__auto__ = null;
var figwheel$client$file_reloading$state_machine__38885__auto____0 = (function (){
var statearr_39217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39217[(0)] = figwheel$client$file_reloading$state_machine__38885__auto__);

(statearr_39217[(1)] = (1));

return statearr_39217;
});
var figwheel$client$file_reloading$state_machine__38885__auto____1 = (function (state_39192){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_39192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e39218){if((e39218 instanceof Object)){
var ex__38888__auto__ = e39218;
var statearr_39219_39239 = state_39192;
(statearr_39219_39239[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39240 = state_39192;
state_39192 = G__39240;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38885__auto__ = function(state_39192){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38885__auto____1.call(this,state_39192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38885__auto____0;
figwheel$client$file_reloading$state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38885__auto____1;
return figwheel$client$file_reloading$state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto__))
})();
var state__38907__auto__ = (function (){var statearr_39220 = f__38906__auto__.call(null);
(statearr_39220[(6)] = c__38905__auto__);

return statearr_39220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto__))
);

return c__38905__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__39242 = arguments.length;
switch (G__39242) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39244,callback){
var map__39245 = p__39244;
var map__39245__$1 = ((((!((map__39245 == null)))?((((map__39245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39245):map__39245);
var file_msg = map__39245__$1;
var namespace = cljs.core.get.call(null,map__39245__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39245,map__39245__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39245,map__39245__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39247){
var map__39248 = p__39247;
var map__39248__$1 = ((((!((map__39248 == null)))?((((map__39248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39248):map__39248);
var file_msg = map__39248__$1;
var namespace = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39250){
var map__39251 = p__39250;
var map__39251__$1 = ((((!((map__39251 == null)))?((((map__39251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39251):map__39251);
var file_msg = map__39251__$1;
var namespace = cljs.core.get.call(null,map__39251__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39253,callback){
var map__39254 = p__39253;
var map__39254__$1 = ((((!((map__39254 == null)))?((((map__39254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39254):map__39254);
var file_msg = map__39254__$1;
var request_url = cljs.core.get.call(null,map__39254__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39254__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__38905__auto___39304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto___39304,out){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto___39304,out){
return (function (state_39289){
var state_val_39290 = (state_39289[(1)]);
if((state_val_39290 === (1))){
var inst_39263 = cljs.core.seq.call(null,files);
var inst_39264 = cljs.core.first.call(null,inst_39263);
var inst_39265 = cljs.core.next.call(null,inst_39263);
var inst_39266 = files;
var state_39289__$1 = (function (){var statearr_39291 = state_39289;
(statearr_39291[(7)] = inst_39266);

(statearr_39291[(8)] = inst_39264);

(statearr_39291[(9)] = inst_39265);

return statearr_39291;
})();
var statearr_39292_39305 = state_39289__$1;
(statearr_39292_39305[(2)] = null);

(statearr_39292_39305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39290 === (2))){
var inst_39266 = (state_39289[(7)]);
var inst_39272 = (state_39289[(10)]);
var inst_39271 = cljs.core.seq.call(null,inst_39266);
var inst_39272__$1 = cljs.core.first.call(null,inst_39271);
var inst_39273 = cljs.core.next.call(null,inst_39271);
var inst_39274 = (inst_39272__$1 == null);
var inst_39275 = cljs.core.not.call(null,inst_39274);
var state_39289__$1 = (function (){var statearr_39293 = state_39289;
(statearr_39293[(11)] = inst_39273);

(statearr_39293[(10)] = inst_39272__$1);

return statearr_39293;
})();
if(inst_39275){
var statearr_39294_39306 = state_39289__$1;
(statearr_39294_39306[(1)] = (4));

} else {
var statearr_39295_39307 = state_39289__$1;
(statearr_39295_39307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39290 === (3))){
var inst_39287 = (state_39289[(2)]);
var state_39289__$1 = state_39289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39289__$1,inst_39287);
} else {
if((state_val_39290 === (4))){
var inst_39272 = (state_39289[(10)]);
var inst_39277 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39272);
var state_39289__$1 = state_39289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39289__$1,(7),inst_39277);
} else {
if((state_val_39290 === (5))){
var inst_39283 = cljs.core.async.close_BANG_.call(null,out);
var state_39289__$1 = state_39289;
var statearr_39296_39308 = state_39289__$1;
(statearr_39296_39308[(2)] = inst_39283);

(statearr_39296_39308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39290 === (6))){
var inst_39285 = (state_39289[(2)]);
var state_39289__$1 = state_39289;
var statearr_39297_39309 = state_39289__$1;
(statearr_39297_39309[(2)] = inst_39285);

(statearr_39297_39309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39290 === (7))){
var inst_39273 = (state_39289[(11)]);
var inst_39279 = (state_39289[(2)]);
var inst_39280 = cljs.core.async.put_BANG_.call(null,out,inst_39279);
var inst_39266 = inst_39273;
var state_39289__$1 = (function (){var statearr_39298 = state_39289;
(statearr_39298[(12)] = inst_39280);

(statearr_39298[(7)] = inst_39266);

return statearr_39298;
})();
var statearr_39299_39310 = state_39289__$1;
(statearr_39299_39310[(2)] = null);

(statearr_39299_39310[(1)] = (2));


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
});})(c__38905__auto___39304,out))
;
return ((function (switch__38884__auto__,c__38905__auto___39304,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto____0 = (function (){
var statearr_39300 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39300[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto__);

(statearr_39300[(1)] = (1));

return statearr_39300;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto____1 = (function (state_39289){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_39289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e39301){if((e39301 instanceof Object)){
var ex__38888__auto__ = e39301;
var statearr_39302_39311 = state_39289;
(statearr_39302_39311[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39312 = state_39289;
state_39289 = G__39312;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto__ = function(state_39289){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto____1.call(this,state_39289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto___39304,out))
})();
var state__38907__auto__ = (function (){var statearr_39303 = f__38906__auto__.call(null);
(statearr_39303[(6)] = c__38905__auto___39304);

return statearr_39303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto___39304,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39313,opts){
var map__39314 = p__39313;
var map__39314__$1 = ((((!((map__39314 == null)))?((((map__39314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39314):map__39314);
var eval_body = cljs.core.get.call(null,map__39314__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39314__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e39316){var e = e39316;
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
return (function (p1__39317_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39317_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39318){
var vec__39319 = p__39318;
var k = cljs.core.nth.call(null,vec__39319,(0),null);
var v = cljs.core.nth.call(null,vec__39319,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39322){
var vec__39323 = p__39322;
var k = cljs.core.nth.call(null,vec__39323,(0),null);
var v = cljs.core.nth.call(null,vec__39323,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39329,p__39330){
var map__39331 = p__39329;
var map__39331__$1 = ((((!((map__39331 == null)))?((((map__39331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39331):map__39331);
var opts = map__39331__$1;
var before_jsload = cljs.core.get.call(null,map__39331__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39331__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39331__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39332 = p__39330;
var map__39332__$1 = ((((!((map__39332 == null)))?((((map__39332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39332):map__39332);
var msg = map__39332__$1;
var files = cljs.core.get.call(null,map__39332__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39332__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39332__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38905__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38906__auto__ = (function (){var switch__38884__auto__ = ((function (c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39486){
var state_val_39487 = (state_39486[(1)]);
if((state_val_39487 === (7))){
var inst_39347 = (state_39486[(7)]);
var inst_39348 = (state_39486[(8)]);
var inst_39346 = (state_39486[(9)]);
var inst_39349 = (state_39486[(10)]);
var inst_39354 = cljs.core._nth.call(null,inst_39347,inst_39349);
var inst_39355 = figwheel.client.file_reloading.eval_body.call(null,inst_39354,opts);
var inst_39356 = (inst_39349 + (1));
var tmp39488 = inst_39347;
var tmp39489 = inst_39348;
var tmp39490 = inst_39346;
var inst_39346__$1 = tmp39490;
var inst_39347__$1 = tmp39488;
var inst_39348__$1 = tmp39489;
var inst_39349__$1 = inst_39356;
var state_39486__$1 = (function (){var statearr_39491 = state_39486;
(statearr_39491[(7)] = inst_39347__$1);

(statearr_39491[(8)] = inst_39348__$1);

(statearr_39491[(9)] = inst_39346__$1);

(statearr_39491[(11)] = inst_39355);

(statearr_39491[(10)] = inst_39349__$1);

return statearr_39491;
})();
var statearr_39492_39575 = state_39486__$1;
(statearr_39492_39575[(2)] = null);

(statearr_39492_39575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (20))){
var inst_39389 = (state_39486[(12)]);
var inst_39397 = figwheel.client.file_reloading.sort_files.call(null,inst_39389);
var state_39486__$1 = state_39486;
var statearr_39493_39576 = state_39486__$1;
(statearr_39493_39576[(2)] = inst_39397);

(statearr_39493_39576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (27))){
var state_39486__$1 = state_39486;
var statearr_39494_39577 = state_39486__$1;
(statearr_39494_39577[(2)] = null);

(statearr_39494_39577[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (1))){
var inst_39338 = (state_39486[(13)]);
var inst_39335 = before_jsload.call(null,files);
var inst_39336 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39337 = (function (){return ((function (inst_39338,inst_39335,inst_39336,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39326_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39326_SHARP_);
});
;})(inst_39338,inst_39335,inst_39336,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39338__$1 = cljs.core.filter.call(null,inst_39337,files);
var inst_39339 = cljs.core.not_empty.call(null,inst_39338__$1);
var state_39486__$1 = (function (){var statearr_39495 = state_39486;
(statearr_39495[(14)] = inst_39335);

(statearr_39495[(13)] = inst_39338__$1);

(statearr_39495[(15)] = inst_39336);

return statearr_39495;
})();
if(cljs.core.truth_(inst_39339)){
var statearr_39496_39578 = state_39486__$1;
(statearr_39496_39578[(1)] = (2));

} else {
var statearr_39497_39579 = state_39486__$1;
(statearr_39497_39579[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (24))){
var state_39486__$1 = state_39486;
var statearr_39498_39580 = state_39486__$1;
(statearr_39498_39580[(2)] = null);

(statearr_39498_39580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (39))){
var inst_39439 = (state_39486[(16)]);
var state_39486__$1 = state_39486;
var statearr_39499_39581 = state_39486__$1;
(statearr_39499_39581[(2)] = inst_39439);

(statearr_39499_39581[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (46))){
var inst_39481 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39500_39582 = state_39486__$1;
(statearr_39500_39582[(2)] = inst_39481);

(statearr_39500_39582[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (4))){
var inst_39383 = (state_39486[(2)]);
var inst_39384 = cljs.core.List.EMPTY;
var inst_39385 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39384);
var inst_39386 = (function (){return ((function (inst_39383,inst_39384,inst_39385,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39327_SHARP_){
var and__36296__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39327_SHARP_);
if(cljs.core.truth_(and__36296__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39327_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39327_SHARP_)));
} else {
return and__36296__auto__;
}
});
;})(inst_39383,inst_39384,inst_39385,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39387 = cljs.core.filter.call(null,inst_39386,files);
var inst_39388 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39389 = cljs.core.concat.call(null,inst_39387,inst_39388);
var state_39486__$1 = (function (){var statearr_39501 = state_39486;
(statearr_39501[(17)] = inst_39383);

(statearr_39501[(18)] = inst_39385);

(statearr_39501[(12)] = inst_39389);

return statearr_39501;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39502_39583 = state_39486__$1;
(statearr_39502_39583[(1)] = (16));

} else {
var statearr_39503_39584 = state_39486__$1;
(statearr_39503_39584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (15))){
var inst_39373 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39504_39585 = state_39486__$1;
(statearr_39504_39585[(2)] = inst_39373);

(statearr_39504_39585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (21))){
var inst_39399 = (state_39486[(19)]);
var inst_39399__$1 = (state_39486[(2)]);
var inst_39400 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39399__$1);
var state_39486__$1 = (function (){var statearr_39505 = state_39486;
(statearr_39505[(19)] = inst_39399__$1);

return statearr_39505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39486__$1,(22),inst_39400);
} else {
if((state_val_39487 === (31))){
var inst_39484 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39486__$1,inst_39484);
} else {
if((state_val_39487 === (32))){
var inst_39439 = (state_39486[(16)]);
var inst_39444 = inst_39439.cljs$lang$protocol_mask$partition0$;
var inst_39445 = (inst_39444 & (64));
var inst_39446 = inst_39439.cljs$core$ISeq$;
var inst_39447 = (cljs.core.PROTOCOL_SENTINEL === inst_39446);
var inst_39448 = (inst_39445) || (inst_39447);
var state_39486__$1 = state_39486;
if(cljs.core.truth_(inst_39448)){
var statearr_39506_39586 = state_39486__$1;
(statearr_39506_39586[(1)] = (35));

} else {
var statearr_39507_39587 = state_39486__$1;
(statearr_39507_39587[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (40))){
var inst_39461 = (state_39486[(20)]);
var inst_39460 = (state_39486[(2)]);
var inst_39461__$1 = cljs.core.get.call(null,inst_39460,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39462 = cljs.core.get.call(null,inst_39460,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39463 = cljs.core.not_empty.call(null,inst_39461__$1);
var state_39486__$1 = (function (){var statearr_39508 = state_39486;
(statearr_39508[(20)] = inst_39461__$1);

(statearr_39508[(21)] = inst_39462);

return statearr_39508;
})();
if(cljs.core.truth_(inst_39463)){
var statearr_39509_39588 = state_39486__$1;
(statearr_39509_39588[(1)] = (41));

} else {
var statearr_39510_39589 = state_39486__$1;
(statearr_39510_39589[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (33))){
var state_39486__$1 = state_39486;
var statearr_39511_39590 = state_39486__$1;
(statearr_39511_39590[(2)] = false);

(statearr_39511_39590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (13))){
var inst_39359 = (state_39486[(22)]);
var inst_39363 = cljs.core.chunk_first.call(null,inst_39359);
var inst_39364 = cljs.core.chunk_rest.call(null,inst_39359);
var inst_39365 = cljs.core.count.call(null,inst_39363);
var inst_39346 = inst_39364;
var inst_39347 = inst_39363;
var inst_39348 = inst_39365;
var inst_39349 = (0);
var state_39486__$1 = (function (){var statearr_39512 = state_39486;
(statearr_39512[(7)] = inst_39347);

(statearr_39512[(8)] = inst_39348);

(statearr_39512[(9)] = inst_39346);

(statearr_39512[(10)] = inst_39349);

return statearr_39512;
})();
var statearr_39513_39591 = state_39486__$1;
(statearr_39513_39591[(2)] = null);

(statearr_39513_39591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (22))){
var inst_39402 = (state_39486[(23)]);
var inst_39407 = (state_39486[(24)]);
var inst_39399 = (state_39486[(19)]);
var inst_39403 = (state_39486[(25)]);
var inst_39402__$1 = (state_39486[(2)]);
var inst_39403__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39402__$1);
var inst_39404 = (function (){var all_files = inst_39399;
var res_SINGLEQUOTE_ = inst_39402__$1;
var res = inst_39403__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39402,inst_39407,inst_39399,inst_39403,inst_39402__$1,inst_39403__$1,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39328_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39328_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39402,inst_39407,inst_39399,inst_39403,inst_39402__$1,inst_39403__$1,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39405 = cljs.core.filter.call(null,inst_39404,inst_39402__$1);
var inst_39406 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39407__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39406);
var inst_39408 = cljs.core.not_empty.call(null,inst_39407__$1);
var state_39486__$1 = (function (){var statearr_39514 = state_39486;
(statearr_39514[(23)] = inst_39402__$1);

(statearr_39514[(24)] = inst_39407__$1);

(statearr_39514[(25)] = inst_39403__$1);

(statearr_39514[(26)] = inst_39405);

return statearr_39514;
})();
if(cljs.core.truth_(inst_39408)){
var statearr_39515_39592 = state_39486__$1;
(statearr_39515_39592[(1)] = (23));

} else {
var statearr_39516_39593 = state_39486__$1;
(statearr_39516_39593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (36))){
var state_39486__$1 = state_39486;
var statearr_39517_39594 = state_39486__$1;
(statearr_39517_39594[(2)] = false);

(statearr_39517_39594[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (41))){
var inst_39461 = (state_39486[(20)]);
var inst_39465 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39466 = cljs.core.map.call(null,inst_39465,inst_39461);
var inst_39467 = cljs.core.pr_str.call(null,inst_39466);
var inst_39468 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39467)].join('');
var inst_39469 = figwheel.client.utils.log.call(null,inst_39468);
var state_39486__$1 = state_39486;
var statearr_39518_39595 = state_39486__$1;
(statearr_39518_39595[(2)] = inst_39469);

(statearr_39518_39595[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (43))){
var inst_39462 = (state_39486[(21)]);
var inst_39472 = (state_39486[(2)]);
var inst_39473 = cljs.core.not_empty.call(null,inst_39462);
var state_39486__$1 = (function (){var statearr_39519 = state_39486;
(statearr_39519[(27)] = inst_39472);

return statearr_39519;
})();
if(cljs.core.truth_(inst_39473)){
var statearr_39520_39596 = state_39486__$1;
(statearr_39520_39596[(1)] = (44));

} else {
var statearr_39521_39597 = state_39486__$1;
(statearr_39521_39597[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (29))){
var inst_39402 = (state_39486[(23)]);
var inst_39407 = (state_39486[(24)]);
var inst_39439 = (state_39486[(16)]);
var inst_39399 = (state_39486[(19)]);
var inst_39403 = (state_39486[(25)]);
var inst_39405 = (state_39486[(26)]);
var inst_39435 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39438 = (function (){var all_files = inst_39399;
var res_SINGLEQUOTE_ = inst_39402;
var res = inst_39403;
var files_not_loaded = inst_39405;
var dependencies_that_loaded = inst_39407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39402,inst_39407,inst_39439,inst_39399,inst_39403,inst_39405,inst_39435,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39437){
var map__39522 = p__39437;
var map__39522__$1 = ((((!((map__39522 == null)))?((((map__39522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39522):map__39522);
var namespace = cljs.core.get.call(null,map__39522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39402,inst_39407,inst_39439,inst_39399,inst_39403,inst_39405,inst_39435,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39439__$1 = cljs.core.group_by.call(null,inst_39438,inst_39405);
var inst_39441 = (inst_39439__$1 == null);
var inst_39442 = cljs.core.not.call(null,inst_39441);
var state_39486__$1 = (function (){var statearr_39524 = state_39486;
(statearr_39524[(28)] = inst_39435);

(statearr_39524[(16)] = inst_39439__$1);

return statearr_39524;
})();
if(inst_39442){
var statearr_39525_39598 = state_39486__$1;
(statearr_39525_39598[(1)] = (32));

} else {
var statearr_39526_39599 = state_39486__$1;
(statearr_39526_39599[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (44))){
var inst_39462 = (state_39486[(21)]);
var inst_39475 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39462);
var inst_39476 = cljs.core.pr_str.call(null,inst_39475);
var inst_39477 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39476)].join('');
var inst_39478 = figwheel.client.utils.log.call(null,inst_39477);
var state_39486__$1 = state_39486;
var statearr_39527_39600 = state_39486__$1;
(statearr_39527_39600[(2)] = inst_39478);

(statearr_39527_39600[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (6))){
var inst_39380 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39528_39601 = state_39486__$1;
(statearr_39528_39601[(2)] = inst_39380);

(statearr_39528_39601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (28))){
var inst_39405 = (state_39486[(26)]);
var inst_39432 = (state_39486[(2)]);
var inst_39433 = cljs.core.not_empty.call(null,inst_39405);
var state_39486__$1 = (function (){var statearr_39529 = state_39486;
(statearr_39529[(29)] = inst_39432);

return statearr_39529;
})();
if(cljs.core.truth_(inst_39433)){
var statearr_39530_39602 = state_39486__$1;
(statearr_39530_39602[(1)] = (29));

} else {
var statearr_39531_39603 = state_39486__$1;
(statearr_39531_39603[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (25))){
var inst_39403 = (state_39486[(25)]);
var inst_39419 = (state_39486[(2)]);
var inst_39420 = cljs.core.not_empty.call(null,inst_39403);
var state_39486__$1 = (function (){var statearr_39532 = state_39486;
(statearr_39532[(30)] = inst_39419);

return statearr_39532;
})();
if(cljs.core.truth_(inst_39420)){
var statearr_39533_39604 = state_39486__$1;
(statearr_39533_39604[(1)] = (26));

} else {
var statearr_39534_39605 = state_39486__$1;
(statearr_39534_39605[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (34))){
var inst_39455 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
if(cljs.core.truth_(inst_39455)){
var statearr_39535_39606 = state_39486__$1;
(statearr_39535_39606[(1)] = (38));

} else {
var statearr_39536_39607 = state_39486__$1;
(statearr_39536_39607[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (17))){
var state_39486__$1 = state_39486;
var statearr_39537_39608 = state_39486__$1;
(statearr_39537_39608[(2)] = recompile_dependents);

(statearr_39537_39608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (3))){
var state_39486__$1 = state_39486;
var statearr_39538_39609 = state_39486__$1;
(statearr_39538_39609[(2)] = null);

(statearr_39538_39609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (12))){
var inst_39376 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39539_39610 = state_39486__$1;
(statearr_39539_39610[(2)] = inst_39376);

(statearr_39539_39610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (2))){
var inst_39338 = (state_39486[(13)]);
var inst_39345 = cljs.core.seq.call(null,inst_39338);
var inst_39346 = inst_39345;
var inst_39347 = null;
var inst_39348 = (0);
var inst_39349 = (0);
var state_39486__$1 = (function (){var statearr_39540 = state_39486;
(statearr_39540[(7)] = inst_39347);

(statearr_39540[(8)] = inst_39348);

(statearr_39540[(9)] = inst_39346);

(statearr_39540[(10)] = inst_39349);

return statearr_39540;
})();
var statearr_39541_39611 = state_39486__$1;
(statearr_39541_39611[(2)] = null);

(statearr_39541_39611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (23))){
var inst_39402 = (state_39486[(23)]);
var inst_39407 = (state_39486[(24)]);
var inst_39399 = (state_39486[(19)]);
var inst_39403 = (state_39486[(25)]);
var inst_39405 = (state_39486[(26)]);
var inst_39410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39412 = (function (){var all_files = inst_39399;
var res_SINGLEQUOTE_ = inst_39402;
var res = inst_39403;
var files_not_loaded = inst_39405;
var dependencies_that_loaded = inst_39407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39402,inst_39407,inst_39399,inst_39403,inst_39405,inst_39410,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39411){
var map__39542 = p__39411;
var map__39542__$1 = ((((!((map__39542 == null)))?((((map__39542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39542):map__39542);
var request_url = cljs.core.get.call(null,map__39542__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39402,inst_39407,inst_39399,inst_39403,inst_39405,inst_39410,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39413 = cljs.core.reverse.call(null,inst_39407);
var inst_39414 = cljs.core.map.call(null,inst_39412,inst_39413);
var inst_39415 = cljs.core.pr_str.call(null,inst_39414);
var inst_39416 = figwheel.client.utils.log.call(null,inst_39415);
var state_39486__$1 = (function (){var statearr_39544 = state_39486;
(statearr_39544[(31)] = inst_39410);

return statearr_39544;
})();
var statearr_39545_39612 = state_39486__$1;
(statearr_39545_39612[(2)] = inst_39416);

(statearr_39545_39612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (35))){
var state_39486__$1 = state_39486;
var statearr_39546_39613 = state_39486__$1;
(statearr_39546_39613[(2)] = true);

(statearr_39546_39613[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (19))){
var inst_39389 = (state_39486[(12)]);
var inst_39395 = figwheel.client.file_reloading.expand_files.call(null,inst_39389);
var state_39486__$1 = state_39486;
var statearr_39547_39614 = state_39486__$1;
(statearr_39547_39614[(2)] = inst_39395);

(statearr_39547_39614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (11))){
var state_39486__$1 = state_39486;
var statearr_39548_39615 = state_39486__$1;
(statearr_39548_39615[(2)] = null);

(statearr_39548_39615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (9))){
var inst_39378 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39549_39616 = state_39486__$1;
(statearr_39549_39616[(2)] = inst_39378);

(statearr_39549_39616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (5))){
var inst_39348 = (state_39486[(8)]);
var inst_39349 = (state_39486[(10)]);
var inst_39351 = (inst_39349 < inst_39348);
var inst_39352 = inst_39351;
var state_39486__$1 = state_39486;
if(cljs.core.truth_(inst_39352)){
var statearr_39550_39617 = state_39486__$1;
(statearr_39550_39617[(1)] = (7));

} else {
var statearr_39551_39618 = state_39486__$1;
(statearr_39551_39618[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (14))){
var inst_39359 = (state_39486[(22)]);
var inst_39368 = cljs.core.first.call(null,inst_39359);
var inst_39369 = figwheel.client.file_reloading.eval_body.call(null,inst_39368,opts);
var inst_39370 = cljs.core.next.call(null,inst_39359);
var inst_39346 = inst_39370;
var inst_39347 = null;
var inst_39348 = (0);
var inst_39349 = (0);
var state_39486__$1 = (function (){var statearr_39552 = state_39486;
(statearr_39552[(7)] = inst_39347);

(statearr_39552[(8)] = inst_39348);

(statearr_39552[(32)] = inst_39369);

(statearr_39552[(9)] = inst_39346);

(statearr_39552[(10)] = inst_39349);

return statearr_39552;
})();
var statearr_39553_39619 = state_39486__$1;
(statearr_39553_39619[(2)] = null);

(statearr_39553_39619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (45))){
var state_39486__$1 = state_39486;
var statearr_39554_39620 = state_39486__$1;
(statearr_39554_39620[(2)] = null);

(statearr_39554_39620[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (26))){
var inst_39402 = (state_39486[(23)]);
var inst_39407 = (state_39486[(24)]);
var inst_39399 = (state_39486[(19)]);
var inst_39403 = (state_39486[(25)]);
var inst_39405 = (state_39486[(26)]);
var inst_39422 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39424 = (function (){var all_files = inst_39399;
var res_SINGLEQUOTE_ = inst_39402;
var res = inst_39403;
var files_not_loaded = inst_39405;
var dependencies_that_loaded = inst_39407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39402,inst_39407,inst_39399,inst_39403,inst_39405,inst_39422,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39423){
var map__39555 = p__39423;
var map__39555__$1 = ((((!((map__39555 == null)))?((((map__39555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39555):map__39555);
var namespace = cljs.core.get.call(null,map__39555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39402,inst_39407,inst_39399,inst_39403,inst_39405,inst_39422,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39425 = cljs.core.map.call(null,inst_39424,inst_39403);
var inst_39426 = cljs.core.pr_str.call(null,inst_39425);
var inst_39427 = figwheel.client.utils.log.call(null,inst_39426);
var inst_39428 = (function (){var all_files = inst_39399;
var res_SINGLEQUOTE_ = inst_39402;
var res = inst_39403;
var files_not_loaded = inst_39405;
var dependencies_that_loaded = inst_39407;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39402,inst_39407,inst_39399,inst_39403,inst_39405,inst_39422,inst_39424,inst_39425,inst_39426,inst_39427,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39402,inst_39407,inst_39399,inst_39403,inst_39405,inst_39422,inst_39424,inst_39425,inst_39426,inst_39427,state_val_39487,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39429 = setTimeout(inst_39428,(10));
var state_39486__$1 = (function (){var statearr_39557 = state_39486;
(statearr_39557[(33)] = inst_39422);

(statearr_39557[(34)] = inst_39427);

return statearr_39557;
})();
var statearr_39558_39621 = state_39486__$1;
(statearr_39558_39621[(2)] = inst_39429);

(statearr_39558_39621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (16))){
var state_39486__$1 = state_39486;
var statearr_39559_39622 = state_39486__$1;
(statearr_39559_39622[(2)] = reload_dependents);

(statearr_39559_39622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (38))){
var inst_39439 = (state_39486[(16)]);
var inst_39457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39439);
var state_39486__$1 = state_39486;
var statearr_39560_39623 = state_39486__$1;
(statearr_39560_39623[(2)] = inst_39457);

(statearr_39560_39623[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (30))){
var state_39486__$1 = state_39486;
var statearr_39561_39624 = state_39486__$1;
(statearr_39561_39624[(2)] = null);

(statearr_39561_39624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (10))){
var inst_39359 = (state_39486[(22)]);
var inst_39361 = cljs.core.chunked_seq_QMARK_.call(null,inst_39359);
var state_39486__$1 = state_39486;
if(inst_39361){
var statearr_39562_39625 = state_39486__$1;
(statearr_39562_39625[(1)] = (13));

} else {
var statearr_39563_39626 = state_39486__$1;
(statearr_39563_39626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (18))){
var inst_39393 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
if(cljs.core.truth_(inst_39393)){
var statearr_39564_39627 = state_39486__$1;
(statearr_39564_39627[(1)] = (19));

} else {
var statearr_39565_39628 = state_39486__$1;
(statearr_39565_39628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (42))){
var state_39486__$1 = state_39486;
var statearr_39566_39629 = state_39486__$1;
(statearr_39566_39629[(2)] = null);

(statearr_39566_39629[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (37))){
var inst_39452 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39567_39630 = state_39486__$1;
(statearr_39567_39630[(2)] = inst_39452);

(statearr_39567_39630[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (8))){
var inst_39346 = (state_39486[(9)]);
var inst_39359 = (state_39486[(22)]);
var inst_39359__$1 = cljs.core.seq.call(null,inst_39346);
var state_39486__$1 = (function (){var statearr_39568 = state_39486;
(statearr_39568[(22)] = inst_39359__$1);

return statearr_39568;
})();
if(inst_39359__$1){
var statearr_39569_39631 = state_39486__$1;
(statearr_39569_39631[(1)] = (10));

} else {
var statearr_39570_39632 = state_39486__$1;
(statearr_39570_39632[(1)] = (11));

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
});})(c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38884__auto__,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto____0 = (function (){
var statearr_39571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39571[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto__);

(statearr_39571[(1)] = (1));

return statearr_39571;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto____1 = (function (state_39486){
while(true){
var ret_value__38886__auto__ = (function (){try{while(true){
var result__38887__auto__ = switch__38884__auto__.call(null,state_39486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38887__auto__;
}
break;
}
}catch (e39572){if((e39572 instanceof Object)){
var ex__38888__auto__ = e39572;
var statearr_39573_39633 = state_39486;
(statearr_39573_39633[(5)] = ex__38888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39634 = state_39486;
state_39486 = G__39634;
continue;
} else {
return ret_value__38886__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto__ = function(state_39486){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto____1.call(this,state_39486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38885__auto__;
})()
;})(switch__38884__auto__,c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38907__auto__ = (function (){var statearr_39574 = f__38906__auto__.call(null);
(statearr_39574[(6)] = c__38905__auto__);

return statearr_39574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38907__auto__);
});})(c__38905__auto__,map__39331,map__39331__$1,opts,before_jsload,on_jsload,reload_dependents,map__39332,map__39332__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38905__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39637,link){
var map__39638 = p__39637;
var map__39638__$1 = ((((!((map__39638 == null)))?((((map__39638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39638):map__39638);
var file = cljs.core.get.call(null,map__39638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__39638,map__39638__$1,file){
return (function (p1__39635_SHARP_,p2__39636_SHARP_){
if(cljs.core._EQ_.call(null,p1__39635_SHARP_,p2__39636_SHARP_)){
return p1__39635_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__39638,map__39638__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39641){
var map__39642 = p__39641;
var map__39642__$1 = ((((!((map__39642 == null)))?((((map__39642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39642):map__39642);
var match_length = cljs.core.get.call(null,map__39642__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39642__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39640_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39640_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39644_SHARP_,p2__39645_SHARP_){
return cljs.core.assoc.call(null,p1__39644_SHARP_,cljs.core.get.call(null,p2__39645_SHARP_,key),p2__39645_SHARP_);
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
var loaded_f_datas_39646 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_39646);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_39646);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39647,p__39648){
var map__39649 = p__39647;
var map__39649__$1 = ((((!((map__39649 == null)))?((((map__39649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39649):map__39649);
var on_cssload = cljs.core.get.call(null,map__39649__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__39650 = p__39648;
var map__39650__$1 = ((((!((map__39650 == null)))?((((map__39650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39650):map__39650);
var files_msg = map__39650__$1;
var files = cljs.core.get.call(null,map__39650__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1518331025518
