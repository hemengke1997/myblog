---
title: react进阶
id: reactAdvance
---

import useBaseUrl from '@docusaurus/useBaseUrl'


## [组件懒加载](https://react.docschina.org/docs/code-splitting.html#reactlazy)
使用 `React.lazy` 和 `React.Suspense` 实现组件的懒加载
```jsx
import React, { Suspense } from 'react';
const component = React.lazy(()=>import('./someComponent.js'))

const T = () => {
	return (
  	<Suspense fallback={<div>loading...</div>}>
    	<component />
    </Suspense>
  )
}
```
## [Context 全局上下文](https://react.docschina.org/docs/context.html)

- 注意： 被注入context的组件，当context改变时，组件就会重新渲染，无论组件是否使用了context
- 注意： context中的value是通过 `Object.is` 比较新旧值 （所以当value是个对象时，初始化的时候需要传state，而不是直接在value中写个对象）
- 使用context前的考虑： 那种真的会被全局使用到的属性， 如主题这种，才有必要通过context传递

使用方式：

1. 创建context
```jsx
const MyContext = React.createContext(defaultValue);
```

2. 挂载context
```jsx
<Mycontext.Provider value={/* someValue */}>
  {/*
  	消费组件
  */}
</Mycontext.Provider>
```

3. 在消费组件中使用
```jsx
// 函数组件中使用useContext使用
import MyContext from './xx.js'
import { useContext } from 'react'

const ctx = useContext(MyContext) // 获取到了context中的value

// 在类组件中使用 Context.Consumer 或 contextType 
// ------------- contextType
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  render() {
    let value = this.context;
    /* 基于 MyContext 组件的值进行渲染 */
  }
}
MyClass.contextType = MyContext;

// ------------ Context.Consumer
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```
## [Ref转发](https://react.docschina.org/docs/forwarding-refs.html)
通俗来说： 把一个组件中的ref转发给他的父组件。
有时候我们需要控制button的焦点，这个时候或许就能用到ref转发

- 注意： 第二个参数 `ref` 只在使用 `React.forwardRef` 定义组件时存在。常规函数和 class 组件不接收 `ref` 参数，且 props 中也不存在 `ref`。
```jsx
const FancyButton = React.forwardRef((props, buttonRef) => (
  <button ref={buttonRef} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 button 的 ref：
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```
## [Fragments](https://react.docschina.org/docs/fragments.html)
类似vue中的template， 无意义的节点，不会渲染到dom树中
新语法： `<></>` 
## [高阶组件](https://react.docschina.org/docs/higher-order-components.html)
目前我还没用自己写过高阶组件。
高阶组件就是传入一个组件，返回一个新组件。高阶组件可以对组件进行一系列的处理

- 注意： 在高阶组件中，不要改变传入的参数组件

其余待我使用之后再补充


