import React, { useContext } from 'react'
import classes from './DeatilesCard.module.css'
import { Link } from 'react-router-dom'
import AppContext from '../store/AppContext';
function DeatilesCard(props) {
  const {setOnPage,setOneCocktile} = useContext(AppContext); 
  const backHandler = ()=>{
    setOneCocktile([]);
  }
  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <Link to='/' className={classes.btn}>Back Home</Link>
       
        <h3 className={classes.name}>{props.name}</h3>
      </header>
      <div className={classes.drink}>
        <img src={props.pic} alt="" className={classes.img} />
        <div className={classes.info}>
            <p className={classes.p}><span className={classes.data}>name :</span> {props.name}</p>
            <p className={classes.p}><span className={classes.data}>category :</span> {props.category}</p>
            <p className={classes.p}><span className={classes.data}>info :</span> {props.info}</p>
            <p className={classes.p}><span className={classes.data}>glass :</span> {props.glass}</p>
            <p className={classes.p}><span className={classes.data}>ingredients :</span> {props.ingredient}...</p>
            <p className={classes.p}><span className={classes.data}>instructions :</span> {props.instructions}</p>
        </div>
      </div>
    </div>
  )
}

export default DeatilesCard
