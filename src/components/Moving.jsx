import { useState } from 'react';

export default function Moving() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  // const[name, setName] = useState('')
  // const[phone, setPhone] = useState('')
  // const[subject, setSubject] = useState('')
  // const[message, setMessage] = useState('')


const [formData, setFormData ] = useState({
  // name: '',
  // phone: '',
  // subject: '',
  // message: '',
})


  let changeHandler = (e) => { 
    
    if (e.target.id == 'name') {
      setFormData ({
        ...formData,
        name: e.target.value,
      });
    }
    if (e.target.id == 'phone') {
      setFormData ({
        ...formData,
        phone: e.target.value,
      });
    }
    if (e.target.id == 'subject') {
      setFormData ({
        ...formData,
        subject: e.target.value,
      });
    }
    if (e.target.id == 'message') {
      setFormData ({
        ...formData,
        message: e.target.value,
      });
    }
  }

  return (
    <>
    {/* <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100',
        height: '100',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div> */}


    <form className='pl-7 pt-7'>
      <input  onChange={ changeHandler } className='pr-6 border' type="text" id='name' placeholder='name' />
      <br />

      <input  onChange={ changeHandler } className='pr-6 border' type="text" id='phone' placeholder='phone' />
      <br />

      <input onChange={ changeHandler }  className='pr-6 border' type="text" id='subject' placeholder='subject' />
      <br />

      <input  onChange={ changeHandler } className='pr-6 border' type="text" id='message' placeholder='message' />
    </form>
    
    <br />
    <br />
    <br />
    <br />


    <div className='pl-7 1'>
      <p> Name:{formData.name}</p>
      <p>phone:{formData.phone}</p>
      <p>subject:{formData.subject}</p>
      <p>message:{formData.message}</p>
    </div>

    </>

  )
}