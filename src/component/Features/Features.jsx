import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feature from '../Feature/Feature';
import Showall from '../Showall/Showall';



const Features = () => {

    const [jobfeature,setJobfeature] = useState([]);
    const [showall,setShowall]= useState(false);

    const Handler = ()=>{
        setShowall(true);
    }
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
                     jobfeature.slice(0,showall ? 6 : 4).map(feature=>
                        <Feature
                          key={feature.id}
                          feature={feature}
                         
                        ></Feature>)
                   }
            </div>
            {
               !showall && (<span onClick={Handler}>
               <Showall></Showall>
             </span>

           ) }

            
        </div>
    );
};

export default Features;