import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
    return (
        <Link href="/" className='flex items-end gap-2'>
            <Image src="/logo.png" width={40} height={40} alt='logo' />
            <div className="relative">
                <h1 className='capitalize text-white text-xl font-bold tracking-wide'>
                    mountain
                </h1>
                <div className='absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-emerald-600' />
            </div>
        </Link>
    )
}
