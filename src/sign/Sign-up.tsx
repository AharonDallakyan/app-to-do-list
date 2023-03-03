import Input from "../Input/Input";
import Svg from "../svgFile/Svg";
import Logo2 from '../svgFile/Logo2.svg'
import {Link} from 'react-router-dom';

function SignUp():any{  
    return (
        <div >
                <button > <Link to='/' > <Svg Logo={Logo2} cN={"toDoList-logo2"}  /></Link></button>
                <p className="onBoard">Welcome Onboard</p>
                <h2 className="text2">Let’s help you meet up your task </h2>
            <div className="inputDiv">
                <Input Input="text" Placeholder="Enter your full name" />
                <Input Input="mail" Placeholder="Enter your email addres" />
                <Input Input="password" Placeholder="Create a Password"/>
                <Input Input="password" Placeholder="Coonfirm your Password" />
            </div>
            <button className="but"> Sign Up</button>
                 <h3 className="endText" > Already have an account ? Sign In </h3>
        </div>   
)
}
export default SignUp