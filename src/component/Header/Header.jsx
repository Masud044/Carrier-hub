import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <nav className='md:flex justify-items-center justify-between container mx-auto py-4 m-2'>


            <h1 className='text-4xl font-bold'>Futures Developer</h1>
           
             <ul>
             <li className='md:flex gap-10 justify-items-center text-2xl font-medium'>
                   
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/applied'>Applied</Link>
                    <Link to='/blog'>Blog</Link>
                   
                </li>
             </ul>
                

               
          
            <button className='text-2xl font-medium bg-blue-900 text-white p-2 rounded-lg'>Star Applying</button>

           

           



        </nav>

    );
};

export default Header;