import React from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';


const Statistics = () => {

    const data = [
        {
            id: 1,
           name: 'Assignment-1',
           mark:57
           
           
        },
        {
            id: 2,
            
            name: 'Assignment-2',
            mark:60
           
        },
        {
            id: 3,
            
            name: 'Assignment-3',
            mark:60
           
           
        },
        {
            id: 4,
            
            name: 'Assignment-4',
            mark:60
           
           
        },
        {
            id: 5,
            
            name: 'Assignment-5',
            mark:59
           
        },
        {
            id: 6,
            
            name: 'Assignment-6',
            mark:52
           
        },
        {
            id: 7,
            
            name: 'Assignment-7',
            mark:30
           
        },
       
    ]
    return (
        <div>
               <ScatterChart 
                 width={1000}
                 height={400}
                
                
               
               >
                 <XAxis dataKey="name" />
                 <YAxis type="number" dataKey="mark" />
               
                <Scatter  data={data} strokeDasharray="5 5" fill="#8884d8" line shape="cross"></Scatter>
               
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
               </ScatterChart>
        </div>
    );
};

export default Statistics;