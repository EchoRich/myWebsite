/**
 * AOP 就是在函数执行之前或之后添加一些额外的逻辑而不需要更改函数的功能
*/
Function.prototype.before  = function (beforeFn) {
  let _this = this // 指的是当前执行的函数 
  return function () {
    beforeFn()
    _this.apply(this,arguments)
  }
  }
  Function.prototype.after  = function (afterFn){
    let _this = this
    return function () {
      _this.apply(this,arguments)
      afterFn()
    }
  }
  
  function buy(money, goods) {
     console.log(`花${money}买${goods}`)

  }
  getMoney  =   buy.before(function() {
    console.log("申请1元")
  })
  returnMoney = buy.after(function () {
    console.log("归还两毛")
  })
returnMoney(0.8, "salt")