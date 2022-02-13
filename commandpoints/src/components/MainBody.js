import React, { useState } from 'react'
import axios from 'axios'






const MainBody = () => {

    const [name, setName] = useState({ name : '' })
    const [cards, setCards] = useState([])


    const handleChanges = e => {
        setName({[e.target.name]:e.target.value})
    }
    console.log(cards)
    console.log(name)


    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.magicthegathering.io/v1/cards/?name=${name.name}`)
        .then(res => {
            console.log(name)
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
                        name="name"
                        type="text"
                        onChange={handleChanges}
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