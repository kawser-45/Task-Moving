import React, { useState } from 'react'

function Panel({title, isActive, onActive, index}) {

// const [active, setActive] = useState(false);

  return (
    <div className='py-12 border-2'>
        <h1>{title}</h1>
        {
          isActive &&
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, rerum? </p>
        }

        {
          !isActive &&
        <button onClick={() => onActive(index)} className='px-3 py-1 bg-red-700'>Click Now</button>
        }
    </div>
    
  )
}

export default Panel