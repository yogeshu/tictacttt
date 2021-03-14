import React, { Component } from 'react'
import Square from './Sqaure'

const style = {
	border: "4px solid darkblue",
	borderRadius: "10px",
	width: "250px",
	height: "250px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};
const Board = ({ squares, onClick }) =>(
    <div style={style}> 
        {squares.map((square,i)=>(
        <Square value={square} key={i} onClick={()=>onClick(i)}/>
        ))}
      
      
         </div>
)
export default Board