import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { clients } from "@/constant/clients";
import Image from "next/image";
import Link from "next/link";
import { features, featuresBlock } from "@/constant/features";
import { FeatureCard } from "@/components/FeatureCard";
import { FeatureBlock } from "@/components/FeatureBlock";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/constant/testmonials";
const arrowRight = <svg className="inline ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M1.987 2.953a2.546 2.546 0 0 1 2.816-.473l16.51 7.363a2.338 2.338 0 0 1 0 4.315L4.802 21.52a2.546 2.546 0 0 1-2.816-.473c-.69-.659-1.009-1.735-.458-2.767l3.152-5.904l.662.354l-.662-.354a.789.789 0 0 0 0-.752L1.53 5.72c-.55-1.031-.232-2.108.458-2.767m1.036 1.085c-.274.262-.36.62-.17.976l-.662.353l.661-.353l3.153 5.904c.363.68.363 1.485 0 2.165l-3.153 5.904c-.19.356-.103.714.171.976c.28.267.72.387 1.169.187l16.51-7.362c.73-.326.73-1.25 0-1.575L4.192 3.85a1.047 1.047 0 0 0-1.169.188" clip-rule="evenodd" /></svg>
const getStarted = <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.95 16.264s-1.703 2.54-.707 3.535c.995.996 3.535-.707 3.535-.707" /><path fill="currentColor" fill-rule="evenodd" d="M20.506 3.536a1 1 0 0 1 .268.928l-.317 1.402a9 9 0 0 1-2.414 4.375l-4.644 4.644c1.027 1.272 1.36 2.48 1.1 3.632c-.271 1.2-1.16 2.086-1.712 2.637l-.06.06a1 1 0 0 1-1.564-.193L9.17 17.696a1 1 0 0 0-.15-.192l-2.57-2.568l-.76-.456l3.459-3.843a.343.343 0 0 0 .007.005L13.8 6a9 9 0 0 1 4.376-2.414l1.402-.318a1 1 0 0 1 .928.269zM8.322 10.062c-.969-.565-1.9-.722-2.797-.52c-1.2.272-2.086 1.16-2.637 1.713l-.06.059a1 1 0 0 0 .193 1.564l1.796 1.078z" clip-rule="evenodd" /></g></svg>

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">'
        <Image
          src="/brain.PNG"
          width={1920}
          height={1080}
          alt="world"
          className="  absolute
           -z-50  -top-30 left-0  opacity-15  "

        />
        {/* Home Section */}
        <section id="home" className="relative">
          <figure className="spot w-96 lg:w-[520px] h-96 bg-emerald-600 top-16 -left-40" />
          <figure className="spot w-96 lg:w-[430px] h-96 bg-teal-600 bottom-16 md:bottom-44 -right-20" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">

              <p className="my-10 capitalize border border-teal-700
             py-1 px-3 text-xs rounded-3xl cursor-pointer
             hover:border-emerald-600 hover:bg-teal-800
             shadow-md transition-all ">
                new features are now available
                {arrowRight}
              </p>
              <Heading title="A CRM dashboard for engineering teams" />
              <p className=" max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering team's productivity with Mounatain CRM
                dashboard that streamlines project management, collaboration,
                and data-driven decision-making.

              </p>
              <div className="flex items-center gap-4">
                <Button >
                  Get started
                  {getStarted}
                </Button>
                <Link href="#pricing">
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src='/dashboard.svg'
              width={600}
              height={382}
              alt="banner"
              className="mx-auto shadow-xl rounded-lg"

            />
          </div>
        </section>
        {/* Home Section */}
        {/* Client Section */}
        <section
          id="clients"
          className=" max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.iamgeURL}
              width={120}
              height={80}
              alt={client.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}

        </section>
        {/* Client Section */}
        {/* Feature Section */}
        {/* Part One */}
        <section id="features" className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/star.PNG"
              width={1920}
              height={1080}
              color={"white"}
              alt="network"
              className="  absolute
           -z-50 w-50 h-50 -top-0 left-0  opacity-25 "
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Enhanced capabilities designed to streamline lead management for maximum efficiency." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio
                omnis dolores. Fugit optio illum iste beatae deleniti id perspiciatis
                ipsa nemo, sint at. Quis hic doloremque aperiam voluptas velit?

              </p>
              <Button>Get Started</Button>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
          {/* Part One */}
          {/* Part Two */}
          {featuresBlock.map((feature, index) => (
            <FeatureBlock key={index} {...feature} />
          ))}
          {/* Part Two */}
        </section>
        {/* Feature Section */}
        {/* Pricing Section */}
        <PricingSection />
        {/* Pricing Section */}
        {/* Testimonials section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Customers" isCentered />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        {/* Testimonials section */}

        {/* Contact section */}
        <section id="contact">
          <div className="bg-teal-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Let’s try our service now!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Experience the power of Ocean CRM dashboard for engineering
                teams. Boost productivity and streamline collaboration. Get
                started today!
              </p>
            </div>
            <Button>
              get started
              {arrowRight}
            </Button>
          </div>
        </section>
        {/* Contact section */}
      </div>
    </main>
  );
}
