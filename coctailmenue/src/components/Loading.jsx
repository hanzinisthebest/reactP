import React from 'react'
import classes from'./Loading.module.css'
function Loading() {
  return (
    <div className={classes.page}>
      <div className={classes.loading}></div>
    </div>
  )
}

export default Loading
