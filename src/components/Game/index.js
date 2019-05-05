
import React, { Component } from "react";
import "./style.css";
import Scorebar from "../Scorebar";
import Header from "../Header";
import Wrapper from "../Wrapper";
// import Image from "../Image";
// import Scorebar from "../Scorebar";
import Footer from "../Footer";
// import data from "../../data.json";



class Game extends Component {
    // state = {
    //     data,
    //     score: 0,
    //     topScore: 0
    // };


    render() {
        return (
            <div>
                <Wrapper>
                    <Scorebar />
                    <Header />
                    <Footer />
                </Wrapper>
            </div>
        );
    }
}
export default Game;