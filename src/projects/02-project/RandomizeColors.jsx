import React from 'react'
import Title from '../components/Title'

export default function RandomizeColors() {

    const randomColor = () => {
        const color = (`#${(Math.floor(Math.random() * 999999) + 1)}`)
        console.log(color)
        return color
    }

    const handleClick = (e) => {
        let body = document.querySelector('body');
        body.style.backgroundColor = randomColor()
        e.target.style.backgroundColor = randomColor()               // This changes the background color of the button 
    }


    return (
        <div className='container m-auto text-center'>
            <Title text={'Randomize Color'} classes={'mb-4'} /> 

            <button className='btn btn-danger' onClick={handleClick}>Click me</button>
            
        </div>
    )
}
