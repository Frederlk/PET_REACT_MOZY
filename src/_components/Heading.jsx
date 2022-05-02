import React from "react";

const Heading = ({ className, title, text }) => {
    return (
        <div className={`${className || ""} heading`}>
            <h2 className="heading__title">{title}</h2>
            {text && <p className="heading__text">{text}</p>}
        </div>
    );
};

export default Heading;
