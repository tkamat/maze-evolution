// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49991){
var map__49992 = p__49991;
var map__49992__$1 = ((((!((map__49992 == null)))?((((map__49992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49992):map__49992);
var m = map__49992__$1;
var n = cljs.core.get.call(null,map__49992__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49992__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49994_50016 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49995_50017 = null;
var count__49996_50018 = (0);
var i__49997_50019 = (0);
while(true){
if((i__49997_50019 < count__49996_50018)){
var f_50020 = cljs.core._nth.call(null,chunk__49995_50017,i__49997_50019);
cljs.core.println.call(null,"  ",f_50020);

var G__50021 = seq__49994_50016;
var G__50022 = chunk__49995_50017;
var G__50023 = count__49996_50018;
var G__50024 = (i__49997_50019 + (1));
seq__49994_50016 = G__50021;
chunk__49995_50017 = G__50022;
count__49996_50018 = G__50023;
i__49997_50019 = G__50024;
continue;
} else {
var temp__4657__auto___50025 = cljs.core.seq.call(null,seq__49994_50016);
if(temp__4657__auto___50025){
var seq__49994_50026__$1 = temp__4657__auto___50025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49994_50026__$1)){
var c__37147__auto___50027 = cljs.core.chunk_first.call(null,seq__49994_50026__$1);
var G__50028 = cljs.core.chunk_rest.call(null,seq__49994_50026__$1);
var G__50029 = c__37147__auto___50027;
var G__50030 = cljs.core.count.call(null,c__37147__auto___50027);
var G__50031 = (0);
seq__49994_50016 = G__50028;
chunk__49995_50017 = G__50029;
count__49996_50018 = G__50030;
i__49997_50019 = G__50031;
continue;
} else {
var f_50032 = cljs.core.first.call(null,seq__49994_50026__$1);
cljs.core.println.call(null,"  ",f_50032);

var G__50033 = cljs.core.next.call(null,seq__49994_50026__$1);
var G__50034 = null;
var G__50035 = (0);
var G__50036 = (0);
seq__49994_50016 = G__50033;
chunk__49995_50017 = G__50034;
count__49996_50018 = G__50035;
i__49997_50019 = G__50036;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50037 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36308__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50037);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50037)))?cljs.core.second.call(null,arglists_50037):arglists_50037));
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
var seq__49998_50038 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49999_50039 = null;
var count__50000_50040 = (0);
var i__50001_50041 = (0);
while(true){
if((i__50001_50041 < count__50000_50040)){
var vec__50002_50042 = cljs.core._nth.call(null,chunk__49999_50039,i__50001_50041);
var name_50043 = cljs.core.nth.call(null,vec__50002_50042,(0),null);
var map__50005_50044 = cljs.core.nth.call(null,vec__50002_50042,(1),null);
var map__50005_50045__$1 = ((((!((map__50005_50044 == null)))?((((map__50005_50044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50005_50044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50005_50044):map__50005_50044);
var doc_50046 = cljs.core.get.call(null,map__50005_50045__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50047 = cljs.core.get.call(null,map__50005_50045__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50043);

cljs.core.println.call(null," ",arglists_50047);

if(cljs.core.truth_(doc_50046)){
cljs.core.println.call(null," ",doc_50046);
} else {
}

var G__50048 = seq__49998_50038;
var G__50049 = chunk__49999_50039;
var G__50050 = count__50000_50040;
var G__50051 = (i__50001_50041 + (1));
seq__49998_50038 = G__50048;
chunk__49999_50039 = G__50049;
count__50000_50040 = G__50050;
i__50001_50041 = G__50051;
continue;
} else {
var temp__4657__auto___50052 = cljs.core.seq.call(null,seq__49998_50038);
if(temp__4657__auto___50052){
var seq__49998_50053__$1 = temp__4657__auto___50052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49998_50053__$1)){
var c__37147__auto___50054 = cljs.core.chunk_first.call(null,seq__49998_50053__$1);
var G__50055 = cljs.core.chunk_rest.call(null,seq__49998_50053__$1);
var G__50056 = c__37147__auto___50054;
var G__50057 = cljs.core.count.call(null,c__37147__auto___50054);
var G__50058 = (0);
seq__49998_50038 = G__50055;
chunk__49999_50039 = G__50056;
count__50000_50040 = G__50057;
i__50001_50041 = G__50058;
continue;
} else {
var vec__50007_50059 = cljs.core.first.call(null,seq__49998_50053__$1);
var name_50060 = cljs.core.nth.call(null,vec__50007_50059,(0),null);
var map__50010_50061 = cljs.core.nth.call(null,vec__50007_50059,(1),null);
var map__50010_50062__$1 = ((((!((map__50010_50061 == null)))?((((map__50010_50061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50010_50061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50010_50061):map__50010_50061);
var doc_50063 = cljs.core.get.call(null,map__50010_50062__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50064 = cljs.core.get.call(null,map__50010_50062__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50060);

cljs.core.println.call(null," ",arglists_50064);

if(cljs.core.truth_(doc_50063)){
cljs.core.println.call(null," ",doc_50063);
} else {
}

var G__50065 = cljs.core.next.call(null,seq__49998_50053__$1);
var G__50066 = null;
var G__50067 = (0);
var G__50068 = (0);
seq__49998_50038 = G__50065;
chunk__49999_50039 = G__50066;
count__50000_50040 = G__50067;
i__50001_50041 = G__50068;
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

var seq__50012 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50013 = null;
var count__50014 = (0);
var i__50015 = (0);
while(true){
if((i__50015 < count__50014)){
var role = cljs.core._nth.call(null,chunk__50013,i__50015);
var temp__4657__auto___50069__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___50069__$1)){
var spec_50070 = temp__4657__auto___50069__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50070));
} else {
}

var G__50071 = seq__50012;
var G__50072 = chunk__50013;
var G__50073 = count__50014;
var G__50074 = (i__50015 + (1));
seq__50012 = G__50071;
chunk__50013 = G__50072;
count__50014 = G__50073;
i__50015 = G__50074;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__50012);
if(temp__4657__auto____$1){
var seq__50012__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50012__$1)){
var c__37147__auto__ = cljs.core.chunk_first.call(null,seq__50012__$1);
var G__50075 = cljs.core.chunk_rest.call(null,seq__50012__$1);
var G__50076 = c__37147__auto__;
var G__50077 = cljs.core.count.call(null,c__37147__auto__);
var G__50078 = (0);
seq__50012 = G__50075;
chunk__50013 = G__50076;
count__50014 = G__50077;
i__50015 = G__50078;
continue;
} else {
var role = cljs.core.first.call(null,seq__50012__$1);
var temp__4657__auto___50079__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___50079__$2)){
var spec_50080 = temp__4657__auto___50079__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50080));
} else {
}

var G__50081 = cljs.core.next.call(null,seq__50012__$1);
var G__50082 = null;
var G__50083 = (0);
var G__50084 = (0);
seq__50012 = G__50081;
chunk__50013 = G__50082;
count__50014 = G__50083;
i__50015 = G__50084;
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

//# sourceMappingURL=repl.js.map?rel=1518330186685
