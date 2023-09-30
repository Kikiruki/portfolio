import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Tabs from "./components/Tabs/Tabs";
import Stories from "./components/Stories/Stories";
import Work from "./components/Work/Work";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <div>
            <Navigation />
            <main>
                <Header />
                <Stories />
                <Tabs />
                <Router>
                    <Routes>
                        <Route path="/" exact element={<Work />} />
                        <Route path="/works" exact element={<Work />} />
                        <Route path="/skills" exact element={<Skills />} />
                        <Route path="/about" exact element={<About />} />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;