import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Job from '../Job/Job';

const JobList = () => {
   const [job,setJob] = useState([]);
    useEffect(()=>{

              fetch('JobData.json')
              .then(res=>res.json())
              .then(data=>setJob(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <h1 className='text-2xl font-bold'>Job Category List</h1>
              <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='md:flex mx-auto container gap-20 mt-8 mb-10'>
                {
                    job.map(jb=><Job
                     key={jb.id}
                     jb={jb}
                    
                    ></Job>
                    
                   
                    
                    )
                }
            </div>
             
        </div>
    );
};

export default JobList;