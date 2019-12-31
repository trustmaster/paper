import { createPost, generateId } from "../../../state/actions";
import { connect } from "react-redux";
import AddPost from "./AddPost";

const mapStateToProps = (state, ownProps) => {
    return {
        text: ownProps.text,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            const id = generateId(16);
            const date = new Date();
            console.log('Dispatching', id, date);
            dispatch(createPost(id, date));
        }
    };
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);
export default AddPostContainer;