(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85351898"],{"243f":function(t,e,n){var i=n("48a0");function a(t,e,n,a){return i(t,(function(t,i,s){e(a,t,n(t),s)})),a}t.exports=a},2643:function(t,e,n){"use strict";var i=n("2f7b"),a=n.n(i);a.a},"2f7b":function(t,e,n){},"50c6":function(t,e,n){var i=n("a0c4"),a=n("243f"),s=n("badf"),r=n("6747");function d(t,e){return function(n,d){var c=r(n)?i:a,o=e?e():{};return c(n,t,s(d,2),o)}}t.exports=d},"641e":function(t,e,n){"use strict";var i=n("0874");i["default"].register({edit:{width:576,height:512,paths:[{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8l-218.4 218.4-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8 218.4-218.4c3.8-3.8 10-3.8 13.8 0zM564.6 60.3c15.2 15.2 15.2 39.9 0 55.2l-35.4 35.4c-3.8 3.8-10 3.8-13.8 0l-90.2-90.2c-3.8-3.8-3.8-10 0-13.8l35.4-35.4c15.3-15.2 40-15.2 55.2 0zM384 346.2c0-3.2 1.3-6.2 3.5-8.5l40-40c7.6-7.5 20.5-2.2 20.5 8.5v157.8c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h285.8c10.7 0 16.1 12.9 8.5 20.5l-40 40c-2.3 2.2-5.3 3.5-8.5 3.5h-229.8v320h320v-101.8z"}]}})},"6edf":function(t,e,n){var i=n("872a"),a=n("50c6"),s=Object.prototype,r=s.hasOwnProperty,d=a((function(t,e,n){r.call(t,n)?t[n].push(e):i(t,n,[e])}));t.exports=d},8451:function(t,e,n){"use strict";var i=n("b9e0"),a=n.n(i);a.a},a0c4:function(t,e){function n(t,e,n,i){var a=-1,s=null==t?0:t.length;while(++a<s){var r=t[a];e(i,r,n(r),t)}return i}t.exports=n},a56d:function(t,e,n){"use strict";var i=n("0874");i["default"].register({trash:{width:448,height:512,paths:[{d:"M432 32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h120l9.4-18.7c3.6-7.3 13.1-13.3 21.3-13.3h0.1 114.3 0c8.2 0 17.8 6 21.5 13.3l9.4 18.7h120zM53.2 467l-21.2-339h384l-21.2 339c-1.6 24.8-23 45-47.9 45h-245.8c-24.9 0-46.3-20.2-47.9-45z"}]}})},b728:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticStyle:{width:"100%"}},[n("tr",[n("th",[t._v("Bucket")]),n("td",[t._v(t._s(t.bucket_id))])]),n("tr",[n("th",[t._v("ID")]),n("td",[t._v(t._s(t.event.id))])]),n("tr",[n("th",[t._v("Start")]),n("datetime",{attrs:{type:"datetime"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}})],1),n("tr",[n("th",[t._v("End")]),n("datetime",{attrs:{type:"datetime"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}})],1),n("tr",[n("th",[t._v("Duration")]),n("td",[t._v(t._s(t._f("friendlyduration")(t.editedEvent.duration)))])])]),n("hr"),n("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.event.data,(function(e,i){return n("tr",[n("td",[n("b-input",{attrs:{disabled:"",value:i,size:"sm"}})],1),n("td",[typeof t.event.data[i]===typeof!0?n("b-checkbox",{staticStyle:{margin:"0.25em"},model:{value:t.editedEvent.data[i],callback:function(e){t.$set(t.editedEvent.data,i,e)},expression:"editedEvent.data[k]"}}):t._e(),"string"===typeof t.event.data[i]?n("b-input",{attrs:{size:"sm"},model:{value:t.editedEvent.data[i],callback:function(e){t.$set(t.editedEvent.data,i,e)},expression:"editedEvent.data[k]"}}):t._e()],1)])}))],2),n("hr"),n("div",{staticClass:"float-right"},[n("b-button",{staticClass:"mx-1",on:{click:function(e){return t.$emit("close")}}},[t._v("Cancel")]),n("b-button",{staticClass:"mx-1",attrs:{variant:"primary"},on:{click:function(e){t.save(),t.$emit("close")}}},[t._v("Save")])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Key")]),n("th",[t._v("Value")])])}],s=n("c1df"),r=n.n(s),d={name:"EventEditor",props:{event:Object,bucket_id:String},data(){return{editedEvent:JSON.parse(JSON.stringify(this.event))}},computed:{start:{get:function(){return r()(this.editedEvent.timestamp).format()},set:function(t){this.editedEvent.duration=r()(this.end).diff(t,"seconds"),this.editedEvent.timestamp=new Date(t)}},end:{get:function(){const t=r()(this.editedEvent.timestamp).add(this.editedEvent.duration,"seconds");return t.format()},set:function(t){this.editedEvent.duration=r()(t).diff(this.editedEvent.timestamp,"seconds")}}},methods:{async save(){this.$emit("save",this.editedEvent),await this.$aw.replaceEvent(this.bucket_id,this.editedEvent)}}},c=d,o=n("2877"),l=Object(o["a"])(c,i,a,!1,null,null,null);e["a"]=l.exports},b9e0:function(t,e,n){},eb8a:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Stopwatch")]),n("p",[t._v("Using bucket: "+t._s(t.bucket_id))]),n("b-alert",{attrs:{show:""}},[t._v("This is an early experiment, an important missing feature is the ability to set start/end times manually.")]),n("b-input-group",{attrs:{size:"lg"}},[n("b-input",{attrs:{placeholder:"What are you working on?"},model:{value:t.label,callback:function(e){t.label=e},expression:"label"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.startTimer(t.label)}}},[n("icon",{attrs:{name:"play"}}),t._v("Start")],1)],1)],1),n("hr"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[t.runningTimers.length>0?n("div",[n("h3",[t._v("Running")]),t._l(t.runningTimers,(function(e){return n("div",[n("stopwatch-entry",{attrs:{event:e,bucket_id:t.bucket_id,now:t.now},on:{delete:t.deleteTimer,update:t.updateTimer}}),n("hr",{staticStyle:{margin:"0"}})],1)}))],2):n("div",[n("span",{staticStyle:{color:"#555"}},[t._v("No stopwatch running")]),n("hr")]),t.stoppedTimers.length>0?n("div",[n("h3",{staticClass:"mt-4 mb-4"},[t._v("History")]),t._l(Object.keys(t.timersByDate).sort().reverse(),(function(e){return n("div",[n("h5",{staticClass:"mt-2 mb-1"},[t._v(t._s(e))]),t._l(t.timersByDate[e],(function(e){return n("div",[n("stopwatch-entry",{attrs:{event:e,bucket_id:t.bucket_id,now:t.now},on:{delete:t.deleteTimer,update:t.updateTimer,new:function(n){return t.startTimer(e.data.label)}}}),n("hr",{staticStyle:{margin:"0"}})],1)}))],2)}))],2):n("div",[n("span",{staticStyle:{color:"#555"}},[t._v("No history to show")]),n("hr")])])])],1)},a=[],s=n("6edf"),r=n.n(s),d=n("9380"),c=n.n(d),o=n("c1df"),l=n.n(o),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row px-3 py-2",attrs:{id:"root"}},[n("div",{staticClass:"flex-fill"},[n("span",[n("b",[t._v(t._s(t.event.data.label||"No label"))])]),n("span",{staticStyle:{color:"#888"}},[t._v(" | ")]),t.event.data.running?n("span",[t._v("Running for "),n("span",{attrs:{title:t.event.timestamp}},[t._v(t._s(t._f("friendlyduration")(t.event.data.running?(t.now-t.event.timestamp)/1e3:t.event.duration)))]),t._v(" (Started "+t._s(t._f("shorttime")(t.event.timestamp))+")")]):n("span",[t._v("Started "),n("span",{attrs:{title:t.event.timestamp}},[t._v(t._s(t._f("friendlytime")(t.event.timestamp)))]),t._v(" ("+t._s(t._f("friendlyduration")(t.event.data.running?(t.now-t.event.timestamp)/1e3:t.event.duration))+")")])]),n("div",[t.event.data.running?n("b-button",{staticClass:"mx-1",attrs:{variant:"outline-primary",size:"sm"},on:{click:t.stop}},[n("icon",{staticClass:"ml-0 mr-1",attrs:{name:"stop"}}),t._v("Stop")],1):t._e(),t.event.data.running?t._e():n("b-button",{staticClass:"mx-1",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(e){return t.$emit("new")}}},[n("icon",{staticClass:"ml-0 mr-1",attrs:{name:"play"}}),t._v("Start new")],1),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"edit-modal-"+t.event.id,expression:"'edit-modal-' + event.id"}],staticClass:"mx-1",attrs:{variant:"outline-dark",size:"sm"}},[n("icon",{staticClass:"ml-0 mr-1",attrs:{name:"edit"}}),t._v("Edit")],1),n("b-button",{staticClass:"mx-1",attrs:{variant:"outline-danger",size:"sm"},on:{click:t.delete_}},[n("icon",{staticClass:"mx-0",attrs:{name:"trash"}})],1)],1)]),n("b-modal",{ref:"eventEditModal",attrs:{id:"edit-modal-"+t.event.id,title:"Edit event",centered:"","hide-footer":""}},[n("event-editor",{attrs:{event:t.event,bucket_id:t.bucket_id},on:{save:t.save,close:function(e){return t.$refs.eventEditModal.hide()}}})],1)],1)},v=[],m=(n("641e"),n("0874"));m["default"].register({stop:{width:448,height:512,paths:[{d:"M400 32c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48v-352c0-26.5 21.5-48 48-48h352z"}]}}),m["default"].register({play:{width:448,height:512,paths:[{d:"M424.4 214.7c31.5 18.5 31.4 64.1 0 82.6l-352 208c-31.7 18.8-72.4-3.8-72.4-41.3v-416.1c0-41.8 43.8-58.2 72.4-41.3z"}]}});n("a56d");var h=n("b728"),p={name:"StopwatchEntry",components:{"event-editor":h["a"]},props:{event:Object,bucket_id:String,now:{type:l.a,default:l()()}},methods:{stop:async function(){let t=JSON.parse(JSON.stringify(this.event));t.data.running=!1,t.duration=(l()()-l()(t.timestamp))/1e3,t=await this.$aw.replaceEvent(this.bucket_id,t),this.$emit("update",t)},save:async function(t){this.$emit("update",t)},delete_:async function(){this.$emit("delete",this.event)}}},f=p,_=(n("2643"),n("2877")),b=Object(_["a"])(f,u,v,!1,null,"55940afe",null),w=b.exports,y={name:"Stopwatch",components:{"stopwatch-entry":w},data:()=>{return{bucket_id:"aw-stopwatch",events:[],label:"",now:l()()}},computed:{runningTimers(){return c()(this.events,t=>t.data.running)},stoppedTimers(){return c()(this.events,t=>!t.data.running)},timersByDate(){return r()(this.stoppedTimers,t=>l()(t.timestamp).format("YYYY-MM-DD"))}},mounted:function(){this.$aw.ensureBucket(this.bucket_id,"general.stopwatch","unknown"),this.getEvents(),setInterval(()=>this.now=l()(),1e3)},methods:{startTimer:async function(t){const e=await this.$aw.insertEvent(this.bucket_id,{timestamp:new Date,data:{running:!0,label:t}});this.events.unshift(e)},updateTimer:async function(t){const e=this.events.findIndex(e=>e.id==t.id);-1!=e?this.$set(this.events,e,t):console.error(":(")},deleteTimer:async function(t){await this.$aw.deleteEvent(this.bucket_id,t.id),this.events=c()(this.events,e=>e.id!=t.id)},getEvents:async function(){this.events=await this.$aw.getEvents(this.bucket_id,{limit:100})}}},g=y,k=(n("8451"),Object(_["a"])(g,i,a,!1,null,"5ae1ed59",null));e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-85351898.48020a37.js.map