const Button = ({gameOver, resetGame}) => {
  const areYouSure = () => {
    if(window.confirm("Are you sure you want to restart the current game? This will clear the board.")){
      resetGame()
    }
  }

  return (
    gameOver ?
    <button className="big blue ui button" onClick={resetGame}>
      Play Again
    </button> :
    <button className="big blue ui button" onClick={areYouSure}>
      Restart Game
    </button>
  )
}

export default Button
