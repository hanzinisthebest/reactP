import React from 'react'
import classes from './Result.module.css'
function Result(props) {
  return (
    <div>
      <p className={classes.par}>
      Your score: <span className={classes.user}>{props.userWins}</span> Computer score: <span className={classes.computer}>{props.computerWins}</span>
      </p>
    </div>
  )
}

export default Result
