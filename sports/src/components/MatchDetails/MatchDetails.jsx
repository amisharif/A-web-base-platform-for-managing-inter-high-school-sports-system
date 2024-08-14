import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MatchSummary from '../MatchSummary/MatchSummary';
import KeyEvent from '../Home/KeyEvent/KeyEvent';
import KeyEventTimeline from '../Home/KeyEventTimeline/KeyEventTimeline';

const MatchDetails = () => {


    const matchId = useParams()
    const playersInMatch = useLoaderData()
    // console.log(playersInMatch)



    return (
        <div className='w-full'>

            <MatchSummary playersInMatch={playersInMatch} matchID={matchId}></MatchSummary>

            {/*
            <KeyEvent matchData={matchData}></KeyEvent>
            <KeyEventTimeline matchData={matchData}></KeyEventTimeline>  */}

        </div>
    );
};

export default MatchDetails;