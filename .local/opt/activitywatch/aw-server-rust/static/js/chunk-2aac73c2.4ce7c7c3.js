(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2aac73c2"],{"6bd8":function(t,e,n){var a=n("badf"),s=n("ecf6");function i(t,e){return t&&t.length?s(t,a(e,2)):0}t.exports=i},ecf6:function(t,e){function n(t,e){var n,a=-1,s=t.length;while(++a<s){var i=e(t[a]);void 0!==i&&(n=void 0===n?i:n+i)}return n}t.exports=n},f67a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Timeline")]),n("input-timeinterval",{attrs:{duration:t.timeintervalDefaultDuration},model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:null!==t.buckets,expression:"buckets !== null"}]},[n("div",[n("div",{staticStyle:{float:"left"}},[t._v("Events shown: "+t._s(t.num_events))]),n("div",{staticStyle:{float:"right",color:"#999"}},[t._v("Drag to pan and scroll to zoom.")])]),n("div",{staticStyle:{clear:"both"}}),n("vis-timeline",{attrs:{buckets:t.buckets,showRowLabels:"",queriedInterval:t.daterange}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!(null!==t.buckets&&t.num_events),expression:"!(buckets !== null && num_events)"}]},[n("h1",[t._v("Loading...")])])],1)},s=[],i=n("6bd8"),u=n.n(i),r=n("c1df"),o=n.n(r),l={name:"Timeline",data:()=>{return{buckets:null,daterange:[o()().subtract(1,"hour"),o()()],timeintervalDefaultDuration:localStorage.durationDefault}},computed:{num_events(){return u()(this.buckets,"events.length")}},watch:{daterange(){this.getBuckets()}},mounted:function(){this.getBuckets()},methods:{getBuckets:async function(){this.buckets=await this.$store.dispatch("buckets/getBucketsWithEvents",{start:this.daterange[0].format(),end:this.daterange[1].format()})}}},c=l,d=n("2877"),v=Object(d["a"])(c,a,s,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2aac73c2.4ce7c7c3.js.map