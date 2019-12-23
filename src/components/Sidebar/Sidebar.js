import React from 'react';
import Navigation from './Navigation';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="Sidebar">
                <h4>Contents</h4>
                <Navigation posts={this.props.posts} />
            </div>
        );
    }
}

export default Sidebar;
