import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#F9F9FF] py-5'>
        <div className='my-container flex justify-between items-center'>
            <div className="logo__text">
                <h4 className='text-2xl italic'> <span className='text-[#7E90FE]'>Job</span><span className='text-[#9873FF]'>Hunter</span></h4>
            </div>
            <nav>
                <ul className='flex gap-10 items-center'>
                    <li>Statistics</li>
                    <li>Applied Jobs</li>
                    <li>Blog</li>
                    
                </ul>
            </nav>
            <div className="btn">
                <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-5 text-white text-xl rounded-lg leading-5'>Star Applying</button>
            </div>
        </div>
        </div>
    );
};

export default Header;