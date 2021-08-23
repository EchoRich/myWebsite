/*
 * @Author: your name
 * @Date: 2021-08-23 18:57:31
 * @LastEditTime: 2021-08-23 19:11:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\promise\实现符合规范的promise\case.js
 */


const Promise = require("./promise")

let p = new Promise((resolve, reject) => {
  resolve(100)
})
// // 值的穿透
// p.then().then().then (data => {
//    console.log(data)
// }, function (err){
//    console.log(err)
// })
let promise2  = p.then(() => {
   return  new Promise((resolve, reject) => {
     setTimeout(function () {
       resolve(new Promise((resolve, reject)=> {
          resolve(new Promise((resolve, reject) => {
             resolve(2000)
          }))
       }))
     }, 1000)
   })
})
promise2.then(data => {
   console.log("promise2", data)
})