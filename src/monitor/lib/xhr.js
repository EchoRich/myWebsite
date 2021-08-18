/*
 * @Author: your name
 * @Date: 2021-08-16 22:30:18
 * @LastEditTime: 2021-08-18 12:19:55
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
     
     if(this.logData){
       start = Date.now();
       let handler  =type => {
         let duration  = Date.now() -  start;
         let status  = this.status; 
         let statusText  =   this.statusText;
          console.log(1111, this, this.status)
         let log  = {
           kind: "stabilty", 
           type: "xhr", 
           eventType: type,
           pathName: this.logData.url,
           status: status + "_" +statusText,
           duration:  "" + duration,
           response: this.response?JSON.stringify(this.response): "",
           params:  body || ""
         }
         console.log("this logData is", log)
       }
        this.addEventListener("load", handler("load"),false);
        this.addEventListener("error", handler("error"), false)
        this.addEventListener("abort", handler("abort"), false)
     }
     oldSend.apply(this, arguments)
   }
}