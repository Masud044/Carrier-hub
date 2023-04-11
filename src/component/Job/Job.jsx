import React from 'react';

const Job = ({jb}) => {
  
    const{title,url,job} = jb;
    return (
        <div className='bg-gray-300 p-4 mb-4 rounded-lg'>
             <img src={url} alt="" />
             <h1 className='text-2xl font-medium'>{title}</h1>
             <p>{job}</p>
        </div>
    );
};

export default Job;