(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__3tkny",dialogsNamesWindow:"Dialogs_dialogsNamesWindow__1D3Lt",chatWindow:"Dialogs_chatWindow__3UFSt"}},103:function(e,t,n){e.exports={active:"DialogItem_active__gHXDC",dialogImg:"DialogItem_dialogImg__eaGjg",dialogName:"DialogItem_dialogName__2In07"}},113:function(e,t,n){e.exports={sender:"ChatItem_sender__301_D",answer:"ChatItem_answer__3m4qD"}},114:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1tAeN",userElement:"Users_userElement__3cP1E",selectedPage:"Users_selectedPage__3su2S"}},117:function(e,t,n){e.exports={content:"MyPosts_content__3b2Ol"}},118:function(e,t,n){e.exports={header:"Header_header__2cZvj",loginBlock:"Header_loginBlock__2r5gj"}},155:function(e,t,n){e.exports={lds_roller:"Loading_lds_roller__2kYzN","lds-roller":"Loading_lds-roller__2x4n_"}},157:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__H4tio"}},158:function(e,t,n){e.exports={item:"Post_item__1_LT_"}},169:function(e,t,n){e.exports=n(295)},194:function(e,t,n){},293:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(27),i=n(23),u=n.n(i),c=n(35),s=n(99),l=n(21),p=n(148).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b7aec3a8-1b77-41d6-aded-3789221e7d40"}}),f={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return p.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},getUnfollow:function(e){return p.delete("follow/".concat(e)).then(function(e){return e.data})},getFollow:function(e){return p.post("follow/".concat(e)).then(function(e){return e.data})},getProfile:function(e){return console.warn("Obsolete method. Use profileAPI"),h.getProfile(e)}},d=function(){return p.get("auth/me")},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return p.post("/auth/login/",{email:e,password:t,rememberMe:n})},g=function(){return p.delete("/auth/login/")},h={getProfile:function(e){return p.get("profile/".concat(e))},getStatus:function(e){return p.get("profile/status/".concat(e))},updateStatus:function(e){return p.put("profile/status/",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),p.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},v={postsDataBase:[{id:1,text:"Hello my friends!",like:25},{id:2,text:"I learn react",like:13},{id:3,text:"Far far away...",like:20}],postTypingText:"",profile:null,status:""},E=function(e){return{type:"SET_STATUS",status:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPD_TYPING_POST":return Object(l.a)({},e,{postTypingText:t.typingText});case"ADD_POST":var n={id:4,text:e.postTypingText,like:0};return Object(l.a)({},e,{postsDataBase:[].concat(Object(s.a)(e.postsDataBase),[n]),postTypingText:""});case"SET_USER_PROFILE":return Object(l.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(l.a)({},e,{status:t.status});case"SET_PHOTOS_LINKS":return Object(l.a)({},e,{profile:Object(l.a)({},e.profile,{photos:t.photos})});default:return e}},y={dialogsNamesData:[{id:1,name:"Nikita",avatar:"https://avas.at.ua/_ph/45/1/469869713.jpg?1603712491"},{id:2,name:"Egor",avatar:"https://avas.at.ua/_ph/45/1/563058985.jpg?1603712491"},{id:3,name:"Dima",avatar:"https://avas.at.ua/_ph/45/1/940876170.jpg?1603712670"}],messageDataBase:[{id:1,sender:!0,text:"Hello!"},{id:2,sender:!0,text:"How are you?"},{id:3,sender:!1,text:"I'll find you and hug!"},{id:4,sender:!0,text:"Oh, no!"},{id:5,sender:!1,text:"Time is running..."}],messageTypingText:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPD_TYPING_MESSAGE":return Object(l.a)({},e,{messageTypingText:t.typingText});case"ADD_MESSAGE":var n={id:6,sender:!1,text:e.messageTypingText};return Object(l.a)({},e,{messageDataBase:[].concat(Object(s.a)(e.messageDataBase),[n]),messageTypingText:""});default:return e}},O={usersData:[],pageSize:10,totalUsersCount:0,currentPage:1,waitingResponse:!1,waitingSubscribe:{status:!1,id:null}},w=function(e){return{type:"FOLLOW",id:e}},S=function(e){return{type:"UNFOLLOW",id:e}},P=function(e){return{type:"WAITING_RESPONSE",toggle:e}},j=function(e,t){return{type:"WAITING_SUBSCRIBE",toggle:e,userID:t}},T=function(){var e=Object(c.a)(u.a.mark(function e(t,n,a,r){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(j(!1));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(l.a)({},e,{usersData:e.usersData.map(function(e){return e.id===t.id?Object(l.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(l.a)({},e,{usersData:e.usersData.map(function(e){return e.id===t.id?Object(l.a)({},e,{followed:!1}):e})});case"SET_USERS":return Object(l.a)({},e,{usersData:t.users,totalUsersCount:t.totalCount});case"SET_CURRENT_PAGE":return Object(l.a)({},e,{currentPage:t.currentPage});case"SET_PAGE_SIZE":return Object(l.a)({},e,{pageSize:t.pageSize});case"WAITING_RESPONSE":return Object(l.a)({},e,{waitingResponse:t.toggle});case"WAITING_SUBSCRIBE":return Object(l.a)({},e,{waitingSubscribe:{status:t.toggle,id:t.userID}});default:return e}},I={login:null,userID:null,email:null,isAuthorize:!1},N=function(e,t,n,a){return{type:"SET_LOGIN_DATA",payload:{userID:e,email:t,login:n,isAuthorize:a}}},x=function(){return function(){var e=Object(c.a)(u.a.mark(function e(t){var n,a,r,o,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,i=a.login,t(N(r,o,i,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_DATA":return Object(l.a)({},e,t.payload);default:return e}},C=n(149),R={initialized:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(l.a)({},e,{initialized:!0});default:return e}},A=Object(o.c)({profilePage:b,dialogsPage:_,usersPage:k,authorizeBlock:D,app:U}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,B=Object(o.e)(A,z(Object(o.a)(C.a)));window.store=B;var L=B,G=n(31),W=n.n(G),F=n(25),M=n(43),H=n(44),Y=n(46),Z=n(45),K=n(28),q=(n(194),n(129),n(39)),Q=n.n(q),V=n(16),X=n(102),J=n.n(X),$=n(103),ee=n.n($),te=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",null,r.a.createElement(F.b,{activeClassName:ee.a.active,to:t},r.a.createElement("img",{className:ee.a.dialogImg,src:e.avatar,alt:"chatAvatar"}),r.a.createElement("span",{className:ee.a.dialogName},e.chatName)))},ne=n(113),ae=n.n(ne),re=function(e){var t=!0===e.sender?ae.a.sender:ae.a.answer;return r.a.createElement("div",{className:t},e.message)},oe=function(e){var t=r.a.createRef();return r.a.createElement("div",{className:J.a.dialogsWrapper},r.a.createElement("div",{className:J.a.dialogsNamesWindow},e.dialogsPage.dialogsNamesData.map(function(e){return r.a.createElement(te,{id:e.id,chatName:e.name,avatar:e.avatar,key:e.id})})),r.a.createElement("div",{className:J.a.chatWindow},e.dialogsPage.messageDataBase.map(function(e){return r.a.createElement(re,{message:e.text,sender:e.sender,key:e.id})}),r.a.createElement("div",null,r.a.createElement("textarea",{onChange:function(){var n=t.current.value;e.textChange(n)},ref:t,value:e.dialogsPage.messageTypingText}),r.a.createElement("button",{onClick:function(){e.sendMessage()}},"Send"))))},ie=n(26);function ue(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(K.a)(e);if(t){var r=Object(K.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var ce=function(e){var t=function(t){Object(Y.a)(a,t);var n=ue(a);function a(){return Object(M.a)(this,a),n.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){return this.props.isAuthorize?r.a.createElement(e,this.props):r.a.createElement(V.a,{to:"/login"})}}]),a}(r.a.Component);return Object(ie.b)(function(e){return{isAuthorize:e.authorizeBlock.isAuthorize}})(t)},se=Object(o.d)(Object(ie.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(){e({type:"ADD_MESSAGE"})},textChange:function(t){e(function(e){return{type:"UPD_TYPING_MESSAGE",typingText:e}}(t))}}}),ce)(oe),le=n(306),pe=n(114),fe=n.n(pe),de=n(86),me=n.n(de),ge=function(e){return r.a.createElement("div",{className:fe.a.userElement},r.a.createElement(F.b,{to:"/profile/".concat(e.id)},r.a.createElement("div",null,r.a.createElement("img",{alt:"userPhoto",className:fe.a.userPhoto,src:null!=e.photos.small?e.photos.small:me.a}))),r.a.createElement("div",null,"Nickname: ",e.name,"; id: ",e.id,"; status: ",e.status),r.a.createElement("button",{disabled:!0===e.waitingSubscribe.status&&e.waitingSubscribe.id===e.id,onClick:function(){!0===e.followed?e.unfollow(e.id):e.follow(e.id)}},!0===e.followed?"unfollow":"follow"))},he=function(e){return r.a.createElement("div",null,r.a.createElement(le.a,{defaultCurrent:1,total:e.totalUsersCount,onChange:function(t,n){e.onPageChange(t,n)},defaultPageSize:e.pageSize}),e.usersData.map(function(t){return r.a.createElement(ge,{key:t.id,id:t.id,name:t.name,followed:t.followed,waitingSubscribe:e.waitingSubscribe,follow:e.follow,unfollow:e.unfollow,photos:t.photos,status:t.status})}))},ve=n(155),Ee=n.n(ve),be=function(){return r.a.createElement("div",{className:Ee.a.lds_roller},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},ye=n(156),_e=Object(ye.a)(function(e){return e.usersPage.usersData},function(e){return e.filter(function(e){return!0})}),Oe=function(e){return e.usersPage.pageSize},we=function(e){return e.usersPage.totalUsersCount},Se=function(e){return e.usersPage.currentPage},Pe=function(e){return e.usersPage.waitingResponse},je=function(e){return e.usersPage.waitingSubscribe};function Te(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(K.a)(e);if(t){var r=Object(K.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var ke=function(e){Object(Y.a)(n,e);var t=Te(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t,n){e.props.setCurrentPage(t),e.props.setPageSize(n),e.props.getUsers(t,n)},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.waitingResponse?r.a.createElement(be,null):null,r.a.createElement(he,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,usersData:this.props.usersData,follow:this.props.follow,unfollow:this.props.unfollow,onPageChange:this.onPageChange,waitingSubscribe:this.props.waitingSubscribe,toggleSubscribeProgress:this.props.toggleSubscribeProgress}))}}]),n}(r.a.Component),Ie=Object(o.d)(Object(ie.b)(function(e){return{usersData:_e(e),pageSize:Oe(e),totalUsersCount:we(e),currentPage:Se(e),waitingResponse:Pe(e),waitingSubscribe:je(e)}},{follow:function(e){return function(){var t=Object(c.a)(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,f.getFollow.bind(f),w);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(c.a)(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,f.getUnfollow.bind(f),S);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},getUsers:function(e,t){return function(){var n=Object(c.a)(u.a.mark(function n(a){var r;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(P(!0)),e=0===e?e=1:e,n.next=4,f.getUsers(e,t);case 4:r=n.sent,a(P(!1)),a((o=r.items,i=r.totalCount,{type:"SET_USERS",users:o,totalCount:i}));case 7:case"end":return n.stop()}var o,i},n)}));return function(e){return n.apply(this,arguments)}}()},setPageSize:function(e){return{type:"SET_PAGE_SIZE",pageSize:e}}}))(ke),Ne=n(157),xe=n.n(Ne),De=n(297),Ce=function(e){var t=Object(a.useState)(!1),n=Object(De.a)(t,2),o=n[0],i=n[1],u=Object(a.useState)(e.status),c=Object(De.a)(u,2),s=c[0],l=c[1];return Object(a.useEffect)(function(){l(e.status)},[e.status]),r.a.createElement("div",null,"PROFILE STATUS:",!o&&r.a.createElement("span",{onDoubleClick:function(){return i(!0)}},s),o&&r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){i(!1),e.sendNewStatus(s)},value:s}))},Re=function(e){if(!e.profile)return r.a.createElement(be,null);return r.a.createElement("div",null,r.a.createElement("div",{className:xe.a.descriptionBlock},r.a.createElement("img",{src:null!=e.profile.photos.small?e.profile.photos.small:me.a,alt:"profile avatar"}),e.profile.userId===e.yourID&&r.a.createElement("input",{onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])},type:"file"}),r.a.createElement("p",null,"id: ",e.profile.userId),r.a.createElement("p",null,"nickname: ",e.profile.fullName),r.a.createElement(Ce,{sendNewStatus:e.sendNewStatus,status:e.status})))},Ue=n(117),Ae=n.n(Ue),ze=n(158),Be=n.n(ze),Le=function(e){return r.a.createElement("div",{className:Be.a.item},r.a.createElement("img",{src:"https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/999/EP0177-CUSA07010_00-AV00000000000004/1593099665000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",alt:"avatar"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"Like : ",e.like," "),r.a.createElement("span",null,"Dislike : 0")))},Ge=r.a.memo(function(e){var t=r.a.createRef();return r.a.createElement("div",{className:Ae.a.content},r.a.createElement("div",null,"My posts"),r.a.createElement("textarea",{onChange:function(){var n=t.current.value;e.updTypingPost(n)},ref:t,value:e.postTypingText}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.addPost()}},"Add post"),r.a.createElement("button",null,"Remove")),r.a.createElement("div",{className:Ae.a.posts},e.postsDataBase.map(function(e){return r.a.createElement(Le,{message:e.text,key:e.id,like:e.like})})))}),We=Object(ie.b)(function(e){return{postsDataBase:e.profilePage.postsDataBase,postTypingText:e.profilePage.postTypingText}},function(e){return{addPost:function(){e({type:"ADD_POST"})},updTypingPost:function(t){var n=function(e){return{type:"UPD_TYPING_POST",typingText:e}}(t);e(n)}}})(Ge),Fe=function(e){return r.a.createElement("div",null,r.a.createElement(Re,{savePhoto:e.savePhoto,profile:e.profile,yourID:e.yourID,status:e.status,sendNewStatus:e.sendNewStatus}),r.a.createElement(We,null))};function Me(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(K.a)(e);if(t){var r=Object(K.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var He=function(e){Object(Y.a)(n,e);var t=Me(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userID;e||(e=this.props.yourID),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Fe,Object.assign({},this.props,{sendNewStatus:this.props.sendNewStatus})))}}]),n}(r.a.Component),Ye=Object(o.d)(Object(ie.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,yourID:e.authorizeBlock.userID}},{getUserProfile:function(e){return function(){var t=Object(c.a)(u.a.mark(function t(n){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(c.a)(u.a.mark(function t(n){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getStatus(e);case 2:""===(a=t.sent).data&&(a.data="status if empty"),n(E(a.data));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},sendNewStatus:function(e){return function(){var t=Object(c.a)(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(E(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(c.a)(u.a.mark(function t(n){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.updatePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SET_PHOTOS_LINKS",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}),V.f,ce)(He),Ze=n(118),Ke=n.n(Ze),qe=function(e){return r.a.createElement("header",{className:Ke.a.header},r.a.createElement("div",{className:Ke.a.loginBlock},e.isAuthorize?r.a.createElement("div",null,r.a.createElement("p",null,"user: ",e.login),r.a.createElement("button",{onClick:e.logOut},"Log Out")," "):r.a.createElement(F.b,{to:"/login"},"Login")))};function Qe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(K.a)(e);if(t){var r=Object(K.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var Ve=function(e){Object(Y.a)(n,e);var t=Qe(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return r.a.createElement(qe,this.props)}}]),n}(r.a.Component),Xe=(Object(ie.b)(function(e){return{isAuthorize:e.authorizeBlock.isAuthorize,login:e.authorizeBlock.login}},{logOut:function(){return function(e){g().then(function(t){0===t.data.resultCode&&e(N(null,null,null,!1))})}}})(Ve),n(305)),Je=n(307),$e=n(310),et=n(296),tt={labelCol:{span:4},wrapperCol:{span:8}},nt=function(e){var t=e.signIn;return!0===e.isAuthorize?r.a.createElement("div",null,"Your already login!"):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Xe.a,Object.assign({},tt,{name:"basic",initialValues:{remember:!0},onFinish:function(e){t(e.username,e.password,e.remember),console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(Xe.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(Je.a,null)),r.a.createElement(Xe.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(Je.a.Password,null)),r.a.createElement(Xe.a.Item,{name:"remember",valuePropName:"checked"},r.a.createElement($e.a,null,"Remember me")),r.a.createElement(Xe.a.Item,null,r.a.createElement(et.a,{type:"primary",htmlType:"submit"},"Submit"))))},at=Object(ie.b)(function(e){return{isAuthorize:e.authorizeBlock.isAuthorize}},function(e){return{signIn:function(t,n,a){e(function(e,t,n){return function(){var a=Object(c.a)(u.a.mark(function a(r){var o;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(x()):alert(o.data.messages);case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}(t,n,a))}}})(nt),rt=n(304),ot=n(308),it=n(164),ut=n.n(it),ct=n(162),st=n.n(ct),lt=n(163),pt=n.n(lt),ft=n(165),dt=n.n(ft),mt=n(166),gt=n.n(mt);function ht(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(K.a)(e);if(t){var r=Object(K.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(Z.a)(this,n)}}var vt=rt.a.Header,Et=rt.a.Content,bt=rt.a.Footer,yt=rt.a.Sider,_t=function(e){Object(Y.a)(n,e);var t=ht(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement(rt.a,null,r.a.createElement(yt,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)}},r.a.createElement("div",{className:"logo"}),r.a.createElement(ot.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"]},r.a.createElement(ot.a.Item,{key:"1",icon:r.a.createElement(st.a,null)},r.a.createElement(F.b,{to:"/profile",activeClassName:Q.a.active},"Profile")),r.a.createElement(ot.a.Item,{key:"2",icon:r.a.createElement(pt.a,null)},r.a.createElement(F.b,{to:"/dialogs",activeClassName:Q.a.active},"Dialogs")),r.a.createElement(ot.a.Item,{key:"3",icon:r.a.createElement(ut.a,null)},r.a.createElement(F.b,{to:"/users",activeClassName:Q.a.active},"Users")),r.a.createElement(ot.a.Item,{key:"4",icon:r.a.createElement(dt.a,null)},r.a.createElement(F.b,{to:"/login",activeClassName:Q.a.active},"Login")),r.a.createElement(ot.a.Item,{key:"5",icon:r.a.createElement(gt.a,null)},r.a.createElement("a",{target:"_blank",href:"https://github.com/niZaliznyak/React_v1",activeClassName:Q.a.active},"Git-repo")))),r.a.createElement(rt.a,null,r.a.createElement(vt,{className:"site-layout-sub-header-background",style:{padding:0}}),r.a.createElement(Et,{style:{margin:"24px 16px 0"}},r.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},r.a.createElement(V.b,{path:"/dialogs",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(V.b,{path:"/profile/:userID?",render:function(){return r.a.createElement(Ye,null)}}),r.a.createElement(V.b,{path:"/users",render:function(){return r.a.createElement(Ie,null)}}),r.a.createElement(V.b,{path:"/login",render:function(){return r.a.createElement(at,null)}}))),r.a.createElement(bt,{style:{textAlign:"center"}},"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 ",r.a.createElement("a",{target:"_blank",id:"gitURL",href:"https://github.com/niZaliznyak/React_v1"},"git-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439")))):r.a.createElement(be,null)}}]),n}(r.a.Component),Ot=Object(o.d)(V.f,Object(ie.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){e(x()).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(_t);n(293);W.a.render(r.a.createElement(F.a,null,r.a.createElement(ie.a,{store:L},r.a.createElement(Ot,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},39:function(e,t,n){e.exports={nav:"Navbar_nav__1QQHQ",active:"Navbar_active__3_ypk"}},86:function(e,t,n){e.exports=n.p+"static/media/simple-avatar.da821694.png"}},[[169,2,1]]]);
//# sourceMappingURL=main.e47a44af.chunk.js.map