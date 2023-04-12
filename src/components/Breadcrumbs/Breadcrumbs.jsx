import React from 'react';

const Breadcrumbs = (props) => {
    console.log(props)
    return (
        <div className='h-[20vh] opacity-80 relative bg-bread flex justify-center items-center bg-cover	bg-no-repeat bg-center	'>
            <h4 className='text-4xl font-bold'>{props.title.title}</h4>
           
        </div>
    );
};

export default Breadcrumbs;