import React from 'react';
import { connect } from 'react-redux';
import Editable from './Editable';
import Post from './Post';
import AddPost from '../Controls/AddPost';
import { setDescription, setTitle } from '../../state/actions';
import selectPostIds from './ContentSelectors';

function Content({
    title,
    description,
    postIds,
    onTitleChange,
    onDescriptionChange,
}) {
    return (
        <div className="Content">
            <div className="Page">
                <h1><Editable text={title} onChange={onTitleChange} /></h1>
                <div className="subtitle"><em><Editable text={description} onChange={onDescriptionChange} /></em></div>

                <AddPost text="Add Post" />

                {postIds.map((id) => (
                    <Post key={id} id={id} />
                )).reverse()}
            </div>
        </div>
    );
}

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
