import { mapToArray } from '../../helpers/mapToArray';
import { Category } from '../../types'
//aqui el fetch me va a ir a buscar el id a la bd

// }

// const removeCategory = (id: string) => {

// }
const getAll = async () => {

    const response = await fetch(
        `https://todoapp-13-4fbd4-default-rtdb.firebaseio.com/categories.json`//no se le pasa id porque son todas las categorías
    );
    const data = await response.json();
    return mapToArray(data);// se hace cuando traigo varios objetos(el data) con el fetch y necesito un array y así funciona. Si no en la consola me dice que el map no es una función

};


const get = async (id: string) => {//este id que lo tengo como parametro

    const response = await fetch(
        `https://todoapp-13-4fbd4-default-rtdb.firebaseio.com/categories/${id}.json`//lo estoy llendo a buscar acá y ahora puedo traer la categ por id
    );//con el await nos tenemos q quedar esperando la respuesta del fetch

    const data = await response.json();
    return data;
};

type Payload = Omit<Category, "id"> //Es un Utility Types, entre"" pongo lo q quiero q omita

//const add = (category: Category) => {

//} lo cambio por lo de abajo, porq category aún no tiene id//

const add = (category: Payload) => {

    const options: RequestInit = {
        method: 'POST',//porque guardamos datos
        body: JSON.stringify(category),
    }
    fetch(
        'https://todoapp-13-4fbd4-default-rtdb.firebaseio.com/categories.json', options
    );
    //fetch a la api y le paso un options

};


export const categoriesService = { getAll, get, add }





