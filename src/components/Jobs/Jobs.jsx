import React from 'react';
import JobCard from '../JobCard/JobCard';

const Jobs = (props) => {
    const { jobs } = props;
    // console.log(jobs)
    return (
        <div className='text-center pt-24 mb-10'>
            <h3 className='font-bold text-5xl'>Featured Jobs</h3>
            <p className='text-color py-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='px-3 my-container grid md:grid-cols-2 md:justify-between justify-center gap-10 text-left'>
            {
                jobs.map(data=><JobCard data={data} key={data.id}></JobCard>)
            }
          
            </div>
            <div className='text-center my-10'>
                <button className='btn'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobs;