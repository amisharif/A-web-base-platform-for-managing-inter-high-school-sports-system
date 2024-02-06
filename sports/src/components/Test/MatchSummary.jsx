import React from 'react';
import './MatchSummary.css'
import App from './../../App';
import ycard from '../../assets/icons/yellow.png';
import KeyEvent from '../Home/KeyEvent/KeyEvent';

const MatchSummary = ({matchData}) => {

    const {team1,team2,team1Score,team2Score,team1Players,team2Players,timeline,logo1,logo2} =matchData;
    console.log(timeline);

    


    return (
        <div className='match-summary-container bg-slate-900 p-10 '>
            <div className="flex ">
                <div className="left w-1/3  flex items-center justify-end text-4xl text-white space-x-4">
                    <h2 className='font-serif'>{team1}</h2>
                    <img src={logo1} alt="" />       
                </div>
                <div className="middle w-1/3 flex flex-col items-center justify-center text-4xl text-white">
                    <h2>Time</h2>
                <h1>{team1Score}-{team2Score}</h1>
                </div>
                <div className="left w-1/3 flex items-center justify-start text-4xl text-white space-x-4">
                    <img src={logo2} alt="" />
                    <h2 className='text-4xl font-serif'>{team2}</h2>
                </div>
            </div>
            <div className="scorer-container flex justify-between my-4 border-white border-y-2">
               
                <div className="scorer  w-1/2 text-center my-4">
                    <ul className='text-white'>

                        {timeline.map((item) => (
                            // Conditionally render based on some condition
                            
                                item.teamname===team1 && item.type==='Goal' && (
                                    <div key={item.id}>
                                        {/* Render item content */}
                                        <p>{item.name} {item.time}</p>
                                    </div>
                                )
                            
                        ))}
                        {/* <li>Saad Natiq Naji 68'</li>
                        <li>Ayman Hussein 76'</li> */}
                    </ul>
                </div>
                <div className="empty w-1/3"></div>
                <div className="scorer w-1/2 my-4">
                    <ul className='text-white text-center'>
                        {timeline.map((item) => (
                            // Conditionally render based on some condition

                            item.teamname === team2 && item.type === 'Goal' && (
                                <div key={item.id}>
                                    {/* Render item content */}
                                    <p className='text-white'>{item.name} {item.time}</p>
                                </div>
                            )

                        ))}
                    </ul>
                </div>
            </div>
          
           
        </div>
    );
};

export default MatchSummary;