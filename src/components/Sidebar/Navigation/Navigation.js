import React from 'react';

class Navigation extends React.Component {
    render() {
        const posts = this.props.posts;
        return (
            <ul>
                {posts.map((post) =>
                    <li key={post.id}>{post.title}</li>
                )}
                <li><button>+</button></li>
            </ul>
        )
    }
}

export default Navigation;
