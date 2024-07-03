import Image from "next/image";
import { FC } from "react";
import { Testimonial } from "@/constant/interfaces";
interface TestimonialCardProps extends Testimonial { }

const quote = <svg className="h-24 w-24 text-teal-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /></svg>

export const TestimonialCard: FC<TestimonialCardProps> = ({
    imageURL,
    name,
    role,
    review,
}) => {
    return (
        <article className="flex flex-col items-center
         md:items-start gap-4 py-6 px-4 rounded-lg
          hover:bg-teal-800 capitalize">
            {quote}
            <p className=" text-xl text-center md:text-start   ">
                {review}
            </p>
            <div className="flex item-start gap-2 ">
                <Image src=
                    {imageURL}
                    width={40}
                    height={40}
                    alt={name}
                    className=" w-20 h-20 rounded-full object-contain border-2 border-emerald-600"
                />
            </div>
            <h4 className="text-teal-100 font-semibold tracking-wide">{name}</h4>
            <small className="text-emerald-600 font-semibold">{role}</small>

        </article>
    )
}