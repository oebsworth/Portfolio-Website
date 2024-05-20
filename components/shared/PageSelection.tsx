'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const PageSelection = () => {
    const pathname = usePathname().replace('/', '');

    return (
        <div className='py-6'>
            {["projects", "experiences", "skills", "c.v."].map((title, index) => (
                <Link
                    key={`button_${index}`}
                    href={title === "projects" ? "/" : title === "c.v." ? "https://oebsworth.github.io/procedural-cv-nextjs-web/" : `/${title}`}
                    target={title === "c.v." ? "_blank" : ""}
                    rel={title === "c.v." ? "noreferrer noopener" : ""}
                    className={`border-2 mx-2 py-2 px-4 sm:mx-4 sm:px-8 uppercase ${(
                        (title === "projects" && pathname === "") ||
                        (title === "experiences" && pathname === "experiences") ||
                        (title === "skills" && pathname === "skills")
                    ) ? "inner-shadow" : "" }`}
                >
                    {title}
                </Link>
            ))}
        </div>
    );
};

export default PageSelection;
