/*
 * @Author: your name
 * @Date: 2021-08-03 19:18:26
 * @LastEditTime: 2021-08-03 19:24:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\monitor\utils\getLastEvent.js
 */
let lastEvent
["click", "touchstart", "mousedown", "keydown",  "mouseover"].forEach(
  eventType=> {
    document.addEventListener(eventType, event => {
      lastEvent = event
    }, {
      capture: true, //捕获阶段
      passive: true //默认不阻止默认事件
    })
  }
)
export  default function getLastEvent () {
   return lastEvent
}
