import React from 'react';

const Applieds = ({jb}) => {
    
    const {id,name, fulltime, place, companyName, subtitle, remote, salary, location, icon }= jb
    return (
        <div className='mb-10 border-solid border-2 border-slate-600 pl-3 pt-3 pb-3 m-2'>

          
            {
                id==5 || id==6 ? <h1 className='text-4xl font-bold text-orange-400'>{companyName}</h1>: <img src={companyName}></img>
             }
         
            <h1 className='mt-3 text-2xl font-medium'>{name}</h1>
            <p className='mb-3'>{subtitle}</p>
            <button className='p-1 border-solid border-2 border-slate-600 rounded-sm text-emerald-700 mr-2'>{remote}</button>
            <button className='p-1 border-solid border-2 border-slate-600 rounded-sm text-emerald-700'>{fulltime}</button>
            <div className='flex gap-4 mt-3 mb-3'>
                <div className='flex'>
                    <img src={place} alt="" />
                    <p>{location}</p>
                </div>
                <div className='flex'>
                    <img src={icon} alt="" />
                    <p>{salary}</p>
                </div>
            </div>

             <button className='p-2 border-solid border-2 border-slate-600 rounded-lg bg-indigo-700 text-white'>  View Details</button>


           


        </div>
    );
};

export default Applieds;