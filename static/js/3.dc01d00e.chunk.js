"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[3],{8003:function(s,e,a){a.r(e),a.d(e,{default:function(){return A}});a(2791);var n="Dialogs_dialogs__oe96H",i="Dialogs_dialogsBlock__qBg+B",r="Dialogs_dialogItems__VFpmc",t="Dialogs_dialogItem__Gr+yc",o="Dialogs_dialogItemLink__SO+I7",d="Dialogs_messageItems__2qxh-",l="Dialogs_messageItem__cPCfl",c="Dialogs_addMessageForm__8nO+b",u="Dialogs_field__cBI1v",m=a(184),g=function(s){var e=s.message;return(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:l,children:e})})},_=a(5987),f=a(1523),h=["id","name","avatar"],j=function(s){var e=s.id,a=s.name,n=s.avatar,i=((0,_.Z)(s,h),"messages/"+e);return(0,m.jsx)("div",{className:o,children:(0,m.jsxs)(f.OL,{to:i,className:t,children:[(0,m.jsx)("img",{src:n,alt:a}),(0,m.jsx)("span",{children:a})]})})},v=a(6139),x=a(704),D=a(8195),p=a(3079),N=a(8044),y=(0,p.D)(100),I=(0,x.Z)({form:"dialogAddMessageForm"})((function(s){return(0,m.jsxs)("form",{onSubmit:s.handleSubmit,className:c,children:[(0,m.jsx)(v.Z,{component:D.g,name:"newMessageBody",placeholder:"Enter your message...",validate:[p.C,y],className:u}),(0,m.jsx)(N.z,{type:"submit",children:"Send message"})]})})),b=function(s){var e=s.dialogsPage;return(0,m.jsxs)("div",{className:n,children:[(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("div",{className:r,children:e.dialogs.map((function(s,e){return(0,m.jsx)(j,{id:s.id,name:s.name,avatar:s.avatar},e)}))}),(0,m.jsx)("div",{className:d,children:e.messages.map((function(s){return(0,m.jsx)(g,{id:s.id,message:s.message},s.id)}))})]}),(0,m.jsx)(I,{onSubmit:function(e){s.sendMessage(e.newMessageBody),e.newMessageBody=""}})]})},w=a(8687),B=a(7781),M=a(2932),k=a(9403),A=(0,B.qC)((0,w.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){s((0,k.dI)(e))}}})),M.D)(b)},2932:function(s,e,a){a.d(e,{D:function(){return c}});var n=a(8683),i=a(5987),r=(a(2791),a(9271)),t=a(8687),o=a(184),d=["isAuth"],l=function(s){return{isAuth:s.auth.isAuth}};function c(s){return(0,t.$j)(l)((function(e){var a=e.isAuth,t=(0,i.Z)(e,d);return a?(0,o.jsx)(s,(0,n.Z)({},t)):(0,o.jsx)(r.l_,{to:"/login"})}))}}}]);
//# sourceMappingURL=3.dc01d00e.chunk.js.map