import React from 'react'

const Navbar = ({toggleInstructions}) => {
  return (
    <div className="ui inverted menu">
      <div className="item instructions" onClick={toggleInstructions}>
        How to Play
      </div>
    </div>
  )
}

export default Navbar
