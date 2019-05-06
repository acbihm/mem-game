import React from "react";
import "./style.css";


function Wrapper(props) {
    return <main className="wrapper">{props.children}</main>;
    //It renders nothing, just returns
}



export default Wrapper;