import React from 'react';
import Publications from './components/publications';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>OLX Parser</h1>
            </header>
            <Publications />
        </div>
    );
};

export default App;
