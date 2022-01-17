/*
 * @Author: your name
 * @Date: 2022-01-17 15:07:13
 * @LastEditTime: 2022-01-17 15:41:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/doc/1.regexp.js
 */
let {pathToRegexp, regexpToFunction}  = require("path-to-regexp")
let keys  = []
// let regExp  = pathToRegexp("/user/:id",  keys, {
//     end: true
// })
//  console.log(regExp)
//  console.log(keys)
//   let url ="/user/100";
//    let result  =   url.match(regExp)
//     console.log(result)
//   console.log(regExp.test("/home"))
//   console.log(regExp.test("/home/"))
//   console.log(regExp.test("/home#"))
//   console.log(regExp.test("/home?"))
 let regExp= pathToRegexp("/user/:id/:name", keys, {end: true})
 console.log(regExp)
 let url  ="/user/100/zhufeng"
 let result  = url.match(regExp)
 console.log(result)
 let params  = keys.map(item =>item.name)
  console.log(params)
  // 将数组转化成 对象
  let memo  = params.reduce((memo,param, index) => {
      memo[param] =result[index+1]
      return memo
  }, {})
   console.log(memo) // 这个就是params 

   
