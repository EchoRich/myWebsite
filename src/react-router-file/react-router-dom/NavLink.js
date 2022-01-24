/*
 * @Author: your name
 * @Date: 2022-01-24 09:54:31
 * @LastEditTime: 2022-01-24 16:08:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/react-router-dom/NavLink.js
 */


import React from 'react'
import { matchPath } from '../react-router/matchPath'
import { _RouterContext as RouterContext } from '../react-router'
import Route from "../react-router/Route"
import Link from "./LInk"

//  function NavLink(props){
//       let context  = React.useContext(RouterContext)
//        let {location:  {pathname}} =   context
//        const  {
//            to:path, //path志向的路径
//            className:   classNameProp="",//原始的类名
//            style: styleProp ={}, //基本的行内样式 
//            activeClassName="active", //激活类名
//            activeStyle={}, //激活的行内样式
//            children, //儿子
//            exact,//是否是精确匹配 

           
//        } = props
//     //    pathname就是浏览器的路径path来自于to//
//         const isActive  =   matchPath(pathname,  {path, exact})
//          let className= isActive?joinClassNames(classNameProp,  activeClassName): classNameProp
//           let style  = isActive?{...styleProp, ...activeStyle}: styleProp;
//           let linkProps= {
//               className,
//               style,  
//               to: path,
//               children
//           }
//           return <Link {...linkProps}/>
//  }
 function NavLink (props) {
      const {
          to: path, 
          className: classNameProp = "",
          style: styleProp={},
          activeClassName="active",
          activeStyle={},
          children,
          exact,
      } = props
      return (
          <Route path={path} >
              {({match}) => {
                             let linkProps= {
                                  className: match?joinClassNames(classNameProp, activeClassName): classNameProp,
                                  style:   match?{...styleProp, ...activeStyle}: styleProp,  
                                  to: path,
                                  children
                              }
                  return (<link {...linkProps}></link>)

              }}
          </Route>
      )
 }
  function joinClassNames(...classnames) {
       return classnames.filter(c=>c).join(" ")

  }
  export default NavLink