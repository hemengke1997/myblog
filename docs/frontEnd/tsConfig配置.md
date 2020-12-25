---
title: tsconfig.json 配置
id: tsConfig
---

###### [tsconfig官方配置文档](https://www.staging-typescript.org/tsconfig)
## compilerOptions编译选项
target用于指定编译之后的版本目录


```
"target": "es5",
```
module用来指定要使用的模板标准


```
"module": "commonjs",
```
lib用于指定要包含在编译中的库文件


```
"lib":[
  "es6",
  "dom"
],
```
allowJs用来指定是否允许编译JS文件，默认false,即不编译JS文件


```
"allowJs": true,
```
checkJs用来指定是否检查和报告JS文件中的错误，默认false


```
"checkJs": true,
```
指定jsx代码用于的开发环境:'preserve','react-native',or 'react


```
"jsx": "preserve",
```
declaration用来指定是否在编译的时候生成相的d.ts声明文件，如果设为true,编译每个ts文件之后会生成一个js文件和一个声明文件，但是declaration和allowJs不能同时设为true


```
"declaration": true,
```
declarationMap用来指定编译时是否生成.map文件


```
"declarationMap": true,
```
socuceMap用来指定编译时是否生成.map文件


```
"sourceMap": true,
```
outFile用于指定输出文件合并为一个文件，只有设置module的值为amd和system模块时才支持这个配置


```
"outFile": "./",
```
outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹


```
"outDir": "./",
```
rootDir用来指定编译文件的根目录，编译器会在根目录查找入口文件


```
"rootDir": "./",
```
composite是否编译构建引用项目


```
"composite": true,
```
removeComments用于指定是否将编译后的文件注释删掉，设为true的话即删除注释，默认为false


```
"removeComments": true,
```
noEmit不生成编译文件


```
"noEmit": true,
```
importHelpers指定是否引入tslib里的复制工具函数，默认为false


```
"importHelpers": true,
```
当target为"ES5"或"ES3"时，为"for-of" "spread"和"destructuring"中的迭代器提供完全支持


```
"downlevelIteration": true,
```
isolatedModules指定是否将每个文件作为单独的模块，默认为true，他不可以和declaration同时设定


```
"isolatedModules": true,
```
strict用于指定是否启动所有类型检查，如果设为true这回同时开启下面这几个严格检查，默认为false


```
"strict": true,
```
noImplicitAny如果我们没有一些值设置明确类型，编译器会默认认为这个值为any类型，如果将noImplicitAny设为true,则如果没有设置明确的类型会报错，默认值为false


```
"noImplicitAny": true,
```
strictNullChecks当设为true时，null和undefined值不能赋值给非这两种类型的值，别的类型的值也不能赋给他们，除了any类型，还有个例外就是undefined可以赋值给void类型


```
"strictNullChecks": true,
```
strictFunctionTypes用来指定是否使用函数参数双向协变检查


```
"strictFunctionTypes": true,
```
strictBindCallApply设为true后对bind、call和apply绑定的方法的参数的检测是严格检测


```
"strictBindCallApply": true,
```
strictPropertyInitialization设为true后会检查类的非undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullChecks,默认为false


```
"strictPropertyInitialization": true,
```
当this表达式的值为any类型的时候，生成一个错误


```
"noImplicitThis": true,
```
alwaysStrict指定始终以严格模式检查每个模块，并且在编译之后的JS文件中加入"use strict"字符串，用来告诉浏览器该JS为严格模式


```
"alwaysStrict": true,
```
noUnusedLocals用于检查是否有定义了但是没有使用变量，对于这一点的检测，使用ESLint可以在你书写代码的时候做提示，你可以配合使用，他的默认值为false


```
"noUnusedLocals": true,
```
noUnusedParameters用于检测是否在函数中没有使用的参数


```
"noUnusedParameters": true,
```
noImplicitReturns用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false


```
"noImplicitReturns": true,
```
noFallthroughCasesInSwitch用于检查switch中是否有case没有使用break跳出switch,默认为false


```
"noFallthroughCasesInSwitch": true,
```
moduleResolution用于选择模块解析策略，有"node"和"classic"两种类型


```
"moduleResolution": "node",
```
baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响


```
"baseUrl": "./",
```
paths用于设置模块名到基于baseUrl的路径映射


```
"paths": {
      "*":["./node_modules/@types", "./typings/*"]
    },
```
rootDirs可以指定一个路径列表，在构建时编译器会将这个路径中的内容都放到一个文件夹中


```
"rootDirs": [],
```
typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载


```
"typeRoots": [],
```
types用于指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载


```
"types": [],
```
allowSyntheticDefaultImports用来指定允许从没有默认导出的模块中默认导入


```
"allowSyntheticDefaultImports": true,
```
esModuleInterop通过导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性


```
"esModuleInterop": true,
```
不把符号链接解析为真实路径，具体可以了解下webpack和node.js的symlink相关知识


```
"preserveSymlinks": true,
```
sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件的位置，这个值会被写进.map文件里


```
"sourceRoot": "",
```
mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性


```
"mapRoot": "",
```
inlineSourceMap指定是否将map文件内容和js文件编译在一个同一个js文件中，如果设为true,则map的内容会以//#soureMappingURL=开头，然后接base64字符串的形式插入在js文件底部


```
"inlineSourceMap": true,
```
inlineSources用于指定是否进一步将ts文件的内容也包含到输出文件中


```
"inlineSources": true,
```
experimentalDecorators用于指定是否启用实验性的装饰器特性


```
"experimentalDecorators": true,
```
emitDecoratorMetadata用于指定是否为装上去提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引用ES2015.Reflect这个库


```
"emitDecoratorMetadata": true,
```
include也可以指定要编译的路径列表


```
"include":[],
```
files可以配置一个数组列表


```
"files":[],
```
exclude表示要排除的，不编译的文件，它也可以指定一个列表，规则和include一样，可以是文件可以是文件夹，可以是相对路径或绝对路径，可以使用通配符


```
"exclude":[]
```
extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置


```
"extends":""
```
compileOnSave如果设为true,在我们编辑了项目文件保存的时候，编辑器会根据tsconfig.json的配置更新重新生成文本，不过这个编辑器支持


```
"compileOnSave":true
```
一个对象数组，指定要引用的项目


```
"references":[]
```

