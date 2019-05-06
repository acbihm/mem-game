import React from "react";
import "./style.css";

function Image(props) {
    return (
        <div
            onClick={() => props.clicked(props.id)}
            style={{ backgroundImage: `url("${props.image}")` }}
            className={'img-block'}
        />
    );
}

export default Image;

