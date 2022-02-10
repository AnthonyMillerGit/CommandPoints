import React, { useEffect, useState} from 'react'
import axios from 'axios'



const initialValue = {
    cardNumber: '',
}




const MainBody = () => {

    const [values, setValues] = useState(initialValue)

    const inputChange = (name, value) => {
        setValues({
            ...values,
            [name]: value
        })
    }


    const handleChanges = e => {
        const { name } = e.target
        inputChange(name)
    }

    const handleSubmit = e => {
        e.preventDefault()

    }


    // useEffect(() => {
    //     axios.get(`https://api.magicthegathering.io/v1/cards/${cardNumber}`)
    //     .then(res => {
    //         console.log(res.data)
    //         setCardImg(res.data.card.imageUrl)
    //         setCardName(res.data.card.name)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },[])   



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Card Number:
                    <input
                        name="cardNumber"
                        type="text"
                        value={values.cardNumber}
                        onChange={handleChanges}
                     />
                </label>
            </form>
        </div>
    )
}

export default MainBody;