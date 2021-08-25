/*
 * @Author: your name
 * @Date: 2021-08-25 22:09:46
 * @LastEditTime: 2021-08-25 22:34:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\generator\async+await.js
 */
// generator  +co  让代码相同步的但是 不能支持try catch

const resolve = require("resolve");

// const { fs } = require("mz");

// // async +await 解决一部问题而且支持 tryCatch

// async function read() {
//   let age  =   await fs.readFile("src/doc/callback/name.txt", "utf8")
//   let e  = await [age]  
//   return e // 用return 代表返回值 , 也就是then中接收的值 
  
// }
// read().then(data => {
//   console.log(data)
// }).catch(err => {
//    console.log(err)
// })

// function _asyncToGenerator  (fn){
//    return function () {
//       let self  = this ,
//       args  = arguments
//       return new Promise(function (resolve, reject){
//         var gen  = fn.apply(self,args) // 生成it
//         function  _next(value) {
//           asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value)

//         }
//          function _throw(err){
//     asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err)

//          }
//          _next(undefined)
//       })
//    }

// }
//  function asyncGeneratorStep (gen, resolve, reject, _next, _throw,key,arg ) {
//   try{
//      var info  = gen[key](arg) //  执行next函数返回一个value 还有一个done
//       var value  = info.value
//   }catch(err){
//     reject(err)
//     return 

//   }
//    if(info.done){
//       resolve(value)
//    }else{
//      Promise.resolve(value).then(_next, _throw) // 如果value是一个promise的话就会被直接执行掉然后走calback函数中继续执行next， 形成一个递归循环

//    }
//  }
 let p1  = new Promise((resolve, reject) => {
    resolve(2)
 }) 
 Promise.resolve(p1).then(val => {
    console.log(val)
 }) // promise.resolve 也是如果接收的是一个promise的话就直接返回执行后的值 