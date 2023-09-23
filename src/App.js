import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Tabs from "./components/Tabs/Tabs";
import Stories from "./components/Stories/Stories";
import Work from "./components/Work/Work";

function App() {
    return (
        <div>
            <Navigation />
            <main>
                <Header />
                <Stories />
                <Tabs />
                <Work />
            </main>
        </div>
    );
}

export default App;