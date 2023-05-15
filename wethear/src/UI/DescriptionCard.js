import React from 'react'
import classes from './DescriptionCard.module.css'
const DescriptionCard = (props)=> {
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  )
}

export default DescriptionCard
