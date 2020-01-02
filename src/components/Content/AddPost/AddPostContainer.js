import { connect } from 'react-redux';
import { createPost, generateId } from '../../../state/actions';
import AddPost from './AddPost';

const mapStateToProps = (state, ownProps) => ({
    text: ownProps.text,
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
        const id = generateId(16);
        const date = new Date();
        console.log('Dispatching', id, date);
        dispatch(createPost(id, date));
    },
});

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);
export default AddPostContainer;
