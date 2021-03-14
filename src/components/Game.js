import React, { Component } from "react";
import { calculateWinner } from "./thedata";
import Board from "./Board";
const style={
    fontSize: 20,
    textAlign: 'center'
}
const Game = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [nt, setNt] = React.useState(true);

  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardcopy = [...board];
    if (winner || boardcopy[i]) return;
    boardcopy[i] = nt ? "X" : "O";
    setBoard(boardcopy);
    setNt(!nt);
  };
  const moveTo = () => {};
  const renderTo = () => {
    return(
        <div>
        
        </div>
    )
  };
  let winshot = 'play';
  if(winner !== 'Draw'){
     winshot = 'Winner :' + winner;
  }
  else if (winner && winner == 'Draw'){
     winshot = 'It is a ' + winner;
  }
  else{
    return 'Next Player: ' 
    
  }
  return (
    <div style={style}>
      <Board squares={board} onClick={handleClick}  />
      <p> {winshot}</p>
      <button onClick={() => setBoard(Array(9).fill(null))}>
            reset game
        </button>
    </div>
  );
};
export default Game;
