class Battery {
  constructor () {
    this.amount  = "high"
  }
   show() {
     if(this.amount =="high"){
       console.log("绿色")
       this.amount ="middle"
     } else if(this.amount =="middle"){
       console.log("黄色")
       this.amount="low"
     }else{
        console.log("红色")
     }
   }
}
 let battery  = new Battery()
 battery.show()
 battery.show()
 battery.show()
/**
 * 存在的问题是show违反了开放封闭原则 ， show的逻辑方法太多泰过复杂 ， 过多的ifelse 让 代码不好维护 
 * 
*/