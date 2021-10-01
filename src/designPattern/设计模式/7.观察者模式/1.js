/**
 * 观察者把自己注册到被观察者身上 ， 然后被观察者发生变化的时候调用观察者的更新 方法 
*/

class Star  {
   constructor(name) {
     this.name  = name; 
     this.state="";
      this.observers = []
   }
   getState() {
      return  this.state;
   }
   setState(state) {
     this.state  = state  ;
       this.notifyAllObservers()

   }
   attach(observer){
      this.observers.push(observer)
   }
   notifyAllObservers() {
     this.observers.forEach(observer => {
       observer.update(this.state) // 通知观察者更新 
     })
   }
}
 class Observer  {
   constructor(name){
      this.name = name;
      this.star  = star;
      this.star.attach(this); // 观察者把自己注册到被观察者里面
   }
   update (state){
     console.log("update", `最新的状态是${state}`)
   }
 }

 let  star  = new Star("赵丽颖")
 let observer  = new Observer("xiaohuang", star)
 star.setState("111111")