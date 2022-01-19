/*
 * @Author: your name
 * @Date: 2022-01-11 22:39:55
 * @LastEditTime: 2022-01-19 20:35:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/pages/User/index.js
 */
import React from 'react'
 import {Link, Route} from "react-router-dom"
  import UserAdd  from "./UserAdd"
   import UserDetail from './userdetail'
   import UserList from "./userlist"
export default  function User(props) {
    console.log(props)
     return (
         <div>
           
             <ul>
                 <li>
                     <Link to="/user/list">用户列表</Link>
                 </li>
                 <li>
                     <Link to="/user/add">添加用户</Link>
                 </li>
             </ul>
             <div>
                 <Route path="/user/add" component={UserAdd} />
                 <Route path="/user/list" component={UserList} />
                 <Route path="/user/detail/:id" component={UserDetail} />
             </div>
         </div>
     )
}