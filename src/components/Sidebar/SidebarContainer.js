import { connect } from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = (state) => ({
    posts: state.posts,
});

const SidebarContainer = connect(mapStateToProps)(Sidebar);
export default SidebarContainer;
