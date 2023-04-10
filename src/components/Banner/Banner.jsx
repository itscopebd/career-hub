import React from 'react';

const Banner = () => {
    return (
        <div className='bg'>
            <div className='my-container flex justify-between items-center'>
                <div className='w-6/12'>
                    <h2 className='text-7xl'>One Step <br /> Closer To Your <br />
                        <span className='text-[#7E90FE]'>Dream</span> <span className='text-[#9873FF]'>Job</span>   </h2>
                    <p className='text-[#757575] text-lg my-7'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn'>Get Started</button>
                </div>
                <div className='w-6/12'>
                    <img className='w-full' src="img/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;