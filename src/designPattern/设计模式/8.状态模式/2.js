class Battery  {
  constructor  (state){
    this.amount="high";
    this.state  = new SuccessState(this)
  

  }
  show() {
    this.state.show()
    if(this.amount ="high"){
       this.amount  = "middle"
       this.setState(new WarningState(this))
    }else if(this.amount="middle"){
       this.amount  ="low"
       this.setState( new DangerState(this))
      
    }
  }
  setState(state) {
    this.state  = state
  }
}
 class SuccessState  {
   constructor(battery){
     this.battery  = battery

   }
   show() {
     console.log(`绿色${this.battery.amount}`)
   }
 }
  class WarningState  {
     constructor  (battery) {
        this.battery = battery

     }
      show() {
         console.log(`黄色${this.battery.amount}`)
      }
  }
  class DangerState  {
     constructor(battery) {
       this.battery  = battery

     }
     show() {
        console.log(`红色${this.battery.amount}`)
     }
  }
  
  let battery  = new Battery  ()
  battery.show()
  battery.show()
   battery.show()