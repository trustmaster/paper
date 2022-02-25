import React from 'react';
import AddPost from '../../Controls/AddPost';
import NavItem from './NavItem/NavItem';

function Navigation({ posts }) {
    return (
        <ul>
            <li><AddPost text="+" /></li>
            {posts.map((post) => (<NavItem id={post.id} title={post.title} />)).reverse()}
        </ul>
    );
}

export default Navigation;
