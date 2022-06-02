import React from 'react'

const Cross = (props) => {
  return (
    <div className='cross' onClick={props.onClick}>{props.game}</div>
  )
}

export default Cross;