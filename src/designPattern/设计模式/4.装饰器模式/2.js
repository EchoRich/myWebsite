/**
 * 装饰器模式上一个例子看起来有点类似于继承 ， 但是装饰器模式其实是由于继承的 
 * 比如说我们和咖啡的时候 
 * 里面组合很多 ， 比如加奶加糖 还有加奶昔
 * 如果采用继承的话， 就只要要写七个雷 ， 
 *  但是如果采用装饰器模式的话那我们只要写四个类 就可以了 
 * 
 * 
 * 装饰器模式是将一个对象嵌入到另一个对象中实际上相当于这个对象被另一个对象包装起来形成一条包装连  请求随着这条链条一次传递到所有的对象每个对象都有处理这个请求的机会
*/

class Coffee{
  make() {
    return "水+咖啡"

  }
  cost() {
     return 10
  }
}
 class MilkCoffee{
   constructor(parent) {
     this.parent = parent
   }
   make() {
      return  `${this.parent.make()} + 牛奶`
   }
   cost() {
      return `${this.parent.cost()} + 3`
   }
 }
  class SugarCoffee {
    constructor(parent){
       this.parent = parent;

    }
    make() {
       return  `${this.parent.make()}+ 糖`
    }
    cost() {
       return  `${this.parent.cost()} +2`
    }
  }
  let coffee = new Coffee()
  
  // 如果这个时候要一杯加奶的coffee
  let milkCoffe  = new MilkCoffee(coffee)
  console.log(milkCoffe.make())

  // 如果是一个加糖加奶的 
  let sugarMilkCoffe  = new SugarCoffee(milkCoffe)
  console.log(sugarMilkCoffe.make())
 