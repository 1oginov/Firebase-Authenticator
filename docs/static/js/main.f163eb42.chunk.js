(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(72)},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(29),i=n.n(r),l=n(6),c=function(e){var t=e.apiKey,n=e.authDomain,r=e.buttonTitle,i=e.databaseUrl,l=e.handleInputChange,c=e.handleSubmit,o=e.messagingSenderId,u=e.projectId,p=e.redirectRefreshTokenPlaceholder,s=e.redirectUrl,d=e.signInOptionEmail,m=e.signInOptionGithub,E=e.signInOptionGoogle,b=e.storageBucket,h=e.title;return a.createElement("form",{onSubmit:c},a.createElement("div",null,"Title",a.createElement("br",null),a.createElement("input",{name:"title",onChange:l,value:h})),a.createElement("fieldset",null,a.createElement("legend",null,"Configuration"),a.createElement("div",null,"API key",a.createElement("br",null),a.createElement("input",{name:"apiKey",onChange:l,value:t})),a.createElement("div",null,"Auth domain",a.createElement("br",null),a.createElement("input",{name:"authDomain",onChange:l,value:n})),a.createElement("div",null,"Database URL",a.createElement("br",null),a.createElement("input",{name:"databaseUrl",onChange:l,value:i})),a.createElement("div",null,"Messaging sender ID",a.createElement("br",null),a.createElement("input",{name:"messagingSenderId",onChange:l,value:o})),a.createElement("div",null,"Project ID",a.createElement("br",null),a.createElement("input",{name:"projectId",onChange:l,value:u})),a.createElement("div",null,"Storage bucket",a.createElement("br",null),a.createElement("input",{name:"storageBucket",onChange:l,value:b}))),a.createElement("fieldset",null,a.createElement("legend",null,"Redirect"),a.createElement("div",null,"URL",a.createElement("br",null),a.createElement("input",{name:"redirectUrl",onChange:l,value:s})),a.createElement("div",null,"Refresh token placeholder",a.createElement("br",null),a.createElement("input",{name:"redirectRefreshTokenPlaceholder",onChange:l,value:p}))),a.createElement("fieldset",null,a.createElement("legend",null,"Sign in options"),a.createElement("div",null,a.createElement("label",{htmlFor:"signInOptionEmail"},a.createElement("input",{checked:d,id:"signInOptionEmail",name:"signInOptionEmail",onChange:l,type:"checkbox"}),"Email")),a.createElement("div",null,a.createElement("label",{htmlFor:"signInOptionGithub"},a.createElement("input",{checked:m,id:"signInOptionGithub",name:"signInOptionGithub",onChange:l,type:"checkbox"}),"GitHub")),a.createElement("div",null,a.createElement("label",{htmlFor:"signInOptionGoogle"},a.createElement("input",{checked:E,id:"signInOptionGoogle",name:"signInOptionGoogle",onChange:l,type:"checkbox"}),"Google"))),a.createElement("div",null,a.createElement("button",{type:"submit"},r)))},o=n(19),u=n(12),p=n(3),s=n(32),d=n.n(s),m=Object(p.a)(Object(p.e)(function(e){var t=e.initial;return{apiKey:t&&t.config.apiKey||"",authDomain:t&&t.config.authDomain||"",databaseUrl:t&&t.config.databaseURL||"",messagingSenderId:t&&t.config.messagingSenderId||"",projectId:t&&t.config.projectId||"",redirectRefreshTokenPlaceholder:t&&t.redirect.refreshTokenPlaceholder||"%refreshToken%",redirectUrl:t&&t.redirect.url||"",signInOptionEmail:!!t&&t.signInOptions.indexOf("email")>=0,signInOptionGithub:!!t&&t.signInOptions.indexOf("github")>=0,signInOptionGoogle:!!t&&t.signInOptions.indexOf("google")>=0,storageBucket:t&&t.config.storageBucket||"",title:t&&t.title||""}},{handleInputChange:function(){return function(e){var t=e.target,n=t.checked,a=t.name,r=t.type,i=t.value;return Object(u.a)({},a,"checkbox"===r?n:i)}}}),Object(p.c)({handleSubmit:function(e){var t=e.apiKey,n=e.authDomain,a=e.databaseUrl,r=e.messagingSenderId,i=e.onSubmit,l=e.projectId,c=e.redirectRefreshTokenPlaceholder,u=e.redirectUrl,p=e.signInOptionEmail,s=e.signInOptionGithub,m=e.signInOptionGoogle,E=e.storageBucket,b=e.title;return function(e){e.preventDefault(),i({config:{apiKey:t,authDomain:n,databaseURL:a,messagingSenderId:r,projectId:l,storageBucket:E},id:d()(),redirect:{refreshTokenPlaceholder:c,url:u},signInOptions:[].concat(Object(o.a)(p?["email"]:[]),Object(o.a)(s?["github"]:[]),Object(o.a)(m?["google"]:[])),title:b})}}}))(c),E=function(e){var t=e.handleBackClick,n=e.onSubmit;return a.createElement(a.Fragment,null,a.createElement("h1",null,"Create Firebase app"),a.createElement("div",null,a.createElement("button",{onClick:t,type:"button"},"Back")),a.createElement(m,{buttonTitle:"Create",onSubmit:n}))},b=n(9),h=function(e,t){return function(n){n({payload:{params:t,route:e},type:"NAVIGATE"})}},g=function(e){return function(t){t({payload:e,type:"FIREBASE_APP_CREATED"})}},f=function(e){return function(t){t({payload:e,type:"FIREBASE_APP_SELECTED"})}},v=n(18),A={navigate:h},O=function(e){return Object(p.a)(Object(l.b)(null,A),Object(p.c)(function(){var t={};return Object.keys(e).forEach(function(n){t[n]=function(t){var a=t.navigate,r=Object(v.a)(t,["navigate"]);return function(t){var i=e[n];if("function"===typeof i){var l=i(r,t),c=l.params,o=l.route;a(o,c)}else{var u=e[n];a(u)}}}}),t}))},I={createFirebaseApp:g,selectFirebaseApp:f},k=Object(p.a)(O({handleBackClick:"HOME",handleFirebaseAppNavigate:"FIREBASE_APP"}),Object(l.b)(null,I),Object(p.c)({onSubmit:function(e){var t=e.createFirebaseApp,n=e.handleFirebaseAppNavigate,a=e.selectFirebaseApp;return function(e){t(e),a(e.id),n()}}}))(E),C=n(33),S=n(34),F=n(39),y=n(35),P=n(40),j=n(15),_=n.n(j),R=function(e){var t=e.email,n=e.handleContinueClick,r=e.handleSignOutClick,i=e.name,l=e.pictureUrl;return a.createElement(a.Fragment,null,a.createElement("div",null,"Signed in as ",a.createElement("strong",null,i)," ",a.createElement("em",null,t)),a.createElement("div",null,a.createElement("button",{onClick:n,type:"button"},"Continue")),a.createElement("div",null,a.createElement("button",{onClick:r,type:"button"},"Sign out")),a.createElement("div",null,a.createElement("img",{alt:"User",src:l})))},D=Object(p.a)(Object(p.c)({handleContinueClick:function(e){var t=e.app,n=e.appInstance;return function(){var e=n.auth().currentUser;if(!e)throw new Error("User is missing");var a,r=e.refreshToken;a=t.redirect.url.replace(t.redirect.refreshTokenPlaceholder,r),window.location=a}},handleSignOutClick:function(e){var t=e.appInstance;return function(){t.auth().signOut()}}}),Object(p.d)(function(e){var t=e.appInstance.auth().currentUser;if(!t)throw new Error("User is missing");return{email:t.email||"",name:t.displayName||"",pictureUrl:t.photoURL||""}}))(R),B=n(36),w=n.n(B),U=function(e){var t=e.appInstance,n={callbacks:{signInSuccessWithAuthResult:function(){return!1}},signInOptions:e.signInOptions.map(function(e){switch(e){case"email":return _.a.auth.EmailAuthProvider.PROVIDER_ID;case"github":return _.a.auth.GithubAuthProvider.PROVIDER_ID;case"google":return _.a.auth.GoogleAuthProvider.PROVIDER_ID;default:return}})};return a.createElement(w.a,{firebaseAuth:t.auth(),uiConfig:n})},T=Object(p.b)({componentDidCatch:function(){var e;(e=console).error.apply(e,arguments)}})(U),G=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(F.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={appInstance:void 0,isAuthenticated:void 0},n}return Object(P.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.app,n=_.a.initializeApp(t.config);try{this.unregisterAuthObserver=n.auth().onAuthStateChanged(function(t){e.setState({isAuthenticated:Boolean(t)})})}catch(a){console.error(a)}console.log("Firebase app initialized",t.config),this.setState({appInstance:n})}},{key:"componentWillUnmount",value:function(){var e=this.props.app,t=this.state.appInstance;this.unregisterAuthObserver&&this.unregisterAuthObserver(),t&&t.delete().then(function(){return console.log("Firebase app deleted",e.config)})}},{key:"renderAuthComponent",value:function(){var e=this.props.app,t=this.state,n=t.appInstance,r=t.isAuthenticated;return n?!1===r?a.createElement(T,{appInstance:n,signInOptions:e.signInOptions}):!0===r?a.createElement(D,{app:e,appInstance:n}):a.createElement("div",null,"Loading authentication state..."):a.createElement("div",null,"Initializing Firebase app...")}},{key:"render",value:function(){var e=this.props,t=e.app,n=e.handleBackClick,r=e.handleDeleteClick,i=e.handleShareClick,l=e.handleUpdateClick;return a.createElement(a.Fragment,null,a.createElement("h1",null,t.title),a.createElement("div",null,a.createElement("button",{onClick:n,type:"button"},"Back"),a.createElement("button",{onClick:l,type:"button"},"Update"),a.createElement("button",{onClick:i,type:"button"},"Share")),this.renderAuthComponent(),a.createElement("div",null,a.createElement("pre",null,JSON.stringify(t,null,2))),a.createElement("div",null,a.createElement("button",{onClick:r,type:"button"},"Delete")))}}]),t}(a.Component),L={deleteFirebaseApp:function(e){return function(t){t({payload:e,type:"FIREBASE_APP_DELETED"})}}},N=Object(p.a)(O({handleBackClick:"HOME",handleUpdateClick:"UPDATE_FIREBASE_APP"}),Object(l.b)(function(e){var t=e.currentFirebaseApp;return{app:e.firebaseApps[t]}},L),Object(p.c)({handleDeleteClick:function(e){var t=e.app,n=e.deleteFirebaseApp,a=e.handleBackClick;return function(){a(),n(t.id)}},handleShareClick:function(e){var t=e.app;return function(){prompt("Share this link:",function(e){var t=new URL(window.location.href);return t.search="",t.searchParams.append("firebase-app",JSON.stringify(e)),t.toString()}(t))}}}))(G),x=function(e){var t=e.app,n=e.onSelect;return a.createElement("div",null,t.title,a.createElement("button",{onClick:function(){return n(t.id)},type:"button"},"Select"))},M=function(e){var t=e.apps,n=e.onSelect;return a.createElement("div",null,t.map(function(e,t){return a.createElement(x,{app:e,key:t,onSelect:n})}))},V=function(e){var t=e.apps,n=e.handleCreateFirebaseAppClick,r=e.onSelect;return a.createElement(a.Fragment,null,a.createElement("h1",null,"Home"),a.createElement("div",null,a.createElement("button",{onClick:n,type:"button"},"Create Firebase app")),a.createElement(M,{apps:t,onSelect:r}))},K={selectFirebaseApp:f},H=Object(p.a)(O({handleCreateFirebaseAppClick:"CREATE_FIREBASE_APP",handleFirebaseAppNavigate:"FIREBASE_APP"}),Object(l.b)(function(e){var t=e.firebaseApps;return{apps:Object.keys(t).map(function(e){return t[e]})}},K),Object(p.c)({onSelect:function(e){var t=e.handleFirebaseAppNavigate,n=e.selectFirebaseApp;return function(e){n(e),t()}}}))(V),J=function(e){var t=e.app,n=e.handleBackClick,r=e.onSubmit;return a.createElement(a.Fragment,null,a.createElement("h1",null,"Update Firebase app"),a.createElement("div",null,a.createElement("button",{onClick:n,type:"button"},"Back")),a.createElement(m,{buttonTitle:"Update",initial:t,onSubmit:r}))},W={updateFirebaseApp:function(e,t){return function(n){n({payload:Object(b.a)({},t,{id:e}),type:"FIREBASE_APP_UPDATED"})}}},X=Object(p.a)(O({handleBackClick:"FIREBASE_APP"}),Object(l.b)(function(e){var t=e.currentFirebaseApp;return{app:e.firebaseApps[t]}},W),Object(p.c)({onSubmit:function(e){var t=e.app,n=e.handleBackClick,a=e.updateFirebaseApp;return function(e){a(t.id,e),n()}}}))(J),z=function(e){switch(e.route){case"CREATE_FIREBASE_APP":return a.createElement(k,null);case"FIREBASE_APP":return a.createElement(N,null);case"UPDATE_FIREBASE_APP":return a.createElement(X,null);default:return a.createElement(H,null)}},$={createFirebaseApp:g,navigate:h,selectFirebaseApp:f},q=Object(p.a)(Object(l.b)(function(e){return{currentFirebaseApp:e.currentFirebaseApp,firebaseApps:e.firebaseApps,route:e.route}},$),Object(p.b)({componentDidMount:function(){var e=this.props,t=e.createFirebaseApp,n=e.currentFirebaseApp,a=e.firebaseApps,r=e.navigate,i=e.selectFirebaseApp,l=function(e){var t=new URL(e).searchParams.get("firebase-app");if(t)try{return JSON.parse(t)}catch(n){console.error(n)}}(window.location.href);l&&!a[l.id]?(t(l),i(l.id),r("FIREBASE_APP")):n&&a[n]&&r("FIREBASE_APP")}}))(z),Q=n(14),Y=n(37),Z=n.n(Y),ee=n(38),te={currentFirebaseApp:"",firebaseApps:{},route:"HOME",routeParams:{}},ne=["currentFirebaseApp","firebaseApps"];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=document.getElementById("container"),re=function(e){var t=[ee.a],n=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:Q.c)(Q.a.apply(void 0,t),Z()(ne));return Object(Q.d)(e,n)}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAVIGATE":return Object(b.a)({},e,{route:t.payload.route,routeParams:t.payload.params?t.payload.params:{}});case"FIREBASE_APP_CREATED":case"FIREBASE_APP_UPDATED":return Object(b.a)({},e,{firebaseApps:Object(b.a)({},e.firebaseApps,Object(u.a)({},t.payload.id,t.payload))});case"FIREBASE_APP_DELETED":var n=e.firebaseApps,a=(n[t.payload],Object(v.a)(n,[t.payload]));return Object(b.a)({},e,{currentFirebaseApp:t.payload===e.currentFirebaseApp?"":e.currentFirebaseApp,firebaseApps:a});case"FIREBASE_APP_SELECTED":return Object(b.a)({},e,{currentFirebaseApp:t.payload});default:return e}});if(!ae)throw new Error("Container is missing");i.a.render(a.createElement(l.a,{store:re},a.createElement(q,null)),ae),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.f163eb42.chunk.js.map