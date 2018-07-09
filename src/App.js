import React from 'react';
import './App.css';
import Quote from "./components/quote.component";

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Quote/>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default App;
