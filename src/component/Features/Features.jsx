import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feature from '../Feature/Feature';

const Features = () => {

    const [jobfeature,setJobfeature] = useState([]);
     useEffect(()=>{

             fetch('Feature.json')
             .then(res=>res.json())
             .then(data=>setJobfeature(data))
     },[])
    return (
       
        
        <div>
            <div className='text-center'>
            <h1 className='text-2xl font-bold'>Featured Jobs</h1>
              <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='mt-10 grid md:grid-cols-2 container mx-auto gap-5'>
                   {
                     jobfeature.map(feature=>
                        <Feature
                          key={feature.id}
                          feature={feature}
                        ></Feature>)
                   }
            </div>
        </div>
    );
};

export default Features;