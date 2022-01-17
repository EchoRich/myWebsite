import React from 'react'
import {Router} from "../react-router/Router"
import {createHashHistory} from "../history"
 class HashRouter extends  React.Component{
     history  = createHashHistory() // 就等于在constructor 中 创建的this.history
     render () {
          return (
               <Router history={this.history}>
                   {this.props.children}
               </Router>
          )
     }
 }
 export default HashRouter