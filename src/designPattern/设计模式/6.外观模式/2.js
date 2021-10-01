class  Cpu  {
  start(){
     console.log("start cpu")
  }
}
 class Memory{
   start() {
      console.log("start memory")
   }
 }
  class Disk {
     start() {
       console.log("start Disk")
     }
  }

class Computer {
   constructor () {
      this.cpu  = new Cpu();
      this.memory  = new Memory()
      this.disk  = new Disk()
   }
    start() {
       this.cpu.start();
        this.memory.start()
        this.disk.start()
    }
}
 new Computer().start()

 /**
  * 为复杂的模块或子系统提供外界访问的模块 
  * 子系统之间是相互独立的 
  * 
 */