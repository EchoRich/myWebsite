/*
 * @Author: your name
 * @Date: 2021-08-25 21:45:42
 * @LastEditTime: 2021-08-25 21:56:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\generator\case.js
 */
// 迭代器有一个next方法每次调用后都会返回valuedone等

// 类数组有长度有索引， 可以使他被迭代 
// 给一个对象添加迭代器之后可以使他被迭代
//  只有对象有迭代器的时候 [...obj]才会生效否则就会报错但是array. from 不需要
// let  obj  ={
//    0: 1,
//    1: 2, 
//    2: 3,
//    length: 3, 
//    [Symbol.iterator]: function () {
//      let self  = this  ; 
//       let index  = 0
//       return {
//         next() {
//            return {
//              value:  self[index], 
//              done: index++ ===self.length
//            }
//         }
//       }
//    }

// }
// for(let i =0; i< obj.length; i++){
//    console.log(i)
// }
// 有了迭代器之后就是可以循环了

let obj  = {
  0: 1, 
  1: 2, 
  2: 3, 

  length: 3, 
  [Symbol.iterator]:function *() {
    let index  =  0  
    while(index!=this.length){
      yield this[index++]
      
    }
  }
}
 function arg() {
    // let arr  = Array.from(obj)
     let arr  =  [...obj]
    console.log(arr)
 }
 arg()