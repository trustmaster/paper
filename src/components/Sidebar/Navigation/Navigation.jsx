import React from 'react';
import AddPostContainer from '../../Controls/AddPost/AddPostContainer';
import NavItem from './NavItem/NavItem';

const Navigation = ({ posts }) => (
    <ul>
        {posts.map((post) => (<NavItem id={post.id} title={post.title} />))}
        <li><AddPostContainer text="+" /></li>
    </ul>
);

export default Navigation;
