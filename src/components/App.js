import {useState} from 'react';
import Navbar from './Navbar'
import Player from './Player'
import Game from './game/Game'
import Score from './Score'
import Button from './Button'
import InstructionsModal from './InstructionsModal'
import EndGameModal from './EndGameModal'
import {updateBoard} from './logic/game-logic'

function App() {

  let [board, setBoard] = useState(resetBoard())
  let [currentPlayer, setCurrentPlayer] = useState(1)
  let [gameOver, setGameOver] = useState(false)
  let [winner, setWinner] = useState(null)
  let [player1Score, setPlayer1Score] = useState(0)
  let [player2Score, setPlayer2Score] = useState(0)
  let [hoverColumn, setHoverColumn] = useState(null)
  let [showInstructions, setShowInstructions] = useState(false)
  let [showEndGame, setShowEndGame] = useState(false)

  function resetBoard(){
    return [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  }

  function handleHover (hoverColumn) {
    if(!gameOver){
      setHoverColumn(hoverColumn)
    }
  }

  function handleTurn () {
    if(!gameOver){
      let [newBoard, valid, winner, draw] = updateBoard(board, hoverColumn, currentPlayer)
      if(winner){
        if(winner === 1){
          setPlayer1Score(player1Score + 1)
        }else if (winner === 2) {
          setPlayer2Score(player2Score + 1)
        }
        setCurrentPlayer(null)
        setGameOver(true)
        setHoverColumn(null)
        setWinner(winner)
        setShowEndGame(true)
      }else if (draw) {
        setGameOver(true)
        setShowEndGame(true)
        setHoverColumn(null)
      }else if(valid){
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
      }
      setBoard(newBoard)
    }
  }

  function toggleInstructions() {
    setShowInstructions(!showInstructions)
  }

  function closeModal() {
    setShowEndGame(false)
  }

  function resetGame() {
    setCurrentPlayer(1)
    setGameOver(false)
    setWinner(null)
    setShowEndGame(false)
    setShowInstructions(false)
    setBoard(resetBoard())
  }

  return (
    <div className="App">
      <Navbar toggleInstructions={toggleInstructions}/>
      <div className="ui stackable centered grid ">
        <Player
          currentPlayer={currentPlayer}
          gameOver={gameOver}
        />
        <Game
          board={board}
          hoverColumn={hoverColumn}
          handleHover={handleHover}
          currentPlayer={currentPlayer}
          handleTurn={handleTurn}
        />
        <Score
          player1Score={player1Score}
          player2Score={player2Score}
        />
        <Button
          gameOver={gameOver}
          resetGame={resetGame}
        />
        <InstructionsModal 
          open={showInstructions}
          onClose={toggleInstructions}
        />
        <EndGameModal
          open={showEndGame}
          onClose={closeModal}
          winner={winner}
          resetGame={resetGame}
        />
      </div>
    </div>
  )
}

export default App;
