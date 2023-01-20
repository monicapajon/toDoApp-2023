import { useParams } from "react-router-dom"

const SaveUser = () => {
    const {userId, pepe} = useParams()//Hooks
    return (
        <h1>Estoy en SaveUser editando el usuario { userId }- { pepe } </h1>

    )
}

export { SaveUser }