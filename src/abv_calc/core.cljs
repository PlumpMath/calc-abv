(ns abv-calc.core
    (:require [reagent.core :as reagent :refer [atom]]
              [goog.string :as gstring]
              [goog.string.format]))

;;Function to calculate gravity
(defn calculate-normal [og cg]
  "Conventional method of calculating home-brew using the difference
  between og and cg"
  [:p "Current ABV (Conventional Calc): "
    (gstring/format "%.2f" (* 131.25
                              (- og cg)))])

(defn calculate-alternative [og cg]
  "Alternative method of calculating home-brew using the difference
  between og and fg"
  [:p "Current ABV (Alternative Calc): "
   (gstring/format "%.2f" (* (/ cg 0.794)
                             (* 76.08 (/ (- og cg)
                                         (- 1.775 og)))))])

; (defn when-to-bottle [og cg cg-day]
;   "Through linear extrapolation, gives estimated number of days before bottling."
;   (if (<= cg 1.0)
;       [:p "0 days, go bottle!"]
;
;       (let [b og
;             y cg
;             m (/ (- b y) cg-day)
;             x (/ (- b y) m)]
;     [:p "Estimated days: " x])))

(defn gravity-input [val]
  [:input {:type "text"
           :value @val
           :on-change #(reset! val (-> % .-target .-value))}])

(defn shared-state []
  (let [og (atom 0)
        cg (atom 0)
        days (atom 0)]
    (fn []
      [:div
       [:h2 "Gravity Calculator"]
       [:p "Original Gravity: " [gravity-input og]]
       [:p "Current Gravity: " [gravity-input cg]]
       [:p "Current Gravity Days " [gravity-input days]]
       [:p [calculate-normal @og @cg]]
       [:p [calculate-alternative @og @cg]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [shared-state] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
