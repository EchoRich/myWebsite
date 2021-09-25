// 适配器是为了适配 ， 而装饰器是为了扩展功能
class Duck{

  constructor (name) {
     this.name
  }
  eat(food) {
     console.log(`eat ${food}`)
  }
}

// 现在唐老鸭不仅可以赤东洗而在在吃完东西之后还会说谢谢， 这个时候我们就可以使用装饰器实现 
class TangDuck {
  constructor() {
     this.duck = new Duck()
  }
  eat(food) {
    this.duck.eat(food)
     console.log("谢谢")
  }
}
let tangDuck  = new TangDuck()
tangDuck.eat("xiaoji")