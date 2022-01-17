/*
 * @Author: your name
 * @Date: 2022-01-17 15:38:18
 * @LastEditTime: 2022-01-17 15:48:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/doc/3.regexp.js
 */
/**
 * ()捕获分组
 * (?:)非捕获分组
 * (?...)命名捕获分组
 * 
*/
let regexp  =   /user(?:\d+)([a-z]+)/;
 let  value  =   "00user100home"
  let result  = value.match(regexp)
   console.log(result)
//    [ 'user100', '100', index: 0, input: 'user100home', groups: undefined ] 
console.log(result.length) // 这个length只是针对分组的长度
// 这个index是从哪个地方开始匹配的 



