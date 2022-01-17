/*
 * @Author: your name
 * @Date: 2022-01-12 20:36:40
 * @LastEditTime: 2022-01-17 19:37:49
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/react-router/Route.js
 */
import React from 'react'
import RouterContext from './RouterContext'
import matchPath  from "./matchPath"
class Route extends React.Component{
     static contextType  = RouterContext
     render () {
          let  {history, location}  = this.content
           let {component: RouterComponent}  =   this.props
            let match  = matchPath(location.pathname, this.props)
     //     let match  =   location.pathname  ==path  //r如果匹配上了 
          let renderElement =null; 
          let routeProps  ={
              history, location
          }
          if(match){
               routeProps.match  = match
               renderElement = <RouterComponent  {...routeProps}/>
          }
          return renderElement
     }
}
export default Route