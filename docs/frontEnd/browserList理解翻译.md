---
title: browserslist翻译+理解
id: browserslist
---
import useBaseUrl from '@docusaurus/useBaseUrl'

## 前言

目前在学习create-react-app，在其[官方文档](https://create-react-app.dev/docs/supported-browsers-features/)中看到了browserslist配置。以前开发vue项目的时候，也自己配置过。时间久了就忘了。现在重新学习一遍。


[Browserslist的github地址](https://github.com/browserslist/browserslist)


## Browserslist的作用


在项目中添加了Browserslist配置的话，这些配置会把目标浏览器以及NodeJS版本分享给前端工具，前端工具就可以根据版本来做兼容处理等。Browserslist被应用在以下工具中：


- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Babel](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
- [postcss-preset-env](https://github.com/jonathantneal/postcss-preset-env)
- [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
- [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)
- [postcss-normalize](https://github.com/jonathantneal/postcss-normalize)
- [obsolete-webpack-plugin](https://github.com/ElemeFE/obsolete-webpack-plugin)



这些工具通过Browserslist，知道了浏览器的版本，就会根据这个版本做相应的兼容处理。（我们都知道前端需要兼容的东西太多了，因为浏览器厂商太多了）


Browserslist本身也是一个工具，但是它是被其他工具所使用。单独使用Browserslist这个工具，对开发者而言，没有什么意义。


## Browserslist的使用方法


以下使用的官方例子


- 添加配置到 `package.json` 中



```json
 "browserslist": [
    "defaults",
    "not IE 11",
    "not IE_Mob 11",
    "maintained node versions",
  ]
```


- 单独写一个文件 `.browserslistrc`



```json
# Browsers that we support

defaults
not IE 11
not IE_Mob 11
maintained node versions
```


开发者把配置了Browserslis之后，以上所说的那些工具，会自动设置目标浏览器所需要的配置。对开发人员来说非常方便，不需要考虑太多兼容性问题了。


## 配置选项的意义？


我们可以看到官方例子中，写了


- defults
- no IE 11
- ....



这些的意思是什么呢？


这时候我们打开一个[网站](https://browserl.ist/)，在这里，你就懂了。


browserlist会根据开发者给出的配置选项，去查询符合选项的浏览器有哪些，然后再把这些浏览器版本告诉前端工具


## 如何配置Browserslist


- 我们可以只设置一个`default`查询，这样对于大多数用户来说都是合理的



```json
"browserslist": [
    "defaults"
  ]
```


`defaults` 的查询结果：
<img src={useBaseUrl('img/browserList1.png')} alt='' />

- 如果你想改变默认的`defaults`配置，官方推荐我们组合像 `last 1 versions`，`not dead` 和 `> 0.2%` 这样的配置
```json
"browserslist": [
    ">0.2%",
     "not dead",
    "last 2 versions"
]
```

- 这个组合查询的意思是，筛选 **最新两个版本、还存活着的、且用户比例大于0.2%** 的浏览器



<img src={useBaseUrl('img/browserList2.png')} alt='' />


> 从筛选结果来看， **逗号分割的组合查询的结果是并集，而非交集**



- 之所以要组合查询，而不单独使用`>0.2%`，是为了避免流行的浏览器越来越流行，避免出现当初IE6一样的垄断情况。 （有竞争才有进步）
- 只有当你专门针对某个浏览器（如Chrome）时 ，才直接使用`last 2 Chrome versions`。 如果不是针对某个浏览器，不要使用这种写法。我们应该尊重所有为用户体验努力的浏览器厂商。
- 不要因为你不认识某个浏览器，而把它从browerslist配置中去除。


## 查询的来源


Browserslist会从以下的配置中，根据配置来查询目标浏览器


1. `package.json` 中的 `browerslist` 这个key所对应的字段。**这是官方推荐的方式**
1. 单独写一个 `.browerslistrc` 配置文件
1. 单独写一个 `browserslist` 配置文件
1. `BROWSERSLIST` 环境变量
1. 如果以上的方式没有产生合法的查询条件， Browserlist会使用 `> 0.5%, last 2 versions, Firefox ESR, not dead`



## 查询体的写法


做过数据库查询的同学都知道，有或、且、非这种查询，Browserslist支持这些查询方式。


**或查询**： 使用 `,` 或 `or` 拼接查询条件。**查询结果为并集**。 写法如:


```json
> .5% or last 2 versions
```
```json
> .5%, last 2 versions
```

- 以上两种写法的结果是完全一样的



**且查询**： 使用 `and` 拼接查询条件，**查询结果为交集**。写法如：


```json
> .5% and last 2 versions
```


**非查询**： 使用 `not` 拼接查询条件。可以跟或查询、且查询组合。 写法如：


```json
> .5% and not last 2 versions
```
```json
> .5% or not last 2 versions
```
```json
> .5%, not last 2 versions
```


有个快速查询的小技巧： 在终端命令行中，写查询条件


```bash
npx browserslist '> 0.2%, not IE 8'
```


## 查询例子


你可以指定查询浏览器和nodeJS版本：


- `defaults`: 默认配置 （`>0.5%, last 2 versions,Firefox ESR, not dead`）
- `>5%`: 选择浏览器用户量大于5%的浏览器，也可以使用`>=`, `<` 和 `<=`
- `>5% in US`:  针对[美国用户](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
- `5% in my stats`: 使用开发者[自定义的用户数据](https://github.com/browserslist/browserslist#custom-usage-data)
- `cover 99.5%`:  覆盖最流行的浏览器
- `cover 99.5% in US`： 跟上面一样，针对美国用户
- `node 10` and `node 10.4`：选择最新的NodeJS `10.x.x` 或 `10.4.x`版本
- `ie 6-8`: 选择这个范围内的IE浏览器
- `IOS 7`: 精确查询IOS 浏览器的7版本
- 等等。。。



更多例子可以查看[Browserslist官网](https://github.com/browserslist/browserslist#full-list)

