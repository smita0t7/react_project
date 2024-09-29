// App.js
import React from "react";
import WordLetterCounter from "./WordLetterCounter.js";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1 id="top">
            GeeksforGeeks
            </h1>
            <h1>
            Words and Letters
            Counter
            </h1>
            <WordLetterCounter />
        </div>
    );
}

export default App;
