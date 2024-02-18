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

    useEffect(() => {
        fetch('http://localhost:3000/showschool')
            .then(response => response.json())
            .then(da => setSchoolList(da))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const [fixtureData,setFixtureData ] =  useState([])

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
        setFixtureData
    }

   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;