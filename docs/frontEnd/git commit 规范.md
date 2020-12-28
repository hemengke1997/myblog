---
title: git commit 规范
id: gitCommitRule
---

### type: commit 的类型
- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能
- refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改（例如分号修改）
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改
- revert: 恢复上一次提交
- ci: 持续集成相关文件修改
- chore: 其他修改（不在上述类型中的修改）
- release: 发布新版本
- workflow: 工作流相关文件修改
1. scope: commit 影响的范围, 比如: route, component, utils, build...
1. subject: commit 的概述
1. body: commit 具体修改内容, 可以分为多行.
1. footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.





也可以使用表情来commit
[https://gitmoji.dev/](https://gitmoji.dev/)
