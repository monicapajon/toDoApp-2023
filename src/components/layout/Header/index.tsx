import { FC } from "react"
import { Menu } from "../Menu"


const Header: FC = () => {

    return (
        <header className="main-header">
            <div className="container">
                <Menu />
            </div>
        </header>
    )

}

export { Header } 