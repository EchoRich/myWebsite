/*
 * @Author: your name
 * @Date: 2021-08-23 06:03:42
 * @LastEditTime: 2021-08-23 06:10:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\promise\promise的链式调用\2.promise.js
 */
let p  = new Promise((resolve, reject) => {
  resolve(123)
})
 let p2  = p.then(data => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log("执行setTimeout")
       reject(123)
      },1000)
   })
 },err => {
   return err+400
 })
p2.then(data=> {console.log(data, "success")},err=> {
  console.log(err, "fail")
}
).then(data => {
   console.log(data)
})