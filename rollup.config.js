/*
 * @Date: 2021-12-10 17:35:43
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-12-15 17:32:19
 * @FilePath: /fun/rollup.config.js
 * @Author: Fullsize
 */

import resolve from 'rollup-plugin-node-resolve'; // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs'; // commonjs模块转换插件
import babel from "rollup-plugin-babel"; // babel 插件
import { eslint } from 'rollup-plugin-eslint'; // eslint插件
import { uglify } from 'rollup-plugin-uglify';
const config = {
  input: 'source/index.js', // 打包的入口文件
  output: {
    name: 'Fun',  // 输入的包名
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
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
    },
    warnings: false
  }))
}
export default config;
