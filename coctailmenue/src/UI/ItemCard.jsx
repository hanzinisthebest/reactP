import React, { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './ItemCard.module.css'
import AppContext from '../store/AppContext'
function ItemCard(props) {
  const {setId,setOnPage} = useContext(AppContext); 
  const itemHandler = ()=>{
    setId(props.id);
    setOnPage(true);
  }
  const url = 'cocktail/:'
  return (
    <div className={classes.card}>
      <div>
      <img src={props.img} alt="" className={classes.img} />
      </div>
      <div className={classes.footer}>
        <h4 className={classes.name}>{props.name}</h4>
        <h5 className={classes.glass}>{props.glass}</h5>
        <p>{props.info}</p>
        <Link to={`${url}${props.id}`} className={classes.btn} onClick={itemHandler}>
          Deatiles
        </Link>
      </div>
      
    </div>
  )
}

export default ItemCard
