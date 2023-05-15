import React from 'react'
import Card from '../UI/Card'
import DescriptionCard from '../UI/DescriptionCard'
import classes from './ResultCard.module.css'
const  ResultCard = (props)=> {
  return (
  <>
    <div>
        <img className={classes.img} src="http://openweathermap.org/img/wn/03n.png" alt="Weather Icon"/>
    </div>
    <div className={classes.temperture}>
    {Math.floor( props.temp)}°C
    </div>
    <div className={classes.description}>
    {props.description}
    </div>
    <div className={classes.details}>
        <DescriptionCard>
        Feels like: {props.feels}
        </DescriptionCard>
        <DescriptionCard>
        Humidity: {props.humidity}%
        </DescriptionCard>
        <DescriptionCard>
        Wind speed: {props.wind} m/s
        </DescriptionCard>
    </div>
    </>
  )
}

export default ResultCard
