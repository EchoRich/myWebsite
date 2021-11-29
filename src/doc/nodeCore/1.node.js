// node 就是js的执行环境
// 执行node的方式  右键 run node 文件名
// console.log("hello")
// 浏览器中的this 是window 
//  node为了实现模块化在执行的时增加了匿名函数所以this在这个函数中被更改了 
// console.log(this)// module.exports 
//在浏览器中可以访问window 浏览器中不能访问global window 代理了global
// 在服务端可以直接访问global属性
// console.log(Object.keys(global))
// process  进程  当前执行的环境 
// buffer 可以读写文件内存中buffer
// setImmediate  宏任务
// setTImeout setInterval

const { readFile } = require("mz/fs")

// 默认v8引擎的方法给隐藏了 
// console.dir(global, {showHidden: true})
// console.log(global.process)
//argv 运行时传递的参数   可以再node运行时传入特定的一些变量
// env  环境变量
// cwd:  当前工作目录
// nextTick()
// stdin stderr stdout


// let obj  = process.argv.slice(2)
// .reduce((memo,b,index,arr)=> {
//   if(b.includes("--")){
//     memo[b.slice(2)]=arr[index]
//   }
//   return memo
// }, {})
// //  将当前的数组转化成对象



// env  环境变量 在当前的运行的命令行工具中 可以设置一个变量 window set NODE_ENV=development   MAC: export NODE_ENV=development
// console.log(process.env.NODE_ENV)
//  if(process.env.NODE_ENV=="development"){
//    console.log("开发环境")
//  }else{
//    console.log("product环境")
//  }
// cwd  我们node运行的地点
// console.log(process.cwd())
// http-server 是在本地启动服务的 通过变量可以知道在哪里运行的node服务


// nextTick 微任务 ， 只能在node中使用
// 宏任务  setImmediate  setTimeout readFile
// 微任务：   Promise.then  nextTick()
// node的事件环 ， 每一个方法都都有一个队列 

