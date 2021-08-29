class Plant{
   constructor(name){
     this.name = name
   }
   grow(){
      console.log("grow")
   }
}
class Apple extends Plant{
  constrcutor(name){
     super(name)
      this.state ="甜"
  }
}
class Orange extends Plant{
  constrcutor(name){
     super(name)
      this.state ="酸"
  }
}
class Factory{
  static create(name){
    switch(name){
      case "apple": 
      return new Apple("苹果")
      case "orange": 
       return new Orange("橘子")
    }
  }
}

/**
 * 如果我们是要创建橘子和苹果的时候我们一般就是直接new一个对象
 * 但是我们现在有了工厂 
 *  直接new的话有什么缺点呢 
 * 耦合太大
 * 以来具体的实现需要知道具体的实现如果我要获取一个apple 就要new一个Apple 
 * 但是简单的额工厂模式不会简单的工厂模式只要你传入具体的内容 
 * 哪怕你不知道工厂内部具体是怎么实现的并且工厂内部不管做了怎么样的改变比如apple 移除了 
 * 你调用沟农场的模式方式仍是通过Create来的 
*/
let a  = Factory.create("apple")