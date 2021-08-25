/*
 * @Author: your name
 * @Date: 2021-08-25 21:56:30
 * @LastEditTime: 2021-08-25 22:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\generator\2.case.js
 */
// function * read () {
//   let a  = yield 1 
//     console.log(a)
//   let b  = yield  2  
//    console.log(b)
//   let c  = yield 3
// }
// // 生成器返回的失败迭代器 ， 迭代器有next方法可以返回value 还有done
// let  it  = read()
//  console.log(it.next())
//   console.log(it.next(200))
 
//     console.log(it.next(300))
 let fs  = require("mz/fs")
    function *read() {
      let r  =  yield fs.readFile("src/doc/callback/name1.txt", "utf8")
      let age  =  yield fs.readFile(`src/doc/callback/${r}`, "utf8")
      let e  = yield [age]
       return e 
    }
    // {value: Promise,done: false}
function co(it){
  return new Promise((resolve, reject) => {
    function next(val) {
       let {value, done} = it.next(val)
        if(done){
           return resolve(value) // 最后返回肯定是正常的value之  ， 因为只有一个yield的情况下第一次返回的done是false ， 
        }
        // 如果不是promise把他包装秤promise
        Promise.resolve(value).then(data => {
          next(data)
        },reject)

    }
    next()
  })
}
try{
co(read()).then(data => {
   console.log(data)
},err => {
   console.log(1111, err)
})
}catch(err){
   console.log(2222222) // 这个只会走111不走222所以不支持回调的
}
