"use strict";(self.webpackChunkcyf_tutorial=self.webpackChunkcyf_tutorial||[]).push([[270],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),p=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return l.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},b=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),b=a,m=c["".concat(i,".").concat(b)]||c[b]||d[b]||r;return t?l.createElement(m,u(u({ref:n},s),{},{components:t})):l.createElement(m,u({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,u=new Array(r);u[0]=b;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[c]="string"==typeof e?e:a,u[1]=o;for(var p=2;p<r;p++)u[p]=t[p];return l.createElement.apply(null,u)}return l.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=t(7462),a=(t(7294),t(3905));const r={title:"\u7b80\u5355\u653b\u51fb",description:"\u76f8\u6bd4\u4e4b\u524d\u7a0d\u5fae\u590d\u6742",sidebar_position:6},u=void 0,o={unversionedId:"tutorial-basics/attack-example",id:"tutorial-basics/attack-example",title:"\u7b80\u5355\u653b\u51fb",description:"\u76f8\u6bd4\u4e4b\u524d\u7a0d\u5fae\u590d\u6742",source:"@site/docs/tutorial-basics/attack-example.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/attack-example",permalink:"/CYF-Tur/docs/tutorial-basics/attack-example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/attack-example.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u7b80\u5355\u653b\u51fb",description:"\u76f8\u6bd4\u4e4b\u524d\u7a0d\u5fae\u590d\u6742",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u7269\u54c1",permalink:"/CYF-Tur/docs/tutorial-basics/item"}},i={},p=[{value:"Update\u51fd\u6570",id:"update\u51fd\u6570",level:2}],s={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fd9\u4e00\u671f\u5c31\u8bb2\u4e00\u4e2a\u7b80\u5355\u7684\u653b\u51fb"),(0,a.kt)("p",null,"\u5728wave\u91cc\u9762\u65b0\u5efa\u4e00\u4e2alua\uff0c\u8fd0\u884c\u653b\u51fb\u7684\u65b9\u6cd5\u5c31\u662f\u6539encounter\u6587\u4ef6\u5939\u4e2d\u7684encunter.lua\u91ccpossible_attacks\u53d8\u91cf\uff0c\u7136\u540e\u5728wave\u60a8\u65b0\u5efa\u7684lua\u91cc\u5199\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"bullet = CreateProjectile('bullet', 12, 2)\nfunction Update()\nend\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CreateProjectile"),"\u5c31\u662f\u521b\u5efa\u4e00\u4e2a\u5b50\u5f39\uff0c\u8ddf\u4e0a\u7684\u4fe9\u53c2\u6570\u662f\uff1a\u4f7f\u7528\u7684\u56fe\u7247\uff0cx\uff0cy\u5750\u6807\nUpdate\u51fd\u6570\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\uff0c\u5426\u5219\u5c31\u4f1a\u62a5\u9519"),(0,a.kt)("h2",{id:"update\u51fd\u6570"},"Update\u51fd\u6570"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5c31\u662f\u6307\u6bcf\u5e27\u505a\u4ec0\u4e48\u4e8b\u60c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"i=0\nfunction Update()\n    bullet = CreateProjectile('bullet', 12,i)\n    i=i+1\nend\n     \n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5c31\u53ef\u4ee5\u6f14\u793a\uff1a\u6700\u5f00\u59cb\u8bbe\u7f6ei=0\uff0c\u7136\u540e\u6bcf\u5e27\u521b\u5efa\u4e00\u4e2a\u5b50\u5f39\uff0cy\u503c\u4e3ai\uff0c\u987a\u4fbf\u628ai\u52a01(\u5b9e\u73b0\u4ece\u4e0a\u5230\u4e0b\u91ca\u653e\u5b50\u5f39...?)"),(0,a.kt)("p",null,"\u7136\u540e\u662f\u79fb\u52a8\u5b50\u5f39(Move\u65b9\u6cd5)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"bullet = CreateProjectile('bullet', 12,1)\nfunction Update()\n    bullet.Move(0,1)\nend\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u60f3\u8fd9\u4e48\u5199\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"function Update()\n    bullet = CreateProjectile('bullet', 12,1)\n    bullet.Move(0,1)\nend\n")),(0,a.kt)("p",null,"\u4f46\u662f\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6728\u5927\uff01"),"\n\u56e0\u4e3a\u6bcf\u4e00\u4e2a\u53ea\u4e0a\u5347\u4e861\u50cf\u7d20\uff0c\u4e3a\u4ec0\u4e48\u5462\uff0c\u56e0\u4e3a\u5b83\u6bcf\u6b21\u66f4\u65b0\u7684\u65f6\u5019\u90fd\u5237\u6389\u4e86\u4ee5\u524d\u90a3\u4e2abullet\u7684\u63a7\u5236\u6743\uff08\uff1f\uff09\n\u6b63\u786e\u5199\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"bullets={}\nfunction Update()\n    local bullet = CreateProjectile('bullet', 12,1)\n    table.insert(bullets, bullet)\n    for i=1,#bullets do\n        bullets[i].Move(0,1)\n    end\nend\n   \n")),(0,a.kt)("p",null,"\u89e3\u91ca\uff1a\u5148\u521b\u5efa\u4e86\u4e00\u4e2a\u8868\uff0c\u540d\u53eb ",(0,a.kt)("em",{parentName:"p"},"bullets")," (\u6ce8\u610f\u52a0\u4e86s)\uff0c\u7136\u540e\u6bcf\u6b21\u5faa\u73af\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"bullet"),"\u53d8\u91cf\uff0c\u5e76\u628a\u5b83\u63d2\u5165\u5230\u8fd9\u4e2a\u8868\u91cc\uff08\u56e0\u4e3a\u6211\u52a0\u4e86local \u6240\u4ee5\u6bcf\u6b21\u521b\u5efa\u7684bullet\u53d8\u91cf\u90fd\u662f\u4e0d\u540c\u7684\uff09\uff0c\u6700\u540e\u6839\u636e\u8868\u957f\u5ea6\u5206\u522b\u7ed9\u6bcf\u7ed9\u5b50\u5f39move1"),(0,a.kt)("p",null,"\u52a0\u5de5\u4e00\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"j=-100\nbullets={}\nfunction Update()\n    local bullet = CreateProjectile('bullet', j,-60)\n    table.insert(bullets, bullet)\n    j=j+1\n    for i=1,#bullets do\n        bullets[i].Move(0,1)\n    end\nend\n")),(0,a.kt)("p",null,"\u65e0\u7f1d\u653b\u51fb\u73a9\u6bdb\u7ebf\uff08\u96fe\uff09"),(0,a.kt)("p",null,"\u6240\u4ee5\u6bcf\u4e00\u6b21\u751f\u6210\u8981\u968f\u673a\u554a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"j=-100\nbullets={}\nfunction Update()\n    if math.random(1,5)==1 then\n        local bullet = CreateProjectile('bullet', j,-60)\n        table.insert(bullets, bullet)\n    end\n    j=j+1\n    for i=1,#bullets do\n        bullets[i].Move(0,1)\n    end\nend\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"math.random"),"\u5c31\u662f\u751f\u6210\u968f\u673a\u6570\u7684\uff0c\u8fd9\u91cc\u9762\u662f\u751f\u62101\u52305\u7684\u6570\u5b57\uff0c\u5982\u679c=1\u7684\u8bdd\u5c31\u751f\u6210\u5b50\u5f39\uff08\u6b64\u653b\u51fb\u770b\u6b27\u6c14\uff0c\u975e\u914b\u76f4\u63a5\u7206\u70b8\uff09"),(0,a.kt)("p",null,"\u5b9a\u65f6\u751f\u6210\uff0c\u6bcf30\u5e27\u751f\u6210\u4e00\u6b21"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"j=-100\nspawn=0\nbullets={}\nfunction Update()\n    if spawn==30 then\n        local bullet = CreateProjectile('bullet', j,-60)\n        table.insert(bullets, bullet)\n        spawn=0\n    end\n    spawn=spawn+1\n    j=j+1\n    for i=1,#bullets do\n        bullets[i].Move(0,1)\n    end\nend\n")),(0,a.kt)("p",null,"\u5b9a\u65f6\u8f6c\u5411\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"j=-100\naddj=1\nspawn=0\nbullets={}\nfunction Update()\n    if spawn==30 then\n        local bullet = CreateProjectile('bullet', j,-60)\n        table.insert(bullets, bullet)\n        spawn=0\n    end\n    spawn=spawn+1\n\n    if j==50 then\n        addj=-1\n    elseif j==-101 then\n        addj=1\n    end\n    j=j+addj\n    for i=1,#bullets do\n        bullets[i].Move(0,1)\n    end\nend\n")),(0,a.kt)("p",null,"\u968f\u673a\u5b9a\u65f6\u8f6c\u5411\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"j=-100\naddj=1\nspawn=0\nbullets={}\nfunction Update()\n    if spawn==30 then\n        local bullet = CreateProjectile('bullet', j,-60)\n        table.insert(bullets, bullet)\n        spawn=0\n    end\n    spawn=spawn+1\n    // highlight-next-line\n    if j>=50 then\n        addj=math.random(-3,-0.1)\n    // highlight-next-line\n    elseif j<=-101 then\n        addj=math.random(0.1,3)\n    end\n    j=j+addj\n    for i=1,#bullets do\n        bullets[i].Move(0,1)\n    end\nend\n")),(0,a.kt)("p",null,"\u6ce8\u610f13\uff0c15\u884c"),(0,a.kt)("p",null,"\u901f\u5ea6\u968f\u673a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"bullets[i].Move(0,math.random(1,5))\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u9519\u8bef\u505a\u6cd5\u274c",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e0b\u9762\u6b63\u786e\u505a\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'j=-100\naddj=1\nspawn=0\nbullets={}\nfunction Update()\n    if spawn==30 then\n        local bullet = CreateProjectile(\'bullet\', j,-60)\n        table.insert(bullets, bullet)\n        bullet.SetVar("speed",math.random(1,5))\n        spawn=0\n    end\n    spawn=spawn+1\n    \n    if j>=50 then\n        addj=math.random(-3,-0.1)\n    elseif j<=-101 then\n        addj=math.random(0.1,3)\n    end\n    j=j+addj\n    for i=1,#bullets do\n        bullets[i].Move(0,bullets[i].GetVar("speed"))\n    end\nend\n')),(0,a.kt)("p",null,"\u5176\u4e2d\uff0cSetVar\u548cGetVar\u5206\u522b\u662f\u521b\u5efa\u4e00\u4e2a\u5c5e\u6027\uff08\u7b80\u5355\u7406\u89e3\uff09\u5176\u4e2dspeed\u5c31\u662f\u4e00\u4e2a\uff0c\u628a\u6bcf\u4e2a\u5b50\u5f39\u521d\u59cb\u5316\u65f6\u90fd\u8bbe\u7f6e\u4e00\u4e2aspeed\u5c5e\u6027\u4e3a\u968f\u673a\uff08SetVar\uff09\uff0c\u6bcf\u6b21\u79fb\u52a8\u7684\u65f6\u5019\u5c31\u4f1a\u7528\u5230\uff08GetVar\uff09"),(0,a.kt)("p",null,"CYF\u6559\u7a0b\uff08\u5165\u95e8\u7bc7\uff09\u6b63\u5f0f\u5b8c\u7ed3\uff0c\u7b49\u5230\u4e86\u6691\u5047\uff0c\u6211\u4f1a\u51fa\u8fdb\u9636\u7bc7\uff0c\u5e0c\u671b\u5927\u5bb6\u90a3\u65f6\u5019\u591a\u652f\u6301\uff01"),(0,a.kt)("p",null,"\u4e0d\u8fc711\u53f7\u540e\uff0c\u5982\u679c\u6709\u95ee\u9898\uff0c\u627e\u6211\u53ef\u80fd\u4e5f\u6ca1\u7528\uff08\u56e0\u4e3a\u621180%\u4e0d\u5728\uff09\uff0c\u800c\u5b98\u65b9\u6587\u6863\u53c8\u770b\u4e0d\u61c2\uff0c\u6240\u4ee5\u5728\u8fd9\u91cc\u63a8\u8350b\u7ad9\u7528\u6237\u201cssxzzyy9\u201d\u53d1\u5e03\u7684CYF0.63\u6c49\u5316\u6587\u6863\uff08\u4e0b\u8f7d\u5730\u5740\u770b\u7f6e\u9876\u8bc4\u8bba\uff09\uff0c\u5982\u679c\u6709\u5dee\u5f02\uff0c\u8bf7\u4ee5\u81ea\u5df1\u7684CYF\u7248\u672c\u4e3a\u51c6"))}d.isMDXComponent=!0}}]);