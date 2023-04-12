import React from 'react';
import { Link } from 'react-router-dom';

const ApplyedJobCard = (props) => {
  
    const {id,CompanyName,CompanyLogo,JobTitle,Location,Salary,jobNature}=props.data;
    return (
        <div className='flex gap-5 my-5'>
        <div className='w-2/12 p-5 bg flex items-center justify-center rounded-lg'>
            <img src={CompanyLogo} alt="" />
        </div>
        <div className='w-8/12'>
            <h3 className='text-2xl font-bold'>{JobTitle}</h3>
            <h3 className='my-2 text-xl text-color'>{CompanyName}</h3>
           <div className='flex gap-4'>
           {
                jobNature.map(jobType=><button className='border-2 border-blue-200 py-1 px-3 my-3 rounded-lg text-blue-700'>{jobType}</button>)
            }
           </div>
           <div className='flex gap-5 mb-5'>
                <h4 className='flex items-center gap-2 text-color text-xl'> <img src="/img/LocationIcon.png" alt="" /> {Location?.natinality}</h4>
                <h4 className='flex items-center gap-2 text-color text-xl'> <img src="/img/Frame.png" alt="" /> Salary: {Salary}</h4>
            </div>
        </div>
        <div className='text-right w-2/12 md:flex md:items-center md:justify-end'>
            <Link to={`/jobdetails/${id}`}> <button className='btn'>View Details</button></Link>
        </div>
        </div>
    );
};

export default ApplyedJobCard;