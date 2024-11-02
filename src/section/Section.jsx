import React, { useState } from 'react'
import Panel from './Panel'

function Section() {
  // const [active, setActive] = useState(false)
  const [index, setIndex] = useState(1);

  let activeHandler = (indexNumber) =>{
    setIndex(indexNumber)
  }
  return (
    <>
     <Panel isActive={index === 0} index={0} onActive={activeHandler} title={'class one'}/>
     <Panel isActive={index === 1} index={1} onActive={activeHandler} title={'class tow'} />
     <Panel isActive={index === 2} index={2} onActive={activeHandler} title={'class three'}/>
    </>
  )
}

export default Section