(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{133:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(3),a=r(40),s=r(41),i=r(43),o=r(42),c=r(0),l=r(12),u=r(11),p=r(39),h=r(162),b=r(134),j=r.n(b),m=r(135),d=r.n(m),f=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"componentDidUpdate",value:function(){var e=this;this.props.errorContacts?setTimeout((function(){e.props.clearErrorContacts()}),3e3):this.props.errorAuth&&setTimeout((function(){e.props.clearErrorAuth()}),3e3)}},{key:"render",value:function(){return Object(n.jsx)(h.a,{in:this.props.message,classNames:j.a,timeout:250,unmountOnExit:!0,children:Object(n.jsx)("div",{className:d.a.Container,children:Object(n.jsx)("p",{className:d.a.Text,children:this.props.message})})})}}]),r}(c.Component),g=Object(l.b)((function(e){return{errorContacts:p.e.getError(e),errorAuth:u.d.getError(e)}}),(function(e){return{clearErrorContacts:function(){return e(p.b())},clearErrorAuth:function(){return e(u.a.clearError())}}}))(f)},134:function(e,t,r){e.exports={enter:"fadeAlertStyle_enter__3SL3s",enterActive:"fadeAlertStyle_enterActive__sjzk1",exit:"fadeAlertStyle_exit__3bW88",exitActive:"fadeAlertStyle_exitActive__1P1lD"}},135:function(e,t,r){e.exports={Container:"Alert_Container__TAaiq",Text:"Alert_Text__3RRyN"}},141:function(e,t,r){e.exports={form:"RegisterView_form__2HSMY",label:"RegisterView_label__2t6sp"}},159:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(2),s=r(40),i=r(41),o=r(43),c=r(42),l=r(0),u=r(12),p=r(11),h=r(131),b=r(44),j=r(133),m=r(141),d=r.n(m),f=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",password:""},e.handleChange=function(t){var r=t.target,n=r.name,s=r.value;e.setState(Object(a.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.state,t=e.name,r=e.email,a=e.password;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),this.props.isLoading&&Object(n.jsx)(b.a,{}),Object(n.jsx)(j.a,{message:this.props.isError,time:3e3}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.form,autoComplete:"off",children:[Object(n.jsxs)("label",{className:d.a.label,children:["\u0418\u043c\u044f",Object(n.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(n.jsxs)("label",{className:d.a.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(n.jsx)("input",{type:"email",name:"email",value:r,onChange:this.handleChange})]}),Object(n.jsxs)("label",{className:d.a.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(n.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange})]}),Object(n.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",children:"Register"})]})]})}}]),r}(l.Component),g={onRegister:p.b.register};t.default=Object(u.b)((function(e){return{isError:p.d.getError(e),isLoading:p.d.getLoading(e)}}),g)(f)}}]);
//# sourceMappingURL=register-view.f6f58d40.chunk.js.map