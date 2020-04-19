(this["webpackJsonpcovid19-app"]=this["webpackJsonpcovid19-app"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(72),d=a(73),p=a(83),m=a(82),f=a(223),v=a(228),h=a(224),b=a(225),E=a(32),y=a.n(E),g=a(33),x=a.n(g),C=a(13),_=a.n(C),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,xs:12,md:3,component:v.a,className:x()(_.a.card,_.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0445"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0445 COVID-19."))),r.a.createElement(f.a,{item:!0,xs:12,md:3,component:v.a,className:x()(_.a.card,_.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u043e"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u0432\u0448\u0438\u0445"))),r.a.createElement(f.a,{item:!0,xs:12,md:3,component:v.a,className:x()(_.a.card,_.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"\u0423\u043c\u0435\u0440\u043b\u043e"),r.a.createElement(b.a,{variant:"h5",component:"h2"},r.a.createElement(y.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2",component:"p"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043c\u0435\u0440\u0442\u0435\u0439 \u043e\u0442 COVID-19."))))):"Loading..."},w=a(31),O=a(34),k=a.n(O),S="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(45),U=a(79),V=a.n(U),z=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(w.a)(l,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(I.a,{data:{labels:["\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0445","\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u043e","\u0423\u043c\u0435\u0440\u043b\u043e"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=p.length?r.a.createElement(I.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"confirmed",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:V.a.container},u?f:v)},A=a(227),G=a(226),J=a(80),M=a.n(J),P=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(A.a,{className:M.a.formControl},r.a.createElement(G.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},Q=a(81),q=a.n(Q),L=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:q.a.container},r.a.createElement(j,{data:this.state.data}),r.a.createElement(P,{handleCountryChange:this.handleCountryChange}),r.a.createElement(z,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))},79:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},80:function(e,t,a){},81:function(e,t,a){e.exports={container:"App_container__1MQN3"}},86:function(e,t,a){e.exports=a(206)}},[[86,1,2]]]);
//# sourceMappingURL=main.10b0f727.chunk.js.map