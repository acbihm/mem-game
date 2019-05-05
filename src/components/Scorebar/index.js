import React from "react";
import ScoreCount from "../ScoreCount";
import "./style.css";

function Scorebar(props) {
    return (
        <nav className="bar">
            <ul>
                <li>
                    <a href="/">Memory Game</a>
                </li>
                <ScoreCount score={props.score} topScore={props.topScore} />
                <li>
                    Score: {props.score}  |   Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    );
}

export default Scorebar;
