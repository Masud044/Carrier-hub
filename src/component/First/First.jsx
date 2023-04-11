import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import JobList from '../JobList/JobList';

const First = () => {
    return (
        <div>
              <Banner></Banner>
              <JobList></JobList>
              <Features></Features>
        </div>
    );
};

export default First;