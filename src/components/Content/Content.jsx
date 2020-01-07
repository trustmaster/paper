import React from 'react';
import Editable from './Editable';
import PostContainer from './Post/PostContainer';
import AddPostContainer from '../Controls/AddPost/AddPostContainer';

const Content = ({
    title,
    description,
    postIds,
    onTitleChange,
    onDescriptionChange,
}) => (
    <div className="Content">
        <div className="Page">
            <h1><Editable text={title} onChange={onTitleChange} /></h1>
            <div className="subtitle"><em><Editable text={description} onChange={onDescriptionChange} /></em></div>

            {postIds.map((id) => (
                <PostContainer key={id} id={id} />
            ))}

            <AddPostContainer text="Add Post" />
        </div>
    </div>
);

export default Content;
