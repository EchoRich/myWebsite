class StateMachine {
  constructor  (options) {
    let  {init, transitions, methods}  = options
    this.state  = init;
    transitions.forEach(transition  => {
      let  {from , to, name} =transition
      this[name] = function () {
        
        if(this.state  == from ){
          
          this.state  = to; 
          let method  = methods[`on${name.slice(0,1).toUpperCase()}${name.slice(1)}`]
          method&&method()

        }
      }
    })

  }
}
const fsm  = new StateMachine({
   init: "solid",  
   transitions :  [
     {
       name: "melt", 
       from : "solid", 
       to: "liquid",

     },
     {
        name:  "freeze", 
        from: "liquid", 
        to: "solid",

     }, {
       name: "vaporize", 
       from : "liquid", 
       to: "gas"
     }, {
        name: "condense", 
        from :"gas",
        to: "liquid"
     }
   ], 
    methods:  {
      onMelt() {
        console.log("i am melt")
      },
      onFreeze() {
         console.log("i am freeze")
      },
      onVaporize() {
         console.log("i am  vaporize")
      },
      onCondense() {
         console.log("i am condense")
      }


    }
 })

 fsm.melt()