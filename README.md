#### Simple ABV Calculator

This is a strictly clojurescript (Reagent)-based Alcohol-by-Volume (ABV) calculator for home-brewing, implementing the two most popular [formulae outlined here](http://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated/)

In order to use this you'll need a [hydrometer](https://en.wikipedia.org/wiki/Hydrometer), and measure the original, unfermented juice.  Write that reading down.

After waiting a week/however long you think it might take, pour some of the now-fermenting/fermented juice into the hydrometer, and plug both the original gravity, and new gravities into their respective fields.

To check this app out, locally download it, cd into the root directory and enter...

`lein cljsbuild auto`

Yeah no figwheel magic, for some reason it hangs.  But it's not a big app anyways so not a huge reload time, and it's not complicated enough for a persistent state.

If anyone knows how to do linear extrapolation, please let me know!  The function is commented out right now.  Or maybe I should just dial in some machine learning stuff.  Not sure yet.
