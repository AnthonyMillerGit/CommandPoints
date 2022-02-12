import React, { useState } from 'react'
import axios from 'axios'


const MainBody = () => {
    const iState = {
        cards:  [],
        cardName:  ''
    }


    const [cards, setCards] = useState(iState.cards)


    const handleChanges = e => {
        setCards( {cards: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.magicthegathering.io/v1/cards`)
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MainBody;