(()=>{var t={644:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/column",{name:"dropshadow",label:"Drop shadow"})},274:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/columns",{name:"constrained",label:"Constrained"})},455:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/heading",[{name:"default",label:"Default",isDefault:!0},{name:"custom",label:"Custom Sizes"}])},205:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/paragraph",[{name:"default",label:"Default",isDefault:!0},{name:"custom",label:"Custom Sizes"}]),t("core/list",[{name:"default",label:"Default",isDefault:!0},{name:"custom",label:"Custom Sizes"}])},548:()=>{const{registerBlockStyle:t}=wp.blocks;t("core/query",[{name:"dropshadow",label:"Drop shadow",isDefault:!0},{name:"default",label:"No Shadow"}])},772:()=>{const t=()=>{setTimeout((function(){if(!document.querySelector("body").classList.contains("wp-customizer"))return;const t=document.querySelector("#sub-accordion-section-custom_css"),e=t.querySelector("h3 .customize-action");null!==t&&null!==e&&null!==window.site.customBodyClass&&""!==window.site.customBodyClass&&(e.innerHTML=`Custom class: <strong>body.custom-${window.site.customBodyClass}</strong>`)}),0)};"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)},479:()=>{const t=()=>{setTimeout((function(){const t=document.querySelector("body");if(t.classList.contains("wp-admin"))return;const e=t.classList.contains("home"),l=document.querySelector(".bcgov-site-header"),o=document.querySelector(".bcgov-web-logo"),a=document.querySelector("footer"),n=document.querySelector(".wp-block-post-content"),r=document.querySelector("#wp-custom-css");null!==r&&(r.innerText=r.innerText.replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"));let c=null;null!==n&&(c=n.firstElementChild);const s=document.querySelector(".breadcrumb-nav-section");null!==o&&o.querySelector("img").setAttribute("alt","BCGov Logo");let i,d=null;null!==l&&(i=l.querySelector(".is-style-takeover-menu"),d=l.querySelector("nav")),null!==window.site.siteName&&""!==window.site.siteName&&void 0!==window.site.siteName?t.classList.add(window.site.siteName):t.classList.add("bcgov"),null!==window.site.headerEffect&&null!==i?t.classList.add(`header-${window.site.headerEffect}`):t.classList.add("header-scroll"),null!==window.site.customBodyClass&&""!==window.site.customBodyClass&&t.classList.add(`custom-${window.site.customBodyClass}`),null!==c&&c.className.split(" ").some((t=>/.*banner.*/.test(t)))&&!c.className.split(" ").some((t=>/.*in-page.*/.test(t)))&&null!==s&&(c.parentNode.insertBefore(s,c.nextSibling),s.classList.add("alignwide"),e&&s.remove()),null===d||"fixed"!==window.site.headerEffect&&"hides"!==window.site.headerEffect||(l.style.position="fixed"),null===i||null!==window.site.headerEffect&&"scroll"!==window.site.headerEffect||(l.style.position="absolute",l.style.overflow="hidden",l.style.transform="none"),null===d&&(t.style.paddingTop=0);const u=document.createElement("a");u.setAttribute("class","back-to-top"),u.setAttribute("alt","Back to top"),u.setAttribute("title","Back to top"),u.setAttribute("tabindex","0"),u.setAttribute("aria-label","Click to go back to the top of the page"),u.setAttribute("href","#top"),u.setAttribute("role","button"),null!==a&&a.append(u);const m=document.createElement("img");m.setAttribute("class","back-to-top-icon"),m.setAttribute("alt","back to top icon"),m.setAttribute("src",window.site.templateDir+"/assets/images/back-to-top.png"),u.append(m);let b=0;const p=()=>{const t=window.innerHeight,e=document.body.clientWidth;e>t?(document.body.classList.remove("portrait"),document.body.classList.add("landscape")):(document.body.classList.remove("landscape"),document.body.classList.add("portrait")),e<=782?(document.body.classList.remove("largeScreen"),document.body.classList.remove("tablet"),document.body.classList.add("mobile")):e<=1199?(document.body.classList.remove("mobile"),document.body.classList.add("tablet"),document.body.classList.remove("largeScreen")):(document.body.classList.remove("mobile"),document.body.classList.remove("tablet"),document.body.classList.add("largeScreen"))};window.addEventListener("resize",p),window.addEventListener("scroll",(()=>{const t=document.querySelector(".back-to-top");if(null!==t&&(window.pageYOffset+window.innerHeight>document.body.offsetHeight-1e3?(t.style.display="block",t.style.opacity="0.75"):(t.style.display="none",t.style.opacity="0")),null!==d&&"hides"===window.site.headerEffect){const t=window.pageYOffset||document.documentElement.scrollTop;t<b?t>100&&(l.style.opacity="1",l.style.transform="translateY(0%)"):t>100&&(l.style.opacity="0",l.style.transform="translateY(-100%)"),b=t<=0?0:t}})),window.addEventListener("load",(()=>{p()}))}),0)};"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)},883:()=>{const t=()=>{("cleanbc"===window.site.siteName||window.site.allSiteStyles.length)&&setTimeout((function(){const t=document.querySelectorAll("a.icon");t.length&&t.forEach((t=>{null===t.getAttribute("href")&&(t.setAttribute("tabindex","-1"),t.style.pointerEvents="none")}));const e=document.querySelectorAll(".wp-block-button.is-style-icon");e.length&&e.forEach((t=>{const e=t.querySelector("a");null===e||t.classList.contains("has-size-large")||(e.style.outlineOffset="1rem")})),window.addEventListener("scroll",(()=>{}))}),0)};"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)},184:(t,e)=>{var l;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var l=arguments[e];if(l){var n=typeof l;if("string"===n||"number"===n)t.push(l);else if(Array.isArray(l)){if(l.length){var r=a.apply(null,l);r&&t.push(r)}}else if("object"===n)if(l.toString===Object.prototype.toString)for(var c in l)o.call(l,c)&&l[c]&&t.push(c);else t.push(l.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(l=function(){return a}.apply(e,[]))||(t.exports=l)}()},819:t=>{"use strict";t.exports=window.lodash}},e={};function l(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,l),n.exports}l.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return l.d(e,{a:e}),e},l.d=(t,e)=>{for(var o in e)l.o(e,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},l.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o])}return t},t.apply(this,arguments)}l(772),l(479),l(883);const e=window.wp.element;var o=l(184),a=l.n(o);const{__}=wp.i18n,n=[{label:__("None","bcgov-block-theme"),value:""},{label:__("Default","bcgov-block-theme"),value:"default"},{label:__("Home","bcgov-block-theme"),value:"home"},{label:__("Auto","bcgov-block-theme"),value:"auto"},{label:__("Book","bcgov-block-theme"),value:"book"},{label:__("Calendar","bcgov-block-theme"),value:"calendar"},{label:__("Case","bcgov-block-theme"),value:"case"},{label:__("Changes","bcgov-block-theme"),value:"changes"},{label:__("Federal","bcgov-block-theme"),value:"federal"},{label:__("Gear","bcgov-block-theme"),value:"gear"},{label:__("Group","bcgov-block-theme"),value:"group"},{label:__("Leaf","bcgov-block-theme"),value:"leaf"},{label:__("Map","bcgov-block-theme"),value:"map"},{label:__("Tag","bcgov-block-theme"),value:"tag"}],{assign:r,merge:c}=l(819),{registerBlockStyle:s,unregisterBlockStyle:i}=wp.blocks,{__:d}=wp.i18n,{addFilter:u}=wp.hooks,{createHigherOrderComponent:m}=wp.compose,{Fragment:b}=wp.element,{InspectorControls:p}=wp.blockEditor,{PanelBody:g,SelectControl:w,TextControl:h}=wp.components;s("core/button",{name:"fill",label:"BCGov",default:"is-bcgov-fill"}),s("core/button",{name:"outline",label:"Outline"}),s("core/button",{name:"underline",label:"Underline"}),("cleanbc"===window.site.siteName||window.site.allSiteStyles.length)&&s("core/button",{name:"icon",label:"Icon"}),wp.domReady((()=>{i("core/button","default")})),u("blocks.registerBlockType","bcgov-block-theme/button-block/add-attributes",(function(t,e){return"core/button"===e?r({},t,{attributes:c(t.attributes,{size:{type:"string",default:"regular"},svgIcon:{type:"string",default:""},iconsList:{type:"array",default:n},clickFlag:{type:"boolean",default:!1},label:{type:"string",default:""}})}):t})),u("editor.BlockEdit","bcgov-block-theme/button-block/add-inspector-controls",m((t=>l=>{const{attributes:{size:o,svgIcon:a,iconsList:n,clickFlag:r,label:c},setAttributes:s,name:i}=l;return"core/button"!==i?(0,e.createElement)(t,l):(0,e.createElement)(b,null,(0,e.createElement)(t,l),(0,e.createElement)(p,null,(0,e.createElement)(g,{title:d("Icon options","bcgov-block-theme"),initialOpen:!1},r&&(0,e.createElement)(w,{label:d("Icon","bcgov-block-theme"),value:a,options:n,onChange:t=>{s({svgIcon:t})}}),!r&&(0,e.createElement)(b,null,(0,e.createElement)("h3",null,"Instructions (for CleanBC only):"),(0,e.createElement)("p",null,"To change the colour of an icon use the Color ▶ Background setting below."),(0,e.createElement)("p",null,"Note that the"," ",(0,e.createElement)("em",null,"icon color change will only work with the Theme palette")," ","of colours."),(0,e.createElement)("p",null,(0,e.createElement)("strong",null,"Enable the Icon style")," ","button to use list of icon options."),(0,e.createElement)("button",{onClick:()=>{s({clickFlag:!0})}},"Show icons"))),(0,e.createElement)(g,{title:d("Size options","bcgov-block-theme"),initialOpen:!0},(0,e.createElement)(w,{label:d("Size","bcgov-block-theme"),value:o,options:[{label:d("Default","bcgov-block-theme"),value:"regular"},{label:d("Large","bcgov-block-theme"),value:"large"}],onChange:t=>{s({size:t})}})),(0,e.createElement)(g,{title:"Accessibility",initialOpen:!1},(0,e.createElement)(h,{label:"ARIA Label",value:c,onChange:t=>s({label:t})}))))}),"withInspectorControl")),u("editor.BlockListBlock","bcgov-block-theme/button-block/add-editor-class",m((l=>o=>{const{attributes:{size:n,svgIcon:r},className:c,name:s}=o;return"core/button"!==s?(0,e.createElement)(l,o):(0,e.createElement)(l,t({},o,{className:a()(c,n?`has-size-${n}`:"",r?`icon icon-${r}`:"")}))}),"withClientIdClassName")),l(274),l(644),l(455);const{registerBlockStyle:f}=wp.blocks,{assign:v,merge:k}=l(819),{addFilter:y}=wp.hooks,{createHigherOrderComponent:E}=wp.compose,{Fragment:C}=wp.element,{InspectorControls:x}=wp.blockEditor,{PanelBody:B,PanelRow:L,CheckboxControl:S,TextControl:I}=wp.components;f("core/image",{name:"dropshadow",label:"Drop shadow"}),f("core/image",{name:"variable-ratio",label:"Variable ratio",description:"Image ratio changes between desktop/tablet and mobile. Image displays at 1:1 ratio on large screens and 2:1 ratio (wider than it is high) on mobile screens."}),y("blocks.registerBlockType","bcgov-block-theme/image/add-attributes",(function(t,e){return"core/image"===e?v({},t,{attributes:k(t.attributes,{title:{type:"string",default:""},printMode:{type:"boolean",default:!1}})}):t})),y("editor.BlockEdit","bcgov-block-theme/image/add-inspector-controls",E((t=>l=>{const{attributes:{title:o,printMode:a},setAttributes:n,name:r}=l;return"core/image"!==r?(0,e.createElement)(t,l):(0,e.createElement)(C,null,(0,e.createElement)(t,l),(0,e.createElement)(x,null,(0,e.createElement)(B,{title:"Other Media Settings",initialOpen:!1},(0,e.createElement)(L,null,(0,e.createElement)(I,{label:"Title (hover details)",value:o,onChange:t=>n({title:t})})),(0,e.createElement)(L,null,(0,e.createElement)(S,{label:"Show image when printing",checked:a,onChange:t=>n({printMode:t})})))))}),"withInspectorControl"));const{registerBlockStyle:A}=wp.blocks,{assign:N,merge:$}=l(819),{addFilter:_}=wp.hooks,{createHigherOrderComponent:T}=wp.compose,{Fragment:O}=wp.element,{InspectorControls:q}=wp.blockEditor,{PanelBody:z,PanelRow:P,CheckboxControl:D,TextControl:M}=wp.components;A("core/media-text",{name:"dropshadow",label:"Drop shadow"}),A("core/media-text",{name:"square",label:"Square"}),A("core/media-text",{name:"no-clip",label:"Full Image"}),_("blocks.registerBlockType","bcgov-block-theme/media-text/add-attributes",(function(t,e){return"core/media-text"===e?N({},t,{attributes:$(t.attributes,{title:{type:"string",default:""},printMode:{type:"boolean",default:!1}})}):t})),_("editor.BlockEdit","bcgov-block-theme/media-text/add-inspector-controls",T((t=>l=>{const{attributes:{title:o,printMode:a},setAttributes:n,name:r}=l;return"core/media-text"!==r?(0,e.createElement)(t,l):(0,e.createElement)(O,null,(0,e.createElement)(t,l),(0,e.createElement)(q,null,(0,e.createElement)(z,{title:"Other Media Settings",initialOpen:!1},(0,e.createElement)(P,null,(0,e.createElement)(M,{label:"Title (hover details)",value:o,onChange:t=>n({title:t})})),(0,e.createElement)(P,null,(0,e.createElement)(D,{label:"Show image when printing",checked:a,onChange:t=>n({printMode:t})})))))}),"withInspectorControl")),l(205);const{assign:F,merge:j}=l(819),{addFilter:H}=wp.hooks,{createHigherOrderComponent:R}=wp.compose,{Fragment:G}=wp.element,{InspectorControls:Y}=wp.blockEditor,{PanelBody:W,PanelRow:U,CheckboxControl:V}=wp.components;H("blocks.registerBlockType","bcgov-block-theme/site-logo/add-attributes",(function(t,e){return"core/site-logo"===e?F({},t,{attributes:j(t.attributes,{inverted:{type:"boolean",default:!1}})}):t})),H("editor.BlockEdit","bcgov-block-theme/site-logo/add-inspector-controls",R((t=>l=>{const{attributes:{inverted:o},setAttributes:a,name:n}=l;return"core/site-logo"!==n?(0,e.createElement)(t,l):(0,e.createElement)(G,null,(0,e.createElement)(t,l),(0,e.createElement)(Y,null,(0,e.createElement)(W,{title:"Other Media Settings",initialOpen:!1},(0,e.createElement)(U,null,(0,e.createElement)(V,{label:"Set dark background for print",checked:o,onChange:t=>a({inverted:t})})))))}),"withInspectorControl")),l(548);const J=window.wp.i18n,K=window.wp.blocks,Q=window.wp.blockEditor,X=window.wp.components,Z=window.wp.compose,tt={backgroundColor:{type:"string",default:"transparent"},firstBreakColumns:{type:"integer",default:3},cardId:{type:"string",default:""}},et=[{attributes:tt,save:t=>{const{attributes:{cardId:l,backgroundColor:o,firstBreakColumns:a,firstBreak:n,secondBreakColumns:r,secondBreak:c},className:s}=t;return(0,e.createElement)("div",null,(0,e.createElement)("style",{jsx:!0},`\n\t\t\t\t\t\t\t#${l} {\n\t\t\t\t\t\t\t\tbackground-color: ${o};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media (min-width: ${c}px) {\n\t\t\t\t\t\t\t\tul#${l} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${l} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/r-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media (min-width: ${n}px) {\n\t\t\t\t\t\t\t\tul#${l} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${l} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/a-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t`),(0,e.createElement)("ul",{className:s,id:l},(0,e.createElement)(Q.InnerBlocks.Content,null)))}},{attributes:tt,save:t=>{const{attributes:{cardId:l,backgroundColor:o,firstBreakColumns:a,firstBreak:n,secondBreakColumns:r,secondBreak:c},className:s}=t;return(0,e.createElement)("div",{role:"navigation"},(0,e.createElement)("style",{jsx:!0},`\n\t\t\t\t\t\t\t#${l} {\n\t\t\t\t\t\t\t\tbackground-color: ${o};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media (min-width: ${c}px) {\n\t\t\t\t\t\t\t\tul#${l} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${l} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/r-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t@media (min-width: ${n}px) {\n\t\t\t\t\t\t\t\tul#${l} {\n\t\t\t\t\t\t\t\t\t-webkit-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-moz-flex-direction: row;\n\t\t\t\t\t\t\t\t\t-ms-flex-direction: row;\n\t\t\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t\t\t\t-webkit-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-moz-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\t-ms-flex-wrap: wrap;\n\t\t\t\t\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tul#${l} > li {\n\t\t\t\t\t\t\t\t\twidth: ${100/a-2}%;\n\t\t\t\t\t\t\t\t\tmargin: 1%;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t`),(0,e.createElement)("ul",{className:s,id:l},(0,e.createElement)(Q.InnerBlocks.Content,null)))}},{attributes:tt,save:t=>{const{attributes:{cardId:l},className:o}=t;return(0,e.createElement)("ul",{className:o,id:l},(0,e.createElement)(Q.InnerBlocks.Content,null))}}],lt=[{name:"bcgov-background-light",color:"#f2f2f2"},{name:"bcgov-component",color:"#606060"},{name:"bcgov-text",color:"#313132"},{name:"bcgov-white",color:"#fff"},{name:"bcgov-primary",color:"#036"},{name:"bcgov-link",color:"#1a5a96"},{name:"bcgov-background-blue",color:"#38598a"},{name:"bcgov-yellow",color:"#fcba19"},{name:"bcgov-red",color:"#d8292f"},{name:"bcgov-green",color:"#2e8540"}],ot=(t,e)=>(void 0===t&&(t=e),t),at=t=>{const e=new window.MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t.dispatchEvent(e)};function nt(){const t=this.getAttribute("data-target");if(void 0===t)return;const e=document.querySelectorAll(`${t} .collapse-header button`),l=document.querySelectorAll(`${t} .collapse`);this.classList.contains("collapse-expand-all")&&(e.forEach((t=>{t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)})),l.forEach((t=>{t.classList.remove("collapse"),t.classList.add("collapsing"),t.classList.remove("hide"),t.classList.add("show"),setTimeout((function(){t.classList.add("collapse"),t.classList.remove("collapsing")}),300)}))),this.classList.contains("collapse-collapse-all")&&(e.forEach((t=>{t.classList.add("collapsed"),t.setAttribute("aria-expanded",!1)})),l.forEach((t=>{t.classList.remove("collapse"),t.classList.add("collapsing"),t.classList.remove("show"),t.classList.add("hide"),setTimeout((function(){t.classList.add("collapse"),t.classList.remove("collapsing")}),300)})))}function rt(){if(void 0===this.getAttribute("data-target"))return;const t=this,e=t.closest(".wp-block-bcgov-block-theme-collapse-item").querySelector(".collapse-container");e.classList.remove("collapse"),e.classList.add("collapsing"),t.setAttribute("aria-expanded","true"===t.getAttribute("aria-expanded")?"false":"true"),"true"===t.getAttribute("aria-expanded")?(t.classList.remove("collapsed"),e.classList.remove("hide"),e.classList.add("show")):(t.classList.add("collapsed"),e.classList.add("hide"),e.classList.remove("show")),setTimeout((function(){e.classList.add("collapse"),e.classList.remove("collapsing")}),300)}function ct(){const t=this.getAttribute("data-target");if(void 0===t)return;const e=document.querySelector(`.collapse-header button[data-target="${t}"]`);at(e)}(0,K.registerBlockType)("bcgov/card-container",{title:(0,J.__)("Basic Card Container","basic-card-container"),icon:"images-alt",category:"media",attributes:tt,getEditWrapperProps:()=>({"data-align":"wide"}),supports:{align:!0},example:{},edit:t=>{const{attributes:{cardId:l,backgroundColor:o,firstBreakColumns:a},className:n,clientId:r}=t;t.setAttributes({cardId:`card-container-${r}`});const c=(0,Z.withState)({column:a})((l=>{let{column:o,setState:a}=l;return(0,e.createElement)(X.RangeControl,{label:(0,J.__)("Columns"),value:o,initialPosition:"3",onChange:e=>{t.setAttributes({firstBreakColumns:e}),a({column:o})},min:1,max:6})}));return(0,e.createElement)("ul",{className:n,style:{backgroundColor:o},id:l},(0,e.createElement)(Q.InspectorControls,null,(0,e.createElement)(X.PanelBody,{title:(0,J.__)("Background Colour")},(0,e.createElement)(X.ColorPalette,{colors:lt,value:o,onChange:e=>{t.setAttributes({backgroundColor:ot(e,"transparent")})}})),(0,e.createElement)(X.PanelBody,{title:(0,J.__)("Desktop Columns")},(0,e.createElement)(c,null))),(0,e.createElement)(Q.InnerBlocks,{allowedBlocks:["bcgov/card","bcgov/fancy-button"]}))},deprecated:et,save:t=>{const{attributes:{cardId:l,backgroundColor:o,firstBreakColumns:a},className:n}=t;return(0,e.createElement)("ul",{className:`${n} lg-break-${a}`,id:l,style:{backgroundColor:o}},(0,e.createElement)(Q.InnerBlocks.Content,null))}}),(0,K.registerBlockType)("bcgov/card",{title:(0,J.__)("Basic Card","basic-card"),icon:"format-image",category:"media",attributes:{title:{type:"array",source:"children",selector:".card-block-title"},content:{type:"array",source:"children",selector:".card-block-content"},alignment:{type:"string",default:"none"},color:{type:"string",default:"inherit"},backgroundColor:{type:"string",default:"transparent"}},example:{},edit:t=>{const{attributes:{alignment:l,color:o,backgroundColor:a},className:n}=t;return(0,e.createElement)("li",{className:`align-${l} ${n}`,style:{backgroundColor:a,color:o}},(0,e.createElement)(Q.BlockControls,null,(0,e.createElement)(Q.AlignmentToolbar,{value:l,onChange:e=>{t.setAttributes({alignment:ot(e,"none")})}})),(0,e.createElement)(Q.InspectorControls,null,(0,e.createElement)(X.PanelBody,{title:(0,J.__)("Colour")},(0,e.createElement)(X.ColorPalette,{colors:lt,value:o,onChange:e=>{t.setAttributes({color:ot(e,"transparent")})}})),(0,e.createElement)(X.PanelBody,{title:(0,J.__)("Background Colour")},(0,e.createElement)(X.ColorPalette,{colors:lt,value:a,onChange:e=>{t.setAttributes({backgroundColor:ot(e,"transparent")})}}))),(0,e.createElement)(Q.InnerBlocks,{allowedBlocks:["core/heading","core/paragraph","core/image","core/html","core/button"]}))},save:t=>{const{attributes:{alignment:l,backgroundColor:o,color:a}}=t;return(0,e.createElement)("li",{className:`align-${l}`,style:{backgroundColor:o,color:a}},(0,e.createElement)(Q.InnerBlocks.Content,null))}});const st=()=>{setTimeout((function(){const t=document.querySelectorAll(".collapse-container-nav button"),e=document.querySelectorAll(".collapse-header button"),l=document.querySelectorAll(".collapse-close a"),o=document.querySelector(".collapse-collapse-all");t.length&&(t.forEach((t=>{t.addEventListener("click",nt)})),e.forEach((t=>{t.addEventListener("click",rt)})),l.forEach((t=>{t.addEventListener("click",ct)})),at(o),at(e[0]))}),0)};"complete"===document.readyState?st():document.addEventListener("DOMContentLoaded",st),(0,K.registerBlockType)("bcgov-block-theme/collapse",{title:(0,J.__)("Collapse Container","bcgov-blocks"),icon:"admin-page",category:"layout",attributes:{collapseId:{type:"string",default:""}},supports:{align:["wide"]},example:{},edit:t=>{const{attributes:{collapseId:l},className:o,clientId:a}=t;return t.setAttributes({collapseId:`collapse-container-${a}`}),(0,e.createElement)("div",{className:o,id:l},(0,e.createElement)(Q.InnerBlocks,{allowedBlocks:["bcgov-block-theme/collapse-item"]}))},save:t=>{const{attributes:{collapseId:l}}=t;return(0,e.createElement)("div",{id:l},(0,e.createElement)("div",{className:"collapse-container-nav"},(0,e.createElement)("span",null,(0,e.createElement)("button",{"data-target":`#${l}`,className:"collapse-expand-all"},(0,J.__)("Expand all"))),(0,e.createElement)("span",null,(0,e.createElement)("button",{"data-target":`#${l}`,className:"collapse-collapse-all"},(0,J.__)("Collapse all")))),(0,e.createElement)(Q.InnerBlocks.Content,null))}}),(0,K.registerBlockType)("bcgov-block-theme/collapse-item",{title:(0,J.__)("Collapse Item","bcgov-blocks"),icon:"welcome-add-page",category:"layout",attributes:{title:{type:"string",selector:".bcgov-collapse-title"},itemId:{type:"string",default:""},headingId:{type:"string",default:""}},example:{},edit:t=>{const{attributes:{title:l,itemId:o,headingId:a},className:n,clientId:r}=t;return t.setAttributes({itemId:`collapse-item-${r}`}),t.setAttributes({headingId:`heading-${r}`}),(0,e.createElement)("div",{className:n},(0,e.createElement)("div",{className:"collapse-header",id:a},(0,e.createElement)("h3",null,(0,e.createElement)("button",{"data-toggle":"collapse","data-target":`#${o}`,"aria-expanded":"false","aria-controls":o,className:"collapsed"},(0,e.createElement)(Q.RichText,{tagName:"span",onChange:e=>{t.setAttributes({title:e})},className:"collapse-title",value:l,placeholder:(0,J.__)("…Title")})))),(0,e.createElement)("div",{className:"collapse collapse-container",id:o},(0,e.createElement)("div",{className:"collapse-body"},(0,e.createElement)(Q.InnerBlocks,null))))},save:t=>{const{attributes:{title:l,itemId:o,headingId:a}}=t;return(0,e.createElement)("div",null,(0,e.createElement)("div",{className:"collapse-header",id:a},(0,e.createElement)("h3",null,(0,e.createElement)("button",{"data-toggle":"collapse","data-target":`#${o}`,"aria-expanded":"false","aria-controls":o,className:"collapsed"},(0,e.createElement)(Q.RichText.Content,{tagName:"span",className:"collapse-title",value:l})))),(0,e.createElement)("div",{className:"collapse collapse-container",id:o},(0,e.createElement)("div",{className:"collapse-body"},(0,e.createElement)(Q.InnerBlocks.Content,null),(0,e.createElement)("div",{className:"collapse-close"},(0,e.createElement)("a",{"data-toggle":"collapse","data-target":`#${o}`,href:`#${o}`,role:"button","aria-expanded":"true","aria-controls":o},(0,J.__)("Collapse"))))))}})})()})();