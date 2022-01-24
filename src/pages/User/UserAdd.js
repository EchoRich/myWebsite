/*
 * @Author: your name
 * @Date: 2022-01-19 20:28:37
 * @LastEditTime: 2022-01-23 16:34:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/pages/User/UserAdd.js
 */
import React from 'react'
import {UserAPI} from "../../react-router-file/utils"
class UserAdd extends React.Component{
    userNameRef =  React.createRef()
    handleSubmit=() => {
        let userName = this.userNameRef.current.value
        UserAPI.add({
            id: Date.now(),
            userName,
        })
         this.props.history.push("/user/list")
    }
     render () {
         return (
             <div>
                 <form onSubmit={this.handleSubmit}>
                     <input type="text" ref={this.userNameRef}/>
                     <input type="submit" name="添加"/>
                 </form>
             </div>
         )
     }
}

export default UserAdd