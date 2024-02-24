import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import FixtureCard from '../FixtureCard/FixtureCard';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; 




const Fixture = () => {

    
    const { schoolList } = useContext(AuthContext);
    const { fixtureData, setFixtureData } = useContext(AuthContext);
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
                    group:grp
                };

                matches.push(currentMatch);
            }
            teamVar += 2;
        }
        return matches;
    };
  


    const handleFixture = () => {

        let matches;

        const shuffled = [...schoolList]; // Create a copy of the array
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
        }
       // console.log(shuffled)

       let groupA = [];
       let groupB = [];
       let groupC = [];
       let groupD = [];
       let groupE = [];
       let groupF = [];
       let groupG = [];
       let groupH = [];

        let newAllMatches;


        for(let i=0;i<4;i++){
         //   console.log(shuffled[i]);
            const grp = {
               ... shuffled[i],name:'A'
            }
            groupA.push(grp)
        }
     

    

        for(let i=4;i<8;i++){

            const grp = {
                ...shuffled[i], name: 'B'
            }
            groupB.push(grp)
            //console.log(shuffled[i]);
        }

  
        //console.log(allMatches)


        for(let i = 8;i<12;i++){
            const grp = {
                ...shuffled[i], name: 'C'
            }
            groupC.push(grp)
        }
        for(let i = 12;i<16;i++){
            const grp = {
                ...shuffled[i], name: 'D'
            }
            groupD.push(grp)
        }
        for(let i = 16;i<20;i++){
            const grp = {
                ...shuffled[i], name: 'E'
            }
            groupE.push(grp)
        }
        for(let i = 20;i<24;i++){
            const grp = {
                ...shuffled[i], name: 'F'
            }
            groupF.push(grp)
        }
        for(let i = 24;i<28;i++){
            const grp = {
                ...shuffled[i], name: 'G'
            }
            groupG.push(grp)
            
        }
        for(let i = 28;i<32;i++){
            const grp = {
                ...shuffled[i], name: 'H'
            }
            groupH.push(grp)
        }


        //    -----------------------------added all the group matches to allMatches---------------------------------

        const allGroups = [groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH /* other groups */];
        const allMatches = allGroups.flatMap((Group, index) => generateMatches(Group, Group[index%4].name)); // Combine and flatten

        setAllMatches(allMatches);

        //console.log(allMatches)

        let match = []

        for(let i=0;i<6;i++){
            for (let j = i;j<48;j+=6){
               // console.log(allMatches[j]);
                match.push(allMatches[j]);
            }
        }

        setAllMatchesClone(match)


        // Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "Fixture already created!",
        // });
    }

    console.log(allMatchesClone)

    return (
        <div className='bg-slate-200 w-full '>

            <button onClick={handleFixture}  className="btn btn-xs sm:btn-sm md:btn-md mx-auto mt-7">Create Fixture</button>
            <h2 style={{marginLeft:'350px'}} className='font-bold py-5'> Match Schedule</h2>

            {allMatchesClone.map((match, index) => (
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
