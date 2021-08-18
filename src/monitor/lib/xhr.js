/*
 * @Author: your name
 * @Date: 2021-08-16 22:30:18
 * @LastEditTime: 2021-08-18 09:41:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\monitor\lib\xhr.js
 */
export function injectXHR () {
  let xmlHttpRequest  = window.XMLHttpRequest;
  let oldOpen  = xmlHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open  = function (method, url, async, useName, password) {
   console.log("open中的this是指",this)
    this.logData  ={
      method,url,async,useName, password
    }
    return oldOpen.apply(this, arguments)

  }
   let oldSend  = XMLHttpRequest.prototype.send;
   let start; 
   XMLHttpRequest.prototype.send  = function (body) {
      console.log("send  this mean",this)
     if(this.logData){
       start = Date.now();
       let handler  =type => {
         let duration  = Date.now() -  start;
         let status  = this.status; 
         let statusText  =   this.statusText;
         let log  = {
           kind: "stabilty", 
           type: "xhr", 
           eventType: type,
           pathName: this.logData.url,
           status: stattus + "_" +statusText,
           duration:  "" + duration,
           response: this.response?JSON.stringify(this.response): "",
           params:  body || ""
         }
         console.log("thi logData is", log)
        
       }
        this.addEventListener("load", handler("load"),false);
        this.addEventListener("error", handler("error"), false)
        this.addEventListener("abort", handler("abort"), false)
     }
     oldSend.apply(this, arguments)
   }
}