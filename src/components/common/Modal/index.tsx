import { FC, ReactNode } from "react"
import { Button } from "../Button"
import './styles.scss'

type Props = {
    title: string
    children: ReactNode
    isOpen: boolean
    action: () => void
}

const Modal: FC<Props> = ({ children, title, action, isOpen }) => {

    if(!isOpen) return null

    return (
        <div className="custom-modal">
            <div className="custom-modal-header">
                <h2>{ title }</h2>
            </div>
            <div className="custom-modal-body">
                { children }
            </div>
            <Button text="Enviar" type="button" variant="primary" isActive={false} />
        </div>
    )
}

export { Modal }