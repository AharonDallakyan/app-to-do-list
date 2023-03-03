import React from "react";


interface Log{
  Logo:any,
  cN:string
  
}

function Svg({Logo,cN}:Log){
  return(
    <div>
      <header>
        <img src={Logo} className={cN} alt="logo"></img>
      </header>
    </div>
  )
}

export default Svg