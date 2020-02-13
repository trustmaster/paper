import React from 'react';
import AddPost from '../../Controls/AddPost';
import NavItem from './NavItem/NavItem';

const Navigation = ({ posts }) => (
    <ul>
        {posts.map((post) => (<NavItem id={post.id} title={post.title} />))}
        <li><AddPost text="+" /></li>
    </ul>
);

export default Navigation;
