import React from 'react'
import { Logo } from './Logo'
import { navLinks } from '@/constant/nav-links'
import Link from 'next/link'
import { ResponsiveNav } from './ResponsiveNav'

export const Navbar = () => {
    return (
        <header className=' fixed top-0 left-0 w-full bg-teal-900/50 backdrop-blur-md z-30 '>
            <div className="relative container py-6 flex justify-between transition-all ">
                <Logo />
                <nav className='hidden md:flex gap-8 capitalize'>
                    {navLinks.map((link, index) => (
                        <Link key={index}
                            href={`#${link}`}
                            className='text-base font-semibold tracking-wide text-teal-100 rounded-full py-1 px-2 border-y-2 border-solid border-emerald-600'>
                            {link}
                        </Link>
                    ))}
                </nav>
                <ResponsiveNav />
            </div>
        </header>
    )
}
