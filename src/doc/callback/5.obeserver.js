/*
 * @Author: your name
 * @Date: 2021-08-21 17:57:13
 * @LastEditTime: 2021-08-21 21:44:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\doc\callback\5.obeserver.js
 */
class Subject{
   constructor() {
     this.state="开心"
     this.arr  = []
   }
   attach(observer) {
      this.arr.push(observer)
   }
   setState (newState){
     this.state = newState 
     this.arr.forEach(observer => observer.update(newState))
   }
} 
class Observer{
  constructor(who) {
    this.who = who
  }
  update(newState) {
     console.log(this.who+ newState + "了 ")
  }

}
 let subject  = new Subject()
 let my  = new Observer("my")
  let wife  = new Observer("wife")
  subject.attach(my)
  subject.attach(wife)
  subject.setState("大哭")