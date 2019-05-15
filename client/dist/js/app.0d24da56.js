(function(e){function t(t){for(var r,i,a=t[0],u=t[1],c=t[2],m=0,p=[];m<a.length;m++)i=a[m],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0d95":function(e,t,n){},2906:function(e,t,n){"use strict";var r=n("0d95"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("page-header",{attrs:{token:e.token},on:{signOut:e.signOut}}),n("RouterView",{attrs:{currentEvent:e.currentEvent,token:e.token},on:{getToken:e.getToken,upcomingEvent:e.routeToEvent}})],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header"},[n("div",{staticClass:"inline"},[n("button",{on:{click:e.goHome}},[e._v("Home")]),n("h1",[e._v("Film Buffs")]),e.token?n("button",{on:{click:e.signOut}},[e._v("Sign Out")]):e._e()])])},a=[],u={name:"PageHeader",props:{token:{type:String}},methods:{goHome:function(){this.$router.push({name:"Home"})},signOut:function(){this.$emit("signOut")}}},c=u,l=(n("2906"),n("2877")),m=Object(l["a"])(c,i,a,!1,null,"409d0dfc",null),p=m.exports,d={name:"app",components:{PageHeader:p},data:function(){return{token:"",currentEvent:{}}},methods:{getToken:function(e){this.token=e},signOut:function(){this.token="",this.$router.push({name:"LogIn"})},routeToEvent:function(e){this.currentEvent=e,this.$router.push({name:"Event"})}}},v=d,g=(n("034f"),Object(l["a"])(v,o,s,!1,null,null,null)),h=g.exports,f=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{attrs:{id:"errors"}},[e.errors.uniqueConstraintError?n("div",{attrs:{id:"unique-constraint"}},[n("h2",[e._v("Username already taken!")])]):e._e(),e.errors.nullFieldsError?n("div",{attrs:{id:"null-fields"}},[n("h2",[e._v("\n        Please be sure to fill in all fields before logging in or signing up!\n      ")])]):e._e(),e.errors.invalidLogInError?n("div",{attrs:{id:"invalid-login"}},[n("h2",[e._v("Incorrect username or password")])]):e._e()]),n("div",{attrs:{id:"login"}},[n("label",{attrs:{for:"logInUsername"}},[e._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.logInUsername,expression:"logInUsername"}],attrs:{id:"logInUsername",type:"text"},domProps:{value:e.logInUsername},on:{input:function(t){t.target.composing||(e.logInUsername=t.target.value)}}}),n("label",{attrs:{for:"logInPassword"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.logInPassword,expression:"logInPassword"}],attrs:{id:"logInPassword",type:"password"},domProps:{value:e.logInPassword},on:{input:function(t){t.target.composing||(e.logInPassword=t.target.value)}}}),n("button",{on:{click:e.logIn}},[e._v("Log In")])]),n("div",{attrs:{id:"sign-up"}},[n("label",{attrs:{for:"signUpUsername"}},[e._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signUpUsername,expression:"signUpUsername"}],attrs:{id:"signUpUsername",type:"text"},domProps:{value:e.signUpUsername},on:{input:function(t){t.target.composing||(e.signUpUsername=t.target.value)}}}),n("label",{attrs:{for:"signUpPassword"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signUpPassword,expression:"signUpPassword"}],attrs:{id:"signUpPassword",type:"password"},domProps:{value:e.signUpPassword},on:{input:function(t){t.target.composing||(e.signUpPassword=t.target.value)}}}),n("label",{attrs:{for:"email"}},[e._v("Email Address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("button",{on:{click:e.signUp}},[e._v("Sign Up")])])])},_=[],b={name:"LogIn",data:function(){return{logInUsername:"",logInPassword:"",signUpUsername:"",signUpPassword:"",email:"",errors:{uniqueConstraintError:!1,nullFieldsError:!1,invalidLogInError:!1}}},methods:{clearErrors:function(){for(var e in this.errors)this.errors[e]=!1},showError:function(e){this.clearErrors(),this.errors[e]=!0},logIn:function(e){var t=this;this.logInUsername.length>0&&this.logInPassword.length>0?(this.clearErrors(),this.$api_service.sendAuth(this.logInUsername,this.logInPassword).then(function(e){e.hash?(console.log(e),t.$emit("getToken",e.hash),t.$router.push({name:"Home"})):t.showError("invalidLogInError")})):this.showError("nullFieldsError")},signUp:function(e){var t=this;this.signUpUsername.length>0&&this.signUpPassword.length>0&&this.email.length>0?this.$api_service.createUser(this.signUpUsername,this.signUpPassword,this.email).then(function(e){"UniqueConstraintError"==e.error?t.showError("uniqueConstraintError"):200==e.statusCode&&(t.clearErrors(),t.$emit("getToken",e.hash),t.$router.push({name:"Home"}))}):this.showError("nullFieldsError")}}},E=b,U=Object(l["a"])(E,w,_,!1,null,"5ec7431c",null),P=U.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{attrs:{id:"errors"}}),n("div",{attrs:{id:"navigation"}},[n("button",[e._v("View Past Events")]),n("button",{on:{click:e.upcomingEvent}},[e._v("View Upcoming Event")]),n("button",[e._v("View your profile")])])])},C=[],I={name:"Home",data:function(){return{errors:{}}},props:{token:{type:String}},methods:{checkToken:function(){0==this.token.length&&this.$router.push({name:"LogIn"})},upcomingEvent:function(){var e=this;this.$api_service.getUpcoming().then(function(t){console.log(t),e.$emit("upcomingEvent",t)}).catch(function(e){console.log(e)})}},beforeMount:function(){this.checkToken()}},y=I,O=Object(l["a"])(y,k,C,!1,null,"2cf4b49e",null),$=O.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event"},[n("h1",[e._v(e._s(e.currentEvent.movieTitle))]),n("h2",[e._v("Where: "+e._s(e.currentEvent.theater))]),n("h2",[e._v("When: "+e._s(e.currentEvent.date))]),n("h2",[e._v("Coffee: "+e._s(e.currentEvent.coffeeShop))]),n("div",{attrs:{id:"errors"}}),n("Forum",{attrs:{token:e.token,currentEventID:e.currentEvent.id}})],1)},j=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"forum"},[n("div",{staticClass:"comment-form"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newCommentValue,expression:"newCommentValue"}],attrs:{draggable:"false",rows:"4",cols:"50"},domProps:{value:e.newCommentValue},on:{input:function(t){t.target.composing||(e.newCommentValue=t.target.value)}}}),n("button",{on:{click:e.submitComment}},[e._v("Submit Comment")])]),e._l(e.comments,function(t){return n("div",{staticClass:"comment-list"},[n("div",{staticClass:"comment"},[n("h3",[e._v(e._s(t.username)+" says:")]),n("p",[e._v('"'+e._s(t.content)+'"')]),n("p",[e._v("Posted at: "+e._s(t.date))])])])})],2)},S=[],V={name:"Forum",data:function(){return{errors:{},newCommentValue:"",comments:[]}},props:{token:"",currentEventID:""},methods:{submitComment:function(){var e=this;this.$api_service.submitComment(this.token,this.currentEventID,this.newCommentValue).then(function(t){e.getComments()}),this.newCommentValue=""},getComments:function(){var e=this;this.$api_service.getComments(this.currentEventID).then(function(t){e.comments=t})}},beforeMount:function(){this.getComments()}},H=V,q=(n("fb47"),Object(l["a"])(H,T,S,!1,null,"abda42be",null)),F=q.exports,L={name:"Event",data:function(){return{errors:{}}},props:{currentEvent:{type:Object},token:""},components:{Forum:F}},D=L,M=Object(l["a"])(D,x,j,!1,null,"d9834056",null),N=M.exports,A=new f["a"]({routes:[{path:"/home",component:$,name:"Home",props:!0},{path:"/",component:P,name:"LogIn",props:!0},{path:"/event",component:N,name:"Event",props:!0}]}),J=(n("7f7f"),n("bc3a")),W=n.n(J),z={sendAuth:function(e,t){return W.a.post("/api/auth",{username:e,password:t}).then(function(e){return console.log(e),e.data}).catch(function(e){return e})},createUser:function(e,t,n){var r=this;return W.a.post("/api/auth/create",{username:e,password:t,email:n}).then(function(e){return"SequelizeUniqueConstraintError"==e.data.name?{error:"UniqueConstraintError"}:r.sendAuth(e.data.username,e.data.password).then(function(e){return{statusCode:200,hash:e.hash}})}).catch(function(e){})},getUpcoming:function(){return W.a.get("/api/event/upcoming").then(function(e){return e.data}).catch(function(e){console.log(e)})},submitComment:function(e,t,n){return W.a.post("/api/comment",{token:e,eventID:t,content:n})},getComments:function(e){return W.a.get("/api/comment",{params:{eventID:e}}).then(function(e){return e.data})}};r["a"].use(f["a"]),r["a"].config.productionTip=!1,r["a"].prototype.$api_service=z,new r["a"]({render:function(e){return e(h)},router:A}).$mount("#app")},"64a9":function(e,t,n){},f9b9:function(e,t,n){},fb47:function(e,t,n){"use strict";var r=n("f9b9"),o=n.n(r);o.a}});
//# sourceMappingURL=app.0d24da56.js.map