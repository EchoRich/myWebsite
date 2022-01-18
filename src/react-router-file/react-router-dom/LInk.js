/*
 * @Author: your name
 * @Date: 2022-01-18 08:57:24
 * @LastEditTime: 2022-01-18 09:00:44
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/react-router-dom/LInk.js
 */
import React from 'react'
import { _RouterContext as RouterContext } from '../react-router'
 function Link(props){
      return(
          <RouterContext.Consumer>
              {
                  ({history})=> {
                      return(
                          <a {...props}
                          onClick={
                              event => {
                                  event.preventDefault()
                                  history.push(props.to)
                              }
                          }>{
                              props.children
                          }</a>
                      )
                  }
              }
          </RouterContext.Consumer>
      )
 }
 export default Link
