let path  = require("path")
 let fs  = require("fs")
  let vm  = require("vm")
function Module(id) {
  this.id  = id 
   this.exports  ={}

}
Module.wrapper  = [
  `(function (exports, module, require, __dirname, __filename){`, "})"
]
Module._extensions  =  {
  ".js"(module) {
    let str  = fs.readFileSync(module.id, "utf8")
    let scriptStr  = Module.wrapper[0] + str + Module.wrapper[1]
    let fn  = vm.runInThisContext(scriptStr)
    // 把函数zhixing将exports 传递给sum.js 
    fn.call(module.exports,module.exports,module, req)
  },
  ".json"(module) {
    console.log(111111, module)
    let str  = fs.readFileSync(module.id, "utf8")
    str  = JSON.parse(str)
    module.exports  = str
  },

}
Module.prototype.load  = function () {
  // this: id  exports

 let extname =   path.extname(this.id)
 Module._extensions[extname](this)


}
function req(id) {
 
  let absPath  = path.resolve(__dirname, id)//解析出一个绝对路径
   let module =  new Module(absPath)
  module.load()
  return module.exports;



}
let r  = req("./sum.js")
 console.log(r)

