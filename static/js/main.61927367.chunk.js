(this.webpackJsonpassinh1=this.webpackJsonpassinh1||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},4:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),o=a.n(c),r=(a(24),a(18)),u=a(1),i=a(2),m=a(45),s=(a(4),a(17)),d=a.n(s),b=l.a.createElement("svg",{className:"bi bi-check-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"})),E=l.a.createElement("svg",{className:"bi bi-x-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"}));var g=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),u=Object(i.a)(r,2),m=u[0],s=u[1],d=function(){e.saveValue(m,e.id),o(!1),s("")};return l.a.createElement("div",null,c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInput1",value:m,onChange:function(e){s(e.target.value),console.log(e.target.value)},autoFocus:"true",onKeyPress:function(e){"Enter"===e.key&&d(),console.log(e.key)}}),l.a.createElement("div",{className:"button_group"},l.a.createElement("button",{className:"btn btn-sm btn-danger float-right",onClick:function(){o(!1),s("")}},E),l.a.createElement("button",{className:"btn btn-success btn-sm float-right",onClick:d,disabled:""===m.trim()},b)))):l.a.createElement("div",{onDoubleClick:function(){-1===e.editingID?(o(!0),s(e.value),e.setEditingMode(e.id)):(e.setEditingMode(-1),o(!1),o(!0),s(e.value),e.setEditingMode(e.id))}},l.a.createElement("div",null,e.value)))},h=l.a.createElement("svg",{className:"bi bi-check-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"})),p=l.a.createElement("svg",{className:"bi bi-x-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"}));var v=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)({}),m=Object(i.a)(r,2),s=m[0],d=m[1];return l.a.createElement("div",null,c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("label",null,"City:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInput1",value:s.city,onChange:function(e){d(Object(u.a)(Object(u.a)({},s),{},{city:e.target.value}))},autoFocus:"true"}),l.a.createElement("label",null,"Street:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInput1",value:s.street,onChange:function(e){d(Object(u.a)(Object(u.a)({},s),{},{street:e.target.value}))},autoFocus:"true"}),l.a.createElement("label",null,"Suite:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInput1",value:s.suite,onChange:function(e){d(Object(u.a)(Object(u.a)({},s),{},{suite:e.target.value}))},autoFocus:"true"}),l.a.createElement("label",null,"Zipcode:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInput1",value:s.zipcode,onChange:function(e){d(Object(u.a)(Object(u.a)({},s),{},{zipcode:e.target.value}))},autoFocus:"true"}),l.a.createElement("div",{className:"button_group"},l.a.createElement("button",{className:"btn btn-sm btn-danger float-right",onClick:function(){o(!1),d({})}},p),l.a.createElement("button",{className:"btn btn-sm btn-success float-right",onClick:function(){e.saveValue(s,e.id),o(!1),d("")},disabled:""===s.city.trim()&&""===s.street.trim()&&""===s.suite.trim()&&""===s.zipcode.trim()},h)))):l.a.createElement("div",{onDoubleClick:function(){o(!0),d(e.address)}},l.a.createElement("div",null,l.a.createElement("b",null,"City: "),e.address.city),l.a.createElement("div",null,l.a.createElement("b",null,"Street: "),e.address.street),l.a.createElement("div",null,l.a.createElement("b",null,"Suite: "),e.address.suite),l.a.createElement("div",null,l.a.createElement("b",null,"Zipcode: "),e.address.zipcode)))},f=l.a.createElement("svg",{className:"bi bi-check-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"})),j=l.a.createElement("svg",{className:"bi bi-x-circle",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"}));var O=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)({}),m=Object(i.a)(r,2),s=m[0],d=m[1];return l.a.createElement("div",null,c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInput1",value:s.name,onChange:function(e){d(Object(u.a)(Object(u.a)({},s),{},{name:e.target.value}))},autoFocus:"true"}),l.a.createElement("label",null,"BS:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInput1",value:s.bs,onChange:function(e){d(Object(u.a)(Object(u.a)({},s),{},{bs:e.target.value}))},autoFocus:"true"}),l.a.createElement("label",null,"Catch Phrase: "),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInput1",value:s.catchPhrase,onChange:function(e){d(Object(u.a)(Object(u.a)({},s),{},{catchPhrase:e.target.value}))},autoFocus:"true"}),l.a.createElement("div",{className:"button_group"},l.a.createElement("button",{className:"btn btn-sm btn-danger float-right",onClick:function(){o(!1),d({})}},j),l.a.createElement("button",{className:"btn btn-sm btn-success float-right",onClick:function(){e.saveValue(s,e.id),o(!1),d("")},disabled:""===s.name.trim()&&""===s.bs.trim()&&""===s.catchPhrase.trim()},f)))):l.a.createElement("div",{onDoubleClick:function(){o(!0),d(e.company)}},l.a.createElement("div",null,l.a.createElement("b",null,"Name: "),e.company.name),l.a.createElement("div",null,l.a.createElement("b",null,"BS: "),e.company.bs),l.a.createElement("div",null,l.a.createElement("b",null,"Catch Phrase: "),e.company.catchPhrase)))};var C=function(e){var t={id:e.id,name:"",username:"",email:"",address:{city:"",street:"",suite:"",zipcode:""},phone:"",website:"",company:{name:"",bs:"",catchPhrase:""}},a=Object(n.useState)(t),c=Object(i.a)(a,2),o=c[0],r=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,e.id),l.a.createElement("td",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputName",value:o.name,onChange:function(e){console.log("onChangeName launched"),console.log("user"),console.log(o);var t=Object(u.a)(Object(u.a)({},o),{},{name:e.target.value});console.log("updatedUser"),r(t),console.log(t),console.log("onChangeName exit")},autoFocus:"true"}))),l.a.createElement("td",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputUserName",value:o.username,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{username:e.target.value})),console.log(o)},autoFocus:"true"}))),l.a.createElement("td",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputEmail",value:o.email,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{email:e.target.value})),console.log(o)},autoFocus:"true"}))),l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement("label",null,"City:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputCity1",value:o.address.city,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{address:Object(u.a)(Object(u.a)({},o.address),{},{city:e.target.value})})),console.log(o)},autoFocus:"true"}),l.a.createElement("label",null,"Street:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputStreet",value:o.address.street,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{address:Object(u.a)(Object(u.a)({},o.address),{},{street:e.target.value})})),console.log(o)},autoFocus:"true"}),l.a.createElement("label",null,"Suite:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputSuite",value:o.address.suite,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{address:Object(u.a)(Object(u.a)({},o.address),{},{suite:e.target.value})})),console.log(o)},autoFocus:"true"}),l.a.createElement("label",null,"Zipcode:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputZipcode",value:o.address.zipcode,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{address:Object(u.a)(Object(u.a)({},o.address),{},{zipcode:e.target.value})})),console.log(o)},autoFocus:"true"}))),l.a.createElement("td",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputPhone",value:o.phone,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{phone:e.target.value})),console.log(o)},autoFocus:"true"}))),l.a.createElement("td",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Website:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputWebsite",value:o.website,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{website:e.target.value})),console.log(o)},autoFocus:"true"}))),l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputCompanyName",value:o.company.name,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{company:Object(u.a)(Object(u.a)({},o.company),{},{name:e.target.value})})),console.log(o)},autoFocus:"true"}),l.a.createElement("label",null,"BS:"),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputBS",value:o.company.bs,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{company:Object(u.a)(Object(u.a)({},o.company),{},{bs:e.target.value})})),console.log(o)},autoFocus:"true"}),l.a.createElement("label",null,"Catch Phrase: "),l.a.createElement("input",{type:"text",className:"form-control",id:"formControlInputCatch",value:o.company.catchPhrase,onChange:function(e){r(Object(u.a)(Object(u.a)({},o),{},{company:Object(u.a)(Object(u.a)({},o.company),{},{catchPhrase:e.target.value})})),console.log(o)},autoFocus:"true"})))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"10"},l.a.createElement("div",{className:"button_group"},l.a.createElement("button",{className:"btn btn-success m-1",onClick:function(){r(Object(u.a)(Object(u.a)({},o),{},{id:e.id})),console.log(o),e.addUser(o),r(t)},disabled:""===o.name.trim()},"Save"),l.a.createElement("button",{className:"btn btn-danger  m-1",onClick:function(){r(t),console.log(o),e.canceAddUser()}},"Cancel")))))};var y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),b=s[0],E=s[1],h=Object(n.useState)(-1),p=Object(i.a)(h,2),f=p[0],j=p[1],y=function(e){j(e)},N=function(){E(!1),console.log("load"),d()({method:"get",url:"https://jsonplaceholder.typicode.com/users",responseType:"stream"}).then((function(e){console.log(e),c(e.data)}))},w=function(e,t){console.log("onChange launched",e,t);var n=a.map((function(a){return a.id===t?Object(u.a)(Object(u.a)({},a),{},{name:e}):a}));c(n),console.log(n),console.log("onChange finished")},x=function(e,t){console.log("onChange launched",e,t);var n=a.map((function(a){return a.id===t?Object(u.a)(Object(u.a)({},a),{},{username:e}):a}));c(n),console.log(n),console.log("onChange finished")},k=function(e,t){console.log("onChange launched",e,t);var n=a.map((function(a){return a.id===t?Object(u.a)(Object(u.a)({},a),{},{email:e}):a}));c(n),console.log(n),console.log("onChange finished")},I=function(e,t){console.log("onChange launched",e,t);var n=a.map((function(a){return a.id===t?Object(u.a)(Object(u.a)({},a),{},{phone:e}):a}));c(n),console.log(n),console.log("onChange finished")},z=function(e,t){console.log("onChange launched",e,t);var n=a.map((function(a){return a.id===t?Object(u.a)(Object(u.a)({},a),{},{website:e}):a}));c(n),console.log(n),console.log("onChange finished")},F=function(e,t){console.log("saveAddress launched",e,t);var n=a.map((function(a){return a.id===t?Object(u.a)(Object(u.a)({},a),{},{address:e}):a}));c(n),console.log(n),console.log("saveAddress finished")},M=function(e,t){var n=a.map((function(a){return a.id===t?Object(u.a)(Object(u.a)({},a),{},{company:e}):a}));c(n)};return l.a.createElement("div",null,l.a.createElement("h1",null,"Users"),a.length<=0?l.a.createElement("button",{className:"btn btn-primary m-1",onClick:N},"Load Users"):l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn btn-primary m-1",onClick:N},"Reload Users"),l.a.createElement("button",{className:"btn btn-primary m-1",onClick:function(){var e=a.filter((function(e){return!0!==e.checked}));c(e)}},"Remove All Checked"),b?l.a.createElement(l.a.Fragment,null):l.a.createElement("button",{className:"btn btn-primary m-1",onClick:function(){E(!0)}},"Add User")),a.length>0?l.a.createElement("div",null,l.a.createElement("table",{className:"table table table-hover table-bordered table-striped"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"ID"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Username"),l.a.createElement("th",{scope:"col"},"email"),l.a.createElement("th",{scope:"col"},"Address"),l.a.createElement("th",{scope:"col"},"Phone"),l.a.createElement("th",{scope:"col"},"Website"),l.a.createElement("th",{scope:"col"},"Company"))),l.a.createElement("tbody",{className:"text-body"},b?l.a.createElement(C,{id:function(){var e=0;return a.map((function(t){t.id>e&&(e=t.id)})),e}()+1,addUser:function(e){var t=Object(r.a)(a);t.push(e),c(t),E(!1)},canceAddUser:function(){E(!1)}}):l.a.createElement(l.a.Fragment,null),a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.id,l.a.createElement("input",{type:"checkbox",onClick:function(){return function(e){console.log("onCheck launched with is = "+e);var t=a.map((function(t){return t.id===e?!0===t.checked?Object(u.a)(Object(u.a)({},t),{},{checked:!1}):Object(u.a)(Object(u.a)({},t),{},{checked:!0}):void 0===t.checked?Object(u.a)(Object(u.a)({},t),{},{checked:!1}):t}));c(t)}(e.id)},checked:!0===e.checked})),l.a.createElement("td",null,l.a.createElement(g,{setEditingMode:y,editingID:f,idElement:Object(m.a)(),value:e.name,id:e.id,saveValue:w})),l.a.createElement("td",null,l.a.createElement(g,{setEditingMode:y,editingID:f,value:e.username,id:e.id,saveValue:x})),l.a.createElement("td",null,l.a.createElement(g,{setEditingMode:y,editingID:f,value:e.email,id:e.id,saveValue:k})),l.a.createElement("td",null,l.a.createElement(v,{setEditingMode:y,editingID:f,address:e.address,id:e.id,saveValue:F})),l.a.createElement("td",null,l.a.createElement(g,{setEditingMode:y,editingID:f,value:e.phone,id:e.id,saveValue:I})),l.a.createElement("td",null,l.a.createElement(g,{setEditingMode:y,editingID:f,value:e.website,id:e.id,saveValue:z})),l.a.createElement("td",null,l.a.createElement(O,{setEditingMode:y,editingID:f,company:e.company,id:e.id,saveValue:M})))}))))):l.a.createElement(l.a.Fragment,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.61927367.chunk.js.map