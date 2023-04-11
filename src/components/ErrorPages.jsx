import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPages = () => {
    const {error,status}=useRouteError();
    console.log(error.message)
    return (
        <div className='my-container flex justify-center items-center h-[100vh] flex-col'>
            <h3 className='text-3xl text-red-500'>{error.message}</h3>
            <h3 className='my-5 text-4xl font-bold'>{status}</h3>
            <Link to="/"><button className='btn'>Go To Home Page</button></Link>
        </div>
    );
};

export default ErrorPages;