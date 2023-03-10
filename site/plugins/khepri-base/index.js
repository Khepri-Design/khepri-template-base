panel.plugin("khepri-design/khepri-base", {
  components: {
    'k-filesdisplay-section': {
      extends: 'k-files-section'
    }
  },
  blocks: {
    audio: {
      computed: {
        source() {
          return this.content.source[0] || {};
        }
      },  
      template: `
        <div @dblclick="open">
            <div v-if="source.url">
                <h2>{{ content.title }}</h2>
                <p>{{ content.description }}</p><br>
                <audio controls>
                    <source :src="content.source[0].url" type="audio/mpeg">
                </audio>
            </div>
            <div v-else>
                <h2>{{ content.title }}</h2>
                <p>{{ content.description }}</p><br>
                <strong class="kd-alert">Bitte eine Audio-Datei auswählen</strong>
            </div>
        </div>
      `
    },
    button: {
      template: `
        <div class="kd-button-preview" @dblclick="open" :style="'background-color: '+ primarycolor">
          <input style="text-align: center" type="text" placeholder="Text eingeben..." class="wysiwyg-black"  :value="content.buttontext" @input="update({ buttontext: $event.target.value })"/>
        </div>
      `
    },
    cardbox: {
      template: `
      <div class="kd-cardbox-preview" @dblclick="open">
        <h3>Cardbox</h3>
      </div>
      `
    },
    checklist: {
      template: `
        <div class="kd-checklist-preview" @dblclick="open">
          <ul style="display: flex; justify-content: space-between;">
            <div>✓&nbsp;<input type="text" placeholder="Text eingeben..." class="wysiwyg-black"  :value="content.checkone" @input="update({ checkone: $event.target.value })"/></div>
            <div>✓&nbsp;<input type="text" placeholder="Text eingeben..." class="wysiwyg-black"  :value="content.checktwo" @input="update({ checktwo: $event.target.value })"/></div>
            <div>✓&nbsp;<input type="text" placeholder="Text eingeben..." class="wysiwyg-black"  :value="content.checkthree" @input="update({ checkthree: $event.target.value })"/></div>
          </ul>
        </div>
      `
    },
    divider: {
      template: `
        <div class="kd-divider-preview" @dblclick="open">
          <hr v-if="content.usecustomcolor" :class="content.dividertype" :style="{ color: content.customcolor }">
          <hr v-if="!content.usecustomcolor" :class="content.dividertype">
        </div>
      `
    },
    download: {
      template: `
        <div class="kd-download-preview" @dblclick="open">
          <div v-if="content.datafile != ''">
            <p>{{ content.datafile[0].uuid }}</p>
          </div>
          <div v-else>
            <p class="kd-empty">noch keine Datei ausgewählt...</p>
          </div>
        </div>
      `
    },
    hint: {
      template: `
        <div class="kd-hint-preview" @dblclick="open">
          <div><input type="text" placeholder="Hinweistext eingeben..." class="wysiwyg" :value="content.text" @input="update({ text: $event.target.value })"/></div>
        </div>
      `
    },
    snippet: {
      template: `
        <div class="kd-snippet-preview" @dblclick="open">
            <div>Snippet: <input type="text" placeholder="Snippetname eingeben..." class="wysiwyg"  :value="content.snippet" @input="update({ snippet: $event.target.value })"/></div>
          </div>
        </div>
      `
    },
    spacer: {
      template: `
        <div class="kd-spacer-preview" @dblclick="open">
          <div><span class="kd-spacer-highlight">{{ content.spacevalue }}{{ content.spaceunit }}</span> Abstand</div>
        </div>
      `
    },
    accordion: {
      template: `
        <div @dblclick="open">
          <div style="display: inline-flex"><k-icon type="angle-down"/>&nbsp;<p><b>Akordeon</b> (doppelklicken zum bearbeiten)</p></div>
        </div>
      `
    },
    accordionitem: {
      template: `
        <div @dblclick="open">
          <div style="display: inline-flex"><k-icon type="angle-down"/>&nbsp;<input type="text" placeholder="Titel eingeben... " class="wysiwyg-black"  :value="content.head" @input="update({ head: $event.target.value })"/></div>
        </div>
      `
    },
    iframe: {
      template: `
        <div style="height: 70px" @dblclick="open">
          <div v-if="content.file[0]" style="display: inline-flex"><k-icon type="document"/>&nbsp;PDF-Datei:&nbsp;<b>{{ content.file[0].filename }}</b></div>
          <div v-else style="display: inline-flex"><k-icon type="document"/>&nbsp;<span class="kd-empty">noch keine Datei ausgewählt...</span></div>
        </div>
      `
    }
  }
});

