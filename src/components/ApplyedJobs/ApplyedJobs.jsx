import React, { useEffect, useState } from 'react';
import { getApplyed } from '../../../public/fakedb';
import ApplyedJobCard from '../ApplyedJobCard/ApplyedJobCard';
import { useLoaderData } from 'react-router-dom';

const ApplyedJobs = () => {

const allData=useLoaderData();
    const applyedJobs = getApplyed();
    let apllyJob=[];
if (applyedJobs) {
    for (const id in applyedJobs) {
        const carts=allData.find(data=>data.id==id);
        apllyJob.push(carts)
    } 
}

    return (
        <div className='my-container'>
         {
            apllyJob.map(data=><ApplyedJobCard data={data} key={data.id}></ApplyedJobCard>) 
         }
        </div>
    );
};

export default ApplyedJobs;