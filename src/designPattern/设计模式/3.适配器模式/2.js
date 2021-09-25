// 参数的适配 
function ajax (options){
   let defaultOPtions  ={
     method: "GET",
     dataType: "json"
   }
   for(let attr  in  options){
     defaultOPtions[attr] =   options[attr] || defaultOPtions[attr]
   }
}
 function transform(str) {
    return JSON.parse(str)
 }
 // 返回值得适配
ajax({
  url: "xxx",
  method: "POST",
  success(str) {
    //服务器返回的是一个json字符串 ， 客户端要是配成json对象
    transform(str)

  }
})

