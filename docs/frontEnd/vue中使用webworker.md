---
title: vue中使用webworker
id: vueWithWebwoker
---


在`vue`项目中使用`webWorker` 时报错：**Uncaught SyntaxError: Unexpected token '<'**


网上大部分人说是需要配置 `inline` 选项，不太准确。


复盘一下整个安装使用的过程


1. 安装  `worker-loader`



```bash
npm install worker-loader -D
```


2. 配置 `webpack`



如果你的项目是基于 `vue/cli` 搭建的， 可以在 `vue.config.js` 中找到 `loader` 的配置位置。如果不是，在`webpack.base.conf.js` 中找到 `loader` 的配置位置


添加一行配置。 **切记！** 一定要写在 `/\.js$/` 这种匹配js文件的loader之前。


```javascript
{
  ...  
},
{
	test: /\.worker\.js$/,
    loader: "worker-loader",
    options: {
        inline: true,
        name: "workerName.[hash].js"
    }
},
{
    test: /\.js$/,
    ...
}
```


3. 使用例子

```javascript
// test.vue 主线程
import Worker from './file.worker.js'

methods:{
	test() {
        let worker = new Worker();
        let data1 = '1'
        let data2 = '2'
        worker.postMessage([data1,data2]);
        worker.onmessage = function(event) {
            console.log(event,'event1')
        };

        worker.addEventListener("message", function(event) {
            console.log(event,'event2')
        });
	}
}
```
```javascript
// file.worker.js  worker线程
self.addEventListener("message",e=>{
    setTimeout(()=>{
        console.log('worker线程收到主线程发来的消息', e)
    },400)
})
self.postMessage('worker线程发送消息给主线程')
```
