import { FC } from "react"

interface HeadingProps {
    title: string
    isCentered?: boolean
}
export const Heading: FC<HeadingProps> = ({ title, isCentered }) => {
    return (
        <h1 className={`${isCentered && "text-center"} bg-clip-text text-transparent 
        bg-gradient-to-tr from-emerald-200 via-emerald-600 to-emerald-200
            font-extrabold text-3xl  sm:text-4xl lg:text-5xl overflow-hidden p-2 `}>{title}</h1>
    )
}
