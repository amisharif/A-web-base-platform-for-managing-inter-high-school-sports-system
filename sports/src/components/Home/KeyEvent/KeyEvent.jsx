import React from 'react';
import ycard from '../../../assets/icons/yellow.png'
import './KeyEvent.css';
import KeyEventTimeline from '../KeyEventTimeline/KeyEventTimeline';

const KeyEvent = ({matchData}) => {

    const {logo1,logo2,team1,team2} = matchData;
    const s1 = team1[0]+team1[1]+team1[2];
    const s2 = team2[0] + team2[1] + team2[2];

    return (
        <div className='bg-slate-900 key-event'>
            

            <h2 className='text-white font-serif text-center uppercase text-4xl'>KEY EVENTS</h2>
            <div className="key-event-top flex justify-between  py-4">
                

                <div className="summary w-1/2   text-2xl text-white space-x-2 flex flex-col justify-center items-center">
                    <img src={logo1} alt="" />
                    <h2 className='font-serif'>{s1.toUpperCase()}</h2>
                </div>
                <div className="summary w-1/2   text-2xl text-white space-x-4 flex flex-col items-center justify-center">

                    <img src={logo2} alt="" />
                    <h2 className='font-serif pr-2'>{s2.toUpperCase()}</h2>
                </div>
            </div>


           
        </div>
    );
};

export default KeyEvent;