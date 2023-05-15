import React from 'react'
import Button from '../UI/Button'
import classes from './GameCard.module.css'
import Result from './Result'
function GameCard() {
  return (
    <div className={classes.all}>
      <h1 className={classes.title}>Rock Paper Scissors Game</h1>
      <p className={classes.par}>Choose your move:</p>
      <div className={classes.buttons}>
        <Button >
          <div className={classes.rock}>
        &#x1F44A;
        </div>
        </Button>
        <Button > 
        <div className={classes.paper}> 
        &#x1f590;
        </div>
        </Button>
        <Button >
          <div className={classes.scissors}>
          &#x270c;
          </div>
        </Button>
      </div>
      <Result/>
      </div>
    
  )
}
<h1></h1>
export default GameCard
