/*
 * @Author: your name
 * @Date: 2021-08-19 08:34:13
 * @LastEditTime: 2021-08-19 08:43:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\callback\1.aop.js
 */
/*
 *aop是面向切面变成 
 */
// eslint-disable-next-line no-extend-native
Function.prototype.before  = function before (callback){
  let self  = this   //如果不在这边定义this的指向的话 ，那么newFunc中的this指向的是window
   return function () {
     callback()
      console.log(this)
      self.apply(self, arguments)
   }
}
 function fn  () {
   console.log("一定的功能")
 }
 let newFn   = fn.before(function () {
   console.log("在函数执行前执行")
 })
  newFn()