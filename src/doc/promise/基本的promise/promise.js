/*
 * @Author: your name
 * @Date: 2021-08-21 21:53:46
 * @LastEditTime: 2021-08-21 22:04:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\基本的promise\promise.js
 */
console.log("my promise")
 function Promise(executor) {
   this.status  = "pending"
  //  成功和失败的原因
  this.value  = undefined
  this.reason  = undefined 
   let self  = this
  function resolve(value) {
     if(self.status==="pending"){
       self.value  = value
       self.status  =   "fulfilled"
     }

  }
   function reject(reason){
      if(self.status ==="pending"){
        self.reason  = reason; 
        self.status ="rejected"
      }
   }
   try{
  executor(resolve, reject)
   }catch(err){
     reject(err)
   }
 

 }
  Promise.prototype.then= function (onfulfilled, onrejected){
    let self  = this;
    if(self.status=="fulfilled"){ //如果状态式成功的话 
      
      onfulfilled(self.value)
    }
     if(self.status ==="rejected"){ // 如果状态式失败的话 
        onrejected()
     }
  }
  module.exports  = Promise