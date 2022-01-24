/*
 * @Author: your name
 * @Date: 2022-01-19 20:27:59
 * @LastEditTime: 2022-01-23 16:53:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/pages/User/userlist.js
 */
import React from 'react'
 import {Link} from "react-router-dom"
import { UserAPI } from '../../react-router-file/utils'
class UserList extends React.Component{
    state={
        users:[]
    }
    componentDidMount() {
         let users = UserAPI.list();
         this.setState({
             users
         })
    }
     render () {
         return (
             <div>
                 <ul>
                  {this.state.users.map((user,index) => {
                     return(
                     <li key={user.id}>
                     <Link to={{
                         pathname: `/user/detail/${user.id}`,
                         state: {...user}
                     }}>222{user.userName}</Link>

                 </li>)
                  })}
                  </ul>

      
             </div>
         )
     }
}

export default UserList