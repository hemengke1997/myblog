(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(117)),c=t(118),i={title:"\u524d\u7aef\u914d\u7f6e SonarScanner \u548c SonarLint",id:"SonarScanner"},l={unversionedId:"frontEnd/SonarScanner",id:"frontEnd/SonarScanner",isDocsHomePage:!1,title:"\u524d\u7aef\u914d\u7f6e SonarScanner \u548c SonarLint",description:"1. \u4e0b\u8f7dSonarScanner",source:"@site/docs\\frontEnd\\\u524d\u7aef\u914d\u7f6e SonarScanner \u548c SonarLint.md",slug:"/frontEnd/SonarScanner",permalink:"/myblog/docs/frontEnd/SonarScanner",editUrl:"https://github.com/hemengke1997/myblog/docs\\frontEnd\\\u524d\u7aef\u914d\u7f6e SonarScanner \u548c SonarLint.md",version:"current",lastUpdatedBy:"\u8d3a\u68a6\u67ef",lastUpdatedAt:1609123472,sidebar:"docs",previous:{title:"http\u7684\u5386\u53f2",permalink:"/myblog/docs/frontEnd/httpHistory"},next:{title:"react\u8fdb\u9636",permalink:"/myblog/docs/frontEnd/reactAdvance"}},b=[{value:"1. \u4e0b\u8f7d<code>SonarScanner</code>",id:"1-\u4e0b\u8f7dsonarscanner",children:[]},{value:"2. \u5b89\u88c5\u89e3\u538b",id:"2-\u5b89\u88c5\u89e3\u538b",children:[]},{value:"3. \u5728\u9879\u76ee\u4e2d\u4f7f\u7528sonar-scanner",id:"3-\u5728\u9879\u76ee\u4e2d\u4f7f\u7528sonar-scanner",children:[]},{value:"4. \u914d\u7f6e<code>SonarLint</code>\u63d2\u4ef6",id:"4-\u914d\u7f6esonarlint\u63d2\u4ef6",children:[]}],s={toc:b};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-\u4e0b\u8f7dsonarscanner"},"1. \u4e0b\u8f7d",Object(o.b)("inlineCode",{parentName:"h2"},"SonarScanner")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/"}),"\u4e0b\u8f7d\u5730\u5740"),"\u3002\u9009\u62e9\u5bf9\u5e94\u7684\u7cfb\u7edf\u7248\u672c\u4e0b\u8f7d\u3002"),Object(o.b)("h2",{id:"2-\u5b89\u88c5\u89e3\u538b"},"2. \u5b89\u88c5\u89e3\u538b"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5b89\u88c5\u89e3\u538b\u4e4b\u540e\uff0c\u6839\u76ee\u5f55\uff08\u540e\u6587\u79f0\u8fd9\u4e2a\u76ee\u5f55\u4e3a",Object(o.b)("inlineCode",{parentName:"li"},"$install_dir"),"\uff09\u4e2d\u6709\u4e2a ",Object(o.b)("inlineCode",{parentName:"li"},"/conf/sonar-scanner.properties"),"\uff0c \u6253\u5f00\u8fd9\u4e2a\u6587\u4ef6"),Object(o.b)("li",{parentName:"ul"},"\u4fee\u6539 ",Object(o.b)("inlineCode",{parentName:"li"},"sonar-scanner.properties")," \u6587\u4ef6\uff0c\u4fee\u6539\u4e4b\u540e\u5982\u4e0b\u6240\u793a\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-properties"}),"#Configure here general information about the environment, such as SonarQube server connection details for example\n#No information about specific project should appear here\n\n#----- Default SonarQube server\n# \u53ef\u4ee5\u662f\u672c\u5730localhost \u4e5f\u53ef\u4ee5\u662f\u670d\u52a1\u5668\u5730\u5740\uff0c \u5982\uff1a localhost:9000\nsonar.host.url=http://121.41.11.11:9000\n\n#----- Default source code encoding\nsonar.sourceEncoding=UTF-8\n\n# \u5982\u679c\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\uff0c\u9700\u8981\u8eab\u4efd\u9a8c\u8bc1\nsonar.login= <\u7528\u6237\u540d>\n\nsonar.password = <\u5bc6\u7801>\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u5c06 ",Object(o.b)("inlineCode",{parentName:"li"},"$install_dir/bin")," \u6dfb\u52a0\u5230path\u4e2d")),Object(o.b)("img",{src:Object(c.a)("img/SonarScanner1.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6253\u5f00cmd\uff0c \u8f93\u5165 ",Object(o.b)("inlineCode",{parentName:"li"},"sonar-scanner -h")," \uff0c\u5982\u679c\u51fa\u73b0\u4e0b\u56fe\uff0c\u8bf4\u660e\u914d\u7f6e\u6210\u529f\u3002")),Object(o.b)("img",{src:Object(c.a)("img/SonarScanner2.png")}),Object(o.b)("h2",{id:"3-\u5728\u9879\u76ee\u4e2d\u4f7f\u7528sonar-scanner"},"3. \u5728\u9879\u76ee\u4e2d\u4f7f\u7528sonar-scanner"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5728\u9700\u4ee3\u7801\u68c0\u67e5\u7684\u9879\u76ee\u7684\u6839\u8def\u5f84\u4e0b\uff0c\u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"li"},"sonar-project.properties")," \u914d\u7f6e\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-properties"}),"# must be unique in a given SonarQube instance\n# \u4f60\u7684\u9879\u76ee\u540d\u79f0\nsonar.projectKey=abcde\n\n# --- optional properties ---\n\n# defaults to project key\n# \u4f60\u7684\u9879\u76ee\u540d\u79f0\uff0c\u4e00\u822c\u8ddfprojectKey\u5bf9\u5e94\nsonar.projectName=abcde\n\n# defaults to 'not provided'\n#sonar.projectVersion=1.0\n \n# Path is relative to the sonar-project.properties file. Defaults to .\n# \u68c0\u67e5\u7684\u4ee3\u7801\u8def\u5f84\nsonar.sources=./src  \n \n# Encoding of the source code. Default is default system encoding\nsonar.sourceEncoding=UTF-8\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5728\u9879\u76ee\u8def\u5f84\u4e0b\u6253\u5f00 ",Object(o.b)("inlineCode",{parentName:"li"},"CMD")," (\u4e0d\u80fd\u7528git bush)\uff0c\u8f93\u5165 ",Object(o.b)("inlineCode",{parentName:"li"},"sonar-scanner"),"\u3002\u5b8c\u4e8b\u3002")),Object(o.b)("h2",{id:"4-\u914d\u7f6esonarlint\u63d2\u4ef6"},"4. \u914d\u7f6e",Object(o.b)("inlineCode",{parentName:"h2"},"SonarLint"),"\u63d2\u4ef6"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5fc5\u8981\u73af\u5883\uff1a ",Object(o.b)("inlineCode",{parentName:"li"},"JRE8")," \u6216 ",Object(o.b)("inlineCode",{parentName:"li"},"JRE11")," \uff0c ",Object(o.b)("inlineCode",{parentName:"li"},"NODEJS")),Object(o.b)("li",{parentName:"ul"},"\u989d\u5916\u63d2\u4ef6\uff1a ",Object(o.b)("inlineCode",{parentName:"li"},"Language support for Java")),Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6b65\u9aa4",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5728VS Code\u4e2d\u6253\u5f00setting\uff0c \u914d\u7f6e ",Object(o.b)("inlineCode",{parentName:"li"},"JRE")," \u8def\u5f84")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"sonarlint.ls.javaHome": "C:\\\\Program Files\\\\Java\\\\jre1.8.0_201",\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8fde\u63a5 ",Object(o.b)("inlineCode",{parentName:"li"},"SonarQube")," \u8fdc\u7a0b\u670d\u52a1")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"sonarlint.connectedMode.connections.sonarqube": [{\n    "connectionId": "abcde",\n    "serverUrl": "https://121.41.11.11:9000",\n    "token": "6a19b85b095abcde0ae70702e31ef27c5a0f7b"\n}]\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5176\u4e2d ",Object(o.b)("inlineCode",{parentName:"li"},"token")," \u662f\u5728 ",Object(o.b)("inlineCode",{parentName:"li"},"SonarQube")," \u9879\u76ee\u4e2d\u7684\u201c\u8d26\u6237=\u300b\u5b89\u5168\u201d\u4e2d\u83b7\u5f97\u7684"),Object(o.b)("li",{parentName:"ul"},"\u5728\u524d\u7aef\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"li"},".vscode=>setting.json")," \uff0c\u8f93\u5165\u7c7b\u4f3c\u4e0b\u9762\u7684\u4ee3\u7801")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "sonarlint.connectedMode.project": {\n    "connectionId": "abcde",\n    "projectKey": "abcde"\n  }\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5b8c\u6210")))}u.isMDXComponent=!0},117:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return j}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,j=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return t?a.a.createElement(j,i(i({ref:n},b),{},{components:t})):a.a.createElement(j,i({ref:n},b))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},118:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return c}));var r=t(22),a=t(119);function o(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(r.default)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(r)return n+t;const c=t.startsWith(n)?t:n+t.replace(/^\//,"");return o?e+c:c}(n,e,t,r)}}function c(e,n={}){const{withBaseUrl:t}=o();return t(e,n)}},119:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))}}]);