import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import FixtureCard from '../FixtureCard/FixtureCard';

const UpdateScoreGroupStage = () => {
    const {fixtureData} = useContext(AuthContext);
    return (
        <div>
            <h2 style={{ marginLeft: "350px" }} className="font-bold py-5">
                {" "}
                Group Stage
            </h2>
            {fixtureData.map((match, index) => (
                // <li key={`${match.round}-${match.match}`} className='py-2 px-6 bg-slate-400 mt-1'>
                //     Match {index + 1}: {match.homeTeam} vs {match.awayTeam}
                // </li>
                <FixtureCard
                    key={index}
                    index={index}
                    team1={match.homeTeam}
                    team2={match.awayTeam}
                    groupName={match.group}
                    matchId={match.matchId}
                ></FixtureCard>
            ))}
        </div>
    );
};

export default UpdateScoreGroupStage;