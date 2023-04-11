import React from 'react';


const Banner = () => {
    return (
        <div className='container mx-auto mt-20 md:flex justify-items-center  mb-10 m-2'>
             <div>
                 <h1 className='text-4xl font-semibold'>One Step <br /> Closer To Your <span className='text-4xl font-semibold text-emerald-700'> <br /> Dream Job</span> </h1>
                 <p className='text-black mt-3'>Explore thousands of job opportunities with all the information <br /> you need. Its your future. Come find it. Manage all your job <br />
                 application from start to finish.</p>
                 <button className='text-2xl font-medium bg-blue-900 text-white p-2 rounded-lg mt-4'>Get Started</button>

             </div>
             <div>
                
                 <img className='h-96' src="/src/assets/P3OLGJ1 copy 1.png" alt="" />
             </div>
        </div>
    );
};

export default Banner;