## [深入JSX](https://react.docschina.org/docs/jsx-in-depth.html)
### 动态组件
在vue中，动态组件是用 `<component is="xx">`
在react中， 动态组件很简单
```jsx
import A from './a.js'
import B from './b.js'

const C = (props) => {
	const components = {
  	A,
    B
  }
  const DynamicComponent = components[props.type]
  return (
  	<DynamicComponent />
  )
}
```
### 属性默认
react与vue相同，props未赋值表示true
```jsx
// 两个等价
<MyTextBox autocomplete />
<MyTextBox autocomplete={true} />
```
### 插槽
习惯了这个称呼，但其实在react中没有插槽的说法
在vue中，插槽是这样用的
```javascript
// A.vue
<template>
  <div>
    <div>
      <span>这是一些文字</span>
      <slot name="icon"></slot>  // 具名插槽
    </div>
    <div>
      <slot></slot> // 默认插槽
    </div>
  </div>
</template>

<script>
export default {
};
</script>

// B.vue
<template>
	<div v-for="i in 10">
  	<A key="i">
      <span slot="icon">图标</span>
      <div>插入到默认插槽的</div>
  	</A>
  </div>
</template>
<script>
import 'A' from './A.vue'
export default {
  components: { A }
};
</script>
```
在react中，可以这样
```jsx
const SlotComp = (props) => {
  const { children } = props // children是一个数组
  const Icon = children.xxxx // 伪代码，从props中取Icon
  const Default = children.yyy
	return (
  	<div>
      <div>
        <span>这是一些文字</span>
        {Icon}  
      </div>
      <div>
        {Default} 
      </div>
  </div>
  )
}

import SlotComp from './x.js'
const M = () => {
	return (
		<>
    	<SlotComp>
      	<icon name='icon' />
      	<div>默认的一些内容xxx</div>
    	</SlotComp>
    	<SlotComp>
      	<icon name='icon' />
      	<div>默认的一些内容xxx</div>
    	</SlotComp>
    </>
  )
}
```
还可以使用 [`render Prop` ](https://zh-hans.reactjs.org/docs/render-props.html#use-render-props-for-cross-cutting-concerns)， 比较复杂的情况，比如需要向slot传值时，就可以使用 `renderProp` 
### 条件渲染的易错点
我犯过这种错， 现在知道原理了。
值得注意的是有一些 ["falsy" 值](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)，如数字 `0`，仍然会被 React 渲染。例如，以下代码并不会像你预期那样工作，因为当 `props.messages` 是空数组时，`0` 仍然会被渲染：
```jsx
// 如果length为0， 页面会渲染 0.
<div>
  {props.messages.length && <MessageList messages={props.messages} />}
</div>
```
要解决这个问题，确保 `&&` 之前的表达式总是布尔值
```jsx
<div>
  {props.messages.length > 0 && <MessageList messages={props.messages} />}
</div>
```


## [性能优化](https://react.docschina.org/docs/optimizing-performance.html)
这里只说一个，虚拟长列表。
[react-window](https://react-window.now.sh/) 和 [react-virtualized](https://bvaughn.github.io/react-virtualized/) 
## [react-transition-group](http://reactcommunity.org/react-transition-group/transition)
类似vue的transition， 有一说一，vue的transition确实好用，增强了用户体验（也针对开发）
在react中，这样来写
```jsx
import React, { useState } from 'react'
import { Button } from 'antd'
import styles from './index.module.less'
import './index.less'
import { CSSTransition } from 'react-transition-group'

const Ide = () => {
  const [box1, setBox1] = useState<boolean>(true)

  return (
    <>
      <CSSTransition in={box1} classNames='box1' unmountOnExit timeout={1000} onEnter={()=>{console.log('enter')}} onEntered={()=>{console.log('entered')}} onEntering={()=>{console.log('entering')}} mountOnEnter>
        <div className={styles.test}></div>
      </CSSTransition>

      <Button type='primary' onClick={() => setBox1(!box1)}>change</Button>
    </>
  )
}
export default Ide
```
```less
.box1-enter {
  opacity: 0;
  transform: scale(0.5);
}

.box1-enter-active {
  opacity: 1;
  transition: all 1s;
  transform: scale(1);
}

.box1-exit {
  opacity: 1;
  transform: scale(1);
}

.box1-exit-active {
  transform: scale(0.5);
  transition: all 1s;
  opacity: 0;
}
```
关键参数介绍：

- in： 控制transition显隐
- unmountOnExit： 隐藏后是否卸载组件
- mountOnEnter:    默认子组件会立即跟随transition组件一起挂载到dom上，如果想在第一次渲染时 `in={true}` 的情况下懒加载组件，就可以设置 `mountOnEnter`。如果指定了 `mountOnEnter`， 那么即使隐藏了，组件也不会卸载，除非设置了 `unmountOnExit`
- timeout指定过渡时间，毫秒为单位。可以为每个过程单独设置过渡时间： {appear: 300, enter:400, exit: 500}。跟css中transition的过渡时间对应
- 状态回调函数，onEnter之类的
- appear 好像在 CSSTransition中没有用

<img src={useBaseUrl('img/reactAdvance.gif')}  />

## useRef跟createRef的区别
纯个人理解
首先看官方文档对两者的给出的概念
> `React.createRef` 创建一个能够通过 ref 属性附加到 React 元素的 [ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html)。
> 
> 本质上，`useRef` 就像是可以在其 `.current` 属性中保存一个可变值的“盒子”。

从概念上来看， createRef是专门针对获取react-dom节点引用，而useRef更像是createRef的父类，不仅仅是获取节点引用。
从使用上来看，createRef的值只能注册到react元素上，且其current只读； useRef的值是随意的，且其current可写可读。
因为useRef创建的是一个普通JavaScript对象，且每次渲染时，返回同一个对象（对象引用不变）
所以：ref对象内容改变时，useRef不会通知我们，也不会重新渲染，我估计是因为react内部使用===或object.is判断新旧值
从参数来看，useRef可以传入初始值， createRef没有入参

---

引申：useRef和createRef都是创建一个 `{current: xx}` 这个样子的对象，这种对象传给React元素时，就可以通过 xRef.current 获取dom节点， 这个是useRef、createRef所做的 还是 React元素所做的？
我尝试了
```jsx
const A = () => {
  const c = {current: null}
	return (
  	<Button ref={c} onClick={()=>{console.log(c.current)}}></Button>
  )
}
```
打印结果
<img src={useBaseUrl('img/reactAdvance1.png')} />

所以啊， 我们在react中获取dom节点，其实跟useRef， createRef都没关系。 是React解析模板所做的事。
createRef源码：
```jsx
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject); // 封闭对象，不能向对象中新增属性，且原来的属性不可配置
  }

  return refObject;
}
```
~~useRef源码没找到， 我估计跟createRef差不多，~~不过useRef有个特性是每次渲染时不变，也就是说会有个新旧值的判断问题
。。。找到源码了 在react-dom-development中
useRef源码：
```jsx
  function mountRef(initialValue) {
    // mountWorkInProgressHook这个函数是构建出这个hook对应的存储数据以及队列等信息
    var hook = mountWorkInProgressHook();
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    hook.memoizedState = ref;
    return ref;
  }

	// mountWorkInProgressHook这个函数是构建出这个hook对应的存储数据以及队列等信息
  function mountWorkInProgressHook() {
    var hook = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };

    if (workInProgressHook === null) {
      // This is the first hook in the list
      currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
    } else {
      // Append to the end of the list
      // 这里涉及到了JS的连等赋值问题，我现在还没理解为什么要这样写      
      // https://segmentfault.com/q/1010000002637728
      workInProgressHook = workInProgressHook.next = hook;
    }

    return workInProgressHook;
  }
```
从useRef源码中可以发现相比createRef， 多了一个memoizedState，这就是为什么useRef每次渲染总是返回同样的对象

---

## 引申： JS连等理解
<img src={useBaseUrl('img/reactAdvance2.png')} />

- 根据运算符优先级先排序， `.` 运算符优先 `=` ， 所以 ` a.y = a.m = a = {x:2,y:2} ` = `a = a.y = a.m = {x:2,y:2}` 
- 从右至左， 分别是引用指向最右边那个值。
   - a.m 指向 {x:2, y:2}
   - a.y 指向 {x:2, y:2}
   - a 指向 {x:2, y:2}
   - 最后 a = {x:2, y:2}

<img src={useBaseUrl('img/reactAdvance3.png')} />

- a.m 指向 {x:1}
- a.y 指向 {x:1}
- a的指向没有改变
- 所以最后结果应该是 a={m:{x:1}, y:{x:1},...}
## [useState、useEffect 源码解析](https://zhuanlan.zhihu.com/p/68842478?from_voters_page=true)
文档中有些代码已经更新了，但是大体的思路还是没变。
这里只给出总结：
**useState**：

- 函数组件会有特殊的处理方式。
- 在render阶段，在将函数Fiber内容实例化的时候会去处理全局中的Hooks对象的指向
- 最终useState是调用内部函数mountState去设置state的。
- 在mountState中会对传入的参数如果是函数会对其先执行，得出返回值再继续运行。
- 在mountState中会对创建一个闭包事件，将当前的Hook所在的Fiber节点以及Hook队列对象作为参数绑定在函数中，并返回。

**useEffect**：

1. useEffect的执行时机都是每次渲染后触发，无论是首次渲染还是更新渲染。
1. useEffect只会有当然组件是函数组件才会执行，不能再非函数组件中使用。
1. useEffect可以在同一函数组件中使用多次，按调用顺序执行，这样我们可以将生命周期中需要做的事情更小粒度的去编写代码。
1. 在useEffect传入的函数中，return一个函数，用作函数组件卸载时需要执行的操作。
1. 控制useEffect什么时候执行可以传入第二参数，而且第二个参数必须是数组！react会对这次传入的数组中的每一项和上一次数组中的每一项进行对比，当发现不一样时会做对应记录，在渲染后就会触发对应符合触发的useEffect函数。
1. useEffect的触发是采用异步方式执行的。因为有可能存在多个useEffect的函数，如果像class组件那样在commit阶段最后触发的话，很容易导致阻塞线程。所以React利用 `**scheduleTimeout**` （setTimeout）的方式，将useEffect异步执行。
