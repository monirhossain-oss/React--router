
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];
const links = navItems.map(route =>
    <li><a href={route.path}>{route.name}</a></li>
)

const Navber = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-between p-6 '>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X> :
                        <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute px-2 py-4 duration-1000
                     ${open ? 'top-12': '-top-40'}
                      bg-amber-200`}>
                    {links}
                </ul>
                <h3 className='ml-4'>My Navber</h3>
            </span>

            <div>
                <ul className='md:flex hidden  gap-2'>
                    {
                        links
                    }
                </ul>
            </div>
            <button>Sing In</button>
        </nav>
    );
};

export default Navber;