import { useState } from "react"
import { useParams } from "react-router-dom";
import { categoriesService } from "../../services";
//import { SaveCategory } from "../SaveCategory";

const SaveCategory = () => { //useState acepta un estado inicial y devuelve 2 valores catName y setCatName
    const [catName, setCatName] = useState("");//2destructuracion con ecmaScript 6catName es el valor y setCatName es la funcion q se usa para setear ese valor//
    const { categoryId } = useParams();//el useParams me permite ver el parametro que esta en la URL

    const fetchCategory = () => {
        if (categoryId) {
            categoriesService.get(categoryId).then((data) => {
                setCatName(data.name)//al categoryId que me traje de los parametros se lo paso al fetch//le digo al fetch q me vaya a buscar el id a la bd


            });
        };
    };
    if(catName ==='') fetchCategory();//Se hace el if porque si no cada vez q se haga una modificación va a ir a la bd.Que lo haga solo cuando la categoría no esté cargada y si ya esta cargada lo va a seguir haciendo y va a estar pisando todo el tiempo los valores


    const saveCategory = (e: any) => {//1
        e.prevenDefault();//1

        categoriesService.add({ name: catName });//le paso el objeto
    };
    //const { categoryId } = useParams()

    // const fetchCategory = () => {//al categoryId que me traje de los parametros se lo paso al fetch//le digo al fetch q me vaya a buscar el id a la bd
    // if (categoryId) {//si existe voy a category y lo traigo x el getcategorias si no no lo hago
    //       categoriesService.get(categoryId);
    // }




    // };


    // fetchCategory(); //cuando se carga save category e invoca a fetchCategory, si existe una categ id entonces va a hacer un categoryService






    return (
        <>
            <h1>Guardar Categoría</h1>

            <form onSubmit={saveCategory}>
                <div className="form-group">
                    <label htmlFor="name-category">Nombre</label>
                    <input type="text"
                        name="name"
                        id="name-category"
                        value={catName}
                        onChange={(e) => setCatName(e.target.value)} />

                </div>
                <button type="submit" className="btn btn-danger">Agregar</button>

            </form>
        </>
    );



};
export { SaveCategory }