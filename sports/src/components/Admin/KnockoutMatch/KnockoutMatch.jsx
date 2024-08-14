import React, { useContext } from 'react';
import useKnockoutMatch from '../../customHook/useKnockoutMatch';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import FixtureCard from '../FixtureCard/FixtureCard';
import KnockoutMatchCard from '../KnockoutMatchCard/KnockoutMatchCard';
import { Link, NavLink } from 'react-router-dom';

const KnockoutMatch = () => {

    const [knockoutMatch,refetch] = useKnockoutMatch();
   // console.log(knockoutMatch);
   

    return (
        <div className="bg-slate-200 w-full">
           

            <h2 style={{ marginLeft: "350px" }} className="font-bold py-5">
                {" "}
                Quarter Final
            </h2>

            {/* {knockoutMatch?.map((match, index) => (
                <KnockoutMatchCard
                    team1={match.eiin1}
                    team2={match.eiin2}
                    index={index}
                ></KnockoutMatchCard>
                // <h2 key={index}>{match.eiin1}</h2>
            ))} */}

            {knockoutMatch.map((match, index) => {
                if (index <= 7) {
                    return (
                        <KnockoutMatchCard
                            key={index}
                            team1={match.eiin1}
                            team2={match.eiin2}
                            index={index}
                        ></KnockoutMatchCard>
                    );
                }
            })}
        </div>
    );
};

export default KnockoutMatch;