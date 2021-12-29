/*
 * @Date: 2021-12-29 16:12:31
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-12-29 16:13:47
 * @FilePath: /fun/source/eq.js
 * @Author: Fullsize
 */
/**
 * @description: 比较两个数值，以确定它们是否相等。
 * @param {*} value
 * @param {*} other
 * @return {*} true 或false
 */
var eq = function (value, other) {
  return value === other || (value !== value && other !== other)
}
export default eq