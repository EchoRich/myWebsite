// setImmediate(() => {
//   console.log("immediate")

const { fs } = require("mz");

// })
setTimeout(() => {
  console.log("timeout")
  process.nextTick(() => {
    console.log("nextTick")
  
  })
  
}, 4);

// 主栈执行的时候默认已经超过4ms了 定时器已经超过了执行事件 
// 启动事件比较快小于4ms

process.nextTick(() => {
  console.log("nextTick2")
  setTimeout(() => {
    console.log("timeout2")
    
  });

})
// 主栈执行之后会执行微任务 和浏览器一样 不一样的是每阶段都有一个自己的队列



require("fs")
setTimeout(() => {
  console.log("gefffeefe")
  
}, 1000);
fs.readFile(("./note.txt", "utf8", (err, data) => {
  c
}) )