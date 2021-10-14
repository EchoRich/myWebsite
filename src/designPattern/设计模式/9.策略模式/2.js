

class Customer  {
   constructor (type) {
      this.type = type
   }
   pay(amount) {
     return this.type.pay(amount)
   }
}
 class Kind{}
 class Normal extends Kind{
    pay(amount) {
       return amount 

    }

 }
  class Vip extends  Kind {
     pay(amount) {
        return amount*.8
     }
    
  }
   class Member  {
      pay (count){
         return count*0.9
      }
   }
 let c1  = new Customer(new Normal())
 console.log(c1.pay(10))