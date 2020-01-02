import React from 'react';
import Navigation from './Navigation';

const Sidebar = ({ posts }) => (
    <div className="Sidebar">
        <h4>Contents</h4>
        <Navigation posts={posts} />
    </div>
);

export default Sidebar;
