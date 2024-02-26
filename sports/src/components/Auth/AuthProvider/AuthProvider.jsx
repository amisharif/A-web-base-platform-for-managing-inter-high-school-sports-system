import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';



export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
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


    useEffect(() => {
        fetch('http://localhost:3000/standdataa')
            .then(response => response.json())
            .then(standA => setStandDataA(standA))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    useEffect(() => {
        fetch('http://localhost:3000/standdatab')
            .then(response => response.json())
            .then(standB => setStandDataB(standB))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/standdatac')
            .then(response => response.json())
            .then(standC => setStandDataC(standC))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/standdatad')
            .then(response => response.json())
            .then(standD => setStandDataD(standD))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/standdatae')
            .then(response => response.json())
            .then(data => setStandDataE(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);




    const authInfo = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        schoolList,
        setSchoolList,
        fixtureData,
        setFixtureData,
        
        standDataA,
        setStandDataA,
        standDataB,
        setStandDataB,
        standDataC,
        setStandDataC,
        standDataD,
        setStandDataD,
        standDataE,
        setStandDataE
    }

   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;