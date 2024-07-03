"use client"
import React, { useState } from 'react'
import { Heading } from './Heading'
import { pricingItems } from '@/constant/pricing'
import { PricingCard } from './PricingCard'
import { PricingPeriod } from '@/constant/interfaces'


export const PricingSection = () => {
    const [period, setPeriod] = useState<PricingPeriod>("monthly")
    const tabStyle =
        "basis-1/2 text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer";

    return (
        <section id="pricing" className="flex flex-col gap-8">
            <Heading title="Find a plan to power your projects" isCentered />
            <div className="max-w-[12rem] w-full mx-auto p-1 flex text-base bg-teal-800 rounded-lg">
                <p className={`${tabStyle} ${period === "monthly" && "bg-emerald-600"}`}
                    onClick={() => setPeriod("monthly")}

                >
                    monthly
                </p>
                <p className={`${tabStyle} ${period === "annually" && "bg-emerald-600"}`}
                    onClick={() => setPeriod("annually")}

                >
                    annually
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pricingItems.map((price, index) => (
                    <PricingCard key={index} {...price} period={period} />
                ))}
            </div>

        </section>)
}
