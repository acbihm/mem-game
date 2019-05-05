import React from "react";
import Score from "../Score";
import "./style.css";

// Component for the Navbar

function Scorebar(props) {
    return (
        <nav className="bar">
            <ul>
                <li>
                    <a href="/">Memory Game</a>
                </li>
                <Score score={props.score} topScore={props.topScore} />
                <li>
                    Score: {props.score}  |   Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    );
}

export default Scorebar;
