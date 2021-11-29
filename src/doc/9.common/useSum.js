// let r  =  require("./sum")
//  console.log(r(1,2))

// 核心模块
// path模块专门用来处理文件路径
// extname 取后缀名  basename 取文件名 需要扩展名 join 拼接 resolve 接卸绝对路径  path.dirname(__dirname) 取父级 文件名
let path = require("path")
//  console.log(path.basename("1.js", ".js")) //1
//  console.log(path.extname("1.min.js")) //.js
//   console.log(path.join("a", "b"))//a/b
//    console.log(__dirname) // 目录名 //d:\study\2021\mywebsite\src\doc\9.common
//    console.log(__filename) // 文件名 //d:\study\2021\mywebsite\src\doc\9.common\useSum.js
//     console.log(path.resolve(__dirname,"sum.js")) //d:\study\2021\mywebsite\src\doc\9.common\sum.js
//     console.log(path.resolve("sum.js")) // 可以吧一个文件路径 //d:\study\2021\mywebsite\sum.js
//     console.log(path.resolve("a","sum.js"))//转化成绝对路径 //d:\study\2021\mywebsite\a\sum.js 
//     console.log(path.resolve(__dirname,"sum.js", "../../")) //d:\study\2021\mywebsite\src\doc

console.log(process.cwd())
 console.log(path.dirname(__dirname)) // 取父级的目录 

let fs  = require("fs")

let r  =  fs.readFileSync(path.resolve(__dirname, "sum.js"), "utf8")
 console.log(r)


  // 如何让一个字符串执行？ eval   new Function  
// eval的执行环境是不干净的会查找当前执行的上下文环境
// 前端模块化 使用eval  但是node 模块化不适用这种方式
  // let name ="hello"
  // eval(`console.log(name)`)

  // new Function  请实现自己的模板殷勤 还可以
// 不能实现node模块
  // let a  ="var a  = 1; return x+y+z "
  // // 最后一个参数是字符串前面的参数是形参
  // let fn  =  new Function ("x","y","z",a)
  //  console.log(fn(1,2,3))
  let vm  = require("vm") // 沙箱  测试环境和外界完全隔离
  // let name="111" // 这个时候是获取不到 name的 
  vm.runInThisContext('console.log("name")')
  