import React, { useContext } from 'react'
import DeatilesCard from '../UI/DeatilesCard'
import AppContext from '../store/AppContext'
import Loading from './Loading';
import { useParams } from 'react-router-dom';

function Deatiles() {
    const {oneCocktile,isLoading,setOnPage,setId} = useContext(AppContext);
    //  const {id} = useParams();
    if(isLoading){
        return <Loading/>
    }
    // setOnPage(true);
    // setId(id);
  return (
    <DeatilesCard  name={oneCocktile.name} info={oneCocktile.info} pic={oneCocktile.pic} 
    category={oneCocktile.category} glass = {oneCocktile.glass} instructions = {oneCocktile.instructions} ingredient={oneCocktile.ingredient}/>
  )
}

export default Deatiles
