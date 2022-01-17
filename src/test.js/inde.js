/*
 * @Author: your name
 * @Date: 2022-01-15 10:38:37
 * @LastEditTime: 2022-01-15 10:49:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/test.js/inde.js
 */
// setTimeout(function () {
//      console.log("timeout")
// })
//  console.log("tongbu")
//  while(true){

//  }
//   console.log("异常之后")
//   setTimeout(() => {
//       console.log("异常之后的timeout")
      
//   }, 2);

//   死循环不仅会阻止后续代码的执行同时也会阻止之前加载的没有执行的异步任务
setTimeout(function () {
    console.log("timeout")
})
console.log("tongbu")
throw  new Error("error")
 console.log("异常之后")
 setTimeout(() => {
     console.log("异常之后的timeout")
     
 }, 2);
 // throw new error 之后会阻止后续代码的执行但是不会阻止之前加载的异步任务的执行
 setTimeout(function () {
    console.log("timeout")
})
console.log("tongbu")
try{
    throw new Error()

}catch(err){

}
 console.log("异常之后")
 setTimeout(() => {
     console.log("异常之后的timeout")
     
 }, 2);
 // 加上了try catch之后不会阻止后需代码的执行 
 setTimeout(function () {
    console.log("timeout")
})
console.log("tongbu")
try{
   while(true){}

}catch(err){

}
 console.log("异常之后")
 setTimeout(() => {
     console.log("异常之后的timeout")
     
 }, 2);
 // 即使用了try catch 如果是死循环的话还是会阻止后续代码的执行并且阻止已经加载的异步函数 
 
