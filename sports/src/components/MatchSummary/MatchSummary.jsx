import React, { useContext } from 'react';
import './MatchSummary.css'
import App from './../../App';
import ycard from '../../assets/icons/yellow.png';
import KeyEvent from '../Home/KeyEvent/KeyEvent';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import useGroupClone from '../customHook/useGroupClone';


const MatchSummary = ({ playersInMatch, matchID }) => {

    const { playerInfo, schoolList } = useContext(AuthContext);
    const [groupClone] = useGroupClone();

    const number = (matchID.matchId);

    const filteredItems = groupClone.filter((item) =>
        String(item.matchId).includes(number)
    );


    // console.log(filteredItems[0]?.homeTeam)
    const sn1 = schoolList.filter((item) => item.id.includes(filteredItems[0]?.homeTeam));
    const sn2 = schoolList.filter((item) => item.id.includes(filteredItems[0]?.awayTeam));




    return (
        <div className='match-summary-container bg-slate-900 p-10 w-full'>
            <div className="flex w-1/2 mx-auto">
                <div className="left w-1/3   items-center justify-end  text-white ">
                    <h2 className='text-4xl ml-24'>{filteredItems[0]?.homeScore}</h2>
                    <p>{sn1[0]?.name}</p>
                    
                    {/* <img src={logo1} alt="" /> */}
                </div>
                <div className="middle w-1/3 flex flex-col items-center justify-center text-4xl text-white">
                    <h2>vs</h2>
                    {/* <h1>{team1Score}-{team2Score}</h1> */}
                </div>
                <div className="left w-1/3  items-center justify-start  text-white">
                    {/* <img src={logo2} alt="" /> */}
                    <h2 className='text-4xl ml-12'>{filteredItems[0]?.awayScore}</h2>
                    <p>{sn2[0]?.name}</p>
                </div>
            </div>


            <div className="text-white text-center mt-16 w-1/3 mx-auto border-t-2">
                <h2 className='text-2xl py-4'>Timeline</h2>

                {playersInMatch && playersInMatch.map((data) => (

                    <div className='flex space-x-3 justify-between mt-6 ' key={data._id}>

                        <p> {data.name}</p>
                        <p className='text-left'>{data.contribution}</p>
                        <p>Time: {data.time}</p>

                    </div>

                ))}
            </div>
        </div>
    );
};

export default MatchSummary;