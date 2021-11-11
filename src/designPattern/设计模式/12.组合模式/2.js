
function Folder (name) {
  this.name  = name;
   this.children  =[];
   this.parent = null;
  
}
Folder.prototype.add  = function (child) {
  child.parent  =   this
   this.children.push(child)
}
Folder.prototype.show = function () {
   console.log("文件夹" + this.name)
   for(let i  =  0 ,child; child= this.children[i++];){
    child.show()
   }
}
Folder.prototype.remove = function () {
  if(!this.parent){
     return 
  }
   let children  = this.parent.children;
   for(let  i  =0, child; child = children[i++];){
      console.log(child)
      if(child==this){
        children.splice(i-1, 1)
        return
      }
   }
  
    // for(let i  =  0;i<children.length; i++){
    //   if(children[i] == this){
    //     children.splice(i, 1)
         
    //     return 
    //   }

    // }
}
function File  (name) {
  this.name  = name;

}
File.prototype.show = function () {
  console.log("文件" + this.name)
} 
File.prototype.add = function () {
   throw new Error("文件下面不允许添加")
}
File.prototype.remove = function (){
   if(!this.parnet){
      return 
   }
    const children  = this.parent.children;
    
     for(let i  =  0; i< children.length; i++){
        if(children[i] ==this){
           children.splice(i, 1)
            return 
        }
     }
}
let video  = new  Folder("video")
 let vue  = new Folder("vue")
  let react  = new Folder("react")
   let vueJs  = new File("vueJs")
    let reactJs  = new File("ReactJs")
     vue.add(vueJs)
     react.add(reactJs)
      video.add(vue)
      video.add(react)
      // video.show()
      react.remove()
       console.log("shanchu")
      video.show()