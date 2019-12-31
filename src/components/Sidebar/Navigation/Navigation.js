import React from 'react';
import AddPostContainer from '../../Content/AddPost/AddPostContainer';

const Navigation = ({ posts }) => {
    return (
        <ul>
            {posts.map((post) =>
                <li key={post.id}>{post.title}</li>
            )}
            <li><AddPostContainer text="+" /></li>
        </ul>
    );
}

export default Navigation;
