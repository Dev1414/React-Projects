import React, { useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import Card from './Card'
import './cardGame.css'

// Units

import SpearManImg from './svg/spear-man.svg'
import WarHorseMan from './svg/warhorse-svgrepo-com.svg'
import Archer from './svg/archer.svg'


function CardGameUI() {

    const [start, setStart] = useState(false)

    const startGame = () => {
        setStart(true);
    }

    document.body.style.backgroundColor = '#170536'
    document.body.style.color = '#bab6bf'

    return (
        <div className='container text-center'>
            {!start ? (<section className='text-center'>
                <Title text={'Card Game'}/>
                <Button text={'Start'} btnClass={'btn-success btn-lg'} onClick={startGame}/>

                <Title classes={'subtitle'} text='Rules: '/>
                <ul className='fs-lg d-flex flex-column' style={{gap: 15}}>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum consequuntur perspiciatis, provident ullam deleniti molestiae dolorum magnam corrupti quos maiores quibusdam repellat vero soluta? Deserunt voluptate ducimus suscipit eveniet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum consequuntur perspiciatis, provident ullam deleniti molestiae dolorum magnam corrupti quos maiores quibusdam repellat vero soluta? Deserunt voluptate ducimus suscipit eveniet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum consequuntur perspiciatis, provident ullam deleniti molestiae dolorum magnam corrupti quos maiores quibusdam repellat vero soluta? Deserunt voluptate ducimus suscipit eveniet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum consequuntur perspiciatis, provident ullam deleniti molestiae dolorum magnam corrupti quos maiores quibusdam repellat vero soluta? Deserunt voluptate ducimus suscipit eveniet.</li>
                </ul>
            </section>
            ):(
                <>
                <Title text={'0-1'}/>
                <main className='container m-auto game-board'>
                    <section className='player_1'>
                        <Card player={'player_1'} unitTypeName={'Sward Cavalry'} unitTypeImg={WarHorseMan}/>
                        <Card player={'player_1'} unitTypeName={'Spear Man'} unitTypeImg={SpearManImg}/>
                        <Card player={'player_1'} unitTypeName={'Archer'} unitTypeImg={Archer}/>
                        <Card player={'player_1'} unitTypeName={'Spear Man'} unitTypeImg={SpearManImg}/>
                    </section>
                    <section className='fog-of-war'></section>
                    <section className='player_2'>
                        <Card player={'player_2'} unitTypeName={'Spear Man'} unitTypeImg={SpearManImg}/>
                        <Card player={'player_2'} unitTypeName={'Sward Cavalry'} unitTypeImg={WarHorseMan}/>
                        <Card player={'player_2'} unitTypeName={'Spear Man'} unitTypeImg={SpearManImg}/>
                        <Card player={'player_2'} unitTypeName={'Archer'} unitTypeImg={Archer}/>
                    </section>
                </main>
                </>
            )}
        </div>
    )
};

export default CardGameUI;
