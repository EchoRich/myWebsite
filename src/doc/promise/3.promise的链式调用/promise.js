/*
 * @Author: your name
 * @Date: 2021-08-23 06:10:29
 * @LastEditTime: 2021-08-23 06:45:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\promise\promise的链式调用\promise.js
 */

const { LibManifestPlugin } = require("webpack")

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
// // to refer the same object  会导致无法继续执行 
// let  promise  = new Promise((resolve, reject) => {
//   resolve()
// })
// let promise2  = promise.then(data => {
//    return promise2
// })
//  promise2.then(null, function (err){
//     console.log(err)
//  })

function resolvePromise(promise2,x, resolve, reject){
  // 对x进行判定如果是 一个普通值就直接resolve就可以了 
  // 如果x是一个promise采用x的状态
   if(promise2==x){
      return reject(new TypeError("循环引用"))
   }
    if(x!=null&&(typeof x=="object" || typeof x =="function")){
      try{
        let then  = x.then;//看看当前按的promise有没有then方法， 有可能取then的时候报错
        if(typeof then=="function"){//是一个promise

          then.call(x, y=>{ // 这句和x.then其实是不一样的 ， 因为在前面判断的时候判断x.then是否存在入股哟我再写一遍的话那么可能优惠继续报错， 所以我们采用the.call(x,) // call后面街上一个一个参数 apply后面接的是一个数组
            resolve(y)
          }, r=> {
            reject(r)
          })
        }
      }catch(e){
        reject(e)
      }
    }else{
       resolve(x)
    }
}

  // 因为then方法返回一个新的promise， 所以我们限定一一个新的promise
  Promise.prototype.then= function (onfulfilled, onrejected){
    let self  = this;
     let promise2  = new Promise((resolve, reject) => {
if(self.status=="fulfilled"){ //如果状态式成功的话 
  setTimeout(() => { // 这边之所以要用setTimeout 是因为如果不用的话 ， 因为promise2是个异步的 ，此时promise2还没有执行完成， 所以采用了setTimeout
    try{
        let x  =onfulfilled(self.value)
       resolvePromise(promise2,x ,resolve, reject)
    
    }catch(e) {
      reject(e)

    }
  })
      
      
    }
     if(self.status ==="rejected"){ // 如果状态式失败的话 
       setTimeout(function () {
         try{
          let x  =  onrejected(self.reason)
           resolvePromise(promise2,x, resolve, reject)
         }catch(err){
            reject(err)
         }
       })
        
     }
      if(self.status=="pending"){ //如果是一步的时候需要吧成功和失败的回调分别存放到数组种
        // 如果稍后调用了resolve,让函数一次执行执行的时候欧会将成功或者失败的只进行一次的传递 
        this.onResolveCallback.push(function () {
          setTimeout(function () {
            try{
              let x  =   onfulfilled(self.value)
              resolvePromise(promise2, x, resolve, reject)
            }catch(err){
              

            }
          })
        
        })
         this.onRejectCallback.push(function () {
           setTimeout(function (){
             try{
                let x  =  onrejected(self.reason)
                  resolvePromise(promise2, x, resolve, reject)
             }catch(err){

 reject(err)
             }
           })
          
         })

      }
     })
      return promise2
    
  }
  module.exports  = Promise