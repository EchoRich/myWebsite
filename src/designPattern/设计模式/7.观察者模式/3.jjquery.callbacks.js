function Callbacks () {
  let observers  =  [] ;
  function add(observer){
    observers.push(observer)
  }
  function remove(observer) {
     const index  = observers.indexOf(observer)
      if(index!=-1) 
        observers.splice(index, 1)

  }
  function fire  () {
    observers.forEach(item => item())
  }
   return {
     add, remove, fire
   }
}
 let callbacks = Callbacks()
  let a  = () => {}
   let a1  = () => {}
   let a2  = () => {
      console.log("excute")
   }
   callbacks.add(a1) // 将观察者进行注入 
   callbacks.add(a2)
    callbacks.remove(a1)
    callbacks.fire(); // 出发更新