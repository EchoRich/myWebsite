/*
 * @Author: your name
 * @Date: 2021-08-19 09:00:55
 * @LastEditTime: 2021-08-19 09:06:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\callback\emit.js
 */
// 发布订阅模式 ， 就是emit的时候执行on传过来的函数 
let fs  = require("fs")
 function EventEmitter() {
   this._arr = []
 }
 EventEmitter.prototype.emit = function () { //发布
  this._arr.forEach(fn =>fn.apply(this,arguments))
 }
 EventEmitter.prototype.on  = function (callback) {
   this._arr.push(callback)
 }
  let e  = new EventEmitter()
  let personInfo  = {} 
  e.on(function () {
    console.log("一个街口成功了 ")
  })
  e.on(function (key,data) {
    personInfo[key]= data 
    if(Object.keys(personInfo).length==2){
      console.log("personInfo is", personInfo)
    }

  })
 fs.readFile("src/doc/callback/name.txt", function (err, data) {
   if(err) return console.log(err)
   e.emit("name", data)
})
fs.readFile("src/doc/callback/age.txt", function (err, data) {
   if(err) return console.log(err)
   e.emit("age", data)
})