/*
 * @Author: your name
 * @Date: 2021-08-21 21:46:37
 * @LastEditTime: 2021-08-21 22:15:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\基本的promise\1.promise.js
 */
// promise里面的函数式一个里脊执行的函数 
//  有三种状态 pending状态以及fulFilled状态和rejected 状态 ， 成功状态和等待状态不会彼此转化
const Promise  = require("./promise") 
let promise  = new Promise(function (resolve, reject){
 setTimeout(function () {
   console.log("setTimeoutPromise")
   resolve("成功")
 })
 })
  promise.then(function (val) {
    console.log(111,val)
  }, function (err){
     console.log("err", err)
  })
   promise.then(function (val) {
    console.log(222,val)
  }, function (err){
     console.log("err", err)
  })
   promise.then(function (val) {
    console.log(333,val)
  }, function (err){
     console.log("err", err)
  })
  
  // promise.catch(err => {
  //    console.log("catch"  ,err)})
  // 如果then种有第二个参数并且还有catch函数的 那么两个函数都会走的 