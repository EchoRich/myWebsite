/*
 * @Author: your name
 * @Date: 2021-08-18 12:23:15
 * @LastEditTime: 2021-08-18 13:04:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\monitor\lib\blankScreen.js
 */
import onload from  '../utils/onload'
function getSelector (element) {
  var selector; 
   if(element.id){
     selector =`#${element.id}`;
   }else if (element.className&&typeof className=="string"){
     selector =`.${element.className.split(' ').filter(item =>!!item).join(".")}`
   }else {
     selector  = element.nodeName.toLowerCase()
   }
    return selector
}
export function blankScreen () {
  const wrapperSelectors  =   ["body", "html", "#home"]
   let emptyPoints   = 0 
   function isWrapper (element){
      let selector = getSelector(element)
       console.log(888,selector)
       if(wrapperSelectors.indexOf(selector)>=0){
         emptyPoints++
       }
   }
    onload(function () {
       let xElements, yElements;
       for(let i  =1; i< 9; i++){
         xElements = document.elementFromPoint(window.innerWidth *i/10, window.innerHeight/2)
         
         yElements  = document.elementFromPoint(window.innerWidth/2,  window.innerHeight*i/10)
         isWrapper(xElements)
          isWrapper(yElements)
       }
        if(emptyPoints>6){
           console.log("this is blank page ")
        }
      
    })
}