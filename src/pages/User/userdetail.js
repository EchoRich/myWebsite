/*
 * @Author: your name
 * @Date: 2022-01-19 20:20:39
 * @LastEditTime: 2022-01-23 16:56:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/pages/User/userdetail.js
 */
import React from 'react'
import { UserAPI } from '../../react-router-file/utils'
class UserDetail extends  React.Component{
    render() {
        // let user={}
        console.log(111,this.props)
         let user  = this.props.history.location.state
          if(!user){
              let id  =   this.props.match.params.id
              user = UserAPI.find(id)
          }
         return (
             <div>
                 <p>
                    id: {user?.id}
                 </p>
                 <p>
                     name: {user?.userName}
                 </p>
             </div>
         )
    }
}
export  default UserDetail