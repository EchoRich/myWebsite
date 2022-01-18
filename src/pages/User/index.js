/*
 * @Author: your name
 * @Date: 2022-01-11 22:39:55
 * @LastEditTime: 2022-01-18 09:08:49
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/pages/User/index.js
 */
import React from 'react'
 import {Link} from "react-router-dom"
export default  function User(props) {
    console.log(props)
     return (
         <div>
             <Link to={{pathname:"/user/detail", state: {
                 id: 1, 
                 name: "zhangsan"
             }} }>
                 用户1
             </Link>
         </div>
     )
}