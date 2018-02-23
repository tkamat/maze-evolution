// Compiled by ClojureScript 1.9.946 {}
goog.provide('maze_evolution.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljs.js');
goog.require('cljs.pprint');
goog.require('cljs.core.async');
goog.require('maze_evolution.events');
goog.require('maze_evolution.subs');
goog.require('maze_evolution.evolution');
maze_evolution.views.title = (function maze_evolution$views$title(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Maze Evolution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"created by Tushaar Kamat"], null)], null);
});
maze_evolution.views.individual_and_generation_counter = (function maze_evolution$views$individual_and_generation_counter(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generation","generation",-2132542044)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"individual","individual",-1643964808)], null)))], null)], null);
});
maze_evolution.views.create_rectangles = (function maze_evolution$views$create_rectangles(maze){
return cljs.core.apply.call(null,cljs.core.concat,(function (){var row = (0);
var rectangles = cljs.core.PersistentVector.EMPTY;
while(true){
if((row < (11))){
var G__43744 = (row + (1));
var G__43745 = cljs.core.conj.call(null,rectangles,(function (){var col = (0);
var rectangles__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if((col < (21))){
if(cljs.core._EQ_.call(null,(1),cljs.core.nth.call(null,cljs.core.nth.call(null,maze,row),col))){
var G__43746 = (col + (1));
var G__43747 = cljs.core.conj.call(null,rectangles__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((30) * col),new cljs.core.Keyword(null,"y","y",-1757859776),((30) * row),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"height","height",1025178622),(30)], null)], null));
col = G__43746;
rectangles__$1 = G__43747;
continue;
} else {
var G__43748 = (col + (1));
var G__43749 = rectangles__$1;
col = G__43748;
rectangles__$1 = G__43749;
continue;
}
} else {
return rectangles__$1;
}
break;
}
})());
row = G__43744;
rectangles = G__43745;
continue;
} else {
return rectangles;
}
break;
}
})());
});
maze_evolution.views.draw_maze = (function maze_evolution$views$draw_maze(){
var maze = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze-map","maze-map",-1887029450)], null));
return ((function (maze){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(630),new cljs.core.Keyword(null,"height","height",1025178622),(330),new cljs.core.Keyword(null,"id","id",-1388402092),"maze"], null),cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"g","g",1738089905),maze_evolution.views.create_rectangles.call(null,cljs.core.deref.call(null,maze))))], null);
});
;})(maze))
});
maze_evolution.views.draw_ball = (function maze_evolution$views$draw_ball(){
var ball_position = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null));
return ((function (ball_position){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"coral"], null),new cljs.core.Keyword(null,"r","r",-471384190),(12),new cljs.core.Keyword(null,"id","id",-1388402092),"ball",new cljs.core.Keyword(null,"cx","cx",1272694324),((15) + ((30) * cljs.core.last.call(null,cljs.core.deref.call(null,ball_position)))),new cljs.core.Keyword(null,"cy","cy",755331060),((15) + ((30) * cljs.core.first.call(null,cljs.core.deref.call(null,ball_position))))], null)], null)], null)], null);
});
;})(ball_position))
});
maze_evolution.views.render_maze_and_ball = (function maze_evolution$views$render_maze_and_ball(){
return cljs.core.conj.call(null,maze_evolution.views.draw_maze.call(null).call(null),maze_evolution.views.draw_ball.call(null).call(null));
});
maze_evolution.views.running = cljs.core.atom.call(null,false);
maze_evolution.views.test_button = (function maze_evolution$views$test_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.deref.call(null,maze_evolution.views.running) === false){
return maze_evolution.evolution.test_population.call(null,maze_evolution.views.running);
} else {
return null;
}
})], null),"Test Population"], null);
});
});
maze_evolution.views.new_generation_button = (function maze_evolution$views$new_generation_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return maze_evolution.evolution.create_new_generation.call(null,maze_evolution.views.running);
})], null),"New Generation"], null);
});
});
maze_evolution.views.continuously_evolve_button = (function maze_evolution$views$continuously_evolve_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return maze_evolution.evolution.continuously_evolve.call(null,maze_evolution.views.running);
})], null),"Continuously evolve"], null);
});
});
maze_evolution.views.button_group = (function maze_evolution$views$button_group(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"button-group"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.test_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.new_generation_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.continuously_evolve_button], null)], null);
});
});
maze_evolution.views.current_tab_underline = (function maze_evolution$views$current_tab_underline(){
var current_tab = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621)], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab),new cljs.core.Keyword(null,"about","about",1423892543))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0%"], null)], null)], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab),new cljs.core.Keyword(null,"simulation","simulation",-1001480470))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"50%"], null)], null)], null);
} else {
return null;
}
}
});
maze_evolution.views.simulation_panel = (function maze_evolution$views$simulation_panel(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.individual_and_generation_counter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.render_maze_and_ball], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.button_group], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__39915__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43750_43754 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43751_43755 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43750_43754,_STAR_print_fn_STAR_43751_43755,sb__39915__auto__){
return (function (x__39916__auto__){
return sb__39915__auto__.append(x__39916__auto__);
});})(_STAR_print_newline_STAR_43750_43754,_STAR_print_fn_STAR_43751_43755,sb__39915__auto__))
;

