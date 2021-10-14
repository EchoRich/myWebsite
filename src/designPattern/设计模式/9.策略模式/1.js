class Customer  {
   constructor (type) {
     this.type  = type
   }
   pay(mount){
      if(type=="会员顾客"){
         return amount*0.9
      }else if(type=="vip"){
         return amount * 0.8
      }else{
         return amount
      }
   }
}
 let c1  = new Customer("会员顾客")
 c1.pay()
  let c2  = new Customer("vip");
  c2.pay()
  let c3  = new Customer("顾客")
  c3.pay()