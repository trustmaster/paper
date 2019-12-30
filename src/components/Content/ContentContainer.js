import { connect } from "react-redux";
import Content from "./Content";
import selectPostIds from "./ContentSelector";

const mapStateToProps = (state) => {
    return {
        title: state.title,
        description: state.description,
        postIds: selectPostIds(state),
    };
}

const ContentContainer = connect(mapStateToProps)(Content);
export default ContentContainer;