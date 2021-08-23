/*
 * @Author: your name
 * @Date: 2021-08-23 22:02:18
 * @LastEditTime: 2021-08-23 22:09:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\promise\5.promise\延迟对象的使用.js
 */
let Promise  = require("./Promise")
let fs  = require("fs")
 function read  (url){
  //  我们之前是用了一个returnpromise的方法 ， 现在我们来使用defer对象
// let defer  = Promise.deferred() // 这个使我们封装私有的我们可以通过现有的promise加上方法
let defer  = Promise.deferred()
fs.readFile(url, "utf8", function (err, data){
  if(err) return defer.reject(err);
  defer.resolve(data)
})
 return defer.promise
 
 }
  read("src/doc/callback/age.txt").then(data =>{
    console.log(data)
  })