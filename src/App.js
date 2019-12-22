import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Content from './components/Content';
import initialState from './state/initial';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Content
          title={this.state.title}
          description={this.state.description}
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default App;
