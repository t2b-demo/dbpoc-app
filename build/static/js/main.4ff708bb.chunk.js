(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){},148:function(e,t,a){},200:function(e,t,a){e.exports=a(509)},399:function(e,t,a){},407:function(e,t,a){},409:function(e,t,a){},479:function(e,t,a){},483:function(e,t,a){},485:function(e,t,a){},487:function(e,t,a){},490:function(e,t,a){},492:function(e,t,a){},509:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(49),l=a.n(c),o=a(150),i=a(39),s=a.n(i),u={REGION:"eu-central-1",USER_POOL_ID:"eu-central-1_JpOAfqMqV",APP_CLIENT_ID:"4ga1j0au5hrt4j2j8jg4f0qapl",IDENTITY_POOL_ID:"eu-central-1:e4c0720c-71d1-433a-a325-d7bba790afb4"},m=(a(147),a(148),a(399),a(20)),d=a.n(m),h=a(32),p=a(11),f=a(12),g=a(14),b=a(13),E=a(15),v=a(182),y=a(91),C=a(178),k=a(521),O=a(519),S=a(520),D=(a(407),a(177)),j=a(92),w=(a(409),a(33)),N=a(444),T=a(512),x=a(513),P=a(188),I=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleSingleUpdateClick=function(e){e.preventDefault();var t=Object.assign(a.props.selectedDoc,{name:e.target.name.value,age:parseInt(e.target.age.value,10),company:e.target.company.value,email:e.target.email.value,phone:e.target.phone.value});console.log(t),a.props.handleSingleUpdateClick(t),a.props.closeModal()},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header text-center"},r.a.createElement("h5",{className:"modal-title"},"Update Doc")),r.a.createElement("form",{onSubmit:this.handleSingleUpdateClick},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",defaultValue:this.props.selectedDoc.name}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"age"},"Age"),r.a.createElement("input",{type:"number",className:"form-control",name:"age",defaultValue:this.props.selectedDoc.age}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",defaultValue:this.props.selectedDoc.email}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"phone",className:"form-control",name:"phone",defaultValue:this.props.selectedDoc.phone}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"company"},"Company"),r.a.createElement("input",{type:"text",className:"form-control",name:"company",defaultValue:this.props.selectedDoc.company}))),r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Update"}),r.a.createElement("button",{className:"btn btn-danger",value:"cancel",onClick:this.props.closeModal},"Cancel")))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).handleLeftClick=function(){a.props.handlePaginationClick("LEFT")},a.handleRightClick=function(){a.props.handlePaginationClick("RIGHT")},a.getMaxRange=function(){var e=a.props.page*a.props.tableMax;return e<=a.props.dataLength?e:a.props.dataLength},a.getMinRange=function(){return 0===a.props.dataLength?0:(a.props.page-1)*a.props.tableMax+1},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"page-item ".concat(this.props.page<=1?"disabled":"")},r.a.createElement("a",{className:"page-link",onClick:this.handleLeftClick},"Previous")),r.a.createElement("li",{className:"page-item ".concat(this.props.page*this.props.tableMax>this.props.dataLength?"disabled":"")},r.a.createElement("a",{className:"page-link",onClick:this.handleRightClick},"Next"))),r.a.createElement("p",{className:"display-pages"},"Displaying ",this.getMinRange()," - ",this.getMaxRange()," of ",this.props.dataLength)))}}]),t}(r.a.Component),L=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"table table-striped table-bordered table-condensed"},r.a.createElement("thead",null,this.props.headers),r.a.createElement("tbody",null,this.props.rows))}}]),t}(r.a.Component),A=["Name","Age","Company","Email","Phone"],R=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state={showUpdateModal:!1,selectedDoc:null,page:1,tableMax:8},a.handleOpenModal=function(e){a.setState({showUpdateModal:!0,selectedDoc:e})},a.handleCloseModal=function(){a.setState({showUpdateModal:!1,selectedDoc:null})},a.handlePaginationClick=function(e){"LEFT"===e&&a.state.page>1?a.setState(function(e){return{page:e.page-1}}):"RIGHT"===e&&a.state.page<Math.ceil(a.props.data.docs.length/a.state.tableMax)&&a.setState(function(e){return{page:e.page+1}})},a.generateHeaders=function(){var e=A.map(function(e,t){return r.a.createElement("th",{key:e+t},e)});return r.a.createElement("tr",null,r.a.createElement("th",{className:"row-butttons-header"}),e)},a.generateRows=function(){return a.props.data.docs.slice((a.state.page-1)*a.state.tableMax,a.state.page*a.state.tableMax).map(function(e){var t=A.map(function(t,a){return r.a.createElement("td",{key:e._id+a},e[t.toLowerCase()])}),n=a.props.data.metaDocs.find(function(t){return t._id===e._id}),c=e.conflicts,l=c?"warning":"success";return r.a.createElement("tr",{key:e._id},r.a.createElement("td",{className:"row-buttons-container"},r.a.createElement("span",null,c?"\u26a0\ufe0f":"\u2705"),r.a.createElement("button",{className:"btn btn-".concat(l," btn-sm mx-2"),onClick:function(){return a.props.handleViewTreeClick(n)}},"View Tree"),r.a.createElement("button",{className:"btn btn-dark btn-sm mx-2",onClick:function(){return a.props.handleSingleDeleteClick(e._id)}},"Del"),r.a.createElement("button",{className:"btn btn-info btn-sm mx-2",onClick:function(){return a.handleOpenModal(e)}},"Update")),t)})},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e,t;return this.props.data.docs.length>0&&(e=this.generateHeaders(),t=this.generateRows()),r.a.createElement("div",null,r.a.createElement(M,{handlePaginationClick:this.handlePaginationClick,dataLength:this.props.data.docs.length,page:this.state.page,tableMax:this.state.tableMax}),r.a.createElement(L,{headers:e,rows:t}),this.state.showUpdateModal&&r.a.createElement(P.a,{open:this.state.showUpdateModal,onClose:this.handleCloseModal,showCloseIcon:!1,center:!0},r.a.createElement(I,{handleSingleUpdateClick:this.props.handleSingleUpdateClick,selectedDoc:this.state.selectedDoc,closeModal:this.handleCloseModal})))}}]),t}(r.a.Component),F=(a(414),a(191)),B=a.n(F),U=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).generateTree=function(){if(!a.props.selectedTreeMetaDoc)return!1;var e={},t=a.props.selectedTreeMetaDoc._revisions,n=a.props.selectedTreeMetaDoc._winningRev;return a.traverseRevTree(t,e,n),e},a.traverseRevTree=function(e,t){t.name=e[0].slice(0,5)+"...",t.circleProps={className:""},t.gProps={className:"node"},t.children=[];var n=e[2];0===n.length&&(t.circleProps.className="leaf-rev",e[1]._deleted||(t.gProps.className=t.gProps.className+" leaf-node",t.gProps.onClick=function(){return a.props.handleTreeDocClick(a.props.selectedTreeMetaDoc._id,e[0])})),e[0]===a.props.selectedTreeMetaDoc._winningRev&&(t.circleProps.className="winning-rev"),e[1]._deleted&&(t.circleProps.className="deleted-rev");for(var r=0;r<n.length;r++){var c=a.traverseRevTree(n[r],{});t.children.push(c)}return t},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e,t=this.generateTree();return e=t?r.a.createElement(B.a,{data:t,height:300,width:450,svgProps:{className:"custom"},nodeOffset:-10,nodeRadius:10,margins:{bottom:0,left:0,right:100,top:20}}):r.a.createElement("p",null,"No tree to display"),r.a.createElement("div",null,r.a.createElement("div",{className:"tree-container"},r.a.createElement("h4",null,"Revision Tree Visualizer"),r.a.createElement(N.a,null,r.a.createElement(T.a,{className:"show-grid"},r.a.createElement(x.a,{md:3},e)))))}}]),t}(r.a.Component),_=a(195),W=a.n(_),H=(a(479),a(514)),V=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(H.a,{bsStyle:"primary",onClick:this.props.handlePickWinnerClick},"Make Winning Revision")}}]),t}(r.a.Component),z=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.selectedTreeDoc?this.props.selectedTreeDoc:{};return r.a.createElement("div",null,r.a.createElement("div",{className:"json-container"},r.a.createElement("h6",null,"Document Revision"),r.a.createElement(N.a,null,r.a.createElement(T.a,{className:"show-grid"},r.a.createElement(x.a,{md:3},r.a.createElement(W.a,{id:"json-pretty",json:e})))),r.a.createElement(V,{handlePickWinnerClick:this.props.handlePickWinnerClick})))}}]),t}(r.a.Component),G=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{style:{marginTop:40}},r.a.createElement(T.a,{className:"show-grid"},r.a.createElement(x.a,{md:4,xsOffset:1},r.a.createElement(U,{selectedTreeMetaDoc:this.props.selectedTreeMetaDoc,handleTreeDocClick:this.props.handleTreeDocClick})),r.a.createElement(x.a,{md:2,mdOffset:1},r.a.createElement(z,{selectedTreeDoc:this.props.selectedTreeDoc,handlePickWinnerClick:this.props.handlePickWinnerClick})))))}}]),t}(r.a.Component),Q=a(53),q=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).handleInsertClick=function(e){e.preventDefault();var t={name:a.state.name,age:parseInt(a.state.age,10),company:a.state.company,email:a.state.email,phone:a.state.phone};a.props.handleInsertClick(t)},a.handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(Q.a)({},n,t))},a.state={name:"",age:"",email:"",phone:"",company:""},a.handleChange=a.handleChange.bind(Object(w.a)(Object(w.a)(a))),a.handleInsertClick=a.handleInsertClick.bind(Object(w.a)(Object(w.a)(a))),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("form",{className:"form-inline",onSubmit:this.handleInsertClick},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.props.name,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"age"},"Age"),r.a.createElement("input",{type:"number",className:"form-control",name:"age",value:this.props.age,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",value:this.props.email,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"phone",className:"form-control",name:"phone",value:this.props.phone,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",{htmlFor:"company"},"Company"),r.a.createElement("input",{type:"text",className:"form-control",name:"company",value:this.props.company,onChange:this.handleChange}))),r.a.createElement("div",{style:{marginTop:40}},r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Save"}),r.a.createElement("button",{className:"btn btn-danger",value:"cancel",style:{paddingLeft:10},onClick:this.props.closeModal},"Cancel")))))}}]),t}(r.a.Component),J=a(515),Y=a(516),$=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:40}},r.a.createElement("div",{className:"sync-container"},r.a.createElement("h4",null,"Synchronize Database"),r.a.createElement(N.a,null,r.a.createElement(T.a,{className:"show-grid"},r.a.createElement(x.a,{md:3,xsOffset:3},r.a.createElement(J.a,null,r.a.createElement(H.a,{style:{marginRight:40},bsStyle:"primary",onClick:this.props.handleSyncClick,disabled:this.props.autoSync},"Sync"),r.a.createElement(Y.a,{inline:!0,id:"auto-sync-checkbox",checked:this.props.autoSync,onChange:this.props.handleAutoSyncClick},"AutoSync")))))))}}]),t}(r.a.Component),K=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Insert into turtleDB"),r.a.createElement(q,{handleInsertClick:this.props.handleInsertClick}),r.a.createElement($,{handleSyncClick:this.props.handleSyncClick,handleAutoSyncClick:this.props.handleAutoSyncClick,autoSync:this.props.autoSync}))}}]),t}(r.a.Component),X=a(197),Z=a.n(X),ee=(a(483),"demo"),te=new Z.a(ee);te.setRemote("http://localhost:3000"),window.turtleDB=te;var ae=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(g.a)(this,Object(b.a)(t).call(this))).setDefaultState=function(){e.setState({data:{docs:[],metaDocs:[]},benchmark:{time:null,type:null,count:null},selectedTreeMetaDoc:null,selectedTreeDoc:null,autoSync:!1,storage:{appUsage:"0 B",appQuota:"0 B",totalQuota:"0 B"}})},e.syncStateWithTurtleDB=function(){te.readAllMetaDocsAndDocs().then(function(t){return e.setState({data:t})}).then(function(){return e.updateTreeDocs()}).then(function(){return e.updateStorageInfo()})},e.updateTreeDocs=function(){if(e.state.selectedTreeMetaDoc){var t=e.state.data.metaDocs.find(function(t){return t._id===e.state.selectedTreeMetaDoc._id});t?e.setState({selectedTreeMetaDoc:t}):e.setState({selectedTreeMetaDoc:null})}e.setState({selectedTreeDoc:null})},e.updateStorageInfo=function(){te.getStorageInfo().then(function(t){return e.setState({storage:t})})},e.handleInsertClick=function(t){var a=Date.now();te.create(t).then(function(){var t=Date.now()-a;e.setState({benchmark:{time:t,type:"INSERT",count:1}})}).then(function(){return e.syncStateWithTurtleDB()})},e.handleDeleteClick=function(t){var a=Date.now();te.idb.deleteBetweenNumbers(0,t).then(function(){var n=Date.now()-a;e.setState({benchmark:{time:n,type:"DELETE",count:t}})}).then(function(){return e.syncStateWithTurtleDB()})},e.handleUpdateClick=function(t){var a=Date.now();te.editFirstNDocuments(t).then(function(){var n=Date.now()-a;e.setState({benchmark:{time:n,type:"EDIT",count:t}})}).then(function(){return e.syncStateWithTurtleDB()})},e.handleDropDatabase=function(){te.dropDB(ee).then(function(){return e.setDefaultState()})},e.handleSyncClick=function(){te.sync().then(function(){return e.syncStateWithTurtleDB()}).catch(function(e){return console.log("Sync click -",e)})},e.handleAutoSyncClick=function(){e.state.autoSync?(te.autoSyncOff(),clearInterval(e.intervalId)):(te.autoSyncOn(),e.intervalId=setInterval(e.syncStateWithTurtleDB.bind(Object(w.a)(Object(w.a)(e))),3e3)),e.setState(function(e){return{autoSync:!e.autoSync}})},e.handleCompactClick=function(){te.compactStore().then(function(){return e.syncStateWithTurtleDB()})},e.handleViewTreeClick=function(t){e.setState({selectedTreeMetaDoc:t}),e.setState({selectedTreeDoc:null})},e.handleSingleUpdateClick=function(t){te.update(t._id,t).then(function(){return e.syncStateWithTurtleDB()})},e.handleSingleDeleteClick=function(t){te.delete(t).then(function(){return e.syncStateWithTurtleDB()})},e.handleTreeDocClick=function(t,a){te.read(t,a).then(function(t){e.setState({selectedTreeDoc:t})})},e.handlePickWinnerClick=function(){console.log("Doc to select as winner:",e.state.selectedTreeDoc);var t=e.state.selectedTreeDoc;te.makeRevWinner(t).then(function(){e.syncStateWithTurtleDB()})},e.state={data:{docs:[],metaDocs:[]},benchmark:{time:null,type:null,count:null},selectedTreeMetaDoc:null,selectedTreeDoc:null,autoSync:!1,storage:{appUsage:"0 B",appQuota:"0 B",totalQuota:"0 B"}},e}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.syncStateWithTurtleDB()}},{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement(T.a,{className:"show-grid"},r.a.createElement(x.a,{md:2,xsOffset:1},r.a.createElement(K,{style:{marginTop:40},handleInsertClick:this.handleInsertClick,handleUpdateClick:this.handleUpdateClick,handleDeleteClick:this.handleDeleteClick,handleDropDatabase:this.handleDropDatabase,handleSyncClick:this.handleSyncClick,handleAutoSyncClick:this.handleAutoSyncClick,autoSync:this.state.autoSync,handleCompactClick:this.handleCompactClick})),r.a.createElement(x.a,null,r.a.createElement(G,{selectedTreeMetaDoc:this.state.selectedTreeMetaDoc,selectedTreeDoc:this.state.selectedTreeDoc,handleTreeDocClick:this.handleTreeDocClick,handlePickWinnerClick:this.handlePickWinnerClick}))),r.a.createElement(T.a,{className:"show-grid",style:{marginTop:40}},r.a.createElement(x.a,{md:9,mdPush:1},r.a.createElement(R,{data:this.state.data,handleSingleDeleteClick:this.handleSingleDeleteClick,handleSingleUpdateClick:this.handleSingleUpdateClick,handleViewTreeClick:this.handleViewTreeClick}))))}}]),t}(n.Component),ne=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={isLoading:!0},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.isAuthenticated){e.next=2;break}return e.abrupt("return");case 2:try{this.setState({isLoading:!0})}catch(t){alert(t)}this.setState({isLoading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderLanding",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"landing"},r.a.createElement("h1",null,"DB POC"),r.a.createElement("p",null,"A simple turtle DB POC")))}},{key:"renderMainPage",value:function(){return r.a.createElement(ae,null)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},this.props.isAuthenticated?this.renderMainPage():this.renderLanding())}}]),t}(n.Component),re=(a(485),function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h3",null,"Sorry, Page Not Found!"))}),ce=a(517),le=a(522),oe=a(38),ie=a(489),se=(a(487),function(e){var t=e.isLoading,a=e.text,n=e.loadingText,c=e.className,l=void 0===c?"":c,o=e.disabled,i=void 0!==o&&o,s=Object(oe.a)(e,["isLoading","text","loadingText","className","disabled"]);return r.a.createElement(H.a,Object.assign({bsStyle:"primary",className:"LoaderButton ".concat(l),disabled:i||t},s),t&&r.a.createElement(ie.a,{glyph:"refresh",className:"spinning"}),t?n:a)}),ue=(a(490),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({isLoading:!0}),e.prev=2,e.next=5,i.Auth.signIn(a.state.email,a.state.password);case 5:a.props.userHasAuthenticated(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0.message),a.setState({isLoading:!1});case 12:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handleLogout=function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Auth.signOut();case 2:a.userHasAuthenticated(!1),a.props.history.push("/login");case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={isLoading:!1,email:"",password:""},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(J.a,{controlId:"email",bsSize:"large"},r.a.createElement(ce.a,null,"Email"),r.a.createElement(le.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(J.a,{controlId:"password",bsSize:"large"},r.a.createElement(ce.a,null,"Password"),r.a.createElement(le.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(se,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Login",loadingText:"Logging in\u2026"})))}}]),t}(n.Component)),me=a(518),de=(a(492),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.setState({isLoading:!0}),a.setState({newUser:"test"}),a.setState({isLoading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleConfirmationSubmit=function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.setState({isLoading:!0});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={isLoading:!1,email:"",password:"",confirmPassword:"",confirmationCode:"",newUser:null},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0&&this.state.password===this.state.confirmPassword}},{key:"validateConfirmationForm",value:function(){return this.state.confirmationCode.length>0}},{key:"renderConfirmationForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleConfirmationSubmit},r.a.createElement(J.a,{controlId:"confirmationCode",bsSize:"large"},r.a.createElement(ce.a,null,"Confirmation Code"),r.a.createElement(le.a,{autoFocus:!0,type:"tel",value:this.state.confirmationCode,onChange:this.handleChange}),r.a.createElement(me.a,null,"Please check your email for the code.")),r.a.createElement(se,{block:!0,bsSize:"large",disabled:!this.validateConfirmationForm(),type:"submit",isLoading:this.state.isLoading,text:"Verify",loadingText:"Verifying\u2026"}))}},{key:"renderForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(J.a,{controlId:"email",bsSize:"large"},r.a.createElement(ce.a,null,"Email"),r.a.createElement(le.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(J.a,{controlId:"password",bsSize:"large"},r.a.createElement(ce.a,null,"Password"),r.a.createElement(le.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(J.a,{controlId:"confirmPassword",bsSize:"large"},r.a.createElement(ce.a,null,"Confirm Password"),r.a.createElement(le.a,{value:this.state.confirmPassword,onChange:this.handleChange,type:"password"})),r.a.createElement(se,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Signup",loadingText:"Signing up\u2026"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Signup"},null===this.state.newUser?this.renderForm():this.renderConfirmationForm())}}]),t}(n.Component)),he=function(e){var t=e.component,a=e.props,n=Object(oe.a)(e,["component","props"]);return r.a.createElement(j.a,Object.assign({},n,{render:function(e){return r.a.createElement(t,Object.assign({},e,a))}}))},pe=a(179),fe=function(e){var t=e.component,a=e.props,n=Object(oe.a)(e,["component","props"]);return r.a.createElement(j.a,Object.assign({},n,{render:function(e){return a.isAuthenticated?r.a.createElement(t,Object.assign({},e,a)):r.a.createElement(pe.a,{to:"/login?redirect=".concat(e.location.pathname).concat(e.location.search)})}}))};var ge=function(e){var t=e.component,a=e.props,n=Object(oe.a)(e,["component","props"]),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[[]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i").exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}("redirect");return r.a.createElement(j.a,Object.assign({},n,{render:function(e){return a.isAuthenticated?r.a.createElement(pe.a,{to:""===c||null===c?"/":c}):r.a.createElement(t,Object.assign({},e,a))}}))},be=function(e){var t=e.childProps;return r.a.createElement(D.a,null,r.a.createElement(he,{path:"/",exact:!0,component:ne,props:t}),r.a.createElement(ge,{path:"/login",exact:!0,component:ue,props:t}),r.a.createElement(ge,{path:"/signup",exact:!0,component:de,props:t}),r.a.createElement(fe,{path:"/main",exact:!0,component:ae,props:t}),r.a.createElement(j.a,{component:re}))},Ee=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).userHasAuthenticated=function(e){a.setState({isAuthenticated:e})},a.handleLogout=function(){var e=Object(h.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Auth.signOut();case 2:a.userHasAuthenticated(!1);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={isAuthenticated:!1,isAuthenticating:!0},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Auth.currentSession();case 3:this.userHasAuthenticated(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"No current user"!==e.t0&&alert(e.t0);case 9:this.setState({isAuthenticating:!1});case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return!this.state.isAuthenticating&&r.a.createElement("div",{className:"App container"},r.a.createElement(k.a,{fluid:!0,collapseOnSelect:!0},r.a.createElement(k.a.Header,null,r.a.createElement(k.a.Brand,null,r.a.createElement(y.a,{to:"/"},"DB POC")),r.a.createElement(k.a.Toggle,null)),r.a.createElement(k.a.Collapse,null,r.a.createElement(O.a,{pullRight:!0},this.state.isAuthenticated?r.a.createElement(S.a,{onClick:this.handleLogout},"Logout"):r.a.createElement(n.Fragment,null,r.a.createElement(v.LinkContainer,{to:"/signup"},r.a.createElement(S.a,null,"Signup")),r.a.createElement(v.LinkContainer,{to:"/login"},r.a.createElement(S.a,null,"Login")))))),r.a.createElement(be,{childProps:e}))}}]),t}(n.Component),ve=Object(C.a)(Ee);s.a.configure({Auth:{mandatorySignIn:!0,region:u.REGION,userPoolId:u.USER_POOL_ID,identityPoolId:u.IDENTITY_POOL_ID,userPoolWebClientId:u.APP_CLIENT_ID}}),l.a.render(r.a.createElement(o.a,null,r.a.createElement(ve,null)),document.getElementById("root"))},79:function(e,t){}},[[200,2,1]]]);
//# sourceMappingURL=main.4ff708bb.chunk.js.map