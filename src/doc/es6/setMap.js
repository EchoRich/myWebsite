// const { symbolName } = require("typescript")

// let s  = new Set([1,2,3,4,5,4,3,2,1])
// console.log(typeof s, s  )


// // 1.转化成数组的方法
// let arr  =  [...s]
// // promise  symbolName.iterator
//  console.log(arr)
//  // array.from
//  s.add(8)
//   console.log(s)
//   s.delete(2)
//   console.log(s)
//   console.log(222, s.entries(), s.keys())
 

// 集合 丙级 交集   差集  
// let s1  = new Set([1,2,3])
//  let s2  = new Set([3,4,5])


//  function union() {
//    return [...new Set([...s1, ...s2]) ]

//  }
//   console.log((union()))

//   function intersection () {
//      return   [...s1].filter(item => {
//       return s2.has(item)
//      })
//   }
 
//     console.log(222, intersection())

//   function diff() {
//     return  [...s1].filter(item => {
//        return !s2.has(item)
//     })
//   }
//    console.log(333333, diff())
//  let m  = new Map()
//  m.set("name", "1111")
//  m.set("name", "22222")
//   console.log(1111, m)
//    let obj  ={name: 1} 
//    m.set(obj, "33333")
//    obj=null //obj清空但是空间还是在的 
//    console.log(1111, m)
//    console.log()
//  let m  = new WeakMap() //  weakMap的key必须是对象 
//  let obj  ={name :"test"}
//  m.set(obj,"123")
//   console.log(m)
//obj用完之后可以清空


// map.has() 意思是是不是存在的意思
// map.get(obj) //意思就是获取key值