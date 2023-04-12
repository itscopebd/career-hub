import React from 'react';

const Breadcrumbs = (props) => {
    console.log(props)
    return (
        <div className='h-[20vh] opacity-80 relative'>
            <h4>{props.title.title}</h4>
            <div className='absolute bottom-0 left-0 bg-bread h-32'>

            </div>
        </div>
    );
};

export default Breadcrumbs;