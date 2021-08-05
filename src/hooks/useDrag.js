/*
 * @Author: liuRich
 * @Date: 2021-07-01 20:30:20
 * @LastEditTime: 2021-08-03 15:40:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywebsite\src\hooks\useDrag.js
 */
 import {useLayoutEffect, useRef, useState} from  'react'
  function useDrag () {
     const  domRef  = useRef(null)
    const positionRef  = useRef({
      currentX: 0, 
      currentY: 0,
      lastX: 0,
      lastY: 0
    })
     const [, forceUpdate]  = useState(null)
    useLayoutEffect(() => {
      let startX, startY;
       const onMoveStart = (e) => {
          startX = e.clientX;  
           startY = e.clientY; 
           domRef.current.addEventListener('mousemove', handleMouseMove)
                 domRef.current.addEventListener('mouseup', handleMouseOver)
       }
        const handleMouseMove  = (e) => {
        positionRef.current.currentX =  positionRef.current.lastX + e.clientX- startX
        positionRef.current.currentY =  positionRef.current.lastY  +e.clientY- startY 
        forceUpdate({})
        }
         const handleMouseOver  = (e) => {
          positionRef.current.lastX = positionRef.current.currentX 
          positionRef.current.lastY = positionRef.current.currentY
          domRef.current.removeEventListener('mousemove', handleMouseMove)
           domRef.current.removeEventListener('mouseup', handleMouseOver)
         }
     domRef.current.addEventListener('mousedown', onMoveStart)
    }, [])
     const style =  {x: positionRef.current.currentX , y: positionRef.current.currentY }
     return [domRef, style]

  }
   export default  useDrag
