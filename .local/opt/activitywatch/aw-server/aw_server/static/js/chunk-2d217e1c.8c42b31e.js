(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217e1c"],{c92b:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(t._s(t.id))]),n("table",[n("tr",[n("td",[t._v("Type:")]),n("td",[t._v(t._s(t.bucket.type))])]),n("tr",[n("td",[t._v("Client:")]),n("td",[t._v(t._s(t.bucket.client))])]),n("tr",[n("td",[t._v("Hostname:")]),n("td",[t._v(t._s(t.bucket.hostname))])]),n("tr",[n("td",[t._v("Created:")]),n("td",[t._v(t._s(t._f("iso8601")(t.bucket.created)))])]),n("tr",[n("td",[t._v("Eventcount:")]),n("td",[t._v(t._s(t.eventcount))])])]),n("input-timeinterval",{model:{value:t.daterange,callback:function(e){t.daterange=e},expression:"daterange"}}),n("vis-timeline",{attrs:{buckets:[t.bucket_with_events],showRowLabels:"false"}}),n("aw-eventlist",{attrs:{bucket_id:t.id,events:t.events},on:{save:t.updateEvent}})],1)},i=[],a=n("c1df"),c=n.n(a),u={name:"Bucket",props:{id:String},data:()=>{return{bucket_with_events:{events:[]},events:[],eventcount:"?",daterange:[c()().subtract(1,"hour"),c()()]}},computed:{bucket(){return this.$store.getters["buckets/getBucket"](this.id)||{}}},watch:{daterange:async function(){await this.getEvents(this.id)}},mounted:async function(){await this.$store.dispatch("buckets/ensureBuckets"),await this.getEvents(this.id),await this.getEventCount(this.id)},methods:{getEvents:async function(t){this.bucket_with_events=await this.$store.dispatch("buckets/getBucketWithEvents",{id:t,start:this.daterange[0].format(),end:this.daterange[1].format()}),this.events=this.bucket_with_events.events},getEventCount:async function(t){this.eventcount=(await this.$aw.countEvents(t)).data},updateEvent:function(t){const e=this.events.findIndex(e=>e.id==t.id);-1!=e?this.$set(this.events,e,t):console.error(":(")}}},d=u,r=n("2877"),v=Object(r["a"])(d,s,i,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d217e1c.8c42b31e.js.map