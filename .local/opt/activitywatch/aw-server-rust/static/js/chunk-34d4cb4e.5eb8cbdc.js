(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34d4cb4e"],{"1c0e":function(t,e,n){},b8eb:function(t,e,n){"use strict";var r=n("1c0e"),a=n.n(r);a.a},ff65:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.category_hierarchy,(function(e){return n("div",{staticStyle:{padding:"0.1em 0 0.1em 0"}},[n("span",{style:"padding-left: "+e.depth+"em"},[e.depth>0?n("span",[t._v("⮡ ")]):t._e(),t._v(t._s(e.subname))]),n("span",{staticStyle:{float:"right"}},[t._v(t._s(t._f("friendlyduration")(e.duration)))])])})),0)},a=[];const i=n("2ef0"),c=n("0a4f");var o={name:"aw-categorytree",props:["events"],computed:{category_hierarchy:function(){const t=JSON.parse(JSON.stringify(this.events)),e=c.build_category_hierarchy(i.map(t,t=>{return{name:t.data["$category"]}}));let n=c.flatten_category_hierarchy(e).map(e=>{return e.duration=i.sumBy(t.filter(t=>{const n=t.data["$category"].slice(0,e.name.length);return i.isEqual(e.name,n)}),t=>t.duration),e});function r(t,e){return i.filter(e,e=>i.isEqual(e.parent,t.name))}function a(t,e){const n=r(t,e);i.map(n,t=>a(t,e)),t.children=i.sortBy(n,t=>-t.duration)}const o=i.sortBy(i.filter(n,t=>0==t.depth),t=>-t.duration);function s(t){return t.children?i.flattenDeep([t,i.map(t.children,t=>s(t))]):[]}return i.map(o,t=>a(t,n)),n=i.flatten(i.map(o,t=>s(t))),n}}},s=o,u=(n("b8eb"),n("2877")),l=Object(u["a"])(s,r,a,!1,null,"0d58b384",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-34d4cb4e.5eb8cbdc.js.map