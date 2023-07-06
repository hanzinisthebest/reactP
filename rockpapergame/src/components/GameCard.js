import React,{useReducer,useState} from 'react'
import Button from '../UI/Button'
import classes from './GameCard.module.css'
import Result from './Result'

const userReducer = (state,action)=>{
  if(action.type === 'won'){
    return {didWon:true,value:state.value+1}
  } v
  if(action.type === 'loss')
  {
    return {didWon:false, value:state.value}
  }
}


function GameCard() {
  const [userState,dispatchUser] = useReducer(userReducer,{didWon:null, value:0});
  const [computerState,setComputerState] = useState(0);
  const [message,setMessage] = useState('');

  const rockHandler = ()=>{
    let computerChoice = Math.floor(Math.random() *3);

    if(computerChoice === 0){
      setMessage("It's a tie!");
    }
    if(computerChoice === 1){
      dispatchUser({type:'loss'});
      setComputerState(computerState + 1);
      setMessage("You lose! paper beats rock")
    }
    if(computerChoice === 2){
      dispatchUser({type:'won'});
      setMessage("You won! rock beats scissors");
    }
  }

  const paperHandler = ()=>{
    let computerChoice = Math.floor(Math.random() *3);

    if(computerChoice === 0){
      dispatchUser({type:'won'});
      setMessage("You won! paper beats rock");
    }
    if(computerChoice === 1){
      setMessage("It's a tie!");
    }
    if(computerChoice === 2){
      dispatchUser({type:'loss'});
      setComputerState(computerState + 1);
      setMessage("You lose! scissors beats paper");
    }
  }

  const scissorsHandler = ()=>{
    let computerChoice = Math.floor(Math.random() *3);

    if(computerChoice === 0){
      dispatchUser({type:'loss'});
      setComputerState(computerState + 1);
      setMessage("You lose! rock beats scissors");
    }
    if(computerChoice === 1){
      dispatchUser({type:'won'});
      setMessage("You won! scissors beats paper");
    }
    if(computerChoice === 2){
      setMessage("It's a tie");
    }
  }
  return (
    <div className={classes.all}>
      <h1 className={classes.title}>Rock Paper Scissors Game</h1>
      <p className={classes.par}>Choose your move:</p>
      <div className={classes.buttons}>
        <Button>
          <div className={classes.rock} onClick={rockHandler}>
        &#x1F44A;
        </div>
        </Button>
        <Button > 
        <div className={classes.paper} onClick={paperHandler}> 
        &#x1f590;
        </div>
        </Button>
        <Button >
          <div className={classes.scissors} onClick={scissorsHandler}>
          &#x270c;
          </div>
        </Button>
      </div>
      <p className={classes.par}>{message}</p>
      <Result computerWins = {computerState} userWins={userState.value}/>
      </div>
  )
}
export default GameCard
