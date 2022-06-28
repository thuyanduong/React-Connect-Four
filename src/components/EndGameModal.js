import React from 'react'

const EndGameModal = ({open, onClose, winner, resetGame}) => {
  const displayWinner = () => {
    switch (winner) {
      case 1:
        return "Player 1 wins!"
      case 2:
        return "Player 2 wins!"
      default:
        return "Draw!"
    }
  }

  return (
    <div className="modal" style={{display: open ? "block" : "none"}}
      onClick={onClose}
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="ui centered segment">
          <i className="close icon" onClick={onClose}></i>
          <h1>{displayWinner()}</h1>
          <button className="medium blue ui button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default EndGameModal
