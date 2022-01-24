/*
 * @Author: your name
 * @Date: 2022-01-23 16:13:22
 * @LastEditTime: 2022-01-23 16:16:26
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/utils.js
 */
export const UserAPI   = {
    add(user) {
        let users  = UserAPI.list()
        users.push(user)
        localStorage.setItem('users',  JSON.stringify(users))
    },
    list() {
        let userString  =  localStorage.getItem("users")
         let users  =   userString?JSON.parse(userString):  []
          return users
    }, 
    find(id) {
        let users  = UserAPI.list()
        return  users.find(user =>user.id==id)
    },
}
