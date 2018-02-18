import React from 'react';
import Search from "../Search";
import "../styles/Home.css";

function Home(props) {
    return (
        <div className="background">
            <div className="home-wrapper">
                <Search />
            </div>
        </div>
    )
}

export default Home;
