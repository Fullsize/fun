/*
 * @Date: 2021-12-15 17:06:01
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-12-15 18:13:16
 * @FilePath: /fun/source/randomId.js
 * @Author: Fullsize
 */
/**
 * @description: 随机id
 * @param {*} 
 * @return {*} 返回随机id
 */
var randomId = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
    });
}
export default randomId