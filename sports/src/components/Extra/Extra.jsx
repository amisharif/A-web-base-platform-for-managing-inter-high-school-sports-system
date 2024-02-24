import React, { useState } from 'react';

const Extra = () => {
    const [teams, setTeams] = useState([
        'Team 1',
        'Team 2',
        'Team 3',
        'Team 4',
        'Team 5',
        'Team 6',
        'Team 7',
        'Team 8',
        'Team 9',
        'Team 10',
        'Team 11',
        'Team 12',
        'Team 13',
        'Team 14',
        'Team 15',
        'Team 16',
    ]);
    const [groups, setGroups] = useState([]);
    const [top8, setTop8] = useState([]);

    const handleRandomGrouping = () => {
        const shuffledTeams = [...teams].sort(() => Math.random() - 0.5); // Shuffle teams randomly
        const groupSize = 2;
        const newGroups = [];

        for (let i = 0; i < shuffledTeams.length; i += groupSize) {
            newGroups.push(shuffledTeams.slice(i, i + groupSize));
        }

        setGroups(newGroups);
    };

    const handleSelectTop8 = () => {
        const mergedTeams = groups.flat(); // Combine teams from all groups
        const sortedTeams = mergedTeams.sort(
            (team1, team2) => team2.priority - team1.priority
        ); // Sort teams by priority (optional)
        const topTeams = sortedTeams.slice(0, 8); // Select top 8 teams
        setTop8(topTeams);
    };

    return (
        <div>
            <h1>Football Team Grouping and Selection</h1>
            <button onClick={handleRandomGrouping}>Randomize Groups</button>
            {groups.length > 0 && (
                <div>
                    <h2>Groups</h2>
                    {groups.map((group, index) => (
                        <div key={index}>
                            Group {index + 1}: {group.join(', ')}
                        </div>
                    ))}
                </div>
            )}
            <button onClick={handleSelectTop8} disabled={groups.length === 0}>
                Select Top 8 Teams
            </button>
            {top8.length > 0 && (
                <div>
                    <h2>Top 8 Teams</h2>
                    <ol>
                        {top8.map((team, index) => (
                            <li key={index}>{team}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default Extra;
