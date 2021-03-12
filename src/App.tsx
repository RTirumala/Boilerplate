import React from 'react';
import './App.css';
import Home from './screens/home/HomeContainer';

function App(): JSX.Element {
    return (
        <div className="container mx-auto px-4 bg-gray-100">
            <Home />
        </div>
    );
}

export default App;
