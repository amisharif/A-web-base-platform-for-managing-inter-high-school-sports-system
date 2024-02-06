import React from 'react';
import ycard from '../../../assets/icons/yellow.png'

const KeyTimelineTwo = ({ item }) => {

    const { name, type, time, img } = item;

    return (
        <div>
            <div className="event-container-2 flex py-4 bg-cyan-900">

                <div className="3" style={{ width: '48%' }}></div>
                <div className="2 flex justify-center items-center" style={{ width: '4%' }}>
                    <div className="">
                        <h2 className='text-white text-center'>{time}</h2>
                    </div>
                </div>
                <div className="1  flex justify-start items-center pl-10" style={{ width: '48%' }}>
                    <div className="single-card">
                        <img src={img} alt="" />
                    </div>
                    <div className='ml-4'>
                        <h2 className='text-white'>{name}</h2>
                        <h2 className='text-white'>{type}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyTimelineTwo;