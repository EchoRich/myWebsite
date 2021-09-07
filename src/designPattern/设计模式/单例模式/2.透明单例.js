/**
 * 之前普通单例的创建方式存在以下的问题
 * 1.我们创建单例的时候需要主动调用getInstance 这个方法
 * 2.并不能真正组织使用者直接通过new Window进行创建实例
*/
let Window  = (function () {
  let window ; 
   let Window  = function(name) {
     this.name="test"
     if(window){
        return window
     }else{
        this.name = name
        return  window  = this
     }

   }
   return Window

})()
/**
 * 通过new 调用函数的时候 
 * 1.将创建一个对象 
 * 2.将this指向这个对象
*/
let w1  = new Window("test")
let w2  = new Window("name") // 有了test的时候就不会继续创建这个name的实例而是直接自己返回了
console.log(w2)
 console.log(w1==w2)