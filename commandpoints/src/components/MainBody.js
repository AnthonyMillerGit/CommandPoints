import React, { useState } from 'react'
import axios from 'axios'



const MainBody = () => {
    const iState = {
        cards:  [],
        cardName:  ''
    }

    const [cardName, setCardName] = useState(iState.cardName)
    const [cards, setCards] = useState(iState.cards)



    const handleChanges = e => {
        setCardName({ ...cardName, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
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
                        onChange={handleChanges}
                     />
                </label>
                <div>
                    {cards.map((card) => (
                        <p>{card.name}</p>
                    ))}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MainBody;