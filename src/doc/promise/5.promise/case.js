/*
 * @Author: your name
 * @Date: 2021-08-23 22:09:48
 * @LastEditTime: 2021-08-25 21:23:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\promise\5.promise\case.js
 */
// const Promise = require("./promise")


//  Promise.reject(123).catch(err  => {
//    console.log(1111, err)
//  })
//   let p  = new Promise((resolve, reject) => {
//     resolve(new Promise((resolve, reject) => {
//        setTimeout(function () {
//           resolve(1000)
//        })
//     }))
//   })
//    p.then(r=> {
//       console.log(r)
//    })

let  p  = new Promise((resolve, reject) => {
  reject(123)
})
// Promise.prototype.catch = function (errCallback){
//   return this.then(null, errCallback)

// }
p.catch(err => {
  console.log(err)
}).then(data => {
  return 100
}).finally(() => {//无论如何都会执行的 在finally之后的then 会拿finally 之前的promise状态  
console.log(100000)
return  10000
}).then(data => {
   console.log(data)
}).catch(err => {
   console.log(9999,err)
})