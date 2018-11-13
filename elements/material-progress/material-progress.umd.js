!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/polymer-legacy.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/polymer-legacy.js"],t):t(e.polymer_dom_js,e.polymerLegacy_js)}(this,function(e,t){"use strict";window.MaterialProgressBehaviorImpl={properties:{barHeight:{type:Number,value:22,observer:"_refresh"},animated:{type:Boolean,value:!1,reflectToAttribute:!0},legendLabel:{type:String,value:"",observer:"_refresh"},bars:{type:Array,value:function(){return[]},notify:!0,readOnly:!0},sum:{type:Number,value:0,notify:!0,readOnly:!0,reflectToAttribute:!0},_legendItems:{type:Array,value:function(){return[]},readOnly:!0},_legendNeeded:{type:Boolean,value:!1,compute:"_computeLegendNeeded(_legendItems)",readOnly:!0}},listeners:{"dom-mutation":"refresh"},refresh:function(){if(this._attached){this._computeSumAndBars();var e,t,a,r,i=!1,n=600/(this.bars.length-1);if(this.splice("_legendItems",0,this._legendItems.length),this.legendLabel&&this.push("_legendItems",{label:this.legendLabel}),this.bars)for(e=this.bars.length-1,t=this._barWithValueCount-1;e>=0;e--)a=this.bars[e],r=this._getBarMeta(a),this.toggleClass("visible",r.value>0,a),this.toggleClass("last",r.value>0&&!i,a),a.style.width=this.bars.length>0?this._getWidthForBar(r.value,this.sum,this._maxBarValue,this.barHeight):"0px",a.style.zIndex=this.bars.length-e,r.value>0&&(i=!0,this._initialized||this._playFirstAnimation(a,t,n),t--),r.legend&&(r.value>0||r.legendAlwaysVisible)&&this.splice("_legendItems",1,0,{label:r.legend,color:window.getComputedStyle(a).backgroundColor});this._oldBarHeight&&this._oldBarHeight===this.barHeight||(this.customStyle["--material-progress-bar-height"]=this.barHeight+"px",this.updateStyles(),this._oldBarHeight=this.barHeight),this._initialized=i}},ready:function(){this._mutationOptions={childList:!0,subtree:!0,attributes:!0,characterData:!1,attributeFilter:["data-value","data-legend","data-legend-always-visible"]},this._mutationFilter=function(e){return this._mutationIsChildList(e,this.$.barsContainer)||this._mutationIsChildAttributes(e,this.$.barsContainer)}},attached:function(){this._attached=!0,this._refresh()},_refresh:function(){this.debounce("refresh",this.refresh,10)},_computeSumAndBars:function(){var t=0,a=0,r=0,i=0,n=[],s=e.dom(this.$.content).getDistributedNodes();return s&&s.forEach(function(e){e.classList&&e.classList.contains("bar")&&e.hasAttribute("data-value")&&(n.push(e),a=this._getBarMeta(e).value,t+=a,r+=a>0?1:0,i=Math.max(i,a))},this),this._setBars(n),this._setSum(t),this._maxBarValue=i,this._barWithValueCount=r,t},_getBarMeta:function(e){var t,a={value:0,legend:void 0};return e&&e.getAttribute&&(t=Number(e.getAttribute("data-value")),a.value=isNaN(t)?0:Math.max(0,t),a.legend=e.getAttribute("data-legend"),a.legendAlwaysVisible=e.hasAttribute("data-legend-always-visible")),a},_getWidthForBar:function(e,t,a,r){return"0px"},_playFirstAnimation:function(e,t,a){this.toggleClass("entry",!0,e),function(e,t,a){this.async(function(){this.toggleClass("entry",!1,e)},500+a*t)}.bind(this)(e,t,a)},_computeLegendNeeded:function(e){return e&&e.length>0}},window.MaterialProgressBehavior=[window.MaterialProgressBehaviorImpl,window.MutationObserverBehavior];var a=document.createElement("div");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="material-progress-bars">\n  \n  <template>\n    <style>\n      #barsContainer {\n        overflow: hidden;\n        background-color: var(--material-progress-bars-background-color, #E0E0E0);\n        border-radius: calc(var(--material-progress-bar-height) / 2);\n        min-width: var(--material-progress-bar-height);\n        height: var(--material-progress-bar-height);\n        @apply --layout;\n        @apply --material-progress-bars-style;\n      }\n      :host > #barsContainer > ::content > .bar {\n        margin-left: calc(-var(--material-progress-bar-height) / 2);\n        border-radius: 0 calc(var(--material-progress-bar-height) / 2) calc(var(--material-progress-bar-height) / 2) 0;\n      }\n      :host([animated]) > #barsContainer > ::content > .entry {\n        -webkit-transition: width 850ms cubic-bezier(0.4, 0.0, 0.2, 1);\n        -ms-transition: width 850ms cubic-bezier(0.4, 0.0, 0.2, 1);\n        -moz-transition: width 850ms cubic-bezier(0.4, 0.0, 0.2, 1);\n        -o-transition: width 850ms cubic-bezier(0.4, 0.0, 0.2, 1);\n        transition: width 850ms cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n      :host > #barsContainer > ::content > * > span {\n        margin: 0 calc(var(--material-progress-bar-height) * 1/3) 0 calc(var(--material-progress-bar-height) * 5/6);\n      }\n    </style>\n    <div id="barsContainer">\n      <slot id="content" name=".bar[data-value]"></slot>\n    </div>\n    <div class="legend" hidden$="[[_legendNeeded]]">\n      <template is="dom-repeat" items="[[_legendItems]]" as="l">\n        <span style$="color: [[l.color]];">[[l.label]]</span>\n      </template>\n    </div>\n  </template>\n  \n</dom-module>',document.head.appendChild(a),t.Polymer({is:"material-progress-bars",behaviors:[MaterialProgressBehavior],properties:{max:{type:Number,value:100,observer:"_refresh"}},_getWidthForBar:function(e,t,a,r){var i=Math.max(t,this.max);return"calc("+((i>0?Math.floor(e/i*1e4)/100:"0")+"%")+" + "+r/2+"px)"}});var r=document.createElement("div");r.setAttribute("style","display: none;"),r.innerHTML='<dom-module id="material-progress-histo">\n  \n  <template>\n    <style>\n      #barsContainer {\n        @apply --layout-vertical;\n        @apply --material-progress-histo-style;\n      }\n      :host > #barsContainer > ::content > * {\n        height: 0px;\n      }\n      :host > #barsContainer > ::content > .bar {\n        border-radius: calc(var(--material-progress-bar-height) / 2);\n      }\n      :host > #barsContainer > ::content > .bar.visible:not(.last) {\n        margin-bottom: 12px;\n      }\n      :host > #barsContainer > ::content > .bar.visible {\n        min-width: var(--material-progress-bar-height);\n      }\n      :host > #barsContainer > ::content > .bar:not(.visible) > * {\n        visibility: hidden;\n      }\n      :host > #barsContainer > ::content > * > span {\n        margin: 0 calc(var(--material-progress-bar-height) * 1/3);\n      }\n    </style>\n    <div id="barsContainer">\n      <slot id="content" name=".bar[data-value]">\n        <span>test</span>\n      </slot>\n    </div>\n    <div class="legend" hidden$="[[_legendNeeded]]">\n      <template is="dom-repeat" items="[[_legendItems]]" as="l">\n        <span style$="color: [[l.color]];">[[l.label]]</span>\n      </template>\n    </div>\n  </template>\n  \n</dom-module>',document.head.appendChild(r),t.Polymer({is:"material-progress-histo",behaviors:[MaterialProgressBehavior],properties:{scaleToSum:{type:Boolean,value:!1,observer:"_refresh"}},_getWidthForBar:function(e,t,a,r){var i=this.scaleToSum?t:a;return(i>0?Math.floor(e/i*1e4)/100:"0")+"%"}})});
//# sourceMappingURL=material-progress.umd.js.map
