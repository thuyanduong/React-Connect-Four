import React from 'react'

const Player = ({currentPlayer, gameOver}) => {
  return (
    <div className="four column centered row">
      <div className="centered aligned column">
        <h2 className= {`ui header ${currentPlayer === 2 ? "red" : "black"}`}>
          {gameOver ? "Game Over" : `Player ${currentPlayer}'s turn`}
        </h2>
      </div>
    </div>
  )
}

export default Player
