"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[923],{28774:function(D,o,e){e.r(o),e.d(o,{default:function(){return b}});var g=e(48305),y=e.n(g),n=e(75271),r=e(77099),C=e(2405),x=e(78470),a=null,s=e(82079),T=e(52676),l={},u={name:"blog",description:"A react library developed with dumi",version:"0.0.1",license:"MIT",authors:["cyuinhsin"]},i="browser",d=void 0,v={footer:'Copyright \xA9 2024 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,name:"blog"},m=!0;function b(){var j=(0,r.pC)(),E=(0,n.useState)(!1),c=y()(E,2),f=c[0],h=c[1],p=(0,n.useRef)(r.m8.location.pathname);(0,n.useEffect)(function(){return r.m8.listen(function(t){t.location.pathname!==p.current&&(p.current=t.location.pathname,document.documentElement.scrollTo(0,0))})},[]);var A=n.useMemo(function(){var t={pkg:u,historyType:i,entryExports:l,demos:null,components:a,locales:s.k,loading:f,setLoading:h,hostname:d,themeConfig:v,_2_level_nav_available:m};return Object.defineProperty(t,"demos",{get:function(){return(0,C.Kp)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{}}}),t},[u,i,l,a,s.k,f,h,d,v,m]);return(0,T.jsx)(x.D.Provider,{value:A,children:j})}}}]);