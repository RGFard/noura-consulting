import React from "react";
import { navigate } from 'gatsby';


const Button = ({ caption, wide }) => {
    const className = wide === true ? "btn__specs btn__wide" : "btn__specs";
    const onClick = () => navigate("/under-construction");

    return (
        <div className="btn">
            <button className={className} onClick={onClick}>{caption}</button>
        </div>
    );
};

export default Button;