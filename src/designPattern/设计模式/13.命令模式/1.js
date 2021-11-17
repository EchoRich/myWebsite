class Cooker {
   cook() {
     console.log("做饭")

   }
}
 class Cleaner {
    clean() {
      console.log("清洁")
    }
 }
 class CookCommand {
    constructor(receiver) {
      this.receiver   = receiver

    }
    execute () {
      this.receiver.cook()

    }
 }
  class CleanCommand  {
     constructor  (receiver) {
        this.receiver =  receiver
     }
     execute() {
        this.receiver.clean()
     }

  }
   class Customer  {
      constructor(command) {
        this.command = command

      }
      setCommand(command) {
        this.command  = command

      }
      clean () {
        this.command.execute()
      }
      cook() {
        console.log(this.command)
        this.command.execute()
      }
   }
   let cooker  = new Cooker()
   let cleaner  = new Cleaner()
   let cleanCommand  = new CleanCommand(cleaner)
   let cookCommand  = new CookCommand(cooker)
   let customer  = new Customer(cookCommand)
   customer.cook()
   customer.setCommand(cleanCommand)
   customer.clean()
