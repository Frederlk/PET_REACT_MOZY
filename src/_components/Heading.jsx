import React from "react";

const Heading = ({ className, label, title, text }) => {
    return (
        <div className={`${className || ""} heading`}>
            {label && <h6 className="heading__label">{label}</h6>}
            <h2 className="heading__title">{title}</h2>
            {text && <p className="heading__text">{text}</p>}
        </div>
    );
};

export default Heading;
