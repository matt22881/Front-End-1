(this["webpackJsonphow-to"]=this["webpackJsonphow-to"]||[]).push([[0],{52:function(e,t,a){e.exports=a(78)},57:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(44),c=a.n(o),l=(a(57),a(5)),s=a(17),m=a(2),i=(a(51),Object(n.createContext)()),u=Object(n.createContext)(),p=a(6),d=a(7);function b(){var e=Object(p.a)(["\n    background: ",";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]);return b=function(){return e},e}var h=d.a.header(b(),"#191943");function f(){var e=Object(p.a)(["\nfont-size: 2rem;\ncolor: white;\n"]);return f=function(){return e},e}function E(){var e=Object(p.a)(["\ndisplay: flex;\n"]);return E=function(){return e},e}function g(){var e=Object(p.a)(["\nbackground-color: white;\nwidth: 100%;\ncolor: purple;\npadding: 10px;\nborder-radius: 25px;\n"]);return g=function(){return e},e}var O=d.a.button(g()),v=d.a.nav(E()),j=d.a.div(f()),w=function e(t){return r.a.createElement(e.Block,null,r.a.createElement(j,null,"HOW TO..."),r.a.createElement(v,null,r.a.createElement(s.b,{to:"/"},r.a.createElement(O,{type:"button",className:"btn"},"Home")),r.a.createElement(s.b,{to:"/signup"},r.a.createElement(O,{type:"button",className:"btn"},"Sign Up")),r.a.createElement(s.b,{to:"/login"},r.a.createElement(O,{type:"button",className:"btn"},"Login"))))},N=w;w.Block=h;var y=function(e){return r.a.createElement(N,null)},C=a(27),x=a(14),R=a(8),S=a(4),k=a(20),T=a.n(k);function F(){var e=Object(p.a)(["\n        background-color: white;\n        width: 100%;\n        color: purple;\n        padding: 10px;\n        border-radius: 25px;\n"]);return F=function(){return e},e}function P(){var e=Object(p.a)(["\n        padding: 1rem;\n        display:flex;\n        flex-direction:column;\n    "]);return P=function(){return e},e}function L(){var e=Object(p.a)(["\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        "]);return L=function(){return e},e}var A=d.a.form(L()),q=d.a.label(P()),B=d.a.button(F()),M=S.b().shape({name:S.e().required("Please Enter Username").min(5,"Name Is Too Short."),password:S.e().required("Please Enter Password").min(6,"Password is Too Short - Must Be Longer Than 8 Characters.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),notRobot:S.a().oneOf([!0])}),U=function(){var e=Object(n.useState)({name:"",password:"",notRobot:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1];console.log(a);var c=Object(n.useState)(!0),s=Object(l.a)(c,2),m=s[0],i=s[1];Object(n.useEffect)((function(){M.isValid(a).then((function(e){i(!e)}))}),[a]);var u=Object(n.useState)({name:"",password:"",notRobot:!1}),p=Object(l.a)(u,2),d=p[0],b=p[1],h=function(e){e.persist(),function(e){S.c(M,e.target.name).validate(e.target.value).then((function(t){b(Object(R.a)(Object(R.a)({},d),{},Object(x.a)({},e.target.name,"")))})).catch((function(t){b(Object(R.a)(Object(R.a)({},d),{},Object(x.a)({},e.target.name,t.errors[0])))}))}(e);var t="checkbox"===e.target.type?e.target.checked:e.target.value;o(Object(R.a)(Object(R.a)({},a),{},Object(x.a)({},e.target.name,t)))},f=Object(n.useState)([]),E=Object(l.a)(f,2),g=E[0],O=E[1];return console.log(g),r.a.createElement(A,{onSubmit:function(e){e.preventDefault(),T.a.post("https://reqres.in/api/users",a).then((function(e){O((function(t){return[].concat(Object(C.a)(t),[e.data])})),o({name:"",password:"",notRobot:""})})).catch((function(e){return console.log(e.response)}))}},r.a.createElement(q,{htmlFor:"name"},"Username",r.a.createElement("input",{type:"text",name:"name",value:a.name,onChange:h}),d.name.length>0?r.a.createElement("p",{className:"error"},d.name):null),r.a.createElement(q,{htmlFor:"password"},"Password",r.a.createElement("input",{type:"text",name:"password",value:a.password,onChange:h}),d.password.length>0?r.a.createElement("p",{className:"error"},d.password):null),r.a.createElement(q,{htmlFor:"notRobot"},"I Am Not A Robot",r.a.createElement("input",{type:"checkbox",name:"notRobot",checked:a.notRobot,onChange:h}),d.notRobot.length>0?r.a.createElement("p",{className:"error"},d.notRobot):null),r.a.createElement(B,{disabled:m},"Login"))},I=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(U,null))};function z(){var e=Object(p.a)(["\n        background-color: white;\n        width: 100%;\n        color: purple;\n        padding: 10px;\n        border-radius: 25px;\n"]);return z=function(){return e},e}function D(){var e=Object(p.a)(["\n        padding: 1rem;\n        display:flex;\n        flex-direction:column;\n    "]);return D=function(){return e},e}function V(){var e=Object(p.a)(["\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        "]);return V=function(){return e},e}var W=d.a.form(V()),_=d.a.label(D()),H=d.a.button(z()),J=S.b().shape({name:S.e().required().min(5,"Username is Too Short - Must Be Longer Than 5 Characters."),firstName:S.e().required().min(2,"First Name Is Too Short"),lastName:S.e().required().min(2,"Last Name Is Too Short"),email:S.e().email().required("Must Be Valid Email"),emailConfirmation:S.e().oneOf([S.d("email"),null],"Emails must match"),password:S.e().required("Please Make A Password.").min(6,"Password is Too Short - Must Be Longer Than 8 Characters.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),passwordConfirmation:S.e().oneOf([S.d("password"),null],"Passwords must match"),accountType:S.e(),notRobot:S.a().oneOf([!0])}),Z=function(){var e=Object(n.useState)({name:"",firstName:"",lastName:"",email:"",emailConfirmation:"",password:"",passwordConfirmation:"",accountType:"",notRobot:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1];console.log(a);var c=Object(n.useState)(!0),s=Object(l.a)(c,2),m=s[0],i=s[1];Object(n.useEffect)((function(){J.isValid(a).then((function(e){i(!e)}))}),[a]);var u=Object(n.useState)({name:"",firstName:"",lastName:"",email:"",password:"",accountType:"",notRobot:""}),p=Object(l.a)(u,2),d=p[0],b=p[1],h=function(e){e.persist(),function(e){S.c(J,e.target.name).validate(e.target.value).then((function(t){b(Object(R.a)(Object(R.a)({},d),{},Object(x.a)({},e.target.name,"")))})).catch((function(t){b(Object(R.a)(Object(R.a)({},d),{},Object(x.a)({},e.target.name,t.errors[0])))}))}(e);var t="checkbox"===e.target.type?e.target.checked:e.target.value;o(Object(R.a)(Object(R.a)({},a),{},Object(x.a)({},e.target.name,t)))},f=Object(n.useState)([]),E=Object(l.a)(f,2),g=E[0],O=E[1];return console.log(g),r.a.createElement(W,{onSubmit:function(e){e.preventDefault(),T.a.post("https://reqres.in/api/users",a).then((function(e){O((function(t){return[].concat(Object(C.a)(t),[e.data])})),o({name:"",firstName:"",lastName:"",email:"",password:"",accountType:"",notRobot:""})})).catch((function(e){return console.log(e.response)}))}},r.a.createElement(_,{htmlFor:"name"},"Username",r.a.createElement("input",{type:"text",name:"name",value:a.name,onChange:h,placeholder:"Enter Username."}),d.name.length>0?r.a.createElement("p",{className:"error"},d.name):null),r.a.createElement(_,{htmlFor:"firstName"},"First Name",r.a.createElement("input",{type:"text",name:"firstName",value:a.firstName,onChange:h,placeholder:"Enter First Name."}),d.firstName.length>0?r.a.createElement("p",{className:"error"},d.firstName):null),r.a.createElement(_,{htmlFor:"lastName"},"Last Name",r.a.createElement("input",{type:"text",name:"lastName",value:a.lastName,onChange:h,placeholder:"Enter Last Name."}),d.lastName.length>0?r.a.createElement("p",{className:"error"},d.lastName):null),r.a.createElement(_,{htmlFor:"email"},"Email",r.a.createElement("input",{type:"text",name:"email",value:a.email,onChange:h,placeholder:"Enter Email."}),d.lastName.length>0?r.a.createElement("p",{className:"error"},d.lastName):null),r.a.createElement(_,{htmlFor:"emailConfirmation"},"Confirm Email",r.a.createElement("input",{type:"text",name:"emailConfirmation",value:a.emailConfirmation,onChange:h,placeholder:"Confirm Email."})),r.a.createElement(_,{htmlFor:"password"},"Password",r.a.createElement("input",{type:"password",name:"password",value:a.password,onChange:h,placeholder:"Enter Password."}),d.password.length>0?r.a.createElement("p",{className:"error"},d.password):null),r.a.createElement(_,{htmlFor:"passwordConfirmation"},"Confirm Password",r.a.createElement("input",{type:"password",name:"passwordConfirmation",value:a.passwordConfirmation,onChange:h,placeholder:"Confirm Password."})),r.a.createElement(_,{htmlFor:"accountType"},"Reader or Contributor",r.a.createElement("select",{name:"accountType",id:"accountType",value:a.accountType,onChange:h},r.a.createElement("option",{value:"select-account"},"Please Select an Account"),r.a.createElement("option",{value:"reader"},"Reader"),r.a.createElement("option",{value:"contributor"},"Contributor")),d.accountType.length>0?r.a.createElement("p",{className:"error"},d.accountType):null),r.a.createElement(_,{htmlFor:"notRobot"},"I Am Not A Robot",r.a.createElement("input",{type:"checkbox",id:"notRobot",name:"notRobot",checked:a.notRobot,onChange:h}),d.notRobot.length>0?r.a.createElement("p",{className:"error"},d.notRobot):null),r.a.createElement(H,{disabled:m},"Login"))},$=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(Z,null))};function G(e){var t=e.user,a=t.employee_name,n=t.employee_salary,o=t.employee_age;return r.a.createElement("div",{className:"user-card"},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"salary"},"Salary: ",r.a.createElement("em",null,n)),r.a.createElement("div",{className:"age"},"Age: ",r.a.createElement("strong",null,o)))}var K=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),o=a[0];a[1];return Object(n.useEffect)((function(){T.a.get("http://dummy.restapiexample.com/api/v1/employees",{params:{ID:1}}).then((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"user-list"},o.map((function(e){return r.a.createElement(G,{key:e.id,user:e})})))},Q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(K,null))};var X=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=(t[1],Object(n.useState)(null)),c=Object(l.a)(o,2),p=c[0];return c[1],r.a.createElement(i.Provider,{value:a},r.a.createElement(u.Provider,{value:p},r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(m.b,{exact:!0,path:"/login"},r.a.createElement(I,null)),r.a.createElement(m.b,{exact:!0,path:"/signup"},r.a.createElement($,null)),r.a.createElement(m.b,{exact:!0,path:"/users"},r.a.createElement(Q,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.bd455be5.chunk.js.map