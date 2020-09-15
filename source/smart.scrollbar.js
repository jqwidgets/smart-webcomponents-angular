
/* Smart UI v8.0.0 (2020-Aug) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(t){var e={};function a(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=94)}({94:function(t,e){Smart("smart-scroll-bar",class extends Smart.BaseElement{static get properties(){return{clickRepeatDelay:{type:"integer",value:50},largeStep:{type:"integer",value:100},min:{type:"integer",value:0},max:{type:"integer",value:1e3},mechanicalAction:{value:"switchWhileDragging",allowedValues:["switchUntilReleased","switchWhenReleased","switchWhileDragging"],type:"string"},orientation:{type:"string",value:"horizontal",allowedValues:["horizontal","vertical"]},step:{type:"integer",value:10},showButtons:{type:"boolean",value:!0,defaultReflectToAttribute:!0},value:{type:"integer",value:0}}}static get styleUrls(){return["smart.scrollbar.css"]}template(){return'<div id="container" class="smart-container" role="presentation">\n                    <div id="nearButton" class="smart-scroll-button smart-arrow-left" role="presentation" aria-hidden="true"></div>\n                    <div  id="track" class="smart-track" role="presentation">\n                        <div id="thumb" class="smart-thumb" role="presentation"></div>\n                    </div>\n                    <div id="farButton" class="smart-scroll-button smart-arrow-right" role="presentation" aria-hidden="true"></div>\n            </div>'}static get listeners(){return{"nearButton.click":"_nearButtonClickHandler","nearButton.down":"_startRepeat","nearButton.up":"_stopRepeat","nearButton.pointerenter":"_updateInBoundsFlag","nearButton.pointerleave":"_updateInBoundsFlag","farButton.click":"_farButtonClickHandler","farButton.down":"_startRepeat","farButton.up":"_stopRepeat","farButton.pointerenter":"_updateInBoundsFlag","farButton.pointerleave":"_updateInBoundsFlag","track.down":"_trackDownHandler","track.click":"_trackClickHandler","track.move":"_trackMoveHandler","thumb.down":"_dragStartHandler","document.move":"_dragHandler","document.up":"_dragEndHandler",up:"_dragEndHandler","document.selectstart":"_selectStartHandler",resize:"_resizeHandler"}}_updateInBoundsFlag(t){const e=this,a=t.target;a._isPointerInBounds=!0,-1!==t.type.indexOf("leave")&&(a._isPointerInBounds=!1),1!==("buttons"in t?t.buttons:t.which)&&e._stopRepeat(t)}_startRepeat(t){const e=this;if(e.disabled)return;const a=t.target;a._initialTimer||(a._initialTimer=setTimeout((function(){a._repeatTimer=setInterval(()=>{if(a._isPointerInBounds){const e="buttons"in t?t.buttons:t.which;a.$.fireEvent("click",{buttons:e,clientX:t.clientX,clientY:t.clientY,pageX:t.pageX,pageY:t.pageY,screenX:t.screenX,screenY:t.screenY})}},e.clickRepeatDelay)}),3*e.clickRepeatDelay))}_stopRepeat(t){if(this.disabled)return;const e=t.target;e._repeatTimer&&(clearInterval(e._repeatTimer),e._repeatTimer=null),e._initialTimer&&(clearTimeout(e._initialTimer),e._initialTimer=null)}_calculateThumbSize(t){const e=this,a=e.max-e.min,r="horizontal"===e.orientation?e.$.track.offsetWidth>10:e.$.track.offsetHeight>10;let n=0;return a>=1&&r?(n=t/(a+t)*t,e.$.thumb.className.indexOf("smart-hidden")>=0&&e.$thumb.removeClass("smart-hidden")):e.$thumb.addClass("smart-hidden"),Math.max(10,Math.min(n,t))}_dragStartHandler(t){this.disabled||(this.thumbCapture=!0,this.dragStartX=t.clientX,this.dragStartY=t.clientY,this.dragStartValue=this.value,t.stopPropagation(),t.preventDefault())}_dragHandler(t){if(!0!==this.thumbCapture)return;this._isThumbDragged=!0;const e=(this.max-this.min)/(this.scrollBarSize-this.thumbSize),a="horizontal"===this.orientation?(t.clientX-this.dragStartX)*e:(t.clientY-this.dragStartY)*e;let r=a;this.rightToLeft&&"horizontal"===this.orientation&&(r=-a),this._updateValue(this.dragStartValue+r),t.stopPropagation(),t.preventDefault(),t.originalEvent&&(t.originalEvent.stopPropagation(),t.originalEvent.preventDefault())}_dragEndHandler(t){const e=this;e._trackDownTimer&&(clearInterval(e._trackDownTimer),e._trackDownTimer=null),e.thumbCapture&&(e.thumbCapture=!1,e._isThumbDragged=!1,"switchWhenReleased"===e.mechanicalAction?e._updateValue(e.dragStartValue,e.value):"switchUntilReleased"===this.mechanicalAction&&e._updateValue(e.dragStartValue),t.preventDefault(),t.stopPropagation(),t.originalEvent.preventDefault(),t.originalEvent.stopPropagation())}_farButtonClickHandler(){const t=this;if(t.disabled)return;const e=t.value;t._updateValue(t.value+("horizontal"===t.orientation&&t.rightToLeft?-1:1)*t.step),"switchUntilReleased"===t.mechanicalAction&&t._updateValue(e)}_nearButtonClickHandler(){const t=this;if(t.disabled)return;const e=t.value;t._updateValue(t.value-("horizontal"===t.orientation&&t.rightToLeft?-1:1)*t.step),"switchUntilReleased"===t.mechanicalAction&&t._updateValue(e)}propertyChangedHandler(t,e,a){super.propertyChangedHandler(t,e,a);const r=this;switch(t){case"min":case"max":case"orientation":case"showButtons":r._layout(),"min"===t?r.setAttribute("aria-valuemin",a):"max"===t?r.setAttribute("aria-valuemax",a):"orientation"===t&&r.setAttribute("aria-orientation",a);break;case"value":r._updateValue(e,a);break;default:r._layout()}}render(){this.setAttribute("role","scrollbar"),this.setAttribute("aria-orientation",this.orientation),this.setAttribute("aria-valuemin",this.min),this.setAttribute("aria-valuemax",this.max),this.setAttribute("aria-valuenow",this.value),this._layout(),super.render()}_resizeHandler(){this._layout()}refresh(){this._layout()}_layout(){const t=this;t.scrollBarSize="horizontal"===t.orientation?t.$.track.offsetWidth:t.$.track.offsetHeight,t.thumbSize=t._calculateThumbSize(t.scrollBarSize),"horizontal"===t.orientation&&t.$.thumb.style.width!==t.thumbSize+"px"?t.$.thumb.style.width=t.thumbSize+"px":"vertical"===t.orientation&&t.$.thumb.style.height!==t.thumbSize+"px"&&(t.$.thumb.style.height=t.thumbSize+"px"),"horizontal"===t.orientation?(t.$.nearButton.classList.contains("smart-arrow-up")&&t.$.nearButton.classList.remove("smart-arrow-up"),t.$.farButton.classList.contains("smart-arrow-down")&&t.$.farButton.classList.remove("smart-arrow-down"),t.$.nearButton.classList.contains("smart-arrow-left")||t.$.nearButton.classList.add("smart-arrow-left"),t.$.farButton.classList.contains("smart-arrow-right")||t.$.farButton.classList.add("smart-arrow-right")):(t.$.nearButton.classList.contains("smart-arrow-left")&&t.$.nearButton.classList.remove("smart-arrow-left"),t.$.farButton.classList.contains("smart-arrow-right")&&t.$.farButton.classList.remove("smart-arrow-right"),t.$.nearButton.classList.contains("smart-arrow-up")||t.$.nearButton.classList.add("smart-arrow-up"),t.$.farButton.classList.contains("smart-arrow-down")||t.$.farButton.classList.add("smart-arrow-down")),t._updateThumbPosition(),(t.value>t.max||t.value<t.min)&&t._updateValue(t.value,t.value>t.max?t.max:t.min)}_selectStartHandler(t){this.thumbCapture&&t.preventDefault()}_trackDownHandler(t){const e=this;t.target===e.$.track&&(e._trackDownTimer&&clearInterval(e._trackDownTimer),e.thumbCapture||(e._trackDownTimer=setInterval((function(){e._trackClickHandler(t)}),e.clickRepeatDelay),t.stopPropagation(),t.preventDefault()))}_trackClickHandler(t){const e=this;if(e.disabled)return;if(e._isThumbDragged)return clearInterval(e._trackDownTimer),void(e._trackDownTimer=null);const a=e.$.thumb.getBoundingClientRect(),r=t.pageX-window.pageXOffset,n=t.pageY-window.pageYOffset,i=(e.rightToLeft?-1:1)*e.value;"horizontal"===e.orientation?r>(e._isThumbDragged?e.dragStartX:a.right)?e._updateValue(e.value+(e.rightToLeft?-1:1)*e.largeStep):r<(e._isThumbDragged?e.dragStartX:a.left)&&e._updateValue(e.value-(e.rightToLeft?-1:1)*e.largeStep):n>(e._isThumbDragged?e.dragStartY:a.bottom)?e._updateValue(e.value+e.largeStep):n<(e._isThumbDragged?e.dragStartY:a.top)&&e._updateValue(e.value-e.largeStep),"switchUntilReleased"===e.mechanicalAction&&e._updateValue(i)}_trackMoveHandler(t){"touchmove"===t.originalEvent.type&&t.originalEvent.preventDefault()}_updateValue(t,e){const a=this;if(1===arguments.length&&(e=t,t=a.value),(void 0===e||isNaN(e))&&(e=a.min),e>a.max&&(e=a.max),e<a.min&&(e=a.min),a.value=e,t!==e){if(a.setAttribute("aria-valuenow",e),a._updateThumbPosition(),a.thumbCapture&&"switchWhenReleased"===a.mechanicalAction)return;if(a.onChange)return void a.onChange({value:a.value,oldValue:t,min:a.min,max:a.max});a.$.fireEvent("change",{value:a.value,oldValue:t,min:a.min,max:a.max})}}_updateThumbPosition(){const t=this,e=t.$.track.offsetHeight,a=t.$.track.offsetWidth,r="horizontal"===t.orientation?a:e,n=t._calculateThumbSize(r),i="horizontal"===t.orientation?a-n:e-n;let o=(r-n)/(t.max-t.min)*(t.value-t.min);t.rightToLeft&&"horizontal"===t.orientation&&(o=(r-n)/(t.max-t.min)*(t.max-t.value-t.min)),o=Math.min(i,Math.max(0,o)),"vertical"===t.orientation&&t.$.thumb.style.top!==o+"px"?t.$.thumb.style.top=o+"px":"horizontal"===t.orientation&&t.$.thumb.style.left!==o+"px"&&(t.$.thumb.style.left=o+"px")}})}});