(this.webpackJsonpntulearn=this.webpackJsonpntulearn||[]).push([[0],{145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=(a(77),a(78),a(3)),s=a(67),u=a.n(s),i=function(e){var t=e.userInfo;return console.log("user info",t),r.a.createElement("div",{className:"Navbar fixed"},r.a.createElement("div",{className:"logo-container"},r.a.createElement(o.b,{to:"/home"},r.a.createElement("img",{src:u.a,className:"navbar-image",alt:"NTU logo"}))),r.a.createElement("div",{className:"push"},r.a.createElement(o.b,{to:"/home",className:"NavbarText"},"Home")),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/courses",className:"NavbarText"},"Courses")),r.a.createElement("div",null,t?r.a.createElement(o.b,{to:"/myprofile",className:"NavbarText"},t.username):r.a.createElement(o.b,{to:"/",className:"NavbarText"},"Login")))},m=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Nanyang Technological University ",r.a.createElement("br",null),"50 Nanyang Avenue, Singapore 639798 ",r.a.createElement("br",null),"Tel:(65) 67911744 ",r.a.createElement("br",null)),r.a.createElement("p",null,"Copyright \u2022 Disclaimer \u2022 Data Protection and Privacy",r.a.createElement("br",null),"\xa92020 Nanyang Technological University ",r.a.createElement("br",null)))},p=a(5),d=a(1),E=a(6),f=a.n(E),g=a(14),v=a(15),h=a.n(v),b=a(24),N=a.n(b),S=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),u=s[0],i=s[1],m=Object(d.c)((function(e){return e.userSignin})).userInfo,E=Object(d.b)();Object(n.useEffect)((function(){return m&&e.history.push("/home"),function(){}}),[m]);return r.a.createElement("div",{className:"loginbg"},r.a.createElement("div",{className:"login-card"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(function(e,t){return function(){var a=Object(g.a)(f.a.mark((function a(n){var r,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"USER_SIGNIN_REQUEST",payload:{email:e,password:t}}),a.next=4,h.a.post("/api/users/signin/",{email:e,password:t});case 4:r=a.sent,c=r.data,n({type:"USER_SIGNIN_SUCCESS",payload:c}),N.a.set("userInfo",JSON.stringify(c)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),n({type:"USER_SIGNIN_FAIL",payload:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(c,u)),console.log(c,u)}},r.a.createElement("input",{type:"text",className:"field",placeholder:"Username",onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{type:"password",className:"field",placeholder:"Password",onChange:function(e){return i(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"field field-button",value:" Sign In"}))))},y=a(20),O=a.n(y),C=a(21),I=a.n(C),T=a(18),j=a.n(T),_=function(e){var t=e.course;return r.a.createElement(o.b,{className:"link",to:"/course/"+t.courseID},r.a.createElement("div",{className:"course-card"},r.a.createElement("img",{className:"course-img",src:t.courseImage,alt:t.courseImage}),r.a.createElement("div",{className:"course-card-container"},r.a.createElement("h3",null,t.title),r.a.createElement("p",{className:"text-box"},r.a.createElement("b",null,"By: ",t.courseLecturer)),r.a.createElement("p",{className:"text-box"},t.summary))))},w=function(){return function(){var e=Object(g.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"COURSE_LIST_REQUEST"}),e.next=4,h.a.get("/api/courses");case 4:a=e.sent,n=a.data,t({type:"COURSE_LIST_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"COURSE_LIST_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},U=function(){var e=Object(d.c)((function(e){return e.courseList})),t=e.courses,a=e.loading,c=e.error,l=Object(n.useState)(!1),o=Object(p.a)(l,2),s=o[0],u=o[1],i=Object(n.useState)(""),m=Object(p.a)(i,2),E=m[0],f=m[1],g=Object(d.b)();Object(n.useEffect)((function(){return f('<p>In line with the government\u2019s emphasis on advancing adult education and professional development for Singapore\u2019s workforce to better meet future challenges, NTU\u2019s colleges and schools, institutes and centres offer an extensive range of Continuing Education Training programmes, to equip our alumni and working adults with updated knowledge and relevant skills sets to meet their learning needs and changing job demands.</p><p>At NTU, we recognise the value of SkillsFuture and we are strongly committed towards helping to realise this national push for lifelong learning. Some of the programmes offered by NTU are also eligible for course fee funding. &nbsp;</p><p><strong>Click on the respective schools below to learn more about the programmes:</strong></p><p><a href="http://pace.ntu.edu.sg/"><strong>Centre for Professional and Continuing Education (PaCE@NTU)</strong></a><br>PaCE@NTU develops quality programmes for continuing professional education and development, to equip Singapore professionals, managers and executives (PMEs) with updated knowledge and skills to keep pace with the rapid technological changes in today\u2019s increasingly competitive economy and industrial landscape.<br>&nbsp;</p><p><a href="http://www.nbs.ntu.edu.sg/Programmes/nee/Pages/Home.aspx"><strong>Nanyang Business School (College of Business)</strong></a><br>Nanyang Executive Education (NEE), a division of Nanyang Business School offers cutting-edge executive education programmes to enhance the leadership skills and competencies of executives. Anchored by award-winning faculty and notable industry practitioners, NEE places strong emphasis on practical applications. By combining critical management knowledge with real-world applications, we equip our participants with skills to thrive in today\u2019s increasingly dynamic and interconnected world.</p>'),g(w()),function(){}}),[]);return a?r.a.createElement("div",null,"loading..."):c?r.a.createElement("div",null,c):r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Welcome to NTU Lifelong Learning Centre"),r.a.createElement("p",null,"Lorem Ipsum Dolor sit Amet")),r.a.createElement("div",{className:"flex-super-container"},r.a.createElement("h2",null,"What is NTU Lifelong Learning Centre"),s?r.a.createElement(O.a,{editor:I.a,data:E,onChange:function(e,t){var a=t.getData();f(a),console.log(a)}}):j()(E),r.a.createElement("button",{className:"button",onClick:function(){return u(!s)}},s?"save":"edit"),r.a.createElement("h3",null,"Courses Available"),r.a.createElement("div",{className:"flex-container"},t.map((function(e){return r.a.createElement(_,{course:e,key:e._id})})))))},x=a(30),R=a.n(x),k=function(){var e=Object(d.c)((function(e){return e.userSignin})).userInfo;return r.a.createElement("div",null,r.a.createElement("img",{className:"center",src:R.a,alt:"error"}),JSON.stringify(e))},D=function(){var e=Object(d.c)((function(e){return e.courseList})),t=e.courses,a=e.loading,c=e.error,l=Object(d.b)();return Object(n.useEffect)((function(){return l(w()),function(){}}),[]),a?r.a.createElement("div",null,"loading..."):c?r.a.createElement("div",null,c):r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Wellcome to NTU Lifelong Learning Centre"),r.a.createElement("p",null,"Lorem Ipsum Dolor sit Amet")),r.a.createElement("div",{className:"flex-super-container"},r.a.createElement("h3",null,"My Course"),r.a.createElement("div",{className:"flex-container"},t.map((function(e){return r.a.createElement(_,{course:e,key:e._id})}))),r.a.createElement("h3",null,"Popular Course"),r.a.createElement("div",{className:"flex-container"},t.map((function(e){return r.a.createElement(_,{course:e,key:e._id})})))))},L=function(e){var t=e.params;return r.a.createElement("div",{className:"Navbar course-navbar"},r.a.createElement(o.b,{to:"/course/".concat(t.courseID,"/"),className:"NavbarText"},"Course Description"),r.a.createElement(o.b,{to:"/course/".concat(t.courseID,"/announcement"),className:"NavbarText"},"Announcement"),r.a.createElement(o.b,{to:"/course/".concat(t.courseID,"/content"),className:"NavbarText"},"Contents"),r.a.createElement(o.b,{to:"/course/".concat(t.courseID,"/assignment"),className:"NavbarText"},"My Assignment"))},A=function(){var e=Object(d.c)((function(e){return e.courseDetails})),t=e.course,a=e.loading,c=Object(n.useState)(!1),l=Object(p.a)(c,2),o=l[0],s=l[1],u=Object(n.useState)(""),i=Object(p.a)(u,2),m=i[0],E=i[1];Object(n.useEffect)((function(){return E(t.courseDescription),function(){}}),[a]);return r.a.createElement("div",{className:"flex-super-container"},r.a.createElement("h2",null,"Course Description"),o?r.a.createElement(O.a,{editor:I.a,data:m,onChange:function(e,t){var a=t.getData();E(a)}}):j()(m),r.a.createElement("button",{className:"button",onClick:function(){return s(!o)}},o?"save":"edit"))},P=a(25),F=a(38),Q=function(e){var t=e.announcement,a=e.handleEdit,n=e.handleOnChange;return r.a.createElement("div",null,t.editable?r.a.createElement(O.a,{editor:I.a,data:t.content,onChange:n}):r.a.createElement("div",null,r.a.createElement("h3",null,t.title),r.a.createElement("p",null,"Posted on: ",t.time),j()(t.content)),r.a.createElement("button",{className:"button",onClick:a},t.editable?"save":"edit"))},G=function(){var e=Object(d.c)((function(e){return e.courseDetails})),t=e.course,a=e.loading,c=e.error,l=Object(n.useState)(""),o=Object(p.a)(l,2),s=o[0],u=o[1];Object(n.useEffect)((function(){t.announcement.map((function(e){return e.editable=!1,e}));return u(t.announcement),function(){}}),[a]);var i=function(e,t,a){return[].concat(Object(F.a)(e.slice(0,t)),[a],Object(F.a)(e.slice(t+1)))},m=function(e){return function(){var t=Object(P.a)(Object(P.a)({},s[e]),{},{editable:!s[e].editable}),a=i(s,e,t);u(a)}};return a?r.a.createElement("div",null,"loading..."):s?r.a.createElement("div",{className:"flex-super-container"},r.a.createElement("h2",null,"Announcement"),s.map((function(e,t){return r.a.createElement(Q,{announcement:e,handleOnChange:(a=t,function(e,t){var n=t.getData(),r=Object(P.a)(Object(P.a)({},s[a]),{},{content:n}),c=i(s,a,r);u(c)}),handleEdit:m(t),index:t,key:t});var a}))):r.a.createElement("div",null,c)},q=a(69),B=a.n(q),J=(a(124),function(){return r.a.createElement("div",{className:"flex-super-container"},r.a.createElement("h2",null,"Assignment"),r.a.createElement("embed",{src:"https://storage.googleapis.com/kumbigo.appspot.com/Homework5(1).pdf",type:"application/pdf",height:300,width:"100%"}),r.a.createElement("h3",null,"Upload your assignment here:"),r.a.createElement(B.a,{getUploadParams:function(e){e.meta;return{url:"https://httpbin.org/post"}},onChangeStatus:function(e,t){var a=e.meta,n=e.file;console.log(t,a,n)},onSubmit:function(e,t){console.log(e.map((function(e){return e.meta}))),t.forEach((function(e){return e.remove()}))},accept:"image/*,audio/*,video/*"}),r.a.createElement("h3",null,"Current uploaded assignment:"),r.a.createElement("embed",{src:"https://storage.googleapis.com/kumbigo.appspot.com/HomeWork5%20Irfan%20Zaky%20Harlen.pdf",type:"application/pdf",height:800,width:"100%"}))}),H=function(e){var t=e.content;return r.a.createElement("div",null,r.a.createElement(o.b,{className:"link",to:"/lecture/"+t.courseID+"/"+t.chapterNo},r.a.createElement("h2",null,"Chapter ",t.chapterNo)),r.a.createElement("h3",null,t.chapterTitle),r.a.createElement("p",null,t.chapterSummary),r.a.createElement("br",null))},M=function(e){var t=Object(d.c)((function(e){return e.contentDetails})),a=t.content,c=t.loading,l=t.error,o=e.match.params,s=Object(d.b)();return Object(n.useEffect)((function(){var e;return s((e=o.courseID,function(){var t=Object(g.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"CONTENT_REQUEST",payload:e}),t.next=4,h.a.get("/api/courses/content/"+e);case 4:n=t.sent,r=n.data,a({type:"CONTENT_SUCCESS",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"CONTENT_FAIL",payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),function(){}}),[]),c?r.a.createElement("div",null,"loading..."):a?r.a.createElement("div",{className:"flex-super-container"},a.map((function(e,t){return r.a.createElement(H,{content:e,key:t})}))):r.a.createElement("div",null,l)},W=a(4),X=function(e){var t=Object(d.c)((function(e){return e.courseDetails})),a=t.course,c=t.loading,l=t.error,o=e.match.params,s=Object(d.b)();return Object(n.useEffect)((function(){var e;return s((e=o.courseID,function(){var t=Object(g.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"COURSE_DETAILS_REQUEST",payload:e}),t.next=4,h.a.get("/api/courses/get/"+e);case 4:n=t.sent,r=n.data,a({type:"COURSE_DETAILS_SUCCESS",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"COURSE_DETAILS_FAIL",payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),function(){}}),[]),c?r.a.createElement("div",null,"loading..."):a?r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,a.courseName),r.a.createElement("p",null,a.summary)),r.a.createElement(L,{params:o}),r.a.createElement(W.c,null,r.a.createElement(W.a,{path:"/course/:courseID/",exact:!0,component:A}),r.a.createElement(W.a,{path:"/course/:courseID/announcement",component:G}),r.a.createElement(W.a,{path:"/course/:courseID/content",component:M}),r.a.createElement(W.a,{path:"/course/:courseID/assignment",component:J}))):r.a.createElement("div",null,l)},V=a(16),Z=a.n(V),z=a(70),K=a.n(z),Y=a(31),$=function(e){var t=e.content,a=e.index,n=e.location,c=Z.a.parse(n.search),l=(c.lecture,Object(Y.a)(c,["lecture"])),s=Z.a.stringify(l);return r.a.createElement("div",null,r.a.createElement(o.b,{className:"link",to:{pathname:n.baselink,search:s+"&lecture="+a}},r.a.createElement("div",null,t.title,r.a.createElement("br",null),Math.floor(t.duration/60),"m ",t.duration%60,"s ",r.a.createElement("bt",null))),r.a.createElement("br",null))},ee=function(e){var t=e.lectureContent,a=e.location;return r.a.createElement("div",{className:"menu-wrapper"},r.a.createElement("h4",null,t.chapterTitle),r.a.createElement("br",null),t.lecture.map((function(e,t){return r.a.createElement($,{content:e,index:t,location:a})})))},te=function(e){e.lecture;return r.a.createElement("div",null,"lecture Q&A")},ae=function(e){var t=e.lectureContent;e.location;return r.a.createElement("div",{className:"menu-wrapper"},r.a.createElement("h4",null,t.chapterTitle),r.a.createElement("br",null),t.chapterSummary,r.a.createElement("br",null))},ne=function(e){var t=e.location,a=Z.a.parse(t.search),n=(a.menu,Object(Y.a)(a,["menu"])),c=Z.a.stringify(n);return r.a.createElement("div",{className:"Navbar course-navbar"},r.a.createElement(o.b,{to:{pathname:t.baselink,search:c+"&menu=content"},className:"NavbarText"},"Content"),r.a.createElement(o.b,{to:{pathname:t.baselink,search:c+"&menu=qna"},className:"NavbarText"},"Q & A"),r.a.createElement(o.b,{to:{pathname:t.baselink,search:c+"&menu=summary"},className:"NavbarText"},"Summary"))},re=(a(145),function(e){var t=Object(d.c)((function(e){return e.contentDetails})),a=t.content,c=t.loading,l=t.error,o=Z.a.parse(e.location.search),s=o.lecture,u=void 0===s?0:s,i=o.menu,m=void 0===i?"content":i,p=e.match.params,E=p.courseID,v=p.chapter,b=Object(d.b)();Object(n.useEffect)((function(){return b(function(e,t){return function(){var a=Object(g.a)(f.a.mark((function a(n){var r,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:"CONTENT_REQUEST",payload:e}),a.next=4,h.a.get("/api/courses/content/"+e+"/"+t);case 4:r=a.sent,c=r.data,n({type:"CONTENT_SUCCESS",payload:c}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"CONTENT_FAIL",payload:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(E,v)),function(){}}),[]);var N=a[0];return c?r.a.createElement("div",null,"loading..."):N?r.a.createElement("div",{className:"lecture-container"},r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(K.a,{className:"react-player",url:N.lecture[u].video,width:"100%",height:"100%"})),r.a.createElement("div",null,r.a.createElement(ne,{location:e.location}),"qna"==m?r.a.createElement(te,null):"summary"==m?r.a.createElement(ae,{lectureContent:N}):r.a.createElement(ee,{lectureContent:N,location:e.location}))):r.a.createElement("div",null,"there is error: ",l)}),ce=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"center",src:R.a,alt:"error"}))},le=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),u=s[0],i=s[1],m=Object(n.useState)(""),E=Object(p.a)(m,2),v=E[0],b=E[1],S=Object(n.useState)(""),y=Object(p.a)(S,2),O=y[0],C=y[1],I=Object(d.c)((function(e){return e.userRegister})),T=(I.loading,I.userInfo),j=(I.error,Object(d.b)());Object(n.useEffect)((function(){return T&&e.history.push("/home"),function(){}}),[T]);return r.a.createElement("div",{className:"loginbg"},r.a.createElement("div",{className:"login-card"},r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),j(function(e,t,a){return function(){var n=Object(g.a)(f.a.mark((function n(r){var c,l;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:"USER_REGISTER_REQUEST",payload:{username:e,email:t,password:a}}),n.next=4,h.a.post("/api/users/register/",{username:e,email:t,password:a});case 4:c=n.sent,l=c.data,r({type:"USER_REGISTER_SUCCESS",payload:l}),N.a.set("userInfo",JSON.stringify(l)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:"USER_REGISTER_FAIL",payload:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(c,u,v)),console.log(c,u,v,O)}},r.a.createElement("input",{type:"text",className:"field",placeholder:"Username",onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{type:"text",className:"field",placeholder:"Email",onChange:function(e){return i(e.target.value)}}),r.a.createElement("input",{type:"password",className:"field",placeholder:"Password",onChange:function(e){return b(e.target.value)}}),r.a.createElement("input",{type:"password",className:"field",placeholder:"Password",onChange:function(e){return C(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",className:"field field-button",value:"Register"}))))};var oe=function(){var e=Object(d.c)((function(e){return e.userSignin})).userInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{userInfo:e}),r.a.createElement(W.c,null,r.a.createElement(W.a,{path:"/home",component:U}),r.a.createElement(W.a,{path:"/courses",component:D}),r.a.createElement(W.a,{path:"/",exact:!0,component:S}),r.a.createElement(W.a,{path:"/myprofile",component:k}),r.a.createElement(W.a,{path:"/register",component:le}),r.a.createElement(W.a,{path:"/course/:courseID",component:X}),r.a.createElement(W.a,{path:"/lecture/:courseID/:chapter",component:re}),r.a.createElement(W.a,{component:ce})),r.a.createElement(m,null))},se=a(19);var ue=a(71),ie={userSignin:{userInfo:N.a.getJSON("userInfo")||null}},me=Object(se.c)({courseList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{courses:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COURSE_LIST_REQUEST":return{loading:!0};case"COURSE_LIST_SUCCESS":return{loading:!1,courses:t.payload};case"COURSE_LIST_FAIL":return{loading:!1,courses:[],error:t.payload};default:return e}},courseDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{courses:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COURSE_DETAILS_REQUEST":return{loading:!0,course:[]};case"COURSE_DETAILS_SUCCESS":return{loading:!1,course:t.payload};case"COURSE_DETAILS_FAIL":return{loading:!1,course:[],error:t.payload};default:return e}},contentDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{content:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTENT_REQUEST":return{loading:!0,content:[]};case"CONTENT_SUCCESS":return{loading:!1,content:t.payload};case"CONTENT_FAIL":return{loading:!1,content:[],error:t.payload};default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SIGNIN_REQUEST":return{loading:!0};case"USER_SIGNIN_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_SIGNIN_FAIL":return{loading:!1,error:t.payload};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:t.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:t.payload};default:return e}}}),pe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,de=Object(se.e)(me,ie,pe(Object(se.a)(ue.a)));l.a.render(r.a.createElement(d.a,{store:de},r.a.createElement(o.a,null,r.a.createElement(oe,null))),document.getElementById("root"))},30:function(e,t,a){e.exports=a.p+"static/media/error.2a4acc97.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/ntu-logo.ac80e465.png"},72:function(e,t,a){e.exports=a(146)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.2c8c31fd.chunk.js.map