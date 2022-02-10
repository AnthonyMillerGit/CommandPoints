import React, { useState } from 'react'
import axios from 'axios'



const MainBody = () => {

    const [cardName, setCardName] = useState()



    const handleChanges = e => {
        setCardName({ ...cardName, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.magicthegathering.io/v1/cards?=ugin`)
            .then(res => {
                console.log(res.data)
                
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