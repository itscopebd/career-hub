import React from 'react';

const CategoryCard = (props) => {

    const { CategoryName, Categorylogo, JobsAvailable } = props.data;
    
    return (
        
            <div className='md:p-10 p-5 w-12/12 bg md:w-3/12 rounded-lg text-left md:my-0 my-5'>
                <img className='p-4 rounded-lg bg-[#D9D9D9]' src={Categorylogo} alt="" />
                <h3 className='font-bold text-2xl my-5'>{CategoryName}</h3>
                <p className='text-color'>{JobsAvailable}</p>
            </div>
    );
};

export default CategoryCard;