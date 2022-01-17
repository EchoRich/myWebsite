/*
 * @Author: your name
 * @Date: 2022-01-12 21:14:33
 * @LastEditTime: 2022-01-17 15:03:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebsite/src/react-router-file/history/createBrowserHistory.js
 */
//  这是一个工厂方法 用来返回一个历史对象
function createHashHistory() {
    let  stack  = [] //模拟一个历史条目栈 这里放的都是每一次的location
    let index  = -1; // m模拟一个当前的索引 
    let action  ="POP"
    let state //当前状态
    let listeners = []
    function go  (n) { // go是在历史条目中跳来跳去  条目书不会发生改变 
        action="POP"
        index += n;
        if(index<0){
            index=0
        }else if(index >=stack.length){
            index  = stash.length-1
        }
           

        let nextLocation  = stack[index]
        state = nextLocation.state;
        window.location.hash  = nextLocation.pathname //用新的路径名改变当前的hash值

        
    }
    function goForward(n) {
        go(1)
         
    }
    function goBack(n) {
        go(-1)
       
   }
   function push(path, nextState){
       action="PUSH"
       state = nextState;
       window.location.path  = path

   }
    let listener  =  function () {
        let pathname  = window.location.hash.slice(1)
        Object.assign(history, {action,location: {pathname, state}})
        if(action=="PUSH"){
            stack[++index] = history.location // 是在当前位置进行添加的 
 
         //    stack.push(history.location )
        }
        listeners.forEach(listener =>listener(history.location))
    }
   window.addEventListener("hashchange",listener )
    window.addEventListener("popstate", function (event) {
        setState({action: "POP",   location:  {state: event.state, pathname: window.location.pathname }})
    })
    function setState(newLocation) {
        Object.assign(history, newLocation)
        history.length = globalHistory.length;
        listeners.forEach(listener =>listener())
    }
function listen(listener) {
    listeners.push(listener)
    return function () {
        //取消监听函数 
        listeners  =   listeners.filter(l => l!==listener)
    }

}
    const history  ={
         action:  "POP", //  对history执行的动作
         go,
         goBack,
         goForward,
         push,
         listen,
         location: {
             pathname: window.location.hash.slice(1),
             state: undefined
         },  
         
     }
      if(window.location.hash){
          action="PUSH"
          listener()
      }else{
          window.location.hash="/"
      }
     return history
}

 
 export default createBrowserHistory