import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';



export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    

    const createUser  = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false)
        });
        return ()=>{
            unSubscribe();
        }

    },[])



    const [schoolList,setSchoolList] = useState([]);
    const [fixtureData, setFixtureData] = useState([])
    const [standDataA, setStandDataA] = useState([]);
    const [standDataB, setStandDataB] = useState([]);
    const [standDataC, setStandDataC] = useState([]);
    const [standDataD, setStandDataD] = useState([]);
    const [standDataE, setStandDataE] = useState([]);
    const [standDataF, setStandDataF] = useState([]);
    const [standDataG, setStandDataG] = useState([]);
    const [standDataH, setStandDataH] = useState([]);
    const [playerInfo, setPlayerInfo] = useState([]);
    const [topScorer, setTopScorer] = useState([]);
    const [topAssist, setTopAssist] = useState([]);
    const [topYellowCard, setTopYellowCard] = useState([]);
    const [topRedCard, setTopRedCard] = useState([]);
    const [management, setManagement] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/showschool')
            .then(response => response.json())
            .then(da => setSchoolList(da))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/groupclone')
            .then(response => response.json())
            .then(da => setFixtureData(da))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // -------------------------------------standing------------------------------

    for (let i = 97; i <= 104; i++) {
        const chr = String.fromCharCode(i)
   
        useEffect(() => {
            fetch(`http://localhost:3000/standing/${chr}`)
                .then(response => response.json())
                .then(data => 
                    {
                    switch (chr) {
                        case 'a':
                            setStandDataA(data);
                            break;
                        case 'b':
                            setStandDataB(data);
                            break;
                        case 'c':
                            setStandDataC(data);
                            break;
                        case 'd':
                            setStandDataD(data);
                            break;
                        case 'e':
                            setStandDataE(data);
                            break;
                        case 'f':
                            setStandDataF(data);
                            break;
                        case 'g':
                            setStandDataG(data);
                            break;
                        case 'h':
                            setStandDataH(data);
                            break;
                        
                        // ... add cases for other characters
                        default:
                            console.error('Unexpected character:', chr);
                    }
                    })
                .catch(error => console.error('Error fetching data:', error));
        }, []);
       
    }

   

    // ---------------------------------------------------------------------------

    useEffect(() => {                   //get all player info
        fetch('http://localhost:3000/playerinfo')
            .then(response => response.json())
            .then(data => setPlayerInfo(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {                   //get all player info
        fetch('http://localhost:3000/topscorer')
            .then(response => response.json())
            .then(data => setTopScorer(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {                   //get all player info
        fetch('http://localhost:3000/topassist')
            .then(response => response.json())
            .then(data => setTopAssist(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {                   //get all player info
        fetch('http://localhost:3000/topyellowcard')
            .then(response => response.json())
            .then(data => setTopYellowCard(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {                   //get all player info
        fetch('http://localhost:3000/topredcard')
            .then(response => response.json())
            .then(data => setTopRedCard(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {                   //get all player info
        fetch('http://localhost:3000/management')
            .then(response => response.json())
            .then(data => setManagement(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);



    const authInfo = {
        user,
        setUser,createUser,logOut,logIn,loading,setLoading,schoolList,setSchoolList,
        fixtureData,setFixtureData,standDataA,setStandDataA,standDataB,setStandDataB,
        standDataC,setStandDataC,standDataD,setStandDataD,standDataE,setStandDataE,
        standDataF,setStandDataF,standDataG,setStandDataG,standDataH,setStandDataH,

        playerInfo,setPlayerInfo,topScorer,setTopScorer,topAssist,topYellowCard,topRedCard,
        management,setManagement
    }

   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;