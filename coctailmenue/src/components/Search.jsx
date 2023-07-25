import React, { useContext, useRef } from 'react'
import classes from './Search.module.css'
import AppContext from '../store/AppContext'
function Search() {
  const{setSearch} = useContext(AppContext);
  const inputRef = useRef(null);

  const submitHandler = (e)=>{
    const inputValue = inputRef.current.value;
    e.preventDefault();
    setSearch(inputValue);
  }
  return (
    <>
    <div style={{marginBottom:'6rem'}}>
    <form  className={classes.form} onSubmit={submitHandler}>
    <input type="text" className={classes.input}  ref={inputRef} />
    <button className={classes.btn} type='submit'>Search</button>
    </form>
    </div>
    </>
  )
}

export default Search
