import React from 'react';

const CategoryCard = (props) => {

    const { CategoryName, Categorylogo, JobsAvailable } = props.data;
    
    return (
        
            <div className='p-10 bg w-3/12 rounded-lg text-left'>
                <img className='p-4 rounded-lg bg-[#D9D9D9]' src={Categorylogo} alt="" />
                <h3 className='font-bold text-2xl my-5'>{CategoryName}</h3>
                <p className='text-color'>{JobsAvailable}</p>
            </div>
    );
};

export default CategoryCard;