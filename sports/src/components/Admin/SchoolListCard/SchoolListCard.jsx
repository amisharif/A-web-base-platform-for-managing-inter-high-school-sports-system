import React from 'react';

const SchoolListCard = () => {

    const list = [
        'sharif','arif','tamin','nazmul','akash'
    ]
    return (
       <div className="">
            <ol className="list-decimal">
                <li className="mb-2">First item</li>
                <li className="mb-2">Second item</li>
                <li className="mb-2">Third item</li>
            </ol>
       </div>
    );
};

export default SchoolListCard;