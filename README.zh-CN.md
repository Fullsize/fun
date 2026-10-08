# fun-all

一个小型 JavaScript 工具库，提供数值相加、值相等比较和随机标识符生成。

[![npm version](https://img.shields.io/npm/v/fun-all.svg)](https://www.npmjs.com/package/fun-all)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](#许可证)

[English](./README.md) | **简体中文**

## 简介

`fun-all` 提供三个独立、易用的工具函数：

- **`add`**：将两个值转换为数字后相加。
- **`eq`**：使用 SameValueZero 语义比较值，支持 `NaN` 相等判断。
- **`randomId`**：生成 UUID v4 格式的字符串，适用于非安全敏感场景。

本库以 UMD 格式打包，可通过 CommonJS 使用，也可在浏览器中通过全局变量 `Fun` 调用。它是一个小型工具函数集合，而非完整的函数式编程框架。

## 目录

- [安装](#安装)
- [快速开始](#快速开始)
- [API 文档](#api-文档)
- [TypeScript 支持现状](#typescript-支持现状)
- [本地开发](#本地开发)
- [参与贡献](#参与贡献)
- [许可证](#许可证)

## 安装

```sh
npm install fun-all
```

也可以使用 Yarn：

```sh
yarn add fun-all
```

## 快速开始

### Node.js / CommonJS

```js
const { add, eq, randomId } = require('fun-all');

add(2, 3);       // 5
eq(NaN, NaN);   // true
randomId();     // 例如 'a71f892c-314b-4df0-8a90-09caa8c20635'
```

### 使用 JavaScript 打包工具

如果打包工具支持从 CommonJS/UMD 包中进行命名导入：

```js
import { add, eq, randomId } from 'fun-all';

add(10, 5);   // 15
eq('5', 5);   // false
randomId();   // 一个新的 UUID 格式字符串
```

### 浏览器

通过 CDN 加载 UMD 文件。以下示例固定版本，以便复现：

```html
<script src="https://cdn.jsdelivr.net/npm/fun-all@0.1.5/lib/fun_all.js"></script>
<script>
  console.log(Fun.add(2, 3));     // 5
  console.log(Fun.eq(NaN, NaN)); // true
  console.log(Fun.randomId());
</script>
```

## API 文档

### `add(a, b)`

返回 `Number(a) + Number(b)`。

| 参数 | 说明 |
| --- | --- |
| `a` | 第一个值，使用 `Number()` 转换 |
| `b` | 第二个值，使用 `Number()` 转换 |

**返回值：** 数字。如果任一值转换后为 `NaN`，结果也是 `NaN`。

```js
add(1, 2);           // 3
add('1', '2');       // 3，而非 '12'
add(-2, 5);          // 3
add('hello', 2);     // NaN
add(0.1, 0.2);       // 0.30000000000000004
```

遵循 JavaScript 标准的数字转换和浮点数运算规则。无法通过 `Number()` 转换的值（例如 Symbol）会导致抛出异常。

### `eq(value, other)`

使用 [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) 语义比较两个值：与严格相等（`===`）一致，但将 `NaN` 与 `NaN` 视为相等。

**返回值：** 布尔值。

```js
eq(1, 1);           // true
eq(1, '1');         // false
eq(NaN, NaN);       // true
eq(0, -0);          // true
eq({ a: 1 }, { a: 1 }); // false

const value = { a: 1 };
eq(value, value);   // true
```

对象和数组按引用比较，不比较其内容。此函数不提供深度相等判断。

### `randomId()`

生成小写十六进制字符串，格式为 `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`，其中 `y` 为 `8`、`9`、`a` 或 `b`。

**参数：** 无。

**返回值：** 长度为 36 的字符串。

```js
const id = randomId();
// 例如 'a71f892c-314b-4df0-8a90-09caa8c20635'
```

> **安全提示：** 此函数使用 `Math.random()`，不具备密码学安全性，也不保证唯一性。请勿用于密码、认证令牌或其他安全敏感标识符。如果需要使用密码学随机数生成的 UUID，请在环境支持时使用 [`crypto.randomUUID()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)。

## TypeScript 支持现状

当前 TypeScript 类型声明尚不完整：

- 仅声明了 `add(a: number, b: number): number`，未声明 `eq` 和 `randomId`。
- `index.d.ts` 引用了 `types/math.d.ts`，但当前包的 `files` 列表未包含 `types` 目录。

请勿将已发布的包视为具备完整 TypeScript 支持。欢迎贡献类型声明和发布文件配置的改进。

## 本地开发

```sh
git clone https://github.com/Fullsize/fun.git
cd fun
yarn install
```

| 命令 | 用途 |
| --- | --- |
| `yarn dev` | 以监听模式运行 Rollup |
| `yarn build:umd` | 构建 `lib/fun_all.js` |
| `yarn build:umd:min` | 构建 `lib/fun_all.min.js` |
| `yarn build:cjs` | 使用 Babel 编译 `source/`，输出到 `src/` |

虽然脚本名为 `build:cjs`，但当前 Babel 配置使用 `modules: false`，不会将 ES 模块语法转换为 CommonJS。

公开导出定义在 [`source/index.js`](./source/index.js) 中。`source/concat.js` 是未完成的占位文件，不属于公开 API。当前项目未配置自动化测试脚本。

## 参与贡献

欢迎提交问题反馈、文档改进和聚焦单一目标的 Pull Request。

1. [创建 Issue](https://github.com/Fullsize/fun/issues)，描述问题或拟议的改动。
2. 保持改动范围清晰，并提供预期行为示例。
3. 如涉及 API 变更，请同步更新中英文 README 和相关 TypeScript 类型声明。
4. 提交 Pull Request 前，运行对应的构建命令。

## 许可证

[ISC](https://opensource.org/license/isc)，以 [`package.json`](./package.json) 中的声明为准。
