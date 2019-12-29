import React from 'react';
import './App.css';

import initialState from './state/initial';
import ContentContainer from './components/Content/ContentContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="App">
        <SidebarContainer />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
