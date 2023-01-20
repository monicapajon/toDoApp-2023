import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Alert: FC<Props> = ({children}) => {

    return(
        <div className="alert">
            {children}
        </div>
    )

}

export { Alert }