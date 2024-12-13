// src/App.jsx
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <h1>Theme Toggle App</h1>
                <ThemeToggle />
                            </div>
        </ThemeProvider>
    );
};

export default App;