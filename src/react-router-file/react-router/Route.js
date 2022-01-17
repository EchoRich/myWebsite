import React from 'react'
import RouterContext from './RouterContext'
class Route extends React.Component{
     static contextType  = RouterContext
     render () {
          let  {history, location}  = this.content
           let {path, component: RouterComponent}  =   this.props
         let match  =   location.pathname  ==path  //r如果匹配上了 
          let renderElement =null; 
          let routeProps  ={
              history, location
          }
          if(match){
               renderElement = <RouterComponent  {...routeProps}/>
          }
          return renderElement
     }
}
export default Route