import React, {useContext, useEffect} from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import { ThemeContext, themes } from './context/theme-context';

function Blog() {
    const {theme, changeTheme} = useContext(ThemeContext);
    let docBody = document.body
    useEffect(() => {
        switch(theme){
            case themes.light:
                docBody.classList.remove('bg-dark')
                docBody.classList.remove('text-light')
                docBody.classList.add('bg-light')
                docBody.classList.add('text-dark')
                break;
            case themes.dark:
                docBody.classList.remove('bg-light')
                docBody.classList.remove('text-dark')
                docBody.classList.add('bg-dark')
                docBody.classList.add('text-light')
                break;
        }
    }, [theme])

  return (
    <div className='container p-1'>
        <Title text={`My Blog with ${theme} Theme`}/>
        <span style={{position:'absolute', top:10, right: 10}}>
            <Button 
            text={theme === 'Dark' ? 'Light': 'Dark'} 
            onClick={changeTheme} 
            btnClass={theme === 'Dark' && 'btn-light'}/>
        </span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quibusdam
        voluptatum provident non officia eligendi praesentium modi, quos soluta maiores saepe.
        Voluptate odit, laboriosam id laudantium quisquam mollitia quibusdamNatus, quibusdam voluptatum
        provident non officia eligendi praesentium modi, quos soluta maiores saepe. Voluptate odit,
        laboriosam id laudantium quisquam mollitia quibusdam</p>
    </div>
  )
}

export default Blog
