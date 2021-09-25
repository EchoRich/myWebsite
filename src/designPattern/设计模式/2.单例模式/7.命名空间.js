/**
 * 1.变量名冲突
 * 2.复杂层次对象的可读性要求
 * jquery  并没有把变量声明 到哪window 中而且
*/
let  $ ={}
$.define= function (namespace, fn){
  let namespaces  = namespace.split("."); 
  let fnName  = namespaces.pop();
   let current  = $;
   for(let i  =  0 ; i< namespaces.length;  i++){
     let namespace = namespaces[i]
      if(!current[namespace]){
        current[namespace] = {};
      }
      current  = current[namespace]
     
   }
   current[fnName] = fn
}
$.define("dom.class.addClass", function () {
  console.log(11111, "dom.class.addClass")

})
$.define("string.attr", function() {
  console.log("string.attr")
})
$.dom.class.addClass()
$.string.attr() 

// 这段代码current 会一直赋值 因为是一个对象 ， 浅拷贝 所以彗星成  $.dom.class.addClass()