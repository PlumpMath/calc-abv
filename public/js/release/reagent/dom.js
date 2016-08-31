// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6247__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6247__auto__)){
return or__6247__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__23595 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23595) : cljs.core.atom.call(null,G__23595));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_23598 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_23598){
return (function (){
var _STAR_always_update_STAR_23599 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23599;
}});})(_STAR_always_update_STAR_23598))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23598;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args23600 = [];
var len__7322__auto___23603 = arguments.length;
var i__7323__auto___23604 = (0);
while(true){
if((i__7323__auto___23604 < len__7322__auto___23603)){
args23600.push((arguments[i__7323__auto___23604]));

var G__23605 = (i__7323__auto___23604 + (1));
i__7323__auto___23604 = G__23605;
continue;
} else {
}
break;
}

var G__23602 = args23600.length;
switch (G__23602) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23600.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__23611_23615 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__23612_23616 = null;
var count__23613_23617 = (0);
var i__23614_23618 = (0);
while(true){
if((i__23614_23618 < count__23613_23617)){
var v_23619 = chunk__23612_23616.cljs$core$IIndexed$_nth$arity$2(null,i__23614_23618);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_23619);

var G__23620 = seq__23611_23615;
var G__23621 = chunk__23612_23616;
var G__23622 = count__23613_23617;
var G__23623 = (i__23614_23618 + (1));
seq__23611_23615 = G__23620;
chunk__23612_23616 = G__23621;
count__23613_23617 = G__23622;
i__23614_23618 = G__23623;
continue;
} else {
var temp__4657__auto___23624 = cljs.core.seq(seq__23611_23615);
if(temp__4657__auto___23624){
var seq__23611_23625__$1 = temp__4657__auto___23624;
if(cljs.core.chunked_seq_QMARK_(seq__23611_23625__$1)){
var c__7058__auto___23626 = cljs.core.chunk_first(seq__23611_23625__$1);
var G__23627 = cljs.core.chunk_rest(seq__23611_23625__$1);
var G__23628 = c__7058__auto___23626;
var G__23629 = cljs.core.count(c__7058__auto___23626);
var G__23630 = (0);
seq__23611_23615 = G__23627;
chunk__23612_23616 = G__23628;
count__23613_23617 = G__23629;
i__23614_23618 = G__23630;
continue;
} else {
var v_23631 = cljs.core.first(seq__23611_23625__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_23631);

var G__23632 = cljs.core.next(seq__23611_23625__$1);
var G__23633 = null;
var G__23634 = (0);
var G__23635 = (0);
seq__23611_23615 = G__23632;
chunk__23612_23616 = G__23633;
count__23613_23617 = G__23634;
i__23614_23618 = G__23635;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
