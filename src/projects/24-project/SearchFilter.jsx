import React from 'react'
import Button from '../components/Button'

import {FaAddressBook, FaArrowsAltV} from 'react-icons/fa'

function SearchFilter({handleToggleContacts, handleToggleSortAZ, handleSearchContact}) {
  return (
    <section className='text-center'>
        <Button 
        btnClass={''} 
        icon={<FaAddressBook/>} 
        text=' ' 
        onClick={handleToggleContacts}/>

        <input 
        type="text" 
        placeholder='Search by firstname' 
        className='mb-2 mx-1' 
        style={{padding: '.3rem .5rem'}}
        onChange={(e) => handleSearchContact(e.target.value)}
        />

        <Button btnClass={''} icon={<FaArrowsAltV/>} text=' ' onClick={handleToggleSortAZ}/>
    </section>
  )
};

export default SearchFilter;
