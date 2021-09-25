//现在需要穿行的读取三个文件的内容


//  适配器还可以对安徽念书进行处理 
const fs  =require("fs") 
function promisify (fn) {
   return function () {
     return new Promise((resolve, reject) => {
       fn(...Array.from(arguments),function (err,  res){
          if(err){
            reject(err)
          }else{
            resolve(res)
          }
       })

     })
   }
 }
let readFile  =   promisify(fs.readFile)
console.log("readFile", readFile)
readFile("src/designPattern/设计模式/3.适配器模式/1.txt")

async function  read () {
  let one  =  await readFile("src/designPattern/设计模式/3.适配器模式/1.txt","utf8")
   let two  = await readFile("src/designPattern/设计模式/3.适配器模式/2.txt", "utf8")
   let three  = await  readFile("src/designPattern/设计模式/3.适配器模式/3.txt", "utf8")

console.log(one, two,three)
}
read()
//  function test(...args){
//     console.log(11111, args)// 这个args是一个数组
//      console.log(arguments)// 这个是一个伪类
//  }
// test(1,2,3)