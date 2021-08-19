/*
 * @Author: your name
 * @Date: 2021-08-19 08:48:23
 * @LastEditTime: 2021-08-19 09:00:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\callback\3.paralle.js
 */
// 并发处理两个一部的东西怎么处理 ， 我的一般处理是串行的 ， 这个老师讲了怎么处理并行的 
let fs  = require("fs")
 function after (times, callback){
    let result={}
    return function (key, value) {
       result[key] = value
       if(--times ==0){
         callback(result)
       }

    }
 }
 let newFn  = after(2, function (result){
   console.log("两次之后调用 ",result)
 })

fs.readFile("src/doc/callback/name.txt", function (err, data) {
   if(err) return console.log(err)
   newFn("name", data)
})
fs.readFile("src/doc/callback/age.txt", function (err, data) {
   if(err) return console.log(err)
   newFn("age", data)
})


// D:\study\2021\mywebsite\src\doc\callback\3.paralle.js