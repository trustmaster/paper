import React from 'react';
import { connect } from 'react-redux';
import Editable from './Editable';
import Post from './Post';
import AddPost from '../Controls/AddPost';
import { setDescription, setTitle } from '../../state/actions';
import selectPostIds from './ContentSelectors';

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
                <Post key={id} id={id} />
            ))}

            <AddPost text="Add Post" />
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    title: state.title,
    description: state.description,
    postIds: selectPostIds(state),
});

const mapDispatchToProps = {
    onTitleChange: setTitle,
    onDescriptionChange: setDescription,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
