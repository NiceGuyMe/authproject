import React from 'react'

function Welcome(){
    return(
        <>
            <button className="btn"><span>log out</span></button>
            <video style={{width : "100vw"}} controls autoPlay={true} muted loop >
                <source src={require('../video/Welcome Intro - welcome video _ No copyright video _ NC videos..mp4')} type="video/mp4" />
            </video>
        </>
    );
}
export default Welcome;