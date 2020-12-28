---
title: 关于项目中model、dialog单例模式的思考
id: thinkSinglemode
---


目前项目中model或dialog（下文统称为dialog）都是写在页面中的，如果页面中有10个dialog，那么在页面加载时，这些dialog的dom就会被绘制出来。完全是没有必要的dom渲染，如何去优化？


第一直觉是使用单例模式。 整个项目中、或整个页面中 ，只有一个dialog， 且只有在显示时绘制dom，隐藏时删除。
