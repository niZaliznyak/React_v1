(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports={content:"MyPosts_content__3b2Ol"}},103:function(e,t,n){e.exports={header:"Header_header__2cZvj",loginBlock:"Header_loginBlock__2r5gj"}},124:function(e,t,n){e.exports={lds_roller:"Loading_lds_roller__2kYzN","lds-roller":"Loading_lds-roller__2x4n_"}},126:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__H4tio"}},127:function(e,t,n){e.exports={item:"Post_item__1_LT_"}},134:function(e,t,n){e.exports=n(194)},159:function(e,t,n){},192:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(27),i=n(20),u=n.n(i),s=n(35),c=n(87),l=n(18),f=n(115).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b7aec3a8-1b77-41d6-aded-3789221e7d40"}}),p={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return f.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},getUnfollow:function(e){return f.delete("follow/".concat(e)).then(function(e){return e.data})},getFollow:function(e){return f.post("follow/".concat(e)).then(function(e){return e.data})},getProfile:function(e){return console.warn("Obsolete method. Use profileAPI"),h.getProfile(e)}},d=function(){return f.get("auth/me")},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return f.post("/auth/login/",{email:e,password:t,rememberMe:n})},g=function(){return f.delete("/auth/login/")},h={getProfile:function(e){return f.get("profile/".concat(e))},getStatus:function(e){return f.get("profile/status/".concat(e))},updateStatus:function(e){return f.put("profile/status/",{status:e})}},v={postsDataBase:[{id:1,text:"Hello my friends!",like:25},{id:2,text:"I learn react",like:13},{id:3,text:"Far far away...",like:20}],postTypingText:"",profile:null,status:""},E=function(e){return{type:"SET_STATUS",status:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPD_TYPING_POST":return Object(l.a)({},e,{postTypingText:t.typingText});case"ADD_POST":var n={id:4,text:e.postTypingText,like:0};return Object(l.a)({},e,{postsDataBase:[].concat(Object(c.a)(e.postsDataBase),[n]),postTypingText:""});case"SET_USER_PROFILE":return Object(l.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(l.a)({},e,{status:t.status});default:return e}},_={dialogsNamesData:[{id:1,name:"Nikita",avatar:"https://avas.at.ua/_ph/45/1/469869713.jpg?1603712491"},{id:2,name:"Egor",avatar:"https://avas.at.ua/_ph/45/1/563058985.jpg?1603712491"},{id:3,name:"Dima",avatar:"https://avas.at.ua/_ph/45/1/940876170.jpg?1603712670"}],messageDataBase:[{id:1,sender:!0,text:"Hello!"},{id:2,sender:!0,text:"How are you?"},{id:3,sender:!1,text:"I'll find you and hug!"},{id:4,sender:!0,text:"Oh, no!"},{id:5,sender:!1,text:"Time is running..."}],messageTypingText:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPD_TYPING_MESSAGE":return Object(l.a)({},e,{messageTypingText:t.typingText});case"ADD_MESSAGE":var n={id:6,sender:!1,text:e.messageTypingText};return Object(l.a)({},e,{messageDataBase:[].concat(Object(c.a)(e.messageDataBase),[n]),messageTypingText:""});default:return e}},O={usersData:[],pageSize:10,totalUsersCount:0,currentPage:1,waitingResponse:!1,waitingSubscribe:{status:!1,id:null}},w=function(e){return{type:"FOLLOW",id:e}},S=function(e){return{type:"UNFOLLOW",id:e}},P=function(e){return{type:"WAITING_RESPONSE",toggle:e}},j=function(e,t){return{type:"WAITING_SUBSCRIBE",toggle:e,userID:t}},T=function(){var e=Object(s.a)(u.a.mark(function e(t,n,a,r){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,a(n);case 3:0==e.sent.resultCode&&t(r(n)),t(j(!1));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(l.a)({},e,{usersData:e.usersData.map(function(e){return e.id===t.id?Object(l.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(l.a)({},e,{usersData:e.usersData.map(function(e){return e.id===t.id?Object(l.a)({},e,{followed:!1}):e})});case"SET_USERS":return Object(l.a)({},e,{usersData:t.users,totalUsersCount:t.totalCount});case"SET_CURRENT_PAGE":return Object(l.a)({},e,{currentPage:t.currentPage});case"SET_PAGE_SIZE":return Object(l.a)({},e,{pageSize:t.pageSize});case"WAITING_RESPONSE":return Object(l.a)({},e,{waitingResponse:t.toggle});case"WAITING_SUBSCRIBE":return Object(l.a)({},e,{waitingSubscribe:{status:t.toggle,id:t.userID}});default:return e}},D={login:null,userID:null,email:null,isAuthorize:!1},x=function(e,t,n,a){return{type:"SET_LOGIN_DATA",payload:{userID:e,email:t,login:n,isAuthorize:a}}},I=function(){return function(){var e=Object(s.a)(u.a.mark(function e(t){var n,a,r,o,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,i=a.login,t(x(r,o,i,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_DATA":return Object(l.a)({},e,t.payload);default:return e}},C=n(116),R={initialized:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(l.a)({},e,{initialized:!0});default:return e}},A=Object(o.c)({profilePage:b,dialogsPage:y,usersPage:N,authorizeBlock:k,app:U}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,z=Object(o.e)(A,B(Object(o.a)(C.a)));window.store=z;var L=z,G=n(31),W=n.n(G),F=n(26),M=n(38),H=n(39),Y=n(42),Z=n(41),q=n(28),Q=(n(159),n(63)),V=n.n(Q),X=function(){return r.a.createElement("nav",{className:V.a.nav},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(F.b,{to:"/profile",activeClassName:V.a.active},"Profile")),r.a.createElement("li",null,r.a.createElement(F.b,{to:"/dialogs",activeClassName:V.a.active},"Dialogs")),r.a.createElement("li",null,r.a.createElement(F.b,{to:"/users",activeClassName:V.a.active},"Users")),r.a.createElement("li",null,r.a.createElement(F.b,{to:"/login",activeClassName:V.a.active},"Login"))))},J=n(7),K=n(89),$=n.n(K),ee=n(90),te=n.n(ee),ne=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",null,r.a.createElement(F.b,{activeClassName:te.a.active,to:t},r.a.createElement("img",{className:te.a.dialogImg,src:e.avatar}),r.a.createElement("span",{className:te.a.dialogName},e.chatName)))},ae=n(98),re=n.n(ae),oe=function(e){var t=1==e.sender?re.a.sender:re.a.answer;return r.a.createElement("div",{className:t},e.message)},ie=function(e){var t=r.a.createRef();return r.a.createElement("div",{className:$.a.dialogsWrapper},r.a.createElement("div",{className:$.a.dialogsNamesWindow},e.dialogsPage.dialogsNamesData.map(function(e){return r.a.createElement(ne,{id:e.id,chatName:e.name,avatar:e.avatar,key:e.id})})),r.a.createElement("div",{className:$.a.chatWindow},e.dialogsPage.messageDataBase.map(function(e){return r.a.createElement(oe,{message:e.text,sender:e.sender,key:e.id})}),r.a.createElement("div",null,r.a.createElement("textarea",{onChange:function(){var n=t.current.value;e.textChange(n)},ref:t,value:e.dialogsPage.messageTypingText}),r.a.createElement("button",{onClick:function(){e.sendMessage()}},"Send"))))},ue=n(24);function se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(q.a)(e);if(t){var r=Object(q.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var ce=function(e){var t=function(t){Object(Y.a)(a,t);var n=se(a);function a(){return Object(M.a)(this,a),n.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){return this.props.isAuthorize?r.a.createElement(e,this.props):r.a.createElement(J.a,{to:"/login"})}}]),a}(r.a.Component);return Object(ue.b)(function(e){return{isAuthorize:e.authorizeBlock.isAuthorize}})(t)},le=Object(o.d)(Object(ue.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(){e({type:"ADD_MESSAGE"})},textChange:function(t){e(function(e){return{type:"UPD_TYPING_MESSAGE",typingText:e}}(t))}}}),ce)(ie),fe=n(266),pe=n(99),de=n.n(pe),me=n(73),ge=n.n(me),he=function(e){return r.a.createElement("div",{className:de.a.userElement},r.a.createElement(F.b,{to:"/profile/".concat(e.id)},r.a.createElement("div",null,r.a.createElement("img",{alt:"userPhoto",className:de.a.userPhoto,src:null!=e.photos.small?e.photos.small:ge.a}))),r.a.createElement("div",null,"Nickname: ",e.name,"; id: ",e.id,"; status: ",e.status),r.a.createElement("button",{disabled:1==e.waitingSubscribe.status&&e.waitingSubscribe.id==e.id,onClick:function(){1==e.followed?e.unfollow(e.id):e.follow(e.id)}},1==e.followed?"unfollow":"follow"))},ve=function(e){return r.a.createElement("div",null,r.a.createElement(fe.a,{defaultCurrent:1,total:e.totalUsersCount,onChange:function(t,n){e.onPageChange(t,n)},defaultPageSize:e.pageSize}),e.usersData.map(function(t){return r.a.createElement(he,{key:t.id,id:t.id,name:t.name,followed:t.followed,waitingSubscribe:e.waitingSubscribe,follow:e.follow,unfollow:e.unfollow,photos:t.photos,status:t.status})}))},Ee=n(124),be=n.n(Ee),_e=function(){return r.a.createElement("div",{className:be.a.lds_roller},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},ye=n(125),Oe=Object(ye.a)(function(e){return e.usersPage.usersData},function(e){return e.filter(function(e){return!0})}),we=function(e){return e.usersPage.pageSize},Se=function(e){return e.usersPage.totalUsersCount},Pe=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.waitingResponse},Te=function(e){return e.usersPage.waitingSubscribe};function Ne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(q.a)(e);if(t){var r=Object(q.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var De=function(e){Object(Y.a)(n,e);var t=Ne(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t,n){e.props.setCurrentPage(t),e.props.setPageSize(n),e.props.getUsers(t,n)},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.waitingResponse?r.a.createElement(_e,null):null,r.a.createElement(ve,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,usersData:this.props.usersData,follow:this.props.follow,unfollow:this.props.unfollow,onPageChange:this.onPageChange,waitingSubscribe:this.props.waitingSubscribe,toggleSubscribeProgress:this.props.toggleSubscribeProgress}))}}]),n}(r.a.Component),xe=Object(o.d)(Object(ue.b)(function(e){return{usersData:Oe(e),pageSize:we(e),totalUsersCount:Se(e),currentPage:Pe(e),waitingResponse:je(e),waitingSubscribe:Te(e)}},{follow:function(e){return function(){var t=Object(s.a)(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,p.getFollow.bind(p),w);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(s.a)(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,p.getUnfollow.bind(p),S);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},getUsers:function(e,t){return function(){var n=Object(s.a)(u.a.mark(function n(a){var r;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(P(!0)),e=0==e?e=1:e,n.next=4,p.getUsers(e,t);case 4:r=n.sent,a(P(!1)),a((o=r.items,i=r.totalCount,{type:"SET_USERS",users:o,totalCount:i}));case 7:case"end":return n.stop()}var o,i},n)}));return function(e){return n.apply(this,arguments)}}()},setPageSize:function(e){return{type:"SET_PAGE_SIZE",pageSize:e}}}))(De),Ie=n(126),ke=n.n(Ie),Ce=n(196),Re=function(e){var t=Object(a.useState)(!1),n=Object(Ce.a)(t,2),o=n[0],i=n[1],u=Object(a.useState)(e.status),s=Object(Ce.a)(u,2),c=s[0],l=s[1];return Object(a.useEffect)(function(){l(e.status)},[e.status]),r.a.createElement("div",null,"PROFILE STATUS:",!o&&r.a.createElement("span",{onDoubleClick:function(){return i(!0)}},c),o&&r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){i(!1),e.sendNewStatus(c)},value:c}))},Ue=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:ke.a.descriptionBlock},r.a.createElement("img",{src:null!=e.profile.photos.small?e.profile.photos.small:ge.a}),r.a.createElement("p",null,"id: ",e.profile.userId),r.a.createElement("p",null,"nickname: ",e.profile.fullName),r.a.createElement(Re,{sendNewStatus:e.sendNewStatus,status:e.status}))):r.a.createElement(_e,null)},Ae=n(102),Be=n.n(Ae),ze=n(127),Le=n.n(ze),Ge=function(e){return r.a.createElement("div",{className:Le.a.item},r.a.createElement("img",{src:"https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/999/EP0177-CUSA07010_00-AV00000000000004/1593099665000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"Like : ",e.like," "),r.a.createElement("span",null,"Dislike : 0")))},We=r.a.memo(function(e){var t=r.a.createRef();return r.a.createElement("div",{className:Be.a.content},r.a.createElement("div",null,"My posts"),r.a.createElement("textarea",{onChange:function(){var n=t.current.value;e.updTypingPost(n)},ref:t,value:e.postTypingText}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.addPost()}},"Add post"),r.a.createElement("button",null,"Remove")),r.a.createElement("div",{className:Be.a.posts},e.postsDataBase.map(function(e){return r.a.createElement(Ge,{message:e.text,key:e.id,like:e.like})})))}),Fe=Object(ue.b)(function(e){return{postsDataBase:e.profilePage.postsDataBase,postTypingText:e.profilePage.postTypingText}},function(e){return{addPost:function(){e({type:"ADD_POST"})},updTypingPost:function(t){var n=function(e){return{type:"UPD_TYPING_POST",typingText:e}}(t);e(n)}}})(We),Me=function(e){return r.a.createElement("div",null,r.a.createElement(Ue,{profile:e.profile,status:e.status,sendNewStatus:e.sendNewStatus}),r.a.createElement(Fe,null))};function He(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(q.a)(e);if(t){var r=Object(q.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var Ye=function(e){Object(Y.a)(n,e);var t=He(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userID;e||(e=this.props.yourID),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Me,Object.assign({},this.props,{sendNewStatus:this.props.sendNewStatus})))}}]),n}(r.a.Component),Ze=Object(o.d)(Object(ue.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,yourID:e.authorizeBlock.userID}},{getUserProfile:function(e){return function(){var t=Object(s.a)(u.a.mark(function t(n){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(s.a)(u.a.mark(function t(n){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getStatus(e);case 2:""==(a=t.sent).data&&(a.data="status if empty"),n(E(a.data));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},sendNewStatus:function(e){return function(){var t=Object(s.a)(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.updateStatus(e);case 2:0==t.sent.data.resultCode&&n(E(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}),J.f,ce)(Ye),qe=n(103),Qe=n.n(qe),Ve=function(e){return r.a.createElement("header",{className:Qe.a.header},r.a.createElement("div",{className:Qe.a.loginBlock},e.isAuthorize?r.a.createElement("div",null,r.a.createElement("h3",null,"user: ",e.login),r.a.createElement("button",{onClick:e.logOut},"Log Out")," "):r.a.createElement(F.b,{to:"/login"},"Login")))};function Xe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(q.a)(e);if(t){var r=Object(q.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var Je=function(e){Object(Y.a)(n,e);var t=Xe(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return r.a.createElement(Ve,this.props)}}]),n}(r.a.Component),Ke=Object(ue.b)(function(e){return{isAuthorize:e.authorizeBlock.isAuthorize,login:e.authorizeBlock.login}},{logOut:function(){return function(e){g().then(function(t){0===t.data.resultCode&&e(x(null,null,null,!1))})}}})(Je),$e=n(265),et=n(267),tt=n(269),nt=n(195),at={labelCol:{span:4},wrapperCol:{span:8}},rt=function(e){var t=e.signIn;return 1==e.isAuthorize?r.a.createElement("div",null,"Your already login!"):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement($e.a,Object.assign({},at,{name:"basic",initialValues:{remember:!0},onFinish:function(e){t(e.username,e.password,e.remember),console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement($e.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(et.a,null)),r.a.createElement($e.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(et.a.Password,null)),r.a.createElement($e.a.Item,{name:"remember",valuePropName:"checked"},r.a.createElement(tt.a,null,"Remember me")),r.a.createElement($e.a.Item,null,r.a.createElement(nt.a,{type:"primary",htmlType:"submit"},"Submit"))))},ot=Object(ue.b)(function(e){return{isAuthorize:e.authorizeBlock.isAuthorize}},function(e){return{signIn:function(t,n,a){e(function(e,t,n){return function(){var a=Object(s.a)(u.a.mark(function a(r){var o;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(I()):alert(o.data.messages);case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}})(rt);function it(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(q.a)(e);if(t){var r=Object(q.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var ut=function(e){Object(Y.a)(n,e);var t=it(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ke,null),r.a.createElement(X,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(J.b,{path:"/dialogs",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(J.b,{path:"/profile/:userID?",render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(J.b,{path:"/users",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(J.b,{path:"/login",render:function(){return r.a.createElement(ot,null)}}))):r.a.createElement(_e,null)}}]),n}(r.a.Component),st=Object(o.d)(J.f,Object(ue.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){e(I()).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(ut);n(190),n(192);W.a.render(r.a.createElement(F.a,null,r.a.createElement(ue.a,{store:L},r.a.createElement(st,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,n){e.exports={nav:"Navbar_nav__1QQHQ",active:"Navbar_active__3_ypk"}},73:function(e,t,n){e.exports=n.p+"static/media/simple-avatar.da821694.png"},89:function(e,t,n){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__3tkny",dialogsNamesWindow:"Dialogs_dialogsNamesWindow__1D3Lt",chatWindow:"Dialogs_chatWindow__3UFSt"}},90:function(e,t,n){e.exports={active:"DialogItem_active__gHXDC",dialogImg:"DialogItem_dialogImg__eaGjg",dialogName:"DialogItem_dialogName__2In07"}},98:function(e,t,n){e.exports={sender:"ChatItem_sender__301_D",answer:"ChatItem_answer__3m4qD"}},99:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1tAeN",userElement:"Users_userElement__3cP1E",selectedPage:"Users_selectedPage__3su2S"}}},[[134,2,1]]]);
//# sourceMappingURL=main.fa0cb99f.chunk.js.map