try{cljs.pprint.pprint.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43751_43755;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43750_43754;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__39915__auto__)].join('');
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__39915__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43752_43756 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43753_43757 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43752_43756,_STAR_print_fn_STAR_43753_43757,sb__39915__auto__){
return (function (x__39916__auto__){
return sb__39915__auto__.append(x__39916__auto__);
});})(_STAR_print_newline_STAR_43752_43756,_STAR_print_fn_STAR_43753_43757,sb__39915__auto__))
;

try{cljs.pprint.pprint.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-fitness","current-fitness",-374495029)], null))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43753_43757;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43752_43756;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__39915__auto__)].join('');
})()], null)], null);
});
maze_evolution.views.about_panel = (function maze_evolution$views$about_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#about","p#about",-253228927),"Nullam eu ante vel est convallis dignissim. Fusce suscipit,\n  wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat\n  quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed pede. Sed\n  bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum, lacus\n  tellus malesuada massa, quis varius mi purus non odio. Pellentesque\n  condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus\n  diam neque sit amet urna. Curabitur vulputate vestibulum lorem. Fusce\n  sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate\n  neque nulla lacinia eros. Sed id ligula quis est convallis tempor. Curabitur\n  lacinia pulvinar nibh. Nam a sapien."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#about","p#about",-253228927),"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec\n   hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl,\n   tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus\n   et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec\n   vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla.\n   Nullam rutrum. Nam vestibulum accumsan nisl."], null)], null);
});
maze_evolution.views.current_panel = (function maze_evolution$views$current_panel(){
var current_tab = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621)], null));
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab),new cljs.core.Keyword(null,"about","about",1423892543))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.about_panel], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_tab),new cljs.core.Keyword(null,"simulation","simulation",-1001480470))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.simulation_panel], null);
} else {
return null;
}
}
});
maze_evolution.views.tabs = (function maze_evolution$views$tabs(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tabs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"about",new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-tab","change-tab",-2145197522),new cljs.core.Keyword(null,"about","about",1423892543)], null));
})], null),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"focus",new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-tab","change-tab",-2145197522),new cljs.core.Keyword(null,"simulation","simulation",-1001480470)], null));
})], null),"Simulation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.current_tab_underline], null)], null);
});
maze_evolution.views.github_badge = (function maze_evolution$views$github_badge(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.github-badge","a.github-badge",-1294957169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/tkamat/maze-evolution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"border","border",1444987323),(0)], null),new cljs.core.Keyword(null,"alt","alt",-3214426),"Fork me on GitHub",new cljs.core.Keyword(null,"src","src",-1651076051),"https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"], null)], null)], null);
});
maze_evolution.views.main_panel = (function maze_evolution$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.tabs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.current_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.github_badge], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1519394921479
