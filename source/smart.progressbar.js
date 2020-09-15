
/* Smart UI v8.0.0 (2020-Aug) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=90)}({90:function(e,t,a){Smart("smart-base-progress-bar",class extends Smart.BaseElement{static get properties(){return{indeterminate:{value:!1,type:"boolean"},inverted:{value:!1,type:"boolean"},formatFunction:{value:null,type:"function"},max:{value:100,type:"number"},min:{value:0,type:"number"},showProgressValue:{value:!1,type:"boolean"},value:{value:0,type:"number?"}}}static get styleUrls(){return["smart.progressbar.css"]}render(){const e=this;e.$.label.id||(e.$.label.id=e.id+"Label"),e.setAttribute("role","progressbar"),e.setAttribute("aria-labelledby",e.$.label.id),e.setAttribute("aria-valuemin",e.min),e.setAttribute("aria-valuemax",e.max),null===e.value||e.indeterminate||(e.$.value.style.transition="none"),e._updateProgress(),requestAnimationFrame(()=>e.$.value.style.transition=""),super.render()}propertyChangedHandler(e,t,a){super.propertyChangedHandler(e,t,a);const r=this;r._updateProgress(),"value"===e?r.$.fireEvent("change",{value:a,oldValue:t,changeType:"api"}):"min"!==e&&"max"!==e||r.setAttribute("aria-value"+e,a)}_updateProgress(){const e=this,t=e.value;null===t||e.indeterminate?e.removeAttribute("aria-valuenow"):e.setAttribute("aria-valuenow",t)}get _percentageValue(){const e=Math.max(this.min,this.max),t=Math.min(this.min,this.max);return(Math.min(e,Math.max(t,this.value))-t)/(e-t)}}),Smart("smart-circular-progress-bar",class extends Smart.BaseProgressBar{template(){return'<div id="container" role="presentation">\n                    <svg width="100%" height="100%" viewPort="0 0 100 100" viewBox="0 0 100 100" role="presentation" aria-hidden="true">\n                        <circle id="value" class="smart-value-path" r="50" cx="50" cy="50" transform="rotate(270 50 50)"></circle>\n                        <circle id="value" class="smart-value" r="50" cx="50" cy="50" transform="rotate(270 50 50)"></circle>\n                    </svg>\n                    <div class="smart-label-container" role="presentation">\n                        <content></content>\n                        <span id="label" class="smart-label"></span>\n                    </div>\n                </div>'}static get listeners(){return{resize:"_resizeHandler"}}render(){const e=this;e.$.container.style.width=e.$.container.style.height=Math.min(e.offsetWidth,e.offsetHeight)+"px",e.$.hasClass("echo-animation")&&(e.value=e.max,e._updateProgress()),super.render()}_resizeHandler(){this.$.container.style.width=this.$.container.style.height=Math.min(this.offsetWidth,this.offsetHeight)+"px"}_updateProgress(){super._updateProgress();const e=this,t=e.indeterminate?100*Math.PI:100*Math.PI-e._percentageValue*Math.PI*100,a=!!document.documentMode,r=!a&&!!window.StyleMedia;if(e.showProgressValue){const t=parseInt(100*e._percentageValue);e.$.label.innerHTML=e.formatFunction?e.formatFunction(t):t+"%"}else e.$.label.innerHTML="";if(a||r)return null===e.value||e.indeterminate?(e.$.value.style.strokeDashoffset="",void e.$.value.setAttribute("class","smart-value smart-value-animation-ms")):(e.$.value.setAttribute("class","smart-value"),void(e.$.value.style.strokeDashoffset=e.inverted&&!e.rightToLeft||!e.inverted&&e.rightToLeft?-t:t));e.$.value.style.strokeDashoffset=e.inverted&&!e.rightToLeft||!e.inverted&&e.rightToLeft?-t:t,null===e.value||e.indeterminate?e.$value.addClass("smart-value-animation"):e.$value.removeClass("smart-value-animation")}}),Smart("smart-progress-bar",class extends Smart.BaseProgressBar{static get properties(){return{orientation:{value:"horizontal",allowedValues:["horizontal","vertical"],type:"string"}}}template(){return'<div role="presentation">\n                    <div id="value" class="smart-value"></div>\n                    <div id="label" class="smart-label"></div>\n                </div>'}_updateProgress(){super._updateProgress();const e=this;if(e.showProgressValue){const t=parseInt(100*e._percentageValue);e.$.label.innerHTML=e.formatFunction?e.formatFunction(t):t+"%"}else e.$.label.innerHTML="";null===e.value||e.indeterminate?e.$value.addClass("smart-value-animation"):e.$value.removeClass("smart-value-animation"),e.$.value.style.transform="horizontal"===e.orientation?"scaleX("+e._percentageValue+")":"scaleY("+e._percentageValue+")"}})}});