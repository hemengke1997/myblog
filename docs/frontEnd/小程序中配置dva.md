---
title: 小程序中配置dva
id: miniProgramDva
---
import useBaseUrl from '@docusaurus/useBaseUrl'

### react-redux
第一次做上线的小程序，搭建项目时在状态管理上纠结了很久。由于对react相关的状态管理插件不熟悉，所以使用的redux + react-redux 。 先贴一下代码


<img src={useBaseUrl('img/dva1.png')} alt='' />

```javascript
// store/index.ts
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'

const composeEnhancer =
  typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const middlewares = [thunkMiddleware, createLogger()]

const enhancer = composeEnhancer(applyMiddleware(...middlewares))

export default function configStore() {
  const store = createStore(rootReducer, enhancer)
  return store
}
```

```javascript
// store/rootReduces.ts
import { combineReducers } from 'redux'
import user from './user/reducer'
import convertLink from './convertLink/reducer'
import wallet from './wallet/reducer'



export default combineReducers({
  user,
  convertLink,
  wallet
})
```

<img src={useBaseUrl('img/dva2.png')} alt='' />

```javascript
// action.ts
import { SET_NAME, SET_WORD } from './actionType'
export function setName(payload: string) {
  return {
    type: SET_NAME,
    payload
  }
}

export function setWord(payload: string) {
  return {
    type: SET_WORD,
    payload
  }
}
```
```javascript
// actionType.ts
export const SET_WORD:string = 'SET_WORD'

export const SET_NAME:string = 'SET_NAME'
```
```javascript
// reducer.ts
import { AnyAction } from 'redux'
import { SET_NAME, SET_WORD } from './actionType'



const initState = {
  word: '',
  name: ''
}

export default function handleAction(state = initState, action: AnyAction) {
  switch (action.type) {
    case SET_WORD:
      return {
        ...state,
        word: action.payload
      }
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
```
```jsx
// app.tsx
import { Provider } from 'react-redux'
import configStore from './store/index'

const store = configStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      { props.children}
    </Provider>
  )
}
```


然后在各个页面中使用  useSelector 获取state  useDispatch 分发action
```jsx
import { actionName } from './action.ts'
import { useDispatch, useSelector } from 'react-redux'
const dispatch = useDispatch()
const t = useSelector(state=>state.x)
dispatch(actionName(data))
```


以上就是react-redux相关的配置




### dva
```jsx
// dva.ts
import { create } from 'dva-core';
import createLoading from 'dva-loading';


let app, store, dispatch, registered;

function createApp(options?: any) {
  const { models } = options;
  app = create({
    ...options,
  });
  app.use(createLoading({}));

  if (!registered) models.forEach(model => app.model(model));
  registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
}
```
```jsx
// app.tsx
import dva from './dva';
import models from './models/index';
import { Provider } from 'react-redux'

const dvaApp = dva.createApp({
  initialState: {},
  models,
});
const store = dvaApp.getStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      { props.children}
    </Provider>
  )
}
```
models
```jsx
export default {
  namespace: 'xx',
  state: {
    a: '1'
  },
  effects: {}, // 如何写 就看官方文档
  reducers: {}
}
```
在页面中也是使用 useDispatch  useSelector 操作
以上就是dva的配置
