import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);
  return (
    <div className='bg-slate-500 w-[200px]  text-center ml-20 my-24 border'>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)} className='px-4 py-2 bg-blue-600'>Click Me</button>
    </div>
  )
}

export default Counter