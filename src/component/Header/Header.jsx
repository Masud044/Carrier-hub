import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {

    return (

        <nav className='md:flex justify-items-center justify-between container mx-auto py-4 m-2'>


            <h1 className='text-4xl font-bold'>Futures Developer</h1>
           
             <ul>
             <li className='md:flex gap-10 justify-items-center text-2xl font-medium'>
                    <a href="#">Statistics</a>
                    <a href="#">Applied Jobs</a>
                    <a href="#">Blog</a>
                </li>
             </ul>
                

               
          
            <button className='text-2xl font-medium bg-blue-900 text-white p-2 rounded-lg'>Star Applying</button>

           

           



        </nav>

    );
};

export default Header;