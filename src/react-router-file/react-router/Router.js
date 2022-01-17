/*
 * @Author: your name
 * @Date: 2022-01-12 19:55:07
 * @LastEditTime: 2022-01-17 20:54:41
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/react-router/router.js
 */
import React from 'react'
import RouterContext from './RouterContext'

 class Router extends  React.Component{
     static computeRootMatch(pathname) {
         return {
             path:  "/", 
             url  :"/",
             param: {},
             isExact: pathname =="/"
         }

     }
     constructor(props){
         super(props)
        //  this.history  = createHashHistory()
         this.state ={
              location: props.history.location
         }
        //   监听路径变化 ， 当路径发生变化后执行回调并传入最新的路径
         this.unlisten  = props.history.listen(location =>{
             this.setState({
                 location
             }) //状态就发生改变了 ， 状态该改变会引起组件刷新 
         })
     }
     componentWillUnmount() {
         this.unlisten()
     }
      
     render() {
          let value  ={
               location:this.state.location, 
               history:this.props.history,
               match:Router.computeRootMatch(this.state.location.pathname)
          }
        return (
        

            <RouterContext.Provider value={value}>
                {this.props.children}
            </RouterContext.Provider>
  
       )
     }
     
 }
  export default Router