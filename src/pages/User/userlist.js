/*
 * @Author: your name
 * @Date: 2022-01-19 20:27:59
 * @LastEditTime: 2022-01-19 20:33:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/pages/User/userlist.js
 */
import React from 'react'
 import {Link} from "react-router-dom"
class UserList extends React.Component{
     render () {
         return (
             <div>
                 <Link to={{pathname:"/user/detail/1", state: {
                 id: 1, 
                 name: "zhangsan"
             }} }>
                 张三
             </Link>
             <Link to={{pathname:"/user/detail/2", state: {
                 id: 2, 
                 name: "lisi"
             }} }>
                 李四
                 
             </Link> 
             </div>
         )
     }
}

export default UserList