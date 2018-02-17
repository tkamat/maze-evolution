// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41274){
var map__41275 = p__41274;
var map__41275__$1 = ((((!((map__41275 == null)))?((((map__41275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41275):map__41275);
var m = map__41275__$1;
var n = cljs.core.get.call(null,map__41275__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41275__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__41277_41299 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41278_41300 = null;
var count__41279_41301 = (0);
var i__41280_41302 = (0);
while(true){
if((i__41280_41302 < count__41279_41301)){
var f_41303 = cljs.core._nth.call(null,chunk__41278_41300,i__41280_41302);
cljs.core.println.call(null,"  ",f_41303);

var G__41304 = seq__41277_41299;
var G__41305 = chunk__41278_41300;
var G__41306 = count__41279_41301;
var G__41307 = (i__41280_41302 + (1));
seq__41277_41299 = G__41304;
chunk__41278_41300 = G__41305;
count__41279_41301 = G__41306;
i__41280_41302 = G__41307;
continue;
} else {
var temp__4657__auto___41308 = cljs.core.seq.call(null,seq__41277_41299);
if(temp__4657__auto___41308){
var seq__41277_41309__$1 = temp__4657__auto___41308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41277_41309__$1)){
var c__37147__auto___41310 = cljs.core.chunk_first.call(null,seq__41277_41309__$1);
var G__41311 = cljs.core.chunk_rest.call(null,seq__41277_41309__$1);
var G__41312 = c__37147__auto___41310;
var G__41313 = cljs.core.count.call(null,c__37147__auto___41310);
var G__41314 = (0);
seq__41277_41299 = G__41311;
chunk__41278_41300 = G__41312;
count__41279_41301 = G__41313;
i__41280_41302 = G__41314;
continue;
} else {
var f_41315 = cljs.core.first.call(null,seq__41277_41309__$1);
cljs.core.println.call(null,"  ",f_41315);

var G__41316 = cljs.core.next.call(null,seq__41277_41309__$1);
var G__41317 = null;
var G__41318 = (0);
var G__41319 = (0);
seq__41277_41299 = G__41316;
chunk__41278_41300 = G__41317;
count__41279_41301 = G__41318;
i__41280_41302 = G__41319;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41320 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41320);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41320)))?cljs.core.second.call(null,arglists_41320):arglists_41320));
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
var seq__41281_41321 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41282_41322 = null;
var count__41283_41323 = (0);
var i__41284_41324 = (0);
while(true){
if((i__41284_41324 < count__41283_41323)){
var vec__41285_41325 = cljs.core._nth.call(null,chunk__41282_41322,i__41284_41324);
var name_41326 = cljs.core.nth.call(null,vec__41285_41325,(0),null);
var map__41288_41327 = cljs.core.nth.call(null,vec__41285_41325,(1),null);
var map__41288_41328__$1 = ((((!((map__41288_41327 == null)))?((((map__41288_41327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41288_41327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41288_41327):map__41288_41327);
var doc_41329 = cljs.core.get.call(null,map__41288_41328__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41330 = cljs.core.get.call(null,map__41288_41328__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41326);

cljs.core.println.call(null," ",arglists_41330);

if(cljs.core.truth_(doc_41329)){
cljs.core.println.call(null," ",doc_41329);
} else {
}

var G__41331 = seq__41281_41321;
var G__41332 = chunk__41282_41322;
var G__41333 = count__41283_41323;
var G__41334 = (i__41284_41324 + (1));
seq__41281_41321 = G__41331;
chunk__41282_41322 = G__41332;
count__41283_41323 = G__41333;
i__41284_41324 = G__41334;
continue;
} else {
var temp__4657__auto___41335 = cljs.core.seq.call(null,seq__41281_41321);
if(temp__4657__auto___41335){
var seq__41281_41336__$1 = temp__4657__auto___41335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41281_41336__$1)){
var c__37147__auto___41337 = cljs.core.chunk_first.call(null,seq__41281_41336__$1);
var G__41338 = cljs.core.chunk_rest.call(null,seq__41281_41336__$1);
var G__41339 = c__37147__auto___41337;
var G__41340 = cljs.core.count.call(null,c__37147__auto___41337);
var G__41341 = (0);
seq__41281_41321 = G__41338;
chunk__41282_41322 = G__41339;
count__41283_41323 = G__41340;
i__41284_41324 = G__41341;
continue;
} else {
var vec__41290_41342 = cljs.core.first.call(null,seq__41281_41336__$1);
var name_41343 = cljs.core.nth.call(null,vec__41290_41342,(0),null);
var map__41293_41344 = cljs.core.nth.call(null,vec__41290_41342,(1),null);
var map__41293_41345__$1 = ((((!((map__41293_41344 == null)))?((((map__41293_41344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41293_41344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41293_41344):map__41293_41344);
var doc_41346 = cljs.core.get.call(null,map__41293_41345__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41347 = cljs.core.get.call(null,map__41293_41345__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41343);

cljs.core.println.call(null," ",arglists_41347);

if(cljs.core.truth_(doc_41346)){
cljs.core.println.call(null," ",doc_41346);
} else {
}

var G__41348 = cljs.core.next.call(null,seq__41281_41336__$1);
var G__41349 = null;
var G__41350 = (0);
var G__41351 = (0);
seq__41281_41321 = G__41348;
chunk__41282_41322 = G__41349;
count__41283_41323 = G__41350;
i__41284_41324 = G__41351;
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

var seq__41295 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41296 = null;
var count__41297 = (0);
var i__41298 = (0);
while(true){
if((i__41298 < count__41297)){
var role = cljs.core._nth.call(null,chunk__41296,i__41298);
var temp__4657__auto___41352__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41352__$1)){
var spec_41353 = temp__4657__auto___41352__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41353));
} else {
}

var G__41354 = seq__41295;
var G__41355 = chunk__41296;
var G__41356 = count__41297;
var G__41357 = (i__41298 + (1));
seq__41295 = G__41354;
chunk__41296 = G__41355;
count__41297 = G__41356;
i__41298 = G__41357;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41295);
if(temp__4657__auto____$1){
var seq__41295__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41295__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__41295__$1);
var G__41358 = cljs.core.chunk_rest.call(null,seq__41295__$1);
var G__41359 = c__37147__auto__;
var G__41360 = cljs.core.count.call(null,c__37147__auto__);
var G__41361 = (0);
seq__41295 = G__41358;
chunk__41296 = G__41359;
count__41297 = G__41360;
i__41298 = G__41361;
continue;
} else {
var role = cljs.core.first.call(null,seq__41295__$1);
var temp__4657__auto___41362__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41362__$2)){
var spec_41363 = temp__4657__auto___41362__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41363));
} else {
}

var G__41364 = cljs.core.next.call(null,seq__41295__$1);
var G__41365 = null;
var G__41366 = (0);
var G__41367 = (0);
seq__41295 = G__41364;
chunk__41296 = G__41365;
count__41297 = G__41366;
i__41298 = G__41367;
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

//# sourceMappingURL=repl.js.map?rel=1518645798976
