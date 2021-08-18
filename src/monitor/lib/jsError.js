/*
 * @Author: your name
 * @Date: 2021-08-03 18:27:43
 * @LastEditTime: 2021-08-16 22:09:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\monitor\lib\jsError.js
 */

import getLastEvent from '../utils/getLastEvent'
import getSelector from '../utils/getSelector'
import formatTime from './formatTime'
export function injectJsError() {
  // 监听全局未捕获的错误
  window.addEventListener("error", function (event) {
     console.log("baocuole  ")
    let lastEvent  = getLastEvent()
    console.log(2222, event, lastEvent)
     if(event.target&&(event.target.src || event.target.href)){
       // 这是链接没有的报错
        let log  ={
          kind: "stabilty",  
          type: "error",  
          errorType: "resourseError",
          fileName : event.target.src || event.target.href, 
          tagName: event.target.tagName,
          timeStamp:  formatTime(event.timeStamp), 
          selector:  getSelector(event.path || event.target)
        }
     }else{
 let log ={
      kind: "stability",  //指标的大类型
      type: "error", 
      errorType:  "jsError",
      url:"", 
      "message": event.message ,// 报错信息 
      fileName: event.filename,// 报错文件 
       position:  `${event.lineno}:${event.colno}`,
       stack: getLines(event.error.stack),
       selector: lastEvent?getSelector(lastEvent.path): '' // 代表最后一个操作元素
    }
    console.log(33333,log)
     }
   
  })

}
 function getLines(stack) {
   if(!stack){
     return ""
   }
    return stack.split('\n').slice(1).map(item => item.replace(/\s+at\s+/,"")).join("^")

 }
 window.addEventListener("unhandledrejection", function (event) {
  //如果是reject的话那么就不会走这里的 
  let lastEvent  = getLastEvent()
  let message =""
  let line  = 0 
   let column  =  0
   let file  =""
   let stack  =""
    let reason  = event.reason
   if(typeof reason=="string"){
     message = reason
   }else if(typeof reason =="object"){
     message  = reason.message
      if (reason.stack){
        let matchResult  = reason.stack.match(/at\s+(.+):(\d+):(\d+)/)
        console.log("正则表达式是 ", matchResult)
         if(matchResult){
          file  = matchResult[1]
          line  = matchResult[2]
          column  = matchResult[3]
         }
         stack  = getLines(reason.stack)
      }
   }
   let obj  ={
     kind: "stability", 
     type: "error",
     errorType:  "promiseError",
     message: message,
     fileName: file,
     position:  `${line}:${column}`,
     stack, 
     selector: lastEvent?getSelector(lastEvent.path || lastEvent.target) : ""
   }
   console.log("unhandleRekection",obj)
 })