import React,{useState} from 'react';
import JobCard from '../JobCard/JobCard';

const Jobs = (props) => {
    const { jobs } = props;
    const [showAll, setShowAll] = useState(false);
    // console.log(jobs)
    const hnadleShowAll = () => {
        setShowAll(true);
    };
    return (
        <div className='text-center pt-24 mb-10'>
            <h3 className='font-bold text-5xl'>Featured Jobs</h3>
            <p className='text-color py-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='px-3 my-container grid md:grid-cols-2 md:justify-between justify-center gap-10 text-left'>
                {
                    jobs?.slice(0, showAll ? 6 : 4).map(data => <JobCard data={data} key={data.id}></JobCard>)
                }

            </div>
            <div className='text-center my-10'>
                {!showAll && (
                    <span onClick={hnadleShowAll}>
                        <button className='btn'>See All Jobs</button>
                    </span>
                )}

            </div>
        </div>
    );
};

export default Jobs;