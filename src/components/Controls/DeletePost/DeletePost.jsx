import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../../state/actions';

const DeletePost = ({ text, onClick }) => (
    <button type="button" className="DeletePost" onClick={onClick}>{text}</button>
);

const mapStateToProps = (state, ownProps) => ({
    text: ownProps.text,
    visible: ownProps.visible,
});

const mapDispatchToProps = (dispatch, { id }) => ({
    onClick: () => {
        // TODO add confirmation
        dispatch(deletePost(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);
