const chkLine = (a,b,c,d) => {
    // Check first cell non-zero and all cells match
    return ((a !== 0) && (a === b) && (a === c) && (a === d));
}

const chkWinner = (bd) => {
    // Check down
    for (let r = 0; r < 3; r++)
        for (let c = 0; c < 7; c++)
            if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                return bd[r][c];

    // Check right
    for (let r = 0; r < 6; r++)
        for (let c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                return bd[r][c];

    // Check down-right
    for (let r = 0; r < 3; r++)
        for (let c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                return bd[r][c];

    // Check down-left
    for (let r = 3; r < 6; r++)
        for (let c = 0; c < 4; c++)
            if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                return bd[r][c];

    return null;
}

const updateBoard = (prevBoard, columnNum, playerNum) => {
  let newBoard = copyBoard(prevBoard)
  let lowestRow = newBoard.length - 1
  let valid = false
  while(lowestRow >= 0){
    if(newBoard[lowestRow][columnNum] === 0){
      newBoard[lowestRow][columnNum] = playerNum
      valid = true
      break;
    }
    lowestRow--
  }
  let winner = chkWinner(newBoard)
  let draw = false
  if(!winner){
    draw = checkDraw(newBoard)
  }
  return [newBoard, valid, winner, draw]
}

const copyBoard = (prevBoard) => {
  let newBoard = []
  for(let i = 0; i < prevBoard.length; i++){
    let oldRow = prevBoard[i]
    let newRow = []
    for(let j = 0; j < oldRow.length; j++){
      newRow.push(oldRow[j])
    }
    newBoard.push(newRow)
  }
  return newBoard
}

const checkDraw = (board) => {
  let draw = true
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if(board[i][j] === 0){
        draw = false
      }
    }
  }
  return draw
}

export {updateBoard, checkDraw}
