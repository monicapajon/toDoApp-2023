import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
    title?: string
    className?: string
}


const Main: FC<Props> = ({ children, title, className }) => {

    return (
        <>
            <main className={className}>
                <h1>{title}</h1>
                {children}
            </main>
        </>
    )

}

export { Main }