/*
 * @Date: 2021-12-14 11:08:28
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-12-29 17:04:23
 * @FilePath: /fun/index.d.ts
 * @Author: Fullsize
 */
/// <reference path="./types/math.d.ts" />
export = Fun;
export as namespace Fun;
declare const Fun: Fun.FunStatic;
declare namespace Fun {
    // tslint:disable-next-line no-empty-interface (This will be augmented)
    interface FunStatic {}
}