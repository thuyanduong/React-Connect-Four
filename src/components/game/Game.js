import React from 'react'
import Drop from './Drop'
import Board from './Board'

const Game = ({board, handleHover, hoverColumn, currentPlayer, handleTurn}) => {
  return (
    <div className="game row">
        <Drop handleTurn={handleTurn} handleHover={handleHover} hoverColumn={hoverColumn} currentPlayer={currentPlayer}/>
      <div className="board">
        <Board handleTurn={handleTurn} playerBoard={board} handleHover={handleHover} hoverColumn={hoverColumn} currentPlayer={currentPlayer}/>
      </div>
    </div>
  )
}

const generateRow = (playerRow, i, handleHover, handleTurn) => {
  let row = []
  for(let j = 0; j < playerRow.length; j++){
    row.push(
      <div className="cell" key={`${i}-${j}`}
        onMouseEnter={()=>{handleHover(j)}}
        onMouseLeave={()=>{handleHover(null)}}
        onClick={handleTurn}
      >
        <div className="chip"
          style={{backgroundColor: generateColor(playerRow[j])}}
        />
      </div>
    )
  }
  return row
}

const generateColor = (num) => {
  switch (num) {
    case 1:
      return "black"
    case 2:
      return "red"
    default:
      return "white"
  }
}

export {generateRow}
export default Game
