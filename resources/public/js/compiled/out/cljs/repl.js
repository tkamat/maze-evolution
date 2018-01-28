// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37271){
var map__37272 = p__37271;
var map__37272__$1 = ((((!((map__37272 == null)))?((((map__37272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37272):map__37272);
var m = map__37272__$1;
var n = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37274_37296 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37275_37297 = null;
var count__37276_37298 = (0);
var i__37277_37299 = (0);
while(true){
if((i__37277_37299 < count__37276_37298)){
var f_37300 = cljs.core._nth.call(null,chunk__37275_37297,i__37277_37299);
cljs.core.println.call(null,"  ",f_37300);

var G__37301 = seq__37274_37296;
var G__37302 = chunk__37275_37297;
var G__37303 = count__37276_37298;
var G__37304 = (i__37277_37299 + (1));
seq__37274_37296 = G__37301;
chunk__37275_37297 = G__37302;
count__37276_37298 = G__37303;
i__37277_37299 = G__37304;
continue;
} else {
var temp__4657__auto___37305 = cljs.core.seq.call(null,seq__37274_37296);
if(temp__4657__auto___37305){
var seq__37274_37306__$1 = temp__4657__auto___37305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37274_37306__$1)){
var c__29173__auto___37307 = cljs.core.chunk_first.call(null,seq__37274_37306__$1);
var G__37308 = cljs.core.chunk_rest.call(null,seq__37274_37306__$1);
var G__37309 = c__29173__auto___37307;
var G__37310 = cljs.core.count.call(null,c__29173__auto___37307);
var G__37311 = (0);
seq__37274_37296 = G__37308;
chunk__37275_37297 = G__37309;
count__37276_37298 = G__37310;
i__37277_37299 = G__37311;
continue;
} else {
var f_37312 = cljs.core.first.call(null,seq__37274_37306__$1);
cljs.core.println.call(null,"  ",f_37312);

var G__37313 = cljs.core.next.call(null,seq__37274_37306__$1);
var G__37314 = null;
var G__37315 = (0);
var G__37316 = (0);
seq__37274_37296 = G__37313;
chunk__37275_37297 = G__37314;
count__37276_37298 = G__37315;
i__37277_37299 = G__37316;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37317 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28334__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28334__auto__)){
return or__28334__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37317);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37317)))?cljs.core.second.call(null,arglists_37317):arglists_37317));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37278_37318 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37279_37319 = null;
var count__37280_37320 = (0);
var i__37281_37321 = (0);
while(true){
if((i__37281_37321 < count__37280_37320)){
var vec__37282_37322 = cljs.core._nth.call(null,chunk__37279_37319,i__37281_37321);
var name_37323 = cljs.core.nth.call(null,vec__37282_37322,(0),null);
var map__37285_37324 = cljs.core.nth.call(null,vec__37282_37322,(1),null);
var map__37285_37325__$1 = ((((!((map__37285_37324 == null)))?((((map__37285_37324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37285_37324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37285_37324):map__37285_37324);
var doc_37326 = cljs.core.get.call(null,map__37285_37325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37327 = cljs.core.get.call(null,map__37285_37325__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37323);

cljs.core.println.call(null," ",arglists_37327);

if(cljs.core.truth_(doc_37326)){
cljs.core.println.call(null," ",doc_37326);
} else {
}

var G__37328 = seq__37278_37318;
var G__37329 = chunk__37279_37319;
var G__37330 = count__37280_37320;
var G__37331 = (i__37281_37321 + (1));
seq__37278_37318 = G__37328;
chunk__37279_37319 = G__37329;
count__37280_37320 = G__37330;
i__37281_37321 = G__37331;
continue;
} else {
var temp__4657__auto___37332 = cljs.core.seq.call(null,seq__37278_37318);
if(temp__4657__auto___37332){
var seq__37278_37333__$1 = temp__4657__auto___37332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37278_37333__$1)){
var c__29173__auto___37334 = cljs.core.chunk_first.call(null,seq__37278_37333__$1);
var G__37335 = cljs.core.chunk_rest.call(null,seq__37278_37333__$1);
var G__37336 = c__29173__auto___37334;
var G__37337 = cljs.core.count.call(null,c__29173__auto___37334);
var G__37338 = (0);
seq__37278_37318 = G__37335;
chunk__37279_37319 = G__37336;
count__37280_37320 = G__37337;
i__37281_37321 = G__37338;
continue;
} else {
var vec__37287_37339 = cljs.core.first.call(null,seq__37278_37333__$1);
var name_37340 = cljs.core.nth.call(null,vec__37287_37339,(0),null);
var map__37290_37341 = cljs.core.nth.call(null,vec__37287_37339,(1),null);
var map__37290_37342__$1 = ((((!((map__37290_37341 == null)))?((((map__37290_37341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37290_37341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37290_37341):map__37290_37341);
var doc_37343 = cljs.core.get.call(null,map__37290_37342__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37344 = cljs.core.get.call(null,map__37290_37342__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37340);

cljs.core.println.call(null," ",arglists_37344);

if(cljs.core.truth_(doc_37343)){
cljs.core.println.call(null," ",doc_37343);
} else {
}

var G__37345 = cljs.core.next.call(null,seq__37278_37333__$1);
var G__37346 = null;
var G__37347 = (0);
var G__37348 = (0);
seq__37278_37318 = G__37345;
chunk__37279_37319 = G__37346;
count__37280_37320 = G__37347;
i__37281_37321 = G__37348;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37292 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37293 = null;
var count__37294 = (0);
var i__37295 = (0);
while(true){
if((i__37295 < count__37294)){
var role = cljs.core._nth.call(null,chunk__37293,i__37295);
var temp__4657__auto___37349__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37349__$1)){
var spec_37350 = temp__4657__auto___37349__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37350));
} else {
}

var G__37351 = seq__37292;
var G__37352 = chunk__37293;
var G__37353 = count__37294;
var G__37354 = (i__37295 + (1));
seq__37292 = G__37351;
chunk__37293 = G__37352;
count__37294 = G__37353;
i__37295 = G__37354;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37292);
if(temp__4657__auto____$1){
var seq__37292__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37292__$1)){
var c__29173__auto__ = cljs.core.chunk_first.call(null,seq__37292__$1);
var G__37355 = cljs.core.chunk_rest.call(null,seq__37292__$1);
var G__37356 = c__29173__auto__;
var G__37357 = cljs.core.count.call(null,c__29173__auto__);
var G__37358 = (0);
seq__37292 = G__37355;
chunk__37293 = G__37356;
count__37294 = G__37357;
i__37295 = G__37358;
continue;
} else {
var role = cljs.core.first.call(null,seq__37292__$1);
var temp__4657__auto___37359__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37359__$2)){
var spec_37360 = temp__4657__auto___37359__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37360));
} else {
}

var G__37361 = cljs.core.next.call(null,seq__37292__$1);
var G__37362 = null;
var G__37363 = (0);
var G__37364 = (0);
seq__37292 = G__37361;
chunk__37293 = G__37362;
count__37294 = G__37363;
i__37295 = G__37364;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1517031116155
