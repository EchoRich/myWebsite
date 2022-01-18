/*
 * @Author: your name
 * @Date: 2022-01-12 21:14:33
 * @LastEditTime: 2022-01-18 09:09:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/history/createBrowserHistory.js
 */
//  这是一个工厂方法 用来返回一个历史对象
function createBrowserHistory() {
    let globalHistory  = window.history 
    let listeners = []
    function go  (n) {
        globalHistory.go(n)
    }
    function goForward(n) {
         globalHistory.forward(n)
    }
    function goBack(n) {
        globalHistory.goBack(n)
   }
function listen(listener) {
    listeners.push(listener)
    return function () {
        //取消监听函数 
        listeners  =   listeners.filter(l => l!==listener)
    }

}
function setState(newState) {
    Object.assign(history, newState)
    history.length  =   globalHistory.length;
    listeners.forEach(listener =>listener(history.location))

      
}
   /**
    * @description: 
    * @param {*} path  跳转的路径
    * @param {*} state 跳转的状态
    * @return {*}
    */
   function push(to,  state){
        const action  ='PUSH'
         let pathname ;
         if(typeof to =="object"){
             pathname= to.pathname
             state= to.state

         }else{
             pathname=to
         }
         globalHistory.pushState(state, null , pathname)
          let location  = {state, pathname}
          setState({action, location})

   }
    const history  ={
         action:  "POP", //  对history执行的动作
         go,
         goBack,
         goForward,
         push,
         listen,
         location: {
             pathname: window.location.pathname,
             state: globalHistory.state
         },  
         
     }
     return history
}
 
 export default createBrowserHistory