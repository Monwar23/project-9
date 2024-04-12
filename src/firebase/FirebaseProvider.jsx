import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null)
const auth=getAuth(app)

const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null)

    // create user

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };

      const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo={
        createUser,
        user,
        setUser,
        signIn,logOut
    }

    
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default FirebaseProvider;