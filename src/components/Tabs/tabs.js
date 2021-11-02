import React from "react"
import PropTypes from "prop-types"
import classNames  from "classnames"
export default function Tabs  () {
   const container  = classNames("tab-container")
  return (
    <div className={container}>
this is container
    </div>
  )

}
Tabs.propTypes ={
 
  defaultKey:  PropTypes.string,
  handleTabChange: PropTypes.func,
  activeKey: PropTypes.string,

}