import React from 'react';
import Post from './Post';
import Editable from './Editable';
import AddPost from './AddPost/AddPost';

const Content = ({ title, description, posts }) => {
    return (
        <div className="Content">
            <div className="Page">
                <h1><Editable text={title} /></h1>
                <p><em><Editable text={description} /></em></p>

                {posts.map((post, index) => (
                    <Post data={post} />
                ))}

                <AddPost text="Add Post" />
            </div>
        </div>
    );
}

export default Content;