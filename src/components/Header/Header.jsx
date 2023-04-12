import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg py-5'>
            <div className='my-container flex justify-between items-center relative'>

                <div className="logo__text">
                    <Link to="/">
                        <h4 className='text-2xl italic'> <span className='text-[#7E90FE]'>Job</span><span className='text-[#9873FF]'>Hunter</span></h4>
                    </Link>
                </div>

                <nav className='hidden md:flex'>
                    <ul className='flex gap-10 items-center'>
                        <li> <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>Home</NavLink> </li>
                        <li> <NavLink to="/statistics" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>Statistics</NavLink> </li>
                        <li> <NavLink to="/applyedJobs" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>Applied Jobs</NavLink> </li>
                        <li> <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>Blog</NavLink> </li>

                    </ul>
                </nav>



                <div className="btn-wrapp hidden md:flex">
                    <button className='btn'>Star Applying</button>
                </div>



                {/* mobile menu  */}
                <nav className='md:hidden'>
                    <button onClick={() => setIsMenuOpen(true)}>
                        <Bars3Icon className="h-6 w-6 text-black" />
                    </button>
                    {
                        isMenuOpen && (
                            <div className=' absolute left-1 top-3 w-52 bg-white p-4 rounded-lg duration-1000 h-64'>
                                <button onClick={() => setIsMenuOpen(false)}>
                                    <XMarkIcon className="h-6 w-6 text-blue-700 absolute top-3 right-3" />
                                </button>
                                <ul className='flex flex-col gap-3 items-center absolute left-2 top-2 py-5 text-black rounded-lg w-5/6 '>
                                    <li className='text-left w-12/12'> <NavLink to="/">Home</NavLink> </li>
                                    <li> <NavLink to="/statistics">Statistics</NavLink> </li>
                                    <li> <NavLink to="/applyedJobs">Applied Jobs</NavLink> </li>
                                    <li> <NavLink to="/blog">Blog</NavLink> </li>
                                    <li><button className='btn'>Star Applying</button></li>

                                </ul>
                            </div>
                        )
                    }
                </nav>

            </div>


        </div>





    );
};

export default Header;