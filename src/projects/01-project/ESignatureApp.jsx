import {useState} from 'react'
import Title from '../components/Title'
import React from 'react'

export default function ESignatureApp() {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value)
    console.log('EVT changed!')
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
    console.log('EVT changed!')
  }

  const inputStyle = {
    border: "none",
    borderBottom: '2px dotted',
    outline: 'none',
    padding: '0.35rem'
  }

  return (
    <div className='container text-center'>
      <Title classes={'title'} text={name}/>
      <Title classes={'main-title mb-4'} text={date}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae eaque facilis amet eveniet rerum fugiat, qunputas neque ex? Deleniti tempore magnam iure dicta, ducimus beatae aspernatur officia minus ullam?</p>

      <footer className='d-flex' style={{justifyContent: 'space-around', position: 'relative', top: '40vh'}}>
        <input type="date" value={date} style={inputStyle} onChange={handleDateChange}/>
        <input type="text" value={name} style={inputStyle} onChange={handleNameChange}/>
      </footer>
    </div>
  )
}
