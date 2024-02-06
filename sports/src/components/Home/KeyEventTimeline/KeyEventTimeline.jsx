import React from 'react';
import ycard from '../../../assets/icons/yellow.png'
import KeyTimeLineOne from '../KeyTimeLineOne/KeyTimeLineOne';
import KeyTimelineTwo from '../KeyTimelineTwo/KeyTimelineTwo';


const KeyEventTimeline = ({ matchData }) => {

    const {team1,team2, timeline } = matchData;


    const timelineData =  {
        team1,team2,timeline
    }

    return (
        <div>

            {timeline.map((item) => {
               

                // Conditionally add items to the array
                if (item.teamname===team1) {
                    return <KeyTimeLineOne item={item}></KeyTimeLineOne>
                }
                if (item.teamname===team2) {
                    return <KeyTimelineTwo item={item}></KeyTimelineTwo>
                }
                // Add more conditions if needed
                return null; // Return the array of JSX elements
            })}




           
           
        </div>
    );
};

export default KeyEventTimeline;