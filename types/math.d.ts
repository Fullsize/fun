/*
 * @Date: 2021-12-29 17:04:33
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-12-29 17:07:22
 * @FilePath: /fun/types/math.d.ts
 * @Author: Fullsize
 */
import _ = require("../index");
declare module "../index" {
  interface FunStatic {
    /**
     * @description: 相加
     * @param a  
     * @param b  
     * @return  a+b之和
     */    
    add(a: number, b: number): number;
  }
}