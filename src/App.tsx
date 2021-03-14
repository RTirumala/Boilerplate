import { doc } from 'prettier';
import React, { useState } from 'react';
import './App.css';
import Home from './screens/home/HomeContainer';

function App(): JSX.Element {
    const [bodyClass, setBodyClass] = useState('theme-dark');

    return (
        <div className="container mx-auto px-4 bg-gray-100">
            <div className="hidden theme-dark theme-light"></div>
            <Home />
            <div className="bg-primary">
                <div>{bodyClass}</div>
            </div>
            <div className="flex">
                <button
                    className="flex-1 bg-gray-500"
                    onClick={() => {
                        setBodyClass('theme-dark');
                        document.body.classList.remove('theme-light');
                        document.body.classList.add('theme-dark');
                    }}
                >
                    Dark Theme
                </button>
                <button
                    className="flex-1 bg-gray-500"
                    onClick={() => {
                        setBodyClass('theme-light');
                        document.body.classList.remove('theme-dark');
                        document.body.classList.add('theme-light');
                    }}
                >
                    Light Theme
                </button>
            </div>
        </div>
    );
}

export default App;
