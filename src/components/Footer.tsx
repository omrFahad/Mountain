import React from 'react'
import { Logo } from '@/components/Logo'
import { footerColumns } from '@/constant/footer-links'


const x = <svg className='social-link ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" /></svg>
const facebook = <svg className='social-link ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
const instagram = <svg className='social-link ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" /><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" /><path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" /></g></svg>
const github = <svg className='social-link ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" /><path d="M9 20.027c-3 .973-5.5 0-7-3" /></g></svg>
const youtube = <svg className='social-link ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14 12l-3.5 2v-4z" /><path d="M2 12.708v-1.416c0-2.895 0-4.343.905-5.274c.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9s2.561.027 3.912.065c2.851.081 4.277.121 5.182 1.053S22 8.398 22 11.292v1.415c0 2.896 0 4.343-.905 5.275c-.906.931-2.331.972-5.183 1.052c-1.35.039-2.73.066-3.912.066s-2.561-.027-3.912-.066c-2.851-.08-4.277-.12-5.183-1.052S2 15.602 2 12.708Z" /></g></svg>

export const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <footer className="pt-20 pb-4">
            {/* Links */}
            <div className="container mb-12 flex flex-col lg:flex-row">
                <div className="basis-1/3 flex flex-col
               md:items-center lg:items-start
                gap-4 lg:gap-6 ">
                    <Logo />
                    <p className="text-lg">
                        Making the world a better place through constructing elegant
                        hierarchies.
                    </p>
                    <ul className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
                        <li className=" cursor-pointer">{x}</li>
                        <li className=" cursor-pointer">{facebook}</li>
                        <li className=" cursor-pointer">{instagram}</li>
                        <li className=" cursor-pointer">{github}</li>
                        <li className=" cursor-pointer">{youtube}</li>

                    </ul>
                </div>
                <div className="basis-2/3 grid grid-col-2 lg:grid-cols-4 pt-8 lg:pt-0 lg:ps-8">
                    {footerColumns.map((col, index) => (
                        <article key={index} className="capitalize">
                            <h2 className="font-bold lg:text-lg text-teal-100 my-6">{col.title}</h2>
                            <ul >
                                {col.links.map((link, index) => (
                                    <li key={index} className="font-normal pb-3 hover:text-emerald-600
                             hover:ps-1 transition-all cursor-pointer">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </article>

                    ))}
                </div>
            </div>
            {/* Links */}
            {/* Copyrights */}
            <div className="container border-t border-slate-700">
                <p className="capitalize pt-4 text-center lg:text-start">
                    {`© ${currentDate} Mountain, inc. all rights reserved.`}
                </p>
            </div>
            {/* Copyrights */}

        </footer>
    )
}