//color fields compressed

(function(){"use strict";var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("k-input",t._b({ref:"input",staticClass:"k-colors-contrast",attrs:{id:t._uid,theme:"field"}},"k-input",t.$props,!1),[n("div",{staticClass:"k-colors-color",style:{background:t.value},attrs:{"data-rating":t.rating}})])},R=[],_t="";function h(t,e,n,s,o,i,l,a){var r=typeof t=="function"?t.options:t;e&&(r.render=e,r.staticRenderFns=n,r._compiled=!0),s&&(r.functional=!0),i&&(r._scopeId="data-v-"+i);var u;if(l?(u=function(c){c=c||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!c&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(c=__VUE_SSR_CONTEXT__),o&&o.call(this,c),c&&c._registeredComponents&&c._registeredComponents.add(l)},r._ssrRegister=u):o&&(u=a?function(){o.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(r.functional){r._injectStyles=u;var f=r.render;r.render=function(dt,D){return u.call(D),f(dt,D)}}else{var x=r.beforeCreate;r.beforeCreate=x?[].concat(x,u):[u]}return{exports:t,options:r}}const S={props:{color:Object,contrast:[Boolean,Array]},computed:{readable(){let t=this.contrast;return t===!0&&(t=["#fff","#000"]),this.color.toMostReadable(t)},rating(){if(!this.readable.length)return null;const[t]=this.readable;return t.accessibility[t.accessibility.length-1]},value(){if(!this.readable.length)return null;const[t]=this.readable;return t.color.toString()}}},d={};var $=h(S,C,R,!1,H,null,null,null);function H(t){for(let e in d)this[e]=d[e]}var A=function(){return $.exports}();class M{convertHslToRgb(){const e=this.h/360,n=this.s/100,s=this.l/100;let o=s,i=s,l=s,a,r;n!==0&&(a=s<.5?s*(1+n):s+n-s*n,r=2*s-a,o=this.convertHueToRgb(r,a,e+1/3),i=this.convertHueToRgb(r,a,e),l=this.convertHueToRgb(r,a,e-1/3)),this.r=o*255,this.g=i*255,this.b=l*255}convertHueToRgb(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}convertRgbToHsl(){const e=this.r/255,n=this.g/255,s=this.b/255,o=Math.max(e,n,s),i=Math.min(e,n,s),l=o+i,a=o-i;let r=0,u=0,f=l/2;if(i!=o)switch(f<.5?u=a/l:(u=2-o-i,u=a/u),o){case e:r=n-s,r=r/a;break;case n:r=s-e,r=r/a,r=r+2;break;case s:r=e-n,r=r/a,r=r+4;break}r*=60,r<0&&(r+=360),this.h=r,this.s=u*100,this.l=f*100}convertValueToDecimal(e){let n=parseFloat(e);return n<1&&!e.toString().includes("%")&&(n=n*100),n}convertDecimalToHex(e,n=!0){let s=Math.round(e).toString(16);return n&&(s=s.padStart(2,"0")),s}convertHexToDecimal(e){return parseInt(e,16)}convertToFloat(e){return Math.round(e)/100}rebaseDecimalForHex(e){return Math.round(e/100*255)}rebaseHexForDecimal(e){const n=this.convertHexToDecimal(e);return Math.round(n/255*100)}round(e,n=0){return n>0?e.toPrecision(n):Math.round(e)}}class _{constructor(e="#fff",n=["#fff","#000"]){this.color=new p(e),this.combinations=[],this.highest=0;for(const s of n){const o=new p(s),i=this.setContrastRatio(o),l=this.setRating(i);this.combinations.push({color:o,contrast:i,accessibility:l})}}setContrastRatio(e){const n=this.getLuminance(this.color),s=this.getLuminance(e);return n>s?(n+.05)/(s+.05):(s+.05)/(n+.05)}setRating(e){const n=[];return e>=3&&n.push("aaLarge"),e>=4.5&&(n.push("aaaLarge"),n.push("aa")),e>=7&&n.push("aaa"),n.length>this.highest&&(this.highest=n.length),n}getLuminance(e){const n=e.toValues(),s=n.r/255,o=n.g/255,i=n.b/255;let l,a,r;return s<=.03928?l=s/12.92:l=Math.pow((s+.055)/1.055,2.4),o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),.2126*l+.7152*a+.0722*r}toReport(){return{color:this.color,combinations:this.combinations}}toMostReadable(){return this.combinations.filter(e=>e.accessibility.length===this.highest)}}class p extends M{constructor(e){super();if(this.original=null,this.space=null,this.r=null,this.g=null,this.b=null,this.h=null,this.s=null,this.l=null,this.a=100,e instanceof p){const n=e.toValues();this.setValues(n)}else this.isHex(e)?(this.original=e,this.space="hex",this.parseHex(e)):this.isRgb(e)?(this.original=e,this.space="rgb",this.parseRgb(e)):this.isHsl(e)?(this.original=e,this.space="hsl",this.parseHsl(e)):this.setDefault()}isHex(e){return e?e.startsWith("#"):!1}isRgb(e){return e?e.startsWith("rgb"):!1}isHsl(e){return e?e.startsWith("hsl"):!1}hasAlpha(){return this.a!==100}parseHex(e){let n;e=e.replace(/[#; ]/g,""),e.length<6?(n=e.match(/.{1}/g),n.forEach(function(s,o){n[o]=s.repeat(2)})):n=e.match(/.{2}/g),this.setHex(n)}parseRgb(e){const s=e.match(/\((.*)\)/)[1].split(/[\s,/]+/);this.setRgb(s)}parseHsl(e){const s=e.match(/\((.*)\)/)[1].split(/[\s,/]+/);this.setHsl(s)}setDefault(){this.setValues({original:null,space:"hex",r:255,g:255,b:255,h:0,s:0,l:100,a:100})}setValues(e){this.original=e.original,this.space=e.space,this.r=e.r,this.g=e.g,this.b=e.b,this.h=e.h,this.s=e.s,this.l=e.l,this.a=e.a}setSpace(e){this.space=e}setRed(e){this.r=this.convertValueToDecimal(e)}setGreen(e){this.g=this.convertValueToDecimal(e)}setBlue(e){this.b=this.convertValueToDecimal(e)}setHue(e){this.h=this.convertValueToDecimal(e)}setSaturation(e){this.s=this.convertValueToDecimal(e)}setLightness(e){this.l=this.convertValueToDecimal(e)}setAlpha(e){this.a=this.convertValueToDecimal(e)}setHex(e){if(!e){this.setDefault();return}this.setRed(parseInt(e[0],16)),this.setGreen(parseInt(e[1],16)),this.setBlue(parseInt(e[2],16)),e.length===4&&this.setAlpha(this.rebaseHexForDecimal(e[3])),this.convertRgbToHsl()}setRgb(e){if(!e){this.setDefault();return}this.setRed(e[0]),this.setGreen(e[1]),this.setBlue(e[2]),e.length===4&&this.setAlpha(e[3]),this.convertRgbToHsl()}setHsl(e){if(!e){this.setDefault();return}this.setHue(e[0]),this.setSaturation(e[1]),this.setLightness(e[2]),e.length===4&&this.setAlpha(e[3]),this.convertHslToRgb()}getAlpha(){return this.a}toReadabilityReport(e=["#fff","#000"]){return new _(this,e).toReport()}toMostReadable(e=["#fff","#000"]){return new _(this,e).toMostReadable()}toOriginal(){return this.original}toSpace(){return this.space}toValues(){return{original:this.original,space:this.space,r:this.round(this.r),g:this.round(this.g),b:this.round(this.b),h:this.round(this.h),s:this.round(this.s),l:this.round(this.l),a:this.round(this.a)}}toHex(){return{r:this.convertDecimalToHex(this.r),g:this.convertDecimalToHex(this.g),b:this.convertDecimalToHex(this.b),a:this.convertDecimalToHex(this.rebaseDecimalForHex(this.a))}}toRgb(){return{r:this.round(this.r),g:this.round(this.g),b:this.round(this.b),a:this.convertToFloat(this.a)}}toHsl(){return{h:this.round(this.h),s:this.round(this.s),l:this.round(this.l),a:this.convertToFloat(this.a)}}toString(e=null){if(e||(e=this.toSpace()),e.startsWith("hsl")){const n=this.toHsl();return this.a<100?`hsla(${n.h}, ${n.s}%, ${n.l}%, ${n.a})`:`hsla(${n.h}, ${n.s}%, ${n.l}%)`}else if(e.startsWith("rgb")){const n=this.toRgb();return this.a<100?`rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`:`rgb(${n.r}, ${n.g}, ${n.b})`}else{const n=this.toHex();return this.a<100?`#${n.r}${n.g}${n.b}${n.a}`:`#${n.r}${n.g}${n.b}`}}}var g={data(){return{dragActive:!1,dragStart:null,dragAmount:0,dragInputRef:null,dragValue:null}},created(){document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("mousemove",this.onMouseDrag)},methods:{onInput(t){this.store(t.target.value)},incrementInput(t,e=1){const n=t.getAttribute("max");if(!n)return;let s=parseInt(t.value,10);s=Math.min(s+e,n),s<0&&(s=0),this.store(s,t)},amplifyStepFromEvent(t,e=1,n=10){return t&&(t.metaKey||t.shiftKey)?e*n:e},onUp(t){this.incrementInput(t.target,this.amplifyStepFromEvent(t,1))},onDown(t){this.incrementInput(t.target,this.amplifyStepFromEvent(t,-1))},onMouseDown(t,e){!this.dragActive&&e&&t.pageY&&(this.dragActive=!0,this.dragInputRef=e,this.dragStart=t.pageY,this.dragValue=parseInt(e.value,10))},onMouseUp(t){!this.dragActive||!this.dragInputRef||!t.pageY||(this.dragAmount=this.dragStart-t.pageY,this.dragInputRef.value=this.dragValue,this.dragInputRef&&this.dragAmount!==0&&this.incrementInput(this.dragInputRef,this.dragAmount),this.dragActive=!1,this.dragAmount=0,this.dragInputRef=null,this.dragValue=null)},onMouseDrag(t){if(!this.dragActive||!this.dragInputRef||!t.pageY)return;const e=this.dragInputRef.getAttribute("max");if(!e)return;this.dragAmount=this.dragStart-t.pageY;let n=Math.min(this.dragValue+this.dragAmount,e);n<0&&(n=0),this.dragInputRef.value=n}},unmounted(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("mousemove",this.onMouseDrag)}},I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"k-colors-units"},[t.space==="rgb"?[n("label",{staticClass:"k-colors-label"},[n("span",{on:{mousedown:function(s){return s.preventDefault(),t.onMouseDown(s,t.$refs.r)}}},[t._v("R")]),n("input",{ref:"r",staticClass:"k-colors-input",attrs:{"data-unit":"r",type:"text",min:"0",max:"255"},domProps:{value:t.rgb.r},on:{input:t.onInput,keydown:[function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:(s.preventDefault(),t.onUp.apply(null,arguments))},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:(s.preventDefault(),t.onDown.apply(null,arguments))}]}})]),n("label",{staticClass:"k-colors-label"},[n("span",{on:{mousedown:function(s){return s.preventDefault(),t.onMouseDown(s,t.$refs.g)}}},[t._v("G")]),n("input",{ref:"g",staticClass:"k-colors-input",attrs:{"data-unit":"g",type:"text",min:"0",max:"255"},domProps:{value:t.rgb.g},on:{input:t.onInput,keydown:[function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:(s.preventDefault(),t.onUp.apply(null,arguments))},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:(s.preventDefault(),t.onDown.apply(null,arguments))}]}})]),n("label",{staticClass:"k-colors-label"},[n("span",{on:{mousedown:function(s){return s.preventDefault(),t.onMouseDown(s,t.$refs.b)}}},[t._v("B")]),n("input",{ref:"b",staticClass:"k-colors-input",attrs:{"data-unit":"b",type:"text",min:"0",max:"255"},domProps:{value:t.rgb.b},on:{input:t.onInput,keydown:[function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:(s.preventDefault(),t.onUp.apply(null,arguments))},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:(s.preventDefault(),t.onDown.apply(null,arguments))}]}})])]:t.space==="hsl"?[n("label",{staticClass:"k-colors-label"},[n("span",{on:{mousedown:function(s){return s.preventDefault(),t.onMouseDown(s,t.$refs.h)}}},[t._v("H")]),n("input",{ref:"h",staticClass:"k-colors-input",attrs:{"data-unit":"h",type:"text",min:"0",max:"360"},domProps:{value:t.hsl.h},on:{input:t.onInput,keydown:[function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:(s.preventDefault(),t.onUp.apply(null,arguments))},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:(s.preventDefault(),t.onDown.apply(null,arguments))}]}})]),n("label",{staticClass:"k-colors-label"},[n("span",{on:{mousedown:function(s){return s.preventDefault(),t.onMouseDown(s,t.$refs.s)}}},[t._v("S")]),n("input",{ref:"s",staticClass:"k-colors-input",attrs:{"data-unit":"s",type:"text",min:"0",max:"100"},domProps:{value:t.hsl.s},on:{input:t.onInput,keydown:[function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:(s.preventDefault(),t.onUp.apply(null,arguments))},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:(s.preventDefault(),t.onDown.apply(null,arguments))}]}})]),n("label",{staticClass:"k-colors-label"},[n("span",{on:{mousedown:function(s){return s.preventDefault(),t.onMouseDown(s,t.$refs.l)}}},[t._v("L")]),n("input",{ref:"l",staticClass:"k-colors-input",attrs:{"data-unit":"l",type:"text",min:"0",max:"100"},domProps:{value:t.hsl.l},on:{input:t.onInput,keydown:[function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:(s.preventDefault(),t.onUp.apply(null,arguments))},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:(s.preventDefault(),t.onDown.apply(null,arguments))}]}})])]:[n("label",{staticClass:"k-colors-label"},[n("span",[t._v("#")]),n("input",{ref:"hex",staticClass:"k-colors-input is-hex",attrs:{type:"text"},domProps:{value:t.hex},on:{change:t.onInput}})])]],2)},T=[],gt="";const U={mixins:[g],props:{color:{validator:function(t){return t instanceof p}},space:String},computed:{hex(){return this.color.toOriginal()?this.color.toString("hex").substr(1,6):null},rgb(){return this.color.toRgb()},hsl(){return this.color.toHsl()}},methods:{store(t,e){const n=this.$refs;let s={};if(!t){this.$emit("input","");return}if(this.space!=="hex"){for(const o of Object.keys(n))n[o]&&(s[o]=n[o].value);e&&(s[e.dataset.unit]=t)}switch(this.space){case"hex":this.color.parseHex(t);break;case"rgb":this.color.setRgb([s.r,s.g,s.b]);break;case"hsl":this.color.setHsl([s.h,s.s,s.l]);break}this.$emit("input",this.color.toString())}}},m={};var O=h(U,I,T,!1,V,null,null,null);function V(t){for(let e in m)this[e]=m[e]}var F=function(){return O.exports}(),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"k-colors-opacity"},[n("input",{ref:"a",staticClass:"k-colors-input is-alpha",attrs:{"data-unit":"opacity",type:"text",min:"0",max:"100"},domProps:{value:t.opacity},on:{input:t.onInput,keydown:[function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:(s.preventDefault(),t.onUp.apply(null,arguments))},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:(s.preventDefault(),t.onDown.apply(null,arguments))}]}}),n("span",{on:{mousedown:function(s){return s.preventDefault(),t.onMouseDown(s,t.$refs.a)}}},[t._v("%")])])},P=[],mt="";const L={mixins:[g],props:{color:Object},computed:{opacity(){return this.color.getAlpha()}},methods:{store(t){const e=parseInt(t,10),n=this.color.toSpace();this.color.setAlpha(e),this.$emit("change-opacity",this.color.toString(n))}}},v={};var B=h(L,E,P,!1,j,null,null,null);function j(t){for(let e in v)this[e]=v[e]}var W=function(){return B.exports}(),Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"k-colors-preview"},[n("label",{staticClass:"k-colors-color",style:{background:t.value}},[n("input",{staticClass:"k-colors-picker",attrs:{type:"color"},domProps:{value:t.hex},on:{input:t.onInput}})])])},G=[],vt="";const N={props:{color:Object},data(){return{init:!1}},computed:{value(){return this.color.toOriginal()?this.color.toString("hex"):null},hex(){return this.color.toOriginal()?this.color.toString("hex").substring(0,7):null}},methods:{onInput(t){if(!this.init){this.init=!0;return}const e=new p(t.target.value),n=this.color.toSpace();e.setAlpha(this.color.getAlpha()),this.$emit("input",e.toString(n))}}},y={};var X=h(N,Y,G,!1,K,null,null,null);function K(t){for(let e in y)this[e]=y[e]}var q=function(){return X.exports}(),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("k-dropdown",[n("k-button",{staticClass:"k-colors-space-button",attrs:{icon:"angle-down",tabindex:"-1"},on:{click:function(s){return t.$refs.dropdown.toggle()}}}),n("k-dropdown-content",{ref:"dropdown",attrs:{align:"right"}},[n("k-dropdown-item",{class:{"is-current":t.space==="hex"},on:{click:function(s){return t.$emit("change-space","hex")}}},[t._v(" HEX ")]),n("k-dropdown-item",{class:{"is-current":t.space==="rgb"},on:{click:function(s){return t.$emit("change-space","rgb")}}},[t._v(" RGB ")]),n("k-dropdown-item",{class:{"is-current":t.space==="hsl"},on:{click:function(s){return t.$emit("change-space","hsl")}}},[t._v(" HSL ")])],1)],1)},J=[],yt="";const Q={props:{space:String}},b={};var Z=h(Q,z,J,!1,tt,null,null,null);function tt(t){for(let e in b)this[e]=b[e]}var et=function(){return Z.exports}(),st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("k-field",t._b({class:["k-colors-field",{"shows-contrast":t.contrast!==!1}]},"k-field",t.$props,!1),[n("k-input",t._b({ref:"input",attrs:{id:t._uid,theme:"field",type:"colors"},on:{input:t.store}},"k-input",t.$props,!1),[n("colors-picker",{attrs:{color:t.color},on:{input:t.store}}),n("colors-input",{attrs:{color:t.color,space:t.space},on:{input:t.store}}),t.alpha!==!1?n("colors-opacity",{attrs:{color:t.color},on:{"change-opacity":t.store}}):t._e(),n("colors-spaces",{attrs:{space:t.space},on:{"change-space":t.onChangeSpace}})],1),t.contrast!==!1?n("colors-contrast",{attrs:{color:t.color,contrast:t.contrast}}):t._e()],1)},nt=[],bt="";const rt={components:{ColorsContrast:A,ColorsInput:F,ColorsOpacity:W,ColorsPicker:q,ColorsSpaces:et},inheritAttrs:!1,props:{name:[String,Number],label:String,value:String,contrast:[Boolean,Array],readability:Boolean,alpha:Boolean,invalid:Boolean,disabled:Boolean,required:Boolean,help:String},computed:{color(){const t=new p(this.value);return this.alpha===!1&&t.setAlpha(100),t},space(){return this.color.toSpace()}},methods:{onChangeSpace(t){this.color.setSpace(t),this.store(this.color.toString())},store(t){this.$emit("input",t)}}},k={};var ot=h(rt,st,nt,!1,it,null,null,null);function it(t){for(let e in k)this[e]=k[e]}var at=function(){return ot.exports}(),lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"k-colors-structure-preview",style:{backgroundColor:t.value}})},ut=[],kt="";const ct={props:{value:String}},w={};var ht=h(ct,lt,ut,!1,pt,null,null,null);function pt(t){for(let e in w)this[e]=w[e]}var ft=function(){return ht.exports}();window.panel.plugin("khepri/colors",{fields:{colors:at},components:{"k-colors-field-preview":ft}})})();
