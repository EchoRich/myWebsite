/*
 * @Author: your name
 * @Date: 2021-08-05 09:50:08
 * @LastEditTime: 2021-08-05 10:29:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\monitor\utils\getSelector.js
 */
function getSelector(path) {
  return path.reverse().filter(ele=> {
    return ele!==document&&ele!==window
  }).map(ele => {
    if(ele.id){
      return  `${ele.nodeName.toLowerCase()}#${ele.id}`
    }else if(ele.className&&typeof ele.className=="string"){
      return  `${ele.nodeName.toLowerCase()}.${ele.className}`
    }else{
      return ele.nodeName.toLowerCase()
    }
  }).join(" ")  
}
export default function getLastEventEle (path) {
  if(Array.isArray(path)){
return getSelector(path)
  }
}