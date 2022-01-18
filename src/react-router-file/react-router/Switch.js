/*
 * @Author: your name
 * @Date: 2022-01-18 08:41:14
 * @LastEditTime: 2022-01-18 09:11:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/react-router/Switch.js
 */
 import React from 'react'
import matchPath from './matchPath';
import RouterContext from './RouterContext'

 class Switch extends React.Component{
     static contextType = RouterContext
     render () {
          const  {location} = this.context;
          let element, match;
          React.Children.forEach(this.props.children, route => {
              // yi一旦有一个匹配了， 后面就不再匹配了 
              if(!match&&React.isValidElement(route)){
                  element  = route
                  match = matchPath(location.pathname, route.props)
              }
          })
          return   match?  React.cloneElement(element, {computedMatch: match}): null
 
     }
 }
 export default Switch
