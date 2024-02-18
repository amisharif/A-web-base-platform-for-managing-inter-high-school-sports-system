import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import FixtureCard from '../FixtureCard/FixtureCard';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; 




//  console.log(schoolList);

let generateMatches = () => {


    const { schoolList } = useContext(AuthContext);
    let data = [];


    schoolList.map(item => {
        data.push(item.id)
    })

    let totalTeam = data.length;
    let rounds = totalTeam - 1;
    let matchPerRound = totalTeam / 2;
    let teamVar = totalTeam - 1;

    let matches = [];

    for (let round = 0; round < rounds; round++) {
        for (let match = 0; match < matchPerRound; match++) {
            let home = (round + match) % (totalTeam - 1);
            let away = (teamVar - home) % (totalTeam - 1);

            if (match === 0) {
                away = totalTeam - 1;
            }

            let currentMatch = {
                round: round + 1, // Adjust for human-readable numbering
                match: match + 1, // Adjust for human-readable numbering
                homeTeam: data[home],
                awayTeam: data[away],
            };

            matches.push(currentMatch);
        }
        teamVar += 2;
    }

    return matches;
};

let Fixture = () => {
    let matches = generateMatches();
    const { fixtureData, setFixtureData } = useContext(AuthContext);

    useEffect(() => {
        setFixtureData(matches)
    }, [])

    //console.log(fixtureData)

    const st = {
        marginLeft: '320px'
    }

    const handleFixture =()=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fixture already created!",
        });
    }


    return (
        <div className='bg-slate-200 w-full '>

            <button onClick={handleFixture} style={st} className="btn btn-xs sm:btn-sm md:btn-md mx-auto mt-7">Create Fixture</button>
            <h2 style={st} className='font-bold py-5'> Match Schedule</h2>

            {matches.map((match, index) => (
                // <li key={`${match.round}-${match.match}`} className='py-2 px-6 bg-slate-400 mt-1'>
                //     Match {index + 1}: {match.homeTeam} vs {match.awayTeam}
                // </li>
                <FixtureCard
                    key={`${match.round}-${match.match}`} index={index} team1={match.homeTeam} team2={match.awayTeam}
                ></FixtureCard>
            ))}
        </div>

    );
};

export default Fixture;
