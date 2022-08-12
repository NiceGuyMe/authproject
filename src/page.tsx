import React from 'react';

export default function Page(){
    return(
      <>
          <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
              <div className="w3-display-topleft w3-padding-large w3-xlarge">
                  Logo
              </div>
              <div className="w3-display-middle">
                  <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
                  <hr className="w3-border-grey"></hr>
                      <p className="w3-large w3-center">35 days left</p>
              </div>
              <div className="w3-display-bottomleft w3-padding-large">
                  Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
              </div>
          </div>

      </>
    );
}
