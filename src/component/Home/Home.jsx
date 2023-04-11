import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Features from '../Features/Features';
import JobList from '../JobList/JobList';

const Home = () => {
    return (
        <div>
             
             <Header></Header>
             <Outlet></Outlet>
             
            
        </div>
    );
};

export default Home;