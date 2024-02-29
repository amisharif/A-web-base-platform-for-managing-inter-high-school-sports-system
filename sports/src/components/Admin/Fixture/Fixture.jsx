import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import FixtureCard from '../FixtureCard/FixtureCard';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; 




const Fixture = () => {


    
    const { schoolList, fixtureData, setFixtureData, 
        
        standDataA, setStandDataA, standDataB,setStandDataB, standDataC,setStandDataC, standDataD,setStandDataD, standDataE,setStandDataE,standDataF, setStandDataF,standDataG,setStandDataG,standDataH,setStandDataH } = useContext(AuthContext);

    const [matches,setMatches] = useState([]);
    const [allMatches,setAllMatches] = useState([]);
    const [allMatchesClone,setAllMatchesClone] = useState([]);





    // useEffect(() => {
    //     setFixtureData(matches)
    // }, [])


    let generateMatches = (Group,grp) => {

       // const { schoolList } = useContext(AuthContext);
        let data = [];
        //console.log(index)

        Group.map(item => {
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
                    group:grp,
                    homeScore:-1,
                    awayScore:-1
                };

                matches.push(currentMatch);
            }
            teamVar += 2;
        }
        return matches;
    };


    let groupA = [];
    let groupB = [];
    let groupC = [];
    let groupD = [];
    let groupE = [];
    let groupF = [];
    let groupG = [];
    let groupH = [];
  

    const handleFixture = () => {


        const shuffled = [...schoolList]; // Create a copy of the array
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
        }
       // console.log(shuffled)

        // const matchData = {
        //     matchId, teamId1, score1, formation1, teamId2, score2, formation2, group: fixtureData[matchId].group       //for standing table
        // }

        let newDataA = []
        for(let i=0;i<4;i++){
         //   console.log(shuffled[i]);
            const grp = {
               ... shuffled[i],name:'A'
            }
            fetch('http://localhost:3000/standinga', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grp) // Only needed for JSON data
            })
                .then(response => {
                    // Handle successful response
                    if (response.ok) {
                        return response.json(); // Convert to JSON if needed
                    } else {
                        throw new Error(`Error: ${response.status}`);
                    }
                })
                .then(responseData => {
                    // Process response data
                    newDataA.push(responseData)
                    setStandDataA([...newDataA, ...standDataA])
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });
            groupA.push(grp)
        }
        

      
       //console.log(groupA)

        let newDataB = []
        for(let i=4;i<8;i++){       //B

            const grp = {
                ...shuffled[i], name: 'B'
            }

            fetch('http://localhost:3000/standingb', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grp) // Only needed for JSON data
            })
                .then(response => {
                    // Handle successful response
                    if (response.ok) {
                        return response.json(); // Convert to JSON if needed
                    } else {
                        throw new Error(`Error: ${response.status}`);
                    }
                })
                .then(responseData => {
                    // Process response data
                    newDataB.push(responseData)
                    setStandDataB([...newDataB, ...standDataB])
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });

            groupB.push(grp)
            //console.log(shuffled[i]);
        }


       let newDataC = []
        for(let i = 8;i<12;i++){            //C
            const grp = {
                ...shuffled[i], name: 'C'
            }

            fetch('http://localhost:3000/standingc', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grp) // Only needed for JSON data
            })
                .then(response => {
                    // Handle successful response
                    if (response.ok) {
                        return response.json(); // Convert to JSON if needed
                    } else {
                        throw new Error(`Error: ${response.status}`);
                    }
                })
                .then(responseData => {
                    // Process response data
                    newDataC.push(responseData)
                    setStandDataC([...newDataC, ...standDataC])
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });

            groupC.push(grp)
        }
        let newDataD = []
        for(let i = 12;i<16;i++){           //D
            const grp = {
                ...shuffled[i], name: 'D'
            }

            fetch('http://localhost:3000/standingd', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grp) // Only needed for JSON data
            })
                .then(response => {
                    // Handle successful response
                    if (response.ok) {
                        return response.json(); // Convert to JSON if needed
                    } else {
                        throw new Error(`Error: ${response.status}`);
                    }
                })
                .then(responseData => {
                    // Process response data
                    newDataD.push(responseData)
                    setStandDataD([...newDataD, ...standDataD])
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });

            groupD.push(grp)
        }
        let newDataE = []
        for(let i = 16;i<20;i++){               //E
            const grp = {
                ...shuffled[i], name: 'E'
            }
            fetch('http://localhost:3000/standinge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grp) // Only needed for JSON data
            })
                .then(response => {
                    // Handle successful response
                    if (response.ok) {
                        return response.json(); // Convert to JSON if needed
                    } else {
                        throw new Error(`Error: ${response.status}`);
                    }
                })
                .then(responseData => {
                    // Process response data
                    newDataE.push(responseData)
                    setStandDataE([...newDataE, ...standDataE])
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });
            groupE.push(grp)
        }

       let newDataF = []
        for(let i = 20;i<24;i++){               //F
            const grp = {
                ...shuffled[i], name: 'F'
            }

            fetch('http://localhost:3000/standingf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grp) // Only needed for JSON data
            })
                .then(response => {
                    // Handle successful response
                    if (response.ok) {
                        return response.json(); // Convert to JSON if needed
                    } else {
                        throw new Error(`Error: ${response.status}`);
                    }
                })
                .then(responseData => {
                    // Process response data
                    newDataF.push(responseData)
                    setStandDataF([...newDataF, ...standDataF])
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });

            groupF.push(grp)
        }

        let newDataG = []
        for(let i = 24;i<28;i++){           //G
            const grp = {
                ...shuffled[i], name: 'G'
            }

            fetch('http://localhost:3000/standingg', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grp) // Only needed for JSON data
            })
                .then(response => {
                    // Handle successful response
                    if (response.ok) {
                        return response.json(); // Convert to JSON if needed
                    } else {
                        throw new Error(`Error: ${response.status}`);
                    }
                })
                .then(responseData => {
                    // Process response data
                    newDataG.push(responseData)
                    setStandDataG([...newDataG, ...standDataG])
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });
            groupG.push(grp)
            
        }
        let newDataH = []
        for(let i = 28;i<32;i++){           //H
            const grp = {
                ...shuffled[i], name: 'H'
            }
            fetch('http://localhost:3000/standingh', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grp) // Only needed for JSON data
            })
                .then(response => {
                    // Handle successful response
                    if (response.ok) {
                        return response.json(); // Convert to JSON if needed
                    } else {
                        throw new Error(`Error: ${response.status}`);
                    }
                })
                .then(responseData => {
                    // Process response data
                    newDataH.push(responseData)
                    setStandDataH([...newDataH, ...standDataH])
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error:', error);
                });
            groupH.push(grp)
        }


        //    -----------------------------added all the group matches to allMatches---------------------------------

        const allGroups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH /* other groups */];
        const allMatches = allGroups.flatMap((Group, index) => generateMatches(Group, Group[index%4]?.name)); // Combine and flatten
        setAllMatches(allMatches);


        let match = []      //take one team from each group ...generate match list

        for(let i=0;i<6;i++){
            for (let j = i;j<48;j+=6){
               // console.log(allMatches[j]);
                match.push(allMatches[j]);
            }
        }

       
        
        // Swal.fire({

        //     icon: "error",
        //     title: "Oops...",
        //     text: "Fixture already created!",
        // });
    
       // console.log(allMatchesClone)

        const url = "http://localhost:3000/groupclone"          //send suffled fixture to the database
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(match),
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                //console.log('Response:', data);
                if (data.insertedCount===48){
                    setFixtureData(match)           //---------set fixture data-------------
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Fixture Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


   
    

    return (
        <div className='bg-slate-200 w-full '>

            <button onClick={handleFixture}  className="btn btn-xs sm:btn-sm md:btn-md mx-auto mt-7">Create Fixture</button>
            <h2 style={{marginLeft:'350px'}} className='font-bold py-5'> Match Schedule</h2>

            {fixtureData.map((match, index) => (
                // <li key={`${match.round}-${match.match}`} className='py-2 px-6 bg-slate-400 mt-1'>
                //     Match {index + 1}: {match.homeTeam} vs {match.awayTeam}
                // </li>
                <FixtureCard
                    key={index} index={index} team1={match.homeTeam} team2={match.awayTeam} groupName = {match.group}
                ></FixtureCard>
            ))}
        </div>

    );
};

export default Fixture;
