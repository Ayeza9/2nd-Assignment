 import Image from "next/image";

import React from "react";


export default function Home() {
  return (
    <>
      {/* Below Code Is With CSS */}
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="bluecolor">Ayeza Haroon</span>
          <br />I am Next JS Developer 
        </div>
        <div className="childContainer" >
           < img className="profile" src={'/profile.png'} alt="profile pic" width={200} height={200}/> 
        </div>
      </div>
    </>
  );
}

