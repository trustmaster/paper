import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import initialState from './state/initial';
import ContentContainer from './components/Content/ContentContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="App">
        <Sidebar posts={this.state.posts} />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
