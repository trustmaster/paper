import React from 'react';

import Post from './Post';
import Editable from './Editable';
import AddPost from './AddPost/AddPost';

class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <div className="Page">
                    <h1><Editable text={this.props.title} /></h1>
                    <p><em><Editable text={this.props.description} /></em></p>

                    {this.props.posts.map((post, index) => (
                        <Post data={post} />
                    ))}

                    <AddPost text="Add Post" />
                </div>
            </div>
        );
    }
}

export default Content;