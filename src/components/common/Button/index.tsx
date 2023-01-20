import { FC } from "react"

type Props = {
    text: string
    isActive: boolean
    variant: 'primary' | 'warning' | 'success' | 'secondary' | 'dark' | 'light' | 'danger'
    type: 'submit' | 'button' | 'reset'
}

const Button: FC<Props> = ({ type, text, variant, isActive }) => {

    return(
        <button 
            type={type}
            onClick={() => {}} 
            className={`btn btn-${variant}`}
            disabled={!isActive}>
            { text }
        </button>
    )

}

export { Button }