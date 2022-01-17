/*
 * @Author: your name
 * @Date: 2022-01-17 15:54:56
 * @LastEditTime: 2022-01-17 19:34:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/doc/5.js
 */
// 匹配捕获分组
console.log("lab".match(/l([a-z])([a-z])/))
//  匹配非捕获分组
console.log("lab".match(/l(?:[a-z])(?:[a-z])/))
//匹配命名分组
console.log("lab".match(/l(?<x>[a-z])(?<y>[a-z])/))
//  正向肯定前瞻并不会消费掉此字符
console.log("lab".match(/l(?=[a-z])([a-z])/)) //   // la 消费的意思就是匹配到了之后指针往后移
//正向否定前瞻
console.log("lab".match(/l(?![A-Z])([a-z])/))
// 反向肯定 会先找到l  然后看左边匹配不然后在看看右边匹配吗， 但是匹配的东西并不会写进书组当中去当中去
console.log("blab".match(/(?<=[a-z])l([a-z])/))
//反向否定
 console.log("blob".match(/(?<![A-Z])l([a-z])/))

 