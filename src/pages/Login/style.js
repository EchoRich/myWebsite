/*
 * @Author: your name
 * @Date: 2021-07-01 16:15:06
 * @LastEditTime: 2021-07-01 20:48:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\pages\Login\style.js
 */

import styled from  'styled-components'
import LoginBg from  '../../images/Login/bg.jpg'
export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
 background-image: url(${LoginBg}) ;
 background-size: cover;
 display: flex;
 justify-content: center;
 align-items: center;
 .wrapper{
   width: 100%;
 }
 .formWrapper{
    display: flex;
    /* height: 300px; */
    margin: 0 auto; 
    width: 70%; 
    
    .left-part{
      width: 20%; 
      background: white;
       display: flex;
       justify-content: center;
       align-items: center;
       margin-right: 20px; 
       img{
          border-radius: 50%;;
         border: 1px solid #bb5858;
    box-shadow: 1px 1px 0px 3px #b1dce682;
}
       }

    }
    .right-part{
       width: 80%;
        header{
           text-align: center;
           color: white!important; 
        
       .text-tip{
          margin: 5px 0 0;
          opacity: .5; 
          color: white
        }
        }
      
    
    .text-gray-wrapper{
       display: flex;
       align-items: center;
       justify-content:  space-around;
       .grey-text{
          font-size: 20px;
           color: gray; 
           font-weight: bold
       }
    }
    .btn-full-width{
      width: 100%;
    }
    }

 }
 `