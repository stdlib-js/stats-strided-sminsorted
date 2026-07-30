"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=n(function(b,o){
var v=require('@stdlib/math-base-assert-is-nanf/dist'),f=require('@stdlib/math-base-assert-is-negative-zerof/dist');function y(e,r,i,s){var t,a;return e<=0?NaN:e===1||i===0?r[0]:(t=r[s],a=r[s+(e-1)*i],v(t)||v(a)?NaN:t===a?f(t)||f(a)?-0:t:t<a?t:a)}o.exports=y
});var c=n(function(h,q){
var x=require('@stdlib/strided-base-stride2offset/dist'),N=u();function g(e,r,i){return N(e,r,i,x(e,i))}q.exports=g
});var p=n(function(j,m){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),O=u();l(d,"ndarray",O);m.exports=d
});var R=p();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
