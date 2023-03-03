import React from "react";
import Svg from "../svgFile/Svg";
import Logo from '../svgFile/Logo.svg'
import {Link} from 'react-router-dom';

const Header=()=>{
  return(
    <div>
      <div>
        <Svg  Logo={Logo} cN={'toDoList-logo'}/>
        <p className="paragrap">Get things done with TODo</p>
        <h2 className="text"> Lorem ipsum dolor sit amet,
        consectetur adipisicing. Maxime,
        tempore! Animi nemo aut atque,
        deleniti nihil dolorem repellendus.</h2>
      </div>
        <button  className="SIgnButton"> <Link to='/signUp'> Get Started</Link></button> 
    </div>
)
}

export default Header