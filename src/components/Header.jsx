import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {

                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className='container mx-auto md:px-2 px-4 py-4'>
            <div ref={menuRef} className='flex justify-between items-center'>

                <NavLink to="/" className="text-2xl font-bold">codertest</NavLink>

                <ul activeclassname="active" className={`lg:flex items-center gap-5 font-bold lg:static absolute ${open ? "top-14" : "top-[-80rem]"}`}>
                    <li className='mb-5'>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className='mb-5'>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className='mb-5'>
                        <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                    <li className='mb-5'>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <button className='px-6 py-[6px] border rounded bg-red-600 text-white font-bold'>login</button>
                </ul>

                <label className="lg:hidden text-xl font-bold">
                    {open ? <i onClick={() => setOpen(false)} className="ri-close-fill"></i> :
                        <i onClick={() => setOpen(true)} className="ri-menu-fill"></i>}
                </label>
            </div>
        </div>
    );
};

export default Header;