import { Feature } from "@/constant/interfaces"
import Image from 'next/image'
import { FC } from "react"

interface FeatureCardProps extends Feature {
}
export const FeatureCard: FC<FeatureCardProps> = ({ content, title, imageURL }) => {
    return (
        <article className="w-full md:max-w-[30rem] lg:max-w-[36rem] border-2 border-transparent rounded-lg py-4 px-8
         hover:bg-teal-800 hover:border-emerald-600 cursor-pointer  ">
            <article className="flex flex-col items-center md:items-start lg:flex-row lg:items-center gap-6">
                <Image src={imageURL} width={128} height={128} alt={title} />
                <div className="flex flex-col text-center md:text-start space-y-1">
                    <h4 className="text-teal-100 font-bold text-base">{title}</h4>
                    <p className="text-sm leading-6">{content}</p>
                </div>
            </article>
        </article>
    )
}
