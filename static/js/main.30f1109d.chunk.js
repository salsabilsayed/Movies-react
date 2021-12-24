(this["webpackJsonpmovie-react"]=this["webpackJsonpmovie-react"]||[]).push([[0],{115:function(e,t,a){},127:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},255:function(e,t,a){},258:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(26),r=a.n(n),o=(a(127),a(36)),i=a(7),l=a(8),d=a(1),j=c.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),m=function(e){var t=localStorage.getItem("token"),a=Object(s.useState)(t),c=Object(l.a)(a,2),n=c[0],r=c[1],o={token:n,isLoggedIn:!!n,login:function(e){r(e)},logout:function(){r(null)}};return Object(d.jsx)(j.Provider,{value:o,children:e.children})},b=j,u=a(28),h=a.n(u),O=(a(146),function(){return Object(d.jsx)("h1",{className:"title text-center pt-5 pb-4",children:"Search your favourite Movies"})}),p=a(266),x=(a(147),function(e){return Object(d.jsx)("p",{className:"error py-2",children:e.children})}),g=(a(148),function(e){var t=e.setMovieName,a=e.movieName,s=e.error,c=e.setError;return Object(d.jsxs)("div",{className:"inputContainer mx-auto my-4",children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(p.a.Group,{className:"mb-3",children:Object(d.jsx)(p.a.Control,{type:"text",placeholder:"Enter movie...",value:a,onChange:function(e){e.target.value||c("Please enter a movie name!"),t(e.target.value)}})})}),s&&Object(d.jsx)(x,{children:s})]})}),v=(a(151),function(e){var t=e.title,a=e.poster,s=e.year;return Object(d.jsxs)("div",{className:"position-relative mb-4 overflow-hidden main-movie-info",children:[Object(d.jsx)("img",{src:a,className:"w-100",alt:t}),Object(d.jsxs)("div",{className:"movie-info",children:[Object(d.jsx)("h4",{children:t}),Object(d.jsx)("p",{className:"mb-0",children:s})]})]})}),f=a(262),N=a(263),w=a(116),S=function(e){var t=e.data;return Object(d.jsx)(f.a,{children:Object(d.jsx)("div",{className:"py-4",children:Object(d.jsx)(N.a,{children:t.map((function(e,t){return Object(d.jsx)(w.a,{xs:12,sm:6,md:4,lg:3,children:Object(d.jsx)(v,{poster:e.Poster,title:e.Title,year:e.Year})},t)}))})})})},k=(a(152),function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(null),r=Object(l.a)(n,2),o=r[0],i=r[1],j=Object(s.useState)("batman"),m=Object(l.a)(j,2),b=m[0],u=m[1];return Object(s.useEffect)((function(){h.a.get("https://www.omdbapi.com/?apikey=43dbf631&s=".concat(b)).then((function(e){if(e.data.Error)i("Movie not found!");else{var t=e.data.Search;c(t),i(null)}})).catch((function(e){console.log(e),i("Something went wrong!")}))}),[b]),Object(d.jsxs)("section",{className:"home",children:[Object(d.jsx)(O,{}),Object(d.jsx)(g,{setMovieName:u,movieName:b,error:o,setError:i}),!o&&Object(d.jsx)(S,{data:a})]})}),y=a(2),C=a(68),I=a(32),E=a(65),P=a(66),F=(a(115),function(){var e=Object(i.g)(),t=Object(s.useContext)(b),a=Object(s.useState)(!1),c=Object(l.a)(a,2),n=c[0],r=c[1],o=Object(s.useState)(!1),j=Object(l.a)(o,2),m=j[0],u=j[1],O=I.a().shape({name:I.b().min(3,"Must be 3 characters or more").required("Required"),email:I.b().email("Invalid email").required("Required"),password:I.b().min(6,"Must be 6 characters or more").required("Required")}),g=Object(C.a)({initialValues:{name:"",age:"",email:"",password:""},onSubmit:function(a){console.log(a),h.a.post("https://task-app-nodee.herokuapp.com/users",a).then((function(a){console.log(a.data);var s=a.data.token;localStorage.setItem("token",s),t.login(s),r(!1),u(!1),g.resetForm(),e("/")})).catch((function(e){var t;"ValidatorError"===(null===(t=e.response.data.errors)||void 0===t?void 0:t.age.name)&&r(!0),11e3===e.response.data.code&&u(!0),console.log("Error",e.message)}))},validationSchema:O,validateOnMount:!0});return Object(d.jsx)("section",{className:"auth",children:Object(d.jsxs)(p.a,{className:"containerForm py-5",onSubmit:g.handleSubmit,children:[Object(d.jsx)("h3",{className:"title text-center mb-4",children:"Sign up"}),Object(d.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicName",children:Object(d.jsx)(p.a.Control,Object(y.a)(Object(y.a)({type:"text",placeholder:"Enter name",name:"name"},g.getFieldProps("name")),{},{className:"".concat(g.touched.name&&g.errors.name&&"is-invalid"," \n            ").concat(g.touched.name&&!g.errors.name&&"is-valid","\n            ")}))}),g.touched.name&&g.errors.name&&Object(d.jsx)(x,{children:g.errors.name}),Object(d.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicAge",children:Object(d.jsx)(p.a.Control,Object(y.a)(Object(y.a)({type:"number",placeholder:"Enter your age",name:"age"},g.getFieldProps("age")),{},{className:"".concat(g.touched.age&&n&&"is-invalid"," \n            ").concat(g.touched.age&&!n&&"is-valid","\n            ")}))}),n&&Object(d.jsx)(x,{children:"Age must be a positive number"}),Object(d.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(d.jsx)(p.a.Control,Object(y.a)(Object(y.a)({type:"email",placeholder:"Enter email",name:"email"},g.getFieldProps("email")),{},{className:"".concat(g.touched.email&&g.errors.email&&"is-invalid"," \n            ").concat(g.touched.email&&!g.errors.email&&"is-valid","\n        ")}))}),g.touched.email&&g.errors.email&&Object(d.jsx)(x,{children:g.errors.email}),m&&Object(d.jsx)(x,{children:"Email already exist"}),Object(d.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(d.jsx)(p.a.Control,Object(y.a)(Object(y.a)({type:"password",placeholder:"Password",name:"password"},g.getFieldProps("password")),{},{className:"".concat(g.touched.password&&g.errors.password&&"is-invalid"," \n            ").concat(g.touched.password&&!g.errors.password&&"is-valid")}))}),g.touched.password&&g.errors.password&&Object(d.jsx)(x,{children:g.errors.password}),Object(d.jsxs)("button",{type:"submit",className:"button",disabled:!g.isValid,children:[Object(d.jsx)("span",{className:"mx-2",children:"Register"}),g.isSubmitting&&Object(d.jsx)(E.a,{icon:P.a,className:"fa-spin"})]})]})})}),L=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useContext)(b),r=Object(i.g)(),o=I.a().shape({email:I.b().email("Invalid email").required("Required"),password:I.b().min(6,"Must be 6 characters or more").required("Required")}),j=Object(C.a)({initialValues:{email:"",password:""},onSubmit:function(e){h.a.post("https://task-app-nodee.herokuapp.com/users/login",e).then((function(e){console.log(e.data);var t=e.data.token;localStorage.setItem("token",t),n.login(t),c(!1),j.resetForm(),r("/")})).catch((function(e){e&&c(!0)}))},validationSchema:o,validateOnMount:!0});return Object(d.jsx)("section",{className:"auth",children:Object(d.jsxs)(p.a,{className:"containerForm py-5",onSubmit:j.handleSubmit,children:[Object(d.jsx)("h3",{className:"title text-center mb-4",children:"Login"}),a&&Object(d.jsx)(x,{children:"invalid email or password"}),Object(d.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(d.jsx)(p.a.Control,Object(y.a)(Object(y.a)({type:"email",placeholder:"Enter email",name:"email"},j.getFieldProps("email")),{},{className:"".concat((j.touched.email&&j.errors.email||a)&&"is-invalid"," \n            ").concat(j.touched.email&&!j.errors.email&&"is-valid","\n        ")}))}),j.touched.email&&j.errors.email&&Object(d.jsx)(x,{children:j.errors.email}),Object(d.jsx)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(d.jsx)(p.a.Control,Object(y.a)(Object(y.a)({type:"password",placeholder:"Password",name:"password"},j.getFieldProps("password")),{},{className:"".concat((j.touched.password&&j.errors.password||a)&&"is-invalid"," \n            ").concat(j.touched.password&&!j.errors.password&&"is-valid")}))}),j.touched.password&&j.errors.password&&Object(d.jsx)(x,{children:j.errors.password}),Object(d.jsxs)("button",{type:"submit",className:"button",disabled:!j.isValid,children:[Object(d.jsx)("span",{className:"mx-2",children:"Login"}),j.isSubmitting&&Object(d.jsx)(E.a,{icon:P.a,className:"fa-spin"})]})]})})},q=a(264),M=a(265),B=(a(255),function(){var e=Object(s.useContext)(b),t=e.isLoggedIn;Object(i.g)();return Object(d.jsx)(q.a,{className:"nav",children:Object(d.jsxs)(f.a,{children:[Object(d.jsx)("h2",{className:"title",children:"Search Movies"}),Object(d.jsxs)(M.a,{className:"ml-auto",children:[!t&&Object(d.jsx)(M.a.Link,{children:Object(d.jsx)(o.b,{to:"signup",className:"link",children:"Register"})}),!t&&Object(d.jsx)(M.a.Link,{children:Object(d.jsx)(o.b,{to:"login",className:"link",children:"Login"})}),t&&Object(d.jsx)(M.a.Link,{children:Object(d.jsx)(o.b,{to:"login",onClick:function(){h.a.interceptors.request.use((function(t){return t.headers.Authorization="Bearer ".concat(e.token),t})),h.a.delete("https://task-app-nodee.herokuapp.com/logout").then((function(t){localStorage.removeItem("token"),e.logout()})).catch((function(e){console.log(e)}))},className:"link",children:"Logout"})})]})]})})});a(258);var G=function(){var e=Object(s.useContext)(b);return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(B,{}),Object(d.jsxs)(i.d,{children:[e.isLoggedIn&&Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)(k,{})}),Object(d.jsx)(i.b,{path:"signup",element:Object(d.jsx)(F,{})}),Object(d.jsx)(i.b,{path:"login",element:Object(d.jsx)(L,{})}),Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)(i.a,{to:"login"})})]})]})},R=(a(259),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,267)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))});r.a.render(Object(d.jsx)(m,{children:Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(G,{})})}),document.getElementById("root")),R()}},[[260,1,2]]]);
//# sourceMappingURL=main.30f1109d.chunk.js.map