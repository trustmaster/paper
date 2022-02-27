import React from 'react';
import { connect } from 'react-redux';
import { generateId, createPost } from '../../../state/actions';

function AddPost({ text, onClick }) {
    return (
        <button type="button" className="AddPost" onClick={onClick}>{text}</button>
    );
}

const mapStateToProps = (state, ownProps) => ({
    text: ownProps.text,
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
        const id = generateId(16);
        const date = new Date();
        dispatch(createPost(id, date));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
