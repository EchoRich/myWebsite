function update () {
   console.log("update")
}

let arr  =  [1,2,3]
let proxy  = new Proxy(arr, {
  set(target, key, value) {
    console.log(key)
    // update() 
    // 如果这样写的话, 并且当前的key是length的话， 比如说proxy.push() //这时候会设置两次一次是key = length 还有一次是key =key,所以我们要进行拦截
    if(key=="length") return true;
    update()
   return  Reflect.set(target, key, value) // 注意的是使用new Proxyset的时候一定要加上 returntrue ,然后 Reflect。set会返回true或者false的 
  },
  get(target, key){
    //  return target[key]
    return Reflect.get(target, key)
  }
})
proxy.push(1)
// proxy[1]= 5
// console.log(proxy[0])