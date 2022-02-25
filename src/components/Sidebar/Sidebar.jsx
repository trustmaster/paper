import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';

function Sidebar({ posts }) {
    return (
        <div className="Sidebar">
            <h4>Contents</h4>
            <Navigation posts={posts} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: state.posts,
});

export default connect(mapStateToProps)(Sidebar);
