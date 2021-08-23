/*
 * @Author: your name
 * @Date: 2021-08-22 11:53:58
 * @LastEditTime: 2021-08-23 06:45:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\promise\promise的链式调用\1.promise.js
 */
let Promise = require('./promise')
const fs  =require("fs")
 function read(url){
   return new Promise((resolve, reject) => {
      fs.readFile(url, "utf-8", function (err, data){
        if(err)return   reject(err)
        resolve(data)
      })
   })
 }
// 链式调用不是jQuery的方式返回this
// 如果他会让你方法种返回一个promise ，那么久才用这个promise的状态作为成功或者失败 把promise的结构作为参数
// 如果返回的式一个普通只 直接作为下一个then的成功的参数 
//  在then方法种排除异常也会走失败 如付哦错误种返回的是一个普通只的也会变成成功太 
//  每个then方法都会返回一个新的 promise 
read("src/doc/callback/name.txt").then(data => {
  return read(
    `src/doc/callback/${data}`
  )}).then(data => {
     console.log(data, "1")
     throw new Error("失败")
  },err=> {
   console.log("err",err)
  }).then(data => {console.log(data, '2')}, err=> {
   console.log(err, "3")
   return undefined
   
  }).then(data => {
    console.log("成功")
  }, err => {
    console.log("失败")

  })
  // 必须返回一个新的promise, 
 0