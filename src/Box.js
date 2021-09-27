import React from 'react';
import './Box.css'

const Box = ( {id, color, width, height, removeBox}) => {
  const style = {
    backgroundColor: color,
    width: parseInt(width),
    height: parseInt(height)
  }

  return (
    <div className="Box">
      <div className="Box-box" style={style}></div>
      <button className="Box-btn" onClick={removeBox}>X</button>
    </div>
  )
}

export default Box;