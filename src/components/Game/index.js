import React, { Component } from "react";
import Scorebar from "../Scorebar";
import Header from "../Header";
import Wrapper from "../Wrapper";
import Image from "../Image";
import Footer from "../Footer";
import data from "../../data.json";

class Game extends Component {
    state = {
        data,
        correctNum: 0,
        topScore: 0
    };

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

    handleCorrectGuess = newData => {
        const { topScore, correctNum } = this.state;
        const newScore = correctNum + 1;
        const newTopScore = Math.max(newScore, topScore);

        this.setState({
            data: this.shuffleData(newData),
            correctNum: newScore,
            topScore: newTopScore
        });
    };

    handleIncorrectGuess = data => {
        this.setState({
            data: this.resetData(data),
            correctNum: 0
        });
    };

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleData(resetData);
    };

    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    handleItemClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newItem;
        });
        guessedCorrectly
            ? this.handleCorrectGuess(newData)
            : this.handleIncorrectGuess(newData);
    };

    render() {
        return (
            <div>
            <Wrapper>
                <Scorebar score={this.state.score} topScore={this.state.topScore} />
                <Header />
                
                    {this.state.data.map(item => (
                        <Image
                            key={item.id}
                            id={item.id}
                            shake={!this.state.score && this.state.topScore}
                            handleClick={this.handleItemClick}
                            image={item.image}
                        />
                    ))}
                    <Footer />
                </Wrapper>
                
            </div>
        );
    }
}

export default Game;
