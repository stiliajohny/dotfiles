(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-481c03fc"],{"0c57":function(t,e,n){"use strict";var a=n("20aa"),o=n.n(a);o.a},"20aa":function(t,e,n){},"90a0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg")},o=[],r=n("9031");const i=n("5698"),s=n("6929"),c=n("2ef0"),l=n("c1df"),f=n("5acd");function u(t){t.innerHTML="",i.select(t).attr("viewBox","0 0 100 4").attr("width","100%")}function p(t,e){const n=i.select(t);n.selectAll("*").remove(),n.append("text").attr("x","0").attr("y","3").text(e).attr("font-family","sans-serif").attr("font-size","2").attr("fill","black")}function d(t,e,n){const a=i.select(t);if(a.selectAll("*").remove(),e.length<=0)return void p(t,"No data");e=c.clone(e),c.reverse(e);const o=c.first(e),u=c.last(e),d=l(o.timestamp),m=l(u.timestamp),v=(m-d)/1e3+u.duration;return console.log("First: "+d.format()),console.log("Last: "+m.format()),console.log("Duration: "+v),c.each(e,(function(t,e){const o="timeline_event_"+e,i=l(t.timestamp),c=Object(r["getColorFromString"])(Object(r["getTitleAttr"])({type:n},t)),u=s(c).darken(.4).hex(),p=(i-d)/1e3/v,m=100*t.duration/v,h=a.append("g").attr("id",o).attr("transform","translate("+100*p+",0)"),g=h.append("rect").attr("width",m).attr("height",4).style("fill",c).on("mouseover",(function(t,e,n){const a=n[e];a.style.fill=u})).on("mouseout",(function(t,e,n){const a=n[e];a.style.fill=c}));g.append("title").text(i.format()+"\nDuration: "+f.seconds_to_duration(t.duration)+"\n"+JSON.stringify(t.data)),t.duration>.05*v&&h.append("text").attr("font-size",2).attr("x",1).attr("y",2.5).attr("pointer-events","none").text(Object(r["getTitleAttr"])({type:n},t))})),t}var m={create:u,update:d},v={name:"aw-timeline",props:{type:String,event_type:String,events:Array},watch:{events:function(){m.update(this.$el,this.events,this.event_type)}},mounted:function(){m.create(this.$el)}},h=v,g=(n("0c57"),n("2877")),y=Object(g["a"])(h,a,o,!1,null,"6f7b3f34",null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-481c03fc.84eddfd5.js.map