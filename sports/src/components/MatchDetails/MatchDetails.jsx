import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MatchSummary from '../MatchSummary/MatchSummary';
import KeyEvent from '../Home/KeyEvent/KeyEvent';
import KeyEventTimeline from '../Home/KeyEventTimeline/KeyEventTimeline';

const MatchDetails = () => {

  //  const matchData = useLoaderData();


    return (
        <div>
            <h1>Match Details</h1>
            {/* <MatchSummary matchData={matchData}></MatchSummary>
            <KeyEvent matchData={matchData}></KeyEvent>
            <KeyEventTimeline matchData={matchData}></KeyEventTimeline> */}
        </div>
    );
};

export default MatchDetails;