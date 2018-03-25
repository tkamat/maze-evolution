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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,cljs.core.deref((function (){var G__27539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$generation], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27539) : re_frame.core.subscribe.call(null,G__27539));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,cljs.core.deref((function (){var G__27540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$individual], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27540) : re_frame.core.subscribe.call(null,G__27540));
})())], null)], null);
});
maze_evolution.views.create_rectangles = (function maze_evolution$views$create_rectangles(maze){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var row = (0);
var rectangles = cljs.core.PersistentVector.EMPTY;
while(true){
if((row < (11))){
var G__27541 = (row + (1));
var G__27542 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rectangles,(function (){var col = (0);
var rectangles__$1 = cljs.core.PersistentVector.EMPTY;
while(true){
if((col < (21))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(maze,row),col))){
var G__27543 = (col + (1));
var G__27544 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rectangles__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,((30) * col),cljs.core.cst$kw$y,((30) * row),cljs.core.cst$kw$width,(30),cljs.core.cst$kw$height,(30)], null)], null));
col = G__27543;
rectangles__$1 = G__27544;
continue;
} else {
var G__27545 = (col + (1));
var G__27546 = rectangles__$1;
col = G__27545;
rectangles__$1 = G__27546;
continue;
}
} else {
return rectangles__$1;
}
break;
}
})());
row = G__27541;
rectangles = G__27542;
continue;
} else {
return rectangles;
}
break;
}
})());
});
maze_evolution.views.draw_maze = (function maze_evolution$views$draw_maze(){
var maze = (function (){var G__27547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze_DASH_map], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27547) : re_frame.core.subscribe.call(null,G__27547));
})();
return ((function (maze){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,(630),cljs.core.cst$kw$height,(330),cljs.core.cst$kw$id,"maze"], null),cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$g,maze_evolution.views.create_rectangles(cljs.core.deref(maze))))], null);
});
;})(maze))
});
maze_evolution.views.draw_ball = (function maze_evolution$views$draw_ball(){
var ball_position = (function (){var G__27548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_position], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27548) : re_frame.core.subscribe.call(null,G__27548));
})();
return ((function (ball_position){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"coral"], null),cljs.core.cst$kw$r,(12),cljs.core.cst$kw$id,"ball",cljs.core.cst$kw$cx,((15) + ((30) * cljs.core.last(cljs.core.deref(ball_position)))),cljs.core.cst$kw$cy,((15) + ((30) * cljs.core.first(cljs.core.deref(ball_position))))], null)], null)], null)], null);
});
;})(ball_position))
});
maze_evolution.views.render_maze_and_ball = (function maze_evolution$views$render_maze_and_ball(){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__27549 = maze_evolution.views.draw_maze();
return (fexpr__27549.cljs$core$IFn$_invoke$arity$0 ? fexpr__27549.cljs$core$IFn$_invoke$arity$0() : fexpr__27549.call(null));
})(),(function (){var fexpr__27550 = maze_evolution.views.draw_ball();
return (fexpr__27550.cljs$core$IFn$_invoke$arity$0 ? fexpr__27550.cljs$core$IFn$_invoke$arity$0() : fexpr__27550.call(null));
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
var G__27551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_max_DASH_fitness_DASH_list,maze_evolution.evolution.headless_evolution_test_and_get_maximum_fitness(cljs.core.deref((function (){var G__27552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$maze_DASH_map], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27552) : re_frame.core.subscribe.call(null,G__27552));
})()),cljs.core.deref((function (){var G__27553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fitness_DASH_map], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27553) : re_frame.core.subscribe.call(null,G__27553));
})()),cljs.core.deref((function (){var G__27554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$generations_DASH_to_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27554) : re_frame.core.subscribe.call(null,G__27554));
})()))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27551) : re_frame.core.dispatch.call(null,G__27551));
})], null),"Run Evolution Without Display"], null);
});
});
maze_evolution.views.input_box = (function maze_evolution$views$input_box(){
var generations_to_run = (function (){var G__27556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$generations_DASH_to_DASH_run], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27556) : re_frame.core.subscribe.call(null,G__27556));
})();
return ((function (generations_to_run){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_input_DASH_box,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.deref(generations_to_run),cljs.core.cst$kw$on_DASH_change,((function (generations_to_run){
return (function (p1__27555_SHARP_){
var fexpr__27558 = (function (){var G__27559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_generations_DASH_to_DASH_run,p1__27555_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27559) : re_frame.core.dispatch.call(null,G__27559));
})();
return (fexpr__27558.cljs$core$IFn$_invoke$arity$0 ? fexpr__27558.cljs$core$IFn$_invoke$arity$0() : fexpr__27558.call(null));
});})(generations_to_run))
], null)], null);
});
;})(generations_to_run))
});
maze_evolution.views.button_and_input = (function maze_evolution$views$button_and_input(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"button-and-input"], null),"# of Generations: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.input_box], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.headless_evolve_button], null)], null);
});
maze_evolution.views.max_fitness_list = (function maze_evolution$views$max_fitness_list(){
var fitness_list = (function (){var G__27560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$max_DASH_fitness_DASH_list], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27560) : re_frame.core.subscribe.call(null,G__27560));
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
var current_tab = (function (){var G__27561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27561) : re_frame.core.subscribe.call(null,G__27561));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_SHARP_about,"This website attempts to evolve solutions to a simple maze,\n  using genetic algorithms. Originally proposed by John H. Holland, genetic\n  algorithms apply the theories of evolution and natural selection to computer\n  programs. This simulation (access by clicking the \"simulation\" tab at the\n  top) initializes the \"population\" by generating a random series of moves.\n  After this, clicking the \"test population\" button will run the simulation, running each sequence of moves to "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_SHARP_about,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec\n   hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl,\n   tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus\n   et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec\n   vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla.\n   Nullam rutrum. Nam vestibulum accumsan nisl."], null)], null);
});
maze_evolution.views.current_panel = (function maze_evolution$views$current_panel(){
var current_tab = (function (){var G__27562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27562) : re_frame.core.subscribe.call(null,G__27562));
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
var G__27563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_tab,cljs.core.cst$kw$about], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27563) : re_frame.core.dispatch.call(null,G__27563));
})], null),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"focus",cljs.core.cst$kw$on_DASH_focus,(function (){
var G__27564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$change_DASH_tab,cljs.core.cst$kw$simulation], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27564) : re_frame.core.dispatch.call(null,G__27564));
})], null),"Simulation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.current_tab_underline], null)], null);
});
maze_evolution.views.github_badge = (function maze_evolution$views$github_badge(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$github_DASH_badge,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/tkamat/maze-evolution"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$border,(0)], null),cljs.core.cst$kw$alt,"Fork me on GitHub",cljs.core.cst$kw$src,"https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"], null)], null)], null);
});
maze_evolution.views.main_panel = (function maze_evolution$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.tabs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.current_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_evolution.views.github_badge], null)], null);
});
