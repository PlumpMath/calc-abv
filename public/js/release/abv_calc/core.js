// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('abv_calc.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
abv_calc.core.calculate_normal = (function abv_calc$core$calculate_normal(og,cg){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Current ABV (Conventional Calc): ",(function (){var G__20511 = "%.2f";
var G__20512 = (131.25 * (og - cg));
return goog.string.format(G__20511,G__20512);
})()], null);
});
abv_calc.core.calculate_alternative = (function abv_calc$core$calculate_alternative(og,cg){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Current ABV (Alternative Calc): ",(function (){var G__20515 = "%.2f";
var G__20516 = ((cg / 0.794) * (76.08 * ((og - cg) / (1.775 - og))));
return goog.string.format(G__20515,G__20516);
})()], null);
});
