import React, {Component} from "react";
import "./style.css";
class Score extends Component {
    state = {
        scoreNum: "",
        shake: false
    };

    componentDidUpdate({ correctNum, topScore }, prevState) {
        const newState = { shake: true };

        if (correctNum === 0 && topScore === 0) {
            newState.scoreNum = "";
        } else if (correctNum === 0 && topScore > 0) {
            newState.scoreNum = "incorrect";
        } else {
            newState.scoreNum = "correct";
        }

        if (correctNum !== this.props.score || this.state.scoreNum !== newState.scoreNum) {
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
                onAnimationEnd={() => this.setState({ shake: false })}
            >
                {this.correctOrWrongMessage()}
            </li>
        );
    }
}

export default Score;
