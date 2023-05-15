import React from 'react'
import classes from './Result.module.css'
function Result() {
  return (
    <div>
      <p className={classes.par}>
        
      Your score: <span className={classes.user}>0</span> Computer score: <span className={classes.computer}>0</span>
      </p>
    </div>
  )
}

export default Result
