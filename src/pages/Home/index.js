import React from "react"
var moment = require('moment');
 export default function Home() {
   let str =" 2018.08.16 10:00"
    console.log(3333, moment(str).isValid())
    return (<div>
      this i home 
    </div>)
 }