import { connect } from "react-redux";
import Content from "./Content";

const mapStateToProps = (state) => {
    return {
        title: state.title,
        description: state.description,
        posts: state.posts,
    };
}

const ContentContainer = connect(mapStateToProps)(Content);
export default ContentContainer;