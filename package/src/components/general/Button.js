import React from "react";
import { navigate } from 'gatsby';


const Button = ({ caption, url, wide, specifiedClass, submit, state }) => {
    let className = wide === true ? "btn__specs btn__wide" : "btn__specs";
    className = className + " " + specifiedClass;
    const onClick = () => (url === "reload") ? window.location.reload() : navigate((url === null || url === undefined) ? "/under-construction" : url);
    let button = <button className={className} onClick={onClick}>{caption}</button>;

    // submit buttons
    if (submit === "submit") {
        button = <button type="submit" disabled={state.submitting} className={className}>{caption}</button>;
    }

    return (
        // <div className="btn">
        <div>
            {button}
        </div>
    );
};

export default Button;