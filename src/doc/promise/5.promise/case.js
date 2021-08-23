const Promise = require("./promise")


 Promise.reject(123).catch(err  => {
   console.log(1111, err)
 })
  let p  = new Promise((resolve, reject) => {
    resolve(new Promise((resolve, reject) => {
       setTimeout(function () {
          resolve(1000)
       })
    }))
  })
   p.then(r=> {
      console.log(r)
   })