(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{119:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,b=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return t?a.a.createElement(b,i(i({ref:n},p),{},{components:t})):a.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},120:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return c}));var r=t(22),a=t(121);function o(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(r.default)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(r)return n+t;const c=t.startsWith(n)?t:n+t.replace(/^\//,"");return o?e+c:c}(n,e,t,r)}}function c(e,n={}){const{withBaseUrl:t}=o();return t(e,n)}},121:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(119)),c=t(120),i={title:"\u5c0f\u7a0b\u5e8f\u4e2d\u914d\u7f6edva",id:"miniProgramDva"},s={unversionedId:"frontEnd/miniProgramDva",id:"frontEnd/miniProgramDva",isDocsHomePage:!1,title:"\u5c0f\u7a0b\u5e8f\u4e2d\u914d\u7f6edva",description:"react-redux",source:"@site/docs\\frontEnd\\\u5c0f\u7a0b\u5e8f\u4e2d\u914d\u7f6edva.md",slug:"/frontEnd/miniProgramDva",permalink:"/myblog/docs/frontEnd/miniProgramDva",editUrl:"https://github.com/hemengke1997/myblog/blob/master/docs\\frontEnd\\\u5c0f\u7a0b\u5e8f\u4e2d\u914d\u7f6edva.md",version:"current",lastUpdatedBy:"\u8d3a\u68a6\u67ef",lastUpdatedAt:1608888007,sidebar:"docs",previous:{title:"\u5f85\u5206\u89e3\u51fa\u6765\u7684\u77e5\u8bc6\u70b9",permalink:"/myblog/docs/frontEnd/Todos"},next:{title:"vue\u4e2d\u4f7f\u7528webworker",permalink:"/myblog/docs/frontEnd/vueWithWebwoker"}},p=[{value:"react-redux",id:"react-redux",children:[]},{value:"dva",id:"dva",children:[]}],d={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"react-redux"},"react-redux"),Object(o.b)("p",null,"\u7b2c\u4e00\u6b21\u505a\u4e0a\u7ebf\u7684\u5c0f\u7a0b\u5e8f\uff0c\u642d\u5efa\u9879\u76ee\u65f6\u5728\u72b6\u6001\u7ba1\u7406\u4e0a\u7ea0\u7ed3\u4e86\u5f88\u4e45\u3002\u7531\u4e8e\u5bf9react\u76f8\u5173\u7684\u72b6\u6001\u7ba1\u7406\u63d2\u4ef6\u4e0d\u719f\u6089\uff0c\u6240\u4ee5\u4f7f\u7528\u7684redux + react-redux \u3002 \u5148\u8d34\u4e00\u4e0b\u4ee3\u7801"),Object(o.b)("img",{src:Object(c.a)("img/dva1.png"),alt:""}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// store/index.ts\nimport { createStore, applyMiddleware, compose } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport { createLogger } from 'redux-logger'\nimport rootReducer from './rootReducer'\n\nconst composeEnhancer =\n  typeof window === 'object' &&\n    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?\n    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n      // Specify extension\u2019s options like name, actionsBlacklist, actionsCreators, serialize...\n    }) : compose\n\nconst middlewares = [thunkMiddleware, createLogger()]\n\nconst enhancer = composeEnhancer(applyMiddleware(...middlewares))\n\nexport default function configStore() {\n  const store = createStore(rootReducer, enhancer)\n  return store\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// store/rootReduces.ts\nimport { combineReducers } from 'redux'\nimport user from './user/reducer'\nimport convertLink from './convertLink/reducer'\nimport wallet from './wallet/reducer'\n\n\n\nexport default combineReducers({\n  user,\n  convertLink,\n  wallet\n})\n")),Object(o.b)("img",{src:Object(c.a)("img/dva2.png"),alt:""}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// action.ts\nimport { SET_NAME, SET_WORD } from './actionType'\nexport function setName(payload: string) {\n  return {\n    type: SET_NAME,\n    payload\n  }\n}\n\nexport function setWord(payload: string) {\n  return {\n    type: SET_WORD,\n    payload\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// actionType.ts\nexport const SET_WORD:string = 'SET_WORD'\n\nexport const SET_NAME:string = 'SET_NAME'\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// reducer.ts\nimport { AnyAction } from 'redux'\nimport { SET_NAME, SET_WORD } from './actionType'\n\n\n\nconst initState = {\n  word: '',\n  name: ''\n}\n\nexport default function handleAction(state = initState, action: AnyAction) {\n  switch (action.type) {\n    case SET_WORD:\n      return {\n        ...state,\n        word: action.payload\n      }\n    case SET_NAME:\n      return {\n        ...state,\n        name: action.payload\n      }\n    default:\n      return state\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// app.tsx\nimport { Provider } from 'react-redux'\nimport configStore from './store/index'\n\nconst store = configStore()\n\nconst App: React.FC = () => {\n  return (\n    <Provider store={store}>\n      { props.children}\n    </Provider>\n  )\n}\n")),Object(o.b)("p",null,"\u7136\u540e\u5728\u5404\u4e2a\u9875\u9762\u4e2d\u4f7f\u7528  useSelector \u83b7\u53d6state  useDispatch \u5206\u53d1action"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { actionName } from './action.ts'\nimport { useDispatch, useSelector } from 'react-redux'\nconst dispatch = useDispatch()\nconst t = useSelector(state=>state.x)\ndispatch(actionName(data))\n")),Object(o.b)("p",null,"\u4ee5\u4e0a\u5c31\u662freact-redux\u76f8\u5173\u7684\u914d\u7f6e"),Object(o.b)("h3",{id:"dva"},"dva"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// dva.ts\nimport { create } from 'dva-core';\nimport createLoading from 'dva-loading';\n\n\nlet app, store, dispatch, registered;\n\nfunction createApp(options?: any) {\n  const { models } = options;\n  app = create({\n    ...options,\n  });\n  app.use(createLoading({}));\n\n  if (!registered) models.forEach(model => app.model(model));\n  registered = true;\n  app.start();\n\n  store = app._store;\n  app.getStore = () => store;\n\n  dispatch = store.dispatch;\n  app.dispatch = dispatch;\n  return app;\n}\n\nexport default {\n  createApp,\n  getDispatch() {\n    return app.dispatch;\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// app.tsx\nimport dva from './dva';\nimport models from './models/index';\nimport { Provider } from 'react-redux'\n\nconst dvaApp = dva.createApp({\n  initialState: {},\n  models,\n});\nconst store = dvaApp.getStore();\n\nconst App: React.FC = () => {\n  return (\n    <Provider store={store}>\n      { props.children}\n    </Provider>\n  )\n}\n")),Object(o.b)("p",null,"models"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"export default {\n  namespace: 'xx',\n  state: {\n    a: '1'\n  },\n  effects: {}, // \u5982\u4f55\u5199 \u5c31\u770b\u5b98\u65b9\u6587\u6863\n  reducers: {}\n}\n")),Object(o.b)("p",null,"\u5728\u9875\u9762\u4e2d\u4e5f\u662f\u4f7f\u7528 useDispatch  useSelector \u64cd\u4f5c\n\u4ee5\u4e0a\u5c31\u662fdva\u7684\u914d\u7f6e"))}u.isMDXComponent=!0}}]);