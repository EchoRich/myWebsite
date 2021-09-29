

// 数组的方法
// es5 forEach map   reduce   filter some every
// es6 find findIndex
// es7 includes
  // reduce
//1. 加减 ， 第一个参数代表第一项第二个参数代表后的那一项
  //  let arr  = [1,2,3,4,5].reduce((a,b) => {
  //     return a + b
  //  })
  //   console.log(arr)


  //   let r  =  [{price: 100, count: 1},{price: 200, count: 2}, {price: 300,count:3}].reduce((a,b) => {
  //     return a  + b.price*b.count
  //   }, 0)
  //   console.log(r)

  //2 reduce 的常见功能将多个数据变成一个数据

  // let keys  =["name", "age"]
  // let values  =["rich",27]
  // return obj  => {name: "rich", age: 27}
  // const obj  =   keys.reduce((a,b,index) => {
  //    a[b] =   values[index]
  //     return a 
  // }, {})
  //  console.log(1111, obj)

    // 还可以写成简写的形式(1,2,3,4)  这个东西返回的是4 ， 也就是说返回的是最后一项
    // const  obj  = keys.reduce((a,b, index)=> (a[b]=values[index], a), {})
    //   console.log(1111, obj)



// 3. redux compose 方法


function sum(a, b){
   return a  + b
}
function toUpper(str) {
    return str.toUpperCase()
}
function add(str) {
  return `**${str}**`
}

//  我们现在想实现这样一种效果  add(toUpper(sum(a,b))),如果有一百个函数的话那我们要写上一百个吗 


// console.log( add(toUpper(sum("hello","world"))))

// 这是一个逆向的写法， 
// function compose(...fns) {
//    return function (...args) {
//      let lastFn  = fns.pop() 
//    return  fns.reduceRight((a,b) => {
//        return b(a)
//      }, lastFn(...args) ) // reduceRight是最后一项给啊  然后倒数第二项给b的 
    

//    }

// }

// 这个是正向的写法 ， reduce 最后返回的是一个函数 ， 然后是函数最红执行的组合 ， 很牛逼我要细看才能看懂 ， 记得从里往外看 
// function compose(...fns){
//    return fns.reduce((a, b) => {
//       return function (...args) { // 此时返还的函数是通过reduce的方法
//         return a(b(...args))

//       }
//    })
// }
// compose(add,toUpper,sum)("hello", "world")

//  reduced的源码
// Array.prototype.reduce  = function (callback, prev) {
//   // this=[1,2,3,4]
//   for(let i  = 0 ; i<  this.length; i++){
//     if(prev){
//       prev  = callback(prev, this[i],i, this)
//     }else{
//       prev  = callback(this[i],this[i+1],i+1, this)
//       i++ // 这一句是灵魂
//     }
//   }
//   return prev

// }
// let arr  =  [1,2,3]
// let sum = arr.reduce((a,b) => {
//   return a +b
// })
// console.log(11111, sum)