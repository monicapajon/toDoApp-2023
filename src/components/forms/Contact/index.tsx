import { useState } from "react"
import { Alert } from "react-bootstrap"
import { Button } from "../../common"

const ContactForm = () => {

    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const [contactData, setContactData] = useState()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        fetch('https://ava-9f390-default-rtdb.firebaseio.com/vehicles.json', {
            method: 'POST',
            body: JSON.stringify({email, subject, message})
        })
    }


    fetch('https://ava-9f390-default-rtdb.firebaseio.com/posts.json')
        .then(response => response.json())
        .then(data => setContactData(data))



    return(
        <form onSubmit={handleSubmit}>
            {JSON.stringify(contactData)}
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e)  => { setEmail(e.target.value) }}
                />
            </div>
            <div>
                <label htmlFor="">Asunto</label>
                <input 
                    type="text" 
                    value={subject} 
                    onChange={(e)  => { setSubject(e.target.value) }}
                />
            </div>
            <div>
                <label htmlFor="">Mensaje</label>
                <textarea 
                    onChange={(e)  => { setMessage(e.target.value) }}>
                    {message}
                </textarea>
            </div>

            <Button 
                text="Enviar"
                type="submit" 
                variant="primary" 
                isActive={email !== "" && subject !== "" && message !== ""} />

            {(email === "" || subject === "" || message === "") &&
                <Alert variant="danger">
                    Falta rellenar datos
                </Alert>}
        </form>
    )

}

export { ContactForm }