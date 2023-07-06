import React from 'react'
import TourCard from '../UI/TourCard'
import classes from './Tours.module.css'
function Tours(props) {
    const listOfTours = props.toursList.map(tour=>
        <TourCard key ={tour.id} price={tour.price} title = {tour.title} info = {tour.info} url = {tour.url} /> 
        )
  return (
    <div className={classes.tours}>{listOfTours}</div>
  )
}

export default Tours
