(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{320:function(e,t,r){var content=r(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("345474d4",content,!0,{sourceMap:!1})},480:function(e,t,r){"use strict";r(320)},481:function(e,t,r){var n=r(24)(!1);n.push([e.i,".logo[data-v-1e99b4b0]{width:100%;min-width:max(20vw,20vh)}.logo-wrapper[data-v-1e99b4b0]{position:absolute;top:0;padding:2em;width:25%}",""]),e.exports=n},482:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this._self._c;this._self._setupProxy;return e("div",{staticClass:"logo-wrapper"},[e("img",{staticClass:"logo",attrs:{src:r(319)}})])}],o=r(1).a.extend({}),c=(r(480),r(19)),component=Object(c.a)(o,(function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)}),n,!1,null,"1e99b4b0",null);t.default=component.exports},519:function(e,t,r){var content=r(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("4dc2e38c",content,!0,{sourceMap:!1})},542:function(e,t,r){"use strict";r(519)},543:function(e,t,r){var n=r(24)(!1);n.push([e.i,".main[data-v-8635cc40]{position:relative;padding-bottom:4em}.team-wrapper[data-v-8635cc40]{position:relative;width:100%;height:auto}.team-wrapper .header .team .content[data-v-8635cc40]{width:100%;padding-top:8em}.team-wrapper .header .team .content h1[data-v-8635cc40]{text-align:center}.team-wrapper .header .team .content .image[data-v-8635cc40]{width:100%;margin-top:1.5em}.team-wrapper .header .team .content .image img[data-v-8635cc40]{width:85%;margin-left:7.5%;border:var(--border-size-2) solid var(--clr-head-primary)}",""]),e.exports=n},577:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"team"},[t("div",{staticClass:"content"},[t("h1",[e._v("MEET OUR TEAM")]),e._v(" "),t("div",{staticClass:"image"},[t("img",{attrs:{src:r(328),alt:""}})])])])}],o=r(111),c=r(11),l=(r(52),r(43),r(15),r(54),r(1).a.extend({asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,c,l,m,d,f,h,v,w,_,y,x,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,n=r("team/21-22/business").sortBy("rank").sortBy("teamName").sortBy("name").where({visible:!0}),c=r("team/21-22/facads").sortBy("rank").sortBy("teamName").sortBy("name").where({visible:!0}),l=r("team/21-22/members").sortBy("rank").sortBy("teamName").sortBy("name").where({visible:!0}),m=r("team/21-22/leaders").sortBy("rank").sortBy("teamName").sortBy("name").where({visible:!0}),t.next=7,l.fetch();case 7:return d=t.sent,t.next=10,n.fetch();case 10:for(f=t.sent.filter((function(e){return!0})),h=d.filter((function(e){return"aerove"===e.teamName.toLowerCase()})),v=d.filter((function(e){return"sedrica"===e.teamName.toLowerCase()})),w=[],_=Math.min(h.length/2,v.length/2,f.length),y=0;y<_;y++)w.push(h[2*y],h[2*y+1]),w.push(f[y]),w.push(v[2*y],v[2*y+1]);return h.length>2*_&&w.push.apply(w,Object(o.a)(h.slice(2*_))),v.length>2*_&&w.push.apply(w,Object(o.a)(v.slice(2*_))),f.length>_&&w.push.apply(w,Object(o.a)(f.slice(_))),x=function(e,t){return 1===t.rank?e+1:e},t.next=22,m.fetch();case 22:return t.t0=t.sent,t.next=25,m.fetch();case 25:return t.t1=t.sent.reduce(x,0),t.t2={title:"Team Leaders",members:t.t0,numHeads:t.t1},t.t3={title:"Team Members",members:w,numHeads:0},t.next=30,c.fetch();case 30:return t.t4=t.sent,t.next=33,c.fetch();case 33:return t.t5=t.sent.reduce(x,0),t.t6={title:"Faculty Advisors",members:t.t4,numHeads:t.t5},C=[t.t2,t.t3,t.t6],t.abrupt("return",{teamInfo:C});case 37:case"end":return t.stop()}}),t)})))()}})),m=(r(542),r(19)),component=Object(m.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"main"},[t("div",{staticClass:"team-wrapper"},[t("div",{staticClass:"header"},[t("UMICLogoTopLeft"),e._v(" "),e._m(0)],1)]),e._v(" "),e._l(e.teamInfo,(function(e,r){return t("div",{key:r},[t("TeamSection",{attrs:{id:r,title:e.title,members:e.members,"num-heads":e.numHeads}})],1)}))],2)}),n,!1,null,"8635cc40",null);t.default=component.exports;installComponents(component,{UMICLogoTopLeft:r(482).default,TeamSection:r(571).default})}}]);