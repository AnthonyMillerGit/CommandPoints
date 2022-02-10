import { useState } from 'react'
import axios from 'axios'



const useForm = () => {
    


    const [cardImg, setCardImg] = useState()
    const [cardName, setCardName] = useState()
    const [cardNumber, setCardNumber] = useState()


    const handleChanges = e => {
        setCardNumber({ ...cardNumber, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.magicthegathering.io/v1/cards/${cardNumber}`)
            .then(res => {
                console.log(res.data)
                setCardImg(res.data.card.imgUrl)
                setCardName(res.data.name)
            })
            .catch(err => {
                console.log(err)
        })
    }  

    return [cardImg, cardName, cardNumber, handleChanges, handleSubmit]

}

export default useForm