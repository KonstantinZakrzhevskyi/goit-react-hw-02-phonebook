(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={section:"Section_section__1rNWc",section__title:"Section_section__title__4Y6lT"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3zJzH",form__label:"ContactForm_form__label__Kp4gt",form__input:"ContactForm_form__input__2L4nJ",form__btn:"ContactForm_form__btn__1e9xP"}},20:function(t,e,n){},3:function(t,e,n){t.exports={contact__list:"ContactList_contact__list__3Er8Z",contact__item:"ContactList_contact__item__3CyF_",contact__text:"ContactList_contact__text__C8HF-",contact__btn:"ContactList_contact__btn__1csR5"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),o=(n(20),n(15)),s=n(5),l=n(6),_=n(8),u=n(7),m=n(13),b=n.n(m),d=n(11),f=n.n(d),h=n(0),j=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:f.a.section,children:[e&&Object(h.jsx)("h2",{className:f.a.section__title,children:e}),n]})},p=n(14),x=n(2),C=n.n(x),O=function(t){Object(_.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:C.a.form__label,children:["Name",Object(h.jsx)("input",{className:C.a.form__input,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputChange})]}),".",Object(h.jsxs)("label",{className:C.a.form__label,children:["Number",Object(h.jsx)("input",{className:C.a.form__input,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputChange})]}),Object(h.jsx)("button",{className:C.a.form__btn,type:"submit",disabled:!e,children:"Add contact"})]})}}]),n}(a.Component),v=O,g=n(9),N=n.n(g),y=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:N.a.filter__label,children:[Object(h.jsx)("p",{className:N.a.filter__text,children:"Find contacts by name"}),Object(h.jsx)("input",{className:N.a.filter__input,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n})]})},A=n(3),S=n.n(A),F=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:S.a.contact__list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:S.a.contact__item,children:[Object(h.jsxs)("p",{className:S.a.contact__text,children:[a,":"]}),Object(h.jsx)("p",{className:S.a.contact__text,children:c}),Object(h.jsx)("button",{className:S.a.contact__btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},z=(n(30),function(t){Object(_.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:b.a.generate(),name:n,number:a};c.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts.")):t.setState((function(t){return{contacts:[r].concat(Object(o.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j,{title:"Phonebook",children:Object(h.jsx)(v,{onSubmit:this.addContact})}),Object(h.jsxs)(j,{title:"Contacts",children:[Object(h.jsx)(y,{value:t,onChange:this.changeFilter}),Object(h.jsx)(F,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component)),k=z;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={filter__text:"Filter_filter__text__1P2jq",filter__input:"Filter_filter__input__12Ph6"}}},[[31,1,2]]]);
//# sourceMappingURL=main.28f2766c.chunk.js.map