import React from 'react'
import Contact from './Contact'
export default function ContactList({ contacts }) {

    const generateRandomImg = () => {
        const types = [
            'male',
            'female',
            'human',
            'identicon',
            'initials',
            'bottts',
            'avataaars',
            'jdenticon',
            'gridy',
            'micah'
        ]
        console.log(types)
        return types[Math.floor(Math.random() * types.length)]
    };

    return (
        <ul>
            {contacts.map((contact) => {
                return (
                    <Contact 
                    icon={`https://api.dicebear.com/6.x/${generateRandomImg()}/john.svg?`} 
                    firstName={contact.first_name} 
                    lastName={contact.last_name} 
                    phoneNum={contact.phone} />
                )
            })} 
        </ul>
    )
};
