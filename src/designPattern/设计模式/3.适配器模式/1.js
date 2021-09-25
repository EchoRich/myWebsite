class Power  {
  charge() {
     return "220v"
  }
}

  class Adapter{
    constructor(){
       this.power  = new Power()
    }
    charge() {
      let v  = this.power.charge()
      return `${v}=>12v`
    }
  }
  class Client {
    constructor(){
      this.adapter  = new Adapter()
    }
    use() {
      console.log(this.adapter.charge())
    }
  }
  let c  = new Client()
  c.use()