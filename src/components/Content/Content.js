import React from 'react';
import Editable from './Editable';
import PostContainer from './Post/PostContainer';
import AddPostContainer from './AddPost/AddPostContainer';

const Content = ({ title, description, postIds }) => {
    return (
        <div className="Content">
            <div className="Page">
                <h1><Editable text={title} /></h1>
                <p><em><Editable text={description} /></em></p>

                {postIds.map((id) => (
                    <PostContainer key={id} id={id} />
                ))}

                <AddPostContainer text="Add Post" />
            </div>
        </div>
    );
}

export default Content;