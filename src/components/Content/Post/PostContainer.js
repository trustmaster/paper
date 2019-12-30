import selectPostById from "./PostSelector";
import { connect } from "react-redux";
import Post from "./Post";

const mapStateToProps = (state, ownProps) => {
    return {
        data: selectPostById(state, ownProps.id),
    };
};

const PostContainer = connect(mapStateToProps)(Post);
export default PostContainer;
