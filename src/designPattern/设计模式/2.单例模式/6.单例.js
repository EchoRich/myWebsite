function Window (name){
  this.name  = name

}
Window.prototype.getName  = function () {
  return this.name
}
 function Dialog(title, content){
   this.title  = title ;
   this.content  = content
 }
 let CreateSingle = function (Constructor){
    let instance;
    return function () {
      if(!instance){
         instance  = new Constructor(...arguments)
      }
      return instance
    }
 }
  let createWindow = CreateSingle(Window); 
  let w1  = new  createWindow("211")
   let w2  = new createWindow("2222")
   console.log(w1 === w2)

   let createDialog  = CreateSingle(Dialog);
   let d1  =  new createDialog("1111")
   let d2  = new createDialog("2222")
   console.log(d1 ==d2)