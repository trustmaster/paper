import { connect } from 'react-redux';
import DeletePost from './DeletePost';
import { deletePost } from '../../../state/actions';

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

const DeletePostContainer = connect(mapStateToProps, mapDispatchToProps)(DeletePost);
export default DeletePostContainer;
