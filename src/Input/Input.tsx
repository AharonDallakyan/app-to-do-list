import React from "react";
interface Props {
    Input:string,
    Placeholder:string
    
}

function Input({Input,Placeholder}:Props):any{
    return <input type={Input} placeholder={Placeholder}/>
}

export default Input