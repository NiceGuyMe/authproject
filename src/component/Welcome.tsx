import React, {useEffect} from 'react'
import {auth, logout} from "../firebase";
import { useNavigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

function Welcome(){
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
    }, [user, loading, navigate]);
    return(
        <>
            <button className="btn" onClick={logout} ><span>log out</span></button>
            <video style={{width : "100vw"}} controls autoPlay={true} muted loop >
                <source src={require('../video/Welcome Intro - welcome video _ No copyright video _ NC videos..mp4')} type="video/mp4" />
            </video>
        </>
    );
}
export default Welcome;