import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SchoolInfo = () => {

    const schoolInfo = useLoaderData();

    console.log(schoolInfo);
    return (
        <div>
            <h2>{schoolInfo.email}</h2>
        </div>
    );
};

export default SchoolInfo;