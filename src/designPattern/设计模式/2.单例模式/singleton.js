// class Window {
//    constructor(name){
//       this.name  = name  
//    }
//     static getInstance() {
//        if(!this.instance){
//          this.instance  = new Window()
//        }
//        return this.instance
//     }
// }
//  let w1  =  Window.getInstance()
//  let w2  = Window.getInstance()
//  console.log(w1 ==w2)

function Window (name){
   this.name = name
}
Window.prototype.getName  = function () {
  return this.name
}
// 类上的方法只能通过雷来访问不能通过实例来访问
Window.getInstance  =( function () {
  let instance ;
  return function(name) {
     if(!instance){
        instance = new Window(name)
     }
     return instance

  }
})() // 这里为什么要写成一个自执行的函数我的理解是 因为如果卸载一个函数里面的时候每次getInstance的时候就会是一个新的 instance 应该也可以写成全局变量， 但是还是现在这样的话因为他的作用域空间是有限的 
 let w1  =  Window.getInstance()
 let w2  = Window.getInstance()
 console.log(w1 ==w2)
 

 /*
  *所谓的js单例模式我觉得就是通过get方法获取到的每次都是同一个实例
 */