(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64b133d7"],{"28d4":function(t,e,n){},"840d":function(t,e,n){"use strict";var a=n("28d4"),i=n.n(a);i.a},ab82:function(t,e,n){"use strict";var a=n("0874");a["default"].register({"angle-double-down":{width:320,height:512,paths:[{d:"M143 256.3l-136-136c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.8 22.5c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 0.1zM177 448.3c-9.4 9.4-24.6 9.4-34-0.1l-136-136c-9.4-9.3-9.4-24.5 0-33.9l22.7-22.6c9.3-9.4 24.5-9.4 33.9 0l96.4 96.4 96.5-96.3c9.3-9.4 24.5-9.4 33.9 0l22.6 22.6c9.4 9.3 9.4 24.5 0 33.9z"}]}})},b7f1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"aw-summary-container"}),t.fields&&t.fields.length>0&&t.with_limit&&t.fields.length>t.limit_?n("b-button",{staticClass:"mt-1",attrs:{size:"sm",variant:"outline-secondary"},on:{click:function(e){t.limit_+=5}}},[n("icon",{attrs:{name:"angle-double-down"}}),t._v("Show more")],1):t._e()],1)},i=[],r=n("9031"),s=n("5acd");const o=n("5698"),c=n("6929"),l=n("2ef0");function u(t){t.innerHTML="";const e=o.select(t).append("svg");e.attr("width","100%").attr("height","100px").attr("class","appsummary")}function d(t,e){const n=t.querySelector(".appsummary"),a=o.select(n);n.innerHTML="",a.append("text").attr("x","0px").attr("y","25px").text(e).attr("font-family","sans-serif").attr("font-size","25px").attr("fill","black")}function f(t,e,n,a){const i=l.map(e,t=>{return{name:n(t),duration:t.duration,colorKey:a(t)}});m(t,i)}function m(t,e){if(e.length<=0)return d(t,"No data"),t;const n=t.querySelector(".appsummary");n.innerHTML="";const a=o.select(n);e=e.filter((function(t){return void 0!==t.duration}));let i=0;const u=e[0].duration;return l.each(e,(function(t,e){const n=t.duration/u*100+"%",o=50,l=15,d=Object(r["getColorFromString"])(t.colorKey||t.name),f=c(d).lighten(.1).hex(),m=c(d).darken(.1).hex(),p=a.append("g");p.attr("id","summary_app_"+e).on("mouseover",(function(){p.select("rect").style("fill",m)})).on("mouseout",(function(){p.select("rect").style("fill",f)})),p.append("title").text(t.name+"\n"+Object(s["seconds_to_duration"])(t.duration)),p.append("rect").attr("x",0).attr("y",i).attr("rx",5).attr("ry",5).attr("width",n).attr("height",o).style("fill",f),p.append("text").attr("x",5).attr("y",i+5+l).text(t.name).attr("font-family","sans-serif").attr("font-size",l+"px").attr("fill","black"),p.append("text").attr("x",5).attr("y",i+5+l+5+l).text(Object(s["seconds_to_duration"])(t.duration)).attr("font-family","sans-serif").attr("font-size",l+"px").attr("fill","black"),i+=o+5})),i-=5,a.attr("height",i),t}var p={create:u,update:m,updateSummedEvents:f,set_status:d},h=(n("ab82"),{name:"aw-summary",props:{fields:Array,namefunc:Function,colorfunc:Function,limit:{type:Number,default:5},with_limit:{type:Boolean,default:!1}},data:function(){return{limit_:this.limit}},watch:{fields:function(){this.update()},limit_:function(){this.update()}},mounted:function(){const t=this.$el.children[0];p.create(t),this.update()},methods:{update:function(){const t=this.$el.children[0];null!==this.fields?p.updateSummedEvents(t,this.fields.slice(0,this.limit_),this.namefunc,this.colorfunc):p.set_status(t,"Loading...")}}}),y=h,x=(n("840d"),n("2877")),b=Object(x["a"])(y,a,i,!1,null,"36c1fb14",null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-64b133d7.73c335ab.js.map