/*
 * @Author: your name
 * @Date: 2021-08-19 08:43:26
 * @LastEditTime: 2021-08-19 08:47:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\callback\2.after.js
 */
// 执行几次之后在去执行莫藕断函数
function after  (times, callback) {
   return function () {
     if(--times===0){
    callback()
  }

   }
  
}
 let newFn =   after(3, function () {
    console.log("多少次之后执行某段函数")
 })
  newFn()
  newFn()
  newFn()
  newFn()