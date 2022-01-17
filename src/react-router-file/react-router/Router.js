import React from 'react'
import RouterContext from './RouterContext'
import {createHashHistory} from "../history"
 class Router extends  React.Component{
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
               history:this.props.history
          }
        return (
        

            <RouterContext.Provider value={value}>
                {this.props.children}
            </RouterContext.Provider>
  
       )
     }
     
 }
  export default Router