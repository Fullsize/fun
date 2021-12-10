/*
 * @Date: 2021-12-10 17:35:43
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-12-10 18:24:01
 * @FilePath: /fun/rollup.config.js
 * @Author: Fullsize
 */

import resolve from 'rollup-plugin-node-resolve'; // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs'; // commonjs模块转换插件
import babel from "rollup-plugin-babel"; // babel 插件
import { eslint } from 'rollup-plugin-eslint'; // eslint插件

export default {
  input: 'source/index.js', // 打包的入口文件
  output: {
    name: 'Fun',  // 输入的包名
    file: './bin/index.js', // 打包输出地址, 这里的导出地址就是package内main的地址
    format: 'umd' // 包类型
  },
  plugins: [  // 使用的插件
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    eslint({
      throwOnError: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    })
  ],
  ignore: [
    "node_modules/**" // 忽略目录
  ]

}
