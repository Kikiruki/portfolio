import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Tabs from "./components/Tabs/Tabs";
import Stories from "./components/Stories/Stories";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
    const statistics = [];
    for (let i = 1; i < 19; i++) {
        statistics.push('stat_' + i);
    }

    const randomStats = shuffle(statistics).slice(0, 3);

    return (
        <div>
            <Navigation/>
            <main>
                <Header stats={randomStats}/>
                <Stories/>
                <Tabs stats={randomStats}/>

                <Routes>
                    <Route path="/" exact element={<Work/>}/>
                    <Route path="/works" exact element={<Work/>}/>
                    <Route path="/skills" exact element={<Skills/>}/>
                    <Route path="/about" exact element={<About/>}/>
                </Routes>
            </main>
        </div>
    );

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex > 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
}

export default App;