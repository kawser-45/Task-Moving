import React, { useState } from 'react'




function Banner() {

    const [test, setTest] = useState({
        // email:'',
        // message:'',
        // phone:'',
        // remote:'',
    })
    
    let clickHandler = (e) => {
        
        if (e.target.name == 'name') {
            setTest({
                ...test,
                remote_wow: e.target.value,
            });
        }
        if (e.target.name == ' message') {
            setTest({
                ...test,
                message: e.target.value,
            });
        }
        if (e.target.name == ' phone') {
            setTest({
                ...test,
                phone: e.target.value,
            });
        }
        if (e.target.name == ' remote') {
            setTest({
                ...test,
                remote: e.target.value,
            });
        }
    }



  return (
    <>
      <form className='pl-7 pt-7'>
 
      <input  onChange={clickHandler } className='pr-6 border' type="text" name=' name' placeholder=' name' />
      <br />

      <input  onChange={ clickHandler } className='pr-6 border' type="text" name=' message' placeholder=' message' />
      <br />

      <input onChange={ clickHandler }  className='pr-6 border' type="text" name=' phone' placeholder=' phone' />
      <br />

      <input  onChange={clickHandler } className='pr-6 border' type="text" name=' remote' placeholder=' remote' />
    </form>

        
       <div className='pl-7 pt-7'>
       <p>name:{test.remote_wow}</p>
        <p>massage:{test.message}</p>
        <p>phone:{test.phone}</p>
        <p>remote:{test.remote}</p>
       </div>

    </>
  )
}

export default Banner