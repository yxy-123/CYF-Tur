"use strict";(self.webpackChunkcyf_tutorial=self.webpackChunkcyf_tutorial||[]).push([[377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"Lua",description:"\u591a\u5c11\u6cbe\u70b9\u57fa\u7840\u8bed\u6cd5**(\u91cd\u8981)**",sidebar_position:4},i=void 0,o={unversionedId:"tutorial-basics/using-lua",id:"tutorial-basics/using-lua",title:"Lua",description:"\u591a\u5c11\u6cbe\u70b9\u57fa\u7840\u8bed\u6cd5**(\u91cd\u8981)**",source:"@site/docs/tutorial-basics/using-lua.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/using-lua",permalink:"/docs/tutorial-basics/using-lua",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/using-lua.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Lua",description:"\u591a\u5c11\u6cbe\u70b9\u57fa\u7840\u8bed\u6cd5**(\u91cd\u8981)**",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u753b\u4e0e\u653b\u51fb",permalink:"/docs/tutorial-basics/animation-and-attack"},next:{title:"\u7269\u54c1",permalink:"/docs/tutorial-basics/item"}},u={},p=[{value:"\u4e0b\u8f7d\u73af\u5883",id:"\u4e0b\u8f7d\u73af\u5883",level:2},{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",level:2},{value:"if\u8bed\u53e5",id:"if\u8bed\u53e5",level:3},{value:"for\u5faa\u73af",id:"for\u5faa\u73af",level:3},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:3}],c={toc:p},s="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u56de\u6211\u4eec\u8bb2lua\u7684\u8bed\u6cd5\u3002\n\u5173\u4e8eCYF\uff0clua\u662f\u5f88\u91cd\u8981\u7684"),(0,a.kt)("admonition",{title:"\ud83e\udd13\u5176\u5b9e\u5462",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"CYF\u9996\u9875\u7684readme.md\u6807\u9898\u5c31\u5199\u4e86Lua moddable Undertale engine(\u53ef\u7528lua\u7f16\u5199\u7684undertale\u6e38\u620f\u5f15\u64ce)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.runoob.com/lua/lua-tutorial.html"},"\u83dc\u9e1f\u6559\u7a0b"),"\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u7f51\u7ad9\uff08\u5176\u5b9e\u5c31\u662f\u61d2\u5f97\u5199\u6587\uff09"),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u73af\u5883"},"\u4e0b\u8f7d\u73af\u5883"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://luabinaries.sourceforge.net/download.html"},"lua.org"),"\u6216\u81ea\u5df1\u641c\u7d22\u5728\u7ebf\u7f16\u8f91\u5668"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5230\u83dc\u9e1f\u8054\u76df\u91cc\u9762\u53bb\uff0c\u91cc\u9762\u6709\u5de5\u5177\u53ef\u4ee5\u5728\u4e0a\u8fd0\u884clua\u4ee3\u7801\uff08\u624b\u673a\u4e5f\u53ef\u4ee5\uff01\uff09"),(0,a.kt)("h2",{id:"\u57fa\u672c\u8bed\u6cd5"},"\u57fa\u672c\u8bed\u6cd5"),(0,a.kt)("p",null,"\u8fd9\u91cc\u5148\u8bd5\u8bd5\u5199\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'print("hello")  --print\u51fd\u6570\u5728\u63a7\u5236\u53f0\u6253\u5370\u4e00\u4e2ahello\uff08\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u50cfpython\uff09\n')),(0,a.kt)("p",null,"CYF\u4e2d\u5e94\u8be5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},'DEBUG("")')),(0,a.kt)("p",null,"\u597d\u7684\uff0c\u8ba9\u6211\u4eec\u518d\u5199\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'print("hello")\na=10\nprint(a)\n      \n')),(0,a.kt)("p",null,"\u90a3\u4e48\u5e94\u8be5\u5199\u5728\u54ea\u91cc\uff1f\n\u8fd9\u65f6\u5019\u4e0d\u5e94\u8be5\u6253\u5f00VS\uff0c\u5e94\u8be5\u6253\u5f00",(0,a.kt)("strong",{parentName:"p"},"SciTE"),"(\u5b89\u88c5\u5b8clua\u540e\u7684\u90a3\u4e2a\u9ed1\u7403\u56fe\u6807)\uff0c\u5982\u56fe\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"\u83dc\u5355\u680ftool\u2192go(F5)"),"\u5373\u53ef\u663e\u793a\u8f93\u51fa\u6548\u679c\uff09\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8463).Z,width:"622",height:"238"})),(0,a.kt)("p",null,"\u6709\u8da3\u7684\u662f\uff0c\u53d8\u91cf\u53ef\u4ee5\u5728\u6ca1\u521d\u59cb\u5316\u4f7f\u7528\uff0c\u4f46\u662f\u503c\u4e3anil(lua\u4e2d\u6307\u7a7a\u503c)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"print(a)\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528LUA\u6765\u6f14\u793a\u6761\u4ef6\u5224\u65ad\u548c\u5faa\u73af\u5c31\u7b80\u6d01\u591a\u4e86"),(0,a.kt)("h3",{id:"if\u8bed\u53e5"},"if\u8bed\u53e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'a=3\nif a==2 then\n    print("fuck")\nelseif a==3 then\n    print("ok")\nelse\n    print("xxx")\nend\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u5224\u65ad\u7684\u65f6\u5019\u5fc5\u987b\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"=="),"(\u56e0\u4e3a\u7f16\u7a0b\u4e2d\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"="),"\u5c31\u662f\u53f3\u503c\u8d4b\u503c\u7ed9\u5de6\u8fb9\u7684\u53d8\u91cf\uff0c\u4e24\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"="),"\u624d\u662f\u6211\u4eec\u5e38\u8bf4\u7684",(0,a.kt)("strong",{parentName:"p"},"\u201c\u7b49\u4e8e\u201d"),")"),(0,a.kt)("h3",{id:"for\u5faa\u73af"},"for\u5faa\u73af"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'for i=0,10,1 do\n    print("hello")\nend\n')),(0,a.kt)("p",null,"\u89e3\u91ca\uff1afor\u540e\u9762\u5148\u8ddf\u4e86\u4e00\u4e2a\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"i=0"),"\uff0c\u7136\u540e10\u662f\u5faa\u73af\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"i==10"),"\uff0c\u4e4b\u540e\u76841\u662f\u6bcf\u6b21\u5faa\u73af",(0,a.kt)("inlineCode",{parentName:"p"},"i+1")),(0,a.kt)("h3",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'function sayhello()\n    print("hello")\nend\n')),(0,a.kt)("p",null,"\u6211\u4eec\u5199\u4e00\u4e2a\u6bd4\u8f83\u5927\u5c0f\u7684\u51fd\u6570\uff0c\u5982\u679cv1\u5927\u8fd4\u56dev1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'function max(v1,v2)   --\u5b9a\u4e49\u51fd\u6570max(),\u5176\u4e2d\u4f20\u5165\u7684\u53c2\u6570\u6709\u4e24\u4e2a\uff1av1\u548cv2\n    local r=0         --\u65b0\u5efa\u5c40\u90e8\u53d8\u91cfr(\u53ea\u5bf9\u8fd9\u4e2a\u51fd\u6570\u51d1\u6548\u7684\u53d8\u91cf...\u5e94\u8be5\u5427)\n    if v1>v2 then\n        r=v1\n        print(r.."\u6bd4"..v2.."\u5927(\u8fd9\u662fv1)")\n    else\n        r=v2\n        print(r.."\u6bd4"..v1.."\u5927(\u8fd9\u662fv2)")\n    end\n    return r\nend\nmax(20,10)   --\u7ed3\u679c\u8f93\u51fa\uff1a20\u6bd410\u5927(\u8fd9\u662fv1)\n\n')))}d.isMDXComponent=!0},8463:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lanuch-code-df7ab7c5163ecf58e6f4b47901848485.png"}}]);