import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../../public/fakedb';

const JobDetails = () => {
    const jobDetailsId = useParams();
    const jobDetails = useLoaderData();
    const [details, setDetails] = useState({});

    
    useEffect(() => {
        const value = jobDetails.find(data => data.id == jobDetailsId.id);
        setDetails(value)
    }, []);
    
    const { id,JobDescription, JobResponsibility, Experiences, EducationalRequirements,Salary,JobTitle,contactInformation,Location } = details;
    console.log(contactInformation?.phone)



    const applyNow=(id)=>{
    let quantity=addToDb(id);
  
        if (quantity != undefined) {
            alert("Already Applyed....")
        }
    
    }
    return (
        <div className='my-container flex py-10 gap-10'>

            <div className='w-8/12'>
               <h3> <span className='font-bold'>Job Description:</span> {JobDescription}</h3>
               <h3 className='my-5'> <span className='font-bold'>Job Responsibility:</span> {JobResponsibility}</h3>
               <h3 className='font-bold my-3'>Educational Requirements:</h3>
               <p> {EducationalRequirements}</p>
               <h3 className='font-bold my-5'>Experiences:</h3>
               <p className='my-3'>{Experiences}</p>
            </div>

            <div className='w-4/12'>

                <div className='bg p-5 rounded-lg'>
                    <h4 className='text-3xl border-b-2 border-blue-100 py-3'>Details</h4>

                    <h5 className='flex gap-2 py-3'> <img src="/img/Frame.png" alt="" /> <span className='font-bold'>Sallary:</span> {Salary} (Per Month)</h5>

                    <h5 className='flex gap-2 py-3'> <img src="/img/Frame-1.png" alt="" /> <span className='font-bold'>Job Title :</span> {JobTitle} </h5>


                    <h4 className='text-3xl border-b-2 border-blue-100 py-3'>Contact Information</h4>
                    
                    <h5 className='flex gap-2 py-3'> <img src="/img/Frame-2.png" alt="" /> <span className='font-bold'>Phone: </span> {contactInformation?.phone} </h5>

                    <h5 className='flex gap-2 py-3'> <img src="/img/Frame-3.png" alt="" /> <span className='font-bold'>Email: </span> {contactInformation?.email} </h5>

                    <h5 className='flex gap-2 py-3'> <img src="/img/Frame-4.png" alt="" /> <span className='font-bold'>Address: </span> { Location?.natinality }, { Location?.village } </h5>

                </div>
                <div className='text-center my-4'>
                <button className='btn' onClick={()=>applyNow(id)}>Apply Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default JobDetails;