/**
 * 单一职责虽然也会修改原有的代码但是是练市调用只需要这么加上去即可
 * 其他的方法都是单一职责需要或者不需要移除 只要添加或者是移除就可了 
*/
 function checkStatus(response){
   if(response.code>=200  &&response.code< 300){
     return response
   }else{
      throw new Error("相应结果不正确")
   }

 }
function parseJson(response){
  return response.json()

}
function request(url,  options){
  /**
   * 1.判断状态码是不是2xx,如果不是就返回错误信息 
   * 把响应体转化成json对象
  */
  fetch(url, options).then(checkStatus).then(parseJson)
}