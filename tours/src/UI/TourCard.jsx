import React, { useState } from 'react'
import classes from './TourCard.module.css'
function TourCard(props) {
    const [showMore, setShowMore] = useState(false);
    const [btn,setBtn] = useState(true)
    const btnHandler = ()=>{
      setBtn(false);
    }
  return (
    <>
    {btn && <div className={classes.single}>
    <img src={props.url} alt="" className={classes.img}/>
    <span className={classes.price}>${props.price}</span>
    <div className={classes.info}>
        <div className={classes.title}>{props.title}</div>
        <p className={classes.des}>  {showMore ? props.info : `${props.info.substring(0, 250)}`}
  <button className={classes.show} onClick={() => setShowMore(!showMore)} >{showMore ? "Show less" : "...Show more"}</button></p>
        <button className={classes.delete} onClick={btnHandler}>not interested</button>
    </div>
    </div>
  }
  </>
  )
}

export default TourCard
