"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[752],{9752:function(e,t,s){s.r(t),s.d(t,{default:function(){return se}});var r=s(8683),i=s(5671),n=s(3144),o=s(136),a=s(5716),l=s(2791),c=s(5987),u=s(885),d="ProfileInfo_profileInfo__QG8TK",p="ProfileInfo_profile_avatar__VJNQY",h="ProfileInfo_profile_top__43BOW",f=s(2902),j="ProfileStatus_status_span__zHK1n",m="ProfileStatus_status_input__bTamG",x=s(184),v=function(e){var t=e.status,s=e.updateStatus,r=e.isOwner,i=(0,l.useState)(!1),n=(0,u.Z)(i,2),o=n[0],a=n[1],c=(0,l.useState)(t),d=(0,u.Z)(c,2),p=d[0],h=d[1];return(0,l.useEffect)((function(){h(t)}),[t]),(0,x.jsxs)("h3",{children:[!o&&(0,x.jsx)("div",{children:(0,x.jsx)("span",{className:j,onDoubleClick:function(){if(!r)return!1;a(!0)},children:t||"no status :("})}),o&&(0,x.jsx)("div",{children:(0,x.jsx)("input",{className:m,onChange:function(e){h(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),s(p)},placeholder:"status",value:p})})]})},_=s(1605),P="ProfileData_profile_data__9qsUa",b="ProfileData_description__QBhvE",g="ProfileData_edit__tP1nd",S="Contact_contact__iBnrC",w="Contact_title__ZKO0l",k="Contact_value__przRR",y=function(e){var t=e.contactTitle,s=e.contactValue;return(0,x.jsxs)("div",{className:S,children:[(0,x.jsxs)("span",{className:w,children:[t,":"]}),(0,x.jsx)("span",{className:k,children:s})]})},N=function(e){var t=e.profile,s=e.isOwner,r=e.setEditMode;return(0,x.jsxs)("div",{className:P,children:[s&&(0,x.jsx)("div",{className:g,children:(0,x.jsx)("button",{onClick:r,children:"Edit profile"})}),(0,x.jsxs)("div",{className:b,children:[(0,x.jsx)("h2",{children:t.fullName}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me: "}),t.aboutMe]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking job: "}),t.lookingForAJob?"yes":"no"]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My skills: : "}),t.lookingForAJobDescription]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts: "}),t.contacts&&Object.keys(t.contacts).map((function(e){return(0,x.jsx)(y,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})]})},Z=s(6139),D=s(704),O=s(8195),C="ProfileDataForm_error__DYUqN",I=(0,D.Z)({form:"edit_profile"})((function(e){var t=e.handleSubmit,s=e.initialValues,r=e.error;return(0,x.jsxs)("form",{onSubmit:t,children:[(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"Save"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full name: "}),(0,x.jsx)(Z.Z,{placeholder:"full name",name:"fullName",component:O.I}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me: "}),(0,x.jsx)(Z.Z,{placeholder:"about me",name:"aboutMe",component:O.g})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking job: "}),(0,x.jsx)(Z.Z,{name:"lookingForAJob",component:O.I,type:"checkbox"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My skills: "}),(0,x.jsx)(Z.Z,{placeholder:"my skills",name:"lookingForAJobDescription",component:O.g})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts: "}),s.contacts&&Object.keys(s.contacts).map((function(e){return(0,x.jsxs)("div",{children:[(0,x.jsxs)("b",{children:[e,":"]}),(0,x.jsx)(Z.Z,{placeholder:e,name:"contacts."+e,component:O.I}),r&&(0,x.jsx)("div",{className:C,children:r})]},e)}))]})]})]})})),A=["profile","updateStatus","status","isOwner","saveSelectedPhoto","saveProfile"],M=function(e){var t=e.profile,s=e.updateStatus,r=e.status,i=e.isOwner,n=e.saveSelectedPhoto,o=e.saveProfile,a=((0,c.Z)(e,A),(0,l.useState)(!1)),j=(0,u.Z)(a,2),m=j[0],P=j[1];if(!t)return(0,x.jsx)(f.p,{});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:h,children:(0,x.jsx)("img",{src:"https://www.xmple.com/wallpaper/blue-violet-gradient-linear-1920x1080-c2-1e90ff-66078b-a-225-f-14.svg"})}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("div",{className:p,children:(0,x.jsx)("img",{src:t.photos?t.photos.large:_})}),i&&(0,x.jsx)("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&n(e.target.files[0])}}),(0,x.jsx)(v,{status:r,updateStatus:s,isOwner:i}),m?(0,x.jsx)(I,{onSubmit:function(e){o(e)},initialValues:t}):(0,x.jsx)(N,{profile:t,isOwner:i,setEditMode:function(){return P(!0)}})]})]})},U=s(4136),F="MyPosts_postsBlock__lB-pf",B="MyPosts_myPostsHeader__Tner+",E="MyPosts_textArea_Button__PXBSb",T="Post_post__wW6-Y",z="Post_postStyle__RX8XC",J="Post_avatarOfPost__Y5UhE",R="Post_likeCount__kwfc5",V=function(e){var t=e.post,s=e.likeCount;return(0,x.jsx)("div",{className:T,children:(0,x.jsxs)("div",{className:J,children:[(0,x.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/004/899/833/large_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg"}),(0,x.jsx)("div",{className:z,children:t}),(0,x.jsxs)("div",{className:R,children:[(0,x.jsxs)("span",{children:[" ",(0,x.jsx)("img",{src:"https://www.pinclipart.com/picdir/middle/59-595072_heart-instagram-like-icon-png-clipart.png",alt:"likes"})]})," ",s]})]})})},G=s(3079),Y=["addPost","posts"],$=(0,G.D)(30),q=(0,D.Z)({form:"ProfileAddNewPostFormRedux"})((function(e){return(0,x.jsxs)("form",{className:E,onSubmit:e.handleSubmit,children:[(0,x.jsx)("div",{children:(0,x.jsx)(Z.Z,{component:O.g,name:"newPostText",placeholder:"What's new?",validate:[G.C,$]})}),(0,x.jsx)("div",{children:(0,x.jsx)("button",{children:"Add post"})})]})})),K=s(8687),Q=(0,K.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e((0,U.Pi)(t))}}}))((function(e){var t=e.addPost,s=e.posts,r=((0,c.Z)(e,Y),s.map((function(e,t){return(0,x.jsx)(V,{id:e.id,post:e.post,likeCount:e.likeCount},t)})));return(0,x.jsxs)("div",{className:F,children:[(0,x.jsx)("h3",{className:B,children:"My posts"}),(0,x.jsx)(q,{onSubmit:function(e){t(e.newPostText)}}),r]})})),W=["userID","profile","status","updateStatus","isOwner","saveSelectedPhoto","saveProfile"],X=function(e){var t=e.userID,s=e.profile,r=e.status,i=e.updateStatus,n=e.isOwner,o=e.saveSelectedPhoto,a=e.saveProfile;(0,c.Z)(e,W);return(0,x.jsxs)("div",{children:[(0,x.jsx)(M,{profile:s,status:r,updateStatus:i,isOwner:n,saveSelectedPhoto:o,saveProfile:a,userID:t}),(0,x.jsx)(Q,{})]})},H=s(9271),L=s(2932),ee=s(7781),te=function(e){(0,o.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,i.Z)(this,s),t.apply(this,arguments)}return(0,n.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.authorizedUserID)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,x.jsx)(X,(0,r.Z)((0,r.Z)({},this.props),{},{userID:this.props.authorizedUserID,isOwner:!this.props.match.params.userID,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,saveSelectedPhoto:this.props.saveSelectedPhoto}))}}]),s}(l.Component),se=(0,ee.qC)((0,K.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserID:e.auth.id}}),{getUserProfile:U.d$,getUserStatus:U.GP,updateStatus:U.OG,saveSelectedPhoto:U.CR,saveProfile:U.Ms}),H.EN,L.D)(te)},2932:function(e,t,s){s.d(t,{D:function(){return u}});var r=s(8683),i=s(5987),n=(s(2791),s(9271)),o=s(8687),a=s(184),l=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function u(e){return(0,o.$j)(c)((function(t){var s=t.isAuth,o=(0,i.Z)(t,l);return s?(0,a.jsx)(e,(0,r.Z)({},o)):(0,a.jsx)(n.l_,{to:"/login"})}))}},1605:function(e,t,s){e.exports=s.p+"static/media/avatar_default.2ca07d6b63661cd127d5.webp"},5987:function(e,t,s){s.d(t,{Z:function(){return i}});var r=s(3366);function i(e,t){if(null==e)return{};var s,i,n=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)s=o[i],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}}}]);
//# sourceMappingURL=752.81261cdb.chunk.js.map