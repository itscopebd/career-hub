import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = (props) => {
    const { id,CompanyLogo, CompanyName, JobTitle, Salary, jobNature, Location } = props.data;

    return (
        <div className='border-2 border-blue-200 py-8 px-5'>
            <img src={CompanyLogo} alt="" />
            <h3 className='my-4 text-3xl'>{JobTitle}</h3>
            <h3 className='text-color'>{CompanyName}</h3>

            <div className='flex gap-5  my-5'>
                {
                    jobNature.map(jobType => <button className='border-2 border-blue-200 py-1 px-3 rounded-lg text-blue-700'>{jobType}</button>)
                }
            </div>
            <div className='flex gap-5 mb-5'>
                <h4 className='flex items-center gap-2 text-color text-xl'> <img src="/img/LocationIcon.png" alt="" /> {Location?.natinality}</h4>
                <h4 className='flex items-center gap-2 text-color text-xl'> <img src="/img/Frame.png" alt="" /> Salary: {Salary}</h4>
            </div>
            <Link to={`/jobdetails/${id}`}><button className='btn'>View Details</button></Link>
        </div>
    );
};

export default JobCard;