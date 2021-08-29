let Factory  = require("./factory")
 let Plant  = require("./plant")
  class Orange extends Plant{
     constructor(name,flavour){
        super(name)
         this.flavour  = flavour
     }
  }
class OrangeFactory extends Factory{
   static create() {
     return new Orange("橘子", "酸")
   }
}
module.exports  = OrangeFactory