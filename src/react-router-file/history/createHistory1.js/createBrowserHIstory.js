/*
 * @Author: your name
 * @Date: 2022-01-15 10:56:15
 * @LastEditTime: 2022-01-16 15:44:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/history/createHistory1.js/createBrowserHIstory.js
 */


function createBrowserHistory () {
     let globalHistory =  window.history
      let listeners  = []
     function go(n){
          globalHistory.go(n)
     }
     function  goForward(n){
         globalHistory.forward(n)
     }
     function goBack(n){
        globalHistory.back(n)
     }
      function  listen(listener) {
          listeners.push(listener)
          return function () {
              listeners = listeners.filter(l =>l!=listener)
          }

      }
       function setState(newLocation) {
           Object.assign(history, newLocation)
           history.length = globalHistory.length;
           listeners.forEach(listener =>listener())
       }
      function  push(path, state){
          let action ="PUSH"
          globalHistory.pushState(state, null, path)
          let location  = {
              state,
              pathname: path
          }
          setState({action, location})
      }
     let history  = {
         go, 
         goForward,
         goBack,
         push, 
         listen,
         location: {
              state: globalHistory.state,
              pathname: window.location.pathname
         }

     }
      return 
}