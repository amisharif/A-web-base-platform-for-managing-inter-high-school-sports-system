import React, { useContext } from 'react';
import './KnockoutStage.css'
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import useKnockoutMatch from '../../customHook/useKnockoutMatch';


const KnockoutStage = () => {

    const {
        schoolList,
        standDataA,
        standDataB,
        standDataC,
        standDataD,
        standDataE,
        standDataF,
        standDataG,
        standDataH,
    } = useContext(AuthContext);

    const [knockoutMatch,refetch] = useKnockoutMatch();
   // console.log(knockoutMatch);

   //--------------------------------Quarter final--------------------------

    let qf1 ="";
    let qf2 ="";
    let qf3 ="";
    let qf4 ="";
    let qf5 ="";
    let qf6 ="";
    let qf7 ="";
    let qf8 ="";
    
    if(knockoutMatch[0]?.goals_scored1>knockoutMatch[0]?.goals_scored2){
        qf1 = knockoutMatch[0]?.eiin1;
    }else{
        qf1 = knockoutMatch[0]?.eiin2;
    }
    if(knockoutMatch[1]?.goals_scored1>knockoutMatch[1]?.goals_scored2){
        qf2 = knockoutMatch[1]?.eiin1;
    }else{
        qf2 = knockoutMatch[1]?.eiin2;
    }
    if(knockoutMatch[2]?.goals_scored1>knockoutMatch[2]?.goals_scored2){
        qf3 = knockoutMatch[2]?.eiin1;
    }else{
        qf3 = knockoutMatch[2]?.eiin2;
    }
    if(knockoutMatch[3]?.goals_scored1>knockoutMatch[3]?.goals_scored2){
        qf4 = knockoutMatch[3]?.eiin1;
    }else{
        qf4 = knockoutMatch[3]?.eiin2;
    }
    if(knockoutMatch[4]?.goals_scored1>knockoutMatch[4]?.goals_scored2){
        qf5 = knockoutMatch[4]?.eiin1;
    }else{
        qf5 = knockoutMatch[4]?.eiin2;
    }
    if(knockoutMatch[5]?.goals_scored1>knockoutMatch[5]?.goals_scored2){
        qf6 = knockoutMatch[5]?.eiin1;
    }else{
        qf6 = knockoutMatch[5]?.eiin2;
    }
    if(knockoutMatch[6]?.goals_scored1>knockoutMatch[6]?.goals_scored2){
        qf7 = knockoutMatch[6]?.eiin1;
    }else{
        qf7 = knockoutMatch[6]?.eiin2;
    }
    if(knockoutMatch[7]?.goals_scored1>knockoutMatch[7]?.goals_scored2){
        qf8 = knockoutMatch[7]?.eiin1;
    }else{
        qf8 = knockoutMatch[7]?.eiin2;
    }

    const qf1N = schoolList.filter((item) =>
        item.id.includes(qf1)
    );
    const qf2N = schoolList.filter((item) =>
        item.id.includes(qf2)
    );
    const qf3N = schoolList.filter((item) =>
        item.id.includes(qf3)
    );
    const qf4N = schoolList.filter((item) =>
        item.id.includes(qf4)
    );
    const qf5N = schoolList.filter((item) =>
        item.id.includes(qf5)
    );
    const qf6N = schoolList.filter((item) =>
        item.id.includes(qf6)
    );
    const qf7N = schoolList.filter((item) =>
        item.id.includes(qf7)
    );
    const qf8N = schoolList.filter((item) =>
        item.id.includes(qf8)
    );



    function removeLowerChars(str) {
        // Use regular expression to match only uppercase letters
        const regex = /[A-Z]/g;
        return str?.match(regex)?.join("");
    }

    const qf1Name = removeLowerChars(qf1N[0]?.name);
    const qf2Name = removeLowerChars(qf2N[0]?.name);
    const qf3Name = removeLowerChars(qf3N[0]?.name);
    const qf4Name = removeLowerChars(qf4N[0]?.name);
    const qf5Name = removeLowerChars(qf5N[0]?.name);
    const qf6Name = removeLowerChars(qf6N[0]?.name);
    const qf7Name = removeLowerChars(qf7N[0]?.name);
    const qf8Name = removeLowerChars(qf8N[0]?.name);

    

//--------------------------Round of 16-----------------------------------------

    const A1 = schoolList.filter((item) => item.id.includes(standDataA[0]?.eiin));
    const A2 = schoolList.filter((item) =>
        item.id.includes(standDataA[1]?.eiin)
    );

    const B1 = schoolList.filter((item) =>
        item.id.includes(standDataB[0]?.eiin)
    );
    const B2 = schoolList.filter((item) =>
        item.id.includes(standDataB[1]?.eiin)
    );
    
    const C1 = schoolList.filter((item) =>
        item.id.includes(standDataC[0]?.eiin)
    );
    const C2 = schoolList.filter((item) =>
        item.id.includes(standDataC[1]?.eiin)
    );
    const D1 = schoolList.filter((item) =>
        item.id.includes(standDataD[0]?.eiin)
    );
    const D2 = schoolList.filter((item) =>
        item.id.includes(standDataD[1]?.eiin)
    );
    const E1 = schoolList.filter((item) =>
        item.id.includes(standDataE[0]?.eiin)
    );
    const E2 = schoolList.filter((item) =>
        item.id.includes(standDataE[1]?.eiin)
    );
    const F1 = schoolList.filter((item) =>
        item.id.includes(standDataF[0]?.eiin)
    );
    const F2 = schoolList.filter((item) =>
        item.id.includes(standDataF[1]?.eiin)
    );
    const G1 = schoolList.filter((item) =>
        item.id.includes(standDataG[0]?.eiin)
    );
    const G2 = schoolList.filter((item) =>
        item.id.includes(standDataG[1]?.eiin)
    );
    const H1 = schoolList.filter((item) =>
        item.id.includes(standDataH[0]?.eiin)
    );
    const H2 = schoolList.filter((item) =>
        item.id.includes(standDataH[1]?.eiin)
    );




    const A1name = removeLowerChars(A1[0]?.name);
    const A2name = removeLowerChars(A2[0]?.name);

    const B1name = removeLowerChars(B1[0]?.name);
    const B2name = removeLowerChars(B2[0]?.name);

    const C1name = removeLowerChars(C1[0]?.name);
    const C2name = removeLowerChars(C2[0]?.name);

    const D1name = removeLowerChars(D1[0]?.name);
    const D2name = removeLowerChars(D2[0]?.name);
   
    const E1name = removeLowerChars(E1[0]?.name);
    const E2name = removeLowerChars(E2[0]?.name);

    const F1name = removeLowerChars(F1[0]?.name);
    const F2name = removeLowerChars(F2[0]?.name);
    
    const G1name = removeLowerChars(G1[0]?.name);
    const G2name = removeLowerChars(G2[0]?.name);

    const H1name = removeLowerChars(H1[0]?.name);
    const H2name = removeLowerChars(H2[0]?.name);


    let sf1="";
    let sf2="";
    let sf3="";
    let sf4="";


    if (knockoutMatch[8]?.goals_scored1 > knockoutMatch[8]?.goals_scored2) {
        sf1 = knockoutMatch[8]?.eiin1;
    } else {
        sf1 = knockoutMatch[8]?.eiin2;
    }
    if (knockoutMatch[9]?.goals_scored1 > knockoutMatch[9]?.goals_scored2) {
        sf2 = knockoutMatch[9]?.eiin1;
    } else {
        sf2 = knockoutMatch[9]?.eiin2;
    }
    if (knockoutMatch[10]?.goals_scored1 > knockoutMatch[10]?.goals_scored2) {
        sf3 = knockoutMatch[10]?.eiin1;
    } else {
        sf3 = knockoutMatch[10]?.eiin2;
    }
    if (knockoutMatch[11]?.goals_scored1 > knockoutMatch[11]?.goals_scored2) {
        sf4 = knockoutMatch[11]?.eiin1;
    } else {
        sf4 = knockoutMatch[11]?.eiin2;
    }

   

    const sf1N = schoolList.filter((item) => item.id.includes(sf1));
    const sf2N = schoolList.filter((item) => item.id.includes(sf2));
    const sf3N = schoolList.filter((item) => item.id.includes(sf3));
    const sf4N = schoolList.filter((item) => item.id.includes(sf4));



    const sf1Name = removeLowerChars(sf1N[0]?.name);
    const sf2Name = removeLowerChars(sf2N[0]?.name);
    const sf3Name = removeLowerChars(sf3N[0]?.name);
    const sf4Name = removeLowerChars(sf4N[0]?.name);
    

    let f1 ="";
    let f2 = "";
    
     if (knockoutMatch[12]?.goals_scored1 > knockoutMatch[12]?.goals_scored2) {
         f1 = knockoutMatch[12]?.eiin1;
     } else {
         f1 = knockoutMatch[12]?.eiin2;
     }
     if (knockoutMatch[13]?.goals_scored1 > knockoutMatch[13]?.goals_scored2) {
         f2 = knockoutMatch[13]?.eiin1;
     } else {
         f2 = knockoutMatch[13]?.eiin2;
     }

    const fn1 = schoolList.filter((item) =>
        item.id.includes(f1)
    );
    const fn2 = schoolList.filter((item) =>
        item.id.includes(f2)
    );

    const f1Name = removeLowerChars(fn1[0]?.name);
    const f2Name = removeLowerChars(fn2[0]?.name);

    let champion="";
    if (knockoutMatch[14]?.goals_scored1 > knockoutMatch[14]?.goals_scored2) {
        champion = knockoutMatch[14]?.eiin1;
    } else {
        champion = knockoutMatch[14]?.eiin2;
    }
    const cp = schoolList.filter((item) => item.id.includes(champion));
    const cpName = removeLowerChars(cp[0]?.name);
    console.log(cpName)

    return (
        <div className="tournament-container">
            <div className="tournament-headers">
                <h3>Round of 16</h3>
                <h3>Quarter-Finals</h3>
                <h3>Semi-Finals</h3>
                <h3>Final</h3>
                <h3>Winner</h3>
            </div>

            <div className="tournament-brackets">
                <ul className="bracket bracket-1">
                    {/* <li className="team-item">A1 vs B2</li>
                    <li className="team-item">A2 vs B1</li>
                    <li className="team-item">C1 vs D2</li>
                    <li className="team-item">C2 vs D1</li>
                    <li className="team-item">E1 vs F2</li>
                    <li className="team-item">E2 vs F1</li>
                    <li className="team-item">G1 vs H2</li>
                    <li className="team-item">G2 vs H1</li> */}

                    <li className="team-item">
                        {A1name} vs {B2name}
                    </li>
                    <li className="team-item">
                        {A2name} vs {B1name}
                    </li>
                    <li className="team-item">
                        {C1name} vs {D2name}
                    </li>
                    <li className="team-item">
                        {C2name} vs {D1name}
                    </li>
                    <li className="team-item">
                        {E1name} vs {F2name}
                    </li>
                    <li className="team-item">
                        {E2name} vs {F1name}
                    </li>
                    <li className="team-item">
                        {G1name} vs {H2name}
                    </li>
                    <li className="team-item">
                        {G2name} vs {H1name}
                    </li>
                </ul>
                <ul className="bracket bracket-2">
                    <li className="team-item">
                        {knockoutMatch[0]?.goals_scored1 != -1 &&
                        knockoutMatch[1]?.goals_scored1 != -1
                            ? qf1Name + " VS " + qf2Name
                            : "QF1 vs QF2"}
                    </li>
                    <li className="team-item">
                        {knockoutMatch[2]?.goals_scored1 != -1 &&
                        knockoutMatch[3]?.goals_scored1 != -1
                            ? qf3Name + " VS " + qf4Name
                            : "QF3 vs QF4"}
                    </li>
                    <li className="team-item">
                        {knockoutMatch[4]?.goals_scored1 != -1 &&
                        knockoutMatch[5]?.goals_scored1 != -1
                            ? qf5Name + " VS " + qf6Name
                            : "QF5 vs QF6"}
                    </li>
                    <li className="team-item">
                        {knockoutMatch[6]?.goals_scored1 != -1 &&
                        knockoutMatch[7]?.goals_scored1 != -1
                            ? qf7Name + " VS " + qf8Name
                            : "QF7 vs QF8"}
                    </li>
                </ul>
                <ul className="bracket bracket-3">
                    <li className="team-item">
                        {knockoutMatch[8]?.goals_scored1 != -1 &&
                        knockoutMatch[9]?.goals_scored1 != -1
                            ? sf1Name + " vs " + sf2Name
                            : "SF1 vs SF2"}
                    </li>
                    <li className="team-item">
                        {knockoutMatch[10]?.goals_scored1 != -1 &&
                        knockoutMatch[11]?.goals_scored1 != -1
                            ? sf3Name + " vs " + sf4Name
                            : "SF3 vs SF4"}
                    </li>
                </ul>
                <ul className="bracket bracket-4">
                    <li className="team-item">
                        {knockoutMatch[12]?.goals_scored1 != -1 &&
                        knockoutMatch[13]?.goals_scored1 != -1
                            ? f1Name + " vs " + f2Name
                            : "F1 vs F2"}
                    </li>
                </ul>

                <ul className="bracket bracket-5">
                    <li className="team-item">
                        {knockoutMatch[12]?.goals_scored1 != -1 &&
                        knockoutMatch[13]?.goals_scored1 != -1
                            ? cpName
                            : "National Champion"}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default KnockoutStage;