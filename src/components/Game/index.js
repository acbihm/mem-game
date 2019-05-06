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
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        this.setState({ data: this.mixColors(this.state.data) });
    }

    correctPick = newData => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);

        this.setState({
            data: this.mixColors(newData),
            score: newScore,
            topScore: newTopScore
        });
        if (this.newScore === 20){
            alert("You WON!")
        }
    };

    wrongPick = data => {
        this.setState({
            data: this.resetData(data),
            score: 0
        });
    };

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.mixColors(resetData);
    };


    mixColors = data => {
        let i = data.length - 1;
        while (i > 0) {
            const randomNum = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[randomNum];
            data[randomNum] = temp;
            i--;
        }
        return data;
    };

    colorPick = id => {
        let correct = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    correct = true;
                }
            }
            return newItem;
        });
        correct ? this.correctPick(newData): this.wrongPick(newData);
    };

    render() {
        return (
            <div>
            
                <Scorebar score={this.state.score} topScore={this.state.topScore} />
                <Header />
                <Wrapper>
                    {this.state.data.map(item => (
                        <Image
                            key={item.id}
                            id={item.id}
                            clicked={this.colorPick}
                            image={item.image}
                        />
                    ))}</Wrapper>
                    <Footer />
                
                
            </div>
        );
    }
}

export default Game;
