import React from 'react';

const Navigation = ({ posts }) => {
    return (
        <ul>
            {posts.map((post) =>
                <li key={post.id}>{post.title}</li>
            )}
            <li><button>+</button></li>
        </ul>
    );
}

export default Navigation;
