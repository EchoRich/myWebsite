// let obj  ={

// }
//  let other=""
// // Object.defineProperty 定义属性可以增加拦截器
// Object.defineProperty(obj, "name", {
//   enumerable: true,// 默认是不可枚举的 
//   //  value: "hello'",// 这个也不能和set和get共存
//    configurable: true,// 默认是不可删除的 ,
//   //  writable: true,  //是否可以重写， 默认是不可以重写的, 这个和set 和get是冲突的 
//    set(val) {
//      other  = val

//    },
//    get() {
//       console.log(111)
//      return other

//    } 


// })
// // delete obj.name
// obj.name="ddd"
//  console.log(obj.name)


  // 这样定义的是不可枚举的 ， 不可以枚举的意思是看不见 

//   let obj  ={
//      other: "",
//      get name() {
//       return this.other
//      },
//      set name(val){
// this.other = val
//      }
//   }
//   obj.name=111
//    console.log(obj.name)
//    // 对象的setter 和getter
// Vue的数据劫持 把所有的数据都改成set 和get

let data  ={
  name: "111", 
  age: 22222,
  address: {
    location: "回笼"
  }
}
function update(){
  console.log("更新视图")
}
function observer(obj) { // defineProperty的时候只能用在对象上数组也不行
  
  if(typeof obj =="object"){
   
     for(let key  in obj){
       defineReactive(obj, key,obj[key])
       
     }
  }else{
    return obj
  }


}
 function defineReactive(obj,key, value) {
   observer(value)
  Object.defineProperty(obj,key,{
    get() {
       return  value
    },
    set(val){
      observer(val)
      update()
       value= val
    }

  })

 }
 observer(data)
 data.name =12313
//  data.address.location=111212 // 如果有哦多层直接改掉的话那么要怎么处理


//  data.address ={
//    location: "beijing" // 如果设置的对象是也是一个对象的话那我们也要检测 
//  }
//  data.address.location="23424332" 
//  data.a= 1 // 这个时候不会更细 因为根本就不存在啊 
 
 data.address =[100] // 如果是数组的话现在也会出发更新了 
//  data.address.push(1)//这个就不会出发
//  data.address[0]= 2 // 这个也会发生触发
 let methods = ["push", "pop", "slice", "sort", "reverse", "unshit" ]
 methods.forEach(method => {
   let oldMethod = Array.prototype[method]
   //面向切片开发
   Array.prototype[method]= function () {
      update()
      oldMethod.call(this,...arguments)
   }
 })  // 这个在node中会发生报错的， 直接复制到浏览器里面就可以了 