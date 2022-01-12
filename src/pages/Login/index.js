/*
 * @Author: your name
 * @Date: 2021-07-01 16:02:42
 * @LastEditTime: 2021-08-18 12:20:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\pages\Login\index.js
 */
import React from  'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import {LoginWrapper} from  './style'
//  import avatar  from  '../../images/Login/avatar.jpg'
//   import useDrag  from  '../../hooks/useDrag'
//  export default  function Login  () {
//     const  [domRef,  style] = useDrag()
//      console.log(1111, style)
//     const handleGetNew = () =>{

//     }
//     const handleTest = () => {
//     //  console.log( window.test.test)
//      new Promise((resove,reject) => {
//        reject("this is error")
//       //  console.log("this is promise error", window.somevar.some)
//      }).catch(err=> {
//        console.log("this is in reject ")
//      })
//     }
//      const sendAjaxSuccess  = () => {
//         let xhr  =  new window.XMLHttpRequest();
//         xhr.open("GET", "/success", true)
//         xhr.responseType="json";
//         xhr.onload  = function () {
//           console.log("this is onload", xhr.response)
//         }
//         xhr.send()
//         xhr.onreadystatechange = function () {
//           if(xhr.readyState==4&&xhr.status==200){
//             console.log("this is onreadystatechange and  readyState=4 and status =200")
//           }
//         }
//      }
//      const sendAjaxFail  = () => {
//         let xhr  = new window.XMLHttpRequest();
//         xhr.open("POST", "/error", true); // open(method,url,async)
//         // XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true：
//         xhr.responseType="json";
//          xhr.onload  = function () {
//             console.log(xhr.response)
//          }
//          xhr.send("name=zhufeng")
//      }
//     return (
//      <LoginWrapper >
//        <div className="wrapper" ref={domRef}>
//         <div className="formWrapper" style={{transform:  `translate(${style.x}px, ${style.y}px)`}}>
//            <div className="left-part">        
//             <img src="false" alt="" />  
//               {/* <img src={avatar} alt="" /> */}
//            </div>
//            <div className="right-part">
//              <header>
//               <h1> 欢迎回来</h1>
//                <p className="text-tip">请先登录</p>
//              </header>
//             <section>
//               <form action="">
//                 <div className="form-group">
//                   <label htmlFor="">
//                     用户名
//                   </label>
//                   <input type="text" className="form-control" placeholder="输入用户名" />
//                 </div>
//                  <div className="form-group">
//                   <label htmlFor="">
//                     密码
//                   </label>
//                   <input type="password" className="form-control" placeholder="输入用户名" />
//                 </div>
//                   <div className="text-gray-wrapper">
//                  <div className="grey-text">忘记密码</div>
//                    <div className="grey-text" onClick={handleGetNew}>新用户?</div>

//                </div>

//               </form>
              
//             </section>
//             <footer>
//               <button className="btn btn-primary btn-full-width" onClick={handleTest}>登录</button>


//             </footer>
            
//            </div>
//            <button onClick={sendAjaxSuccess}>发起Ajax请求成功</button>
//            <button onClick={sendAjaxFail}>发起Ajax请求失败</button>

//         </div>
//         </div>
//        </LoginWrapper>

//     )
//  }
export default function Login () {
   return (
     <div>
       login
     </div>
   )
}