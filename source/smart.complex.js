
/* Smart HTML Elements v7.6.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(r){var a={};function t(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return r[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=r,t.c=a,t.d=function(r,a,e){t.o(r,a)||Object.defineProperty(r,a,{enumerable:!0,get:e})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,a){if(1&a&&(r=t(r)),8&a)return r;if(4&a&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&a&&"string"!=typeof r)for(var i in r)t.d(e,i,function(a){return r[a]}.bind(null,i));return e},t.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(a,"a",a),a},t.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)},t.p="",t(t.s=23)}({23:function(r,a){Smart.Utilities.Assign("Complex",class{constructor(r,a){if("string"==typeof r)this.complexNumber=this.parseComplexNumber(r),this.realPart=this.complexNumber.realPart,this.imaginaryPart=this.complexNumber.imaginaryPart;else{if("number"!=typeof r)throw new Error("Can't create complex number");if(this.realPart=r,"number"==typeof a)this.imaginaryPart=a;else{if(void 0!==a)throw new Error("Can't create complex number: invalid imaginary part");this.imaginaryPart=0}this.complexNumber=this.parseComplexNumber(this.realPart,this.imaginaryPart)}}valueOf(){return 0===this.imaginaryPart?this.realPart:null}isNaN(){return isNaN(this.realPart)||isNaN(this.imaginaryPart)}isZero(){return!(0!==this.realPart&&-0!==this.realPart||0!==this.imaginaryPart&&-0!==this.imaginaryPart)}isFinite(){return isFinite(this.realPart)&&isFinite(this.imaginaryPart)}isInfinite(){return!(this.isNaN()||this.isFinite())}parseComplexNumber(r,a){const t={realPart:0,imaginaryPart:0};if(null==r)t.realPart=t.imaginaryPart=0;else if(void 0!==a)t.realPart=r,t.imaginaryPart=a;else switch(typeof r){case"object":if("imaginaryPart"in r&&"realPart"in r)t.realPart=r.realPart,t.imaginaryPart=r.imaginaryPart;else{if(2!==r.length)throw SyntaxError("Invalid Complex Number Parameter");t.realPart=r[0],t.imaginaryPart=r[1]}break;case"string":{t.imaginaryPart=t.realPart=0;const a=r.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);let e=1,i=0;if(null===a)throw SyntaxError("Invalid Complex Number Parameter");for(let r=0;r<a.length;r++){const n=a[r];if(" "===n||"\t"===n||"\n"===n);else if("+"===n)e++;else if("-"===n)i++;else if("i"===n||"I"===n){if(e+i===0)throw SyntaxError("Invalid Complex Number Parameter");" "===a[r+1]||isNaN(a[r+1])?t.imaginaryPart+=parseFloat((i%2?"-":"")+"1"):(t.imaginaryPart+=parseFloat((i%2?"-":"")+a[r+1]),r++),e=i=0}else{if(e+i===0||isNaN(n))throw SyntaxError("Invalid Complex Number Parameter");"i"===a[r+1]||"I"===a[r+1]?(t.imaginaryPart+=parseFloat((i%2?"-":"")+n),r++):t.realPart+=parseFloat((i%2?"-":"")+n),e=i=0}}if(e+i>0)throw SyntaxError("Invalid Complex Number Parameter");break}case"number":t.imaginaryPart=0,t.realPart=r;break;default:throw SyntaxError("Invalid Complex Number Parameter")}return t}compare(r,a){const t=this.parseComplexNumber(r,a),e=this.parseComplexNumber("1e-16");return Math.abs(t.realPart-this.realPart)<=e&&Math.abs(t.imaginaryPart-this.imaginaryPart)<=e}toString(){let r=this.realPart,a=this.imaginaryPart,t="";return this.isNaN()?"NaN":this.isZero()?"0":this.isInfinite()?"Infinity":(0!==r&&(t+=r),0!==a&&(0!==r?t+=a<0?" - ":" + ":a<0&&(t+="-"),a=Math.abs(a),1!==a&&(t+=a),t+="i"),t||"0")}})}});