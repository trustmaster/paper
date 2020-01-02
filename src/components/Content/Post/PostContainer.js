import { connect } from 'react-redux';
import selectPostById from './PostSelectors';
import Post from './Post';
import { setPostTitle, setPostDate, setPostText } from '../../../state/actions';

const mapStateToProps = (state, ownProps) => ({
    data: selectPostById(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onTitleChange: (text) => {
        dispatch(setPostTitle(ownProps.id, text));
    },
    onDateChange: (date) => {
        dispatch(setPostDate(ownProps.id, date));
    },
    onTextChange: (text) => {
        dispatch(setPostText(ownProps.id, text));
    },
});

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
export default PostContainer;
