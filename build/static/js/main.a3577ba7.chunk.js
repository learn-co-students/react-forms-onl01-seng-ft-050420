(this["webpackJsonpreact-forms"]=this["webpackJsonpreact-forms"]||[]).push([[0],{13:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(2),i=a.n(r),l=a(3),m=a(4),u=a(6),c=a(5),o=a(7),f=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(r)))).state={firstName:"John",lastName:"Henry",submittedData:[]},a.handleFirstNameChange=function(t){a.setState({firstName:t.target.value})},a.handleLastNameChange=function(t){a.setState({lastName:t.target.value})},a.handleSubmit=function(t){t.preventDefault();var e={firstName:a.state.firstName,lastName:a.state.lastName},n=a.state.submittedData.concat(e);a.setState({submittedData:n})},a.listofSubmissions=function(){return a.state.submittedData.map((function(t){return s.a.createElement("div",null,s.a.createElement("span",null,t.firstName),s.a.createElement("span",null,t.lastName))}))},a}return Object(o.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",name:"firstName",onChange:function(e){return t.handleFirstNameChange(e)},value:this.state.firstName}),s.a.createElement("input",{type:"text",name:"lastName",onChange:function(e){return t.handleLastNameChange(e)},value:this.state.lastName})),this.listofSubmissions())}}]),e}(s.a.Component);i.a.render(s.a.createElement("div",null,s.a.createElement(f,null)),document.getElementById("root"))},8:function(t,e,a){t.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.a3577ba7.chunk.js.map