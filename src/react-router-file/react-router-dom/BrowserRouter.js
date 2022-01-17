import React from 'react'
import {Router} from "../react-router/Router"
import {createBrowserHistory} from "../history"
 class BrowserRouter extends  React.Component{
     history  = createBrowserHistory() // 就等于在constructor 中 创建的this.history
     render () {
          return (
               <Router history={this.history}>
                   {this.props.children}
               </Router>
          )
     }
 }
 export default BrowserRouter