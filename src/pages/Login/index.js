/*
 * @Author: your name
 * @Date: 2021-07-01 16:02:42
 * @LastEditTime: 2021-08-03 18:38:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\pages\Login\index.js
 */
import React from  'react'
import 'bootstrap/dist/css/bootstrap.css'
import {LoginWrapper} from  './style'
 import avatar  from  '../../images/Login/avatar.jpg'
  import useDrag  from  '../../hooks/useDrag'
 export default  function Login  () {
    const  [domRef,  style] = useDrag()
     console.log(1111, style)
    const handleGetNew = () =>{

    }
    const handleTest = () => {
     console.log( window.test.test)
    }
    return (
     <LoginWrapper >
       <div className="wrapper" ref={domRef}>
        <div className="formWrapper" style={{transform:  `translate(${style.x}px, ${style.y}px)`}}>
           <div className="left-part">          
              <img src={avatar} alt="" />
           </div>
           <div className="right-part">
             <header>
              <h1> 欢迎回来</h1>
               <p className="text-tip">请先登录</p>
             </header>
            <section>
              <form action="">
                <div className="form-group">
                  <label htmlFor="">
                    用户名
                  </label>
                  <input type="text" className="form-control" placeholder="输入用户名" />
                </div>
                 <div className="form-group">
                  <label htmlFor="">
                    密码
                  </label>
                  <input type="password" className="form-control" placeholder="输入用户名" />
                </div>
                  <div className="text-gray-wrapper">
                 <div className="grey-text">忘记密码</div>
                   <div className="grey-text" onClick={handleGetNew}>新用户?</div>

               </div>

              </form>
              
            </section>
            <footer>
              <button className="btn btn-primary btn-full-width" onClick={handleTest}>登录</button>


            </footer>
            
           </div>

        </div>
        </div>
       </LoginWrapper>

    )
 }