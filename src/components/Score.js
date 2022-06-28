import React from 'react'

const Score = ({player1Score, player2Score}) => {
  return (
    <div className="three column row">
      <div className="centered aligned column">
        <h3 className="ui header">
          Player 1 Wins: {player1Score}
        </h3>
      </div>
      <div className="centered aligned column">
        <h3 className="ui header red">
          Player 2 Wins: {player2Score}
        </h3>
      </div>
    </div>
  )
}

export default Score
