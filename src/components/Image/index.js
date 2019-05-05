import React from "react";
import "./style.css";

function Image(props) {
    return (
        <div
            role="img"
            aria-label="click item"
            onClick={() => props.handleClick(props.id)}
            style={{ backgroundImage: `url("${props.image}")` }}
            className={`img-block${props.shake ? " shake" : ""}`}
        />
    );
}

export default Image;

