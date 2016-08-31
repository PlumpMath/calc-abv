// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__23112__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23113__i = 0, G__23113__a = new Array(arguments.length -  0);
while (G__23113__i < G__23113__a.length) {G__23113__a[G__23113__i] = arguments[G__23113__i + 0]; ++G__23113__i;}
  args = new cljs.core.IndexedSeq(G__23113__a,0);
} 
return G__23112__delegate.call(this,args);};
G__23112.cljs$lang$maxFixedArity = 0;
G__23112.cljs$lang$applyTo = (function (arglist__23114){
var args = cljs.core.seq(arglist__23114);
return G__23112__delegate(args);
});
G__23112.cljs$core$IFn$_invoke$arity$variadic = G__23112__delegate;
return G__23112;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23115__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23116__i = 0, G__23116__a = new Array(arguments.length -  0);
while (G__23116__i < G__23116__a.length) {G__23116__a[G__23116__i] = arguments[G__23116__i + 0]; ++G__23116__i;}
  args = new cljs.core.IndexedSeq(G__23116__a,0);
} 
return G__23115__delegate.call(this,args);};
G__23115.cljs$lang$maxFixedArity = 0;
G__23115.cljs$lang$applyTo = (function (arglist__23117){
var args = cljs.core.seq(arglist__23117);
return G__23115__delegate(args);
});
G__23115.cljs$core$IFn$_invoke$arity$variadic = G__23115__delegate;
return G__23115;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
