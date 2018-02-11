// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40048){
var map__40049 = p__40048;
var map__40049__$1 = ((((!((map__40049 == null)))?((((map__40049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40049):map__40049);
var m = map__40049__$1;
var n = cljs.core.get.call(null,map__40049__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40049__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__40051_40073 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40052_40074 = null;
var count__40053_40075 = (0);
var i__40054_40076 = (0);
while(true){
if((i__40054_40076 < count__40053_40075)){
var f_40077 = cljs.core._nth.call(null,chunk__40052_40074,i__40054_40076);
cljs.core.println.call(null,"  ",f_40077);

var G__40078 = seq__40051_40073;
var G__40079 = chunk__40052_40074;
var G__40080 = count__40053_40075;
var G__40081 = (i__40054_40076 + (1));
seq__40051_40073 = G__40078;
chunk__40052_40074 = G__40079;
count__40053_40075 = G__40080;
i__40054_40076 = G__40081;
continue;
} else {
var temp__4657__auto___40082 = cljs.core.seq.call(null,seq__40051_40073);
if(temp__4657__auto___40082){
var seq__40051_40083__$1 = temp__4657__auto___40082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40051_40083__$1)){
var c__37147__auto___40084 = cljs.core.chunk_first.call(null,seq__40051_40083__$1);
var G__40085 = cljs.core.chunk_rest.call(null,seq__40051_40083__$1);
var G__40086 = c__37147__auto___40084;
var G__40087 = cljs.core.count.call(null,c__37147__auto___40084);
var G__40088 = (0);
seq__40051_40073 = G__40085;
chunk__40052_40074 = G__40086;
count__40053_40075 = G__40087;
i__40054_40076 = G__40088;
continue;
} else {
var f_40089 = cljs.core.first.call(null,seq__40051_40083__$1);
cljs.core.println.call(null,"  ",f_40089);

var G__40090 = cljs.core.next.call(null,seq__40051_40083__$1);
var G__40091 = null;
var G__40092 = (0);
var G__40093 = (0);
seq__40051_40073 = G__40090;
chunk__40052_40074 = G__40091;
count__40053_40075 = G__40092;
i__40054_40076 = G__40093;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40094 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40094);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40094)))?cljs.core.second.call(null,arglists_40094):arglists_40094));
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
var seq__40055_40095 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40056_40096 = null;
var count__40057_40097 = (0);
var i__40058_40098 = (0);
while(true){
if((i__40058_40098 < count__40057_40097)){
var vec__40059_40099 = cljs.core._nth.call(null,chunk__40056_40096,i__40058_40098);
var name_40100 = cljs.core.nth.call(null,vec__40059_40099,(0),null);
var map__40062_40101 = cljs.core.nth.call(null,vec__40059_40099,(1),null);
var map__40062_40102__$1 = ((((!((map__40062_40101 == null)))?((((map__40062_40101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40062_40101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40062_40101):map__40062_40101);
var doc_40103 = cljs.core.get.call(null,map__40062_40102__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40104 = cljs.core.get.call(null,map__40062_40102__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40100);

cljs.core.println.call(null," ",arglists_40104);

if(cljs.core.truth_(doc_40103)){
cljs.core.println.call(null," ",doc_40103);
} else {
}

var G__40105 = seq__40055_40095;
var G__40106 = chunk__40056_40096;
var G__40107 = count__40057_40097;
var G__40108 = (i__40058_40098 + (1));
seq__40055_40095 = G__40105;
chunk__40056_40096 = G__40106;
count__40057_40097 = G__40107;
i__40058_40098 = G__40108;
continue;
} else {
var temp__4657__auto___40109 = cljs.core.seq.call(null,seq__40055_40095);
if(temp__4657__auto___40109){
var seq__40055_40110__$1 = temp__4657__auto___40109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40055_40110__$1)){
var c__37147__auto___40111 = cljs.core.chunk_first.call(null,seq__40055_40110__$1);
var G__40112 = cljs.core.chunk_rest.call(null,seq__40055_40110__$1);
var G__40113 = c__37147__auto___40111;
var G__40114 = cljs.core.count.call(null,c__37147__auto___40111);
var G__40115 = (0);
seq__40055_40095 = G__40112;
chunk__40056_40096 = G__40113;
count__40057_40097 = G__40114;
i__40058_40098 = G__40115;
continue;
} else {
var vec__40064_40116 = cljs.core.first.call(null,seq__40055_40110__$1);
var name_40117 = cljs.core.nth.call(null,vec__40064_40116,(0),null);
var map__40067_40118 = cljs.core.nth.call(null,vec__40064_40116,(1),null);
var map__40067_40119__$1 = ((((!((map__40067_40118 == null)))?((((map__40067_40118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40067_40118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40067_40118):map__40067_40118);
var doc_40120 = cljs.core.get.call(null,map__40067_40119__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40121 = cljs.core.get.call(null,map__40067_40119__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40117);

cljs.core.println.call(null," ",arglists_40121);

if(cljs.core.truth_(doc_40120)){
cljs.core.println.call(null," ",doc_40120);
} else {
}

var G__40122 = cljs.core.next.call(null,seq__40055_40110__$1);
var G__40123 = null;
var G__40124 = (0);
var G__40125 = (0);
seq__40055_40095 = G__40122;
chunk__40056_40096 = G__40123;
count__40057_40097 = G__40124;
i__40058_40098 = G__40125;
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

var seq__40069 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40070 = null;
var count__40071 = (0);
var i__40072 = (0);
while(true){
if((i__40072 < count__40071)){
var role = cljs.core._nth.call(null,chunk__40070,i__40072);
var temp__4657__auto___40126__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40126__$1)){
var spec_40127 = temp__4657__auto___40126__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40127));
} else {
}

var G__40128 = seq__40069;
var G__40129 = chunk__40070;
var G__40130 = count__40071;
var G__40131 = (i__40072 + (1));
seq__40069 = G__40128;
chunk__40070 = G__40129;
count__40071 = G__40130;
i__40072 = G__40131;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__40069);
if(temp__4657__auto____$1){
var seq__40069__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40069__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__40069__$1);
var G__40132 = cljs.core.chunk_rest.call(null,seq__40069__$1);
var G__40133 = c__37147__auto__;
var G__40134 = cljs.core.count.call(null,c__37147__auto__);
var G__40135 = (0);
seq__40069 = G__40132;
chunk__40070 = G__40133;
count__40071 = G__40134;
i__40072 = G__40135;
continue;
} else {
var role = cljs.core.first.call(null,seq__40069__$1);
var temp__4657__auto___40136__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40136__$2)){
var spec_40137 = temp__4657__auto___40136__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40137));
} else {
}

var G__40138 = cljs.core.next.call(null,seq__40069__$1);
var G__40139 = null;
var G__40140 = (0);
var G__40141 = (0);
seq__40069 = G__40138;
chunk__40070 = G__40139;
count__40071 = G__40140;
i__40072 = G__40141;
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

//# sourceMappingURL=repl.js.map?rel=1518331026827
