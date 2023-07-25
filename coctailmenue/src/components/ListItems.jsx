import React, { useContext } from 'react'
import Item from'./Item'
import AppContext from '../store/AppContext';
import Loading from './Loading';
import Search from './Search';
import classes from './ListItems.module.css'
function ListItems() {
  const {cocktiels,isLoading} = useContext(AppContext);

  if(isLoading){
    return(<Loading/>)
  }

  if(cocktiels.length<1){
    return(<h1>no cocktiels</h1>)
  }
  return (
    <>
    
    <div className={classes.all}>
    {cocktiels.map((item)=><Item key={item.id} id={item.id} pic={item.pic} name = {item.name} info = {item.info} glass = {item.glass}/>)}
    </div>
    </>
  )
}

export default ListItems
