---
title: vue源码——浅析响应式原理
id: vueReactive
---
import useBaseUrl from '@docusaurus/useBaseUrl'

### 又到了学习源码的时间⌚️。


我们都知道vue是一个mvvm框架，数据与视图双向绑定，所有入门vue的同学，实现的第一个demo应该都是👇


```html
<div id="app">
  <span>{{ msg }}</span>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      msg: 'hello, world!'
    }
  })                    // 此时浏览器打印 hello,world!
  vm.msg = 'change msg' // 添加这句之后， 浏览器打印'change msg'
</script>
```


这种数据响应式绑定是如何实现的呢？ 稍有经验的同学知道，是`发布订阅`的设计模式实现的，还知道实现这个模式的关键代码是`Object.defineProperty()`。再往下问，可能有人就不知道了。  不知道咱们就学，学无止境好伐～😆。开始正文 💪


### 准备工作


- 了解vue响应式原理
- 了解发布订阅设计模式



### 核心代码


- Observer类， 代码注释中的序号我会一一解释，如果解释不对，请指正！🤝



```javascript
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates. 
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();  // 1. 依赖对象
  this.vmCount = 0;
  def(value, '__ob__', this); // 2.def方法
  if (Array.isArray(value)) {
    if (hasProto) {   // 3. hasProto变量
      protoAugment(value, arrayMethods);  // 4.arrayMethods变量，5. protoAugment方法
    } else {
      copyAugment(value, arrayMethods, arrayKeys);  //6.copyAugment方法
    }
    this.observeArray(value);  // 7.observeArray方法
  } else {
    this.walk(value);  // 8.walk方法
  }
};
```


首先我们看一下代码开始的官方解释，我理解的意思是：


> 当目标对象被追踪，观察者这个方法会将目标对象的属性key转换为getter和setter方法，用来收集依赖和捕获更新



一个截图你就明白了～
<img src={useBaseUrl('img/vueReactive1.png')} alt='' />
我在`data`中随便写了一个对象，打印出来之后可以看到，这个对象中多了`get xxx` `set xxx`这种方法。这些方法就是`观察者`给目标对象添加的


- 依次解释注释部分



1. Dep()  依赖类



```javascript
var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};
```


> 官方解释我觉得非常晦涩，我理解的意思就是 dep对象上有多个方法。这个对象的作用是为了去检测数组的变化，因为Array类型的变量没有getter setter方法，只能通过`__ob__`属性中的dep来收集依赖捕获更新。



2. def方法



```javascript
/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
```


> 对原生`Object.defineProperty`进行了封装



3. `hasProto`



```javascript
var hasProto = '__proto__' in {};
```


> 判断一个空对象中是否有`__proto__`属性。这段代码我最初以为是判断当前环境，但是我尝试了在node环境下打印空对象，发现里面也有`__proto__`属性。在网上查了也没有结果，如果你知道的话，请麻烦在评论区帮我解惑！



4. `arrayMethods`



```javascript
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
```


> `arrayMethods`是`Array`的子类。这样做是为了获取`Array`的方法，比如`push`,`slice` 等等所有方法。



5. `protoAugment()`



```javascript
/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
```


> 将`arrayMethods`赋值给目标对象。 `__proto__`这个属性是所有对象都有的，是浏览器实现的，方便我们查看原型链，MDN上建议这个属性作为可读属性，最好不要直接使用。



6. `copyAugment`



```javascript
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
```


> 这段代码是把`arrayMethods`中的方法依次添加到目标对象中



7. `observeArray()`



```javascript
/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};
```


> 如果目标是数组对象，遍历这个数组，给每个对象注册观察者对象（也就是watcher）。



8. `walk()`



```javascript
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
```


> 如果目标是纯对象， 就给其中的每个属性添加getter/setter方法



9. `defineReactive$$1()`



```javascript
/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();  // 通知watcher改变， 响应式原理
    }
  });
}
```


> 走到了这一步，才是真正实现了响应式。核心是`dep.notify()`



### 整体解析


有一部分代码我没有贴出来，如果感兴趣可以去vue源码中查看。


我理解的vue响应式的思路大致是


1. 首先给目标加上`__ob__`属性，其值是目标本身的值以及dep依赖对象和vmcount
1. 判断目标是否为数组，因为数组变化是无法检测到的，所以特例一个情况。
1. 如果目标是数组的话，先把数组中会改变原数组的方法取出来，赋给目标，如果目标触发了这些方法，说明原数组改变了，这样能侧面反应出数据是否改变。源码中不仅仅是如此，还给数组中的每个值注册了watcher，如果这些值改变了，也会通知watcher
1. 如果目标是对象，给目标绑定getter/setter。对象的值改变会触发`notify()`，通知`watcher`改变，引起视图改变



### 总结


目前写下这篇博客，仅仅是我在阅读源码之后写的，其中肯定有很多理解不正确的地方，后续在网上学习之后，我会改正。其实我觉得vue实现响应式最关键的是Dep对象， 其中的`notify()`通知`watcher`，才实现了响应式，但是由于我对Dep对象的理解不深，所以暂时没有写下相关的代码，继续学习，等我深刻理解之后再回来补充🧐
