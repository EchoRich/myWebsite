// 假设以前的项目使用了jquery的请求方式现在要求统一换成另一种的请i去 
// 以前的方法
let $  = require("jqery")
$.ajax({
  url, 
  type: "POST",
  datType:  "json"
})
// 如果换成了fetch的写法  ， 这个时候可以加上一个适配器的模式 
window.$ ={
  ajax: (...args) => {
    return fetch(...args)
    

  }
}
// 把老的方法应用到新的上面去 就可以了