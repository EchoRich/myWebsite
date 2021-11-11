const resolve = require("resolve");

function co (gen) {
   let  it  = gen()
   return   new Promise(function (resolve){
    (function next(lastValue) {
      let  {value, done} = it.next(lastValue);
       if(done){
         resolve(value)
       }else{
         value.then(next, err=> {
           reject(err)
         })
         
       }

   })()
   }, function(reject){
    
   } ) 

}