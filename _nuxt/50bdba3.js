(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,n,t){"use strict";t.r(n);var o={name:"HeaderComp",mounted:function(){document.querySelector(".logo").onclick=function(){window.location="/"}}},r=(t(253),t(22)),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",{staticClass:"sticky top-0 bg-slate-900 w-full z-20"},[t("section",{staticClass:"py-4 m-auto flex justify-between text-white px-6"},[e._m(0),e._v(" "),t("nav",[t("ul",{staticClass:"flex justify-between w-64 text-base font-light"},[t("li",[t("NuxtLink",{staticClass:"hover:border-b-2 py-2",attrs:{to:"/"}},[e._v("\n            Home\n          ")])],1),e._v(" "),t("li",[t("NuxtLink",{staticClass:"hover:border-b-2 py-2",attrs:{to:"/about"}},[e._v("\n            About\n          ")])],1),e._v(" "),t("li",[t("NuxtLink",{staticClass:"hover:border-b-2 py-2",attrs:{to:"/login"}},[e._v("\n            Login\n          ")])],1),e._v(" "),e._m(1)])])])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{staticClass:"font-black text-xl logo"},[e._v("\n        LOGO\n      ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",[t("a",{staticClass:"hover:border-b-2 py-2",attrs:{href:"https://github.com/faresdjefaflia/learn-NuxtJs"}},[e._v("Github")])])}],!1,null,"401f4f36",null);n.default=component.exports;installComponents(component,{Header:t(102).default})},103:function(e,n,t){"use strict";t.r(n);var o={name:"FooterComp"},r=t(22),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",{staticClass:"w-full bg-slate-900 text-center"},[t("h1",{staticClass:"py-3 text-white"},[e._v("\n    Fares - FrsCodes 2022 [for learn NuxtJs]\n  ")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Footer:t(103).default})},176:function(e,n,t){var content=t(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(41).default)("b3c54b8e",content,!0,{sourceMap:!1})},194:function(e,n,t){"use strict";var o=t(102),r=t(103),l={components:{Header:o.default,Footer:r.default}},d=t(22),component=Object(d.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Header"),e._v(" "),t("Nuxt"),e._v(" "),t("Footer")],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{Header:t(102).default,Footer:t(103).default})},197:function(e,n,t){t(198),e.exports=t(199)},245:function(e,n,t){var content=t(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(41).default)("17bc9ac2",content,!0,{sourceMap:!1})},246:function(e,n,t){var o=t(40)((function(i){return i[1]}));o.push([e.i,'/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.static{position:static;}.sticky{position:-webkit-sticky;position:sticky;}.top-0{top:0px;}.z-20{z-index:20;}.m-auto{margin:auto;}.m-6{margin:1.5rem;}.my-4{margin-top:1rem;margin-bottom:1rem;}.my-3{margin-top:0.75rem;margin-bottom:0.75rem;}.my-5{margin-top:1.25rem;margin-bottom:1.25rem;}.mb-8{margin-bottom:2rem;}.mb-4{margin-bottom:1rem;}.mt-7{margin-top:1.75rem;}.ml-1{margin-left:0.25rem;}.mt-3{margin-top:0.75rem;}.mt-2{margin-top:0.5rem;}.mt-4{margin-top:1rem;}.ml-3{margin-left:0.75rem;}.mb-1{margin-bottom:0.25rem;}.mr-10{margin-right:2.5rem;}.block{display:block;}.inline-block{display:inline-block;}.flex{display:flex;}.h-screen{height:100vh;}.w-full{width:100%;}.w-64{width:16rem;}.w-44{width:11rem;}.w-14{width:3.5rem;}.w-2\\/5{width:40%;}.w-80{width:20rem;}.w-1\\/2{width:50%;}.w-96{width:24rem;}.w-1\\/4{width:25%;}.w-16{width:4rem;}.w-4\\/5{width:80%;}.w-3\\/5{width:60%;}.max-w-screen-xl{max-width:1280px;}.max-w-5xl{max-width:64rem;}.max-w-7xl{max-width:80rem;}.max-w-xs{max-width:20rem;}.content-center{align-content:center;}.items-center{align-items:center;}.justify-end{justify-content:flex-end;}.justify-center{justify-content:center;}.justify-between{justify-content:space-between;}.overflow-auto{overflow:auto;}.rounded-full{border-radius:9999px;}.rounded-md{border-radius:0.375rem;}.rounded-lg{border-radius:0.5rem;}.rounded-r-md{border-top-right-radius:0.375rem;border-bottom-right-radius:0.375rem;}.border-2{border-width:2px;}.border{border-width:1px;}.border-slate-900{--tw-border-opacity:1;border-color:rgb(15 23 42 / var(--tw-border-opacity));}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity));}.bg-slate-900{--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity));}.bg-slate-700{--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity));}.bg-slate-800{--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity));}.p-10{padding:2.5rem;}.p-3{padding:0.75rem;}.p-5{padding:1.25rem;}.p-6{padding:1.5rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.px-6{padding-left:1.5rem;padding-right:1.5rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.px-28{padding-left:7rem;padding-right:7rem;}.py-28{padding-top:7rem;padding-bottom:7rem;}.px-2{padding-left:0.5rem;padding-right:0.5rem;}.px-3{padding-left:0.75rem;padding-right:0.75rem;}.px-20{padding-left:5rem;padding-right:5rem;}.py-16{padding-top:4rem;padding-bottom:4rem;}.px-7{padding-left:1.75rem;padding-right:1.75rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-8{padding-top:2rem;padding-bottom:2rem;}.py-5{padding-top:1.25rem;padding-bottom:1.25rem;}.pt-8{padding-top:2rem;}.text-center{text-align:center;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-base{font-size:1rem;line-height:1.5rem;}.text-8xl{font-size:6rem;line-height:1;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.text-6xl{font-size:3.75rem;line-height:1;}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.font-black{font-weight:900;}.font-light{font-weight:300;}.font-bold{font-weight:700;}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42 / var(--tw-text-opacity));}.outline-none{outline:2px solid transparent;outline-offset:2px;}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.hover\\:ml-2:hover{margin-left:0.5rem;}.hover\\:border-b-2:hover{border-bottom-width:2px;}.hover\\:bg-slate-800:hover{--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity));}',""]),o.locals={},e.exports=o},247:function(e,n,t){var content=t(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(41).default)("21a05c4c",content,!0,{sourceMap:!1})},248:function(e,n,t){var o=t(40)((function(i){return i[1]}));o.push([e.i,'*{font-family:"Basic",sans-serif}img{pointer-events:none}',""]),o.locals={},e.exports=o},249:function(e,n,t){var content=t(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(41).default)("4ab6637e",content,!0,{sourceMap:!1})},250:function(e,n,t){var o=t(40)((function(i){return i[1]}));o.push([e.i,".nuxt-content h1{color:brown;font-size:60px}",""]),o.locals={},e.exports=o},253:function(e,n,t){"use strict";t(176)},254:function(e,n,t){var o=t(40)((function(i){return i[1]}));o.push([e.i,"a.nuxt-link-exact-active[data-v-401f4f36]{border-bottom:2px solid #fff}.logo[data-v-401f4f36]{cursor:pointer}",""]),o.locals={},e.exports=o},39:function(e,n,t){"use strict";var o={layout:"error"},r=t(22),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("ERROR")]),e._v(" "),t("NuxtLink",{attrs:{to:"/"}},[e._v("\n    HOME\n  ")])],1)}),[],!1,null,null,null);n.a=component.exports}},[[197,17,1,18]]]);