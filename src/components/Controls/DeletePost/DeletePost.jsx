import React from 'react';
import { connect } from 'react-redux';
import { openDialog } from '../../../state/actions';

function DeletePost({ text, onClick }) {
    return (
        <button type="button" className="DeletePost" onClick={onClick}>{text}</button>
    );
}

const mapStateToProps = (state, ownProps) => ({
    text: ownProps.text,
    visible: ownProps.visible,
});

const mapDispatchToProps = (dispatch, { id }) => ({
    onClick: () => {
        dispatch(openDialog(id, 'Confirm post removal', 'Are you sure you want to delete this post?'));
        // dispatch(deletePost(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);
