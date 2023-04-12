import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const JobDetails = () => {
    const jobData = useLoaderData();
   
    const { jobdetailesId } = useParams();
    

    const [detail, setDetail] = useState({});
    useEffect(() => {
        if (jobData) {
            const jbdata = jobData.find(jdata => jdata.id == jobdetailesId);
            setDetail(jbdata);
            
        }
    }, [])
    
    const { name, jbdes, jbres, iphone, iemail, iaddr, email, phone, address, education, exp, icon, place, salary } = detail;

    return (
        <div className='container mx-auto mt-40'>
            <h1 className='text-center font-semibold text-4xl mb-40'>Job Details</h1>


            <div className='grid md:grid-cols-2 gap-60'>
                <div className=''>
                    <p className=''><span className='text-2xl font-semibold'> Job Description</span>:{jbdes}</p>
                    <p className='mb-8 mt-8'> <span className='text-2xl font-semibold'>Job Responsibility</span> :{jbres}</p>
                    <p className='mb-8'><span className='text-2xl font-semibold'>Educational Requirements:</span>{education}</p>
                    <p className='mb-8'><span className='text-2xl font-semibold'>Experiences:</span>{exp}</p>



                </div>
                <div  className='bg-red-300 h-96 p-4 rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-8'>Job Details</h1>
                    <div className='flex gap-4'>
                        <img src={icon} alt="" />
                        <h1 className='font-medium mb-3'>{salary}(per month)</h1>
                    </div>
                    <div className='flex gap-4'>
                        <img src={place} alt="" />
                        <h1 className='font-semibold'><span className=' font-medium mb-3'>Job Title:</span>{name}</h1>
                    </div>
                    <h1 className=' text-2xl font-medium mt-5 mb-5'>Contact Information</h1>

                    <div className='flex gap-4'>
                        <img src={iphone} alt="" />
                        <p className=' font-medium mb-3'><span>Phone:</span>{phone}</p>
                    </div>
                    <div className='flex gap-4'>
                        <img src={iemail} alt="" />
                        <p className=' font-medium mb-3'><span>Email:</span>{email}</p>
                    </div>
                    <div className='flex gap-4'>
                        <img src={iaddr} alt="" />
                        <p>{address}</p>
                    </div>
                     <button className='bg-emerald-800 w-full mt-8 p-2 text-white rounded-lg'>Apply Now</button>

                </div>
            </div>

        </div>
    );
};

export default JobDetails;