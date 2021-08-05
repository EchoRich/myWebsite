/*
 * @Author: your name
 * @Date: 2021-08-03 18:27:43
 * @LastEditTime: 2021-08-05 10:25:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\monitor\lib\jsError.js
 */

import getLastEvent from '../utils/getLastEvent'
import getSelector from '../utils/getSelector'
export function injectJsError() {
  // 监听全局未捕获的错误
  window.addEventListener("error", function (event) {
    let lastEvent  = getLastEvent()
    console.log(2222, event, lastEvent)
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
  })

}
 function getLines(stack) {
    return stack.split('\n').slice(1).map(item => item.replace(/\s+at\s+/,"")).join("^")

 }