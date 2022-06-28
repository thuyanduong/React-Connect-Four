import React from 'react';
import Navbar from './Navbar'
import Player from './Player'
import Game from './game/Game'
import Score from './Score'
import Button from './Button'
import InstructionsModal from './InstructionsModal'
import EndGameModal from './EndGameModal'
import {updateBoard} from './logic/game-logic'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      board: this.resetBoard(),
      currentPlayer: 1,
      gameOver: false,
      winner: null,
      player1Score: 0,
      player2Score: 0,
      hoverColumn: null,
      showInstructions: false,
      showEndGame: false,
    }
  }

  resetBoard(){
    return [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  }

  handleHover = (hoverColumn) => {
    if(!this.state.gameOver){
      this.setState({hoverColumn})
    }
  }

  handleTurn = () => {
    if(!this.state.gameOver){
      let [newBoard, valid, winner, draw] = updateBoard(this.state.board, this.state.hoverColumn, this.state.currentPlayer)
      if(winner){
        if(winner === 1){
          this.setState(prevState => ({player1Score: prevState.player1Score + 1}))
        }else if (winner === 2) {
          this.setState(prevState => ({player2Score: prevState.player2Score + 1}))
        }
        this.setState({
          board: newBoard,
          currentPlayer: null,
          gameOver: true,
          hoverColumn: null,
          winner: winner,
          showEndGame: true,
        })
      }else if (draw) {
        this.setState({
          gameOver: true,
          showEndGame: true,
          hoverColumn: null,
          board: newBoard
        })
      }else if(valid){
        this.setState(prevState => ({
          currentPlayer: prevState.currentPlayer === 1 ? 2 : 1,
          board: newBoard
        }))
      }
    }
  }

  toggleInstructions = () => {
    this.setState(prevState => ({showInstructions: !prevState.showInstructions}))
  }

  closeModal = () => {this.setState({showEndGame: false})}

  resetGame = () => {
    this.setState({
      board: this.resetBoard(),
      currentPlayer: 1,
      gameOver: false,
      winner: null,
      showEndGame: false,
      showInstructions: false
    })
  }

  render(){
    let {board, gameOver, currentPlayer, player1Score, player2Score,
      hoverColumn, showInstructions, showEndGame, winner} = this.state
    return (
      <div className="App">
        <Navbar toggleInstructions={this.toggleInstructions}/>
        <div className="ui stackable centered grid ">
          <Player
            currentPlayer={currentPlayer}
            gameOver={gameOver}
          />
          <Game
            board={board}
            hoverColumn={hoverColumn}
            handleHover={this.handleHover}
            currentPlayer={currentPlayer}
            handleTurn={this.handleTurn}
          />
          <Score
            player1Score={player1Score}
            player2Score={player2Score}
          />
          <Button
            gameOver={gameOver}
            resetGame={this.resetGame}
          />
          <InstructionsModal 
            open={showInstructions}
            onClose={this.toggleInstructions}
          />
          <EndGameModal
            open={showEndGame}
            onClose={this.closeModal}
            winner={winner}
            resetGame={this.resetGame}
          />
        </div>
      </div>
    )
  }
}

export default App;
