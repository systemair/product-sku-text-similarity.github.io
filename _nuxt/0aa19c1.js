(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{642:function(e,t,r){"use strict";r(15),r(19),r(28),r(29);var n=r(3),o=(r(39),r(17),r(43),r(74),r(251),r(24),r(50),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(55),r(45),r(20),r(94),r(397),r(1)),c=r(101),l=r(2);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],h=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),y=v.reduce((function(e,t){return e["offset"+Object(l.E)(t)]={type:[String,Number],default:null},e}),{}),m=v.reduce((function(e,t){return e["order"+Object(l.E)(t)]={type:[String,Number],default:null},e}),{}),S={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(m)};function O(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var j=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var d in r)l+=String(r[d]);var f=j.get(l);return f||function(){var e,t;for(t in f=[],S)S[t].forEach((function(e){var n=r[e],o=O(t,e,n);o&&f.push(o)}));var o=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),j.set(l,f)}(),e(r.tag,Object(c.a)(data,{class:f}),o)}})},643:function(e,t,r){"use strict";r(15),r(19),r(28),r(29);var n=r(3),o=(r(45),r(69),r(35),r(17),r(43),r(74),r(251),r(24),r(50),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(55),r(20),r(397),r(1)),c=r(101),l=r(2);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(e,t){return v.reduce((function(r,n){return r[e+Object(l.E)(n)]=t(),r}),{})}var m=function(e){return[].concat(h,["baseline","stretch"]).includes(e)},S=y("align",(function(){return{type:String,default:null,validator:m}})),O=function(e){return[].concat(h,["space-between","space-around"]).includes(e)},j=y("justify",(function(){return{type:String,default:null,validator:O}})),k=function(e){return[].concat(h,["space-between","space-around","stretch"]).includes(e)},P=y("alignContent",(function(){return{type:String,default:null,validator:k}})),w={align:Object.keys(S),justify:Object.keys(j),alignContent:Object.keys(P)},x={align:"align",justify:"justify",alignContent:"align-content"};function D(e,t,r){var n=x[e];if(null!=r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var R=new Map;t.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},S),{},{justify:{type:String,default:null,validator:O}},j),{},{alignContent:{type:String,default:null,validator:k}},P),render:function(e,t){var r=t.props,data=t.data,o=t.children,l="";for(var d in r)l+=String(r[d]);var f=R.get(l);return f||function(){var e,t;for(t in f=[],w)w[t].forEach((function(e){var n=r[e],o=D(t,e,n);o&&f.push(o)}));f.push((e={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(e,"align-".concat(r.align),r.align),Object(n.a)(e,"justify-".concat(r.justify),r.justify),Object(n.a)(e,"align-content-".concat(r.alignContent),r.alignContent),e)),R.set(l,f)}(),e(r.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},723:function(e,t,r){"use strict";r.r(t);r(15),r(28),r(20),r(29),r(56),r(42),r(66),r(75);var n=r(3),o=r(5),c=(r(70),r(251),r(24),r(50),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(55),r(43),r(74),r(62),r(35),r(403),r(104),r(71),r(19),r(45),r(69),r(53),r(17),r(103)),l=r(115);function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={data:function(){return{RequiredProductKeys:["ID","NAME","TEXT"],RequiredSkuKeys:["ID","PID","NAME","TEXT"],LocalCategories:[],LocalProducts:[],LocalSkus:[],RemoteProducts:[],RemoteSkus:[],InvalidCategories:new Map,InvalidProducts:new Map,InvalidSkus:new Map,Report:new Array,Cache:{},Stepper:void 0,CurrentStep:0,Progress:void 0,Steps:[{name:"Fetching remote data...",steps:void 0},{name:"Validating import data...",steps:this.ValidateData()},{name:"Cleaning import data...",steps:this.CleanData()},{name:"Excluding already exising data...",steps:this.IgnoreAlreadyExistingData()},{name:"Done.",steps:void 0}]}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.SetState(l.b.VALIDATING),e.CurrentStep=0,t.next=4,e.GetCategories();case 4:return e.LocalCategories=t.sent,t.next=7,e.GetProducts();case 7:return e.LocalProducts=t.sent,t.next=10,e.GetSkus();case 10:return e.LocalSkus=t.sent,t.next=13,e.ReadProducts();case 13:return e.RemoteProducts=t.sent,t.next=16,e.ReadSkus();case 16:e.RemoteSkus=t.sent,e.CurrentStep=1,e.StartValidate();case 19:case"end":return t.stop()}}),t)})))()},computed:h(h({},Object(c.d)("import",["State"])),Object(c.d)("explorer",["Brand","Locale","Country"])),methods:h(h(h(h({},Object(c.e)("import",["SetState","SetCategories","SetProducts","SetSkus","SetReports"])),Object(c.c)("import",["GetCategories","GetProducts","GetSkus"])),Object(c.c)("explorer",["ReadProducts","ReadSkus"])),{},{Back:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$router.go(-1);case 2:case"end":return t.stop()}}),t)})))()},CancelImport:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return clearInterval(e.Stepper),e.Stepper=void 0,e.SetState(l.b.CANCELLED),t.next=5,e.$router.replace({path:"/"});case 5:case"end":return t.stop()}}),t)})))()},StartValidate:function(){var e=this;this.Stepper=setInterval(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.Tick();case 2:case"end":return t.stop()}}),t)}))),0)},FinalizeValidate:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,f,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=d(e.LocalProducts);try{for(r.s();!(n=r.n()).done;)o=n.value,e.Report.push({type:"product",issue:"Product '".concat(o.NAME,"' (ID: ").concat(o.ID,") will be imported.")})}catch(e){r.e(e)}finally{r.f()}c=d(e.LocalSkus);try{for(c.s();!(f=c.n()).done;)v=f.value,e.Report.push({type:"sku",issue:"Sku '".concat(v.NAME,"' (ID: ").concat(v.ID,") will be imported.")})}catch(e){c.e(e)}finally{c.f()}return e.SetProducts(e.LocalProducts),e.SetSkus(e.LocalSkus),e.SetReports(e.Report),e.SetState(l.b.VALIDATED),t.next=10,e.$router.replace({path:"/import/process"});case 10:case"end":return t.stop()}}),t)})))()},Tick:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.Steps[e.CurrentStep].steps){t.next=6;break}(r=e.Steps[e.CurrentStep].steps.next()).done?e.CurrentStep++:e.Progress=r.value.progress,t.next=10;break;case 6:return clearInterval(e.Stepper),e.Stepper=void 0,t.next=10,e.FinalizeValidate();case 10:case"end":return t.stop()}}),t)})))()},ValidateData:regeneratorRuntime.mark((function e(){var t,r,n,o,i,c,l,d,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(500,t=this.LocalProducts.length+this.LocalSkus.length,r=0,n=function(){return r%500==0},o=function(){return{done:r++,todo:t,perc:(r/Math.max(1,t)*100).toFixed(2)}},!this.LocalProducts){e.next=17;break}i=0;case 7:if(!(i<this.LocalProducts.length)){e.next=17;break}if(c=this.LocalProducts[i],this.HasRequiredKeys(c,this.RequiredProductKeys)?this.HasDuplicates(c,this.LocalProducts)&&(this.Report.push({type:"product",issue:"Product '".concat(c.NAME,"' (ID: ").concat(c.ID,") is a duplicate.")}),this.InvalidProducts.set(i,c)):(this.Report.push({type:"product",issue:"At least one of the required keys (".concat(this.RequiredProductKeys.join(", "),") is missing.")}),this.InvalidProducts.set(i,c)),l=o(),!n()){e.next=14;break}return e.next=14,{progress:l};case 14:i++,e.next=7;break;case 17:if(!this.LocalSkus){e.next=29;break}d=0;case 19:if(!(d<this.LocalSkus.length)){e.next=29;break}if(f=this.LocalSkus[d],this.HasRequiredKeys(f,this.RequiredSkuKeys)||(this.Report.push({type:"sku",issue:"At least one of the required keys (".concat(this.RequiredSkuKeys.join(", "),") is missing.")}),this.InvalidSkus.set(d,f)),v=o(),!n()){e.next=26;break}return e.next=26,{progress:v};case 26:d++,e.next=19;break;case 29:case"end":return e.stop()}}),e,this)})),CleanData:regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Array.from(this.InvalidProducts.keys()),this.LocalProducts=this.LocalProducts.filter((function(e,r){return!t.includes(r)})),r=Array.from(this.InvalidSkus.keys()),this.LocalSkus=this.LocalSkus.filter((function(e,t){return!r.includes(t)}));case 4:case"end":return e.stop()}}),e,this)})),IgnoreAlreadyExistingData:regeneratorRuntime.mark((function e(){var t,i,r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=this.RemoteProducts.map((function(e){return e.ID})),i=0;i<this.LocalProducts.length;i++)r=this.LocalProducts[i],t.includes(r.ID)&&this.Report.push({type:"product",issue:"Product '".concat(r.NAME,"' (ID: ").concat(r.ID,") has already been imported and will be skipped.")});for(this.LocalProducts=this.LocalProducts.filter((function(e){return!t.includes(e.ID)})),n=this.RemoteSkus.map((function(e){return e.ID})),o=0;o<this.LocalSkus.length;o++)c=this.LocalSkus[o],n.includes(c.ID)&&this.Report.push({type:"skus",issue:"Sku '".concat(c.NAME,"' (ID: ").concat(c.ID,") has already been imported and will be skipped.")});this.LocalSkus=this.LocalSkus.filter((function(e){return!n.includes(e.ID)}));case 6:case"end":return e.stop()}}),e,this)})),HasRequiredKeys:function(e,t){if(!e)return!1;var r=Object.keys(e);return!t.some((function(e){return!r.includes(e)}))},HasDuplicates:function(e,t){var r=this.Cache[e.ID]||t.filter((function(t){return t.ID==e.ID}));return this.Cache[e.ID]=r,r[0]!==e}})},m=r(93),S=r(102),O=r.n(S),j=r(246),k=r(244),P=r(82),w=r(642),x=r(245),D=r(643),R=r(623),C=r(602),component=Object(m.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("Import Data - Validation")]),e._v(" "),r("v-card-subtitle",[r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Brand",readonly:""},model:{value:e.Brand,callback:function(t){e.Brand=t},expression:"Brand"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{label:"Locale",readonly:""},model:{value:e.Locale,callback:function(t){e.Locale=t},expression:"Locale"}})],1),e._v(" "),r("v-col",[r("v-text-field",{attrs:{label:"Country",readonly:""},model:{value:e.Country,callback:function(t){e.Country=t},expression:"Country"}})],1),e._v(" "),r("v-col",[r("v-row",[r("v-col"),r("v-col")],1)],1)],1)],1),e._v(" "),r("v-card-text",[e.Progress?r("div",[r("v-progress-linear",{attrs:{value:e.Progress.perc,height:"20"}},[r("strong",[e._v(e._s(e.Progress.perc)+"%")])])],1):r("div",[r("v-progress-linear",{attrs:{indeterminate:"",height:"20"}})],1),e._v(" "),r("span",[e._v(e._s(e.Steps[e.CurrentStep].name))])]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{text:""},on:{click:e.CancelImport}},[e._v("Cancel")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VBtn:j.a,VCard:k.a,VCardActions:P.a,VCardSubtitle:P.b,VCardText:P.c,VCardTitle:P.d,VCol:w.a,VProgressLinear:x.a,VRow:D.a,VSpacer:R.a,VTextField:C.a})}}]);