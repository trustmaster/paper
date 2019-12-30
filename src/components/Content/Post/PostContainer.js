import selectPostById from "./PostSelector";
import { connect } from "react-redux";
import Post from "./Post";
import { setPostTitle, setPostDate, setPostText } from "../../../state/actions";

const mapStateToProps = (state, ownProps) => {
    return {
        data: selectPostById(state, ownProps.id),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTitleChange: (text) => {
            dispatch(setPostTitle(ownProps.id, text));
        },
        onDateChange: (date) => {
            console.log(date);
            dispatch(setPostDate(ownProps.id, date));
        },
        onTextChange: (text) => {
            dispatch(setPostText(ownProps.id, text));
        },
    };
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
export default PostContainer;
