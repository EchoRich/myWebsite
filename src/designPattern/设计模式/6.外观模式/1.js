class Sum  {
   sum (a, b){
      return a+b
   }
}
 class Minus  {
    minus (a, b) {
       return a -b
    }
 }
class Multiply  {
  multiply(a,b){
     return a  *b
  }
}
 class  Calculator  {
   constructor  () {

    this.sumObj  =   new Sum () ;
     this.minusObj  = new Minus()
     this.multiplyObj = new Multiply()
   }
   sum(...args){
      return  this.sumObj.sum(...args)
   }
   minus(...arg){
      return  this.minusObj.minus(...args)
   }
   multiply (...args){
      return this.multiplyObj.multiply(...args)
   }
 }