import { useState } from "react"
import { categoriesService } from "../../services"
import { Category } from "../../types"
import { Link } from "react-router-dom"

const Categories = () => {

    const [categories, setCategories] = useState<Category[]>([])//#

    const fetchCategories = () => {//esto se trabaja de otra manera q lo vamos a hacer mas adelante
        categoriesService.getAll().then((data) => {
            setCategories(data as Category[]);
        })

        //const [categories, setCategories] = useState([])
    }
    fetchCategories();





    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((cat) => {//recorre el map y me devuelve un cat pero hago un array de category en (3), entonces cuando hago cat. veo q me tre un id y un name
                    return (
                        <tr>
                            <td>
                                <Link to={`/categories/save/${cat.id}`}>{cat.id}</Link></td>
                            <td>{cat.name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export { Categories };