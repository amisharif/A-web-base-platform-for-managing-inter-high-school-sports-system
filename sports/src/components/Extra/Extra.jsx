import React from 'react';

let data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let totalTeam = data.length;

let generateMatches = () => {
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

let MatchesList = () => {
    let matches = generateMatches();

    return (
        <div>
            <h2>Match Schedule</h2>
            <ul>
                {matches.map((match) => (
                    <li key={`${match.round}-${match.match}`}>
                        Round {match.round} - Match {match.match}: {match.homeTeam} vs {match.awayTeam}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchesList;
