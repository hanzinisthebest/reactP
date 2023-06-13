import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const firstNum = 0;
const reducer = (state,action)=>{
    if(action.type == 'plus'){
        return {num:state.num+1};
    }
    if(action.type == 'minus'){
        return {num:state.num-1};
    }
}
function Counter() {
    // const [num,setNum] = useState(0);
    const [numState,dispatch] = useReducer(reducer,{num:firstNum});
    const onPlus = ()=>{
        dispatch({type:'plus'});
    }
    const onMinus = ()=>{
        dispatch({type:'minus'});
    }
  return (
    <div>
      <h1>{numState.num}</h1>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  )
}

export default Counter
