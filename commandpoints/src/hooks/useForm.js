import {useState} from 'react'

const initialValue = {
    cardNumber: '',
}



const useForm = () => {
    

    const [values, setValues] = useState(initialValue)


    const handleChanges = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()

    }

    return [values, handleChanges, handleSubmit]

}

export default useForm