(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(4),i=a(6),c=a(5),o=a(7),l=a(0),r=a.n(l),m=a(2),h=a.n(m),u=a(1);a(9);var d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={emailAcc:"",passCode:""},a.changeEmail=a.changeEmail.bind(Object(u.a)(Object(u.a)(a))),a.changePass=a.changePass.bind(Object(u.a)(Object(u.a)(a))),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"changeEmail",value:function(e){this.setState({emailAcc:e.target.value})}},{key:"changePass",value:function(e){this.setState({passCode:e.target.value})}},{key:"submitLogin",value:function(e){var t,a;t=this.state.emailAcc,a=this.state.passCode,fetch("https://cab230.hackhouse.sh/login",{method:"POST",body:"email="+t+"&password="+a,headers:{"Content-type":"application/x-www-form-urlencoded"},redirect:"follow"}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){document.getElementById("query").innerHTML=JSON.stringify(e),e.token}).catch(function(e){console.log("There has been a problem with your fetch operation: ",e.message)}),console.log("thru")}},{key:"render",value:function(){return r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"header"},"SIGN IN NOW"),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",className:"login-input",placeholder:"Your email address",value:this.state.emailAcc,onChange:this.changeEmail})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"pwd"},"Password"),r.a.createElement("input",{type:"text",name:"pwd",id:"pwd",className:"login-input",placeholder:"Password",value:this.state.passCode,onChange:this.changePass})),r.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitLogin.bind(this)},"Sign in")))}}]),t}(r.a.Component),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={emailAcc:"",passCode:""},a.changeEmail=a.changeEmail.bind(Object(u.a)(Object(u.a)(a))),a.changePass=a.changePass.bind(Object(u.a)(Object(u.a)(a))),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"changeEmail",value:function(e){this.setState({emailAcc:e.target.value})}},{key:"changePass",value:function(e){this.setState({passCode:e.target.value})}},{key:"submitReg",value:function(e){!function e(t,a){fetch("https://cab230.hackhouse.sh/register",{method:"POST",body:"email="+t+"&password="+a,headers:{"Content-type":"application/x-www-form-urlencoded"}}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok")}).then(function(t){document.getElementById("query").innerHTML=JSON.stringify(t),e.disabled=!0}).catch(function(e){console.log("There has been a problem with your fetch operation: ",e.message)})}(this.state.emailAcc,this.state.passCode)}},{key:"render",value:function(){return r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"header"},"REGISTER ACCOUNT"),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",className:"reg-input",placeholder:"Your email address",value:this.state.emailAcc,onChange:this.changeEmail})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"pwd"},"Password"),r.a.createElement("input",{type:"text",name:"pwd",className:"reg-input",placeholder:"Password",value:this.state.passCode,onChange:this.changePass})),r.a.createElement("button",{type:"button",className:"reg-btn",onClick:this.submitReg.bind(this)},"Sign up")))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={isLoginOpen:!0,isRegisterOpen:!1},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"showReg",value:function(){this.setState({isRegisterOpen:!0,isLoginOpen:!1})}},{key:"showLogin",value:function(){this.setState({isLoginOpen:!0,isRegisterOpen:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"root-container"},r.a.createElement("div",{className:"box-controller"},r.a.createElement("div",{className:"controller",onClick:this.showLogin.bind(this)},"Log In"),r.a.createElement("div",{className:"controller",onClick:this.showReg.bind(this)},"Sign up")),r.a.createElement("div",{className:"box-container"},this.state.isLoginOpen&&r.a.createElement(d,null),this.state.isRegisterOpen&&r.a.createElement(p,null)))}}]),t}(r.a.Component),b=document.getElementById("root");h.a.render(r.a.createElement(g,null),b)}},[[10,2,1]]]);
//# sourceMappingURL=main.f2e57e6b.chunk.js.map