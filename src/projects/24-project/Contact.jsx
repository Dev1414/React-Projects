import React from 'react'
import styled from 'styled-components'
import {FaUserAlt, FaPhone} from 'react-icons/fa'

const ContactStyle = styled.li`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    max-width: 700px;
    margin: auto;
    padding: 0.2rem 0.4rem;
    border-bottom: 1px solid #666;
    &:hover {
        cursor: pointer;
        background-color: #666;
    }
    img {
        height: 50px;
        border-radius: 50;
    }
`

export default function Contact({icon, firstName, lastName, phoneNum}) {
    return <ContactStyle>
        <div>
            {!icon ? <FaUserAlt className='text-info'/> :
            <img src={icon}/> }
        </div>
        <div>{firstName}</div>
        <div>{lastName}</div>
        {phoneNum}
        <FaPhone className='text-success ml-1'/>
    </ContactStyle>
}
