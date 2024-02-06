import React from 'react';
import ycard from '../../../assets/icons/yellow.png'
import './KeyTimeLineOne.css'


const KeyTimeLineOne = ({item}) => {

    const {name,type,time,img} = item;

    return (
        <div>
            <div className="event-container-1 flex py-4 bg-cyan-800">

                <div className="1 pr-10 flex justify-end items-center" style={{ width: '48%' }}>
                    <div className='mr-4'>
                        <h2 className='text-white'>{name}</h2>
                        <h2 className='text-white'>{type}</h2>
                    </div>
                    <div className="single-card">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="2 flex justify-center items-center" style={{ width: '4%' }}>
                    <div className=""><h2 className='text-white text-center'>{time}</h2></div>
                </div>
                <div className="3" style={{ width: '48%' }}></div>
            </div>
        </div>
    );
};

export default KeyTimeLineOne;