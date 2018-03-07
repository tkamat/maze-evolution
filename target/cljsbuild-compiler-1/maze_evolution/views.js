// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('maze_evolution.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('cljs.js');
goog.require('cljs.pprint');
goog.require('cljs.core.async');
goog.require('maze_evolution.events');
goog.require('maze_evolution.subs');
goog.require('maze_evolution.evolution');
maze_evolution.views.title = (function maze_evolution$views$title(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Maze Evolution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"created by Tushaar Kamat"], null)], null);
});
maze_evolution.views.individual_and_generation_counter = (function maze_evolution$views$individual_and_generation_counter(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,cljs.core.deref((function (){var G__28826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$generation], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28826) : re_frame.core.subscribe.call(null,G__28826));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,cljs.core.deref((function (){var G__28827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$individual], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28827) : re_frame.core.subscribe.call(null,G__28827));
})())], null)], null);
});
maze_evolution.views.create_rectangles = (function maze_evolution$views$create_rectangles(maze){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var row = (0);
var rectangles = cljs.core.PersistentVector.EMPTY;
while(true){
if((row < (11))){
var G__28828 = (row + (1));
var G__28829 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rectangles,(function (){var col = (0);
var rectangles__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if((col < (21))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(maze,row),col))){
var G__28830 = (col + (1));
var G__28831 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rectangles__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,((30) * col),cljs.core.cst$kw$y,((30) * row),cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null)], null));
col = G__28830;
rectangles__$1 = G__28831;
continue;
} else {
var G__28832 = (col + (1));
var G__28833 = rectangles__$1;
col = G__28832;
rectangles__$1 = G__28833;
continue;
}
} else {
return rectangles__$1;
}
break;
}
})());
row = G__28828;
rectangles = G__28829;
continue;
} else {
return rectangles;
}
break;
}
})());
});
maze_evolution.views.draw_maze = (function maze_evolution$views$draw_maze(){
var maze = (function (){var G__28834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze_DASH_map], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28834) : re_frame.core.subscribe.call(null,G__28834));
})();
return ((function (maze){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(630),cljs.core.cst$kw$height,(330),cljs.core.cst$kw$id,"maze"], null),cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$g,maze_evolution.views.create_rectangles(cljs.core.deref(maze))))], null);
});
;})(maze))
});
maze_evolution.views.draw_ball = (function maze_evolution$views$draw_ball(){
var ball_position = (function (){var G__28835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28835) : re_frame.core.subscribe.call(null,G__28835));
})();
return ((function (ball_position){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"coral"], null),cljs.core.cst$kw$r,(12),cljs.core.cst$kw$id,"ball",cljs.core.cst$kw$cx,((15) + ((30) * cljs.core.last(cljs.core.deref(ball_position)))),cljs.core.cst$kw$cy,((15) + ((30) * cljs.core.first(cljs.core.deref(ball_position))))], null)], null)], null)], null);
});
;})(ball_position))
});
maze_evolution.views.render_maze_and_ball = (function maze_evolution$views$render_maze_and_ball(){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__28836 = maze_evolution.views.draw_maze();
return (fexpr__28836.cljs$core$IFn$_invoke$arity$0 ? fexpr__28836.cljs$core$IFn$_invoke$arity$0() : fexpr__28836.call(null));
})(),(function (){var fexpr__28837 = maze_evolution.views.draw_ball();
return (fexpr__28837.cljs$core$IFn$_invoke$arity$0 ? fexpr__28837.cljs$core$IFn$_invoke$arity$0() : fexpr__28837.call(null));
})());
});
maze_evolution.views.running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
maze_evolution.views.population_test_button = (function maze_evolution$views$population_test_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core.deref(maze_evolution.views.running) === false){
return maze_evolution.evolution.test_population(maze_evolution.views.running);
} else {
return null;
}
})], null),"Test Population"], null);
});
});
maze_evolution.views.new_generation_button = (function maze_evolution$views$new_generation_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return maze_evolution.evolution.create_new_generation(maze_evolution.views.running);
})], null),"New Generation"], null);
});
});
maze_evolution.views.continuously_evolve_button = (function maze_evolution$views$continuously_evolve_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return maze_evolution.evolution.continuously_evolve(maze_evolution.views.running);
})], null),"Continuously evolve"], null);
});
});
maze_evolution.views.headless_evolve_button = (function maze_evolution$views$headless_evolve_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button_SHARP_headless_DASH_evolve,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__28838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_max_DASH_fitness_DASH_list,maze_evolution.evolution.headless_evolution_test_and_get_maximum_fitness(cljs.core.deref((function (){var G__28839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze_DASH_map], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28839) : re_frame.core.subscribe.call(null,G__28839));
})()),cljs.core.deref((function (){var G__28840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fitness_DASH_map], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28840) : re_frame.core.subscribe.call(null,G__28840));
})()),cljs.core.deref((function (){var G__28841 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$generations_DASH_to_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28841) : re_frame.core.subscribe.call(null,G__28841));
})()))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28838) : re_frame.core.dispatch.call(null,G__28838));
})], null),"Run Evolution Without Display"], null);
});
});
maze_evolution.views.input_box = (function maze_evolution$views$input_box(){
var generations_to_run = (function (){var G__28843 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$generations_DASH_to_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28843) : re_frame.core.subscribe.call(null,G__28843));
})();
return ((function (generations_to_run){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input_DASH_box,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref(generations_to_run),cljs.core.cst$kw$on_DASH_change,((function (generations_to_run){
return (function (p1__28842_SHARP_){
var fexpr__28845 = (function (){var G__28846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_generations_DASH_to_DASH_run,p1__28842_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28846) : re_frame.core.dispatch.call(null,G__28846));
})();
return (fexpr__28845.cljs$core$IFn$_invoke$arity$0 ? fexpr__28845.cljs$core$IFn$_invoke$arity$0() : fexpr__28845.call(null));
});})(generations_to_run))
], null)], null);
});
;})(generations_to_run))
});
maze_evolution.views.button_and_input = (function maze_evolution$views$button_and_input(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"button-and-input"], null),"# of Generations: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.input_box], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.headless_evolve_button], null)], null);
});
maze_evolution.views.max_fitness_list = (function maze_evolution$views$max_fitness_list(){
var fitness_list = (function (){var G__28847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$max_DASH_fitness_DASH_list], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28847) : re_frame.core.subscribe.call(null,G__28847));
})();
return ((function (fitness_list){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_SHARP_fitness_DASH_list,clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.deref(fitness_list))], null);
});
;})(fitness_list))
});
maze_evolution.views.button_group = (function maze_evolution$views$button_group(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"button-group"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.population_test_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.new_generation_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.continuously_evolve_button], null)], null);
});
});
maze_evolution.views.current_tab_underline = (function maze_evolution$views$current_tab_underline(){
var current_tab = (function (){var G__28848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28848) : re_frame.core.subscribe.call(null,G__28848));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_tab),cljs.core.cst$kw$about)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"0%"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_tab),cljs.core.cst$kw$simulation)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"50%"], null)], null)], null);
} else {
return null;
}
}
});
maze_evolution.views.simulation_panel = (function maze_evolution$views$simulation_panel(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.individual_and_generation_counter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.render_maze_and_ball], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.button_group], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.button_and_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.max_fitness_list], null)], null);
});
maze_evolution.views.about_panel = (function maze_evolution$views$about_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_SHARP_about,"Nullam eu ante vel est convallis dignissim. Fusce suscipit,\n  wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat\n  quis odio. Nunc porta vulputate tellus. Nunc rutrum turpis sed pede. Sed\n  bibendum. Aliquam posuere. Nunc aliquet, augue nec adipiscing interdum, lacus\n  tellus malesuada massa, quis varius mi purus non odio. Pellentesque\n  condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus\n  diam neque sit amet urna. Curabitur vulputate vestibulum lorem. Fusce\n  sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate\n  neque nulla lacinia eros. Sed id ligula quis est convallis tempor. Curabitur\n  lacinia pulvinar nibh. Nam a sapien."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_SHARP_about,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec\n   hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl,\n   tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus\n   et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec\n   vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla.\n   Nullam rutrum. Nam vestibulum accumsan nisl."], null)], null);
});
maze_evolution.views.current_panel = (function maze_evolution$views$current_panel(){
var current_tab = (function (){var G__28849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28849) : re_frame.core.subscribe.call(null,G__28849));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_tab),cljs.core.cst$kw$about)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.about_panel], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_tab),cljs.core.cst$kw$simulation)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.simulation_panel], null);
} else {
return null;
}
}
});
maze_evolution.views.tabs = (function maze_evolution$views$tabs(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"tabs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"about",cljs.core.cst$kw$on_DASH_focus,(function (){
var G__28850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_tab,cljs.core.cst$kw$about], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28850) : re_frame.core.dispatch.call(null,G__28850));
})], null),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"focus",cljs.core.cst$kw$on_DASH_focus,(function (){
var G__28851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_tab,cljs.core.cst$kw$simulation], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28851) : re_frame.core.dispatch.call(null,G__28851));
})], null),"Simulation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.current_tab_underline], null)], null);
});
maze_evolution.views.github_badge = (function maze_evolution$views$github_badge(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$github_DASH_badge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/tkamat/maze-evolution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$border,(0)], null),cljs.core.cst$kw$alt,"Fork me on GitHub",cljs.core.cst$kw$src,"https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"], null)], null)], null);
});
maze_evolution.views.main_panel = (function maze_evolution$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.tabs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.current_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.github_badge], null)], null);
});
