import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Stat = () => {

    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>stat</h2>
        </div>
    );
};

export default Stat;