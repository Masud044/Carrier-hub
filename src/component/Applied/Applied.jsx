import React, { useEffect, useState } from 'react';
import Applieds from '../Applieds/Applieds';
import { getShopingCart } from '../Fakedata/fake';

const Applied = () => {
    const [apply,setApply]=useState([]);
    const[feature,setFeature] = useState([]);
    const[appled,setAppled] =useState([]);
        useEffect(()=>{
            fetch('Feature.json')
            .then(res=>res.json())
            .then(data=>setFeature(data));
    },[])

    useEffect(()=>{
          const saved = getShopingCart();
          const applied=[];
          for(const id in saved){
             const added = feature.find(f=>f.id=id);

              if(added){
                 applied.push(added);
              }
          }
          setApply(applied);
          setAppled(applied);
    },[feature])
    
  console.log(apply);
    
    return (
        <div>
             <h1 className='text-center text-2xl font-semibold'>Applied Jobs</h1>

              <div className='w-3/4 mx-auto pt-5'>
                {
                    apply.map(jb=><Applieds
                       key={jb.id}
                       jb={jb}
                    
                    ></Applieds>)
                }
              </div>
               
           

              
        </div>
    );
};

export default Applied;