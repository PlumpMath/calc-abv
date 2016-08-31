(ns abv-calc.prod
  (:require [abv-calc.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
