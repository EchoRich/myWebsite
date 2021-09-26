// 给定一个数n  返回从1 到n阶乘的和
//  function multi(n) {
//     if(n<=1){
//        return 1
//     }
//     return n*multi(n-1)
//  }

// function sum(n){
//    let result  =0
//    for(let i = 1; i<= n; i++){
//      result += multi(i)
   

//    }
    
//     return result
// }
// console.time("cost")
//  console.log(sum(10000))
//   console.timeEnd("cost") // 1.46s
// 如果我们现在采用缓存的话 ， 就是我已经知道了某些阶乘， 这样就不用再去运算一遍了


let sum  = (function () {
  let cache  ={}
   function multi(n) {
     if(n<=1){
        return 1
     }else{
       return n*(cache[n-1] ||  multi(n-1))
     }

   }


  return function (n) {
     let result  =  0
    for(let i = 1; i< n; i++){
       let ret  = multi(i)
       cache[i] = ret
      result+=ret
      
    }
     return result
  }
})()
console.time("cost")
console.log(sum(10000))
console.timeEnd("cost") // 12.608ms


// 可以看出来时间节省超级多