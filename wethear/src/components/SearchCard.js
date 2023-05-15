import React, { useEffect, useReducer, useState } from 'react'
import Card from '../UI/Card'
import classes from './SearchCard.module.css'
import ResultCard from './ResultCard'

const SearchCard = (props)=> {
  const apikey = "46f80a02ecae410460d59960ded6e1c6";
  const [inputState,setInputState] = useState("");
  const [eror,setErorState] = useState(null);
  const [result,setResult] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [feels,setFeels] = useState();
  const [temp,setTemp] = useState();
  const [wind,setWind] = useState();
  const [humidity,setHumidity] = useState();
  const [description,setDescription] =useState();
  
  const typing = (e)=>{
      setInputState(e.target.value)
  }

  const requsetWethear = async(event)=>{
    try { 
      event.preventDefault();
      setIsLoading(true)
      setResult(false)
      setErorState(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputState}&appid=${apikey}&units=metric`
      );
      if(!response.ok){
        throw new Error("An error happened, please try again later ")
      }

      const data = await response.json();
      console.log(data.main.temp);
      setFeels(data.main.feels_like);
      setTemp( data.main.temp);
      setWind(data.wind.speed);
      setHumidity(data.main.humidity);
      setDescription(data.weather[0].description);
      setResult(true);
      setIsLoading(false);
    }
    catch (error) {
      setErorState(error.message)
    }
  }
 
  let content;

  if(result){
    content = <ResultCard feels={feels} temp = {temp} wind = {wind} humidity = {humidity} description = {description}/>
  }

  if (eror) {
    content = <h3>{eror}</h3>;
  }

  if (isLoading && !eror) {
    content = <h2>Loading...</h2>;
  }
  return (
    <Card>
        <h1>Weather App</h1>
        <form  onSubmit={requsetWethear}>
        <input type="text" className={classes.input} placeholder='Enter City' onChange={typing}/>
        <button className={classes.button}  >Get Weather</button>
        </form>
       {content}

    </Card>
  )
}

export default SearchCard
