/*
 * @Author: your name
 * @Date: 2021-07-01 15:50:25
 * @LastEditTime: 2022-01-18 08:56:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import  {HashRouter , Route,Switch, Link} from "react-router-dom"
 import Home from  './pages/Home'
 import User from "./pages/User"
 import Login from "./pages/Login"
// import './monitor'

ReactDOM.render(
<HashRouter>
  <ul>
    <li>
      <Link to="/">
      首页</Link>
    </li>
    <li>
      <Link to="/user">
      y用户管理 </Link>
    </li>
    <li>
      <Link to="/login">
      登陆</Link>
    </li>
  </ul>
<Switch>
<Route path="/" component={Home} exact></Route>
<Route path="/login" component={Login}></Route>
  <Route path="/user" component={User}></Route>
</Switch>


</HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

