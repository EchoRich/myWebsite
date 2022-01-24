/*
 * @Author: your name
 * @Date: 2021-07-01 15:50:25
 * @LastEditTime: 2022-01-24 16:11:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import  {HashRouter , Route,Switch, NavLink} from "react-router-dom"
 import Home from  './pages/Home'
 import User from "./pages/User"
 import Login from "./pages/Login"
 import Profile from "./pages/Profile"
 import Protected from "./pages/ProtectedFile"
// import './monitor'

ReactDOM.render(
<HashRouter>
  <ul>
    <li>
      <NavLink className={"strong"} 
      activeStyle={{color:  "red"}}
      activeClassName='active'
      style={{textDecoration: "line-through"}} to="/">
      首页</NavLink>
    </li>
    <li>
      <NavLink activeStyle={{color:  "red"}}to="/user">
      y用户管理 </NavLink>
    </li>
    <li>
      <NavLink activeStyle={{color:  "red"}} to="/login">
      登陆</NavLink>
    </li>
    <li>
      <NavLink activeStyle={{color:  "red"}} to="/profile">
      个人信息</NavLink>
    </li>
  </ul>
<Switch>
<Route path="/" component={Home} exact>

</Route>
<Route path="/login" component={Login}></Route>
  <Route path="/user" component={User}></Route>
  <Protected path="/profile" component={Profile}></Protected>
  {/* <Route path="/profile" component={Profile}></Route> */}
 
</Switch>


</HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

