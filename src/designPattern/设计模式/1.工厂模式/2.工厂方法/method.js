/**
 * 产生工厂方法的原因是:
 * 简单方法违背了 开闭原则比如我上面的simple.js每当要一个实例的时候偶我都会在写case “”： return new Apple之类的 ， 需要改动老的工厂方法
 * 
 * */
/**
 * 当我们使用工厂方法模式的时候偶 ， 当我们需要扩展一个䣂的时候 只需要新增对应的工厂方法即可 
*/
class Plant{
   constructor(name){
      this.name  = name
   }
}
 class Apple extends Plant{
    constructor(name, flavour){
     super(name)
        this.flavour  = flavour;

    }
 }
  class Orange extends Plant{
     constructor(name, flavour){
       super(name)
       this.flavour= flavour

     }
  }
  // 开始创立对应的工厂
   class Factory{
     static  create() {

     }
   }
    class AppleFactory extends Factory{
      static create () {
         return new Apple()
      }
    }
     class OrangeFactory  extends Factory{
       static create() {
          return new Orange()
       }
     }
     /**
      * 工厂方法一般会和配置对象配个
     */
     let settings  = {
       apple:  AppleFactory, 
       orange: OrangeFactory
     }
      let apple  = settings["apple"].create()
      let orange  = settings["orange"].create()

    /**
     * 工厂方法模式还可以将工厂模式抽象成一个文件这样可以组织更加明确并且代码耦合度降低
    */
