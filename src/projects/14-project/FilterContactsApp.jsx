import React, { useRef, useEffect,useState } from 'react'
import Title from '../components/Title'
import ContactsData from './Data.json'
import Contact from './Contact';

function FilterContactsApp() {
    let inputSearch = useRef(null);

    useEffect(() => {
        inputSearch.current.focus();
    })

    const [searchContact, setSearchContact] = useState('');

  return (
        <div className='text-center'>
            <Title text={'FilterContactsApp'} />
            <input 
            type="text" 
            placeholder='Search by name' 
            className='mb-2 p-1' 
            style={{ padding: '.3rem .5rem' }}
            ref={inputSearch}
            onChange={(e) => setSearchContact(e.target.value)}
            />

            <section className='d-flex' style={{gap: 15, maxWidth: 1600, margin: 'auto'}}>
                {ContactsData.filter((contact) => {
                    if (searchContact === ''){
                        return contact;
                    }else if (
                        contact.first_name
                            .toLocaleLowerCase()
                            .includes(searchContact.toLocaleLowerCase())
                    ){
                        return contact
                    }
                    
                }) .map((contact) => (
                    <Contact contact={contact} cardColor={'card-success'} textColor={'text-success'}/>
                    ))}
            </section>
        </div>
    )
}

export default FilterContactsApp;
