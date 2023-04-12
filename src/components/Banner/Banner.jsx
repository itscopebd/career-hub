import React from 'react';

const Banner = () => {
    return (
        <div className='bg'>
            <div className='my-container md:flex flex-col-reverse md:flex-row flex justify-between items-center'>
                <div className='md:w-6/12 w-12/12 md:pb-0 pb-5'>
                    <h2 className='md:text-7xl mt-5 text-5xl text-center'>One Step <br /> Closer To Your <br />
                        <span className='text-[#7E90FE]'>Dream</span> <span className='text-[#9873FF]'>Job</span>   </h2>
                    <p className='text-[#757575] text-lg my-7'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='btn'>Get Started</button>
                </div>
                <div className='md:w-6/12 w-12/12 order-1' >
                    <img className='w-full' src="img/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;