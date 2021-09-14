// 箭头函数没有this 用的是父元素中农的this
// 简写方法学习一下
// let a  = function (x)  {
//    return function (y){
//       return x + y 

//    }

   
// }
// let a  = x=> y=>x+y a(1)(2)

// this的问题看前面是谁this就是谁
let a  = 1  
// let obj  ={
//    a: 2,
//    fun: function () {
//       console.log(this.a)
//    }
// }

// let obj  ={
//   a: 2,
//   fun: function () {
//     setTimeout(() => {
//       console.log(this.a)
//     }, 100);
    
//   }
// }
// obj.fun() //2
let obj  ={
  a: 2,
  fun:  ()=> { // 箭头函数没有this网上找  找到window， 
    setTimeout(() => {
      console.log(this.a)
    }, 100);
    
  }
}
obj.fun() // undefined  找上级

// let 中的变量是没有绑定到window的所以会返回undefined