import React, { useState } from 'react';
import './App.css';
import { CountProvider } from './context/homeContext';
import Home from './screens/home/HomeContainer';

function App(): JSX.Element {
    const [bodyClass, setBodyClass] = useState('theme-light');

    return (
        <div className="container mx-auto px-4 bg-gray-100">
            <div className="hidden theme-dark theme-light"></div>

            <div className="bg-primary text-secondary">
                <div>{bodyClass}</div>
            </div>
            <div className="bg-white flex space-x-2 px-2 py-2">
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setBodyClass('theme-dark');
                            document.body.classList.remove('theme-light');
                            document.body.classList.add('theme-dark');
                        }}
                    >
                        Dark Theme
                    </button>
                </div>
                <div>
                    <button
                        className="btn btn-secondary"
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
            <CountProvider>
                <Home />
            </CountProvider>
        </div>
    );
}

export default App;
