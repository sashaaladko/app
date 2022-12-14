import React from "react";
import './buttonComponent.scss'

interface IProps {
    color?: string;
    size?: string;
    name?: string;
    text?: string;
    func?: ()=>void;
    icon? :any;
}

const ButtonComponent: React.FC<IProps> = ({color, size, name, text, func, icon}) => {
 
    return (
        <button className={`buttonIcon ${color} ${size} ${name}` } onClick={func}>{icon}<a>{text}</a> </button>
    )
}

export default ButtonComponent