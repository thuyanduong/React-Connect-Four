import {generateRow} from './Game'

const Drop = ({handleHover, hoverColumn, currentPlayer, handleTurn}) => {
  let dropArray = [0,0,0,0,0,0,0]
  if(hoverColumn !== null){
    dropArray.splice(hoverColumn, 1, currentPlayer)
  }
  return (
    <div className="turn">
      <div className="game-row">
        {generateRow(dropArray, null, handleHover, handleTurn)}
      </div>
    </div>
  )
}



export default Drop
