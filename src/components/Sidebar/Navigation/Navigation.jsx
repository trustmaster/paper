import React from 'react';
import AddPostContainer from '../../Controls/AddPost/AddPostContainer';

const Navigation = ({ posts }) => (
    <ul>
        {posts.map((post) => <li key={post.id}>{post.title}</li>)}
        <li><AddPostContainer text="+" /></li>
    </ul>
);

export default Navigation;
