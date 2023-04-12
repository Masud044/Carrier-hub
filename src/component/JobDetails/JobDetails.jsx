import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetail from '../JobDetail/JobDetail';
import { useState } from 'react';
import { useEffect } from 'react';

const JobDetails = () => {
   const jobData = useLoaderData();
   // console.log(jobData)
    const {jobdetailesId} = useParams();
    //console.log(jobdetailesId);

    const [detail,setDetail]= useState({});
    useEffect(()=>{
           if(jobData){
              const jbdata = jobData.find(jdata=>jdata.id == jobdetailesId);
              setDetail(jbdata);
             // console.log(jbdata);
           }
    },[])
   // console.log(detail);

    return (
        <div>
             <h1 className='text-center font-semibold text-4xl'>Job Details:{jobData.length}</h1>
             

             <div>
             <h1>this is vakeke:{detail.name}</h1>
             <h2>dfhakhga:{detail.subtitle}</h2>
                
                
             </div>
        </div>
    );
};

export default JobDetails;