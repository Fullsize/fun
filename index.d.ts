/*
 * @Date: 2021-12-14 11:08:28
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-12-29 16:38:46
 * @FilePath: /fun/index.d.ts
 * @Author: Fullsize
 */
// export = Fun;
// export as namespace Fun;
// declare const Fun: Fun.FunStatic;
// declare namespace Fun {
//     // tslint:disable-next-line no-empty-interface (This will be augmented)
//     interface FunStatic {}
// }
export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;
export function eq(a: any, b: any): boolean;
export as namespace Fun
