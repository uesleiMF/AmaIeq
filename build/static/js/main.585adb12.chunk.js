(this.webpackJsonpsistema_de_chamados=this.webpackJsonpsistema_de_chamados||[]).push([[0],{40:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(25),s=n.n(r),o=(n(40),n(41),n(12)),i=n(5),u=n.n(i),l=n(8),j=n(6),d=n(27);n(32),n(62),n(63);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyC2P8V778FGGRpuYX4FguH_safl6jox3Yg",authDomain:"amai-c8c1c.firebaseapp.com",projectId:"amai-c8c1c",storageBucket:"amai-c8c1c.appspot.com",messagingSenderId:"755208804039",appId:"1:755208804039:web:532e251b725b1f9d7ad0e2",measurementId:"G-N4C3GNM6FG"});var b=d.a,O=n(14),h=n(1),p=Object(a.createContext)({});var x=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(j.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(!1),i=Object(j.a)(o,2),d=i[0],x=i[1],f=Object(a.useState)(!0),m=Object(j.a)(f,2),v=m[0],g=m[1];function A(){return(A=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,b.auth().signInWithEmailAndPassword(t,n).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user.uid,e.next=3,b.firestore().collection("users").doc(n).get();case 3:a=e.sent,c={uid:n,nome:a.data().nome,avatarUrl:a.data().avatarUrl,email:t.user.email},s(c),C(c),x(!1),O.b.success("Bem vindo de volta "+c.nome+"!");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),O.b.error("Ops algo deu errado!"),x(!1)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(l.a)(u.a.mark((function e(t,n,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,b.auth().createUserWithEmailAndPassword(t,n).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user.uid,e.next=3,b.firestore().collection("users").doc(n).set({nome:a,avatarUrl:null}).then((function(){var e={uid:n,nome:a,email:t.user.email,avatarUrl:null};s(e),C(e),x(!1),O.b.success("Bem vindo a plataforma!")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),O.b.error("Ops algo deu errado"),x(!1)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){localStorage.setItem("SistemaUser",JSON.stringify(e))}function y(){return(y=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.auth().signOut();case 2:localStorage.removeItem("SistemaUser"),s(null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("SistemaUser");e&&(s(JSON.parse(e)),g(!1)),g(!1)}()}),[]),Object(h.jsx)(p.Provider,{value:{signed:!!r,user:r,loading:v,signUp:function(e,t,n){return w.apply(this,arguments)},signOut:function(){return y.apply(this,arguments)},signIn:function(e,t){return A.apply(this,arguments)},loadingAuth:d,setUser:s,storageUser:C},children:t})},f=n(7),m=n(20),v=n(35);function g(e){var t=e.component,n=e.isPrivate,c=Object(v.a)(e,["component","isPrivate"]),r=Object(a.useContext)(p),s=r.signed;return r.loading?Object(h.jsx)("div",{}):!s&&n?Object(h.jsx)(f.a,{to:"/"}):s&&!n?Object(h.jsx)(f.a,{to:"/dashboard"}):Object(h.jsx)(f.b,Object(m.a)(Object(m.a)({},c),{},{render:function(e){return Object(h.jsx)(t,Object(m.a)({},e))}}))}n(53);var A=n.p+"static/media/logo.1c649f13.png";var w=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],u=s[1],l=Object(a.useContext)(p),d=l.signIn,b=l.loadingAuth;return Object(h.jsx)("div",{className:"container-center",children:Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("div",{className:"login-area",children:Object(h.jsx)("img",{src:A,alt:"Sistema logo"})}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n&&""!==i&&d(n,i)},children:[Object(h.jsx)("h1",{children:"Entrar"}),Object(h.jsx)("input",{type:"text",placeholder:"email@email.com",value:n,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("input",{type:"password",placeholder:"*******",value:i,onChange:function(e){return u(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:b?"Carregando...":"Acessar"})]}),Object(h.jsx)(o.b,{to:"/register",children:"Criar uma conta"})]})})};var C=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],u=s[1],l=Object(a.useState)(""),d=Object(j.a)(l,2),b=d[0],O=d[1],x=Object(a.useContext)(p),f=x.signUp,m=x.loadingAuth;return Object(h.jsx)("div",{className:"container-center",children:Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("div",{className:"login-area",children:Object(h.jsx)("img",{src:A,alt:"Sistema logo"})}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n&&""!==i&&""!==b&&f(i,b,n)},children:[Object(h.jsx)("h1",{children:"Cadastrar"}),Object(h.jsx)("input",{type:"text",placeholder:"Seu nome",value:n,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("input",{type:"text",placeholder:"email@email.com",value:i,onChange:function(e){return u(e.target.value)}}),Object(h.jsx)("input",{type:"password",placeholder:"*******",value:b,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:m?"Carregando...":"Cadastrar"})]}),Object(h.jsx)(o.b,{to:"/",children:"J\xe1 tem uma conta? Entre"})]})})},y=n(34),P=(n(54),n(55),"data:image/png;base64,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"),S=n(9);function F(){var e=Object(a.useContext)(p).user;return Object(h.jsxs)("div",{className:"sidebar",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:null===e.avatarUrl?P:e.avatarUrl,alt:"Foto avatar"})}),Object(h.jsxs)(o.b,{to:"/dashboard",children:[Object(h.jsx)(S.b,{color:"#FFF",size:24}),"Chamados"]}),Object(h.jsxs)(o.b,{to:"/customers",children:[Object(h.jsx)(S.i,{color:"#FFF",size:24}),"Clientes"]}),Object(h.jsxs)(o.b,{to:"/profile",children:[Object(h.jsx)(S.g,{color:"#FFF",size:24}),"Configura\xe7\xf5es"]})]})}n(56);function N(e){var t=e.children,n=e.name;return Object(h.jsxs)("div",{className:"title",children:[t,Object(h.jsx)("span",{children:n})]})}n(57);function k(e){var t=e.conteudo,n=e.close;return Object(h.jsx)("div",{className:"modal",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("button",{className:"close",onClick:n,children:[Object(h.jsx)(S.j,{size:23,color:"#FFF"}),"Voltar"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Detalhes do chamado"}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("span",{children:["Cliente: ",Object(h.jsx)("innerWidth",{children:t.cliente})]})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("span",{children:["Assunto: ",Object(h.jsx)("i",{children:t.assunto})]}),Object(h.jsxs)("span",{children:["Cadastrado em: ",Object(h.jsx)("i",{children:t.createdFormated})]})]}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("span",{children:["Status:"," ",Object(h.jsx)("i",{style:{color:"#fff",backgroundColor:"Aberto"===t.status?"#5cb85c":"#999"},children:t.status})]})}),""!==t.complemento&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{children:"Complemento"}),Object(h.jsx)("p",{children:t.complemento})]})]})]})})}var B=n(65),I=b.firestore().collection("chamados").orderBy("created","desc");function z(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),s=Object(j.a)(r,2),i=s[0],d=s[1],b=Object(a.useState)(!1),O=Object(j.a)(b,2),p=O[0],x=O[1],f=Object(a.useState)(!1),m=Object(j.a)(f,2),v=m[0],g=m[1],A=Object(a.useState)(),w=Object(j.a)(A,2),C=w[0],P=w[1],z=Object(a.useState)(!1),E=Object(j.a)(z,2),Q=E[0],W=E[1],J=Object(a.useState)(),D=Object(j.a)(J,2),Z=D[0],H=D[1];function L(e){return X.apply(this,arguments)}function X(){return(X=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===t.size?g(!0):(n=[],t.forEach((function(e){n.push({id:e.id,assunto:e.data().assunto,cliente:e.data().cliente,clienteId:e.data().clienteId,created:e.data().created,createdFormated:Object(B.a)(e.data().created.toDate(),"dd/MM/yyyy"),status:e.data().status,complemento:e.data().complemento})})),a=t.docs[t.docs.length-1],c((function(e){return[].concat(Object(y.a)(e),n)})),P(a)),x(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,I.startAfter(C).limit(5).get().then((function(e){L(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){W(!Q),H(e)}return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.limit(5).get().then((function(e){L(e)})).catch((function(e){console.log("Deu algum erro: ",e),x(!1)}));case 2:d(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[]),i?Object(h.jsxs)("div",{children:[Object(h.jsx)(F,{}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(N,{name:"Atendimentos",children:Object(h.jsx)(S.c,{size:25})}),Object(h.jsx)("div",{className:"container dashboard",children:Object(h.jsx)("span",{children:"Buscando chamados..."})})]})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)(F,{}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(N,{name:"Atendimentos",children:Object(h.jsx)(S.c,{size:25})}),0===n.length?Object(h.jsxs)("div",{className:"container dashboard",children:[Object(h.jsx)("span",{children:"Nenhum chamado registrado..."}),Object(h.jsxs)(o.b,{to:"/new",className:"new",children:[Object(h.jsx)(S.d,{size:25,color:"#FFF"}),"Novo Chamado"]})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(o.b,{to:"/new",className:"new",children:[Object(h.jsx)(S.d,{size:25,color:"#FFF"}),"Novo Chamado"]}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Cliente"}),Object(h.jsx)("th",{scope:"col",children:"Assunto"}),Object(h.jsx)("th",{scope:"col",children:"Status"}),Object(h.jsx)("th",{scope:"col",children:"Cadastrado em"}),Object(h.jsx)("th",{scope:"col",children:"#"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{"data-label":"Cliente",children:e.cliente}),Object(h.jsx)("td",{"data-label":"Assunto",children:e.assunto}),Object(h.jsx)("td",{"data-label":"Status",children:Object(h.jsx)("span",{className:"badge",style:{backgroundColor:"Aberto"===e.status?"#5cb85c":"#999"},children:e.status})}),Object(h.jsx)("td",{"data-label":"Cadastrado",children:e.createdFormated}),Object(h.jsxs)("td",{"data-label":"#",children:[Object(h.jsx)("button",{className:"action",style:{backgroundColor:"#3583f6"},children:Object(h.jsx)(S.f,{color:"#FFF",size:17,onClick:function(){return q(e)}})}),Object(h.jsx)(o.b,{className:"action",style:{backgroundColor:"#F6A935"},to:"/new/".concat(e.id),children:Object(h.jsx)(S.a,{color:"#FFF",size:17})})]})]},t)}))})]}),p&&Object(h.jsx)("h3",{style:{textAlign:"center",marginTop:15},children:"Buscando dados..."}),!p&&!v&&Object(h.jsx)("button",{className:"btn-more",onClick:function(){return Y.apply(this,arguments)},children:"Buscar mais"})]})]}),Q&&Object(h.jsx)(k,{conteudo:Z,close:q})]})}n(58);function E(){var e=Object(a.useContext)(p),t=e.user,n=e.signOut,c=e.setUser,r=e.storageUser,s=Object(a.useState)(t&&t.nome),o=Object(j.a)(s,2),i=o[0],d=o[1],O=Object(a.useState)(t&&t.email),x=Object(j.a)(O,2),f=x[0],v=(x[1],Object(a.useState)(t.avatarUrl)),g=Object(j.a)(v,2),A=g[0],w=g[1],C=Object(a.useState)(null),y=Object(j.a)(C,2),k=y[0],B=y[1];function I(){return z.apply(this,arguments)}function z(){return(z=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.uid,e.next=3,b.storage().ref("images/".concat(n,"/").concat(k.name)).put(k).then(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Foto enviada com sucesso!"),e.next=3,b.storage().ref("images/".concat(n)).child(k.name).getDownloadURL().then(function(){var e=Object(l.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n,e.next=3,b.firestore().collection("users").doc(t.uid).update({avatarUrl:a,nome:i}).then((function(){var e=Object(m.a)(Object(m.a)({},t),{},{avatarUrl:a,nome:i});c(e),r(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),null!==k||""===i){e.next=6;break}return e.next=4,b.firestore().collection("users").doc(t.uid).update({nome:i}).then((function(){var e=Object(m.a)(Object(m.a)({},t),{},{nome:i});c(e),r(e)}));case 4:e.next=7;break;case 6:""!==i&&null!==k&&I();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{children:[Object(h.jsx)(F,{}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(N,{name:"Meu perfil",children:Object(h.jsx)(S.g,{size:25})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("form",{className:"form-profile",onSubmit:function(e){return E.apply(this,arguments)},children:[Object(h.jsxs)("label",{className:"label-avatar",children:[Object(h.jsx)("span",{children:Object(h.jsx)(S.h,{color:"#fff",size:25})}),Object(h.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){if(e.target.files[0]){var t=e.target.files[0];if("image/jpeg"!==t.type&&"image/png"!==t.type&&"image/jpg"!==t.type)return alert("Envie uma imagem do tipo PNG,JPG ou JPEG"),B(null),null;B(t),w(URL.createObjectURL(e.target.files[0]))}}}),Object(h.jsx)("br",{}),null===A?Object(h.jsx)("img",{src:P,width:"250",height:"250",alt:"Avatar"}):Object(h.jsx)("img",{src:A,width:"250",height:"250",alt:"Avatar"})]}),Object(h.jsx)("label",{children:"Nome"}),Object(h.jsx)("input",{type:"text",value:i,onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"text",value:f,disabled:!0}),Object(h.jsx)("button",{type:"submit",children:"Salvar"})]})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("button",{className:"logout-btn",onClick:function(){return n()},children:"Sair"})})]})]})}n(59);function Q(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),o=s[0],i=s[1],d=Object(a.useState)(""),p=Object(j.a)(d,2),x=p[0],f=p[1];function m(){return(m=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===n||""===o||""===x){e.next=6;break}return e.next=4,b.firestore().collection("customers").add({nomeFantasia:n,cnpj:o,endereco:x}).then((function(){c(""),i(""),f(""),O.b.success("Empresa cadastrada com sucesso!")})).catch((function(e){console.log(e),O.b.error("Erro ao cadastrar essa empresa")}));case 4:e.next=7;break;case 6:O.b.error("Preencha todos os campos!");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{children:[Object(h.jsx)(F,{}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(N,{name:"Clientes",children:Object(h.jsx)(S.i,{size:25})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("form",{className:"form-profile customers",onSubmit:function(e){return m.apply(this,arguments)},children:[Object(h.jsx)("label",{children:"Nome fantasia"}),Object(h.jsx)("input",{type:"text",placeholder:"Nome da sua empresa",value:n,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("label",{children:"CNPJ"}),Object(h.jsx)("input",{type:"text",placeholder:"Seu CNPJ",value:o,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("label",{children:"Endere\xe7o"}),Object(h.jsx)("input",{type:"text",placeholder:"Endere\xe7o da empresa",value:x,onChange:function(e){return f(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Cadastrar"})]})})]})]})}n(60);function W(){var e=Object(f.h)().id,t=Object(f.g)(),n=Object(a.useState)(!0),c=Object(j.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)([]),i=Object(j.a)(o,2),d=i[0],x=i[1],m=Object(a.useState)(0),v=Object(j.a)(m,2),g=v[0],A=v[1],w=Object(a.useState)("Suporte"),C=Object(j.a)(w,2),y=C[0],P=C[1],k=Object(a.useState)("Aberto"),B=Object(j.a)(k,2),I=B[0],z=B[1],E=Object(a.useState)(""),Q=Object(j.a)(E,2),W=Q[0],J=Q[1],D=Object(a.useState)(!1),Z=Object(j.a)(D,2),H=Z[0],L=Z[1],X=Object(a.useContext)(p).user;function Y(e){return q.apply(this,arguments)}function q(){return(q=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.firestore().collection("chamados").doc(e).get().then((function(e){P(e.data().assunto),z(e.data().status),J(e.data().complemento);var t=n.findIndex((function(t){return t.id===e.data().clienteId}));A(t),L(!0)})).catch((function(e){console.log("Erro no Id passado: ",e),L(!1)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=Object(l.a)(u.a.mark((function n(a){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),!H){n.next=5;break}return n.next=4,b.firestore().collection("chamados").doc(e).update({cliente:d[g].nomeFantasia,clienteId:d[g].id,assunto:y,status:I,complemento:W,userId:X.uid}).then((function(){O.b.success("Chamado editado com sucesso!"),A(0),J(""),t.push("/dashboard")})).catch((function(e){O.b.error("Ops, erro ao registrar... Tente mais tarde!"),console.log(e)}));case 4:return n.abrupt("return");case 5:return n.next=7,b.firestore().collection("chamados").add({created:new Date,cliente:d[g].nomeFantasia,clienteId:d[g].id,assunto:y,status:I,complemento:W,userId:X.uid}).then((function(){O.b.success("Chamado criado com sucesso!"),J(""),A(0)})).catch((function(e){console.log(e),O.b.error("Ops erro ao registrar, tente mais tarde.")}));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function V(e){z(e.target.value)}return Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.firestore().collection("customers").get().then((function(t){var n=[];if(t.forEach((function(e){n.push({id:e.id,nomeFantasia:e.data().nomeFantasia})})),0===n.length)return console.log("Nenhuma empresa encontrada"),x([{id:"1",nomeFantasia:"Freela"}]),void s(!1);x(n),s(!1),e&&Y(n)})).catch((function(e){console.log("Deu algum erro!",e),s(!1),x([{id:"1",nomeFantasia:""}])}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(h.jsxs)("div",{children:[Object(h.jsx)(F,{}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(N,{name:"Novo chamado",children:Object(h.jsx)(S.e,{size:25})}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("form",{className:"form-profile",onSubmit:function(e){return U.apply(this,arguments)},children:[Object(h.jsx)("label",{children:"Cliente"}),r?Object(h.jsx)("input",{type:"text",disabled:!0,value:"Carregando clientes..."}):Object(h.jsx)("select",{value:g,onChange:function(e){A(e.target.value)},children:d.map((function(e,t){return Object(h.jsx)("option",{value:t,children:e.nomeFantasia},e.id)}))}),Object(h.jsx)("label",{children:"Assunto"}),Object(h.jsxs)("select",{value:y,onChange:function(e){P(e.target.value)},children:[Object(h.jsx)("option",{value:"Suporte",children:"Suporte"}),Object(h.jsx)("option",{value:"Visita Tecnica",children:"Visita T\xe9cnica"}),Object(h.jsx)("option",{value:"Financeiro",children:"Financeiro"})]}),Object(h.jsx)("label",{children:"Status"}),Object(h.jsxs)("div",{className:"status",children:[Object(h.jsx)("input",{type:"radio",name:"radio",value:"Aberto",onChange:V,checked:"Aberto"===I}),Object(h.jsx)("span",{children:"Em Aberto"}),Object(h.jsx)("input",{type:"radio",name:"radio",value:"Progresso",onChange:V,checked:"Progresso"===I}),Object(h.jsx)("span",{children:"Progresso"}),Object(h.jsx)("input",{type:"radio",name:"radio",value:"Atendido",onChange:V,checked:"Atendido"===I}),Object(h.jsx)("span",{children:"Atendido"})]}),Object(h.jsx)("label",{children:"Complemento"}),Object(h.jsx)("textarea",{type:"text",placeholder:"Descreva seu problema (opcional).",value:W,onChange:function(e){return J(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Registrar"})]})})]})]})}function J(){return Object(h.jsxs)(f.d,{children:[Object(h.jsx)(g,{exact:!0,path:"/",component:w}),Object(h.jsx)(g,{exact:!0,path:"/register",component:C}),Object(h.jsx)(g,{exact:!0,path:"/dashboard",component:z,isPrivate:!0}),Object(h.jsx)(g,{exact:!0,path:"/profile",component:E,isPrivate:!0}),Object(h.jsx)(g,{exact:!0,path:"/customers",component:Q,isPrivate:!0}),Object(h.jsx)(g,{exact:!0,path:"/new",component:W,isPrivate:!0}),Object(h.jsx)(g,{exact:!0,path:"/new/:id",component:W,isPrivate:!0})]})}var D=function(){return Object(h.jsx)(x,{children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(O.a,{autoClose:3e3}),Object(h.jsx)(J,{})]})})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.585adb12.chunk.js.map