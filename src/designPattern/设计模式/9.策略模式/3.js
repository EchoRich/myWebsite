class Customer  {
   constructor () {
      this.kinds = {
        "member":  price => price*0.9, 
        "vip": price =>price*0.8,
        "normal": price => price*1
      }
    
   }
   pay(type, price) {
      return this.kinds[type](price)

   }
}
 let c3  = new Customer()
console.log( c3.pay("vip", 10))