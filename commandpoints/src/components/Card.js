import React from 'react'
import {cards} from './MainBody'

const Cards = () => {




    return (
        <div>                   
            {cards.map(card => {
                if (card.hasOwnProperty('imageUrl')) {
                return (
                    <div>
                        <h3>{card.name}</h3>
                        <img alt='' src={card.imageUrl}/>
                    </div>)}
                else {
                    return null
                }
            })}         
        </div>
    )

}

export default Cards;