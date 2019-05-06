import React, {Component} from "react";
import "./style.css";
class ScoreCount extends Component {
    state = {
        scoreNum: "",
    };

    componentDidUpdate({ score, topScore }, prevState) {
        const newState = { scoreNum: "" };
        if (score === 0 && topScore === 0) {
            newState.scoreNum = "";
        } else if (score === 0 && topScore > 0) {
            newState.scoreNum = "incorrect";
        } else {
            newState.scoreNum = "correct";
        }
        if (score !== this.props.score || this.state.scoreNum !== newState.scoreNum) {
            this.setState(newState);
        }
    }

    correctOrWrongMessage = () => {
        switch (this.state.scoreNum) {
            case "correct":
                return "GOOD, KEEP GOING!";
            case "incorrect":
                return "WRONG! START OVER!";
            default:
                return "Click a color block to start!";
        }
    };

    render() {
        return (
            <li>
                {this.correctOrWrongMessage()}
            </li>
        );
    }
}

export default ScoreCount;
