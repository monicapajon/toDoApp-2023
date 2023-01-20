import { useState } from "react"
import { categoriesService } from "../../services"

const Categories = () => {

    const [categories, setCategories] = useState([])

    const fetchCategories = () => {//esto se trabaja de otra manera q lo vamos a hacer mas adelante
        categoriesService.getAll().then(data => {
            setCategories(data)
        })

        //const [categories, setCategories] = useState([])
    }
    fetchCategories();





    return (
        <div>Estoy en Categorias</div>

    )
}

export { Categories }