/*
 * @Author: your name
 * @Date: 2022-01-12 20:36:40
 * @LastEditTime: 2022-01-24 16:12:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/react-router/Route.js
 */
import React from 'react'
import RouterContext from './RouterContext'
import matchPath  from "./matchPath"
class Route extends React.Component{
     static contextType  = RouterContext
     render () {
          let  {history, location,children}  = this.content
           let {component: RouterComponent, computedMatch, render}  =   this.props
            let match  =computedMatch?computedMatch: matchPath(location.pathname, this.props)
     //     let match  =   location.pathname  ==path  //r如果匹配上了 
          let renderElement =null; 
          let routeProps  ={
              history, location
          }
          if(match){
               routeProps.match  = match
                if(RouterComponent){
                    renderElement = <RouterComponent  {...routeProps}/>
                }else if(render){
                     renderElement =  render(routeProps)
                }else if(children){
                     renderElement= children(routeProps)

                }else{
                     renderElement  = null
                }
               
          }else{
               if(children){
                    renderElement= children(routeProps)

               }else{
                    renderElement  = null
               }  
          }
          return renderElement
     }
}
export default Route