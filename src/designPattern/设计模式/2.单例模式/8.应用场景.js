/**
 * jquery
*/
if(window.jQuery!=null){
   return window.jQuery
}else{
  // init jquery
}
/**
 * redux整个应用只有一个状态管理仓库 ， 并且只有一个状态state 也是用了单例模式
*/
function createStore(reducer) {
   let state; 
   let listeners  = []; 
   function subscribe (listener){
     listeners.push(listener)
   }
    function getState() {
       return state
    }
     function dispatch(action) {
       state  =  reducer(state, action)

     }
     return {
       getState,subscribe,  dispatch
     }
}
 let reducer = function () {}
 let store  = createStore(reducer)