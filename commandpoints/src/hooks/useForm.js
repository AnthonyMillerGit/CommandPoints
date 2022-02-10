import {useState} from 'react'

const initialValue = {
    cardNumber: '',
}



const useForm = () => {
    

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

    return [values, handleChanges, handleSubmit]

}

export default useForm