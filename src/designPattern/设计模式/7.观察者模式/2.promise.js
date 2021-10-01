
class Promise{
   constructor(fn){
     this.callbacks  = []
      let  resolve = () => {
         this.callbacks.forEach(callback =>callback())
      }
      fn(resolve)

   }
   then(callback) {
     this.callbacks.push(callback)
   }
}
let promise  = new Promose(function (resolve, reject){
   setTimeout(() => {
     
    resolve(100) // 出发更新函数
   }, 1000);
})
 promise.then(res => {
    console.log(1111, res) // 观察者把自己注入到被观察者 
 })