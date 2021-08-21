/*
 * @Author: your name
 * @Date: 2021-08-21 21:53:46
 * @LastEditTime: 2021-08-21 22:15:52
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
   //定义两个队列， 存放相应的回调 
   self.onResolveCallback =  [] //存放成功的回调
   self.onRejectCallback  =  [] //存放失败的回调
  function resolve(value) {
     if(self.status==="pending"){
       self.value  = value
       self.status  =   "fulfilled"
       self.onResolveCallback.forEach(fn=>fn())
     }

  }
   function reject(reason){
      if(self.status ==="pending"){
        self.reason  = reason; 
        self.status ="rejected"
        self.onRejectCallback.forEach(fn => fn())
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
      if(self.status=="pending"){ //如果是一步的时候需要吧成功和失败的回调分别存放到数组种
        // 如果稍后调用了resolve,让函数一次执行执行的时候欧会将成功或者失败的只进行一次的传递 
        this.onResolveCallback.push(function () {
          onfulfilled(self.value)
        })
         this.onRejectCallback.push(function () {
           onrejected(self.reason)
         })

      }
  }
  module.exports  = Promise