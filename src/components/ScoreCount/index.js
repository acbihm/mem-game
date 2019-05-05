import React, {Component} from "react";
import "./style.css";
class ScoreCount extends Component {
    state = {
        scoreNum: "",
        shake: false
    };

    componentDidUpdate({ score, topScore }, prevState) {
        const newState = { shake: true };
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
                return "WRONG";
            default:
                return "Click a color block to start!";
        }
    };

    render() {
        return (
            <li
                className={this.state.shake ? this.state.scoreNum : ""}
                onAnimationEnd={() => this.setState({ shake: false })}>
                {this.correctOrWrongMessage()}
            </li>
        );
    }
}

export default ScoreCount;
