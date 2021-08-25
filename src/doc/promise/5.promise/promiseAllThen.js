// /*
//  * @Author: your name
//  * @Date: 2021-08-25 21:25:02
//  * @LastEditTime: 2021-08-25 21:32:33
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \mywebsite\src\doc\promise\5.promise\promiseAllThen.js
//  */
// let fs  = require("fs")

// function promisify(fn){
//   return function () {
//     return new Promise((resolve, reject) => {
//       fn(...arguments, function (err, data){
//         if(err)reject(err)
//         resolve(data)
//       })
//     })
//   }
// }
// //  let read  = promisify(fs.readFile)

//   function promisifyAll(obj){
//     for (let key  in obj){
//        if(typeof obj[key]=="function"){
//          obj[`${key}async`] = promisify(obj[key])
//        }
//     }
//   }
//    promisifyAll(fs)
//    fs.readFileasync("src/doc/callback/name.txt", "utf8").then(function (data) {
//     console.log(222, data)
//  })
Promise.all  = function (values) {
   return new Promise((resolve, reject) => {
      let arr  = []
      let count  =  0
       function processData (key, value) {
          arr[key] = value;
          if(++count ==values.length){
             resolve(arr)
          }

       }
      for(let  i  = 0 ;  i<values.length; i++){
         let current  =   values[i]
          let then  = current.then
          if(then&&typeof then =="function"){
            then.call(current, y=> { // 如果是一个promise的话就让promise继续执行
              processData(i,  y)

            },reject)
          }else{
             processData(i, current) // 常量的话直接返回就好了 
          }
      }
   })

}
Promise.race = function (values){
   return new Promise((resolve, reject) => {
     for(let i  = 0 ; i< values.length; i++){
       let current  = values[i]
        let then  = current.then
        if(then  &&typeof then=="function"){
          then.call(current, y => {
            resolve(y)
          },reject)
        }else{
           resolve(current)
        }
     }
   }
   )

}