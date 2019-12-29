import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);
export default SidebarContainer;