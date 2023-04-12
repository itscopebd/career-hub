import React, { useEffect, useState } from 'react';
import { getApplyed } from '../../../public/fakedb';
import ApplyedJobCard from '../ApplyedJobCard/ApplyedJobCard';
import { useLoaderData } from 'react-router-dom';

const ApplyedJobs = () => {

    // const allData = useLoaderData();
    const applyedJobs = getApplyed();

 
    const [apllyJobs, setApllyJob] = useState([]);



    useEffect(() => {
        fetch("/jobs.json")
            .then(res => res.json())
            .then(allData => {
                if (applyedJobs) {
                    let carts=[]
                    for (const id in applyedJobs) {
                         const checkValue = allData.find(data => data.id == id);
                         carts.push(checkValue)
                        
                    }
                    setApllyJob(carts)
                }

            })
    }, [])


const filterData=(value)=>{
    const filterValue=value.target.value;
    useEffect(()=>{
        const checkValue = apllyJobs.map(data => data.jobNature);
        setApllyJob(checkValue)
    },[])
    console.log(apllyJobs)
}

    // if (applyedJobs) {
    //     for (const id in applyedJobs) {
    //         const carts = allData.find(data => data.id == id);
    //         apllyJob.push(carts)
    //     }
    // }


    console.log(apllyJobs)
    return (
        <>

            <div className='my-container relative overflow-hidden'>
                <div className='right-0 absolute overflow-hidden'>
                    <div className='text-right my-5 py-2 px-3 border-2 border-blue-400 rounded-lg bg flex justify-between w-32'>
                        <select className='border-none focus:outline-none w-32' onChange={filterData}>
                            <option selected>Filter By</option>
                            <option value="Remote">Remote</option>
                            <option value="On-site">On-site</option>
                        </select>
                        <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg></p>

                    </div>
                </div>

                <div className='my-10 overflow-hidden'>
                    {
                        apllyJobs.map(data => <ApplyedJobCard data={data} key={data.id}></ApplyedJobCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default ApplyedJobs;