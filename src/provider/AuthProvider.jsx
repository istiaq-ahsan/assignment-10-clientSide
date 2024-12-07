import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [allProject, setAllProject] = useState();


    const provider = new GoogleAuthProvider();

    const handleGoogleLogIn = (navigate) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                navigate("/")
            })
            .catch(err => {
                console.log(err.message);
                setUser(null);
            })
            .finally(() => setLoading(false));
    }


    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserData = (userData) => {
        return updateProfile(auth.currentUser, userData);
    }

    const authInfo = {
        createNewUser,
        userLogin,
        user,
        setUser,
        loading,
        setLoading,
        logout,
        updateUserData,
        setAllProject,
        allProject,
        handleGoogleLogIn

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;