import { Feature } from "@/constant/interfaces"
import Image from 'next/image'
import { FC } from "react"
import { Heading } from "./Heading"

interface FeatureBlockProps extends Feature {
}
export const FeatureBlock: FC<FeatureBlockProps> = ({ content, title, imageURL }) => {
    return (
        <article className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
            <Image
                src={imageURL}
                width={370}
                height={370}
                alt="feature"
                className="basis-5/12 w-full shadow-lg" />
            <div className="basis-6/12 flex flex-col md:text-center lg:text-start gap-4 md:gap-6">
                <Heading title={title} />
                <p className="lg:max-w-[40rem]">{content}</p>
            </div>
        </article>
    )
}