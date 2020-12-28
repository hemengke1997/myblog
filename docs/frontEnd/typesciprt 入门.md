---
title: typesciprt 入门
id: typescriptGuide
---

## 项目配置
根目录上配置： `tsconfig.json`  详细[配置链接](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
```json
{
  "compilerOptions": {
    "target": "esnext",  // 编译目标语言的版本
    "module": "esnext",  // 生成代码的模块标准
    "moduleResolution": "node",
    "noImplicitAny": false, // 在没有类型注释的某些情况下，当TypeScript不能推断出变量的类型时，它会为变量返回到any类型
    "importHelpers": true,  // 指定model解析方式(node.js)
    "allowJs": true, // 可以在ts中import js
    "jsx": "react",
    "esModuleInterop": true,
    "sourceMap": true,  // 调试时显示源代码
    "baseUrl": "./",  // 解析非相对模块的基地址
    "strict": true,  // 严格模式
    "paths": {
      "@/*": ["./src/*"],
    },
    "allowSyntheticDefaultImports": true,
    "typeRoots": [ // 声明文件
      "node_modules/@types",
    ]
  },
  "include": [
    "src/**/*",
    "global.d.ts"
  ],
  "exclude": [ // 跳过这些文件
    "node_modules",
    "dist"
  ],
}

```
## 核心概念
#### 基础类型

- number: const x: number = 1
- boolean: const x: boolean = true // 注意： 使用new Boolean()构造出来的实例不是boolean类型
- string: const x:string = 'xx'
- 数组: 有两种表示方式 `number[]` / `Array<number>`
- 元组: 规定个数和类型的数组叫作元组  `const x:[number,string] = [1, 'x']`
- 枚举:  把一些有关联的数据放在一起， 如星期几，方向，正确或错误等
```typescript
enum x {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right'
}
```

- 对象
- any: 对于开发者不清楚的变量 可以指定为any （其实就等于什么都没指定，完全没有类型限制）
- null/undefined: 基本上用不着， 就是确定某个量是null 或 undefined
- never: 无法到达终点的值， 比如抛出异常
- viod: 函数没有返回值

