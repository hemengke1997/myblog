---
title: react中的setState顺序问题
id: react-setState-order
---

react中的setState在原生环境（如API回调中）下是同步的， 在react的环境下（或者说是react生命周期中，如合成事件，hooks中），顺序是异步的。


当初遇到的比较奇怪的问题：
```jsx
const [loading, setLoading] = useState<boolean>(false)

const test = () => {
  if(!loading) {
    setLoading(true)
    API.then(res=>{
    	setLoading(false)
    })
  }  
}

useEffect(()=>{
  console.log(loading)
},[loading])
```
在使用test方法之后，loading会变成true。 我尝试了，只要在微任务中setState，这个顺序就会比之前的更快。
网上有人说这是因为react无法在微任务中预知行为，所以微任务中的setState就是个真正的同步操作。


> setState 本身的方法调用是同步的，但是调用了setState不标志这react的 state 立即更新，这个更新是要根据当前环境执行上下文来判断的，如果处于betchedUpadte的情况下，那么state的不是当前立马更新的，而不处于betchedUpadte的情况下，那么他就有可能立马更新的。为什么有可能呢？因为现在有concurrentModel中优先级更高执行权的同步渲染和asynModel的异步渲染的情况，如果是异步渲染情况就不会立即更新的，异步调度的过程就不会立即渲染

> 


> 链接：[https://zhuanlan.zhihu.com/p/64753707](https://zhuanlan.zhihu.com/p/64753707)



解决方式： setState传入函数，依赖上一次的值
```jsx
const [loading, setLoading] = useState<boolean>(false)

const test = () => {
  if(!loading) {
    setLoading(t=>!t)
    API.then(res=>{
    	setLoading(t=>!t)
    })
  }  
}

useEffect(()=>{
  console.log(loading)
},[loading])
```




如上面所说， 如果在微任务中多次setState的话，会造成多次re-render
解决方法： 批量更新
```jsx
import { unstable_batchedUpdates } from 'react-dom'
unstable_batchedUpdates(() => {
// react 的batchUpdate 问题，在非react生命周期内以及合成时间内（比如原声事件监听、Promise回调函数、定时器中），react无法预知行为，无法批量合并更新，class组件也一样，可以讲setState或setxxx 放进unstable_batchedUpdates(() => {setXXX();setXXX()})进行批量更新
	setTest1()
  setTest2()
  ...
})
```
在react-redux中也有基于 `unstable_batchedUpdates` 做的批量更新（多次dispatch集成在一次中）
```jsx
import { batch } from 'react-redux'

batch(()=>{
	dispatch(actionCreator1)
  dispatch(actionCreator2)
  ...
})
```
