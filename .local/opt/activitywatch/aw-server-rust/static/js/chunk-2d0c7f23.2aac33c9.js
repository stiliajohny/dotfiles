(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7f23"],{"537f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.editorBuckets.length<=0?a("div",[a("h6",[t._v("No editor buckets available")]),a("small",[t._v("Make sure you have an editor watcher installed to use this feature")])]):t._e(),t.editorBuckets.length?a("div",[a("h6",[t._v("Active editor time: "+t._s(t._f("friendlyduration")(t.$store.state.activity_daily.editor_duration)))]),a("div",{staticClass:"row",staticStyle:{"padding-top":"0.5em"}},[a("div",{staticClass:"col-md-4"},[a("h5",[t._v("Top file activity")]),a("aw-summary",{attrs:{fields:t.$store.state.activity_daily.top_editor_files,namefunc:t.top_editor_files_namefunc,colorfunc:t.top_editor_files_colorfunc,with_limit:""}})],1),a("div",{staticClass:"col-md-4"},[a("h5",[t._v("Top language activity")]),a("aw-summary",{attrs:{fields:t.$store.state.activity_daily.top_editor_languages,namefunc:t.top_editor_languages_namefunc,colorfunc:t.top_editor_languages_colorfunc,with_limit:""}})],1),a("div",{staticClass:"col-md-4"},[a("h5",[t._v("Top project activity")]),a("aw-summary",{attrs:{fields:t.$store.state.activity_daily.top_editor_projects,namefunc:t.top_editor_projects_namefunc,colorfunc:t.top_editor_projects_colorfunc,with_limit:""}})],1)])]):t._e(),a("br")])},o=[],r=a("c1df"),n=a.n(r),c={name:"Activity",props:{periodLength:{type:String,default:"day"}},data:()=>{return{top_editor_files_namefunc:t=>{let e=t.data.file||"";return e=e.split("/"),e=e[e.length-1],e},top_editor_files_colorfunc:t=>t.data.language,top_editor_languages_namefunc:t=>t.data.language,top_editor_languages_colorfunc:t=>t.data.language,top_editor_projects_namefunc:t=>{let e=t.data.project||"";return e=e.split("/"),e=e[e.length-1],e},top_editor_projects_colorfunc:t=>t.data.project}},computed:{editorBuckets:function(){return this.$store.state.activity_daily.editor_buckets_available},dateEnd:function(){return n()(this.date).add(1,"days").format()},dateShort:function(){return n()(this.date).format("YYYY-MM-DD")}}},s=c,d=a("2877"),l=Object(d["a"])(s,i,o,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c7f23.2aac33c9.js.map