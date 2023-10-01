"use strict";(self.webpackChunkcyf_tutorial=self.webpackChunkcyf_tutorial||[]).push([[55],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>T});var i=n(7294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var o=i.createContext({}),u=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return i.createElement(o.Provider,{value:e},t.children)},g="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,o=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),g=u(n),c=s,T=g["".concat(o,".").concat(c)]||g[c]||m[c]||a;return n?i.createElement(T,l(l({ref:e},p),{},{components:n})):i.createElement(T,l({ref:e},p))}));function T(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,l=new Array(a);l[0]=c;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=t,r[g]="string"==typeof t?t:s,l[1]=r;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5316:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=n(7462),s=(n(7294),n(3905));const a={title:"\u52a8\u753b\u4e0e\u653b\u51fb",description:"\u7b80\u5355\u7684Sprite\u52a8\u753b\u548c\u653b\u51fb",sidebar_position:3},l=void 0,r={unversionedId:"tutorial-basics/animation-and-attack",id:"tutorial-basics/animation-and-attack",title:"\u52a8\u753b\u4e0e\u653b\u51fb",description:"\u7b80\u5355\u7684Sprite\u52a8\u753b\u548c\u653b\u51fb",source:"@site/docs/tutorial-basics/animation-and-attack.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/animation-and-attack",permalink:"/CYF-Tur/docs/tutorial-basics/animation-and-attack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/animation-and-attack.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u52a8\u753b\u4e0e\u653b\u51fb",description:"\u7b80\u5355\u7684Sprite\u52a8\u753b\u548c\u653b\u51fb",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4f60\u7684\u7b2c\u4e00\u4e2a\u6218\u6597",permalink:"/CYF-Tur/docs/tutorial-basics/first-battle"},next:{title:"Lua",permalink:"/CYF-Tur/docs/tutorial-basics/using-lua"}},o={},u=[{value:"\u52a8\u753b\u6548\u679c",id:"\u52a8\u753b\u6548\u679c",level:2},{value:"\u4fee\u6539\u653b\u51fb",id:"\u4fee\u6539\u653b\u51fb",level:2}],p={toc:u},g="wrapper";function m(t){let{components:e,...a}=t;return(0,s.kt)(g,(0,i.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u52a8\u753b\u6548\u679c"},"\u52a8\u753b\u6548\u679c"),(0,s.kt)("p",null,"\u53ef\u80fd\u5f88\u591a\u4eba\u8981\u95ee\u4e86\uff1a\u6211\u600e\u4e48\u8ba9\u654c\u4eba\u52a8\u8d77\u6765\u5440\uff1f"),(0,s.kt)("p",null,"\u5f88\u7b80(fu)\u5355(za)\uff0c\u6211\u4eec\u5f00\u59cb\uff01"),(0,s.kt)("p",null,"\u6211\u4eec\u8981\u5b8c\u5584\u4e00\u4e0b\u4e4b\u524d\u7684Frisk\u7ef4\u5409\u5c14\u6218",(0,s.kt)("del",{parentName:"p"},"\uff08\u6539p3\u7684\u65f6\u5019\u6ca1\u6709\u770bp4\uff0c\u539f\u6765\u5f53\u65f6\u505a\u7684\u662f\u80a5\u8089\u514b\u65af\u554a\uff09"),"\uff0c\u7ed9\u52a0\u4e00\u4e2a\u52a8\u753b"),(0,s.kt)("p",null,"\u9996\u5148\u627e\u5230\u4e00\u4e2a\u7a7a\u767d\u6587\u4ef6\uff0c\u547d\u540d\u4e3a",(0,s.kt)("inlineCode",{parentName:"p"},"empty"),"\uff0c\u628a\u654c\u4eba\u56fe\u7247\u66f4\u6362\u4e3a\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},'sprite="empty"')),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(2590).Z,width:"167",height:"201"})),(0,s.kt)("p",null,"\u7136\u540e\u5bfc\u5165\u7d20\u6750\uff0c\u6211\u8fd9\u91cc\u5047\u88c5\u6211\u6709\u4e24\u4e2a\u56fe\uff08\u4e00\u4e2a\u540d\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"\u7ef4\u5409\u5c141.jpg"),"\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"\u7ef4\u5409\u5c142.jpg"),"\uff09\uff0c\u7136\u540e\u5728\u811a\u672c\u6587\u4ef6\u5939\u91cc\u521b\u5efa\u4e00\u4e2a\u52a8\u753b\u6587\u4ef6\u5939"),(0,s.kt)("p",null,"\u6211\u8fd9\u91cc\u6587\u4ef6\u5939\u540d\u5b57\u53ebanim_model"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1472).Z,width:"118",height:"141"})),(0,s.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u811a\u672c\uff0c\u53eb\u505a",(0,s.kt)("inlineCode",{parentName:"p"},"anim_model.lua")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="anim_model.lua"',title:'"anim_model.lua"'},'anim_model = CreateSprite("\u7ef4\u5409\u5c14")\nanim_model.SetAnimation({"\u7ef4\u5409\u5c141","\u7ef4\u5409\u5c14","\u7ef4\u5409\u5c142"},1/2)\n')),(0,s.kt)("p",null,"\u5927\u6982\u7684\u610f\u601d\u5c31\u662f\u521b\u5efa\u4e00\u4e2aSprite\uff0c\u7136\u540e\u8bbe\u7f6eta\u7684\u9010\u5e27\u52a8\u753b"),(0,s.kt)("p",null,"\u7136\u540e\u6211\u4eec\u8fd8\u5f97\u5728\u906d\u9047\u811a\u672c(",(0,s.kt)("inlineCode",{parentName:"p"},"encounter.lua"),")\u5f00\u5934\u5f15\u7528\u8be5\u6587\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'require "anim_model/anim_model"\n')),(0,s.kt)("h2",{id:"\u4fee\u6539\u653b\u51fb"},"\u4fee\u6539\u653b\u51fb"),(0,s.kt)("p",null,"\u771f\u6b63\u7684\u6218\u6597\u90fd\u662f\u6709\u5f88\u591a\u7279\u522b\u7684\u653b\u51fb\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u4fee\u6539\u4e00\u4e0b\u653b\u51fb"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Waves")," \u6587\u4ef6\u5939\u91cc\u90fd\u662f\u653b\u51fb\u811a\u672c\uff0c\u6211\u4eec\u5148\u4e0d\u7406\u89e3\u653b\u51fb\u662f\u600e\u4e48\u505a\u5230\u7684\uff0c\u5148\u4fee\u6539\u4e00\u4e0b"),(0,s.kt)("p",null,"\u5148\u90a3 ",(0,s.kt)("inlineCode",{parentName:"p"},"bullettest_touhou.lua")," \u8fd9\u4e2a\u6587\u4ef6\u5f00\u5200\uff0c",(0,s.kt)("del",{parentName:"p"},"\u5148\u62ff\u8fd9\u4e2a\u7edd\u5bf9\u4e0d\u662f\u56e0\u4e3a\u6587\u4ef6\u540d\u6709\u4e1c\u65b9\uff08")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="bullettest_touhou,lua"',title:'"bullettest_touhou,lua"'},"if(spawntimer % 30 == 0) then\n    local numbullets = 10\n    for i=1,numbullets+1 do\n        local bullet = CreateProjectile('bullet', 0, yOffset)\n        bullet.SetVar('timer', 0)\n        bullet.SetVar('offset', math.pi * 2 * i / numbullets)\n        bullet.SetVar('negmult', mult)\n        bullet.SetVar('lerp', 0)\n        table.insert(bullets, bullet)\n    end\n    mult = mult + 0.05\n  end\n")),(0,s.kt)("p",null,"\u7406\u89e3\u4e00\u4e0b\u610f\u601d\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"spawntimer")," \u5e94\u8be5\u662f\u751f\u6210\u5f39\u5e55\u7684\u8ba1\u65f6\u5668\uff0c\u6211\u4eec\u6539\u4e00\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"if(spawntimer % 3 == 0) then --\u6539\u52a8\u4e86\u8fd9\u91cc\n    local numbullets = 10\n    for i=1,numbullets+1 do\n        local bullet = CreateProjectile('bullet', 0, yOffset)\n        bullet.SetVar('timer', 0)\n        bullet.SetVar('offset', math.pi * 2 * i / numbullets)\n        bullet.SetVar('negmult', mult)\n        bullet.SetVar('lerp', 0)\n        table.insert(bullets, bullet)\n    end\n    mult = mult + 0.05\n  end\n")),(0,s.kt)("p",null,"\u518d\u770b\u5230\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"local posx = (70*lerp)*math.sin(timer*bullet.GetVar('negmult') + offset)\nlocal posy = (70*lerp)*math.cos(timer + offset) + yOffset - lerp*50\n")),(0,s.kt)("p",null,"posx\u548cposy\u90fd\u662f\u5c40\u90e8\u53d8\u91cf\uff0c\u90a3\u5b83\u4ee3\u8868\u4ec0\u4e48\u5462\uff1f"),(0,s.kt)("p",null,"\u4e00\u822c\u7684\u6e38\u620f\u7a0b\u5e8f\u733f\u90fd\u77e5\u9053\uff0c\u4e00\u822c\u53d6\u540d\u8fd9\u4e2a\u53d8\u91cf\u7684\u90fd\u662f\u6709\u5173\u79fb\u52a8\u7684 "),(0,s.kt)("admonition",{title:"\u4fe1\u606f",type:"info"},(0,s.kt)("p",{parentName:"admonition"},'(pos:\u5373position\uff0c"\u4f4d\u7f6e"\u82f1\u6587\u540d\u7f29\u5199)')),(0,s.kt)("p",null,"\u6211\u4eec\u4ed4\u7ec6\u770b\u770b\uff0c\u8fd9\u662f\u5173\u4e8e\u79fb\u52a8\u901f\u5ea6\u7684\uff0c\u6211\u4eec\u6539\u4e00\u6539"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"local posx = (170*lerp)*math.sin(timer*bullet.GetVar('negmult') + offset) --\u4e0a\u9762\u768470\u6539\u4e3a170\nlocal posy = (170*lerp)*math.cos(timer + offset) + yOffset - lerp*50\n")),(0,s.kt)("p",null,"\u5173\u4e8e\u6d4b\u8bd5\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u906d\u9047\u811a\u672c\u6539\u4e00\u4e0b\uff0c\u8fbe\u5230\u53ea\u7528\u4e00\u4e2a\u653b\u51fb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'nextwaves = { possible_attacks[math.random(#possible_attacks)] }  --\u4fee\u6539\u524d\n\nnextwaves = {"bullettest_touhou"}  --\u4fee\u6539\u540e\n')),(0,s.kt)("p",null,"\u597d\u4e86\uff0c\u5f00\u59cb\u5427\uff0c",(0,s.kt)("del",{parentName:"p"},"\u73a9\u6e38\u620f\u8981\u7b11\u7740\u73a9"),"\n",(0,s.kt)("img",{src:n(9178).Z,width:"1281",height:"1000"})))}m.isMDXComponent=!0},1472:(t,e,n)=>{n.d(e,{Z:()=>i});const i="data:image/png;base64,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"},9178:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/attack-toutou-7f677206fabd66b0abb532d988f3e8d9.png"},2590:(t,e,n)=>{n.d(e,{Z:()=>i});const i="data:image/png;base64,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"}}]);