import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
  
    return (
        <div className='mt-60'>
            <h1 className='text-center font-bold text-2xl text-red-500'>Oops!</h1>
            <p className='text-center font-medium text-2xl text-orange-700'>Sorry, an unexpected error has occurred.</p>
            
        </div>
    );
};

export default Error;
