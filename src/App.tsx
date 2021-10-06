import React from 'react';
import './App.css';
import {useStore} from "./store";

const App = () => {
    const pagesVisited = useStore(state => state.pagesVisited)
    const incrementPageVisit = useStore(state => state.incrementFoodPageVisited)
    return (
        <div className="App">
            <h1>Hello Visitor</h1>
            <br/>
            <h2>Total Food Pages Visited: {pagesVisited}</h2>
            <button onClick={incrementPageVisit}>Increment Page Visit</button>
        </div>
    );
}

export default App;
