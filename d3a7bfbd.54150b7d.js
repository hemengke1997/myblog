(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return a})),t.d(e,"toc",(function(){return l})),t.d(e,"default",(function(){return d}));var o=t(3),r=t(7),i=(t(0),t(120)),s={title:"\u590d\u5236\u6587\u6848",id:"copyContent"},a={unversionedId:"frontEnd/copyContent",id:"frontEnd/copyContent",isDocsHomePage:!1,title:"\u590d\u5236\u6587\u6848",description:"\u5305\u62ec\u7684\u77e5\u8bc6\u70b9",source:"@site/docs\\frontEnd\\\u590d\u5236\u6587\u6848\u603b\u7ed3.md",slug:"/frontEnd/copyContent",permalink:"/myblog/docs/frontEnd/copyContent",editUrl:"https://github.com/hemengke1997/myblog/blob/master/docs\\frontEnd\\\u590d\u5236\u6587\u6848\u603b\u7ed3.md",version:"current",lastUpdatedBy:"\u8d3a\u68a6\u67ef",lastUpdatedAt:1608888007,sidebar:"docs",previous:{title:"tsconfig.json \u914d\u7f6e",permalink:"/myblog/docs/frontEnd/tsConfig"},next:{title:"browserslist\u7ffb\u8bd1+\u7406\u89e3",permalink:"/myblog/docs/frontEnd/browserslist"}},l=[{value:"\u5305\u62ec\u7684\u77e5\u8bc6\u70b9",id:"\u5305\u62ec\u7684\u77e5\u8bc6\u70b9",children:[]}],c={toc:l};function d(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u5305\u62ec\u7684\u77e5\u8bc6\u70b9"},"\u5305\u62ec\u7684\u77e5\u8bc6\u70b9"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4fdd\u7559\u590d\u5236\u6587\u672c\u7684\u6837\u5f0f"),Object(i.b)("li",{parentName:"ul"},"vue-worker \uff08vue\u4e2d\u7684webworker\u63d2\u4ef6\uff09"),Object(i.b)("li",{parentName:"ul"},"hackReset"),Object(i.b)("li",{parentName:"ul"},"\u4e0b\u8f7d\u56fe\u7247\u5e76\u4fee\u6539\u6587\u4ef6\u540d"),Object(i.b)("li",{parentName:"ul"},"\u6df1\u5ea6\u904d\u5386dom\u8282\u70b9\u5e76\u540c\u65f6\u5220\u9664\u90e8\u5206\u8282\u70b9")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'\n<template>\n\n</template>\n\n<script>\nimport Clipboard from "clipboard";\nimport VueWorker from "vue-worker";\nimport Vue from "vue";\nVue.use(VueWorker);\n\nexport default {\n  methods: {\n    /**\n     * \u4e0b\u8f7d\u5c01\u9762\u56fe\u7247\n     */\n    downloadCoverImg() {\n      let url = this.content;\n      window.URL = window.URL || window.webkitURL;\n      const xhr = new XMLHttpRequest();\n      xhr.open("GET", url, true);\n      xhr.responseType = "blob";\n      this.$Message.info("\u6b63\u5728\u4e0b\u8f7d\u5c01\u9762...");\n      xhr.onload = () => {\n        if (xhr.status === 200) {\n          let blob = xhr.response;\n          this.changeImgName(blob, url);\n          this.$Message.success("\u5c01\u9762\u4e0b\u8f7d\u6210\u529f");\n          this.handleCopySuccess();\n          window.open(this.cover);\n        } else {\n          this.$Message.error("\u5c01\u9762\u4e0b\u8f7d\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5");\n        }\n      };\n      xhr.send();\n    },\n    /**\n     * \u4fee\u6539\u4e0b\u8f7d\u5c01\u9762\u7684\u6587\u4ef6\u540d\n     */\n    changeImgName(blob, url) {\n      const filename = "\u6587\u6848\u5c01\u9762\u56fe";\n      const index = url.lastIndexOf("/");\n      let name = url\n        .substring(index + 1, url.length)\n        .replace(/(.*?)\\./gi, (match, p1) => {\n          return match.replace(p1, filename);\n        });\n      let a = document.createElement("a");\n      a.download = name;\n      a.style.display = "none";\n      a.href = URL.createObjectURL(blob);\n      document.body.appendChild(a);\n      a.click();\n      URL.revokeObjectURL(a.href);\n      document.body.removeChild(a);\n    },\n    /**\n     * --------------------- \u590d\u5236\u6587\u6848\u7684\u903b\u8f91\u5f00\u59cb ------------------------------\n     */\n    /**\n     * \u529f\u80fd\uff1a \u590d\u5236\u6587\u6848\n     * \u601d\u8def\uff1a \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684div\uff0c\u5e76\u8bbe\u7f6e\u4e00\u4e9b\u6837\u5f0f\n     * \u590d\u5236\u6587\u6848\u5230\u8fd9\u4e2adiv\u4e2d\uff0c\u7136\u540e\u590d\u5236\u8fd9\u4e2adiv\u4e2d\u7684\u5185\u5bb9\u3002\u6700\u540e\u5220\u9664div dom\n     */\n    realCopyContent() {\n      if (!this.resolvedSignal) {\n        this.$Message.loading("\u6b63\u5728\u89e3\u6790\u6587\u6848\uff0c\u8bf7\u7a0d\u7b49");\n        this.clickedSignal = true;\n        return;\n      }\n\n      /**\n       * \u8fd9\u91cc\u5165\u53c2\u6709\u4e24\u79cd\u9009\u62e9\uff1a 1.\u9875\u9762\u4e2d\u663e\u793a\u7684\u6587\u6848\u5185\u5bb9html 2.\u65b0\u5efa\u7684\u7528\u4e8e\u590d\u5236\u7684\u6587\u6848\u5185\u5bb9\u7684html\n       * \u8fd9\u91cc\u7684\u5165\u53c2\u662f\u7528\u4e8e\u590d\u5236\u7684\u6587\u6848\u5185\u5bb9\u7684html\n       */\n      if (!this.allImgOk(this.divForCopy)) return;\n      // .copy_content:  \u590d\u5236\u6587\u6848\u6309\u94ae\u7684\u7c7b\u540d\n      let clipboard = new Clipboard(".copy_content", {\n        target: () => {\n          document.body.appendChild(this.divForCopy);\n          return this.divForCopy;\n        }\n      });\n      clipboard.on("success", () => {\n        if (this.copyContent) {\n          this.handleCopySuccess("\u6587\u6848");\n          this.$Message.success("\u590d\u5236\u6587\u6848\u6210\u529f");\n        } else {\n          this.$Message.loading("\u6b63\u5728\u89e3\u6790\u6587\u6848\uff0c\u8bf7\u7a0d\u7b49\u91cd\u8bd5");\n        }\n        this.removeAfterCopied(clipboard);\n      });\n      clipboard.on("error", () => {\n        this.$Message.error("\u76ee\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u81ea\u52a8\u590d\u5236\uff0c\u8bf7\u4f7f\u7528\u5176\u4ed6\u6d4f\u89c8\u5668");\n        this.removeAfterCopied(Clipboard);\n      });\n    },\n    /**\n     * createWorker\n     */\n    createWorker() {\n      this.webWorker = this.$worker.create([\n        {\n          message: "getContent",\n          func: (str) => {\n            /**\n             * content_copy\u5185\u5bb9\u5904\u7406\u51fd\u6570\uff0c\u7528\u4e8e\u53bb\u9664content_copy\u4e2d\u65e0\u6cd5\u88ab\u5fae\u4fe1\u89e3\u6790\u7684\u6837\u5f0f\u3001\u6807\u7b7e\u7b49\n             * \u6709\u5176\u4ed6\u5f02\u5e38\u60c5\u51b5\uff0c\u53ef\u76f4\u63a5\u5728\u6b64\u6b63\u5219\u66ff\u6362\u3002\n             * @param str\n             * @returns {*}\n             */\n\n            console.log("begin resolve copycontent");\n            if (!str) return null;\n            return (\n              str\n                // \u5904\u7406\u56fe\u7247\u540e\u9762\u51fa\u73b0\u7684\u7a7a\u683c\n                .replace(\n                  new RegExp("(?<=\\\\<img(?:.*)\\\\/>)(\\\\s+)", "g"),\n                  (match, p1) => {\n                    return match.replace(p1, "");\n                  }\n                )\n                // \u5904\u7406\u56de\u8f66\u6362\u884c\n                .replace(\n                  new RegExp("\\\\/?>([\\\\n|\\\\r|\\\\s|.])*", "g"),\n                  (match, p1, p2) => {\n                    return match.replace(new RegExp("(\\\\s)*", "g"), "");\n                  }\n                )\n            );\n          },\n        },\n      ]);\n    },\n    /**\n     * webworker \u5904\u7406\u6b63\u5219\u9020\u6210\u7684\u6d4f\u89c8\u5668\u5047\u6b7b\n     */\n    runWorker() {\n      let data = this.content;\n      let timer = setTimeout(() => {\n        if (this.resolvedSignal) return;\n        this.webWorker = null;\n        this.copyContent = data;\n        this.createDomForCopy(data);\n        console.log("flash end");\n        this.traverse([this.divForCopy]);\n        console.log("end resolve");\n        this.resolvedSignal = true;\n        if (this.clickedSignal) {\n          this.$Message.success("flash\u6a21\u5f0f\u6587\u6848\u89e3\u6790\u5b8c\u6210");\n        }\n      }, 15000);\n      this.webWorker.postMessage("getContent", [data]).then(res => {\n        if (this.resolvedSignal) return;\n        clearTimeout(timer);\n        this.copyContent = res;\n        this.createDomForCopy(res);\n        console.log("reg end");\n        this.traverse([this.divForCopy], []);\n        console.log("end resolve");\n        this.resolvedSignal = true;\n        if (this.clickedSignal) {\n          this.$Message.success("\u6587\u6848\u89e3\u6790\u5b8c\u6210");\n        }\n        this.webWorker = null;\n      });\n    },\n    /**\n     * \u521b\u5efa\u7528\u4e8e\u590d\u5236\u7684dom\n     */\n    createDomForCopy(content) {\n      this.divForCopy = document.createElement("section");\n      this.divForCopy.innerHTML = content;\n\n      const jsContent = this.divForCopy.querySelector("#js_content");\n      if (jsContent) {\n        let temp = document.createElement("section");\n        temp.innerHTML = jsContent.innerHTML;\n        jsContent.parentNode.replaceChild(temp, jsContent);\n      }\n\n      let c = this.divForCopy.children;\n      if (c && c.length === 1) {\n        this.divForCopy = c[0];\n      }\n\n      this.divForCopy.className = "copyContent-only";\n      this.setCopyContentStyle(this.divForCopy);\n\n      // console.log(this.div);\n      // \u81ea\u5b9a\u4e49copy\u5185\u5bb9\u7c7b\u578b\n      this.divForCopy.addEventListener("copy", (e) => {\n        // e.preventDefault\u4f1a\u5bfc\u81f4\u5728chrome\u6d4f\u89c8\u5668\u4e2d\u7c98\u8d34\u6587\u6848\u65f6\u767e\u5206\u6bd4\u53d8\u56fa\u5b9a\u50cf\u7d20\n        // e.preventDefault\u4f1a\u5728\u51fa\u4e86chrome\u6d4f\u89c8\u5668\u4ee5\u5916\u7684\u6d4f\u89c8\u5668\u4e0a\uff0c\u90fd\u6b63\u5e38\u663e\u793a\u767e\u5206\u6bd4\n        e.preventDefault();\n        e.clipboardData.setData("text/html", this.divForCopy.outerHTML);\n      });\n    },\n    /**\n     * \u904d\u5386dom\u8282\u70b9\n     */\n    traverse(t) {\n      const HDOM = ["h1", "h2", "h3", "h4", "h5", "h6"];\n      let els = [...t];\n\n      for (let dom of els) {\n        let { localName, children } = dom;\n\n        let style = dom.getAttribute("style");\n\n        if (localName === "style") {\n          dom.remove();\n          continue;\n        }\n        // \u5220\u9664display\uff1anone\u7684\u6807\u7b7e\n        if (new RegExp("display:\\\\s*?none", "gi").test(style)) {\n          dom.remove();\n          continue;\n        }\n\n        // \u5224\u65ad\u662f\u5426\u662f\u4e00\u4e2a\u7a7a\u6807\u7b7e\u91cc\u9762\u5305\u4e00\u4e2abr\u6807\u7b7e\uff0c \u5982\u679c\u5916\u5c42\u7a7a\u6807\u7b7e\u5e26\u80cc\u666f\u56fe \u5219\u4e0d\u505a\u64cd\u4f5c\n        // \u7a7a\u6807\u7b7e\u91cc\u9762\u5e26\u4e00\u4e2abr\uff0c \u4f1a\u88ab\u5fae\u4fe1\u7f16\u8f91\u5668\u5904\u7406\u4e3a\u7a7a\u6807\u7b7e\uff0cbr\u6362\u884c\u5c31\u6ca1\u4e86\uff0c\u6240\u4ee5display\uff1ablock\n        if (\n          dom.children &&\n          dom.children.length === 1 &&\n          dom.children[0].localName === "br" &&\n          (dom.innerText === "\\n" || dom.innerText === "") &&\n          !/background(-image)?:\\s?url*/gi.test(style)\n        ) {\n          if (!dom.style.display) {\n            dom.style.display = "block";\n          }\n        }\n\n        // \u9664span\u4e4b\u5916 \u5176\u4ed6\u7a7a\u6807\u7b7e \u5fae\u4fe1\u7f16\u8f91\u5668\u4f1a\u5f80\u91cc\u9762\u52a0\u6362\u884c\n        if (\n          dom.innerHTML === "" &&\n          (localName === "p" || localName === "section" || localName === "div")\n        ) {\n          // div\u6807\u7b7e\u4f1a\u88ab\u5fae\u4fe1\u7f16\u8f91\u5668\u76f4\u63a5\u5220\u9664\n          if (!dom.style.height) {\n            dom.style.height = "0";\n          }\n        }\n\n        if (\n          localName === "p" ||\n          localName === "blockquote" ||\n          HDOM.includes(localName) ||\n          localName === "section" ||\n          localName === "div"\n        ) {\n          if (dom.parentNode) {\n            let attrs = "";\n            let attrsMap = dom.attributes;\n            let t = document.createElement("section");\n\n            for (let i = 0; i < attrsMap.length; i++) {\n              t.setAttribute(attrsMap[i].name, attrsMap[i].value);\n            }\n            t.innerHTML = dom.innerHTML;\n            dom.parentNode.replaceChild(t, dom);\n            dom = t;\n            children = t.children;\n          }\n        }\n\n        // \u5904\u7406\u7528\u7a7a\u683c\u6765\u5206\u5272\u6587\u5b57\u7684\u60c5\u51b5\n        if (dom.innerHTML === "&nbsp;") {\n          if (!dom.style.margin) {\n            this.setStyles(dom, {\n              margin: "0 4px",\n            });\n          }\n        }\n\n        if (\n          localName !== "html" &&\n          localName !== "head" &&\n          localName !== "body"\n        ) {\n          if (localName !== "span") {\n            if (!dom.style.boxSizing) {\n              this.setStyles(dom, {\n                boxSizing: "border-box",\n              });\n            }\n            if (!dom.style.maxWidth) {\n              this.setStyles(dom, {\n                maxWidth: "100%",\n              });\n            }\n          }\n\n          // \u5f00\u59cb\u5904\u7406\u5404\u79cd\u7279\u6b8a\u60c5\u51b5\n          if (localName === "pre") {\n            this.setStyles(dom, {\n              whiteSpace: "normal",\n              fontFamily: `"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif`,\n            });\n          }\n          // img\n          if (localName === "img") {\n            if (dom.style.width.indexOf("%") !== -1) {\n              dom.style.maxWidth = dom.style.width;\n            } else {\n              dom.style.maxWidth = "100%";\n            }\n          }\n\n          if (localName === "em") {\n            if (!dom.style.fontStyle) {\n              dom.style.fontStyle = "italic";\n            }\n          }\n        }\n        if (children && children.length) {\n          this.traverse(children);\n        }\n      }\n    },\n    /**\n     * \u7ed9\u590d\u5236\u7684\u6587\u6848\u6dfb\u52a0\u516c\u5171\u6837\u5f0f\n     */\n    setCopyContentStyle(dom) {\n      this.setStyles(dom, {\n        overflow: "hidden",\n        color: "#333",\n        fontSize: "17px",\n        wordWrap: "break-word",\n        whiteSpace: "pre-wrap",\n        // \u82f1\u8bed\u5355\u8bcd\u7684\u8fde\u5b57\u7b26\n        webkitHyphens: "auto",\n        msHyphens: "auto",\n        hyphens: "auto",\n        textAlign: "justify",\n        background: "#fff",\n        width: "578px"\n      });\n    },\n    /**\n     * \u7ed9\u65b0\u5efa\u7684dom\u8bbe\u7f6e\u6837\u5f0f\n     */\n    setStyles(dom, styleObj) {\n      if (!styleObj || !dom) return;\n      Object.keys(styleObj).forEach(key => {\n        dom.style[key] = styleObj[key];\n      });\n    },\n    /**\n     * \u5982\u679c\u662fie\u5185\u6838 \u590d\u5236\u6587\u6848\u65f6\u4f1a\u6709\u4e00\u4e9b\u95ee\u9898\n     */\n    // ifIE() {\n    //   // \u5224\u65ad\u6d4f\u89c8\u5668\n    //   let ua = navigator.userAgent.toLowerCase();\n    //   const compare = s => {\n    //     return ua.indexOf(s);\n    //   };\n    //   if (this.first || this.cc) {\n    //     return;\n    //   }\n    //   if (compare("trident") !== -1) {\n    //     this.$Message.info("\u5f53\u524d\u6d4f\u89c8\u5668\u590d\u5236\u6587\u6848\u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898");\n    //     this.isIE = true;\n    //     this.copyContent =\n    //       this.docRes.documentBean.contentCopy ||\n    //       this.docRes.documentBean.content;\n    //     this.createDomForCopy(this.copyContent);\n    //     this.traverse([this.divForCopy], []);\n    //     this.resolvedSignal = true;\n    //   }\n    // },\n    /**\n     * \u590d\u5236\u6587\u6848\u4e4b\u540e\u5220\u9664\u6587\u6848dom\u8282\u70b9\n     */\n    removeAfterCopied(clipboard) {\n      let dom = document.querySelector(".copyContent-only");\n      clipboard.destroy();\n      !!dom && dom.remove();\n    }\n    /**\n     * --------------------- \u590d\u5236\u6587\u6848\u7684\u903b\u8f91\u7ed3\u675f ------------------------------\n     */\n  },\n  mounted() {\n   \n      this.createWorker();\n      this.runWorker();\n  },\n};\n<\/script>\n')))}d.isMDXComponent=!0},120:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return h}));var o=t(0),r=t.n(o);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=r.a.createContext({}),d=function(n){var e=r.a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=d(n.components);return r.a.createElement(c.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),p=d(t),u=o,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return t?r.a.createElement(h,a(a({ref:e},c),{},{components:t})):r.a.createElement(h,a({ref:e},c))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a.mdxType="string"==typeof n?n:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);