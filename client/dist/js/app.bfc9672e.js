(function(e){function t(t){for(var r,i,a=t[0],u=t[1],c=t[2],m=0,p=[];m<a.length;m++)i=a[m],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"013d":function(e,t,n){"use strict";var r=n("c742"),o=n.n(r);o.a},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0d95":function(e,t,n){},"222a":function(e,t,n){},2906:function(e,t,n){"use strict";var r=n("0d95"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("page-header",{attrs:{token:e.token},on:{signOut:e.signOut}}),n("RouterView",{attrs:{currentEvent:e.currentEvent,token:e.token},on:{getToken:e.getToken,upcomingEvent:e.routeToEvent}})],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header"},[n("div",{staticClass:"inline"},[n("button",{on:{click:e.goHome}},[e._v("Home")]),n("h1",[e._v("Film Buffs")]),e.token?n("button",{on:{click:e.signOut}},[e._v("Sign Out")]):e._e()])])},a=[],u={name:"PageHeader",props:{token:{type:String}},methods:{goHome:function(){this.$router.push({name:"Home"})},signOut:function(){this.$emit("signOut")}}},c=u,l=(n("2906"),n("2877")),m=Object(l["a"])(c,i,a,!1,null,"409d0dfc",null),p=m.exports,v={name:"app",components:{PageHeader:p},data:function(){return{token:"",currentEvent:{}}},methods:{getToken:function(e){this.token=e},signOut:function(){this.token="",this.$router.push({name:"LogIn"})},routeToEvent:function(e){this.currentEvent=e,this.$router.push({name:"Event"})}}},d=v,f=(n("034f"),Object(l["a"])(d,o,s,!1,null,null,null)),h=f.exports,g=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{attrs:{id:"errors"}},[e.errors.uniqueConstraintError?n("div",{attrs:{id:"unique-constraint"}},[n("h2",[e._v("Username already taken!")])]):e._e(),e.errors.nullFieldsError?n("div",{attrs:{id:"null-fields"}},[n("h2",[e._v("\n        Please be sure to fill in all fields before logging in or signing up!\n      ")])]):e._e(),e.errors.invalidLogInError?n("div",{attrs:{id:"invalid-login"}},[n("h2",[e._v("Incorrect username or password")])]):e._e()]),n("div",{attrs:{id:"login"}},[n("label",{attrs:{for:"logInUsername"}},[e._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.logInUsername,expression:"logInUsername"}],attrs:{id:"logInUsername",type:"text"},domProps:{value:e.logInUsername},on:{input:function(t){t.target.composing||(e.logInUsername=t.target.value)}}}),n("label",{attrs:{for:"logInPassword"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.logInPassword,expression:"logInPassword"}],attrs:{id:"logInPassword",type:"password"},domProps:{value:e.logInPassword},on:{input:function(t){t.target.composing||(e.logInPassword=t.target.value)}}}),n("button",{on:{click:e.logIn}},[e._v("Log In")])]),n("div",{attrs:{id:"sign-up"}},[n("label",{attrs:{for:"signUpUsername"}},[e._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signUpUsername,expression:"signUpUsername"}],attrs:{id:"signUpUsername",type:"text"},domProps:{value:e.signUpUsername},on:{input:function(t){t.target.composing||(e.signUpUsername=t.target.value)}}}),n("label",{attrs:{for:"signUpPassword"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signUpPassword,expression:"signUpPassword"}],attrs:{id:"signUpPassword",type:"password"},domProps:{value:e.signUpPassword},on:{input:function(t){t.target.composing||(e.signUpPassword=t.target.value)}}}),n("label",{attrs:{for:"email"}},[e._v("Email Address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("button",{on:{click:e.signUp}},[e._v("Sign Up")])])])},_=[],w={name:"LogIn",data:function(){return{logInUsername:"",logInPassword:"",signUpUsername:"",signUpPassword:"",email:"",errors:{uniqueConstraintError:!1,nullFieldsError:!1,invalidLogInError:!1}}},methods:{clearErrors:function(){for(var e in this.errors)this.errors[e]=!1},showError:function(e){this.clearErrors(),this.errors[e]=!0},logIn:function(e){var t=this;this.logInUsername.length>0&&this.logInPassword.length>0?(this.clearErrors(),this.$api_service.sendAuth(this.logInUsername,this.logInPassword).then(function(e){e.hash?(console.log(e),t.$emit("getToken",e.hash),t.$router.push({name:"Home"})):t.showError("invalidLogInError")})):this.showError("nullFieldsError")},signUp:function(e){var t=this;this.signUpUsername.length>0&&this.signUpPassword.length>0&&this.email.length>0?this.$api_service.createUser(this.signUpUsername,this.signUpPassword,this.email).then(function(e){"UniqueConstraintError"==e.error?t.showError("uniqueConstraintError"):200==e.statusCode&&(t.clearErrors(),t.$emit("getToken",e.hash),t.$router.push({name:"Home"}))}):this.showError("nullFieldsError")}}},b=w,U=Object(l["a"])(b,E,_,!1,null,"f641f51c",null),P=U.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{attrs:{id:"errors"}}),n("div",{attrs:{id:"navigation"}},[n("button",{on:{click:e.pastEvents}},[e._v("View Past Events")]),n("button",{on:{click:e.upcomingEvent}},[e._v("View Upcoming Event")]),n("button",[e._v("View your profile")])])])},C=[],I={name:"Home",data:function(){return{errors:{}}},props:{token:{type:String}},methods:{checkToken:function(){0==this.token.length&&this.$router.push({name:"LogIn"})},upcomingEvent:function(){var e=this;this.$api_service.getUpcoming().then(function(t){console.log(t),e.$emit("upcomingEvent",t)}).catch(function(e){console.log(e)})},pastEvents:function(){this.$router.push({name:"PastEvents"})}},beforeMount:function(){this.checkToken()}},y=I,$=Object(l["a"])(y,k,C,!1,null,"705d0462",null),O=$.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event"},[n("h1",[e._v(e._s(e.currentEvent.movieTitle))]),n("h2",[e._v("Where: "+e._s(e.currentEvent.theater))]),n("h2",[e._v("When: "+e._s(e.currentEvent.date))]),n("h2",[e._v("Coffee: "+e._s(e.currentEvent.coffeeShop))]),n("div",{attrs:{id:"errors"}}),n("Forum",{attrs:{token:e.token,currentEventID:e.currentEvent.id}})],1)},j=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"forum"},[n("div",{staticClass:"comment-form"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCommentValue,expression:"newCommentValue"}],attrs:{draggable:"false",rows:"4",cols:"50"},domProps:{value:e.newCommentValue},on:{input:function(t){t.target.composing||(e.newCommentValue=t.target.value)}}}),n("button",{on:{click:e.submitComment}},[e._v("Submit Comment")])]),e._l(e.comments,function(t){return n("div",{staticClass:"comment-list"},[n("div",{staticClass:"comment"},[n("h3",[e._v(e._s(t.username)+" says:")]),n("p",[e._v('"'+e._s(t.content)+'"')]),n("p",[e._v("Posted at: "+e._s(t.date))])])])})],2)},S=[],V={name:"Forum",data:function(){return{errors:{},newCommentValue:"",comments:[]}},props:{token:"",currentEventID:""},methods:{submitComment:function(){var e=this;this.$api_service.submitComment(this.token,this.currentEventID,this.newCommentValue).then(function(t){e.getComments()}),this.newCommentValue=""},getComments:function(){var e=this;this.$api_service.getComments(this.currentEventID).then(function(t){e.comments=t})}},beforeMount:function(){this.getComments()}},H=V,q=(n("013d"),Object(l["a"])(H,T,S,!1,null,"264163ac",null)),F=q.exports,L={name:"Event",data:function(){return{errors:{}}},props:{currentEvent:{type:Object},token:""},components:{Forum:F}},M=L,D=Object(l["a"])(M,x,j,!1,null,"1ff19fee",null),N=D.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PastEvents"},e._l(e.events,function(t){return n("div",{staticClass:"event-list"},[n("div",{staticClass:"event"},[n("h5",[e._v(e._s(t.movieTitle))]),n("h5",[e._v(e._s(t.date))]),n("button",{on:{click:function(n){return e.goToEvent(t)}}},[e._v("Event Page")])])])}),0)},J=[],W={name:"PastEvents",data:function(){return{errors:{},events:[]}},methods:{getEvents:function(){var e=this;this.$api_service.getEvents().then(function(t){e.events=t,console.log(t)})},goToEvent:function(e){this.$emit("upcomingEvent",e)}},beforeMount:function(){this.getEvents()}},z=W,B=(n("69a1"),Object(l["a"])(z,A,J,!1,null,"02971c19",null)),R=B.exports,G=new g["a"]({routes:[{path:"/home",component:O,name:"Home",props:!0},{path:"/",component:P,name:"LogIn",props:!0},{path:"/event",component:N,name:"Event",props:!0},{path:"/pastEvents",component:R,name:"PastEvents",props:!0}]}),K=(n("7f7f"),n("bc3a")),Q=n.n(K),X={sendAuth:function(e,t){return Q.a.post("/api/auth",{username:e,password:t}).then(function(e){return console.log(e),e.data}).catch(function(e){return e})},createUser:function(e,t,n){var r=this;return Q.a.post("/api/auth/create",{username:e,password:t,email:n}).then(function(e){return"SequelizeUniqueConstraintError"==e.data.name?{error:"UniqueConstraintError"}:r.sendAuth(e.data.username,e.data.password).then(function(e){return{statusCode:200,hash:e.hash}})}).catch(function(e){})},getUpcoming:function(){return Q.a.get("/api/event/upcoming").then(function(e){return e.data}).catch(function(e){console.log(e)})},getEvents:function(){return Q.a.get("/api/event").then(function(e){return e.data})},submitComment:function(e,t,n){return Q.a.post("/api/comment",{token:e,eventID:t,content:n})},getComments:function(e){return Q.a.get("/api/comment",{params:{eventID:e}}).then(function(e){return e.data})}};r["a"].use(g["a"]),r["a"].config.productionTip=!1,r["a"].prototype.$api_service=X,new r["a"]({render:function(e){return e(h)},router:G}).$mount("#app")},"64a9":function(e,t,n){},"69a1":function(e,t,n){"use strict";var r=n("222a"),o=n.n(r);o.a},c742:function(e,t,n){}});
//# sourceMappingURL=app.bfc9672e.js.map