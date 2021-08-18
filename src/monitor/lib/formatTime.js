/*
 * @Author: your name
 * @Date: 2021-08-16 22:07:03
 * @LastEditTime: 2021-08-16 22:08:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\monitor\lib\formatTime.js
 */
export default function   formatTime (time)  {
  console.log("time is", time)
   return `${time}`.split(".")[0]
}