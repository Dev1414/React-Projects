import React, { useState, useRef, useEffect } from 'react'
import Button from '../components/Button'
import FormGroup from '../components/FormGroup'
import AnimatedText from 'react-animated-text-content'

function TextAnimation() {
  const [inputValue, setInputValue] = useState('');
  const [animatedText, setAnimatedText] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClear = () => {
    setAnimatedText(inputValue)
    setInputValue(() => '')
  }

  const inputText = useRef(null);
    useEffect(() => {
      inputText.current.focus()
    })

  return (
    <div className='container text-center'>
        <form className='container d-flex mt-4' onSubmit={(e) => e.preventDefault()}>
          <FormGroup labelText={'Type in your text to be animated'} 
                    inputType={'text'} 
                    placeholder={'text here'} 
                    values={inputValue}
                    onChange={handleInputChange}
                    reference={inputText}
                    />
            <Button text={'Clear'} btnClass={'btn-large btn-danger'} onClick={handleClear}/>
        </form>
        { animatedText && ( 
          <AnimatedText className='title' type='char' interval={'00.4'} duration={'0.1'} animation={{
            x: '-50px',
            y: '150px',
            ease: 'linear'
          }}>
            {animatedText}
          </AnimatedText> )}
    </div>
  )
};

export default TextAnimation;
