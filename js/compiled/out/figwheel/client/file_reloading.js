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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49320_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49320_SHARP_));
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
var seq__49321 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49322 = null;
var count__49323 = (0);
var i__49324 = (0);
while(true){
if((i__49324 < count__49323)){
var n = cljs.core._nth.call(null,chunk__49322,i__49324);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49325 = seq__49321;
var G__49326 = chunk__49322;
var G__49327 = count__49323;
var G__49328 = (i__49324 + (1));
seq__49321 = G__49325;
chunk__49322 = G__49326;
count__49323 = G__49327;
i__49324 = G__49328;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49321);
if(temp__4657__auto__){
var seq__49321__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49321__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__49321__$1);
var G__49329 = cljs.core.chunk_rest.call(null,seq__49321__$1);
var G__49330 = c__37147__auto__;
var G__49331 = cljs.core.count.call(null,c__37147__auto__);
var G__49332 = (0);
seq__49321 = G__49329;
chunk__49322 = G__49330;
count__49323 = G__49331;
i__49324 = G__49332;
continue;
} else {
var n = cljs.core.first.call(null,seq__49321__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49333 = cljs.core.next.call(null,seq__49321__$1);
var G__49334 = null;
var G__49335 = (0);
var G__49336 = (0);
seq__49321 = G__49333;
chunk__49322 = G__49334;
count__49323 = G__49335;
i__49324 = G__49336;
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
return cljs.core.some.call(null,(function (p__49337){
var vec__49338 = p__49337;
var _ = cljs.core.nth.call(null,vec__49338,(0),null);
var v = cljs.core.nth.call(null,vec__49338,(1),null);
var and__36296__auto__ = v;
if(cljs.core.truth_(and__36296__auto__)){
return v.call(null,dep);
} else {
return and__36296__auto__;
}
}),cljs.core.filter.call(null,(function (p__49341){
var vec__49342 = p__49341;
var k = cljs.core.nth.call(null,vec__49342,(0),null);
var v = cljs.core.nth.call(null,vec__49342,(1),null);
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

var seq__49354_49362 = cljs.core.seq.call(null,deps);
var chunk__49355_49363 = null;
var count__49356_49364 = (0);
var i__49357_49365 = (0);
while(true){
if((i__49357_49365 < count__49356_49364)){
var dep_49366 = cljs.core._nth.call(null,chunk__49355_49363,i__49357_49365);
if(cljs.core.truth_((function (){var and__36296__auto__ = dep_49366;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49366));
} else {
return and__36296__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49366,(depth + (1)),state);
} else {
}

var G__49367 = seq__49354_49362;
var G__49368 = chunk__49355_49363;
var G__49369 = count__49356_49364;
var G__49370 = (i__49357_49365 + (1));
seq__49354_49362 = G__49367;
chunk__49355_49363 = G__49368;
count__49356_49364 = G__49369;
i__49357_49365 = G__49370;
continue;
} else {
var temp__4657__auto___49371 = cljs.core.seq.call(null,seq__49354_49362);
if(temp__4657__auto___49371){
var seq__49354_49372__$1 = temp__4657__auto___49371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49354_49372__$1)){
var c__37147__auto___49373 = cljs.core.chunk_first.call(null,seq__49354_49372__$1);
var G__49374 = cljs.core.chunk_rest.call(null,seq__49354_49372__$1);
var G__49375 = c__37147__auto___49373;
var G__49376 = cljs.core.count.call(null,c__37147__auto___49373);
var G__49377 = (0);
seq__49354_49362 = G__49374;
chunk__49355_49363 = G__49375;
count__49356_49364 = G__49376;
i__49357_49365 = G__49377;
continue;
} else {
var dep_49378 = cljs.core.first.call(null,seq__49354_49372__$1);
if(cljs.core.truth_((function (){var and__36296__auto__ = dep_49378;
if(cljs.core.truth_(and__36296__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_49378));
} else {
return and__36296__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_49378,(depth + (1)),state);
} else {
}

var G__49379 = cljs.core.next.call(null,seq__49354_49372__$1);
var G__49380 = null;
var G__49381 = (0);
var G__49382 = (0);
seq__49354_49362 = G__49379;
chunk__49355_49363 = G__49380;
count__49356_49364 = G__49381;
i__49357_49365 = G__49382;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49358){
var vec__49359 = p__49358;
var seq__49360 = cljs.core.seq.call(null,vec__49359);
var first__49361 = cljs.core.first.call(null,seq__49360);
var seq__49360__$1 = cljs.core.next.call(null,seq__49360);
var x = first__49361;
var xs = seq__49360__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49359,seq__49360,first__49361,seq__49360__$1,x,xs,get_deps__$1){
return (function (p1__49345_SHARP_){
return clojure.set.difference.call(null,p1__49345_SHARP_,x);
});})(vec__49359,seq__49360,first__49361,seq__49360__$1,x,xs,get_deps__$1))
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
var seq__49383 = cljs.core.seq.call(null,provides);
var chunk__49384 = null;
var count__49385 = (0);
var i__49386 = (0);
while(true){
if((i__49386 < count__49385)){
var prov = cljs.core._nth.call(null,chunk__49384,i__49386);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49387_49395 = cljs.core.seq.call(null,requires);
var chunk__49388_49396 = null;
var count__49389_49397 = (0);
var i__49390_49398 = (0);
while(true){
if((i__49390_49398 < count__49389_49397)){
var req_49399 = cljs.core._nth.call(null,chunk__49388_49396,i__49390_49398);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49399,prov);

var G__49400 = seq__49387_49395;
var G__49401 = chunk__49388_49396;
var G__49402 = count__49389_49397;
var G__49403 = (i__49390_49398 + (1));
seq__49387_49395 = G__49400;
chunk__49388_49396 = G__49401;
count__49389_49397 = G__49402;
i__49390_49398 = G__49403;
continue;
} else {
var temp__4657__auto___49404 = cljs.core.seq.call(null,seq__49387_49395);
if(temp__4657__auto___49404){
var seq__49387_49405__$1 = temp__4657__auto___49404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49387_49405__$1)){
var c__37147__auto___49406 = cljs.core.chunk_first.call(null,seq__49387_49405__$1);
var G__49407 = cljs.core.chunk_rest.call(null,seq__49387_49405__$1);
var G__49408 = c__37147__auto___49406;
var G__49409 = cljs.core.count.call(null,c__37147__auto___49406);
var G__49410 = (0);
seq__49387_49395 = G__49407;
chunk__49388_49396 = G__49408;
count__49389_49397 = G__49409;
i__49390_49398 = G__49410;
continue;
} else {
var req_49411 = cljs.core.first.call(null,seq__49387_49405__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49411,prov);

var G__49412 = cljs.core.next.call(null,seq__49387_49405__$1);
var G__49413 = null;
var G__49414 = (0);
var G__49415 = (0);
seq__49387_49395 = G__49412;
chunk__49388_49396 = G__49413;
count__49389_49397 = G__49414;
i__49390_49398 = G__49415;
continue;
}
} else {
}
}
break;
}

var G__49416 = seq__49383;
var G__49417 = chunk__49384;
var G__49418 = count__49385;
var G__49419 = (i__49386 + (1));
seq__49383 = G__49416;
chunk__49384 = G__49417;
count__49385 = G__49418;
i__49386 = G__49419;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49383);
if(temp__4657__auto__){
var seq__49383__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49383__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__49383__$1);
var G__49420 = cljs.core.chunk_rest.call(null,seq__49383__$1);
var G__49421 = c__37147__auto__;
var G__49422 = cljs.core.count.call(null,c__37147__auto__);
var G__49423 = (0);
seq__49383 = G__49420;
chunk__49384 = G__49421;
count__49385 = G__49422;
i__49386 = G__49423;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49383__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49391_49424 = cljs.core.seq.call(null,requires);
var chunk__49392_49425 = null;
var count__49393_49426 = (0);
var i__49394_49427 = (0);
while(true){
if((i__49394_49427 < count__49393_49426)){
var req_49428 = cljs.core._nth.call(null,chunk__49392_49425,i__49394_49427);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49428,prov);

var G__49429 = seq__49391_49424;
var G__49430 = chunk__49392_49425;
var G__49431 = count__49393_49426;
var G__49432 = (i__49394_49427 + (1));
seq__49391_49424 = G__49429;
chunk__49392_49425 = G__49430;
count__49393_49426 = G__49431;
i__49394_49427 = G__49432;
continue;
} else {
var temp__4657__auto___49433__$1 = cljs.core.seq.call(null,seq__49391_49424);
if(temp__4657__auto___49433__$1){
var seq__49391_49434__$1 = temp__4657__auto___49433__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49391_49434__$1)){
var c__37147__auto___49435 = cljs.core.chunk_first.call(null,seq__49391_49434__$1);
var G__49436 = cljs.core.chunk_rest.call(null,seq__49391_49434__$1);
var G__49437 = c__37147__auto___49435;
var G__49438 = cljs.core.count.call(null,c__37147__auto___49435);
var G__49439 = (0);
seq__49391_49424 = G__49436;
chunk__49392_49425 = G__49437;
count__49393_49426 = G__49438;
i__49394_49427 = G__49439;
continue;
} else {
var req_49440 = cljs.core.first.call(null,seq__49391_49434__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49440,prov);

var G__49441 = cljs.core.next.call(null,seq__49391_49434__$1);
var G__49442 = null;
var G__49443 = (0);
var G__49444 = (0);
seq__49391_49424 = G__49441;
chunk__49392_49425 = G__49442;
count__49393_49426 = G__49443;
i__49394_49427 = G__49444;
continue;
}
} else {
}
}
break;
}

var G__49445 = cljs.core.next.call(null,seq__49383__$1);
var G__49446 = null;
var G__49447 = (0);
var G__49448 = (0);
seq__49383 = G__49445;
chunk__49384 = G__49446;
count__49385 = G__49447;
i__49386 = G__49448;
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
var seq__49449_49453 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49450_49454 = null;
var count__49451_49455 = (0);
var i__49452_49456 = (0);
while(true){
if((i__49452_49456 < count__49451_49455)){
var ns_49457 = cljs.core._nth.call(null,chunk__49450_49454,i__49452_49456);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49457);

var G__49458 = seq__49449_49453;
var G__49459 = chunk__49450_49454;
var G__49460 = count__49451_49455;
var G__49461 = (i__49452_49456 + (1));
seq__49449_49453 = G__49458;
chunk__49450_49454 = G__49459;
count__49451_49455 = G__49460;
i__49452_49456 = G__49461;
continue;
} else {
var temp__4657__auto___49462 = cljs.core.seq.call(null,seq__49449_49453);
if(temp__4657__auto___49462){
var seq__49449_49463__$1 = temp__4657__auto___49462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49449_49463__$1)){
var c__37147__auto___49464 = cljs.core.chunk_first.call(null,seq__49449_49463__$1);
var G__49465 = cljs.core.chunk_rest.call(null,seq__49449_49463__$1);
var G__49466 = c__37147__auto___49464;
var G__49467 = cljs.core.count.call(null,c__37147__auto___49464);
var G__49468 = (0);
seq__49449_49453 = G__49465;
chunk__49450_49454 = G__49466;
count__49451_49455 = G__49467;
i__49452_49456 = G__49468;
continue;
} else {
var ns_49469 = cljs.core.first.call(null,seq__49449_49463__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49469);

var G__49470 = cljs.core.next.call(null,seq__49449_49463__$1);
var G__49471 = null;
var G__49472 = (0);
var G__49473 = (0);
seq__49449_49453 = G__49470;
chunk__49450_49454 = G__49471;
count__49451_49455 = G__49472;
i__49452_49456 = G__49473;
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
var G__49474__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49475__i = 0, G__49475__a = new Array(arguments.length -  0);
while (G__49475__i < G__49475__a.length) {G__49475__a[G__49475__i] = arguments[G__49475__i + 0]; ++G__49475__i;}
  args = new cljs.core.IndexedSeq(G__49475__a,0,null);
} 
return G__49474__delegate.call(this,args);};
G__49474.cljs$lang$maxFixedArity = 0;
G__49474.cljs$lang$applyTo = (function (arglist__49476){
var args = cljs.core.seq(arglist__49476);
return G__49474__delegate(args);
});
G__49474.cljs$core$IFn$_invoke$arity$variadic = G__49474__delegate;
return G__49474;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49477_SHARP_,p2__49478_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49477_SHARP_)].join('')),p2__49478_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49479_SHARP_,p2__49480_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49479_SHARP_)].join(''),p2__49480_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49481 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49481.addCallback(((function (G__49481){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49481))
);

G__49481.addErrback(((function (G__49481){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49481))
);

return G__49481;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49482){if((e49482 instanceof Error)){
var e = e49482;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49482;

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
}catch (e49483){if((e49483 instanceof Error)){
var e = e49483;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49483;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49484 = cljs.core._EQ_;
var expr__49485 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49484.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49485))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__49484.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49485))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__49484.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49485))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__49484,expr__49485){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49484,expr__49485))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49487,callback){
var map__49488 = p__49487;
var map__49488__$1 = ((((!((map__49488 == null)))?((((map__49488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49488):map__49488);
var file_msg = map__49488__$1;
var request_url = cljs.core.get.call(null,map__49488__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__36308__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__49488,map__49488__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49488,map__49488__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__){
return (function (state_49528){
var state_val_49529 = (state_49528[(1)]);
if((state_val_49529 === (7))){
var inst_49524 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49530_49557 = state_49528__$1;
(statearr_49530_49557[(2)] = inst_49524);

(statearr_49530_49557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (1))){
var state_49528__$1 = state_49528;
var statearr_49531_49558 = state_49528__$1;
(statearr_49531_49558[(2)] = null);

(statearr_49531_49558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (4))){
var inst_49492 = (state_49528[(7)]);
var inst_49492__$1 = (state_49528[(2)]);
var state_49528__$1 = (function (){var statearr_49532 = state_49528;
(statearr_49532[(7)] = inst_49492__$1);

return statearr_49532;
})();
if(cljs.core.truth_(inst_49492__$1)){
var statearr_49533_49559 = state_49528__$1;
(statearr_49533_49559[(1)] = (5));

} else {
var statearr_49534_49560 = state_49528__$1;
(statearr_49534_49560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (15))){
var inst_49509 = (state_49528[(8)]);
var inst_49506 = (state_49528[(9)]);
var inst_49511 = inst_49509.call(null,inst_49506);
var state_49528__$1 = state_49528;
var statearr_49535_49561 = state_49528__$1;
(statearr_49535_49561[(2)] = inst_49511);

(statearr_49535_49561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (13))){
var inst_49518 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49536_49562 = state_49528__$1;
(statearr_49536_49562[(2)] = inst_49518);

(statearr_49536_49562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (6))){
var state_49528__$1 = state_49528;
var statearr_49537_49563 = state_49528__$1;
(statearr_49537_49563[(2)] = null);

(statearr_49537_49563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (17))){
var inst_49515 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
var statearr_49538_49564 = state_49528__$1;
(statearr_49538_49564[(2)] = inst_49515);

(statearr_49538_49564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (3))){
var inst_49526 = (state_49528[(2)]);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49528__$1,inst_49526);
} else {
if((state_val_49529 === (12))){
var state_49528__$1 = state_49528;
var statearr_49539_49565 = state_49528__$1;
(statearr_49539_49565[(2)] = null);

(statearr_49539_49565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (2))){
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49529 === (11))){
var inst_49497 = (state_49528[(10)]);
var inst_49504 = figwheel.client.file_reloading.blocking_load.call(null,inst_49497);
var state_49528__$1 = state_49528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49528__$1,(14),inst_49504);
} else {
if((state_val_49529 === (9))){
var inst_49497 = (state_49528[(10)]);
var state_49528__$1 = state_49528;
if(cljs.core.truth_(inst_49497)){
var statearr_49540_49566 = state_49528__$1;
(statearr_49540_49566[(1)] = (11));

} else {
var statearr_49541_49567 = state_49528__$1;
(statearr_49541_49567[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (5))){
var inst_49498 = (state_49528[(11)]);
var inst_49492 = (state_49528[(7)]);
var inst_49497 = cljs.core.nth.call(null,inst_49492,(0),null);
var inst_49498__$1 = cljs.core.nth.call(null,inst_49492,(1),null);
var state_49528__$1 = (function (){var statearr_49542 = state_49528;
(statearr_49542[(11)] = inst_49498__$1);

(statearr_49542[(10)] = inst_49497);

return statearr_49542;
})();
if(cljs.core.truth_(inst_49498__$1)){
var statearr_49543_49568 = state_49528__$1;
(statearr_49543_49568[(1)] = (8));

} else {
var statearr_49544_49569 = state_49528__$1;
(statearr_49544_49569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (14))){
var inst_49509 = (state_49528[(8)]);
var inst_49497 = (state_49528[(10)]);
var inst_49506 = (state_49528[(2)]);
var inst_49507 = console.log("Loading!",inst_49497);
var inst_49508 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49509__$1 = cljs.core.get.call(null,inst_49508,inst_49497);
var state_49528__$1 = (function (){var statearr_49545 = state_49528;
(statearr_49545[(8)] = inst_49509__$1);

(statearr_49545[(9)] = inst_49506);

(statearr_49545[(12)] = inst_49507);

return statearr_49545;
})();
if(cljs.core.truth_(inst_49509__$1)){
var statearr_49546_49570 = state_49528__$1;
(statearr_49546_49570[(1)] = (15));

} else {
var statearr_49547_49571 = state_49528__$1;
(statearr_49547_49571[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (16))){
var inst_49506 = (state_49528[(9)]);
var inst_49513 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49506);
var state_49528__$1 = state_49528;
var statearr_49548_49572 = state_49528__$1;
(statearr_49548_49572[(2)] = inst_49513);

(statearr_49548_49572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (10))){
var inst_49520 = (state_49528[(2)]);
var state_49528__$1 = (function (){var statearr_49549 = state_49528;
(statearr_49549[(13)] = inst_49520);

return statearr_49549;
})();
var statearr_49550_49573 = state_49528__$1;
(statearr_49550_49573[(2)] = null);

(statearr_49550_49573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49529 === (8))){
var inst_49498 = (state_49528[(11)]);
var inst_49500 = console.log("Evaling!",inst_49498);
var inst_49501 = eval(inst_49498);
var state_49528__$1 = (function (){var statearr_49551 = state_49528;
(statearr_49551[(14)] = inst_49500);

return statearr_49551;
})();
var statearr_49552_49574 = state_49528__$1;
(statearr_49552_49574[(2)] = inst_49501);

(statearr_49552_49574[(1)] = (10));


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
});})(c__45492__auto__))
;
return ((function (switch__45404__auto__,c__45492__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__45405__auto__ = null;
var figwheel$client$file_reloading$state_machine__45405__auto____0 = (function (){
var statearr_49553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49553[(0)] = figwheel$client$file_reloading$state_machine__45405__auto__);

(statearr_49553[(1)] = (1));

return statearr_49553;
});
var figwheel$client$file_reloading$state_machine__45405__auto____1 = (function (state_49528){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_49528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e49554){if((e49554 instanceof Object)){
var ex__45408__auto__ = e49554;
var statearr_49555_49575 = state_49528;
(statearr_49555_49575[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49576 = state_49528;
state_49528 = G__49576;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__45405__auto__ = function(state_49528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__45405__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__45405__auto____1.call(this,state_49528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__45405__auto____0;
figwheel$client$file_reloading$state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__45405__auto____1;
return figwheel$client$file_reloading$state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__))
})();
var state__45494__auto__ = (function (){var statearr_49556 = f__45493__auto__.call(null);
(statearr_49556[(6)] = c__45492__auto__);

return statearr_49556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__))
);

return c__45492__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__49578 = arguments.length;
switch (G__49578) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49580,callback){
var map__49581 = p__49580;
var map__49581__$1 = ((((!((map__49581 == null)))?((((map__49581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49581):map__49581);
var file_msg = map__49581__$1;
var namespace = cljs.core.get.call(null,map__49581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49581,map__49581__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49581,map__49581__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49583){
var map__49584 = p__49583;
var map__49584__$1 = ((((!((map__49584 == null)))?((((map__49584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49584):map__49584);
var file_msg = map__49584__$1;
var namespace = cljs.core.get.call(null,map__49584__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49586){
var map__49587 = p__49586;
var map__49587__$1 = ((((!((map__49587 == null)))?((((map__49587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49587):map__49587);
var file_msg = map__49587__$1;
var namespace = cljs.core.get.call(null,map__49587__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49589,callback){
var map__49590 = p__49589;
var map__49590__$1 = ((((!((map__49590 == null)))?((((map__49590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49590):map__49590);
var file_msg = map__49590__$1;
var request_url = cljs.core.get.call(null,map__49590__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49590__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__45492__auto___49640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto___49640,out){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto___49640,out){
return (function (state_49625){
var state_val_49626 = (state_49625[(1)]);
if((state_val_49626 === (1))){
var inst_49599 = cljs.core.seq.call(null,files);
var inst_49600 = cljs.core.first.call(null,inst_49599);
var inst_49601 = cljs.core.next.call(null,inst_49599);
var inst_49602 = files;
var state_49625__$1 = (function (){var statearr_49627 = state_49625;
(statearr_49627[(7)] = inst_49602);

(statearr_49627[(8)] = inst_49600);

(statearr_49627[(9)] = inst_49601);

return statearr_49627;
})();
var statearr_49628_49641 = state_49625__$1;
(statearr_49628_49641[(2)] = null);

(statearr_49628_49641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (2))){
var inst_49602 = (state_49625[(7)]);
var inst_49608 = (state_49625[(10)]);
var inst_49607 = cljs.core.seq.call(null,inst_49602);
var inst_49608__$1 = cljs.core.first.call(null,inst_49607);
var inst_49609 = cljs.core.next.call(null,inst_49607);
var inst_49610 = (inst_49608__$1 == null);
var inst_49611 = cljs.core.not.call(null,inst_49610);
var state_49625__$1 = (function (){var statearr_49629 = state_49625;
(statearr_49629[(11)] = inst_49609);

(statearr_49629[(10)] = inst_49608__$1);

return statearr_49629;
})();
if(inst_49611){
var statearr_49630_49642 = state_49625__$1;
(statearr_49630_49642[(1)] = (4));

} else {
var statearr_49631_49643 = state_49625__$1;
(statearr_49631_49643[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (3))){
var inst_49623 = (state_49625[(2)]);
var state_49625__$1 = state_49625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49625__$1,inst_49623);
} else {
if((state_val_49626 === (4))){
var inst_49608 = (state_49625[(10)]);
var inst_49613 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49608);
var state_49625__$1 = state_49625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49625__$1,(7),inst_49613);
} else {
if((state_val_49626 === (5))){
var inst_49619 = cljs.core.async.close_BANG_.call(null,out);
var state_49625__$1 = state_49625;
var statearr_49632_49644 = state_49625__$1;
(statearr_49632_49644[(2)] = inst_49619);

(statearr_49632_49644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (6))){
var inst_49621 = (state_49625[(2)]);
var state_49625__$1 = state_49625;
var statearr_49633_49645 = state_49625__$1;
(statearr_49633_49645[(2)] = inst_49621);

(statearr_49633_49645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49626 === (7))){
var inst_49609 = (state_49625[(11)]);
var inst_49615 = (state_49625[(2)]);
var inst_49616 = cljs.core.async.put_BANG_.call(null,out,inst_49615);
var inst_49602 = inst_49609;
var state_49625__$1 = (function (){var statearr_49634 = state_49625;
(statearr_49634[(12)] = inst_49616);

(statearr_49634[(7)] = inst_49602);

return statearr_49634;
})();
var statearr_49635_49646 = state_49625__$1;
(statearr_49635_49646[(2)] = null);

(statearr_49635_49646[(1)] = (2));


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
});})(c__45492__auto___49640,out))
;
return ((function (switch__45404__auto__,c__45492__auto___49640,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto____0 = (function (){
var statearr_49636 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49636[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto__);

(statearr_49636[(1)] = (1));

return statearr_49636;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto____1 = (function (state_49625){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_49625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e49637){if((e49637 instanceof Object)){
var ex__45408__auto__ = e49637;
var statearr_49638_49647 = state_49625;
(statearr_49638_49647[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49648 = state_49625;
state_49625 = G__49648;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto__ = function(state_49625){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto____1.call(this,state_49625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto___49640,out))
})();
var state__45494__auto__ = (function (){var statearr_49639 = f__45493__auto__.call(null);
(statearr_49639[(6)] = c__45492__auto___49640);

return statearr_49639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto___49640,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49649,opts){
var map__49650 = p__49649;
var map__49650__$1 = ((((!((map__49650 == null)))?((((map__49650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49650):map__49650);
var eval_body = cljs.core.get.call(null,map__49650__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49650__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e49652){var e = e49652;
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
return (function (p1__49653_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49653_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49654){
var vec__49655 = p__49654;
var k = cljs.core.nth.call(null,vec__49655,(0),null);
var v = cljs.core.nth.call(null,vec__49655,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49658){
var vec__49659 = p__49658;
var k = cljs.core.nth.call(null,vec__49659,(0),null);
var v = cljs.core.nth.call(null,vec__49659,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49665,p__49666){
var map__49667 = p__49665;
var map__49667__$1 = ((((!((map__49667 == null)))?((((map__49667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49667):map__49667);
var opts = map__49667__$1;
var before_jsload = cljs.core.get.call(null,map__49667__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49667__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49667__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49668 = p__49666;
var map__49668__$1 = ((((!((map__49668 == null)))?((((map__49668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49668):map__49668);
var msg = map__49668__$1;
var files = cljs.core.get.call(null,map__49668__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49668__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49668__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__45492__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__45493__auto__ = (function (){var switch__45404__auto__ = ((function (c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49822){
var state_val_49823 = (state_49822[(1)]);
if((state_val_49823 === (7))){
var inst_49682 = (state_49822[(7)]);
var inst_49683 = (state_49822[(8)]);
var inst_49685 = (state_49822[(9)]);
var inst_49684 = (state_49822[(10)]);
var inst_49690 = cljs.core._nth.call(null,inst_49683,inst_49685);
var inst_49691 = figwheel.client.file_reloading.eval_body.call(null,inst_49690,opts);
var inst_49692 = (inst_49685 + (1));
var tmp49824 = inst_49682;
var tmp49825 = inst_49683;
var tmp49826 = inst_49684;
var inst_49682__$1 = tmp49824;
var inst_49683__$1 = tmp49825;
var inst_49684__$1 = tmp49826;
var inst_49685__$1 = inst_49692;
var state_49822__$1 = (function (){var statearr_49827 = state_49822;
(statearr_49827[(7)] = inst_49682__$1);

(statearr_49827[(8)] = inst_49683__$1);

(statearr_49827[(9)] = inst_49685__$1);

(statearr_49827[(11)] = inst_49691);

(statearr_49827[(10)] = inst_49684__$1);

return statearr_49827;
})();
var statearr_49828_49911 = state_49822__$1;
(statearr_49828_49911[(2)] = null);

(statearr_49828_49911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (20))){
var inst_49725 = (state_49822[(12)]);
var inst_49733 = figwheel.client.file_reloading.sort_files.call(null,inst_49725);
var state_49822__$1 = state_49822;
var statearr_49829_49912 = state_49822__$1;
(statearr_49829_49912[(2)] = inst_49733);

(statearr_49829_49912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (27))){
var state_49822__$1 = state_49822;
var statearr_49830_49913 = state_49822__$1;
(statearr_49830_49913[(2)] = null);

(statearr_49830_49913[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (1))){
var inst_49674 = (state_49822[(13)]);
var inst_49671 = before_jsload.call(null,files);
var inst_49672 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49673 = (function (){return ((function (inst_49674,inst_49671,inst_49672,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49662_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49662_SHARP_);
});
;})(inst_49674,inst_49671,inst_49672,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49674__$1 = cljs.core.filter.call(null,inst_49673,files);
var inst_49675 = cljs.core.not_empty.call(null,inst_49674__$1);
var state_49822__$1 = (function (){var statearr_49831 = state_49822;
(statearr_49831[(14)] = inst_49672);

(statearr_49831[(13)] = inst_49674__$1);

(statearr_49831[(15)] = inst_49671);

return statearr_49831;
})();
if(cljs.core.truth_(inst_49675)){
var statearr_49832_49914 = state_49822__$1;
(statearr_49832_49914[(1)] = (2));

} else {
var statearr_49833_49915 = state_49822__$1;
(statearr_49833_49915[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (24))){
var state_49822__$1 = state_49822;
var statearr_49834_49916 = state_49822__$1;
(statearr_49834_49916[(2)] = null);

(statearr_49834_49916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (39))){
var inst_49775 = (state_49822[(16)]);
var state_49822__$1 = state_49822;
var statearr_49835_49917 = state_49822__$1;
(statearr_49835_49917[(2)] = inst_49775);

(statearr_49835_49917[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (46))){
var inst_49817 = (state_49822[(2)]);
var state_49822__$1 = state_49822;
var statearr_49836_49918 = state_49822__$1;
(statearr_49836_49918[(2)] = inst_49817);

(statearr_49836_49918[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (4))){
var inst_49719 = (state_49822[(2)]);
var inst_49720 = cljs.core.List.EMPTY;
var inst_49721 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49720);
var inst_49722 = (function (){return ((function (inst_49719,inst_49720,inst_49721,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49663_SHARP_){
var and__36296__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49663_SHARP_);
if(cljs.core.truth_(and__36296__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49663_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49663_SHARP_)));
} else {
return and__36296__auto__;
}
});
;})(inst_49719,inst_49720,inst_49721,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49723 = cljs.core.filter.call(null,inst_49722,files);
var inst_49724 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49725 = cljs.core.concat.call(null,inst_49723,inst_49724);
var state_49822__$1 = (function (){var statearr_49837 = state_49822;
(statearr_49837[(17)] = inst_49721);

(statearr_49837[(18)] = inst_49719);

(statearr_49837[(12)] = inst_49725);

return statearr_49837;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49838_49919 = state_49822__$1;
(statearr_49838_49919[(1)] = (16));

} else {
var statearr_49839_49920 = state_49822__$1;
(statearr_49839_49920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (15))){
var inst_49709 = (state_49822[(2)]);
var state_49822__$1 = state_49822;
var statearr_49840_49921 = state_49822__$1;
(statearr_49840_49921[(2)] = inst_49709);

(statearr_49840_49921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (21))){
var inst_49735 = (state_49822[(19)]);
var inst_49735__$1 = (state_49822[(2)]);
var inst_49736 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49735__$1);
var state_49822__$1 = (function (){var statearr_49841 = state_49822;
(statearr_49841[(19)] = inst_49735__$1);

return statearr_49841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49822__$1,(22),inst_49736);
} else {
if((state_val_49823 === (31))){
var inst_49820 = (state_49822[(2)]);
var state_49822__$1 = state_49822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49822__$1,inst_49820);
} else {
if((state_val_49823 === (32))){
var inst_49775 = (state_49822[(16)]);
var inst_49780 = inst_49775.cljs$lang$protocol_mask$partition0$;
var inst_49781 = (inst_49780 & (64));
var inst_49782 = inst_49775.cljs$core$ISeq$;
var inst_49783 = (cljs.core.PROTOCOL_SENTINEL === inst_49782);
var inst_49784 = (inst_49781) || (inst_49783);
var state_49822__$1 = state_49822;
if(cljs.core.truth_(inst_49784)){
var statearr_49842_49922 = state_49822__$1;
(statearr_49842_49922[(1)] = (35));

} else {
var statearr_49843_49923 = state_49822__$1;
(statearr_49843_49923[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (40))){
var inst_49797 = (state_49822[(20)]);
var inst_49796 = (state_49822[(2)]);
var inst_49797__$1 = cljs.core.get.call(null,inst_49796,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49798 = cljs.core.get.call(null,inst_49796,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49799 = cljs.core.not_empty.call(null,inst_49797__$1);
var state_49822__$1 = (function (){var statearr_49844 = state_49822;
(statearr_49844[(20)] = inst_49797__$1);

(statearr_49844[(21)] = inst_49798);

return statearr_49844;
})();
if(cljs.core.truth_(inst_49799)){
var statearr_49845_49924 = state_49822__$1;
(statearr_49845_49924[(1)] = (41));

} else {
var statearr_49846_49925 = state_49822__$1;
(statearr_49846_49925[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (33))){
var state_49822__$1 = state_49822;
var statearr_49847_49926 = state_49822__$1;
(statearr_49847_49926[(2)] = false);

(statearr_49847_49926[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (13))){
var inst_49695 = (state_49822[(22)]);
var inst_49699 = cljs.core.chunk_first.call(null,inst_49695);
var inst_49700 = cljs.core.chunk_rest.call(null,inst_49695);
var inst_49701 = cljs.core.count.call(null,inst_49699);
var inst_49682 = inst_49700;
var inst_49683 = inst_49699;
var inst_49684 = inst_49701;
var inst_49685 = (0);
var state_49822__$1 = (function (){var statearr_49848 = state_49822;
(statearr_49848[(7)] = inst_49682);

(statearr_49848[(8)] = inst_49683);

(statearr_49848[(9)] = inst_49685);

(statearr_49848[(10)] = inst_49684);

return statearr_49848;
})();
var statearr_49849_49927 = state_49822__$1;
(statearr_49849_49927[(2)] = null);

(statearr_49849_49927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (22))){
var inst_49735 = (state_49822[(19)]);
var inst_49739 = (state_49822[(23)]);
var inst_49743 = (state_49822[(24)]);
var inst_49738 = (state_49822[(25)]);
var inst_49738__$1 = (state_49822[(2)]);
var inst_49739__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49738__$1);
var inst_49740 = (function (){var all_files = inst_49735;
var res_SINGLEQUOTE_ = inst_49738__$1;
var res = inst_49739__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49735,inst_49739,inst_49743,inst_49738,inst_49738__$1,inst_49739__$1,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49664_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49664_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49735,inst_49739,inst_49743,inst_49738,inst_49738__$1,inst_49739__$1,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49741 = cljs.core.filter.call(null,inst_49740,inst_49738__$1);
var inst_49742 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49743__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49742);
var inst_49744 = cljs.core.not_empty.call(null,inst_49743__$1);
var state_49822__$1 = (function (){var statearr_49850 = state_49822;
(statearr_49850[(26)] = inst_49741);

(statearr_49850[(23)] = inst_49739__$1);

(statearr_49850[(24)] = inst_49743__$1);

(statearr_49850[(25)] = inst_49738__$1);

return statearr_49850;
})();
if(cljs.core.truth_(inst_49744)){
var statearr_49851_49928 = state_49822__$1;
(statearr_49851_49928[(1)] = (23));

} else {
var statearr_49852_49929 = state_49822__$1;
(statearr_49852_49929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (36))){
var state_49822__$1 = state_49822;
var statearr_49853_49930 = state_49822__$1;
(statearr_49853_49930[(2)] = false);

(statearr_49853_49930[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (41))){
var inst_49797 = (state_49822[(20)]);
var inst_49801 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49802 = cljs.core.map.call(null,inst_49801,inst_49797);
var inst_49803 = cljs.core.pr_str.call(null,inst_49802);
var inst_49804 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49803)].join('');
var inst_49805 = figwheel.client.utils.log.call(null,inst_49804);
var state_49822__$1 = state_49822;
var statearr_49854_49931 = state_49822__$1;
(statearr_49854_49931[(2)] = inst_49805);

(statearr_49854_49931[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (43))){
var inst_49798 = (state_49822[(21)]);
var inst_49808 = (state_49822[(2)]);
var inst_49809 = cljs.core.not_empty.call(null,inst_49798);
var state_49822__$1 = (function (){var statearr_49855 = state_49822;
(statearr_49855[(27)] = inst_49808);

return statearr_49855;
})();
if(cljs.core.truth_(inst_49809)){
var statearr_49856_49932 = state_49822__$1;
(statearr_49856_49932[(1)] = (44));

} else {
var statearr_49857_49933 = state_49822__$1;
(statearr_49857_49933[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (29))){
var inst_49775 = (state_49822[(16)]);
var inst_49735 = (state_49822[(19)]);
var inst_49741 = (state_49822[(26)]);
var inst_49739 = (state_49822[(23)]);
var inst_49743 = (state_49822[(24)]);
var inst_49738 = (state_49822[(25)]);
var inst_49771 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49774 = (function (){var all_files = inst_49735;
var res_SINGLEQUOTE_ = inst_49738;
var res = inst_49739;
var files_not_loaded = inst_49741;
var dependencies_that_loaded = inst_49743;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49775,inst_49735,inst_49741,inst_49739,inst_49743,inst_49738,inst_49771,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49773){
var map__49858 = p__49773;
var map__49858__$1 = ((((!((map__49858 == null)))?((((map__49858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49858):map__49858);
var namespace = cljs.core.get.call(null,map__49858__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49775,inst_49735,inst_49741,inst_49739,inst_49743,inst_49738,inst_49771,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49775__$1 = cljs.core.group_by.call(null,inst_49774,inst_49741);
var inst_49777 = (inst_49775__$1 == null);
var inst_49778 = cljs.core.not.call(null,inst_49777);
var state_49822__$1 = (function (){var statearr_49860 = state_49822;
(statearr_49860[(16)] = inst_49775__$1);

(statearr_49860[(28)] = inst_49771);

return statearr_49860;
})();
if(inst_49778){
var statearr_49861_49934 = state_49822__$1;
(statearr_49861_49934[(1)] = (32));

} else {
var statearr_49862_49935 = state_49822__$1;
(statearr_49862_49935[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (44))){
var inst_49798 = (state_49822[(21)]);
var inst_49811 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49798);
var inst_49812 = cljs.core.pr_str.call(null,inst_49811);
var inst_49813 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49812)].join('');
var inst_49814 = figwheel.client.utils.log.call(null,inst_49813);
var state_49822__$1 = state_49822;
var statearr_49863_49936 = state_49822__$1;
(statearr_49863_49936[(2)] = inst_49814);

(statearr_49863_49936[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (6))){
var inst_49716 = (state_49822[(2)]);
var state_49822__$1 = state_49822;
var statearr_49864_49937 = state_49822__$1;
(statearr_49864_49937[(2)] = inst_49716);

(statearr_49864_49937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (28))){
var inst_49741 = (state_49822[(26)]);
var inst_49768 = (state_49822[(2)]);
var inst_49769 = cljs.core.not_empty.call(null,inst_49741);
var state_49822__$1 = (function (){var statearr_49865 = state_49822;
(statearr_49865[(29)] = inst_49768);

return statearr_49865;
})();
if(cljs.core.truth_(inst_49769)){
var statearr_49866_49938 = state_49822__$1;
(statearr_49866_49938[(1)] = (29));

} else {
var statearr_49867_49939 = state_49822__$1;
(statearr_49867_49939[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (25))){
var inst_49739 = (state_49822[(23)]);
var inst_49755 = (state_49822[(2)]);
var inst_49756 = cljs.core.not_empty.call(null,inst_49739);
var state_49822__$1 = (function (){var statearr_49868 = state_49822;
(statearr_49868[(30)] = inst_49755);

return statearr_49868;
})();
if(cljs.core.truth_(inst_49756)){
var statearr_49869_49940 = state_49822__$1;
(statearr_49869_49940[(1)] = (26));

} else {
var statearr_49870_49941 = state_49822__$1;
(statearr_49870_49941[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (34))){
var inst_49791 = (state_49822[(2)]);
var state_49822__$1 = state_49822;
if(cljs.core.truth_(inst_49791)){
var statearr_49871_49942 = state_49822__$1;
(statearr_49871_49942[(1)] = (38));

} else {
var statearr_49872_49943 = state_49822__$1;
(statearr_49872_49943[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (17))){
var state_49822__$1 = state_49822;
var statearr_49873_49944 = state_49822__$1;
(statearr_49873_49944[(2)] = recompile_dependents);

(statearr_49873_49944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (3))){
var state_49822__$1 = state_49822;
var statearr_49874_49945 = state_49822__$1;
(statearr_49874_49945[(2)] = null);

(statearr_49874_49945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (12))){
var inst_49712 = (state_49822[(2)]);
var state_49822__$1 = state_49822;
var statearr_49875_49946 = state_49822__$1;
(statearr_49875_49946[(2)] = inst_49712);

(statearr_49875_49946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (2))){
var inst_49674 = (state_49822[(13)]);
var inst_49681 = cljs.core.seq.call(null,inst_49674);
var inst_49682 = inst_49681;
var inst_49683 = null;
var inst_49684 = (0);
var inst_49685 = (0);
var state_49822__$1 = (function (){var statearr_49876 = state_49822;
(statearr_49876[(7)] = inst_49682);

(statearr_49876[(8)] = inst_49683);

(statearr_49876[(9)] = inst_49685);

(statearr_49876[(10)] = inst_49684);

return statearr_49876;
})();
var statearr_49877_49947 = state_49822__$1;
(statearr_49877_49947[(2)] = null);

(statearr_49877_49947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (23))){
var inst_49735 = (state_49822[(19)]);
var inst_49741 = (state_49822[(26)]);
var inst_49739 = (state_49822[(23)]);
var inst_49743 = (state_49822[(24)]);
var inst_49738 = (state_49822[(25)]);
var inst_49746 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49748 = (function (){var all_files = inst_49735;
var res_SINGLEQUOTE_ = inst_49738;
var res = inst_49739;
var files_not_loaded = inst_49741;
var dependencies_that_loaded = inst_49743;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49735,inst_49741,inst_49739,inst_49743,inst_49738,inst_49746,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49747){
var map__49878 = p__49747;
var map__49878__$1 = ((((!((map__49878 == null)))?((((map__49878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49878):map__49878);
var request_url = cljs.core.get.call(null,map__49878__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49735,inst_49741,inst_49739,inst_49743,inst_49738,inst_49746,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49749 = cljs.core.reverse.call(null,inst_49743);
var inst_49750 = cljs.core.map.call(null,inst_49748,inst_49749);
var inst_49751 = cljs.core.pr_str.call(null,inst_49750);
var inst_49752 = figwheel.client.utils.log.call(null,inst_49751);
var state_49822__$1 = (function (){var statearr_49880 = state_49822;
(statearr_49880[(31)] = inst_49746);

return statearr_49880;
})();
var statearr_49881_49948 = state_49822__$1;
(statearr_49881_49948[(2)] = inst_49752);

(statearr_49881_49948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (35))){
var state_49822__$1 = state_49822;
var statearr_49882_49949 = state_49822__$1;
(statearr_49882_49949[(2)] = true);

(statearr_49882_49949[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (19))){
var inst_49725 = (state_49822[(12)]);
var inst_49731 = figwheel.client.file_reloading.expand_files.call(null,inst_49725);
var state_49822__$1 = state_49822;
var statearr_49883_49950 = state_49822__$1;
(statearr_49883_49950[(2)] = inst_49731);

(statearr_49883_49950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (11))){
var state_49822__$1 = state_49822;
var statearr_49884_49951 = state_49822__$1;
(statearr_49884_49951[(2)] = null);

(statearr_49884_49951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (9))){
var inst_49714 = (state_49822[(2)]);
var state_49822__$1 = state_49822;
var statearr_49885_49952 = state_49822__$1;
(statearr_49885_49952[(2)] = inst_49714);

(statearr_49885_49952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (5))){
var inst_49685 = (state_49822[(9)]);
var inst_49684 = (state_49822[(10)]);
var inst_49687 = (inst_49685 < inst_49684);
var inst_49688 = inst_49687;
var state_49822__$1 = state_49822;
if(cljs.core.truth_(inst_49688)){
var statearr_49886_49953 = state_49822__$1;
(statearr_49886_49953[(1)] = (7));

} else {
var statearr_49887_49954 = state_49822__$1;
(statearr_49887_49954[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (14))){
var inst_49695 = (state_49822[(22)]);
var inst_49704 = cljs.core.first.call(null,inst_49695);
var inst_49705 = figwheel.client.file_reloading.eval_body.call(null,inst_49704,opts);
var inst_49706 = cljs.core.next.call(null,inst_49695);
var inst_49682 = inst_49706;
var inst_49683 = null;
var inst_49684 = (0);
var inst_49685 = (0);
var state_49822__$1 = (function (){var statearr_49888 = state_49822;
(statearr_49888[(7)] = inst_49682);

(statearr_49888[(8)] = inst_49683);

(statearr_49888[(9)] = inst_49685);

(statearr_49888[(10)] = inst_49684);

(statearr_49888[(32)] = inst_49705);

return statearr_49888;
})();
var statearr_49889_49955 = state_49822__$1;
(statearr_49889_49955[(2)] = null);

(statearr_49889_49955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (45))){
var state_49822__$1 = state_49822;
var statearr_49890_49956 = state_49822__$1;
(statearr_49890_49956[(2)] = null);

(statearr_49890_49956[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (26))){
var inst_49735 = (state_49822[(19)]);
var inst_49741 = (state_49822[(26)]);
var inst_49739 = (state_49822[(23)]);
var inst_49743 = (state_49822[(24)]);
var inst_49738 = (state_49822[(25)]);
var inst_49758 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49760 = (function (){var all_files = inst_49735;
var res_SINGLEQUOTE_ = inst_49738;
var res = inst_49739;
var files_not_loaded = inst_49741;
var dependencies_that_loaded = inst_49743;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49735,inst_49741,inst_49739,inst_49743,inst_49738,inst_49758,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49759){
var map__49891 = p__49759;
var map__49891__$1 = ((((!((map__49891 == null)))?((((map__49891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49891):map__49891);
var namespace = cljs.core.get.call(null,map__49891__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49891__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49735,inst_49741,inst_49739,inst_49743,inst_49738,inst_49758,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49761 = cljs.core.map.call(null,inst_49760,inst_49739);
var inst_49762 = cljs.core.pr_str.call(null,inst_49761);
var inst_49763 = figwheel.client.utils.log.call(null,inst_49762);
var inst_49764 = (function (){var all_files = inst_49735;
var res_SINGLEQUOTE_ = inst_49738;
var res = inst_49739;
var files_not_loaded = inst_49741;
var dependencies_that_loaded = inst_49743;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49735,inst_49741,inst_49739,inst_49743,inst_49738,inst_49758,inst_49760,inst_49761,inst_49762,inst_49763,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49735,inst_49741,inst_49739,inst_49743,inst_49738,inst_49758,inst_49760,inst_49761,inst_49762,inst_49763,state_val_49823,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49765 = setTimeout(inst_49764,(10));
var state_49822__$1 = (function (){var statearr_49893 = state_49822;
(statearr_49893[(33)] = inst_49763);

(statearr_49893[(34)] = inst_49758);

return statearr_49893;
})();
var statearr_49894_49957 = state_49822__$1;
(statearr_49894_49957[(2)] = inst_49765);

(statearr_49894_49957[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (16))){
var state_49822__$1 = state_49822;
var statearr_49895_49958 = state_49822__$1;
(statearr_49895_49958[(2)] = reload_dependents);

(statearr_49895_49958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (38))){
var inst_49775 = (state_49822[(16)]);
var inst_49793 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49775);
var state_49822__$1 = state_49822;
var statearr_49896_49959 = state_49822__$1;
(statearr_49896_49959[(2)] = inst_49793);

(statearr_49896_49959[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (30))){
var state_49822__$1 = state_49822;
var statearr_49897_49960 = state_49822__$1;
(statearr_49897_49960[(2)] = null);

(statearr_49897_49960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (10))){
var inst_49695 = (state_49822[(22)]);
var inst_49697 = cljs.core.chunked_seq_QMARK_.call(null,inst_49695);
var state_49822__$1 = state_49822;
if(inst_49697){
var statearr_49898_49961 = state_49822__$1;
(statearr_49898_49961[(1)] = (13));

} else {
var statearr_49899_49962 = state_49822__$1;
(statearr_49899_49962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (18))){
var inst_49729 = (state_49822[(2)]);
var state_49822__$1 = state_49822;
if(cljs.core.truth_(inst_49729)){
var statearr_49900_49963 = state_49822__$1;
(statearr_49900_49963[(1)] = (19));

} else {
var statearr_49901_49964 = state_49822__$1;
(statearr_49901_49964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (42))){
var state_49822__$1 = state_49822;
var statearr_49902_49965 = state_49822__$1;
(statearr_49902_49965[(2)] = null);

(statearr_49902_49965[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (37))){
var inst_49788 = (state_49822[(2)]);
var state_49822__$1 = state_49822;
var statearr_49903_49966 = state_49822__$1;
(statearr_49903_49966[(2)] = inst_49788);

(statearr_49903_49966[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49823 === (8))){
var inst_49695 = (state_49822[(22)]);
var inst_49682 = (state_49822[(7)]);
var inst_49695__$1 = cljs.core.seq.call(null,inst_49682);
var state_49822__$1 = (function (){var statearr_49904 = state_49822;
(statearr_49904[(22)] = inst_49695__$1);

return statearr_49904;
})();
if(inst_49695__$1){
var statearr_49905_49967 = state_49822__$1;
(statearr_49905_49967[(1)] = (10));

} else {
var statearr_49906_49968 = state_49822__$1;
(statearr_49906_49968[(1)] = (11));

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
});})(c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__45404__auto__,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto____0 = (function (){
var statearr_49907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49907[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto__);

(statearr_49907[(1)] = (1));

return statearr_49907;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto____1 = (function (state_49822){
while(true){
var ret_value__45406__auto__ = (function (){try{while(true){
var result__45407__auto__ = switch__45404__auto__.call(null,state_49822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45407__auto__;
}
break;
}
}catch (e49908){if((e49908 instanceof Object)){
var ex__45408__auto__ = e49908;
var statearr_49909_49969 = state_49822;
(statearr_49909_49969[(5)] = ex__45408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49970 = state_49822;
state_49822 = G__49970;
continue;
} else {
return ret_value__45406__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto__ = function(state_49822){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto____1.call(this,state_49822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45405__auto__;
})()
;})(switch__45404__auto__,c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__45494__auto__ = (function (){var statearr_49910 = f__45493__auto__.call(null);
(statearr_49910[(6)] = c__45492__auto__);

return statearr_49910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45494__auto__);
});})(c__45492__auto__,map__49667,map__49667__$1,opts,before_jsload,on_jsload,reload_dependents,map__49668,map__49668__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__45492__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49973,link){
var map__49974 = p__49973;
var map__49974__$1 = ((((!((map__49974 == null)))?((((map__49974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49974):map__49974);
var file = cljs.core.get.call(null,map__49974__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__49974,map__49974__$1,file){
return (function (p1__49971_SHARP_,p2__49972_SHARP_){
if(cljs.core._EQ_.call(null,p1__49971_SHARP_,p2__49972_SHARP_)){
return p1__49971_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__49974,map__49974__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49977){
var map__49978 = p__49977;
var map__49978__$1 = ((((!((map__49978 == null)))?((((map__49978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49978):map__49978);
var match_length = cljs.core.get.call(null,map__49978__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49978__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49976_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49976_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49980_SHARP_,p2__49981_SHARP_){
return cljs.core.assoc.call(null,p1__49980_SHARP_,cljs.core.get.call(null,p2__49981_SHARP_,key),p2__49981_SHARP_);
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
var loaded_f_datas_49982 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49982);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49982);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49983,p__49984){
var map__49985 = p__49983;
var map__49985__$1 = ((((!((map__49985 == null)))?((((map__49985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49985):map__49985);
var on_cssload = cljs.core.get.call(null,map__49985__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49986 = p__49984;
var map__49986__$1 = ((((!((map__49986 == null)))?((((map__49986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49986):map__49986);
var files_msg = map__49986__$1;
var files = cljs.core.get.call(null,map__49986__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1518330186557
