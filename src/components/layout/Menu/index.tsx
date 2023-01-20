
import { FC, useState } from "react";
import { Modal } from "../../common"
import { LoginForm } from "../../forms"
import { NavLink } from 'react-router-dom'

const Menu: FC = () => {
    
    const [isOpen, setIsOpen] = useState(false)


    const cambiarPagina = (p: string) => {}

    const abrirModal = () => {
        setIsOpen(true)
    }

    const cerrarModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <nav className="main-menu">
                <div style={{color:'#FFF'}}>Estoy en la pagina:</div>
                <ul className="navbar">
                    <li className="list-item">
                        <NavLink className="link-item" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink className="link-item" to="/services">
                            Servicios
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink className="link-item" to="/contact">
                            Contacto
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink className="link-item" to="/add-category">
                            Agregar Categoría
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <button className="link-item" onClick={abrirModal}>Iniciar sesión</button>
                    </li>
                </ul>
            </nav>
            <Modal title="Inicie sesión para continuar" isOpen={isOpen} action={()=>{}}>
                <button onClick={cerrarModal}>X</button>
                <LoginForm />
            </Modal>
        </>
    )

}

export { Menu }