import React from "react"
interface buttonText {
    click():any
    Text: string,
    Style?:string
}

const Button = ({click,Text,Style}:buttonText) => {
    return <button  type="button" onClick={click}  className={Style}>{Text}</button>
}


export  default Button
