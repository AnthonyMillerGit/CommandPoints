import React, { useState } from 'react'
import axios from 'axios'


const initValues = {
    cards:[],
}



const MainBody = () => {

    const [cards, setCards] = useState(initValues.cards)


    const handleChanges = e => {
        setCards(...cards, e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.get(`https://api.magicthegathering.io/v1/cards?name=ugin`)
        .then(res => {
            console.log(res.data.cards)
            setCards(res.data.cards)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Card Name:
                    <input
                        name="cardName"
                        type="text"
                        onChange={() => handleChanges}
                     />
                </label>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MainBody;