/*
 * @Author: your name
 * @Date: 2022-01-17 15:47:34
 * @LastEditTime: 2022-01-17 15:53:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/doc/4.group.js
 */
 let reg  = /(?<x>\d{2})-(?<y>\d{2})/
console.log(reg.exec("11-22")) // 就是分组被起了个名字
console.log("11-22".replace(reg, "$<y>+$<x>")) // 这个$y  和$x 可以拿到对应的值
