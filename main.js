(()=>{var e={510:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"/* HEADER */\n/* ---------------------------------------------- */\n\nheader {\n\twidth: 100vw;\n\theight: 12.5rem;\n\tbox-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n#logo {\n\tpadding: 1rem;\n\tmargin: 1rem;\n\tborder-radius: 15px;\n    font-family: 'roboto', cursive;\n    font-size: 2.5rem;\n\tfont-weight: 700;\n\tcolor: rgb(0, 0, 0);\n}\n\n/* NAVBAR */\n\n.navbar {\n\tmargin-top: 1rem;\n\twidth: 85vw;\n\n    display: flex;\n\tjustify-content: space-between;\n}\n\n.navbar a {\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n\tbackground-color: var(--header-color);\n\tborder: 1px solid black;\n\tpadding: 0.6rem 1rem;\n\tfont-size: 2rem;\n\ttext-decoration: none;\n\tcolor: rgb(0, 0, 0);\n\ttransition: 0.3s ease;\n}\n\n.navbar a:hover {\n\ttransform: translateY(5px);\n\tbackground-color: var(--hover-color);\n}",""]);const s=i},351:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"/* HOME */\n/* ---------------------------------------------- */\n\n.wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n#mainTitle {\n\ttext-align: center;\n\tmargin: 2rem 0;\n\tfont-size: 2.5rem;\n}\n\n.food-grid {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n\twidth: 85vw;\n\tgap: 2rem;\n}\n\n.food-card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-top-left-radius: 15px;\n\tborder-top-right-radius: 15px;\n\tbackground-color: var(--card-background);\n\tbox-shadow:\n    0px 0px 10px rgba(0, 0, 0, 0.4),\n    0px 2px 8px rgba(0, 0, 0, 0.8),\n    0px 6px 10px rgba(0, 0, 0, 0.4);\n}\n\n.food-card > * {\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.food-image {\n\twidth: 100%;\n\theight: 15rem;\n}\n\n.food-image img {\n\twidth: 100%;\n\theight: 100%;\n\tborder-top-left-radius: 15px;\n\tborder-top-right-radius: 15px;\n}\n\n\n.food-info h1 {\n\tpadding: 10px;\n\tfont-size: 2rem;\n\tfont-weight: bold;\n\tfont-family: 'Playfair Display', serif;\n\tborder-bottom: 1px solid black;\n}\n\n.food-info h2 {\n\tpadding: 10px;\n\tfont-size: 1.2rem;\n\tfont-family: 'Open Sans', sans-serif;\n}\n  \n.food-info p {\n\tpadding: 10px;\n\tfont-family: 'Arial', sans-serif;\n}\n\n.food-button:hover {\n\tcursor: pointer;\n\tbackground-color: var(--hover-color);\n}\n\n.food-button {\n\tpadding: 10px 0;\n\tbackground-color: var(--more-info-color);\n\tborder-top-left-radius: 5px;\n\tborder-top-right-radius: 5px;\n\tmargin-top: auto;\n\tborder-top: 1px solid black;\n\ttext-decoration: none;\n\tcolor: black;\n}",""]);const s=i},452:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},657:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"/* IMPORTS & UTILS*/\n/* ---------------------------------------------- */\n\n:root {\n\t--header-color: #f5f4f8;\n\t--light-green-hover: #c7f0db;\n\t--card-background: #fde68a;\n\t--more-info-color: #22d3ee;\n\t--hover-color: #dbd1ff\n}\n\nbody {\n\tbackground-color: var(--header-color);\n}",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},772:(e,t,n)=>{e.exports=n.p+"assets/imgs/cilantro.a9eb6b2f7e8fb73417a1b5d3ade0dd70.jpg"},90:(e,t,n)=>{e.exports=n.p+"assets/imgs/coffee.b4da390a86c2f4929872c07e3d7a59da.jpg"},923:(e,t,n)=>{e.exports=n.p+"assets/imgs/cumin.1750f6d236aa73e92d77f9aae4bb502e.jpg"},778:(e,t,n)=>{e.exports=n.p+"assets/imgs/egg.bd6360c1286342b6eb0e0b9c5fe762a3.jpg"},189:(e,t,n)=>{e.exports=n.p+"assets/imgs/garlic.e7a2137666537f541afdfb6a3122205b.jpg"},109:(e,t,n)=>{e.exports=n.p+"assets/imgs/lamb-meat.554a6101887ce0739ff7fb4cc983315a.jpg"},716:(e,t,n)=>{e.exports=n.p+"assets/imgs/milk.f83f3dc0e753f5abab8353c655c5c7b0.jpg"},990:(e,t,n)=>{e.exports=n.p+"assets/imgs/olive-oil.e5d9db7306f80d125a7f3ca6eca1c23d.jpg"},376:(e,t,n)=>{e.exports=n.p+"assets/imgs/onion.5e18a784e4d0c88098aa8c74bc3f7c69.jpg"},275:(e,t,n)=>{e.exports=n.p+"assets/imgs/spinach.81e543515cdabadefb31ed3eee966c5a.jpg"},538:(e,t,n)=>{e.exports=n.p+"assets/imgs/tomatoes.919b9061e5871c3901fc88e9a2977335.jpg"},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=o.base?d[0]+o.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=o(e,r),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),s=n(565),d=n.n(s),c=n(216),l=n.n(c),p=n(589),u=n.n(p),m=n(452),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g=n(657),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;var b=n(510),v={};v.styleTagTransform=u(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),t()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var y=n(351),x={};x.styleTagTransform=u(),x.setAttributes=d(),x.insert=i().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=l(),t()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;var w=n(772),k=n.n(w),C=n(90),T=n.n(C),E=n(923),I=n.n(E),j=n(778),A=n.n(j),S=n(189),L=n.n(S),M=n(109),Z=n.n(M),q=n(716),O=n.n(q),P=n(990),z=n.n(P),N=n(376),H=n.n(N),_=n(275),R=n.n(_),D=n(538),F=n.n(D);const U={cilantroImage:k(),coffeeImage:T(),cuminImage:I(),eggImage:A(),garlicImage:L(),lambMeatImage:Z(),milkImage:O(),oliveOilImage:z(),onionImage:H(),spinachImage:R(),tomatoImage:F()};function $(e,t,n,o){const r=document.createElement("div");r.classList.add("food-card");const a=document.createElement("div");a.classList.add("food-image");const i=document.createElement("img");i.src=e,a.appendChild(i);const s=document.createElement("div");s.classList.add("food-info");const d=document.createElement("h1");d.textContent=t;const c=document.createElement("h2");c.textContent=n,s.appendChild(d),s.appendChild(c);const l=document.createElement("a");return l.classList.add("food-button"),l.textContent="More Info",l.href=o,r.appendChild(a),r.appendChild(s),r.appendChild(l),r}const B=$(U.cilantroImage,"Cilantro","The zesty green daredevil, lending a fresh and vibrant twist to dishes, delighting taste buds and dividing opinions with its unique flavor.","https://en.wikipedia.org/wiki/Coriander"),G=$(U.coffeeImage,"Coffee","The aromatic elixir of the gods, awakening senses and bestowing caffeinated bliss upon mortals, the nectar of productivity.","https://en.wikipedia.org/wiki/Coffee"),J=$(U.cuminImage,"Cumin","The spice whisperer, sprinkling its warm, earthy essence into dishes, transporting taste buds to far-off lands.","https://en.wikipedia.org/wiki/Cumin"),V=$(U.eggImage,"Egg","The culinary chameleons, transforming from delicate omelettes to hearty scrambles, the ultimate breakfast heroes.","https://en.wikipedia.org/wiki/Egg_as_food"),Y=$(U.garlicImage,"Garlic","Nature's aromatic ninja, adding flavor and warding off vampires with its pungent prowess.","https://en.wikipedia.org/wiki/Garlic"),K=$(U.lambMeatImage,"Lamb Meat","The regal meat, gracing tables with its tender succulence and commanding presence, fit for kings and queens.","https://en.wikipedia.org/wiki/Lamb_and_mutton"),Q=$(U.milkImage,"Milk","Nature's white elixir, nurturing bones and fueling dreams with its creamy goodness, a staple in kitchens and bedtime stories.","https://en.wikipedia.org/wiki/Milk"),W=$(U.oliveOilImage,"Olive Oil","Liquid gold from Mediterranean shores, drizzling its smooth richness, elevating dishes to gourmet status.","https://en.wikipedia.org/wiki/Olive_oil"),X=$(U.onionImage,"Onion","The multitasking tearjerker, effortlessly enhancing dishes while making you weep in appreciation.","https://en.wikipedia.org/wiki/Onion"),ee=$(U.spinachImage,"Spinach","Popeye's secret weapon, these leafy green powerhouses pack a punch of nutrients, transforming ordinary meals into superfood feats.","https://en.wikipedia.org/wiki/Spinach"),te=$(U.tomatoImage,"Tomato","Juicy orbs of summer delight, bursting with tangy sweetness, lending their vibrant hue to salads and sauces alike.","https://en.wikipedia.org/wiki/Tomato"),ne=document.createElement("div");ne.classList.add("food-grid"),ne.appendChild(B),ne.appendChild(G),ne.appendChild(J),ne.appendChild(V),ne.appendChild(Y),ne.appendChild(K),ne.appendChild(Q),ne.appendChild(W),ne.appendChild(X),ne.appendChild(ee),ne.appendChild(te);const oe=ne,re=document.createElement("header"),ae=function(){const e=document.createElement("div");e.setAttribute("id","logo"),e.innerText="Mohamed & Sophia's Foods";const t=document.createElement("nav");t.classList.add("navbar");const n=document.createElement("a");n.href="#",n.innerText="Home",n.setAttribute("id","home");const o=document.createElement("a");o.href="#",o.innerText="About",o.setAttribute("id","about");const r=document.createElement("a");r.href="#",r.innerText="Cooked",r.setAttribute("id","cooked");const a=document.createElement("a");return a.href="#",a.innerText="Uncooked",a.setAttribute("id","uncooked"),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(a),re.appendChild(e),re.appendChild(t),re}();function ie(){const e=document.createElement("main");e.classList.add("wrapper");const t=document.createElement("div");t.setAttribute("id","mainTitle"),t.innerText="Here are some of our favorite ingredients that we cook with everyday :)",e.appendChild(t),e.appendChild(oe),document.body.appendChild(e)}function se(){const e=document.querySelector("main");e&&document.body.removeChild(e)}document.body.appendChild(ae),ie(),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector("#about").addEventListener("click",(()=>{se()})),document.querySelector("#home").addEventListener("click",(()=>{se(),ie()}))}))})()})();