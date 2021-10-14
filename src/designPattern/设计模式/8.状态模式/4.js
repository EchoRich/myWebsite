class Promise  {
  constructor(fn){
    this.state  = "initial"
     this.successes = []
     this.fails  =  []
     let resolve  =  (data) => {
        this.state  ="fullfilled"
         this.successes .forEach(suc =>suc(data))
     }
     let reject  =  (error) => {
        this.state  =   "failed"
         this.fails.forEach(fail =>fail(error))

     }
      fn(resolve, reject)


  }
  then (success, fail){
     this.successes.push(success)
      this.fails.push(fail)

  }
}
 let  p  = new Promise(function (resolve, reject){
   setTimeout(() => {
     resolve(1)
     
   }, 1);
 })
 p.then(data => {
   console.log("成功")
 }, error  => {
    console.log("失败")
 })