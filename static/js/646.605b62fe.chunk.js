"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[646],{8044:function(e,n,s){s.d(n,{z:function(){return i}});var r=s(8683),o=s(5987),t=(s(2791),"SuperButton_default__2H6xO"),a=s(184),l=["children"],i=function(e){var n=e.children,s=(0,o.Z)(e,l);return(0,a.jsxs)("button",(0,r.Z)((0,r.Z)({className:t},s),{},{children:[" ",n," "]}))}},7646:function(e,n,s){s.r(n),s.d(n,{default:function(){return k}});var r=s(5671),o=s(3144),t=s(136),a=s(5716),l=s(2791),i=s(885),u="Paginator_paginator__7cO3l",c="Paginator_default__UUbaO",p="Paginator_currentPage__2w6It",f=s(8044),d=s(184),g=function(e){for(var n=e.totalItemsCount,s=e.pageSize,r=e.currentPage,o=e.changePage,t=e.portionSize,a=Math.ceil(n/s),g=[],h=1;h<=a;h++)g.push(h);var w=Math.ceil(a/t),P=(0,l.useState)(1),j=(0,i.Z)(P,2),v=j[0],x=j[1],_=(v-1)*t+1,m=v*t;return(0,d.jsxs)("div",{className:u,children:[v>1&&(0,d.jsx)(f.z,{onClick:function(){x(v-1)},children:" PREV "}),g.filter((function(e){return e>=_&&e<=m})).map((function(e){return(0,d.jsx)("span",{className:"".concat(c," ").concat(e===r?p:""),onClick:function(n){return o(e)},children:e},e)})),v<w&&(0,d.jsx)(f.z,{onClick:function(){x(v+1)},children:" NEXT "})]})},h=s(1523),w="User_userBlock__bJr6j",P="User_avatarBlock__aLDN1",j="User_avatar__V2sdX",v="User_userInfo__DsfXp",x=s(1605),_=function(e){var n=e.user,s=e.unfollow,r=e.follow;return(0,d.jsxs)("div",{className:w,children:[(0,d.jsxs)("span",{className:P,children:[(0,d.jsx)("div",{children:(0,d.jsx)(h.OL,{to:"/profile/"+n.id,children:(0,d.jsx)("img",{src:n.photos.small?n.photos.small:x,className:j,alt:"avatar"})})}),(0,d.jsxs)("div",{children:[" ",n.followed?(0,d.jsx)(f.z,{disabled:n.followingInProgress,onClick:function(){s(n.id)},children:"Unfollowed"}):(0,d.jsx)(f.z,{disabled:n.followingInProgress,onClick:function(){r(n.id)},children:"Followed"})]})]}),(0,d.jsxs)("span",{className:v,children:[(0,d.jsxs)("div",{children:[" ",(0,d.jsx)("span",{children:"name: "}),n.name.toUpperCase()]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"status: "}),n.status?n.status:"no status"]})]})]})},m=function(e){var n=e.totalUsersCount,s=e.pageSize,r=e.currentPage,o=e.changePage,t=e.users,a=e.unfollow,l=e.follow;return(0,d.jsxs)("div",{children:[(0,d.jsx)(g,{totalItemsCount:n,pageSize:s,currentPage:r,changePage:o,portionSize:10}),(0,d.jsx)("div",{children:t.map((function(e){return(0,d.jsx)(_,{user:e,followingInProgress:e.followingInProgress,unfollow:a,follow:l},e.id)}))})]})},C=s(8687),b=s(6342),z=s(5667),U=s(7781),S=function(e){(0,t.Z)(s,e);var n=(0,a.Z)(s);function s(){var e;(0,r.Z)(this,s);for(var o=arguments.length,t=new Array(o),a=0;a<o;a++)t[a]=arguments[a];return(e=n.call.apply(n,[this].concat(t))).follow=function(n){e.props.follow(n),console.log("".concat(n," will be followed"))},e.unfollow=function(n){e.props.unfollow(n),console.log("".concat(n," will be unfollowed"))},e.changePage=function(n){e.props.setCurrentPage(n),e.props.getUsers(n,e.props.pageSize)},e}return(0,o.Z)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,d.jsxs)("div",{children:[this.props.isLoading&&(0,d.jsx)(z.p,{}),(0,d.jsx)(m,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,changePage:this.changePage,unfollow:this.unfollow,follow:this.follow,isAuth:this.props.isAuth})]})}}]),s}(l.Component),k=(0,U.qC)((0,C.$j)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isLoading:e.app.isLoading,isAuth:e.auth.isAuth}}),{follow:b.iR,unfollow:b.Ky,setCurrentPage:b.B7,getUsers:b.Zw}))(S)},1605:function(e,n,s){e.exports=s.p+"static/media/avatar_default.2ca07d6b63661cd127d5.webp"},5987:function(e,n,s){s.d(n,{Z:function(){return o}});var r=s(3366);function o(e,n){if(null==e)return{};var s,o,t=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)s=a[o],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}}}]);
//# sourceMappingURL=646.605b62fe.chunk.js.map