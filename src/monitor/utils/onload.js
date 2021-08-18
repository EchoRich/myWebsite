/*
 * @Author: your name
 * @Date: 2021-08-18 12:32:55
 * @LastEditTime: 2021-08-18 12:35:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\monitor\utils\onload.js
 */
export default function onload (callback){
   if(document.readyState =="complete"){
      callback()
   }else{
      window.addEventListener("load",callback)
   }
}