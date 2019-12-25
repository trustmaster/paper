import React from 'react';

import Post from './Post';
import Editable from './Editable';

class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <div className="Page">
                    <h1><Editable text={this.props.title} /></h1>
                    <p><em><Editable text={this.props.description} /></em></p>

                    {this.props.posts.map((post, index) => (
                        <Post
                            id={post.id}
                            key={post.id}
                            title={post.title}
                            date={post.date}
                            text={post.text}
                        />
                    ))}

                    <Post
                        title="New Post"
                        date={new Date()}
                        text="Inserting new content here..."
                    />
                    <button>Save</button>
                </div>
            </div>
        );
    }
}

export default Content;