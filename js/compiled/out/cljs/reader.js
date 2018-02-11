// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s))){
return s;
} else {
if((width < cljs.core.count.call(null,s))){
return cljs.core.subs.call(null,s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__38772 = b.append("0");
b = G__38772;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__36296__auto__ = cljs.reader.divisible_QMARK_.call(null,year,(4));
if(cljs.core.truth_(and__36296__auto__)){
var or__36308__auto__ = cljs.reader.indivisible_QMARK_.call(null,year,(100));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return cljs.reader.divisible_QMARK_.call(null,year,(400));
}
} else {
return and__36296__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__38773 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__38773,(0),null);
var years = cljs.core.nth.call(null,vec__38773,(1),null);
var months = cljs.core.nth.call(null,vec__38773,(2),null);
var days = cljs.core.nth.call(null,vec__38773,(3),null);
var hours = cljs.core.nth.call(null,vec__38773,(4),null);
var minutes = cljs.core.nth.call(null,vec__38773,(5),null);
var seconds = cljs.core.nth.call(null,vec__38773,(6),null);
var fraction = cljs.core.nth.call(null,vec__38773,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__38773,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__38773,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__38773,(10),null);
var v = vec__38773;
if(cljs.core.not.call(null,v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__36308__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__36308__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__36308__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__36308__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__36308__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__36308__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__36308__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__36308__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__36308__auto__)){
return or__36308__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4655__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__38776 = temp__4655__auto__;
var years = cljs.core.nth.call(null,vec__38776,(0),null);
var months = cljs.core.nth.call(null,vec__38776,(1),null);
var days = cljs.core.nth.call(null,vec__38776,(2),null);
var hours = cljs.core.nth.call(null,vec__38776,(3),null);
var minutes = cljs.core.nth.call(null,vec__38776,(4),null);
var seconds = cljs.core.nth.call(null,vec__38776,(5),null);
var ms = cljs.core.nth.call(null,vec__38776,(6),null);
var offset = cljs.core.nth.call(null,vec__38776,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp.call(null,s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems)){
return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_.call(null,form)){
var arr = [];
var seq__38779_38795 = cljs.core.seq.call(null,form);
var chunk__38780_38796 = null;
var count__38781_38797 = (0);
var i__38782_38798 = (0);
while(true){
if((i__38782_38798 < count__38781_38797)){
var x_38799 = cljs.core._nth.call(null,chunk__38780_38796,i__38782_38798);
arr.push(x_38799);

var G__38800 = seq__38779_38795;
var G__38801 = chunk__38780_38796;
var G__38802 = count__38781_38797;
var G__38803 = (i__38782_38798 + (1));
seq__38779_38795 = G__38800;
chunk__38780_38796 = G__38801;
count__38781_38797 = G__38802;
i__38782_38798 = G__38803;
continue;
} else {
var temp__4657__auto___38804 = cljs.core.seq.call(null,seq__38779_38795);
if(temp__4657__auto___38804){
var seq__38779_38805__$1 = temp__4657__auto___38804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38779_38805__$1)){
var c__37147__auto___38806 = cljs.core.chunk_first.call(null,seq__38779_38805__$1);
var G__38807 = cljs.core.chunk_rest.call(null,seq__38779_38805__$1);
var G__38808 = c__37147__auto___38806;
var G__38809 = cljs.core.count.call(null,c__37147__auto___38806);
var G__38810 = (0);
seq__38779_38795 = G__38807;
chunk__38780_38796 = G__38808;
count__38781_38797 = G__38809;
i__38782_38798 = G__38810;
continue;
} else {
var x_38811 = cljs.core.first.call(null,seq__38779_38805__$1);
arr.push(x_38811);

var G__38812 = cljs.core.next.call(null,seq__38779_38805__$1);
var G__38813 = null;
var G__38814 = (0);
var G__38815 = (0);
seq__38779_38795 = G__38812;
chunk__38780_38796 = G__38813;
count__38781_38797 = G__38814;
i__38782_38798 = G__38815;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
var obj = {};
var seq__38785_38816 = cljs.core.seq.call(null,form);
var chunk__38786_38817 = null;
var count__38787_38818 = (0);
var i__38788_38819 = (0);
while(true){
if((i__38788_38819 < count__38787_38818)){
var vec__38789_38820 = cljs.core._nth.call(null,chunk__38786_38817,i__38788_38819);
var k_38821 = cljs.core.nth.call(null,vec__38789_38820,(0),null);
var v_38822 = cljs.core.nth.call(null,vec__38789_38820,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_38821),v_38822);

var G__38823 = seq__38785_38816;
var G__38824 = chunk__38786_38817;
var G__38825 = count__38787_38818;
var G__38826 = (i__38788_38819 + (1));
seq__38785_38816 = G__38823;
chunk__38786_38817 = G__38824;
count__38787_38818 = G__38825;
i__38788_38819 = G__38826;
continue;
} else {
var temp__4657__auto___38827 = cljs.core.seq.call(null,seq__38785_38816);
if(temp__4657__auto___38827){
var seq__38785_38828__$1 = temp__4657__auto___38827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38785_38828__$1)){
var c__37147__auto___38829 = cljs.core.chunk_first.call(null,seq__38785_38828__$1);
var G__38830 = cljs.core.chunk_rest.call(null,seq__38785_38828__$1);
var G__38831 = c__37147__auto___38829;
var G__38832 = cljs.core.count.call(null,c__37147__auto___38829);
var G__38833 = (0);
seq__38785_38816 = G__38830;
chunk__38786_38817 = G__38831;
count__38787_38818 = G__38832;
i__38788_38819 = G__38833;
continue;
} else {
var vec__38792_38834 = cljs.core.first.call(null,seq__38785_38828__$1);
var k_38835 = cljs.core.nth.call(null,vec__38792_38834,(0),null);
var v_38836 = cljs.core.nth.call(null,vec__38792_38834,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_38835),v_38836);

var G__38837 = cljs.core.next.call(null,seq__38785_38828__$1);
var G__38838 = null;
var G__38839 = (0);
var G__38840 = (0);
seq__38785_38816 = G__38837;
chunk__38786_38817 = G__38838;
count__38787_38818 = G__38839;
i__38788_38819 = G__38840;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid.call(null,uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__38842 = arguments.length;
switch (G__38842) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__38843,reader){
var map__38844 = p__38843;
var map__38844__$1 = ((((!((map__38844 == null)))?((((map__38844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38844):map__38844);
var opts = map__38844__$1;
var eof = cljs.core.get.call(null,map__38844__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),((function (map__38844,map__38844__$1,opts,eof){
return (function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
});})(map__38844,map__38844__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__38848 = arguments.length;
switch (G__38848) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});

//# sourceMappingURL=reader.js.map?rel=1518330157088
