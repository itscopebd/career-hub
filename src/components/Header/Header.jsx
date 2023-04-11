import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg py-5'>
            <div className='my-container flex justify-between items-center'>
                <div className="logo__text">
                    <Link to="/">
                        <h4 className='text-2xl italic'> <span className='text-[#7E90FE]'>Job</span><span className='text-[#9873FF]'>Hunter</span></h4>
                    </Link>
                </div>
                <nav>
                    <ul className='flex gap-10 items-center'>
                        <li> <NavLink to="/">Home</NavLink> </li>
                        <li> <NavLink to="/statistics">Statistics</NavLink> </li>
                        <li> <NavLink to="/applyedJobs">Applied Jobs</NavLink> </li>
                        <li>Blog</li>

                    </ul>
                </nav>
                <div className="btn-wrapp">
                    <button className='btn'>Star Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;