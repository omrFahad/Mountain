import { Pricing } from "@/constant/interfaces"
import { FC } from "react"
import { Button } from "./Button"
import { PricingPeriod } from '@/constant/interfaces'

interface PricingCardProps extends Pricing {
    period: PricingPeriod
}

const check = <svg className="text-emerald-600 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m243.31 90.91l-128.4 128.4a16 16 0 0 1-22.62 0l-71.62-72a16 16 0 0 1 0-22.61l20-20a16 16 0 0 1 22.58 0L104 144.22l96.76-95.57a16 16 0 0 1 22.59 0l19.95 19.54a16 16 0 0 1 .01 22.72" /></svg>
export const PricingCard: FC<PricingCardProps> = ({
    title,
    description,
    monthlyPrice,
    annuallyPrice,
    features,
    isMostPopular,
    glowPosition,
    period }) => {
    return (<article className={`relative w-full py-6 px-4 flex flex-col
     space-y-4 lg:space-y-6
      ${isMostPopular ? "border-2 border-emerald-600 bg-teal-800 "
            : "border border-teal-700"}
        rounded-lg overflow-hidden `}>

        <figure className={`absolute w-72 h-60 bg-emerald-600 -z-10 
        rounded-full blur-3xl opacity-20 -top-12
         ${glowPosition === "left" ? "-left-8" : glowPosition === "right" ?
                "-right-8" : glowPosition === "center" ? "-top-6" : "none"}`} />
        {isMostPopular && (
            <p className="absolute top-5 right-6 bg-emerald-600
                 text-teal-50 text-base font-semibold capitalize py-2 px-3 rounded-3xl">most popular</p>
        )}
        <h1 className="text-teal-100 font-bold text-lg capitalize">
            {title}
        </h1>
        <p className="text-teal-200">{description}</p>

        <h1 className="text-teal-50 font-extrabold text-4xl">
            ${period == "monthly" ? monthlyPrice : annuallyPrice}
            <small className="text-base text-teal-300 font-semibold ps-1 ">
                /{period === "monthly" ? "monthly" : "annualy"}
            </small>
        </h1>
        <Button variant={isMostPopular ? "primary" : "secondary"} isFullSize>
            buy paln
        </Button>
        <ul className="space-y-4 ">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                    {check}
                    {feature}
                </li>
            ))}
        </ul>

    </article>
    )
}
