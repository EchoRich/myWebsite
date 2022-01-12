/*
 * @Author: your name
 * @Date: 2021-07-01 15:50:25
 * @LastEditTime: 2021-08-18 12:25:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import  {HashRouter , Route,Switch} from "react-router-dom"
 import Home from  './pages/Home'
 import User from "./pages/User"
 import Login from "./pages/Login"
// import './monitor'

ReactDOM.render(
<HashRouter>
<div>
<Route path="/" component={Home} exact></Route>
<Route path="/login" component={Login}></Route>
  <Route path="/user" component={User}></Route>
</div>


</HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

