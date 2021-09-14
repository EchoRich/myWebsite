const { mkdirSync } = require("fs-extra")

// let school  ={name: "test"}
//  let my  ={age: {count: 10}}
  // let all  =   {...school, ...my} //这边方的就是一个地址 
  //  my.age.count=2
  //  console.log(1111111, all) //直接改变的话就是浅拷贝
  // let newMy ={ 
  //   ...my, age:{...my.age}
  // }
  // let all  = {...school, ...newMy}
  // my.age.count=2
  //  console.log(all)
  // 我们可以先把对象转化成字符互传再把字符互传转化成对象
  // let school ={name: "yesy"}
  // let my  ={age: {count: 18}, name: "lyt"}
  // let all  = JSON.parse(JSON.stringify({...school, ...my}))
  // my.age.count =  10
  //  console.log(all)
  //  但是这样写会有问题 ， 比如说对象的值 是function 或者是undefined
  // let school ={name: "yes",fn: function (){},  test: undefined}
  // let my  ={age: {count: 18}, name: "lyt"}
  // let all  = JSON.parse(JSON.stringify({...school, ...my}))
  // my.age.count =  10
  //  console.log(all) 
  //这些都被过滤掉了 { name: 'lyt', age: { count: 18 } }

  // 自己是想深拷贝的方法 （地柜要一层一层的拷贝 ）
//   let obj  ={name : "dfasdf", ageL: 19}
// // let newObj  =   Object.assign(obj)
// let newObj  = {}
//   Object.assign(newObj,  obj) // 这两种写法是一样的 
//  console.log(newObj)

// 浅拷贝


// 掌握类型判读 typeof  instanceof   Object.prorotype.toString.call()
 
// //用户可能会传undefined


//  class Test{
//    constructor(){
//      this.name  ="1111"
//    }
//  }
//   class Test1 extends Test{
//      constructor(props){
//        super(props)
//        this.test  = 11111
//      }
//   }
//    let a  = new Test1()
//   console.log(333333,  a instanceof Test) //true
  //运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上 ,也就是a 是不是原型链上的一个东西 
  //  console.log([1,2,3] instanceof Object) // true
  // instanceof 指出对象是否是特定类的一个实例。
  // 结论:instanceof 检测一个对象A是不是另一个对象B的实例的原理是：查看对象B的prototype指向的对象是否在对象A的[[prototype]]链上。如果在，则返回true,如果不在则返回false。不过有一个特殊的情况，当对象B的prototype为null将会报错(类似于空指针异常)。
  //  console.log([] instanceof Array)
  

  // 2.Array.isArray
  // 可以直接用new  obj.constructor
//  console.log(1111, new ({}.constructor) )
// 3.Object.prototype.toString.call(obj) [object object] [object array]

// console.log(1111, Object.prototype.toString.call(a))
// console.log(Object.prototype.toString.call([]))
// 4. new Obj.constructor()无论是数组还是对象都会直接拷贝出来一个 
// 自己实现一个深拷贝 
function deeepClone(obj,  hash=new WeakMap()) {
  if(obj ==null){
    // 这句话包含了两个意思
    // 一个是obj==undefined  另一个是obj ===null因为在浏览器上面是 undefined==null
    return obj
  }
  if(obj instanceof Date){
     return new Date(obj)
  }
   if(obj instanceof RegExp){
      return new RegExp(obj)
   }
   //注意typeof function返回的是function
   if(typeof obj!="object"){
      return obj 
   }
    if(hash.has(obj)) return hash.get(obj)
   let cloneObj  = new obj.constructor //这种东西返回的可能是一个{} 或者是一个 [] 
  
   hash.set(obj, cloneObj) // 如果是对象直接把他放到weakMap中区  ， 如果拷贝这个对象的 key在了， 直接返回这个对象
   for(let key in obj){
     cloneObj[key]=deeepClone(obj[key],hash)  
   }
   return cloneObj
}
let obj  = {name: 1, age: 2}

let n  = deeepClone(obj)
obj.name=3
console.log(111111, obj,n )

// 这个东西存在的问题是 什么可能存在循环引用的问题 
let obj ={a:1111}
a.text  = obj 
