(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),l=a.n(s),c=a(2),o=a(3),u=a(6),i=a(5),m=a(18),d=a(4),p=a(7),h=a.n(p),f=r.a.createContext(),E=f.Provider,v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e.fetchUsers=function(){fetch("https://www.bakulansayur.com/apijs/all-users.php").then(function(t){t.json().then(function(e){1===e.success?this.setState({users:e.users.reverse()}):this.context.post_show(!1)}.bind(Object(d.a)(e)))}).catch(function(e){console.log(e)})},e.handleUpdate=function(t){h.a.post("https://www.bakulansayur.com/apijs/update-user.php",{id:t,user_name:e.name.value,user_email:e.email.value}).then(function(a){var n=a.data;if(1===n.success){var r=e.state.users.map(function(a){return a.id===t?(a.user_name=e.name.value,a.user_email=e.email.value,a.isEditing=!1,a):a});e.setState({users:r})}else alert(n.msg)}).catch(function(e){console.log(e)})},e.editMode=function(t){var a=e.state.users.map(function(e){return e.id===t?(e.isEditing=!0,e):(e.isEditing=!1,e)});e.setState({users:a})},e.cancleEdit=function(t){var a=e.state.users.map(function(e){return e.id===t?(e.isEditing=!1,e):e});e.setState({users:a})},e.handleDelete=function(t){var a=e.state.users.filter(function(e){return e.id!==t});h.a.post("https://www.bakulansayur.com/apijs/delete-user.php",{id:t}).then(function(t){var n=t.data;1===n.success?e.setState({users:a}):alert(n.msg)}).catch(function(e){console.log(e)})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"componentDidUpdate",value:function(){var e=this.context.new_user;e&&(this.setState({users:[e].concat(Object(m.a)(this.state.users))}),this.context.new_user=!1)}},{key:"render",value:function(){var e=this,t=this.state.users.map(function(t,a){var n=t.id,s=t.user_name,l=t.user_email;return!0===t.isEditing?r.a.createElement("tr",{key:n},r.a.createElement("td",null,r.a.createElement("input",{className:"form-control",type:"text",ref:function(t){return e.name=t},defaultValue:s})),r.a.createElement("td",null,r.a.createElement("input",{className:"form-control",type:"email",ref:function(t){return e.email=t},defaultValue:l})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-success mr-2",onClick:function(){return e.handleUpdate(n)}},"Save"),r.a.createElement("button",{onClick:function(){return e.cancleEdit(n)},className:"btn btn-light"},"Cancel"))):r.a.createElement("tr",{key:n},r.a.createElement("td",null,s),r.a.createElement("td",null,l),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-dark mr-2",onClick:function(){return e.editMode(n)}},"Edit"),r.a.createElement("button",{onClick:function(){return e.handleDelete(n)},className:"btn btn-danger"},"Delete")))});return r.a.createElement(r.a.Fragment,null,t)}}]),a}(n.Component);v.contextType=f;var b=v,w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).insertUser=function(t){t.preventDefault(),t.persist(),h.a.post("https://www.bakulansayur.com/apijs/add-user.php",{user_name:e.username.value,user_email:e.useremail.value}).then(function(e){var a=e.data;1===a.success?(this.context.addNewUser(a.id,this.username.value,this.useremail.value),t.target.reset()):alert(a.msg)}.bind(Object(d.a)(e))).catch(function(e){console.log(e)})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.insertUser},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-sm-6"},r.a.createElement("label",{className:"font-weight-bold"},"Name"),r.a.createElement("input",{type:"text",name:"username",ref:function(t){return e.username=t},className:"form-control",placeholder:"Name"})),r.a.createElement("div",{className:"form-group col-sm-6"},r.a.createElement("label",{className:"font-weight-bold"},"Email"),r.a.createElement("input",{type:"email",name:"useremail",ref:function(t){return e.useremail=t},className:"form-control",placeholder:"Email"})),r.a.createElement("div",{className:"form-group col-sm-12 text-right"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add user"))))}}]),a}(n.Component);w.contextType=f;var N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={post_found:!0,new_user:!1},e.addNewUser=function(t,a,n){e.state.post_found?e.setState({new_user:{id:t,user_name:a,user_email:n}}):e.setState({post_found:!0})},e.postShow=function(t){e.setState({post_found:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t={new_user:this.state.new_user,addNewUser:this.addNewUser,post_show:this.postShow};return e=this.state.post_found?r.a.createElement("table",{className:"table table-striped table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,r.a.createElement(b,null))):r.a.createElement("div",{className:"alert alert-light",role:"alert"},r.a.createElement("h4",{className:"alert-heading"},"No User Found!"),r.a.createElement("hr",null),r.a.createElement("p",null,"Please Insert Some Users.")),r.a.createElement(E,{value:t},r.a.createElement("div",{className:"container-fluid bg-light"},r.a.createElement("div",{className:"container p-5"},r.a.createElement("div",{className:"card shadow-sm"},r.a.createElement("h1",{className:"card-header text-center text-uppercase text-muted"},"React PHP CRUD Application"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(w,null)),r.a.createElement("div",{className:"col-md-8"},e)))))))}}]),a}(n.Component);Boolean("https://www.bakulansayur.com/apijs/"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.adf88fc2.chunk.js.map