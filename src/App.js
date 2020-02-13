import React from 'react';
import './App.css';

import initialState from './state/initial';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <div className="App">
                <Sidebar />
                <Content />
            </div>
        );
    }
}

export default App;
