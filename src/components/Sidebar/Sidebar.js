import React from 'react';
import Navigation from './Navigation';

class Sidebar extends React.Component {
    render() {
        const posts = [
            { id: '123', title: 'How I got my first cat' },
            { id: '249', title: 'How I got my second cat' },
        ];
        return (
            <div className="Sidebar">
                <h4>Contents</h4>
                <Navigation posts={posts} />
            </div>
        );
    }
}

export default Sidebar;
