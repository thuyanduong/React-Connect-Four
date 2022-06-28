import React from 'react'
import {generateRow} from './Game'

const Board = ({playerBoard, handleHover, hoverColumn, currentPlayer, handleTurn}) => {
  let board = []
  for(let i = 0; i < playerBoard.length; i++){
    board.push(
      <div className="game-row" key={i}>
        {generateRow(playerBoard[i], i, handleHover, handleTurn)}
      </div>
    )
  }
  return board
}

export default Board
