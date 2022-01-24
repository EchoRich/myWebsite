/*
 * @Author: your name
 * @Date: 2022-01-23 17:03:48
 * @LastEditTime: 2022-01-23 17:20:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/pages/Protected/index.js
 */
import React from 'react';
 import {Route, Redirect} from "react-router-dom"
//   const WithProtected =(OldComponent) => {

//     return class extends React.Component{

//     }
//   }
  const  Protected =   (props) => {
       let  {path, component: RouteComponent}= props
        return(
             <Route path={path} render={(routeProps) => {
                  let login  = localStorage.getItem("logined")
                   if(login){
                       return <RouteComponent {...routeProps}></RouteComponent>
                   }else{
                        return <Redirect to="login"></Redirect>
                   }

             }}></Route>
        )

  }
   export default Protected

   /**
    * route组件里 制定渲染方式有三种方法 
    *  第一种是component 直接指定组件不能添加逻辑
    * 第二种  render方法  传递一个render函数 ， 这个函数会返回一个要渲染的内容
    * 第三种 children 
    * 
    *  优先级是一二三顺序排列
   */