let h1  =  <h1 className="title">hello</h1>
let h1  = React.createElement("h1",  {className: "title"}, "hello")
class Vnode{
   constructor(tagName, attrs, children) {
     this.tagName  = tagName;
    this.attrs = attrs;
    this.children  = children

   }
}
 function createElement(tagName, attrs, chidlren){
    return new Vnode(tagName, attrs, children)
 } // 这也是一个工厂模式 ， 就是 内部的vnode变化  并不会赢实例的产生 